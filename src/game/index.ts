/**
 * index.ts: Game interface
 *
 */


//
// Imports
//

import {
    Decoder,
    object, string, optional, number, boolean, array, constant,
} from '@mojotech/json-type-validation';

import { IApiRequest, IApiResponseData, INumberRange, numberRangeDecoder } from '..';


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
});

export interface IGame {
    id: string, // Unique ID

    //
    // Primary Data
    //
    title: string,          // Title
    subtitle: string,       // Subtitle
    author: string,         // Author ID
    owner: string,          // Owner ID
    category: string,       // Category

    //
    // Count data
    //
    stars: number,      // Star Rating on a scale of 0 to 10 (half star enabled)
    requests: number,   // Request count
    likes: number,      // Like count
    dislikes: number,   // Dislike count
    comments: number,   // Comment count

    //
    // Timestamps
    //
    created: number,    // Created timestamp
    edited: number,     // Last edited timestamp


    //
    // Clues
    //
    clues: Array<IClue>,    // Clue Array

    //
    // Customization
    //

    // TODO: Add more customization fields here
};

export const gameDecoder: Decoder<IGame> = object({
    id: string(),
    title: string(),
    subtitle: string(),
    author: string(),
    owner: string(),
    category: string(),
    stars: number(),
    requests: number(),
    likes: number(),
    dislikes: number(),
    comments: number(),
    created: number(),
    edited: number(),
    clues: array<IClue>(clueDecoder),
});

export interface IGameSearchResult extends IGame {
    clues: [],
};

export const gameSearchResultDecoder: Decoder<IGameSearchResult> = object({
    id: string(),
    title: string(),
    subtitle: string(),
    author: string(),
    owner: string(),
    category: string(),
    stars: number(),
    requests: number(),
    likes: number(),
    dislikes: number(),
    comments: number(),
    created: number(),
    edited: number(),
    clues: constant([]),
});


//
// Api request
//

export interface IGameSearchRequest extends IApiRequest {
    title?: string,
    subtitle?: string,
    author?: string,
    owner?: string,
    category?: string,
    stars?: INumberRange,
    requests?: INumberRange,
    likes?: INumberRange,
    dislikes?: INumberRange,
    comments?: INumberRange,
    created?: INumberRange,
    edited?: INumberRange,
    clue?: string,
};

export const gameSearchRequestDecoder: Decoder<IGameSearchRequest> = object({
    title: optional(string()),
    subtitle: optional(string()),
    author: optional(string()),
    owner: optional(string()),
    category: optional(string()),
    stars: optional(numberRangeDecoder),
    requests: optional(numberRangeDecoder),
    clue: optional(string()),
});

export interface IGameCreateRequest extends IApiRequest {
    title: string,
    subtitle: string,
    author: string,
    owner: string,
    category: string,
    clues: Array<IClue>,
};

export const gameCreateRequestDecoder: Decoder<IGameCreateRequest> = object({
    title: string(),
    subtitle: string(),
    author: string(),
    owner: string(),
    category: string(),
    clues: array(clueDecoder),
});

export interface IGameUpdateRequest extends IApiRequest {
    id?: string,
    title?: string,
    subtitle?: string,
    author?: string,
    owner?: string,
    category?: string,
    stars?: number,
    requests?: number,
    likes?: number,
    dislikes?: number,
    comments?: number,
    clues?: Array<IClue>,
};

export const gameUpdateRequestDecoder: Decoder<IGameUpdateRequest> = object({
    id: optional(string()),
    title: optional(string()),
    subtitle: optional(string()),
    author: optional(string()),
    owner: optional(string()),
    category: optional(string()),
    stars: optional(number()),
    requests: optional(number()),
    likes: optional(number()),
    dislikes: optional(number()),
    comments: optional(number()),
    clues: optional(array(clueDecoder)),
});
