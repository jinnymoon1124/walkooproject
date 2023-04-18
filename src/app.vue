<template>
  <div>
    <!-- 라우트 링크 생성 -->
    <!-- <button>
      <router-link to="/mypage">마이</router-link>
    </button>
    <button>
      <router-link to="/badgepage">배지</router-link>
    </button> -->
    <!-- 라우트에 따라 컴포넌트 렌더링 -->
    <router-view url="/mypage"></router-view>
  </div>
</template>

<script>
export default {};
</script>
export default {
  name: 'App'
};
<style>
</style>