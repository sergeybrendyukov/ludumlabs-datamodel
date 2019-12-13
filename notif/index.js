"use strict";
/**
 * index.ts: Notif interface
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
//
// Data model
//
var ENotifType;
(function (ENotifType) {
    ENotifType[ENotifType["NOTIF_AUTH"] = 100] = "NOTIF_AUTH";
    ENotifType[ENotifType["NOTIF_AUTH_MALATTEMPT"] = 101] = "NOTIF_AUTH_MALATTEMPT";
    ENotifType[ENotifType["NOTIF_USER"] = 200] = "NOTIF_USER";
    ENotifType[ENotifType["NOTIF_USER_UPDATE"] = 201] = "NOTIF_USER_UPDATE";
    ENotifType[ENotifType["NOTIF_USER_PWDCHANGE"] = 202] = "NOTIF_USER_PWDCHANGE";
    ENotifType[ENotifType["NOTIF_USER_PWDRECOVER"] = 203] = "NOTIF_USER_PWDRECOVER";
    ENotifType[ENotifType["NOTIF_WATCH"] = 300] = "NOTIF_WATCH";
    ENotifType[ENotifType["NOTIF_WATCH_NEWRELEASE"] = 301] = "NOTIF_WATCH_NEWRELEASE";
    ENotifType[ENotifType["NOTIF_REQUEST"] = 400] = "NOTIF_REQUEST";
    ENotifType[ENotifType["NOTIF_REQUEST_NEW"] = 401] = "NOTIF_REQUEST_NEW";
    ENotifType[ENotifType["NOTIF_REQUEST_ACCEPT"] = 402] = "NOTIF_REQUEST_ACCEPT";
    ENotifType[ENotifType["NOTIF_REQUEST_DECLINED"] = 403] = "NOTIF_REQUEST_DECLINED";
    ENotifType[ENotifType["NOTIF_COMMENT"] = 500] = "NOTIF_COMMENT";
    ENotifType[ENotifType["NOTIF_COMMENT_NEWREPLY"] = 501] = "NOTIF_COMMENT_NEWREPLY";
})(ENotifType = exports.ENotifType || (exports.ENotifType = {}));
;
;
//# sourceMappingURL=index.js.map