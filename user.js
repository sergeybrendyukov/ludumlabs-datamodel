"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_type_validation_1 = require("@mojotech/json-type-validation");
var EUserRole;
(function (EUserRole) {
    EUserRole[EUserRole["USERROLE_UNKNOWN"] = 0] = "USERROLE_UNKNOWN";
    EUserRole[EUserRole["USERROLE_BASIC"] = 1] = "USERROLE_BASIC";
    EUserRole[EUserRole["USERROLE_ADVANCED"] = 2] = "USERROLE_ADVANCED";
    EUserRole[EUserRole["USERROLE_ADMIN"] = 3] = "USERROLE_ADMIN";
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
exports.userCreateRequestDecoder = json_type_validation_1.object({
    id: json_type_validation_1.string(),
    email: json_type_validation_1.string(),
    name: json_type_validation_1.string(),
});
;
exports.userUpdateDecoder = json_type_validation_1.object({
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
;
exports.userUpdateRequestDecoder = json_type_validation_1.object({
    name: json_type_validation_1.optional(json_type_validation_1.string()),
});
//# sourceMappingURL=user.js.map