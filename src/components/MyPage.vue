<template>
  <div class="top">
    <p class="top_name">마이페이지</p>
  </div>
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
          src="../assets/icon_character_change.png"
          alt="캐릭터 수정 아이콘"
        />
      </div>
      </div>
      <div class="user_name_box">
        <p class="user_name">나는 미x노미양</p>
      </div>
      <div class="user_character_box">
        <img
          src="../assets/user.png"
          alt="사용자캐릭터"
          class="user_character"
        />
      </div>
      
      <div class="alarm_box">
        <img src="../assets/icon_alarm.png" alt="알람 아이콘" />
      </div>
    </div>
    <div class="middle_2"></div>
    <div class="middle_3"></div>
    <div class="middle_4"></div>
    <div class="middle_5"></div>
    <div class="middle_6"></div>
  </div>
  <div class="bottom">홈 바</div>
</template>

<script>
export default {
  name: "MyPage",
};
</script>

<style>
.top {
  position: relative;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center; /* 가로 중앙에 위치 */
  align-items: flex-start; /* 세로 위에서 70% 지점에 위치 */
  background: #687089;
}
.top_name {
  position: absolute;
  top: 70%; /* 세로로 위에서 70% 지점에 위치 */
  transform: translateY(
    -50%
  ); /* 텍스트 박스의 높이의 절반만큼 위로 이동하여 중앙 정렬 */
  width: 100%; /* 텍스트 박스의 너비를 100%로 설정하여 가로 중앙에 위치 */
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
.middle {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.middle_1 {
  position: relative;
  width: 100%;
  height: 38%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.middle_2 {
  position: relative;
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.middle_3 {
  position: relative;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.middle_4 {
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.middle_5 {
  position: relative;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.middle_6 {
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.user_information_box {
  width: 75%;
  height: 60%;

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
  font-size: 130%;
  line-height: 130%;

  letter-spacing: -0.32px;

  color: #747474;
}
.user_name_box {
  position: absolute;
  width: 54%;
  height: 13%;
  top: 5%;

  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.user_name {
  position: absolute;
  top: 50%; /* 세로로 위에서 70% 지점에 위치 */
  transform: translateY(
    -50%
  ); /* 텍스트 박스의 높이의 절반만큼 위로 이동하여 중앙 정렬 */
  width: 100%; /* 텍스트 박스의 너비를 100%로 설정하여 가로 중앙에 위치 */

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 21px;
  /* identical to box height, or 95% */

  text-align: center;
  letter-spacing: -0.32px;

  color: #747474;
}
.user_character_box {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 4%;
  left: 3%;
}
.user_character {
  width: 100%;
  height: 100%;
}
.user_character_change_box {
  width: 45px;
  height: 45px;

  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.alarm_box {
  position: absolute;
  width: 64px;
  height: 66px;
  right: 2%;
  top: 2%;

  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */

  border-radius: 100%;
  border: 3px solid #423a35;
  background: #f6f6f6;
}
.bottom {
  position: relative;
  width: 100%;
  height: 8vh;

  background: rgba(249, 249, 249, 0.94);
  box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}
</style>

