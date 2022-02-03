import ContentModelBase from "./Base/ContentModelBase";
import Media from "./Base/Media";

export default class HeroImage extends ContentModelBase {
  backgroundImage: Media;
  headLine: string;
  title: string;
}
