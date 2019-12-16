import { Decoder } from "@mojotech/json-type-validation";
export declare enum EErrorCode {
    ERROR_UNKNOWN = "ERROR_UNKNOWN",
    ERROR_API_GENERAL = "ERROR_API_GENERAL",
    ERROR_API_GENERAL_FAILURE = "ERROR_API_GENERAL_FAILURE",
    ERROR_API_GENERAL_BADREQUEST = "ERROR_API_GENERAL_BADREQUEST",
    ERROR_API_GENERAL_DECODEFAIL = "ERROR_API_GENERAL_DECODEFAIL",
    ERROR_API_AUTH = "ERROR_API_AUTH",
    ERROR_API_AUTH_NONAUTHORIZED = "ERROR_API_AUTH_NONAUTHORIZED",
    ERROR_API_AUTH_DUPLICATEID = "ERROR_API_AUTH_DUPLICATEID",
    ERROR_API_DB = "ERROR_API_DB",
    ERROR_API_DB_NONEXISTDOC = "ERROR_API_DB_NONEXISTDOC",
    ERROR_API_DB_EMPTYUPDATE = "ERROR_API_DB_EMPTYUPDATE"
}
export interface IApiError {
    status?: number;
    code: EErrorCode;
    message: string;
    extra?: any;
}
export interface IApiRequest {
}
export interface IApiResponse {
    success: boolean;
}
export interface IApiResponseData {
}
export interface IApiSuccessResponse extends IApiResponse {
    success: true;
    data?: any;
}
export interface IApiErrorResponse extends IApiResponse {
    success: false;
    error: IApiError;
}
export interface INumberRange {
    from?: number;
    to?: number;
}
export declare const numberRangeDecoder: Decoder<INumberRange>;
