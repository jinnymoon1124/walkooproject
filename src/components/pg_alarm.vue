<template>
  <div>
    <div class="pg_alarm">
      <img src="@/assets/backbutton.png" alt="backButton" class="back-button" @click="$router.push('/pg_MainPage')"/>
      알림이 왔어요!<br>
    </div>
    <div v-if="showBanner" class="banner" >
      <img src="../assets/StarbucksLogo.png" alt="bannerimage" class="bannerimage">
      <div class="bannertext">'나를 잡아봐' 배지! <br> 선착순 50명 <br> 스타벅스 아메리카노 증정 이벤트</div>
    </div>



    <div class="alarmbox">
    <img src="../assets/friendimage/jinny.png" alt="jinnypc" class="alarmpng">
    <div class="walk-requests">
      <div v-for="(request, index) in friendRequests" :key="index" class="friend-request">
        <div class="asktitle">'{{ request }}' 님이 산책 신청을 했어요!<br><br></div>

        <div>장소 : 석촌호수 <br> 시간 : 6월 28일 오후 3시</div><br>


      <div> <button class="friendreject" @click="openModal = false">거절</button>
        <button class="friendaccept" @click="openModal = false">수락</button>
      </div>
      </div>
    </div>
  </div>



  <div class="alarmbox">
    <img src="../assets/friendimage/naheecode.png" alt="naheepc" class="alarmpng">
    <div class="friend-requests">

      <div v-for="(request, index) in friendRequests" :key="index" class="friend-request">
        <div class="asktitle">친구신청이왔어요!</div><br>'{{ request }}' 님에게 친구 신청이 왔습니다 <br> 수락하시겠습니까? <br><br>

        <div> <button class="friendreject" @click="openModal = false">거절</button>
        <button class="friendaccept" @click="openModal = false">수락</button>
      </div>
    </div>
       
    </div>
  </div>




    
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBanner: true,
      friendRequests: ['친구1']
    }
  },
  methods: {
    
  }
  
}
</script>

<style>
.pg_alarm {
  text-align: left;
  font-weight: bold;
  font-size: 50px;
  color: #4a4a4a


}

.friend-request {
  margin-bottom: 10px;
  font-size: larger
}


.banner {
  background-color: rgb(92, 86, 86);
  padding : 3px 40px ;
  display: flex;
  align-items: center;
  height : 200px;
}

.bannerimage{
  width: 100px;
  height: 100px;

}

.bannertext{
  color: #f1f1f1;
  font-size: xx-large;
  margin-left: 80px;

}

.alarmbox {
  width: 90%;

  display: flex;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-left: 36px;
  margin-top: 35px;
  
  }

.alarmpng {
  width: 28%;
  height: 28%;
  border-radius: 50%;
  margin : 5px 50px 5px 10px; 
}


.friendreject{
  padding: 10px 60px;
  background-color: #7a7878;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2rem;
  margin-right: 10px;
}

.friendaccept{
  padding: 10px 60px;
  background-color: #585757;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2rem;
  margin-left: 10px;
}

.asktitle{
  font-weight: bold;
  font-size: larger;
}
</style>

