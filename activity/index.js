"use strict";
/**
 * index.ts: Activity interface
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
//
// Data model
//
var EActivityType;
(function (EActivityType) {
    EActivityType[EActivityType["ACTIVITY_PRIMARY"] = 100] = "ACTIVITY_PRIMARY";
    EActivityType[EActivityType["ACTIVITY_AUTH"] = 200] = "ACTIVITY_AUTH";
    EActivityType[EActivityType["ACTIVITY_USER"] = 300] = "ACTIVITY_USER";
    EActivityType[EActivityType["ACTIVITY_NOTIF"] = 400] = "ACTIVITY_NOTIF";
    // REF: No activitie types for notifs
    EActivityType[EActivityType["ACTIVITY_WATCH"] = 500] = "ACTIVITY_WATCH";
    EActivityType[EActivityType["ACTIVITY_GAME"] = 600] = "ACTIVITY_GAME";
    EActivityType[EActivityType["ACTIVITY_SESSION"] = 700] = "ACTIVITY_SESSION";
    EActivityType[EActivityType["ACTIVITY_SESSION_NEWSOLO"] = 701] = "ACTIVITY_SESSION_NEWSOLO";
    EActivityType[EActivityType["ACTIVITY_SESSION_NEWONLINE"] = 702] = "ACTIVITY_SESSION_NEWONLINE";
    EActivityType[EActivityType["ACTIVITY_SESSION_HOST"] = 703] = "ACTIVITY_SESSION_HOST";
    EActivityType[EActivityType["ACTIVITY_SESSION_JOIN"] = 704] = "ACTIVITY_SESSION_JOIN";
    EActivityType[EActivityType["ACTIVITY_REQUEST"] = 800] = "ACTIVITY_REQUEST";
    EActivityType[EActivityType["ACTIVITY_REQUEST_NEW"] = 801] = "ACTIVITY_REQUEST_NEW";
    EActivityType[EActivityType["ACTIVITY_REQUEST_ACCEPT"] = 802] = "ACTIVITY_REQUEST_ACCEPT";
    EActivityType[EActivityType["ACTIVITY_REQUEST_DECLINED"] = 803] = "ACTIVITY_REQUEST_DECLINED";
    EActivityType[EActivityType["ACTIVITY_COMMENT"] = 900] = "ACTIVITY_COMMENT";
    EActivityType[EActivityType["ACTIVITY_COMMENT_NEWREPLY"] = 901] = "ACTIVITY_COMMENT_NEWREPLY";
})(EActivityType = exports.EActivityType || (exports.EActivityType = {}));
;
;
//# sourceMappingURL=index.js.map