<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div
      v-for="layoutHeroImage in layoutHeroImages.items"
      :key="layoutHeroImage.title"
    >
      <p>{{ layoutHeroImage.title }}</p>
      <img
        :title="layoutHeroImage.backgroundImage.title"
        :src="layoutHeroImage.backgroundImage.url"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import gql from "graphql-tag";

@Options({
  apollo: {
    layoutHeroImages: gql`
      query {
        layoutHeroImages: layoutHeroImageCollection {
          items {
            headline
            title
            backgroundImage {
              url
              fileName
              title
              description
              contentType
            }
          }
        }
      }
    `,
  },
  props: {
    msg: String,
    layoutHeroImages: Array,
  },
  mounted() {
    console.log(this.layoutHeroImages.items);
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
a {
  color: #42b983;
}
</style>
