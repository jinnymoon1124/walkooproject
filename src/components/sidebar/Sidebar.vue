<template>
  <div class="sidebar" :style="{ width : sidebarWidth, height: sidebarHeight }">
    <!-- 산책동행신청 모달창 -->
    <div class="black-bg" v-if="openModal == true">
        <div class="white-bg">
            <h2>[효진]에게 산책 동행 신청을 보낼까요?</h2>
            <label>
                <input type="radio" name="option" value="1">
                <span class="custom-radio"></span>
                사람끼리만 산책해요!
            </label>
            
            <label>
                <input type="radio" name="option" value="2">
                <span class="custom-radio"></span>
                반려동물과 함께해요!
            </label>
            <label>
                <input type="radio" name="option" value="3">
                <span class="custom-radio"></span>
                상관없어요~
            </label>
            <br>

            <button class="send" @click="openModal = false">보내기</button>
            <button class="close" @click="openModal = false">취소</button>
        </div>
    </div>
    
    <span v-if="collapsed" />
    <!-- 사이드 열리면 띄워줄 거 -->
    <span v-else>
        <div class="walkingwith">
            <div class="friend1">
                <img src="../../assets/person1.png">
                <p style="font-size: 30px;">나희</p>
            </div>
        </div>
        <div class="pink">
            <h2 style="display: inline;">같이 걷고 있는 사람</h2>
        </div>
        <div class="sidefriendlist">
            <div class="friend1">
                <i class="fa-regular fa-user fa-2xl fa-pull-left"></i>
                <button type="button" id="sendwith" @click="openModal = true">+</button>

                <p>효진</p>
            </div>
            <div class="friend2">
                <i class="fa-regular fa-user fa-2xl fa-pull-left"></i>
                <button type="button" id="sendwith" @click="openModal = true">+</button>
                <p>센치</p>
            </div>
        </div>
    </span>
    <span 
        class = "collapse-icon"
        :class="{ 'rotate-45' : collapsed }"
        @click = "toggleSidebar"
    >
    <i class="fa-regular fa-circle-xmark fa-2xl"></i>

    </span>


  </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth, sidebarHeight } from './state';

export default {
    props: {},
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth, sidebarHeight }
    },
    data() {
        return {
            openModal : false,
            selectedButton : null,
        };
    },
    
}
</script>


<style scoped>
.black-bg {
  width: 750px;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  position:absolute; 
  z-index: 4;
}
.white-bg {
  background: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 70px;
  font-size: 20px;
  margin: 20vh 70px;

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
  background-color: rgb(0, 74, 0);
  color: white;
  
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
}

input[type="radio"]:checked + .custom-radio {
  background-color: #5cb85c;
  border-color: #5cb85c;
}

.send, .close {
    margin: 50px 30px;
    border-radius: 20px;
    width: 150px;
    height: 70px;
    border: 4px solid lightgrey;
    font-size: 25px;
    font-weight: bold;
}

.send:hover {
    color: white;
    transition: all 0.3s;
    background-color: #4ea24e;
}

.close:hover {
    color: white;
    transition: all 0.3s;
    background-color: #c55e5e;
}


.sidebar {
    background-color: rgb(255, 255, 255);
    float:left;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    bottom: 0;
    transition: 0.3s ease;
    display:flex;
    flex-direction: column;
}

.collapse-icon {
    position: absolute;
    top: 0;
    padding:30px;
    transition: 0.2s linear;
}
.rotate-45 {
    transform: rotate(45deg);
    transition: 0.2s linear;
}

.walkingwith {
    background-color: lightgrey;
    height: 20vh;
    padding: 5vh;
}
.walkingwith img {
    width: 120px;  
    padding-top: 3vh;  
}

.pink {
    height: 10vh;
    background-color: rgb(248, 215, 220);
    text-align: center;
    padding-top: 5vh;
}
.pink h2 {
    font-size: 35px;
}

.sidefriendlist div {
    margin: 35px 30px;
    height: 80px;
    border-bottom: 1px solid lightgrey;
    
}
.sidefriendlist p {
    font-size: 30px;
    display: inline;
}

.sidefriendlist button {
    text-align: right;
    float: right;
    border: 0px;
    font-weight: bolder;
    font-size: 50px;
    background-color: white;
}


</style>