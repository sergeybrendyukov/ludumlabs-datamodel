export declare enum ENotifType {
    NOTIF_AUTH = 100,
    NOTIF_AUTH_MALATTEMPT = 101,
    NOTIF_USER = 200,
    NOTIF_USER_UPDATE = 201,
    NOTIF_USER_PWDCHANGE = 202,
    NOTIF_USER_PWDRECOVER = 203,
    NOTIF_WATCH = 300,
    NOTIF_WATCH_NEWRELEASE = 301,
    NOTIF_REQUEST = 400,
    NOTIF_REQUEST_NEW = 401,
    NOTIF_REQUEST_ACCEPT = 402,
    NOTIF_REQUEST_DECLINED = 403,
    NOTIF_COMMENT = 500,
    NOTIF_COMMENT_NEWREPLY = 501
}
export interface INotif {
    id: string;
    user: string;
    type: ENotifType;
    param: any;
    read: boolean;
}
