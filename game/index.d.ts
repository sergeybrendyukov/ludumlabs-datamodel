import { Decoder } from '@mojotech/json-type-validation';
import { IApiRequest } from '..';
export interface IClue {
    question: {
        text: string;
        image?: string;
        audio?: string;
        video?: string;
    };
    answer: {
        text: string;
    };
    timelimit: number;
    category: number;
}
export declare const clueDecoder: Decoder<IClue>;
export interface IGame {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    owner: string;
    category: string;
    stars: number;
    requests: number;
    likes: number;
    dislikes: number;
    comments: number;
    created: number;
    edited: number;
    clues: IClue[];
}
export declare const gameDecoder: Decoder<IGame>;
export interface IGameCreateRequest extends IApiRequest {
    title: string;
    subtitle: string;
    category: string;
    clues: Array<IClue>;
}
export declare const gameCreateRequestDecoder: Decoder<IGameCreateRequest>;
export interface IGameUpdate {
    title?: string;
    subtitle?: string;
    author?: string;
    owner?: string;
    category?: string;
    stars?: number;
    requests?: number;
    likes?: number;
    dislikes?: number;
    comments?: number;
    clues?: Array<IClue>;
}
export declare const gameUpdateDecoder: Decoder<IGameUpdate>;
export interface IGameUpdateRequest extends IApiRequest {
    title?: string;
    subtitle?: string;
    category?: string;
    clues?: Array<IClue>;
}
export declare const gameUpdateRequestDecoder: Decoder<IGameUpdateRequest>;
