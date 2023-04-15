<template>
  <div class="mypage">
    <div class="top">
      <h1>마이페이지</h1>
    </div>

    <div class="information"></div>
    <div class="namebox"></div>
    <p class="name">센치누나애오</p>
    <img src="../assets/girl.png" alt="사람" class="사용자캐릭터" />
    <img src="../assets/알람버튼.png" alt="알람버튼" class="알람버튼" />
  </div>
</template>

<script>
export default {
  name: "MyPage",
};
</script>

<style>
.mypage {
  width: inherit;
  height: 1623px;
  position: relative;
}
.top {
  background-color: #687089;
  color: white;
  width: inherit;
  height: 185px;
}
.top h1 {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
}
.namebox {
  position: absolute;
  width: 411px;
  height: 164px;
  left: 185px;
  top: 249px;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.name {
  position: absolute;
  width: 231px;
  height: 40px;
  left: 267px;
  top: 311px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 21px;
  /* or 95% */

  text-align: center;
  letter-spacing: -0.32px;

  color: #747474;
}
.information {
  position: absolute;
  width: 575px;
  height: 307px;
  left: 131px;
  top: 332px;

  background: #eaeddf;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.사용자캐릭터 {
  position: absolute;
  width: 173px;
  height: 189px;
  left: 46px;
  top: 224px;
}
.알람버튼 {
  position: absolute;
  width: 123.08px;
  height: 126.65px;
  left: 615.38px;
  top: 195.73px;
}
</style>

