/**
 * watch.ts: Watch interface
 *
 */


//
// Data model
//

export interface IWatch {
    id: string,         // Unique ID

    watcher: string,    // Watcher ID
    game: string,       // Game ID being watched
};
