"use strict";
/**
 * index.ts: User interface
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
//
// Imports
//
var json_type_validation_1 = require("@mojotech/json-type-validation");
//
// Data model
//
var EUserRole;
(function (EUserRole) {
    EUserRole[EUserRole["USERROLE_UNKNOWN"] = 0] = "USERROLE_UNKNOWN";
    EUserRole[EUserRole["USERROLE_ADMIN"] = 1] = "USERROLE_ADMIN";
    EUserRole[EUserRole["USERROLE_BASIC"] = 2] = "USERROLE_BASIC";
    EUserRole[EUserRole["USERROLE_ADVANCED"] = 3] = "USERROLE_ADVANCED";
})(EUserRole = exports.EUserRole || (exports.EUserRole = {}));
;
;
exports.userDecoder = json_type_validation_1.object({
    id: json_type_validation_1.string(),
    email: json_type_validation_1.string(),
    name: json_type_validation_1.string(),
    role: json_type_validation_1.number(),
    expire: json_type_validation_1.number(),
    games: json_type_validation_1.number(),
    likes: json_type_validation_1.number(),
    dislikes: json_type_validation_1.number(),
    comments: json_type_validation_1.number(),
    sessions: json_type_validation_1.number(),
    watches: json_type_validation_1.number(),
    transfers: json_type_validation_1.number(),
    requests: json_type_validation_1.number(),
});
;
exports.gameSearchRequestDecoder = json_type_validation_1.object({});
;
exports.userCreateRequestDecoder = json_type_validation_1.object({
    id: json_type_validation_1.string(),
    email: json_type_validation_1.string(),
    name: json_type_validation_1.string(),
});
;
exports.userUpdateRequestDecoder = json_type_validation_1.object({
    email: json_type_validation_1.optional(json_type_validation_1.string()),
    name: json_type_validation_1.optional(json_type_validation_1.string()),
    role: json_type_validation_1.optional(json_type_validation_1.number()),
    expire: json_type_validation_1.optional(json_type_validation_1.number()),
    games: json_type_validation_1.optional(json_type_validation_1.number()),
    likes: json_type_validation_1.optional(json_type_validation_1.number()),
    dislikes: json_type_validation_1.optional(json_type_validation_1.number()),
    comments: json_type_validation_1.optional(json_type_validation_1.number()),
    sessions: json_type_validation_1.optional(json_type_validation_1.number()),
    watches: json_type_validation_1.optional(json_type_validation_1.number()),
    transfers: json_type_validation_1.optional(json_type_validation_1.number()),
    requests: json_type_validation_1.optional(json_type_validation_1.number()),
});
//# sourceMappingURL=index.js.map