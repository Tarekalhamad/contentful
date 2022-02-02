import ContentModelBase from "./Base/ContentModelBase";
import Media from "./Base/Media";

export interface HeroImage extends ContentModelBase {
  backGroundImage: Media;
  headLine: string;
  title: string;
}
