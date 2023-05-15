import { Icon } from "./Icon";
import { Club } from "./club";
import { Brawler } from "./brawler";

export declare type Player = {
    tag: string;
    name: string;
    nameColor: string;
    icon: Icon;
    trophies: number;
    highestTrophies: number;
    highestPowerPlayPoints: number;
    expLevel: number;
    expPoints: number;
    isQualifiedFromChampionshipChallenge: boolean;
    victories3vs3: number;
    soloVictories: number;
    duoVictories: number;
    bestRoboRumbleTime: number;
    bestTimeAsBigBrawler: number;
    club: Club;
    brawlers: Brawler[];
};