<template>
  <div class="Loading">
    <img src="../assets/loading.png" alt="로딩화면" />
  </div>
</template>
  
  <script>
export default {
  name: "loading",
};
</script>
  
  <style>
.Loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 750px;
  margin: 0 auto;
  background-color: #d9b3b9;
}

.Loading img {
  max-width: 100%;
  height: auto;
}

.Loading body {
  overflow: hidden;
}
</style>