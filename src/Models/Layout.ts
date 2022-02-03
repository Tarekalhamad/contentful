import ContentModelBase from "./Base/ContentModelBase";
import Header from "./Header";
import Sys from "./Base/Sys";
import HeroImage from "./HeroImage";
import Course from "./Course";

export default class Layout extends ContentModelBase {
  title: string;
  header: Header;
  heroImage: HeroImage;
  course: Course;
}
