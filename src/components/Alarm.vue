<template>
    <div>
    <div class="pg_alarm">
      <img src="@/assets/backbutton.png" alt="backButton" class="back-button" @click="$router.push('/')"/>
      알림이 왔어요!<br>
    </div>
    <div v-if="showBanner" class="banner">
      '나를 잡아봐' 배지! <br> 선착순 50명 <br> 스타벅스 아메리카노 증정 이벤트
    </div>
    <div class="friend-requests">
      <div v-for="(request, index) in friendRequests" :key="index" class="friend-request">
        {{ request }} 님이 친구 신청을 보냈습니다.
      </div>
    </div>
  </div>
</template>
  
<script>
import { defineComponent } from "vue";

export default defineComponent({
name: "alarm",
data() {
    return {
    pageName: "alarm",
    showBanner: true,
    friendRequests: ['친구1', '친구2', '친구3']
    };
},
});
</script>

<style scoped>
.pg_alarm {
  font-weight: bold;
  font-size: 50px;
  color: #4a4a4a
  


}

.banner {
  background-color: rgb(92, 86, 86);
  color: #f1f1f1;


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