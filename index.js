"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_type_validation_1 = require("@mojotech/json-type-validation");
var EErrorCode;
(function (EErrorCode) {
    EErrorCode["ERROR_UNKNOWN"] = "ERROR_UNKNOWN";
    EErrorCode["ERROR_API_GENERAL"] = "ERROR_API_GENERAL";
    EErrorCode["ERROR_API_GENERAL_FAILURE"] = "ERROR_API_GENERAL_FAILURE";
    EErrorCode["ERROR_API_GENERAL_BADREQUEST"] = "ERROR_API_GENERAL_BADREQUEST";
    EErrorCode["ERROR_API_GENERAL_DECODEFAIL"] = "ERROR_API_GENERAL_DECODEFAIL";
    EErrorCode["ERROR_API_AUTH"] = "ERROR_API_AUTH";
    EErrorCode["ERROR_API_AUTH_NONAUTHORIZED"] = "ERROR_API_AUTH_NONAUTHORIZED";
    EErrorCode["ERROR_API_AUTH_DUPLICATEID"] = "ERROR_API_AUTH_DUPLICATEID";
    EErrorCode["ERROR_API_DB"] = "ERROR_API_DB";
    EErrorCode["ERROR_API_DB_NONEXISTDOC"] = "ERROR_API_DB_NONEXISTDOC";
    EErrorCode["ERROR_API_DB_EMPTYUPDATE"] = "ERROR_API_DB_EMPTYUPDATE";
})(EErrorCode = exports.EErrorCode || (exports.EErrorCode = {}));
;
;
;
;
;
;
;
;
exports.numberRangeDecoder = json_type_validation_1.object({
    from: json_type_validation_1.optional(json_type_validation_1.number()),
    to: json_type_validation_1.optional(json_type_validation_1.number()),
});
//# sourceMappingURL=index.js.map