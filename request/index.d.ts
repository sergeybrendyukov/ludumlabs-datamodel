export interface IRequest {
    id: string;
    requester: string;
    game: string;
    requesttime: number;
    accepttime: number;
    seen: boolean;
    accept: boolean;
}
