import ContentModelBase from "./Base/ContentModelBase";
import Header from "./Header";
import Sys from "./Base/Sys";

export default class Layout extends ContentModelBase {
  title: string;
  header: Header;
  contentModules: Sys[];
}
