<template>
  <div class="WalkMate">
    <div class="header">
      <div class="left">
        <router-link to="/">
          <img src="../assets/004.png" alt="back" />
        </router-link>
      </div>
    </div>
    <div style="border-top: 1px solid black"></div>
    <div class="container">
      <div class="centered-text">
        <h1>산책 동행인 추가</h1>
      </div>
    </div>
    <div class="container">
      <div class="box" ref="box">
        <div
          v-for="index in selectedCircles"
          :key="index"
          class="circle-img circle"
        >
          <img :src="getPerson(index).image" :alt="getPerson(index).name" />
          <div class="name">{{ getPerson(index).name }}</div>
        </div>
      </div>
    </div>
    <div class="text-box">
      <p>산책 동행인 추가 - 가족</p>
    </div>
    <div class="white-box">
      <div
        v-for="(person, index) in peopleFamily"
        :key="index"
        class="circle-img circle"
        :class="{ selected: selectedCircles.includes(index) }"
        @click="selectCircle(index)"
      >
        <img :src="person.image" :alt="person.name" />
        <p class="name">{{ person.name }}</p>
      </div>
    </div>
    <div class="text-box2">
      <p>산책 동행인 추가 - 친구</p>
    </div>
    <div class="white-box2">
      <div
        v-for="(person, index) in peopleFriends"
        :key="index"
        class="circle-img circle"
        :class="{
          selected: selectedCircles.includes(index + peopleFamily.length),
        }"
        @click="selectCircle(index + peopleFamily.length)"
      >
        <img :src="person.image" :alt="person.name" />
        <p class="name">{{ person.name }}</p>
      </div>
    </div>
    <button class="walkend-button">
      <router-link to="/KakaoMap" class="WalkEnd-link">
        <div class="WalkEnd-text">시 작</div>
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
      selectedCircles: [],
      peopleFamily: [
        {
          name: "강아쥐",
          image: require("../assets/getpoint.png"),
        },
        {
          name: "문효진",
          image: require("../assets/person2.png"),
        },
        {
          name: "박태연",
          image: require("../assets/person3.png"),
        },
        {
          name: "김지민",
          image: require("../assets/person2.png"),
        },
        {
          name: "김유진",
          image: require("../assets/person1.png"),
        },
      ],
      peopleFriends: [
        {
          name: "조나희",
          image: require("../assets/person2.png"),
        },
        {
          name: "조나영",
          image: require("../assets/person3.png"),
        },
        {
          name: "임희승",
          image: require("../assets/person1.png"),
        },
        {
          name: "조별달",
          image: require("../assets/person2.png"),
        },
        {
          name: "김콩이",
          image: require("../assets/person3.png"),
        },
        {
          name: "문센치",
          image: require("../assets/person1.png"),
        },
        {
          name: "박뭉실",
          image: require("../assets/person2.png"),
        },
        {
          name: "별콩뭉",
          image: require("../assets/person3.png"),
        },
        {
          name: "치치치",
          image: require("../assets/person1.png"),
        },
      ],
    };
  },
  methods: {
    selectCircle(index) {
      if (this.selectedCircles.length >= 5) {
        alert("더 이상 선택할 수 없습니다.");
        this.selectedCircles = [];
        return;
      }
      if (this.selectedCircles.includes(index)) {
        const i = this.selectedCircles.indexOf(index);
        if (i > -1) {
          this.selectedCircles.splice(i, 1);
        }
      } else {
        this.selectedCircles.push(index);
      }
    },
    removeCircle(index) {
      const i = this.selectedCircles.indexOf(index);
      if (i > -1) {
        this.selectedCircles.splice(i, 1);
      }
    },
    getPerson(index) {
      if (index < this.peopleFamily.length) {
        return this.peopleFamily[index];
      } else {
        return this.peopleFriends[index - this.peopleFamily.length];
      }
    },
  },
  watch: {
    selectedCircles(newVal) {
      const box = this.$refs.box;
      if (newVal.length === 0) {
        return;
      }
      box.innerHTML = "";
      for (let i = 0; i < newVal.length; i++) {
        const index = newVal[i];
        let person = null;
        if (index < this.peopleFamily.length) {
          person = this.peopleFamily[index];
        } else {
          person = this.peopleFriends[index - this.peopleFamily.length];
        }
        const circle = document.createElement("div");
        const image = document.createElement("img"); // 이미지 태그 생성
        const name = document.createElement("p");
        circle.classList.add("circle-img", "circle");
        image.src = person.image; // 이미지 태그에 src 추가
        image.alt = person.name; // 이미지 태그에 alt 추가
        circle.appendChild(image); // 이미지 태그를 circle 요소에 추가
        box.appendChild(circle);
      }
    },
  },
});
</script>
         


<style scoped>
.selected {
  background-color: #f5a9bc;
}

.name {
  display: inline-block;
  margin-top: 10px;
  font-weight: bold;
}
</style>

<style>
.WalkMate {
  position: relative;
  background-color: #ebefff;
  display: flex;
  flex-direction: column;
  max-width: 750px;
  margin: 0 auto;
  height: 100vh; /* 화면 높이를 100vh로 설정 */
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #ebefff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 750px;
  margin: 0 auto;
  padding: 16px;
  background-color: #ffffff;
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
}

h1 {
  font-size: 20px;
  font-weight: bold;
}

.centered-text {
  margin-top: -80px;
}

.box {
  background-color: rgb(184, 183, 183);
  height: 300px;
  width: 100%;
  max-width: 750px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 10px solid rgb(255, 255, 255);
  border-bottom: 10px solid rgb(255, 255, 255);
}

.circle {
  background-color: hsl(0, 0%, 100%);
  border-radius: 50%;
  margin: 10px 15px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.circle-img {
  width: 120px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
}

.circle-img img {
  width: 50%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.5;
}

/* .box .circle-img img {
  display: none;
} */

.text-box {
  position: absolute;
  margin-top: 510px;
  left: 50%;
  transform: translateX(-50%);
  width: 750px;
  padding: 3px;
  background-color: #b4bdc6;
  text-align: center;
  white-space: nowrap;
}

.white-box {
  width: 750px;
  height: 180px;
  background-color: #ededed;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
}

.text-box2 {
  position: absolute;
  margin-top: 780px;
  left: 50%;
  transform: translateX(-50%);
  width: 750px;
  padding: 3px;
  background-color: #b4bdc6;
  text-align: center;
  white-space: nowrap;
}

.white-box2 {
  width: 750px;
  height: 180px;
  background-color: #ededed;
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
}

.walkend-button {
  position: absolute;
  top: 1115px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 60px;
  background-color: #ffebb6;
  color: rgb(52, 52, 52);
  font-size: 3rem;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  font-weight: bold; /* 글씨 두껍게 설정 */
  border: 3px solid rgb(0, 0, 0);
  text-align: center;
}

.WalkEnd-link {
  display: block;
  text-decoration: none;
  color: rgb(52, 52, 52);
}
</style>