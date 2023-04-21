<template>
  <div>
    <div class="header">
      <img src="@/assets/backbutton.png" alt="backButton" class="back-button" @click="$router.push('/pg_MainPage')"/>
      <div class= "myfriend">나의 친구</div>
      
        <button class="friendadd-button" @click="$router.push('/pg_friendadd')">친구추가</button>
        
    </div>
    
    <div class="friend-list-box">
      <div class="friend-list">
        <div v-for="friend in friends" :key="friend.id" class="friend" :src="`@/assets/friendimages/${name}`">
          <img :src="friend.image" alt="friendimage" class="friend-image" />
          <span class="friend-name">{{ friend.name }}</span>
        
          <div class="friend-info">
            <button class="walkrq-button" @click="requestWalk(friend.id)">산책 신청</button>
          </div>
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
  },
  data() {
    return {
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

.friend-image {
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
  padding: 5px 10px;
  background-color: #dcdada;
  border: none;
  border-radius: 5px;
  color: #4a4a4a;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 430px;
}
.friendadd-button {
  margin-top: 10px;
  margin-left: 500px;
  padding: 5px 10px;
  background-color: #dcdada;
  border: 5;
  border-radius: 5px;
  color: #4a4a4a;
  font-size: 1rem;
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

</style>