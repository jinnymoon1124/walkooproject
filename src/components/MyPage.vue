<template>
  <div class="mypage">
    <!-- top -->
    <div class="top">
      <div class="top_wrap">
        <div class="top_left"></div>
        <p class="top_center top_name">마이페이지</p>
        <div class="top_right"></div>
      </div>
    </div>

    <!-- middle -->
    <div class="middle">
      <!-- middle_1 -->
      <div class="middle_1">
        <!-- 이번 달 사용자 산책 정보 -->
        <div class="user_information_box">
          <p class="user_information">
            누적 산책 거리 : 1KM <br />
            누적 산책 시간 : 1H <br />
            도토리 : 5개
          </p>

          <!-- 캐릭터 수정 버튼 -->
          <div class="user_character_change_box">
            <img
              src="../assets/MyPage/icon_character_change.png"
              alt="캐릭터 수정 아이콘"
            />
          </div>
        </div>

        <!-- 사용자 이름 -->
        <div class="user_name_box">
          <p class="user_name">센치맘이에요^^</p>
        </div>

        <!-- 사용자 캐릭터 -->
        <div class="user_character_box">
          <img
            src="../assets/MyPage/user.png"
            alt="사용자캐릭터"
            class="user_character"
          />
        </div>

        <!-- 알림 버튼 -->
        <div class="alarm_box">
          <router-link to="/alarm" class="circle-button">
            <img src="../assets/MyPage/icon_alarm.png" alt="알람 아이콘" />
          </router-link>
        </div>
      </div>

      <!-- middle_2 -->
      <div class="middle_2">
        <!-- 애완동물 이미지 -->
        <div class="pet_profile">
          <img class="pet_profile_img" src="" alt="" />
        </div>

        <!-- 애완동물 정보 -->
        <div class="pet_status">
          <!-- 애완동물 산책레벨 -->
          <div class="pet_level">LV.1</div>

          <!-- 애완동물 레벨 바 -->
          <div class="level_progressbar_wrap">
            <div class="level_progressbar" style="width: 69%"></div>
          </div>
        </div>
      </div>

      <!-- middle_3 -->
      <div class="middle_3">
        <div><p>배지</p></div>
        <div><p>산책기록</p></div>
      </div>

      <!-- middle_4 -->
      <div class="middle_4">
        <!-- 배지 버튼 -->
        <div class="middle_4_wrap">
          <div class="btn_wrap btn_badge" @click="$router.push('./badgepage')">
            <img
              class="icon"
              src="../assets/MyPage/icon_badge.png"
              alt="배지"
            />
          </div>
          <div class="btn_text">
            대표 배지를<br />
            설정해 보세요!
          </div>
        </div>

        <!-- 산책 기록 버튼 -->
        <div class="middle_4_wrap">
          <div class="btn_wrap btn_badge" @click="$router.push('./WalkRecord')">
            <img
              class="icon"
              src="../assets/MyPage/icon_calendar.png"
              alt="산책기록"
            />
          </div>
          <div class="btn_text">
            산책 기록<br />
            확인하러 가기
          </div>
        </div>
      </div>

      <!-- middle_5 -->
      <div class="middle_5">
        <div><p>설정</p></div>
      </div>

      <!-- middle_6 -->
      <div class="middle_6">
        <!-- 공지사항 버튼 -->
        <div class="middle_6_wrap">
          <div class="btn_wrap btn_badge">
            <img
              class="icon"
              src="../assets/MyPage/icon_badge.png"
              alt="공지사항"
            />
          </div>
          <div class="btn_text">공지사항</div>
        </div>

        <!-- 고객센터 버튼 -->
        <div class="middle_6_wrap">
          <div class="btn_wrap btn_badge">
            <img
              class="icon"
              src="../assets/MyPage/icon_calendar.png"
              alt="고객센터"
            />
          </div>
          <div class="btn_text">고객센터</div>
        </div>

        <!-- 설정 버튼 -->
        <div class="middle_6_wrap">
          <div class="btn_wrap btn_badge">
            <img
              class="icon"
              src="../assets/MyPage/icon_calendar.png"
              alt="설정"
            />
          </div>
          <div class="btn_text">설정</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPage",
};
</script>

<style>
.mypage {
  width: 100%;
  height: 90vh;
}

/* middle */
.mypage .middle {
  position: relative;
  width: 100%;
  height: 90%;
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
  width: 70%;
  height: 50%;
  transform: translateX(5%);

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  background: #eaeddf;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  padding: 1em;
}
.mypage .user_information {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.3em;
  letter-spacing: -0.32px;
  color: #747474;
}
.mypage .user_name_box {
  position: absolute;
  width: 54%;
  height: 35%;
  top: 8%;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.mypage .user_name {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  text-align: center;
  letter-spacing: -0.32px;
  color: #747474;
}
.mypage .user_character_box {
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  top: 8%;
  left: 5%;
}
.mypage .user_character {
  width: 100%;
  height: 100%;
}
.mypage .user_character_change_box {
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
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
  width: 45%;
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
.mypage .pet_profile {
  width: fit-content;
  height: 100%;
  border-radius: 100%;
  display: flex;
  align-items: center;
}
.mypage .pet_profile_img {
  width: 50px;
  height: 50px;
  background-color: #ddd;
  border-radius: 100%;
}
.mypage .pet_status {
  padding-left: 1em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.mypage .pet_level {
  font-size: 1.2rem;
  font-weight: bold;
  color: #747474;
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
.mypage .middle_4_wrap {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mypage .middle_4_wrap .btn_wrap {
  width: 70px;
  height: 70px;
  background-color: #bbb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
}
.mypage .middle_4_wrap .btn_wrap .icon {
  width: 45%;
  height: auto;
}
.mypage .middle_4_wrap .btn_text {
  font-size: large;
  font-weight: bold;
  color: #747474;
  text-align: center;
  padding-top: 0.5em;
}

/* middle 5 */
.mypage .middle_5 {
  position: relative;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mypage .middle_5 div {
  width: 95%;
  height: 80%;

  background: #dedee1;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.mypage .middle_5 p {
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
  padding: 0.5em 1em;
}
.mypage .middle_6_wrap {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mypage .middle_6_wrap .btn_wrap {
  width: 50px;
  height: 50px;
  background-color: #bbb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
}
.mypage .middle_6_wrap .btn_wrap .icon {
  width: 45%;
  height: auto;
}
.mypage .middle_6_wrap .btn_text {
  font-size: large;
  font-weight: bold;
  color: #747474;
  text-align: center;
  padding-top: 0.5em;
}
</style>