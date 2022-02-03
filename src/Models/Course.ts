import ContentModelBase from "./Base/ContentModelBase";
import Lesson from "./Lesson";

export default class Course extends ContentModelBase {
  title: string;
  lessonsCollection: Lesson[];
}
