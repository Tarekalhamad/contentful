<template>
  <div>
    <header></header>
    <h3 class="hello">{{ msg }}</h3>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeaderComponent from "./HeaderComponent.vue";

@Options({
  components: {
    HeaderComponent,
  },
  props: {
    msg: String,
  },

  computed: {},
})
export default class LayoutComponent extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
