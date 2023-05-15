
import { Base } from "../base";
import { Player } from "../types/player";

export class BrawlStarsAPI extends Base {

    getPlayer(tag: string): Promise<Player> {
        console.log(tag);
        return this.invoke(`/players/${tag}`);
    }

}