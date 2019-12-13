/**
 * index.ts: Session interface
 *
 */


//
// Imports
//

import { IClue } from '../game';


//
// Data model
//

export interface ISession {
    id: string, // Unique ID

    game: string,       // Base Game ID
    cols: number,       // Number of columns
    rows: number,       // Number of rows

    clues: IClue[],    // Clues
};
