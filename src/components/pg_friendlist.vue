<template>
  <div>
    <div class="header">
      <img src="@/assets/backbutton.png" alt="backButton" class="back-button" @click="$router.push('/pg_MainPage')"/>
      <div class= "myfriend">나의 친구</div>
      



         <!-- 약속장소와 시간을 정하는 모달창 -->
      <div class="black-bg" v-if="openModal == true">
        <div class="white-bg">

            <h2>약속장소와 시간을 입력하세요!</h2>
            <div class="container" style=" display: flex;">
              <p class="place">장소</p><input type="text" class="textfield" >
            </div>

            <div class="container" style=" display: flex;">
              <p class="time">시간</p><input type="text" class="textfield">
            </div>
            

          <div v-if="friends">
            <img class = "image2" :src= "friends.image">
            <p class="found"> {{ friends.name }} 님에게 산책약속을<br> 보내시겠습니까? </p>
          </div>


            <label>
                <input type="radio" name="option" value="1">
                <span class="custom-radio"></span>
                사람끼리만 산책해요!
            </label>
            <br>
            <label>
                <input type="radio" name="option" value="2">
                <span class="custom-radio"></span>
                반려동물과 함께해요!
            </label>
            <br>
            <label>
                <input type="radio" name="option" value="3">
                <span class="custom-radio"></span>
                &emsp;&nbsp;&nbsp;&nbsp; 상관없어요~ &emsp;&nbsp;&nbsp;
            </label>
            <br>
            <br>
            <br>

            <button class="no" @click="$router.push('./walkdayreport')">아니오</button>
            <button class="yes" @click="openModal = false">네</button>

        
        </div>
    </div>


        <button class="friendadd-button" @click="$router.push('/pg_friendadd')">친구추가</button>
        
    </div>
    
    <div class="friend-list-box">
      <div class="friend-list">
        <div v-for="friend in friends" :key="friend.id" class="friend" :src="`@/assets/friendimages/${name}`">
        <img :src="friend.image" alt="friendimage" class="friend-image" />
        <span class="friend-name">{{ friend.name }}</span>
        

            <button class="walkrq-button" @click="openModal=true">산책 신청</button>
          </div>
        </div>
      </div>
      
    </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name:'pg_friendlist',
  
  setup() {
    const router = useRouter();
    function goBack() {
      router.go(-1);
    }
    return{
      goBack,
    };
  },


  method: {
    goToFriendAdd() {
      this.$router.push("/pg_friendlist");
    },
    goBack() {
    window.history.back(-1);
    },
    requestWalkFriend() {
      const friend = this.friends.click(f => f.id === parseInt(this.input));
      this.friend = friend || null;    
    },
    클릭이벤트: function (e) {
      console.log(e);
      console.log('클릭되었나?');
    },
    
  },
  data() {
    return {
      openModal: false,  
      inputValue : '',
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

<style>
.header{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.myfriend {
  margin: 0;
  font-size: 100;
}

.friend-list-box {
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-left: 36px;
}

.friend-list {
  display: block;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}

.friend {
  margin-top: 20px;
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ada1a1;
}

.friend:last-child {
  margin-bottom: 0;
  border-bottom: none;
}

.friend-image {
  width: 50%;
  height: auto;
  border-radius: 50%;
  margin : 5px 50px 5px 10px;
  
}

.friend-info {
  display: flex;
  justify-content: space-between;
}

.friend-name {
  margin-top: 1px;
  font-size: 1.2rem;
  text-align: center;
  
}

.walkrq-button {
  margin-top: 100;
  margin-left: 380px;
  padding: 5px 10px;
  background-color: #dcdada;
  border: none;
  border-radius: 5px;
  color: #4a4a4a;
  font-size: 1.1rem;
  
}

.friendadd-button {
  margin-top: 10px;
  margin-left: 500px;
  padding: 5px 10px;
  background-color: #dcdada;
  border-radius: 5px;
  color: #4a4a4a;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 60px;

}



.black-bg {
  width: 95%;
  height: 200%;
  background: rgba(0,0,0,0.5);
  position:absolute; 
  padding: 20px;
  z-index: 4;

}

.white-bg {
  width: 100%;
  height: 45%;
  background: rgb(235, 233, 232);
  border-radius: 30px;
  padding: 70px;
  font-size: 20px;
  margin-left: 68px;
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
  margin-top: 18px;
  margin-left: 10px;
  
}

.time {
  background-color: #585757;
  color: #ffffff;
  border-radius: 10px;
  width : 70px;
  height : 37px;
  border: none;

}

.place {
  background-color: #585757;
  color: #ffffff;
  border-radius: 10px;
  width : 70px;
  height : 37px;
  border: none;
}

.container {
  display: flex;
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

.image2 {
    width: 50%;
    border-radius: 50%;
    margin: 40px;
}

</style>