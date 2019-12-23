import { Decoder } from '@mojotech/json-type-validation';
import { IApiRequest } from '.';
export interface ISignUpRequest extends IApiRequest {
    id: string;
    email: string;
    password: string;
    name: string;
    photo?: string;
}
export declare const signUpRequestDecoder: Decoder<ISignUpRequest>;
