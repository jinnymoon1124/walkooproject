<template>
  <div class="badgepage">
    <div class="top">
      <div class="top_wrap">
        <div class="top_left">
          <img
            class="icon"
            src="../assets/BadgePage/LeftIcon.png"
            @click="$router.go(-1)"
          />
        </div>
        <p class="top_center top_name">마이페이지</p>
        <div class="top_right"></div>
      </div>
    </div>
    <div class="middle scroller">
      <div class="mainbadge">
        <div class="MB_main">
          <div class="MB_top">
            <p>대표 배지</p>
          </div>
          <div class="MB_wrap">
            <div class="MB_left">
              <img class="mainbadge_img" src alt="메인배지" />
            </div>
            <div class="MB_right">
              <p>대표 배지를<br />설정해 보세요!</p>
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="badgelist">
        <div class="badge" v-for="(a, i) in 29" :key="i">배지 넣을 공간</div>
      </div>
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
.badgepage {
  width: 100vw;
  height: 100vh;
}
.badgepage .top {
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
.badgepage .top_wrap {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.badgepage .top_center {
  width: 70%;
  height: fit-content;
}
.badgepage .top_left,
.badgepage .top_right {
  width: 15%;
  height: fit-content;
}
.badgepage .top_name {
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 21px;

  text-align: center;
  letter-spacing: -0.32px;

  color: #ffffff;
}
.badgepage .middle {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.badgepage .scroller {
  scroll-behavior: smooth;
  overflow-y: scroll;
  -ms-overflow-style: none;
  /* IE and Edge */
}
.badgepage .scroller::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera*/
}
.badgepage .mainbadge {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.badgepage .MB_main {
  width: 89%;
  height: 85%;

  position: relative;
  box-sizing: border-box;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  padding: 1em;

  background: #e2e2e2;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.badgepage .MB_top {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 5px 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;

  text-align: center;
  letter-spacing: -0.32px;

  color: #747474;
}
.badgepage .MB_wrap {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.badgepage .MB_left {
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: row-reverse;
}
.mainbadge_img {
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 100%;
  margin: 5px;
}
.badgepage .MB_right {
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: row;
}
.badgepage .MB_right p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  /* or 105% */

  text-align: center;
  letter-spacing: -0.32px;

  color: #747474;
}
.badgepage .line {
  width: 90%;
  height: 1px;
  background: #bcbcbc;
}
.badgepage .badgelist {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.badgepage .badge {
  width: 25%;
  height: 29%;
  background: #bcbcbc;
  margin: 10px;
}
.badgepage .bottom {
  position: relative;
  width: 100%;
  height: 8vh;

  background: rgba(249, 249, 249, 0.94);
  box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}
</style>

