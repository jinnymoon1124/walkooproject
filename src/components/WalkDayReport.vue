<template>
    <div id="background">
        <div id="dailyreport">
            <div class="reportbody">
                <div class="walkfriend">
                    <h1>동행한 사람</h1>
                    <img src="../assets/person1.png">
                    <img src="../assets/person2.png">
                
                </div>
                <div class="todaypoint">
                    <p>획득한 도토리</p>
                    <img src="../assets/getpoint.png">
                    <img src="../assets/getpoint.png">
                    <img src="../assets/point.png">
                    <img src="../assets/point.png">
                    <img src="../assets/point.png">
                </div>

                <div class="todaydata_1">
                    <div class="walk">
                        <img src="../assets/walkicon.png">
                        <p>0 걸음</p>

                    </div>
                    <div class="kcal">
                        <img src="../assets/kcal.png">
                        <p>0 kcal</p>
                        
                    </div>
                </div>

                <div class="todaydata_2">
                    <div class="time">
                        <img src="../assets/timericon.png">
                        <p>{{ totalTime }}</p>
                        <KakaoMap />
                    </div>
                    
                    <div class="long">
                        <img src="../assets/distanceicon.png">
                        <p>{{ totalDistance }} KM</p>
                    </div>
                </div>
            </div>
            <button class="walkclose" @click="$router.push('/')">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WalkDayReport',
  data() {
    return {
      timeData: {
        min: 0,
        seconds: 0
      },
      totalDistance: 0
    };
  },
  mounted() {
    this.timeData = {
      min: parseInt(this.$route.query.min),
      seconds: parseInt(this.$route.query.seconds)
    };
    this.totalDistance = parseFloat(this.$route.query.totalDistance || 0); // set totalDistance from query parameter, default to 0 if not available
    console.log('timeData:', this.timeData);
    console.log('totalDistance:', this.totalDistance);
  },
  computed: {
    totalTime() {
      return `${this.timeData.min.toString().padStart(2, '0')}:${this.timeData.seconds.toString().padStart(2, '0')}`;
    },
    formattedDistance() {
      return `${this.totalDistance.toFixed(2)} km`; // format total distance to 2 decimal places
    }
}
};
</script>

<style scoped>

#background {
    background-color: rgb(141, 139, 139);
    position: relative;
    width: inherit;
    padding: 40px;
    height: 100vh;
}

#dailyreport {
    background-color: rgb(255, 255, 255);
    border-radius: 50px;
    height: 1230px;
    margin-top: 1vh;
    padding: 50px 0;

}
.todaypoint {
    padding: 0 70px;

}
.todaypoint p {
    text-align: center;
    font-size: 30px;
}

.todaypoint img{
    width: 50px;
    height: 50px;
    margin: 20px;     
}

.reportbody {
    background-color: rgba(218, 213, 213, 0.893);
    display: block;
    height: 1150px;
    padding: 15px;
}
.walkfriend {
    display: flex;
}
.walkfriend h1 {
    flex: 1.5;
    margin: 70px 20px ;
}
.walkfriend img {
    text-align: right;
    margin: 20px;

}

.walkfriend, .todaypoint{
    border: 7px solid rgb(179, 179, 179);
    background-color: rgb(255, 255, 255);
    height : 200px;
    border-radius: 30px;
    text-align: left;
    margin: 20px 0;    
}

.todaydata_1, .todaydata_2{
    height : 330px;
    width: 600px;
    display: flex; 
    margin: 0 auto;
}

.todaydata_1 img, .todaydata_2 img {
    width: 80px;
    margin: 60px;
    
}

.todaydata_1 p, .todaydata_2 p {
    font-size: 30px;
}


.walk, .kcal, .time, .long {
    flex: 1;
    background-color:rgb(228, 228, 228);
    border: 5px solid rgb(142, 141, 141);
}

.walk {
    border-radius: 30px 0 0 0 ;
}
.kcal {
    border-radius: 0 30px 0 0 ;
}
.time {
    border-radius: 0 0 0 30px;
}
.long {
    border-radius: 0 0 30px 0 ;
}

.walkclose {
    cursor: pointer;
    border : none;
    background: #02311e;
    color: white;
    font-size: 30px;
    border-radius: 20px;
    padding: 15px 40px;
    margin: 20px;
}
.walkclose:hover {
    background-color: rgba(182, 10, 10, 0.63);
    font-weight: bold;
    transform: scale(1, 1);
    transition: all 0.3s
}
</style>