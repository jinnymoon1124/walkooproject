<template>
    <div class="mypage">
    <!-- top -->
      <div class="top">
        <h1> 마이페이지 </h1>
      </div>
      <!-- middle -->
      <div class="middle">
        <div class="middle_1">
          <div class="user_information_box">
            <div class="userimgname">
              <img src="../assets/person1.png"/>
              <p class="user_name">센치맘이에요^^</p>
            </div>
            <p class="user_information">
              누적 산책 거리 : 1KM <br />
              누적 산책 시간 : 1H <br />
              도토리 : 5개
            </p>
            <div class="user_character_change_box">
              <img src="../assets/MyPage/icon_character_change.png"/>
            </div>
          </div>
          <router-link to="/alarm">
            <div class="alarm_box">
              <img src="../assets/bell.png" />
            </div>
          </router-link>
        </div>
        <div class="middle_2">
          <img class="pet_profile_img" src="../assets/friendimage/kong.png" />
          <div class="pet_status">
            <div class="pet_level">LV.1</div>
            <div class="level_progressbar_wrap">
              <!-- 아래 태그와 주석은 진행바 삽입 후 삭제 -->
              <div class="level_progressbar" style="width:69%"></div>
            </div>
          </div>
        </div>
        <div class="middle_3">
          <div><p>배지</p></div>
          <div><p>산책기록</p></div>
        </div>
        <div class="middle_4">
          <div class="middle_4_wrap">
            <div class="btn_wrap btn_badge" @click="$router.push('./badgepage')">
              <img class="icon" src="../assets/MyPage/icon_badge.png"/>
            </div>
            <div class="btn_text">
              대표 배지를<br />
              설정해 보세요!
            </div>
          </div>
          <div class="middle_4_wrap">
            <div class="btn_wrap btn_badge" @click="$router.push('./walkrecord')">
              <img class="icon" src="../assets/MyPage/icon_calendar.png" />
            </div>
            <div class="btn_text">
              산책 기록<br />
              확인하러 가기
            </div>
          </div>
        </div>
        <div class="middle_5">
          <h1>설정</h1>
        </div>
        <div class="middle_6">
          <div class="middle_6_wrap">
            <div class="btn_wrap btn_badge">
              <img class="icon" src="../assets/MyPage/infoicon.png"/>
            </div>
            <div class="btn_text">공지사항</div>
          </div>
          <div class="middle_6_wrap">
            <div class="btn_wrap btn_badge">
              <img class="icon" src="../assets/MyPage/customericon.png"/>
            </div>
            <div class="btn_text">고객센터</div>
          </div>
          <div class="middle_6_wrap">
            <div class="btn_wrap btn_badge">
              <img class="icon" src="../assets/MyPage/settingicon.png"/>
            </div>
            <div class="btn_text">설정</div>
          </div>
        </div>
      </div>
  </div>
</template>
  
<script>
import { defineComponent } from "vue";

export default defineComponent({
name: "mypage",
data() {
    return {
    pageName: "mypage",
    };
},
});
</script>

<style>
.mypage {
  width: 100%;
  height: 100vh;
}
/* top */
.mypage .top {
  box-sizing: border-box;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center; /* 가로 중앙에 위치 */
  align-items:center; /* 세로 위에서 70% 지점에 위치 */
  background: #687089;
  padding: 1em;
  color: white;
}
.top > h1 {
  font-size: 200%;
}
/* middle */
.mypage .middle {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

/* middle 1 */
.mypage .middle_1 {
  position: relative;
  width: 100%;
  height: 32%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.mypage .user_information_box {
  width: 90%;
  height: 70%;
  display:flex;
  justify-content: space-between;
  align-items: center;

  background: #78901f60;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  padding: 1em 1em 1em 0;
  
}
.mypage .user_information_box  img {
  width: 150px;
  max-height: 100%;

}
.userimgname {
  background-color: rgb(255, 255, 255);
  padding: 5px 30px 0 30px;
  border-radius: 30px;
  box-shadow: 10px 10px 5px rgba(67, 67, 67, 0.567);;
}

.mypage .user_name {
  width: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  text-align: center;
  letter-spacing: -0.32px;
  color: #747474;
}

.mypage .user_character_change_box {
  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  border: 1px solid grey;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.785);
  border-radius: 10px;
  margin-top: 170px;
}

.user_information {
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 3px;
  line-height: 50px;
}
.mypage .alarm_box {
  position: absolute;
  width: 60px;
  height: 60px;
  right: 3%;
  top: 5%;

  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */

  border-radius: 100%;
  border: 3px solid #423a35;
  background: #f6f6f6;
}









/* middle 2 */
.mypage .middle_2 {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 14%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
}

/* middle 3 */
.mypage .middle_3 {
  position: relative;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
}
.mypage .middle_3 div {
  width: 48%;
  height: 80%;

  background: #ffffff;
  border: 1px solid #c3c3c5;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.mypage .middle_3 p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;

  text-align: center;
  letter-spacing: -0.32px;
  color: #747474;
}

/* middle 4 */
.mypage .middle_4 {
  position: relative;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  box-sizing: border-box;
  padding: 1em;
}

.mypage .pet_profile_img {
  width:15%;
  background-color: #ddd;
  border-radius: 50%;
  margin-left: 20px;
}
.mypage .pet_status {
  padding-left: 1em;
  flex: 1;
}
.mypage .pet_level {
  font-size: 1.2rem;
  font-weight: bold;
  color: #747474;
}
.mypage .middle_4_wrap {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mypage .level_progressbar_wrap {
  width: 100%;
  height: auto;
  background-color: #dedede;
}
.mypage .level_progressbar {
  height: 3vw;
  background-color: #638263;
  animation-name: pet_level_ani;
  animation-duration: 3s;
}
@keyframes pet_level_ani {
  0% {
    width: 0%;
  }
  100% {
  }
}
.mypage .middle_4_wrap:hover {
  box-shadow: inset 0 0 0 2px darkolivegreen;
  border-radius: 70px;
  transition: all 0.1s;
}
.mypage .middle_4_wrap .btn_wrap {
  width: 90px;
  height: 90px;
  background-color: #bbb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
}
.mypage .middle_4_wrap .btn_wrap .icon {
  width: 60%;
  height: auto;
}
.mypage .middle_4_wrap .btn_text {
  font-size: 25px;
  font-weight: bold;
  color: #747474;
  text-align: center;
  padding-top: 0.5em;
}

/* middle 5 */
.mypage .middle_5 {
  position: relative;
  width: 98%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dedee1;
  border-radius: 10px;
  margin: 0 auto;
}
.mypage .middle_5 h1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  text-align: center;
  letter-spacing: -0.32px;
  color: #747474;
}

/* middle 6 */
.mypage .middle_6 {
  position: relative;
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding-top:30px
}
.mypage .middle_6_wrap {
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mypage .middle_6_wrap .btn_wrap {
  width: 90px;
  height: 90px;
  background-color: #bbb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
}
.mypage .middle_6_wrap:hover {
  box-shadow: inset 0 0 0 2px darkolivegreen;
  border-radius: 70px;
  transition: all 0.1s;
}
.mypage .middle_6_wrap .btn_wrap .icon {
  width: 60%;
  height: auto;
}
.mypage .middle_6_wrap .btn_text {
  font-size: 20px;
  font-weight: bold;
  color: #747474;
  text-align: center;
  padding-top: 0.5em;
}

</style>