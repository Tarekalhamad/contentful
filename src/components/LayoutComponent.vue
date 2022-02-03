<template>
  <div>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <HeaderComponent :header="layout?.header"></HeaderComponent>
      <hr />
      <HeroImageComponent :heroImage="layout.heroImage"></HeroImageComponent>
      <hr />
      <CourseComponent :course="layout.course"></CourseComponent>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderComponent from "./HeaderComponent.vue";
import HeroImageComponent from "./HeroImageComponent.vue";
import CourseComponent from "./CourseComponent.vue";

import { Options, Vue } from "vue-class-component";
import { layoutQuery } from "../graphql/layoutQuery";
import Layout from "../Models/Layout";

@Options({
  apollo: {
    layout: {
      query: layoutQuery,
      variables: { id: "2uNOpLMJioKeoMq8W44uYc" },
      fetchPolicy: "cache-and-network",
    },
  },
  components: {
    HeaderComponent,
    HeroImageComponent,
    CourseComponent,
  },
  props: {
    msg: String,
  },

  computed: {},
})
export default class LayoutComponent extends Vue {
  msg!: string;
  layout: Layout;
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
hr {
  border-top: 1px solid gainsboro;
}
</style>
