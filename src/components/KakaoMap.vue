<template>
  
  <div id="mappage">
    
    <!-- 산책취소할건지 확인 모달창 -->
    <div class="black-bg" v-if="openModal1 == true">
        <div class="white-bg">
            <h2>산책을 취소할까요?</h2>
            <button class="yes" @click="$router.push('/')">확인</button>
            <button class="no" @click="openModal1 = false">취소</button>
        </div>
    </div>

    <!-- 산책종료할건지 확인 모달창 -->
    <div class="black-bg" v-if="openModal2 == true">
        <div class="white-bg">
            <h2>산책을 마칠까요?</h2>
            <button class="quit" @click="stopTimerAndNavigate">확인</button>
            <button class="close" @click="closeModal">취소</button>
        </div>
    </div>

    <Sidebar  />
        <div :style="{ 'margin-right' : sidebarHeight, sidebarWidth }">
            <router-view />
        </div>    
    <div id="map">        
        <div class="uptab">
            <img src="@/assets/backbutton.png" class="goBack" @click="openModal1 = true"/>

            <img class="imwith"  src="../assets/person1.png">
            <img class="imwith" src="../assets/person2.png">
        </div>
    </div>
    <div id= "walkcontainer">
        <div id="pointcontainer">
            <img class = "point" src="../assets/point.png">
            <img class = "point" src="../assets/point.png">
            <img class = "point" src="../assets/point.png">
            <img class = "point" src="../assets/point.png">
            <img class = "point" src="../assets/point.png">
        </div>
        <div id="datacontainer">
            <div class="walkdata">
                <img src="../assets/walkicon.png">
                <p>0 걸음</p>
            </div>
            <div class="timerdata">
                <img src="../assets/timericon.png">
                <p>{{ formatTime(timer) }}</p>
            </div>
            <div class="distancedata">
                <img src="../assets/distanceicon.png">
                <p>0 KM</p>
            </div>
        </div>

        <button 
            type="button" 
            :class="{'walkstart': !isWalking, 'walkend' : isWalking }" 
            @click="toggleTimer">
            {{ isWalking ? 'Stop' : 'Start' }}
            
        </button>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar.vue'
import { sidebarWidth, sidebarHeight } from './sidebar/state';
import WalkDayReport from './WalkDayReport.vue';

export default {
    name: 'KakaoMap',
    components: {
        Sidebar,
        WalkDayReport,
    },
    setup() {
        return {sidebarWidth , sidebarHeight}
    },
    data() {
        return {
            map : null,
            openModal1 : false,
            openModal2 : false,
            timer : 0,
            isWalking : false,
            timerId : null,
        };
    },
    mounted() {
        if (window.kakao && !window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=930ce9e25463ef7e86418ee9d4ba0575';
            document.head.appendChild(script);
        }
    },
    created() {
        this.loadKakaoMapAPI();
    },
    methods: {
        loadKakaoMapAPI() {
        const script = document.createElement('script');
        script.onload = () => this.initMap();
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_MAP_API_KEY}`;
        document.head.appendChild(script);
        },
        initMap() {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const {latitude, longitude } = position.coords;
                    const mapOptions = {
                        center: new kakao.maps.LatLng(latitude, longitude),
                        level: 3,
                        MapTypeId: kakao.maps.MapTypeId.ROADMAP
                    };                   
                    const map = new kakao.maps.Map(document.getElementById('map'),mapOptions);
                    
                    const marker = new kakao.maps.Marker({
                        position: new kakao.maps.LatLng(latitude, longitude),
                        map,
                    });
                }, error => {
                    console.log(error);
            }) 
        },
        startTimer() {
            this.timerId = setInterval(() => {
                this.timer += 1
            }, 1000)
            this.isWalking = true
        },
        stopTimer() {
            clearInterval(this.timerId)
            this.timerId = null
            this.isWalking = false
        },
        stopTimerAndNavigate() {
            this.stopTimer();
            const timeData = { 
                min: Math.floor(this.timer / 60), 
                seconds: this.timer % 60 
            };
            console.log('timeData:', timeData);
            this.$router.push({ 
                name: 'WalkDayReport', 
                query : {
                    min: timeData.min,
                    seconds: timeData.seconds
                }
            });
        },
        toggleTimer() {
            if ( this.isWalking ) {
                this.stopTimer()
                this.openModal2 = true
            } else {
                this.startTimer()
            }
        },
        closeModal() {
            this.openModal2 = false
            this.startTimer()
        },
        formatTime ( seconds ) {
            const min = Math.floor(seconds / 60)
            const remainingSeconds = seconds % 60
            return `${min.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
        },
        destroyed() {
            this.stopTimer()
        },
    }
};
</script>

