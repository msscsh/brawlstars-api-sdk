import { BrawlerRanking } from "./brawler-ranking";

export declare type BrawlerRankingList = {
    items: BrawlerRanking[];
    paging: {
        cursors: {
            after: string;
        };
    };
};