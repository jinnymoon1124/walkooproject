<template>
  <div class="WalkMate">
    <div class="header">
      <div class="line"></div>
      <div class="top_wrap">
        <div class="top_left">
          <img src="../assets/004.png" @click="$router.go(-1)" />
        </div>
        <p class="top_center header_name">산책 동행인 추가</p>
        <div class="top_right"></div>
      </div>
    </div>

    <div class="WalkMate_middle_1">
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
    </div>
    <div class="WalkMate_middle_2">
      <div class="text-box">가족 동행인 추가</div>
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
    </div>
    <div class="WalkMate_middle_3">
      <div class="text-box">친구 동행인 추가</div>
      <div class="white-box">
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
    </div>
    <div class="WalkMate_middle_4">
      <button class="walkend-button">
        <router-link to="/KakaoMap" class="WalkEnd-link">
          <div>시 작</div>
        </router-link>
      </button>
    </div>
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
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 100%;
  height: 12%;
  display: flex;
  box-sizing: border-box;
  /* background-color: #ffffff; */
  flex-direction: column-reverse;
  align-items: center;
}
.header_name {
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 21px;

  text-align: center;
  letter-spacing: -0.32px;
}
.WalkMate .top_left img {
  width: 32px;
  height: 32px;
  padding-left: 15%;
}

.WalkMate_middle_1 {
  width: 100%;
  height: 28%;
  padding: 5% 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.WalkMate_middle_2 {
  width: 100%;
  height: 25%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.WalkMate_middle_3 {
  width: 100%;
  height: 25%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.WalkMate_middle_4 {
  width: 100%;
  height: 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  width: 100%;
  height: 100%;
  background-color: #e2f1ff;
}
.box {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
}

.text-box {
  width: 100%;
  height: 15%;
  display: flex;
  background-color: #b4bdc6;
  justify-content: center;
  align-items: center;
}
.white-box {
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
}

.circle {
  background-color: hsl(0, 0%, 100%);
  border-radius: 50%;
  margin: 1%;
  box-sizing: border-box;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.circle-img {
  width: 120px;
  height: 100px;
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

.walkend-button {
  width: 50%;
  height: 90%;
  background-color: #ffebb6;
  color: rgb(52, 52, 52);
  font-size: 3rem;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;
  border: 3px solid rgb(0, 0, 0);
}
.WalkEnd-link {
  display: block;
  text-decoration: none;
  color: rgb(52, 52, 52);
}
</style>