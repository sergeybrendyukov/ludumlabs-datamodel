/**
 * index.ts: Activity interface
 *
 */


//
// Data model
//

export enum EActivityType {
    ACTIVITY_PRIMARY            = 100, // Primary activities

    ACTIVITY_AUTH               = 200, // Auth-related activities

    ACTIVITY_USER               = 300, // User-related activities

    ACTIVITY_NOTIF              = 400, // Notif-related activities
    // REF: No activitie types for notifs

    ACTIVITY_WATCH              = 500, // Watch-related activites

    ACTIVITY_GAME               = 600, // Game-related activities

    ACTIVITY_SESSION            = 700, // Session-related activities
    ACTIVITY_SESSION_NEWSOLO    = 701,  // New solo session created
    ACTIVITY_SESSION_NEWONLINE  = 702,  // New online session created
    ACTIVITY_SESSION_HOST       = 703,  // Online session hosted
    ACTIVITY_SESSION_JOIN       = 704,  // Joined online session

    ACTIVITY_REQUEST            = 800, // Request-related activities
    ACTIVITY_REQUEST_NEW        = 801,  // New request arrived
    ACTIVITY_REQUEST_ACCEPT     = 802,  // Your request accepted
    ACTIVITY_REQUEST_DECLINED   = 803,  // Your request declined

    ACTIVITY_COMMENT            = 900, // Comment-related activities
    ACTIVITY_COMMENT_NEWREPLY   = 901,  // New reply to your comment
};

export interface IActivity {
    id: string, // Unique ID

    type: EActivityType,    // Activity type
    param: any,             // Parameter
    time: number,           // Activity timestamp
};
