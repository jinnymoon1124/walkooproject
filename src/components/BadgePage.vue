<template>
  <div class="page">
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
            <div class="MB_right">
                <div class=""></div>
            </div>
            <div class="MB_left"></div>
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
.page {
  width: 100vw;
  height: 100vh;
}
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
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;

  text-align: center;
  letter-spacing: -0.32px;

  color: #ffffff;
}
.middle {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.scroller {
  scroll-behavior: smooth;
  overflow-y: scroll;
  -ms-overflow-style: none;
  /* IE and Edge */
}
.scroller::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera*/
}
.mainbadge {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.MB_main {
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
.MB_top {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.MB_wrap {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.MB_right,
.MB_left {
  width: 50%;
  height: fit-content;
}
.line {
  width: 90%;
  height: 1px;
  background: #bcbcbc;
}
.badgelist {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.badge {
  width: 25%;
  height: 29%;
  background: #bcbcbc;
  margin: 10px;
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

