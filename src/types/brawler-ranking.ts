import { Icon } from "./Icon";
import { Club } from "./club";

export declare type BrawlerRanking = {
    tag: string;
    name: string;
    nameColor: string;
    icon: Icon;
    trophies: number;
    rank: number;
    club: Club;
};