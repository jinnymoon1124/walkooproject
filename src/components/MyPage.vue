<template>
  <div class="page">
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
      <div class="middle_2"></div>
      <div class="middle_3">
        <div><p>배지</p></div>
        <div><p>산책기록</p></div>
      </div>
      <div class="middle_4">
        <div class="middle_4_botton">
          <div>
            <img src="../assets/MyPage/icon_badge.png" alt="뱃지 아이콘">
          </div>
        </div>
        <div class="middle_4_botton"></div>
      </div>
      <div class="middle_5">
        <div><p>설정</p></div>
      </div>
      <div class="middle_6"></div>
    </div>
    <div class="bottom">홈 바</div>
  </div>
</template>

<script>
export default {
  name: "MyPage",
};
</script>

<style>
.page {
  width: 100vw;
  height: 100vh;
}
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
.middle_2 {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 14%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1em 1.5em;
}
.middle_3 {
  position: relative;
  width: 100%;
  height: 10%;
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
.middle_4 {
  position: relative;
  width: 100%;
  height: 19%;
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
.middle_6 {
  position: relative;
  width: 100%;
  height: 19%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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

