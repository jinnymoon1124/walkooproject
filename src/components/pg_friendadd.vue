<template>
  <div>
    <div class="header">
      <img src="@/assets/backbutton.png" alt="backButton" class="back-button" @click = "goBack"/>
      <div class= "myfriend">친구 추가</div>

            <!-- 아이디를 입력하라는 모달창 -->
    <div class="black-bg" v-if="openModal == true">
        <div class="white-bg">
            <h2>친구의 ID를 입력하세요!</h2>
            <input type="text" class="textfield">
            <button class="ok" @click="$router.push('./walkdayreport')">확인</button><br><br>
          <img src="../assets/friendimage/ujin2.png" class="image">
        
            
            <p> " 유진 "님이 발견되었습니다! <br> 추가하시겠습니까?</p>
            <button class="reject" @click="openModal = false">거절</button>
            <button class="accept" @click="openModal = false">수락</button>
        </div>
    </div>

        <div>
          <button class="friendadd-button" @click="openModal= true">아이디로<br/>친구추가</button>
        </div>
  </div>
        
      
    
    </div>
    
    <div class="friend-list-box">
      <div class="friend-list">
        <div v-for="friend in friends" :key="friend.id" class="friend" :src="`@/assets/friendimages/${name}`">
          <img :src="friend.image" alt="friendimage" class="friend-image" />
          <span class="friend-name">{{ friend.name }}</span>
        
          <div class="friend-info">
            <img src="@/assets/addfriendbutton.png" alt="addfriendbutton" class="addfriend-button" />
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


  method: {
    goToFriendList() {
      this.$router.push("/pg_friendlist");
    },
    goBack() {
      window.history.back(-1);
    },
    goTofriendidadd() {
      this.$router.push("/pg_friendadd2");
    },
   
    
  },
  data() {
    return {
      openModal : false,
     
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
  background-color: #f1f1f1;
  border: 1px solid #ccc;
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
  border-bottom: 1px solid #ccc;
}

.friend:last-child {
  margin-bottom: 0;
  border-bottom: none;
}

.image {
  width: 50%;
  height: auto;
  border-radius: 50%;
  
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
  margin-top: 10px;
  margin-left: 380px; /* 수정된 값 */
  padding: 5px 10px;
  background-color: #dcdada;
  border: 5;
  border-radius: 5px;
  color: #4a4a4a;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 60px;
}

.addfriend-button {
  margin-top: 100;
  margin-left: 380px;
  padding: 5px 10px;
  background-color: #dcdada;
  cursor: pointer;
  border-radius: 60px;

}

.box{
  box-sizing: border-box;
  position: absolute;
  width: 357px;
  height: 613px;
  left: 17px;
  top: 125px;

  background: #EDEDED;
  border: 1px solid #BFB7B7;
  border-radius: 18px;
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
  width: 60%; 
  background: rgb(235, 233, 232);
  border-radius: 30px;
 
  padding: 70px;
  font-size: 20px;
  margin-top: 1000px;
  margin-left: 68px;
}
.ok{
  border-radius: 8px;
  margin-left: 10px;
  width :60px;
  height : 40px;
}

.textfield {
  border-radius: 8px;
  width :300px;
  height : 35px;
}

.reject {

  padding: 10px 60px;
  background-color: #7a7878;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2rem;
  margin-right: 10px;
}

.accept{
  padding: 10px 60px;
  background-color: #585757;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2rem;
  margin-left: 10px;
}

</style>