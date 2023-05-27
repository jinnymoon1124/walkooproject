<template>
  <div class="alarmpage">
    <div class="pg_alarm">
      <img
        src="@/assets/backbutton.png"
        alt="backButton"
        class="back-button"
        @click="$router.go(-1)"
      />
      알림이 왔어요!<br />
    </div>

    <div v-if="showBanner" class="banner">
      <img
        src="../assets/StarbucksLogo.png"
        alt="bannerimage"
        class="bannerimage"
      />
      <div class="bannertext">
        '나를 잡아봐' 배지! <br />
        선착순 50명 <br />
        스타벅스 아메리카노 증정 이벤트
      </div>
    </div>

    <div class="alarmlist">
      <div class="alarmbox">
        <img
          src="../assets/friendimage/jinny.png"
          alt="jinnypc"
          class="alarmpng"
        />
        <div
          v-for="(request, index) in friendRequests"
          :key="index"
          class="friend-request"
        >
          <div class="asktitle">
            '{{ request }}' 님이 <br />
            산책 신청을 했어요!<br /><br />
          </div>

          <div>
            장소 : 석촌호수 <br />
            시간 : 6월 28일 오후 3시
          </div>
          <br />

          <div class="alarm_yn">
            <button class="friendreject" @click="openModal = false">
              거절
            </button>
            <button class="friendaccept" @click="openModal = false">
              수락
            </button>
          </div>
        </div>
      </div>

      <div class="alarmbox">
        <img
          src="../assets/friendimage/naheecode.png"
          alt="naheepc"
          class="alarmpng"
        />
        <div
          v-for="(request, index) in friendRequests"
          :key="index"
          class="friend-request"
        >
          <div class="asktitle">친구신청이왔어요!</div>
          <br />'{{ request }}' 님에게 <br />
          친구 신청이 왔습니다 <br />
          수락하시겠습니까? <br /><br />

          <div class="alarm_yn">
            <button class="friendreject" @click="openModal = false">
              거절
            </button>
            <button class="friendaccept" @click="openModal = false">
              수락
            </button>
          </div>
        </div>
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
      friendRequests: ["친구1"],
    };
  },
});
</script>

<style scoped>
.alarmpage {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
}
.pg_alarm {
  text-align: left;
  font-weight: bold;
  font-size: 2rem;
  color: #4a4a4a;
}

.banner {
  background-color: rgb(92, 86, 86);
  padding: 3%;
  display: flex;
  align-items: center;
  height: 130px;
  box-sizing: border-box;
}
.bannerimage {
  width: 80px;
  height: 80px;
}
.bannertext {
  color: #f1f1f1;
  font-size: large;
  margin-left: 2%;
}

.alarmlist {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  overflow-y: scroll;
  box-sizing: border-box;
}
.alarmbox {
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  padding: 2%;
  box-sizing: border-box;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 2%;
}
.alarmpng {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 2%;
}

.friend-request {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.asktitle {
  font-weight: bold;
  font-size: larger;
}

.alarm_yn {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.friendreject {
  width: 40%;
  background-color: #7a7878;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2rem;
}
.friendaccept {
  width: 40%;
  background-color: #585757;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2rem;
}
</style>