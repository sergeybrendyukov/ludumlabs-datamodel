import { Decoder } from '@mojotech/json-type-validation';
import { IApiRequest } from '..';
export declare enum EUserRole {
    USERROLE_UNKNOWN = 0,
    USERROLE_ADMIN = 1,
    USERROLE_BASIC = 2,
    USERROLE_ADVANCED = 3
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
export interface IUserUpdateRequest extends IApiRequest {
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
export declare const userUpdateRequestDecoder: Decoder<IUserUpdateRequest>;
