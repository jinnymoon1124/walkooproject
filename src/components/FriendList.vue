<template>
    <div>
      <h1>{{ FriendList }}</h1>
      <p>Page content goes here...</p>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
name: "friendList",
data() {
    return {
    pageName: "friendList",
    };
},
});
</script>

<style>

</style>