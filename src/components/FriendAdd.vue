<template>
    <div id="friendaddpg">
        <!-- 아이디를 입력하라는 모달창 -->
        <div class="black-bg2" v-if="openModal == true">
            <div class="white-bg2">
                

                <h2>친구의 ID를 입력하세요!</h2>
                <input type="text" class="textfield" v-model="input" placeholder="입력해주세요!">

                <button class="ok" @click="findFriend">확인</button>

                    <div v-if="friend">
                        <img class = "image2" :src="friend.image">
                        <p class="found"> {{ friend.name }}님이 발견되었습니다! <br> 추가하시겠습니까?</p>
                        <button class="reject" @click="openModal = false">거절</button>
                        <button class="accept" @click="openModal = false">수락</button>
                    </div>

            </div>
        </div>
        <div class="upperbar">
            <img src="@/assets/backbutton.png" alt="backButton" class="back-button" @click = "goBack"/>
            <h1>친구 추가</h1>  
            <button class="friendadd-button2" @click="openModal= true">ID<br/>친구추가</button>
        </div>
        <div class="friend-list-box2">
            <div class="friend-list2">
                <div v-for="friend in friends" :key="friend.id" class="friend2" :src="`@/assets/friendimages/${name}`">
                <img :src="friend.image" alt="friendimage" class="friend-image2" />
                <span class="friend-name2">{{ friend.name }}</span>
                
                <img src="../assets/addfriendbutton.png" alt="addfriendbutton" class="addfriend-button2" />
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
    findFriend() {
      const friend = this.friends.find(f => f.id === parseInt(this.input));
      this.friend = friend || null;    
    }
},
data() {
    return {
    openModal : false,
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

<style scoped>
#friendaddpg {
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

.addfriend-button2 {
margin-left: 320px;
padding: 10px 15px 10px 20px;
background-color: #dcdada;
cursor: pointer;
border-radius: 60px;
}


.black-bg2 {
width: 95%;
height: 100%;
background: rgba(0,0,0,0.5);
position:absolute; 
padding: 20px;
z-index: 4;

}
.white-bg2 {
width: 70%; 
background: rgb(235, 233, 232);
border-radius: 30px;
padding: 70px;
font-size: 20px;
margin: auto;
margin-top: 10vh;

}

.ok{
border-radius: 8px;
margin-left: 10px;
width :60px;
height : 50px;
border: 4px solid lightgray;
font-weight: bold;
}

.ok:hover {
    border: 5px solid grey;
    background-color: grey;
    color: white;
    transform: scale(1, 1);
    transition: all 0.2s
}

.textfield {
border-radius: 8px;
width :300px;
height : 45px;
padding-left: 10px;
border: 4px solid gray;


}
.found { 
    font-size: 25px;
}

.image2 {
    width: 50%;
    border-radius: 50%;
    margin: 40px;
}

.reject {
padding: 10px 60px;
background-color: #dcdada;
border: none;
border-radius: 25px;
color: #4a4a4a;
font-size: 1.7rem;
font-weight: bold;
margin-right: 10px;
}

.reject:hover {
    border: 5px solid rgb(99, 4, 4);
    background-color: rgb(99, 4, 4);
    color: white;
    transform: scale(1, 1);
    transition: all 0.2s
}

.accept{
padding: 10px 60px;
background-color: #dcdada;
border: none;
border-radius: 25px;
color: #4a4a4a;
font-size: 1.7rem;
margin-left: 10px;
font-weight: bolder;
}

.accept:hover {
    border: 5px solid rgb(3, 87, 44);
    background-color: rgb(3, 87, 44);
    color: white;
    transform: scale(1, 1);
    transition: all 0.2s
}

</style>