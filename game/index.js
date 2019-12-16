"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var json_type_validation_1 = require("@mojotech/json-type-validation");
var __1 = require("..");
;
exports.clueDecoder = json_type_validation_1.object({
    question: json_type_validation_1.object({
        text: json_type_validation_1.string(),
        image: json_type_validation_1.optional(json_type_validation_1.string()),
        audio: json_type_validation_1.optional(json_type_validation_1.string()),
        video: json_type_validation_1.optional(json_type_validation_1.string()),
    }),
    answer: json_type_validation_1.object({
        text: json_type_validation_1.string(),
    }),
    timelimit: json_type_validation_1.number(),
    category: json_type_validation_1.number(),
});
;
exports.gameDecoder = json_type_validation_1.object({
    id: json_type_validation_1.string(),
    title: json_type_validation_1.string(),
    subtitle: json_type_validation_1.string(),
    author: json_type_validation_1.string(),
    owner: json_type_validation_1.string(),
    category: json_type_validation_1.string(),
    stars: json_type_validation_1.number(),
    requests: json_type_validation_1.number(),
    likes: json_type_validation_1.number(),
    dislikes: json_type_validation_1.number(),
    comments: json_type_validation_1.number(),
    created: json_type_validation_1.number(),
    edited: json_type_validation_1.number(),
    clues: json_type_validation_1.array(exports.clueDecoder),
});
;
exports.gameSearchResultDecoder = json_type_validation_1.object({
    id: json_type_validation_1.string(),
    title: json_type_validation_1.string(),
    subtitle: json_type_validation_1.string(),
    author: json_type_validation_1.string(),
    owner: json_type_validation_1.string(),
    category: json_type_validation_1.string(),
    stars: json_type_validation_1.number(),
    requests: json_type_validation_1.number(),
    likes: json_type_validation_1.number(),
    dislikes: json_type_validation_1.number(),
    comments: json_type_validation_1.number(),
    created: json_type_validation_1.number(),
    edited: json_type_validation_1.number(),
    clues: json_type_validation_1.tuple([exports.clueDecoder, exports.clueDecoder, exports.clueDecoder]),
});
exports.extractSearchResultFromGame = function (game) {
    return __assign(__assign({}, game), { clues: [
            game.clues[0],
            game.clues[1],
            game.clues[2],
        ] });
};
;
exports.gameSearchRequestDecoder = json_type_validation_1.object({
    title: json_type_validation_1.optional(json_type_validation_1.string()),
    subtitle: json_type_validation_1.optional(json_type_validation_1.string()),
    author: json_type_validation_1.optional(json_type_validation_1.string()),
    owner: json_type_validation_1.optional(json_type_validation_1.string()),
    category: json_type_validation_1.optional(json_type_validation_1.string()),
    stars: json_type_validation_1.optional(__1.numberRangeDecoder),
    requests: json_type_validation_1.optional(__1.numberRangeDecoder),
    clue: json_type_validation_1.optional(json_type_validation_1.string()),
});
;
exports.gameCreateRequestDecoder = json_type_validation_1.object({
    title: json_type_validation_1.string(),
    subtitle: json_type_validation_1.string(),
    author: json_type_validation_1.string(),
    owner: json_type_validation_1.string(),
    category: json_type_validation_1.string(),
    clues: json_type_validation_1.array(exports.clueDecoder),
});
;
exports.gameUpdateRequestDecoder = json_type_validation_1.object({
    id: json_type_validation_1.optional(json_type_validation_1.string()),
    title: json_type_validation_1.optional(json_type_validation_1.string()),
    subtitle: json_type_validation_1.optional(json_type_validation_1.string()),
    author: json_type_validation_1.optional(json_type_validation_1.string()),
    owner: json_type_validation_1.optional(json_type_validation_1.string()),
    category: json_type_validation_1.optional(json_type_validation_1.string()),
    stars: json_type_validation_1.optional(json_type_validation_1.number()),
    requests: json_type_validation_1.optional(json_type_validation_1.number()),
    likes: json_type_validation_1.optional(json_type_validation_1.number()),
    dislikes: json_type_validation_1.optional(json_type_validation_1.number()),
    comments: json_type_validation_1.optional(json_type_validation_1.number()),
    clues: json_type_validation_1.optional(json_type_validation_1.array(exports.clueDecoder)),
});
//# sourceMappingURL=index.js.map