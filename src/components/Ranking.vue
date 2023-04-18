<template>
    <div>
      <h1>{{ Ranking }}</h1>
      <p>Page content goes here...</p>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ranking",
  data() {
    return {
      pageName: "ranking",
    };
  },
});
</script>

<style>

</style>