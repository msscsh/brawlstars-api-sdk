import { Gadget } from "./gadget";
import { Gear } from "./gear";
import { StarPower } from "./starpower";

export declare type Brawler = {
    id: number;
    name: string;
    power: number;
    rank: number;
    trophies: number;
    highestTrophies: number;
    gears: Gear[];
    starPowers: StarPower[];
    gadgets: Gadget[];
}