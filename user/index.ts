/**
 * index.ts: User interface
 *
 */


//
// Imports
//

import {
    Decoder,
    object, string, optional, number, boolean,
} from '@mojotech/json-type-validation';

import { IApiRequest, IApiResponseData } from '..';


//
// Data model
//

export enum EUserRole {
    USERROLE_UNKNOWN    = 0,
    USERROLE_ADMIN      = 1,    // Administrator
    USERROLE_BASIC      = 2,    // Basic User
    USERROLE_ADVANCED   = 3,    // Advanced User
};

export interface IUser {
    id: string,     // Unique ID

    //
    // Primary Data
    //
    email: string,      // Email
    name: string,       // Name

    //
    // User role data
    //
    role: EUserRole,    // User role type
    expire: number,     // Due date timestamp

    //
    // Count data
    //
    games: number,      // Games owned
    likes: number,      // Likes total of his game
    dislikes: number,   // Dislikes total of his game
    comments: number,   // Comments wrote
    sessions: number,   // Sessions played
    watches: number,    // Games being watched by him
    transfers: number,  // Games transfered to other user
    requests: number,   // Requested times
};

export const userDecoder: Decoder<IUser> = object({
    id: string(),
    email: string(),
    name: string(),
    role: number(),
    expire: number(),
    games: number(),
    likes: number(),
    dislikes: number(),
    comments: number(),
    sessions: number(),
    watches: number(),
    transfers: number(),
    requests: number(),
});


//
// Api request
//

export interface IUserSearchRequest extends IApiRequest {

};

export const gameSearchRequestDecoder: Decoder<IUserSearchRequest> = object({

});

export interface IUserCreateRequest extends IApiRequest {
    id: string,
    email: string,
    name: string,
};

export const userCreateRequestDecoder: Decoder<IUserCreateRequest> = object({
    id: string(),
    email: string(),
    name: string(),
});

export interface IUserUpdateRequest extends IApiRequest {
    email?: string,
    name?: string,
    role?: EUserRole,
    expire?: number,
    games?: number,
    likes?: number,
    dislikes?: number,
    comments?: number,
    sessions?: number,
    watches?: number,
    transfers?: number,
    requests?: number,
};

export const userUpdateRequestDecoder: Decoder<IUserUpdateRequest> = object({
    email: optional(string()),
    name: optional(string()),
    role: optional(number()),
    expire: optional(number()),
    games: optional(number()),
    likes: optional(number()),
    dislikes: optional(number()),
    comments: optional(number()),
    sessions: optional(number()),
    watches: optional(number()),
    transfers: optional(number()),
    requests: optional(number()),
});
