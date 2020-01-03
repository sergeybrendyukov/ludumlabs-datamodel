/**
 * session.ts: Session interface
 *
 */


//
// Imports
//

import {
    Decoder,
    object, string, number, array, oneOf, constant, optional,
} from '@mojotech/json-type-validation';

import { IApiRequest } from '.';

import { IClue, clueDecoder } from './game';


//
// Data model
//

export interface IPlayer {
    uid: string,        // User ID

    score: number,      // Game score
    challenged: number, // Number of challenged question
    correct: number,    // Number of correct answer
    wrong: number,      // Number of wrong answer 
};

export const playerDecoder: Decoder<IPlayer> = object({
    uid: string(),
    score: number(),
    challenged: number(),
    correct: number(),
    wrong: number(),
});

export enum ESessionType {
    SOLO = 'solo',
    ONLINE = 'online',
};

export interface ISession {
    id: string,             // Unique ID

    // Primary
    title: string,          // Session title

    // User
    owner: string,          // Owner ID

    // Metadata
    type: ESessionType,     // Session type
    game: string,           // Base Game ID
    cols: number,           // Number of columns
    rows: number,           // Number of rows

    // Clues
    board: IClue[],         // Clues
    categories: string[],   // Category strings

    // Players
    players: IPlayer[],     // Players

    // Online
    host?: string,          // Host UID

    // Timestamps
    created: number,        // Creation timestamp
    started: number,        // Session start timestamp
    finished: number,       // Session finish timestamp
};

export const sessionDecoder: Decoder<ISession> = object({
    id: string(),
    title: string(),
    owner: string(),
    type: oneOf(constant(ESessionType.SOLO), constant(ESessionType.ONLINE)),
    game: string(),
    cols: number(),
    rows: number(),
    board: array(clueDecoder),
    categories: array(string()),
    players: array(playerDecoder),
    host: optional(string()),
    created: number(),
    started: number(),
    finished: number(),
});


//
// Api request
//

export interface ISessionCreateRequest extends IApiRequest {
    title: string,
    type: ESessionType,
    game: string,
    cols: number,
    rows: number,
    board: IClue[],
    categories: string[],
    players: IPlayer[],
};

export const sessionCreateRequestDecoder: Decoder<ISessionCreateRequest> = object({
    title: string(),
    type: oneOf(constant(ESessionType.SOLO), constant(ESessionType.ONLINE)),
    game: string(),
    cols: number(),
    rows: number(),
    board: array(clueDecoder),
    categories: array(string()),
    players: array(playerDecoder),
});

export interface ISessionCreateSoloRequest extends ISessionCreateRequest {
    type: ESessionType.SOLO,
};

export const sessionCreateSoloRequestDecoder: Decoder<ISessionCreateSoloRequest> = object({
    title: string(),
    type: constant(ESessionType.SOLO),
    game: string(),
    cols: number(),
    rows: number(),
    board: array(clueDecoder),
    categories: array(string()),
    players: array(playerDecoder),
});

export interface ISessionCreateOnlineRequest extends ISessionCreateRequest {
    type: ESessionType.ONLINE,
};

export const sessionCreateOnlineRequestDecoder: Decoder<ISessionCreateOnlineRequest> = object({
    title: string(),
    type: constant(ESessionType.ONLINE),
    game: string(),
    cols: number(),
    rows: number(),
    board: array(clueDecoder),
    categories: array(string()),
    players: array(playerDecoder),
});

export interface ISessionUpdate {
    title?: string,
    owner?: string,
    type?: ESessionType,
    game?: string,
    cols?: number,
    rows?: number,
    board?: IClue[],
    categories?: string[],
    players?: IPlayer[],
    host?: string,
    created?: number,
    started?: number,
    finished?: number,
};

export const sessionUpdateDecoder: Decoder<ISessionUpdate> = object({
    title: optional(string()),
    owner: optional(string()),
    type: optional(oneOf(constant(ESessionType.SOLO), constant(ESessionType.ONLINE))),
    game: optional(string()),
    cols: optional(number()),
    rows: optional(number()),
    board: optional(array(clueDecoder)),
    categories: optional(array(string())),
    players: optional(array(playerDecoder)),
    host: optional(optional(string())),
    created: optional(number()),
    started: optional(number()),
    finished: optional(number()),
});
