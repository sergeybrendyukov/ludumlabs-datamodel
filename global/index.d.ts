/**
 * index.ts: Global interface
 *
 */
import { Decoder } from '@mojotech/json-type-validation';
import { IApiResponseData } from '..';
export interface IGlobalPreloadResponseData extends IApiResponseData {
}
export declare const globalPreloadResponseDataDecoder: Decoder<IGlobalPreloadResponseData>;
