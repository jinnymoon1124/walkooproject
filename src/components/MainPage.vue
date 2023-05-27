<template>
  <div class="MainPage">
    <!-- 공지사항 -->
    <div class="notice">
      <div class="text-box1">
        <p>공지사항</p>
      </div>
      <img
        :src="require(`../assets/${images[currentImageIndex]}`)"
        alt="image"
        class="notice-image"
      />
      <button class="slide-button" @click="moveToNextImage">></button>
    </div>
    <div class="content">
      <!-- 상단 **네 하우스, 알림창 버튼 -->
      <div class="top">
        <div class="title">'나희'네 하우스</div>
        <div class="btn_wrap alarm">
          <router-link to="/alarm" class="circle-button">
            <img src="../assets/bell.png" alt="button" />
          </router-link>
        </div>
      </div>
      <!-- 가족 이미지 -->
      <img src="../assets/familyimg.jpg" alt="house" class="house-image" />
      <!-- 산책시작 버튼 -->
      <div class="btn_wrap walking-btn">
        <button class="walking-button">
          <router-link to="/WalkMate" class="walking-link">
            <div class="walking-text">
              산 책
              <br />
              시 작
            </div>
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPage",
  data() {
    return {
      pageName: "MainPage",
      images: ["001.png", "002.png", "003.png"],
      currentImageIndex: 0,
    };
  },
  methods: {
    moveToNextImage() {
      if (this.currentImageIndex < this.images.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0;
      }
    },
  },
});
</script>

<style>
.MainPage {
  background-color: #ebefff;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  height: 90vh;
  overflow-y: auto;
}
.MainPage .notice {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.MainPage .text-box1 {
  width: 100%;
  height: auto;
  background-color: #d9b3b9;
  display: flex;
  align-items: center;
  justify-content: center;
}
.MainPage .notice-image {
  width: 100%;
}
.MainPage .slide-button {
  bottom: 20%;
  right: 5%;
  position: absolute;
  /* transform: translateX(-50%); */
  padding: 1px 10px;
  background-color: #efeeee;
  color: rgb(52, 52, 52);
  font-size: 2rem;
  border-radius: 50%;
  /* border: none; */
  cursor: pointer;
  font-weight: bold;
  border: 0.1px solid black;
}
.MainPage .content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.MainPage .top {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.MainPage .title {
  color: white;
  text-shadow: 1px 1px 1px #000; /* 텍스트 그림자 추가 */
  padding: 1em;
}
.MainPage .btn_wrap.alarm {
  padding: 1em;
}
.MainPage .circle-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(254, 253, 205);
}
.MainPage .house-image {
  width: 90%;
  max-width: fit-content;
  height: auto;
  max-height: 35%;
  margin: 0 5%;
}
.MainPage .btn_wrap.walking-btn {
  /* padding: 0.5em; */
  flex-grow: 1;
  display: flex;
  align-items: center;
}
.MainPage .walking-button {
  background-color: #ffebb6;
  font-size: 2em;
  border-radius: 30%;
  cursor: pointer;
  font-weight: bold;
  border: 15px solid rgb(255, 255, 255);
  text-align: center;
  width: 5em;
  height: 5em;
}
.MainPage .walking-link {
  text-decoration: none;
  color: rgb(52, 52, 52);
}
.MainPage .circle-button img {
  width: 80%;
  height: 80%;
}
</style>