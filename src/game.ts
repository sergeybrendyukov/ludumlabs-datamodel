/**
 * game.ts: Game interface
 *
 */


//
// Imports
//

import {
    Decoder,
    object, string, optional, number, array,
} from '@mojotech/json-type-validation';

import { IApiRequest } from '.';


//
// Data model
//

export interface IClue {
    question: { // Question
        text: string,   // Question text
        image?: string, // Image URL
        audio?: string, // Audio URL
        video?: string, // Video URL
    },
    answer: {   // Answer
        text: string,   // Answer text
        // image?: string, // Image URL
        // audio?: string, // Audio URL
        // video?: string, // Video URL
        // REF: Media for answer is deprecated
    },
    timelimit: number,  // Time limit in seconds
    category: number,   // Category ID (range 0-5)
    weight: number,     // Clue weight or difficulty
};

export const clueDecoder: Decoder<IClue> = object({
    question: object({
        text: string(),
        image: optional(string()),
        audio: optional(string()),
        video: optional(string()),
    }),
    answer: object({
        text: string(),
    }),
    timelimit: number(),
    category: number(),
    weight: number(),
});

export interface IGame {
    id: string,             // Unique ID

    // Primary
    title: string,          // Title
    subtitle: string,       // Subtitle
    tags: string,           // Tags

    // Clues
    clues: IClue[],         // Clue array
    categories: string[],   // Category string array

    // User
    author: string,         // Author ID
    owner: string,          // Owner ID

    // Count
    stars: number,          // Star Rating on a scale of 0 to 10 (half star enabled)
    requests: number,       // Request count
    likes: number,          // Like count
    dislikes: number,       // Dislike count
    comments: number,       // Comment count
    sessions: number,       // Sessions played

    // Timestamps
    created: number,        // Created timestamp
    edited: number,         // Last edited timestamp

    // Customization
    // TODO: Add more customization fields here
};

export const gameDecoder: Decoder<IGame> = object({
    id: string(),
    title: string(),
    subtitle: string(),
    tags: string(),
    clues: array(clueDecoder),
    categories: array(string()),
    author: string(),
    owner: string(),
    stars: number(),
    requests: number(),
    likes: number(),
    dislikes: number(),
    comments: number(),
    created: number(),
    edited: number(),
    sessions: number(),
});


//
// Api request
//

export interface IGameCreateRequest extends IApiRequest {
    title: string,
    subtitle: string,
    tags: string,
    clues: IClue[],
    categories: string[],
};

export const gameCreateRequestDecoder: Decoder<IGameCreateRequest> = object({
    title: string(),
    subtitle: string(),
    tags: string(),
    clues: array(clueDecoder),
    categories: array(string()),
});

export interface IGameUpdate {
    title?: string,
    subtitle?: string,
    tags?: string,
    clues?: IClue[],
    categories?: string[],
    author?: string,
    owner?: string,
    stars?: number,
    requests?: number,
    likes?: number,
    dislikes?: number,
    comments?: number,
    sessions?: number,
};

export const gameUpdateDecoder: Decoder<IGameUpdate> = object({
    title: optional(string()),
    subtitle: optional(string()),
    tags: optional(string()),
    clues: optional(array(clueDecoder)),
    categories: optional(array(string())),
    author: optional(string()),
    owner: optional(string()),
    stars: optional(number()),
    requests: optional(number()),
    likes: optional(number()),
    dislikes: optional(number()),
    comments: optional(number()),
    sessions: optional(number()),
});

export interface IGameUpdateRequest extends IApiRequest {
    title?: string,
    subtitle?: string,
    tags?: string,
    clues?: IClue[],
    categories?: string[],
};

export const gameUpdateRequestDecoder: Decoder<IGameUpdateRequest> = object({
    title: optional(string()),
    subtitle: optional(string()),
    tags: optional(string()),
    clues: optional(array(clueDecoder)),
    categories: optional(array(string())),
});
