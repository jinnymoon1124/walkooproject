<template>
  <div id="friendlistpg">
      <!-- 아이디를 입력하라는 모달창 -->
      <div class="black-bg" v-if="openModal == true && selectedFriend">
        <div class="white-bg">
            <h2>약속장소와 시간을 입력하세요!</h2>
            <div class="container2" style=" display: flex;">
              <p class="place">장소</p><input type="text" class="textfield" >
            </div>
            <div class="container2" style=" display: flex;">
              <p class="time">시간</p><input type="text" class="textfield">
            </div>
            
          <div v-if="friends">
            <img class = "image2" :src= "selectedFriend.image">
            <p class="found"> [{{ selectedFriend.name }}] 님에게 산책약속을<br> 보내시겠습니까? </p>
          </div>
          <label>
                <input type="radio" name="option" value="1" ref="radio1">
                <span class="custom-radio"></span>
                사람끼리만 산책해요!
            </label>
            <br />
            <label>
                <input type="radio" name="option" value="2" ref="radio2">
                <span class="custom-radio"></span>
                반려동물과 함께해요!
            </label>
            <br />
            <label>
                <input type="radio" name="option" value="3" ref="radio3">
                <span class="custom-radio"></span>
                상관없어요~
            </label>
            <br />
            <br />
            <br />

            <button class="no" @click="openModal = false && hideDetails">아니오</button>
            <button class="yes" @click="openModal = false && hideDetails">네</button>        
        </div>
      </div>

      <div class="upperbar">
          <img src="@/assets/backbutton.png" alt="backButton" class="back-button" @click = "goBack"/>
          <h1>나의 친구</h1>  
          <button class="friendadd-button2" @click="$router.push('./friendadd')">친구추가</button>
      </div>
      <div class="friend-list-box2">
          <div class="friend-list2">
              <div v-for="friend in friends" 
              :key="friend.id" class="friend2" :src="`@/assets/friendimages/${name}`">
                <img :src="friend.image" alt="friendimage" class="friend-image2" />
                <span class="friend-name2">{{ friend.name }}</span>
                
                <button class="walkrq-button" @click="openModal=true; showDetails(friend)">산책 신청</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
name:'pg_friendadd',

setup() {
  const router = useRouter();
  function goBack() {
  router.go(-1);
  }
  return{
  goBack,
  };
},
methods: {
  goToFriendList() {
  this.$router.push("/friendlist");
  },
  goBack() {
  window.history.back(-1);
  },
  showDetails(friend) {
    this.selectedFriend = friend
  
  },
  hideDetails() {
      this.selectedFriend = null
      this.$refs.radio1.checked = false; 
      this.$refs.radio2.checked = false; 
      this.$refs.radio3.checked = false;
  },

},
data() {
  return {
  openModal : false,
  inputValue : '',
  selectedFriend:null,
  friend : null,    
  friends: [
      {
      id: 1,
      name: "센치",
      image: require("@/assets/friendimage/cenchi.png")
      },
      {
      id: 2,
      name: "유진",
      image: require("@/assets/friendimage/ujin.png")
      },
      {
      id: 3,
      name: "별이",
      image: require("@/assets/friendimage/star.png")
      },
      {
      id: 4,
      name: "나희",
      image: require("@/assets/friendimage/naheecode.png")
      },
      {
      id: 5,
      name: "콩이",
      image: require("@/assets/friendimage/kong.png")
      },
      {
      id: 6,
      name: "지민",
      image: require("@/assets/friendimage/jimny.png")
      },
      {
      id: 6,
      name: "효진",
      image: require("@/assets/friendimage/jinny.png")
      },

      // 친구 목록 추가
  ],
  };
},
};

</script>

<style scoped>
#friendlistpg {
  height: 100vh;
}
.upperbar{
display: flex;
align-items: center;
}
.upperbar > .friendadd-button2 {
  width: 150px;
  height:70px;
  margin-left: 300px;
  border-radius: 30px;
  border: none;
}
.upperbar > .friendadd-button2:hover {
  border: 5px solid grey;
  font-weight: bold;
  transform: scale(1, 1);
  transition: all 0.5s
}
.upperbar > h1 {
  font-size: 50px;
  margin-left: 20px;
}

.friend-list-box2 {
width: 90%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding: 10px;
box-sizing: border-box;
background-color: #f1f1f1;
border: 1px solid #ccc;
border-radius: 10px;
margin-left: 36px;
}

.friend-list2 {
margin: 0;
padding: 0;
white-space: nowrap;
}
.friend2 {
margin: 20px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border-bottom: 2px solid rgb(198, 196, 196);
padding-bottom: 20px;

}
.friend-image2 {
width: 100px;
border-radius: 50%;
margin-left: 10px;
}
.friend-name2 {
margin-top: 1px;
font-size: 25px;
padding-left: 40px;
font-weight: bold;
}

.walkrq-button {
  margin-top: 100;
  margin-left: 300px;
  padding: 5px 10px;
  background-color: #dcdada;
  border: none;
  border-radius: 5px;
  color: #4a4a4a;
  font-size: 1.1rem;
  
}



.found { 
  font-size: 25px;
}

.image2 {
  width: 50%;
  border-radius: 50%;
  margin: 40px;
}

.black-bg {
  width: 95%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position:absolute; 
  padding: 20px;
  z-index: 4;
}

.white-bg {
  width: 70%;
  
  background: rgb(235, 233, 232);
  border-radius: 30px;
  padding: 70px;
  font-size: 20px;
  margin-left: 35px;
}

.no {
  width: 200px;
  height: 60px;
  background-color: #7a7878;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2rem;
  margin-right: 10px;
}
.no:hover {
    border: 5px solid grey;
    background-color: grey;
    color: white;
    transform: scale(1, 1);
    transition: all 0.3s
}

.yes{
  width: 200px;
  height: 60px;
  background-color: #585757;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2rem;
  margin-left: 10px;
}
.yes:hover {
    border: 5px solid grey;
    background-color: grey;
    color: white;
    transform: scale(1, 1);
    transition: all 0.3s
}

.textfield {
  border-radius: 8px;
  width :300px;
  height : 35px;
  margin-top: 21px;
  margin-left: 10px;
  padding: 5px 15px;
  
}

.time, .place {
  background-color: #585757;
  color: #ffffff;
  border-radius: 10px;
  width : 70px;
  height : 37px;
  border: none;
  padding: 10px 5px 0px 5px;

}

.container2 {
  display: flex;
  padding-left: 40px;
}


input[type="radio"] {
  display:none
}

.custom-radio {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid #ccc;
  margin-right: 10px;
  background-color :#ada1a1;
}
input[type="radio"]:checked + .custom-radio {
  background-color: #ffdf52;
  border-color: #ffdf52;
}

label {
  display: inline-block;
  margin: 10px;
  padding: 30px;
  border-radius: 20px;
  font-size: 25px;
  font-weight: bolder;
  cursor: pointer;
  width: 300px;
  background-color: #fcf7e0;
  color: rgb(76, 76, 76);
  
}

</style>