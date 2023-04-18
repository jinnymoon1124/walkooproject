<template>
  <div class="mypage">
    <!-- top -->
    <div class="top">
      <div class="top_wrap">
        <div class="top_left">
          <!-- <img class="icon" src="../assets/BadgePage/LeftIcon.png" /> -->
        </div>
        <p class="top_center top_name">마이페이지</p>
        <div class="top_right"></div>
      </div>
    </div>

    <!-- middle -->
    <div class="middle">
      <div class="middle_1">
        <div class="user_information_box">
          <p class="user_information">
            누적 산책 거리 : 1KM <br />
            누적 산책 시간 : 1H <br />
            도토리 : 5개
          </p>
          <div class="user_character_change_box">
            <img
              src="../assets/MyPage/icon_character_change.png"
              alt="캐릭터 수정 아이콘"
            />
          </div>
        </div>
        <div class="user_name_box">
          <p class="user_name">센치맘이에요^^</p>
        </div>
        <div class="user_character_box">
          <img
            src="../assets/MyPage/user.png"
            alt="사용자캐릭터"
            class="user_character"
          />
        </div>

        <div class="alarm_box">
          <img src="../assets/MyPage/icon_alarm.png" alt="알람 아이콘" />
        </div>
      </div>
      <div class="middle_2">
        <div class="pet_profile">
          <img class="pet_profile_img" src="" alt="" />
        </div>
        <div class="pet_status">
          <div class="pet_level">LV.1</div>
          <div class="level_progressbar_wrap">
            <!-- 아래 태그와 주석은 진행바 삽입 후 삭제 -->
            <div style="color: red">진행률 바</div>
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
            <img
              class="icon"
              src="../assets/MyPage/icon_badge.png"
              alt="뱃지 아이콘"
            />
          </div>
          <div class="btn_text">
            대표 배지를<br />
            설정해 보세요!
          </div>
        </div>
        <div class="middle_4_wrap">
          <div class="btn_wrap btn_badge">
            <img
              class="icon"
              src="../assets/MyPage/icon_calendar.png"
              alt="뱃지 아이콘"
            />
          </div>
          <div class="btn_text">
            산책 기록<br />
            확인하러 가기
          </div>
        </div>
      </div>
      <div class="middle_5">
        <div><p>설정</p></div>
      </div>
      <div class="middle_6">
        <div class="middle_6_wrap">
          <div class="btn_wrap btn_badge">
            <img
              class="icon"
              src="../assets/MyPage/icon_badge.png"
              alt="뱃지 아이콘"
            />
          </div>
          <div class="btn_text">공지사항</div>
        </div>
        <div class="middle_6_wrap">
          <div class="btn_wrap btn_badge">
            <img
              class="icon"
              src="../assets/MyPage/icon_calendar.png"
              alt="뱃지 아이콘"
            />
          </div>
          <div class="btn_text">고객센터</div>
        </div>
        <div class="middle_6_wrap">
          <div class="btn_wrap btn_badge">
            <img
              class="icon"
              src="../assets/MyPage/icon_calendar.png"
              alt="뱃지 아이콘"
            />
          </div>
          <div class="btn_text">설정</div>
        </div>
      </div>
    </div>

    <!-- bottom -->
    <div class="bottom">홈 바</div>
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
  height: 100vh;
}

/* top */
.top {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center; /* 가로 중앙에 위치 */
  align-items: flex-end; /* 세로 위에서 70% 지점에 위치 */
  background: #687089;
  padding: 1em;
}
.top_wrap {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.top_center {
  width: 70%;
  height: fit-content;
}
.top_left,
.top_right {
  width: 15%;
  height: fit-content;
}
.top_name {
  /* position: absolute;
  top: 70%; /* 세로로 위에서 70% 지점에 위치 */
  /* transform: translateY(
    -50%
  ); 텍스트 박스의 높이의 절반만큼 위로 이동하여 중앙 정렬 */
  /*width: 100%;*/ /* 텍스트 박스의 너비를 100%로 설정하여 가로 중앙에 위치 */
  text-align: center; /* 텍스트를 가운데 정렬 */

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  /* identical to box height, or 105% */

  text-align: center;
  letter-spacing: -0.32px;

  color: #ffffff;
}

/* middle */
.middle {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

/* middle 1 */
.middle_1 {
  position: relative;
  width: 100%;
  height: 32%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.user_information_box {
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
.user_information {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 5.5vw;
  line-height: 1.3em;
  letter-spacing: -0.32px;
  color: #747474;
}
.user_name_box {
  position: absolute;
  width: 54%;
  height: 35%;
  top: 8%;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.user_name {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 5.7vw;
  text-align: center;
  letter-spacing: -0.32px;
  color: #747474;
}
.user_character_box {
  position: absolute;
  width: 23%;
  height: 42%;
  top: 8%;
  left: 5%;
}
.user_character {
  width: 100%;
  height: 100%;
}
.user_character_change_box {
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.alarm_box {
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
.middle_2 {
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
.middle_3 {
  position: relative;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
}
.middle_3 div {
  width: 45%;
  height: 80%;

  background: #ffffff;
  border: 1px solid #c3c3c5;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.middle_3 p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 5.5vw;

  text-align: center;
  letter-spacing: -0.32px;

  color: #747474;
}

/* middle 4 */
.middle_4 {
  position: relative;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  box-sizing: border-box;
  padding: 1em;
}
.pet_profile {
  width: fit-content;
  height: 100%;
  border-radius: 100%;
  display: flex;
  align-items: center;
}
.pet_profile_img {
  width: 50px;
  height: 50px;
  background-color: #bbb;
  border-radius: 100%;
}
.pet_status {
  padding-left: 1em;
  flex: 1;
}
.pet_level {
  font-size: 20px;
  font-weight: bold;
  color: #747474;
}
.middle_4_wrap {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.middle_4_wrap .btn_wrap {
  width: 70px;
  height: 70px;
  background-color: #bbb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
}
.middle_4_wrap .btn_wrap .icon {
  width: 45%;
  height: auto;
}
.middle_4_wrap .btn_text {
  font-size: large;
  font-weight: bold;
  color: #747474;
  text-align: center;
  padding-top: 0.5em;
}

/* middle 5 */
.middle_5 {
  position: relative;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.middle_5 div {
  width: 95%;
  height: 80%;

  background: #dedee1;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.middle_5 p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 5.5vw;

  text-align: center;
  letter-spacing: -0.32px;

  color: #747474;
}

/* middle 6 */
.middle_6 {
  position: relative;
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 0.5em 1em;
}
.middle_6_wrap {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.middle_6_wrap .btn_wrap {
  width: 50px;
  height: 50px;
  background-color: #bbb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
}
.middle_6_wrap .btn_wrap .icon {
  width: 45%;
  height: auto;
}
.middle_6_wrap .btn_text {
  font-size: 14px;
  font-weight: bold;
  color: #747474;
  text-align: center;
  padding-top: 0.5em;
}

/* bottom */
.bottom {
  position: relative;
  width: 100%;
  height: 8vh;

  background: rgba(249, 249, 249, 0.94);
  box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}
</style>