import { IClue } from '../game';
export interface ISession {
    id: string;
    game: string;
    cols: number;
    rows: number;
    clues: IClue[];
}
