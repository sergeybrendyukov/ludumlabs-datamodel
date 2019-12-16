"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_type_validation_1 = require("@mojotech/json-type-validation");
;
exports.signUpRequestDecoder = json_type_validation_1.object({
    id: json_type_validation_1.string(),
    email: json_type_validation_1.string(),
    password: json_type_validation_1.string(),
    name: json_type_validation_1.string(),
    photo: json_type_validation_1.optional(json_type_validation_1.string()),
});
//# sourceMappingURL=index.js.map