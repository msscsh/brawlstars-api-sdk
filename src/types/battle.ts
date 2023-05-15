import { StarPlayer } from "./star-player";
import { Team } from "./team";

export declare type Battle = {
    mode: string;
    type: string;
    result: string;
    duration: number;
    starPlayer: StarPlayer;
    teams: Team[][];
};