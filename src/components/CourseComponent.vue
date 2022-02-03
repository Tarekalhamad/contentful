
<template>
  <div>
    <table class="table table-responsive">
      <thead class="table-header">
        <tr>
          <th>Title</th>
          <th>Slug</th>
        </tr>
      </thead>
      <tr
        v-for="lesson in course?.lessonsCollection?.items"
        :key="lesson?.slug"
      >
        <td>{{ lesson?.title }}</td>
        <td>{{ lesson?.slug }}</td>
      </tr>
    </table>
  </div>
</template>


<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Options, Vue } from "vue-class-component";
import Course from "../Models/Course";
@Options({
  props: {
    course: Course,
  },
})
export default class CourseComponent extends Vue {
  course!: Course;
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
hr {
  border-top: 1px solid gainsboro;
}
a {
  color: #42b983;
}
</style>
