/**
 * index.ts: Global interface
 *
 */


//
// Imports
//

import {
    Decoder,
    object, string, optional, number, boolean, array,
} from '@mojotech/json-type-validation';

import { IApiRequest, IApiResponseData } from '..';


//
// Api response
//

export interface IGlobalPreloadResponseData extends IApiResponseData {

};

export const globalPreloadResponseDataDecoder: Decoder<IGlobalPreloadResponseData> = object({

});