/**
 * index.ts: Main entry point
 *
 */


//
// Imports
//

import { Decoder, object, optional, number } from '@mojotech/json-type-validation';


//
// Interfaces
//

export enum EErrorCode {
    ERROR_UNKNOWN                       = 'ERROR_UNKNOWN',                     // Unknown Error

    ERROR_API_GENERAL                   = 'ERROR_API_GENERAL',                 // General Error
    ERROR_API_GENERAL_FAILURE           = 'ERROR_API_GENERAL_FAILURE',          // API General Failure
    ERROR_API_GENERAL_BADREQUEST        = 'ERROR_API_GENERAL_BADREQUEST',       // API Bad Request
    ERROR_API_GENERAL_DECODEFAIL        = 'ERROR_API_GENERAL_DECODEFAIL',       // Decoder failure

    ERROR_API_AUTH                      = 'ERROR_API_AUTH',                    // Auth Error
    ERROR_API_AUTH_NONAUTHORIZED        = 'ERROR_API_AUTH_NONAUTHORIZED',       // Non-authorized call
    ERROR_API_AUTH_DUPLICATEID          = 'ERROR_API_AUTH_DUPLICATEID',         // Requested User ID already exists
    ERROR_API_AUTH_NOTENOUGHPRIVILEGE   = 'ERROR_API_AUTH_NOTENOUGHPRIVILEGE',  // Not enough privilegee to do this operation
    ERROR_API_AUTH_NOTENOUGHOWNERSHIP   = 'ERROR_API_AUTH_NOTENOUGHOWNERSHIP',  // Not enough ownership to view this data
    ERROR_API_AUTH_BADMANAGEMODE        = 'ERROR_API_AUTH_BADMANAGEMODE',       // Bad mode param for user management 

    ERROR_API_DB                        = 'ERROR_API_DB',                      // Database Error
    ERROR_API_DB_NONEXISTDOC            = 'ERROR_API_DB_NONEXISTDOC',           // Non-existing document
    ERROR_API_DB_EMPTYUPDATE            = 'ERROR_API_DB_EMPTYUPDATE',           // Empty update request
};

export interface IApiError {
    status?: number,
    code: EErrorCode,
    message: string,
    extra?: any,
};

export interface IApiRequest {
    // REF: This interface should be empty
};

export interface IApiResponse {
    success: boolean,
};

export interface IApiResponseData {
    // REF: This interface should be empty unless you want some common fields for all across the endpoint successful response
};

export interface IApiSuccessResponse extends IApiResponse {
    success: true,
    data?: any,
};

export interface IApiErrorResponse extends IApiResponse {
    success: false,
    error: IApiError,
};
