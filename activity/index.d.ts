/**
 * index.ts: Activity interface
 *
 */
export declare enum EActivityType {
    ACTIVITY_PRIMARY = 100,
    ACTIVITY_AUTH = 200,
    ACTIVITY_USER = 300,
    ACTIVITY_NOTIF = 400,
    ACTIVITY_WATCH = 500,
    ACTIVITY_GAME = 600,
    ACTIVITY_SESSION = 700,
    ACTIVITY_SESSION_NEWSOLO = 701,
    ACTIVITY_SESSION_NEWONLINE = 702,
    ACTIVITY_SESSION_HOST = 703,
    ACTIVITY_SESSION_JOIN = 704,
    ACTIVITY_REQUEST = 800,
    ACTIVITY_REQUEST_NEW = 801,
    ACTIVITY_REQUEST_ACCEPT = 802,
    ACTIVITY_REQUEST_DECLINED = 803,
    ACTIVITY_COMMENT = 900,
    ACTIVITY_COMMENT_NEWREPLY = 901
}
export interface IActivity {
    id: string;
    type: EActivityType;
    param: any;
    time: number;
}