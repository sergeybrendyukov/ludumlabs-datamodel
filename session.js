"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_type_validation_1 = require("@mojotech/json-type-validation");
var game_1 = require("./game");
;
exports.playerDecoder = json_type_validation_1.object({
    uid: json_type_validation_1.string(),
    score: json_type_validation_1.number(),
    challenged: json_type_validation_1.number(),
    correct: json_type_validation_1.number(),
    wrong: json_type_validation_1.number(),
});
var ESessionType;
(function (ESessionType) {
    ESessionType["SOLO"] = "solo";
    ESessionType["ONLINE"] = "online";
})(ESessionType = exports.ESessionType || (exports.ESessionType = {}));
;
;
exports.sessionDecoder = json_type_validation_1.object({
    id: json_type_validation_1.string(),
    title: json_type_validation_1.string(),
    owner: json_type_validation_1.string(),
    type: json_type_validation_1.oneOf(json_type_validation_1.constant(ESessionType.SOLO), json_type_validation_1.constant(ESessionType.ONLINE)),
    game: json_type_validation_1.string(),
    cols: json_type_validation_1.number(),
    rows: json_type_validation_1.number(),
    board: json_type_validation_1.array(game_1.clueDecoder),
    categories: json_type_validation_1.array(json_type_validation_1.string()),
    players: json_type_validation_1.array(exports.playerDecoder),
    host: json_type_validation_1.optional(json_type_validation_1.string()),
    created: json_type_validation_1.number(),
    started: json_type_validation_1.number(),
    finished: json_type_validation_1.number(),
});
;
exports.sessionCreateRequestDecoder = json_type_validation_1.object({
    title: json_type_validation_1.string(),
    type: json_type_validation_1.oneOf(json_type_validation_1.constant(ESessionType.SOLO), json_type_validation_1.constant(ESessionType.ONLINE)),
    game: json_type_validation_1.string(),
    cols: json_type_validation_1.number(),
    rows: json_type_validation_1.number(),
    board: json_type_validation_1.array(game_1.clueDecoder),
    categories: json_type_validation_1.array(json_type_validation_1.string()),
    players: json_type_validation_1.array(exports.playerDecoder),
});
;
exports.sessionCreateSoloRequestDecoder = json_type_validation_1.object({
    title: json_type_validation_1.string(),
    type: json_type_validation_1.constant(ESessionType.SOLO),
    game: json_type_validation_1.string(),
    cols: json_type_validation_1.number(),
    rows: json_type_validation_1.number(),
    board: json_type_validation_1.array(game_1.clueDecoder),
    categories: json_type_validation_1.array(json_type_validation_1.string()),
    players: json_type_validation_1.array(exports.playerDecoder),
});
;
exports.sessionCreateOnlineRequestDecoder = json_type_validation_1.object({
    title: json_type_validation_1.string(),
    type: json_type_validation_1.constant(ESessionType.ONLINE),
    game: json_type_validation_1.string(),
    cols: json_type_validation_1.number(),
    rows: json_type_validation_1.number(),
    board: json_type_validation_1.array(game_1.clueDecoder),
    categories: json_type_validation_1.array(json_type_validation_1.string()),
    players: json_type_validation_1.array(exports.playerDecoder),
});
;
exports.sessionUpdateDecoder = json_type_validation_1.object({
    title: json_type_validation_1.optional(json_type_validation_1.string()),
    owner: json_type_validation_1.optional(json_type_validation_1.string()),
    type: json_type_validation_1.optional(json_type_validation_1.oneOf(json_type_validation_1.constant(ESessionType.SOLO), json_type_validation_1.constant(ESessionType.ONLINE))),
    game: json_type_validation_1.optional(json_type_validation_1.string()),
    cols: json_type_validation_1.optional(json_type_validation_1.number()),
    rows: json_type_validation_1.optional(json_type_validation_1.number()),
    board: json_type_validation_1.optional(json_type_validation_1.array(game_1.clueDecoder)),
    categories: json_type_validation_1.optional(json_type_validation_1.array(json_type_validation_1.string())),
    players: json_type_validation_1.optional(json_type_validation_1.array(exports.playerDecoder)),
    host: json_type_validation_1.optional(json_type_validation_1.optional(json_type_validation_1.string())),
    created: json_type_validation_1.optional(json_type_validation_1.number()),
    started: json_type_validation_1.optional(json_type_validation_1.number()),
    finished: json_type_validation_1.optional(json_type_validation_1.number()),
});
//# sourceMappingURL=session.js.map