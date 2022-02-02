
<template>
  <div class="hello">Hi header</div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "../Models/Header";
@Options({
  props: {
    header: Header,
  },
})
export default class HeaderComponent extends Vue {
  header!: Header;
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
a {
  color: #42b983;
}
</style>
