<template>
  <div class="MainPage">
    <div class="title">'나희'네 하우스</div>
    <div class="image">
      <img src="../assets/familyimg.jpg" alt="house" class="house-image" />
      <button class="walking-button">
        <router-link to="/WalkMate" class="walking-link">
        <div class="walking-text">
        산  책
        <br />
        시  작
        </div>
        </router-link>
      </button>
      <div class="text-box1">
        <p>공지사항</p>
      </div>
      <img :src="require(`../assets/${images[currentImageIndex]}`)" alt="image" class="notice-image" />
      <button class="slide-button" @click="moveToNextImage">></button>
    </div>
    <router-link to="/alarm" class="circle-button">
      <img src="../assets/bell.png" alt="button" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPage",
  data() {
    return {
      pageName: "MainPage",
      images: [
        "001.png",
        "002.png",
        "003.png",
      ],
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
  position: relative; 
  background-color: #EBEFFF;
  display: flex;
  flex-direction: column;
  max-width: 750px;
  margin: 0 auto;
  height: 96vh; /* 화면 높이를 100vh로 설정 */
  overflow-y: auto; /* 스크롤이 생기도록 설정 */
}

.title {
  position: absolute; /* 부모 요소를 기준으로 절대 위치에 배치하기 위해 position 속성을 absolute로 지정합니다. */
  top: 70px;
  left: 80px;
  font-size: 1.5rem;
  color: white;
  text-shadow: 1px 1px 1px #000; /* 텍스트 그림자 추가 */
}

.image {
  position: relative;
  margin-top: 140px;
}

.house-image {
  width: 600px;
  max-height: 100%;
}

.walking-button {
  position: absolute;
  top: 135%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 80px;
  background-color: #FFEBB6;
  color: rgb(52, 52, 52);
  font-size: 3rem;
  border-radius: 70px;
  border: none;
  cursor: pointer;
  font-weight: bold; /* 글씨 두껍게 설정 */
  border: 15px solid rgb(255, 255, 255);
  text-align: center;
}

.walking-link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: rgb(52, 52, 52);
}

.circle-button {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(254, 253, 205);
}

.circle-button img {
  width: 80%;
  height: 80%;
}

.text-box1 {
  position: absolute;
  top: 175%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: #D9B3B9;
  text-align: center;
  white-space: nowrap;
}

.notice-image {
  position: absolute;
  top: 190%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 25vh;
}

.slide-button {
  position: absolute;
  bottom: -510px;
  left: 96%;
  transform: translateX(-50%);
  padding: 1px 10px;
  background-color: #efeeee;
  color: rgb(52, 52, 52);
  font-size: 2rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-weight: bold; /* 글씨 두껍게 설정 */
  border: 0.1px solid black;
}
</style>