import { Brawler } from "./brawler";

export declare type BrawlerList = {
    items: Brawler[];
    paging: {
        cursors: {
            after: string;
        };
    };
};