/**
 * user.ts: User interface
 *
 */


//
// Imports
//

import {
    Decoder,
    object, string, optional, number, boolean,
} from '@mojotech/json-type-validation';

import { IApiRequest } from '.';


//
// Data model
//

export enum EUserRole {
    USERROLE_UNKNOWN    = 0,
    USERROLE_BASIC      = 1,    // Basic User
    USERROLE_ADVANCED   = 2,    // Advanced User
    USERROLE_ADMIN      = 3,    // Administrator
};

export interface IUser {
    id: string,     // Unique ID

    //
    // Primary Data
    //
    email: string,      // Email

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

export interface IUserCreateRequest extends IApiRequest {
    id: string,
    email: string,
};

export const userCreateRequestDecoder: Decoder<IUserCreateRequest> = object({
    id: string(),
    email: string(),
});

export interface IUserUpdate extends IApiRequest {
    email?: string,
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

export const userUpdateDecoder: Decoder<IUserUpdate> = object({
    email: optional(string()),
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
