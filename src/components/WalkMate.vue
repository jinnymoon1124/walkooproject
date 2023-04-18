<template>
    <div>
      <div class="header">
        <div class="left">
          <router-link to="/">
            <img src="../assets/004.png" alt="back" />
          </router-link>
        </div>
      </div>
      <div style="border-top: 1px solid black;"></div>
      <div class="container">
        <div class="centered-text">
          <h1>산책 동행인 추가</h1>
        </div>
      </div>
      <div class="container">
        <div class="box">
          <div class="circle">
            <div class="circle-img">
              <img src="../assets/person1.png" alt="person" />
            </div>
          </div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
      <div class="text-box">
        <p>산책 동행인 추가 - 가족</p>
      </div>
      <div class="white-box">
        <div class="circle-img circle">
          <img src="../assets/person2.png" alt="person" />
        </div>
        <div class="circle-img circle">
          <img src="../assets/person3.png" alt="person" />
        </div>
        <div class="circle-img circle">
          <img src="../assets/person1.png" alt="person" />
        </div>
        <div class="circle-img circle">
          <img src="../assets/person1.png" alt="person" />
        </div>
        <div class="circle-img circle">
          <img src="../assets/person2.png" alt="person" />
        </div>
      </div>
      <div class="text-box2">
        <p>산책 동행인 추가 - 친구</p>
      </div>
      <div class="white-box2">
        <div class="circle-img circle">
          <img src="../assets/person2.png" alt="person" />
        </div>
        <div class="circle-img circle">
          <img src="../assets/person3.png" alt="person" />
        </div>
        <div class="circle-img circle">
          <img src="../assets/person2.png" alt="person" />
        </div>
        <div class="circle-img circle">
          <img src="../assets/person1.png" alt="person" />
        </div>
        <div class="circle-img circle">
          <img src="../assets/person2.png" alt="person" />
        </div>
        <div class="circle-img circle">
          <img src="../assets/person1.png" alt="person" />
        </div>
        <div class="circle-img circle">
          <img src="../assets/person3.png" alt="person" />
        </div>
    </div>
    <button class="walkend-button">
        <router-link to="/KakaoMap" class="WalkEnd-link">
        <div class="WalkEnd-text">
        시  작
        </div>
        </router-link>
      </button>
</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WalkMate",
  data() {
    return {
      pageName: "WalkMate",
    };
  },
});
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 750px;
  margin: 0 auto;
  padding: 16px;
}

.left {
  display: flex;
  align-items: center;
}

.left img {
  width: 35px;
  height: 35px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  font-size: 20px;
  font-weight: bold;
}

.centered-text {
  margin-top: -80px;
}

.box {
  background-color: rgb(231, 231, 249);
  height: 180px;
  width: 100%;
  max-width: 750px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 100px;
  height: 100px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 50%;
  margin: 0px 10px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
}

.circle-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.text-box {
position: absolute;
top: 290px;
left: 50%;
transform: translateX(-50%);
width: 742px;
padding: 3px;
background-color: #B4BDC6;
text-align: center;
white-space: nowrap;

}

.white-box {
  width: 749px;
  height: 130px;
  background-color: #ededed;
  margin-top: 70px;
  display: flex;
justify-content: center;
align-items: center;
}


.text-box2 {
position: absolute;
top: 470px;
left: 50%;
transform: translateX(-50%);
width: 742px;
padding: 3px;
background-color: #B4BDC6;
text-align: center;
white-space: nowrap;

}

.white-box2 {
  width: 749px;
  height: 130px;
  background-color: #ededed;
  margin-top: 50px;
  display: flex;
justify-content: center;
align-items: center;
}

.walkend-button {
position: absolute;
top: 111%;
left: 50%;
transform: translate(-50%, -50%);
padding: 15px 35px;
background-color: #FFEBB6;
color: rgb(52, 52, 52);
font-size: 3rem;
border-radius: 40px;
border: none;
cursor: pointer;
font-weight: bold; /* 글씨 두껍게 설정 */
border: 1px solid rgb(0, 0, 0);
text-align: center;
}

.WalkEnd-link {
display: block;
width: 100%;
height: 100%;
text-decoration: none;
color: rgb(52, 52, 52);
}

</style>
