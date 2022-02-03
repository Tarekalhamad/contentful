import ContentModelBase from "./Base/ContentModelBase";
import Media from "./Base/Media";

export default class Header extends ContentModelBase {
  title: string = "";
  logo: Media = new Media();
}
