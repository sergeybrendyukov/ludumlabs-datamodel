/**
 * request.ts: Request interface
 *
 */


//
// Data model
//

export interface IRequest {
    id: string, // Unique ID

    requester: string,      // Requester ID
    game: string,           // Requested Game ID
    requesttime: number,    // Requested timestamp
    accepttime: number,     // Accepted timestamp
    seen: boolean,          // Flag if author has seen the request
    accept: boolean,        // Flag if author accepted or decliend
};
