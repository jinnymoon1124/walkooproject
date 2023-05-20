<template>
  <div>
    <router-view />
    <Menu />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}

/* Mobile First CSS */

/* default - 가로 해상도가 768px 이하*/
.elem {
  font-size: 0.75rem;
}

/* 가로 해상도가 768px 이상*/
@media (min-width: 768px) {
  .elem {
    font-size: 0.875rem;
  }
}

/* 가로 해상도가 1024px 이상*/
@media (min-width: 1024px) {
  .elem {
    font-size: 1rem;
  }
  #app {
    width: 750px;
  }
  .menu-container {
    width: 750px;
  }
}
</style>
