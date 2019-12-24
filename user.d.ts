import { Decoder } from '@mojotech/json-type-validation';
import { IApiRequest } from '.';
export declare enum EUserRole {
    USERROLE_UNKNOWN = 0,
    USERROLE_BASIC = 1,
    USERROLE_ADVANCED = 2,
    USERROLE_ADMIN = 3
}
export interface IUser {
    id: string;
    email: string;
    name: string;
    role: EUserRole;
    expire: number;
    games: number;
    likes: number;
    dislikes: number;
    comments: number;
    sessions: number;
    watches: number;
    transfers: number;
    requests: number;
}
export declare const userDecoder: Decoder<IUser>;
export interface IUserCreateRequest extends IApiRequest {
    id: string;
    email: string;
    name: string;
}
export declare const userCreateRequestDecoder: Decoder<IUserCreateRequest>;
export interface IUserUpdate extends IApiRequest {
    email?: string;
    name?: string;
    role?: EUserRole;
    expire?: number;
    games?: number;
    likes?: number;
    dislikes?: number;
    comments?: number;
    sessions?: number;
    watches?: number;
    transfers?: number;
    requests?: number;
}
export declare const userUpdateDecoder: Decoder<IUserUpdate>;
export interface IUserUpdateRequest extends IApiRequest {
    name?: string;
}
export declare const userUpdateRequestDecoder: Decoder<IUserUpdateRequest>;