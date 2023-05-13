<template>
    <div class="menu-container" v-if="showMenu">
    <router-link v-for="(menu, index) in menus" :key="index" :to="menu.path" class="menu-item" :class="{'active': activeMenu === index}">
      <img :src="require(`../assets/menuicon/${menu.image}`)" alt="" class="menu-image">
      <div class="menu-text">{{ menu.text }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    showMenu() {
      return this.$route.meta.showMenu !== false;
    }
  },

  data() {
    return {
      menus: [
        {
          image: 'ranking.png',
          text: '랭킹',
          path: '/Ranking'
        },
        {
          image: 'friendlist.png',
          text: '친구',
          path: '/FriendList'
        },
        {
          image: 'mainpage.png',
          text: '홈',
          path: '/'
        },
        {
          image: 'store.png',
          text: '상점',
          path: '/Store'
        },
        {
          image: 'mypage.png',
          text: 'MY',
          path: '/MyPage'
        }
      ],
      activeMenu: 0
    }
  },
  mounted() {
    this.activeMenu = this.menus.findIndex(menu => menu.path === this.$route.path)
  },
  watch: {
    $route(to) {
      this.activeMenu = this.menus.findIndex(menu => menu.path === to.path)
    }
  }
}
</script>

<style>

.menu-container {

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.menu-item {
  width: 10vw;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  background-color: #dcdcdc; 
  border-top: 0.5px solid #333; /* 윗부분 테두리 선 */
}

.menu-item.active {
  background-color: #cac8c8;
}

.menu-image {
  position: relative;
  z-index: 1;
  width: 45px;
  height: 40px;
}

.menu-text {
  margin-top: 10px;
  color: #5d5d5d; /* 글씨 색상 추가 */
  font-weight: bold; /* 글씨 두껍게 설정 */
}

</style>