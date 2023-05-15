import { ClubRanking } from "./club-ranking";

export declare type ClubRankingList = {
    items: ClubRanking[];
    paging: {
        cursors: {
            after: string;
        };
    };
};