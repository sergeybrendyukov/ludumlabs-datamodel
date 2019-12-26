import { Decoder } from '@mojotech/json-type-validation';
import { IApiRequest } from '.';
import { IClue } from './game';
export interface IPlayer {
    uid: string;
    name: string;
    avatar: string;
    score: number;
    challenged: number;
    correct: number;
    wrong: number;
}
export declare const playerDecoder: Decoder<IPlayer>;
export declare enum ESessionType {
    SOLO = "solo",
    ONLINE = "online"
}
export interface ISession {
    id: string;
    title: string;
    type: ESessionType;
    game: string;
    cols: number;
    rows: number;
    board: IClue[];
    categories: string[];
    players: IPlayer[];
    host?: string;
    created: number;
    started: number;
    finished: number;
}
export declare const sessionDecoder: Decoder<ISession>;
export interface ISessionCreateRequest extends IApiRequest {
    title: string;
    type: ESessionType;
    game: string;
    cols: number;
    rows: number;
    board: IClue[];
    categories: string[];
    players: IPlayer[];
}
export declare const sessionCreateRequestDecoder: Decoder<ISessionCreateRequest>;
export interface ISessionCreateSoloRequest extends ISessionCreateRequest {
    type: ESessionType.SOLO;
}
export declare const sessionCreateSoloRequestDecoder: Decoder<ISessionCreateSoloRequest>;
export interface ISessionCreateOnlineRequest extends ISessionCreateRequest {
    type: ESessionType.ONLINE;
}
export declare const sessionCreateOnlineRequestDecoder: Decoder<ISessionCreateOnlineRequest>;
export interface ISessionUpdate {
    title?: string;
    type?: ESessionType;
    game?: string;
    cols?: number;
    rows?: number;
    board?: IClue[];
    categories?: string[];
    players?: IPlayer[];
    host?: string;
    created?: number;
    started?: number;
    finished?: number;
}
export declare const sessionUpdateDecoder: Decoder<ISessionUpdate>;