<style scoped>

.black-bg {
  width: 95%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position:absolute; 
  padding: 20px;
  z-index: 4;

}
.white-bg {
  width: 100%; 
  background: white;
  border-radius: 8px;
  padding: 70px 0;
  font-size: 20px;
  margin-top: 500px;

} 

.yes {
    cursor: pointer;
    border : none;
    background: #7a0317;
    color: white;
    font-size: 30px;
    font-weight: bold;
    border-radius: 5px;
    padding: 20px 80px;
    margin: 20px;
}
.yes:hover {
    background-color: rgba(182, 10, 10, 0.63);
    font-weight: bold;
    transform: scale(1, 1);
    transition: all 0.3s
}

.no {
    cursor: pointer;
    border : none;
    background: #cacaca;
    color: rgb(67, 67, 67);
    font-size: 30px;
    font-weight: bold;
    border-radius: 5px;
    padding: 20px 80px;
    margin: 10px 20px;
}
.no:hover {
    color: white;
    font-weight: bold;
    transform: scale(1, 1);
    transition: all 0.3s
}
#mappage{ 
    background-color: #EBEFFF;
    width:inherit;  
    position:relative; 
    height: 100vh;
}
p {
    font-weight: bolder;
    letter-spacing: 3px;
}

.goBack {
    float: left;
    width:60px;
    background-color:rgb(255, 255, 255);
    margin-top: 35px;
    border-radius: 20px;
}

#map {
    width: 750px;
    margin:auto;
    height: 60vh;
    z-index: 1;
}
.uptab {
    z-index: 2;
    height: 50px;
    position: absolute;
}
.imwith {
    width: 100px;
    margin: 10px;
}

#walkcontainer {
    width:750px;
    height: 40vh;
    background-color: rgb(244, 244, 244);
    padding-top: 30px;
}
#pointcontainer {
    height: 8vh;
}
#datacontainer {
    height: 17vh;
    display: flex;
}

#datacontainer p {
    font-size: 25px;
}

.timerdata img, .walkdata img, .distancedata img {
    width: 60px;
    padding: 40px 50px;
}

.point {
    width: 50px;
    padding: 20px 10px;
}

.walkdata {
    flex : 1;
}

.timerdata {
    flex : 1;
    
}

.distancedata {
    flex : 1;
}

.walkstart {
    background-color: #77af9c;
    color: #ffffff;
    border: none;
    display: inline-block;
    margin: 40px;
    padding: 30px 100px;
    border-radius: 15px;
    font-size: 30px;
    letter-spacing: 2px; 
       
}
.walkstart:hover {
    background-color: #036439;
    color: white;
    font-weight: bold;
    transform: scale(1, 1);
    transition: all 0.5s
}

.walkend {
    background-color: #b40617;
    color: #ffffff;
    border: none;
    display: inline-block;
    margin: 40px;
    padding: 30px 100px;
    border-radius: 15px;
    font-size: 30px;
    letter-spacing: 2px;    
}
.walkend:hover {
    background-color: #790511;
    color: white;
    font-weight: bold;
    transform: scale(1, 1);
    transition: all 0.5s
}
.quit {
    cursor: pointer;
    border : none;
    background: #005d35;
    color: white;
    font-size: 30px;

    border-radius: 5px;
    padding: 20px 80px;
    margin: 20px;
}
.quit:hover {
    box-shadow: inset 0 0 0 5px darkgreen;
    font-weight: bold;
    transform: scale(1, 1);
    transition: all 0.3s
}
.close {
    cursor: pointer;
    border : none;
    background: #cacaca;
    color: rgb(67, 67, 67);
    font-size: 30px;
    font-weight: bold;
    border-radius: 5px;
    padding: 20px 80px;
    margin: 10px 20px;
}
.close:hover {
    color: white;
    font-weight: bold;
    transform: scale(1, 1);
    transition: all 0.3s
}
</style>