<template>
  <div>
    <router-view />
    <Menu />
  </div>

</template>

<script>
import Menu from "@/components/Menu.vue";


export default {
  name: 'App',
  components: {
    Menu,
  },
}
</script>

<style>
body {
  padding:0; margin:0; -ms-user-select: none; -moz-user-select: none; -khtml-user-select: none; -webkit-user-select: none; user-select: none;
}

#app {
  margin:0 auto; width:750px; min-height:100%; border-left:1px #D8D8D8 solid; border-right:1px #D8D8D8 solid; 
  position: relative; 
  text-align:center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media(max-width:750px){
    #app{ width:100%; border-left:0; border-right:0; }
  }
</style>
