import { PlayerRanking } from "./player-ranking";

export declare type PlayerRankingList = {
    items: PlayerRanking[];
    paging: {
        cursors: {
            after: string;
        };
    };
};