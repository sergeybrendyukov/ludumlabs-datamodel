/**
 * index.ts: Notif interface
 *
 */


//
// Data model
//

export enum ENotifType {
    NOTIF_AUTH              = 100, // Auth-related notifs
    NOTIF_AUTH_MALATTEMPT   = 101,  // Malicious sign-in attempt detected

    NOTIF_USER              = 200, // User-related notifs
    NOTIF_USER_UPDATE       = 201,  // Profile updated
    NOTIF_USER_PWDCHANGE    = 202,  // Password changed
    NOTIF_USER_PWDRECOVER   = 203,  // Password recovered

    NOTIF_WATCH             = 300, // Watch-related notifs
    NOTIF_WATCH_NEWRELEASE  = 301,  // New version released from watching game

    NOTIF_REQUEST           = 400, // Request-related notifs
    NOTIF_REQUEST_NEW       = 401,  // New request arrived
    NOTIF_REQUEST_ACCEPT    = 402,  // Your request accepted
    NOTIF_REQUEST_DECLINED  = 403,  // Your request declined

    NOTIF_COMMENT           = 500, // Comment-related notifs
    NOTIF_COMMENT_NEWREPLY  = 501,  // New reply to your comment
};

export interface INotif {
    id: string, // Unique ID

    user: string,       // Owner ID
    type: ENotifType,   // Notif Type
    param: any,         // Parameter

    read: boolean,      // Flag if user read this notif
};
