import { Base } from "./base";
import { BrawlStarsAPI } from "./sdk/brawlstars-api";
import { applyMixins } from "./utils/mixin";

class BrawlStarsAPICaller extends Base {}
interface BrawlStarsAPICaller extends BrawlStarsAPI {}

applyMixins(BrawlStarsAPICaller, [BrawlStarsAPI]);

export default BrawlStarsAPICaller;