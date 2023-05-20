<template>
  <div>
    <h1>{{ Store }}</h1>
    <p>Page content goes here...</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Store",
  data() {
    return {
      pageName: "Store",
    };
  },
});
</script>