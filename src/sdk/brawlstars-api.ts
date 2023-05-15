
import { Base } from "../base";
import { Player } from "../types/player";

export class BrawlStarsAPI extends Base {

    getPlayer(tag: string): Promise<Player> {
        return this.invoke(`/players/${tag}`);
    }

}