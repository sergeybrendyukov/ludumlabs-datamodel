/**
 * index.ts: Comment interface
 *
 */


//
// Data model
//

export interface IComment {
    id: string, // Unique ID

    parent: string,     // Parent Comment ID
    contents: string,   // Comment contents
};
