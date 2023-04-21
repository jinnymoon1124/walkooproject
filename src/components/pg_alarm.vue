<template>
  <div>
    <div class="pg_alarm">
      알림이 왔어요!
    </div>
    <div v-if="showBanner" class="banner">
      '나를 잡아봐' 배지! 선착순 50명 스타벅스 아메리카노 증정 이벤트
    </div>
    <div class="friend-requests">
      <div v-for="(request, index) in friendRequests" :key="index" class="friend-request">
        {{ request }} 님이 친구 신청을 보냈습니다.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBanner: true,
      friendRequests: ['친구1', '친구2', '친구3']
    }
  },
  methods: {
    goToRanking() {
      // 랭킹 페이지로 이동하는 코드 작성
    },
    goToFriends() {
      // 친구 페이지로 이동하는 코드 작성
    },
    goToHome() {
      // 홈 페이지로 이동하는 코드 작성
    },
    goToShop() {
      // 상점 페이지로 이동하는 코드 작성
    },
    goToMyPage() {
      // 마이페이지로 이동하는 코드 작성
    }
  }
  
}
</script>

<style>
.notification {
  font-weight: bold;
}
.banner {
  background-color: yellow;
}
.friend-request {
  margin-bottom: 10px;
}
.dock {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #f1f1f1;
}

.dock-item {
  font-size: 12px;
  text-align: center;
  cursor: pointer;
}
</style>

