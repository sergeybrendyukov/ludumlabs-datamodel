/**
 * auth.ts: Auth interface
 *
 */


//
// Imports
//

import {
    Decoder,
    object, string, optional, boolean,
} from '@mojotech/json-type-validation';

import { IApiRequest } from '.';


//
// Api request
//

export interface ISignUpRequest extends IApiRequest {
    id: string,
    email: string,
    password: string,
    name: string,
    photo?: string,
};

export const signUpRequestDecoder: Decoder<ISignUpRequest> = object({
    id: string(),
    email: string(),
    password: string(),
    name: string(),
    photo: optional(string()),
});
