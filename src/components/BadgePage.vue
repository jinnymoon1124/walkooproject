<template>
  <div class="badgepage">
    <!-- top -->
    <div class="top">
      <div class="top_wrap">
        <div class="top_left">
          <img
            class="icon"
            src="../assets/backbutton.png"
            @click="$router.go(-1)"
          />
        </div>
        <p class="top_center top_name">마이페이지</p>
        <div class="top_right"></div>
      </div>
    </div>

    <!-- middle -->
    <div class="middle scroller">
      <!-- 대표 배지 박스 -->
      <div class="mainbadge">
        <div class="MB_main">
          <div class="MB_top">
            <p>대표 배지</p>
          </div>
          <div class="MB_wrap">
            <!-- mainBadgeIndex 값이 있는 경우에만 해당 배지 정보를 보여줍니다 -->
            <div v-if="mainBadgeIndex !== null" class="MB_left">
              <img class="mainbadge_img" :src="badgedata[mainBadgeIndex].img" />
            </div>
            <div v-else class="MB_left">
              <img class="mainbadge_img" src alt="" />
            </div>
            <div class="MB_right">
              <!-- mainBadgeIndex 값이 있는 경우 해당 배지 이름을 보여줍니다 -->
              <p v-if="mainBadgeIndex !== null">
                {{ badgedata[mainBadgeIndex].name }}
              </p>
              <p v-else>대표 배지를<br />설정해 보세요!</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 중간 줄 -->
      <div class="line"></div>

      <!-- 배지 리스트 -->
      <div class="badgelist">
        <!-- BadgeList 템플릿의 badge 요소에서 @click 메서드를 호출 -->
        <div
          class="badge"
          v-for="(a, i) in badgedata"
          :key="i"
          @click="setMainBadge(i)"
        >
          <div class="badge_img">
            <img :src="a.img" />
          </div>
          <div class="badge_name">{{ a.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import badgedata from "../assets/BadgePage/BadgeData.js";

export default {
  name: "MyPage",
  data() {
    return {
      badgedata,
      mainBadgeIndex: null,
    };
  },
  methods: {
    setMainBadge(index) {
      this.mainBadgeIndex = index;
    },
  },
};
</script>

<style scoped>
.badgepage {
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
  width: 150px;
  height: 150px;
  background-color: #fefefe;
  border-radius: 100%;
  margin: -30px 60px 10px 0px;
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
  font-size: 30px;
  line-height: 35px;
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
  width: 30%;
  height: 30%;
  margin: 1%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.badgepage .badge_img {
  width: 150px;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f4f2ee;
  border-radius: 100%;
}
.badgepage .badge_img img {
  width: 60px;
}
.badgepage .badge_name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  letter-spacing: -0.32px;
  color: #747474;

  padding: 0.5vw 0;
}

.mainbadge_img {
  width: 150px;
  height: 150px;
  padding: 20px;
}
</style>

