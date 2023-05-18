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
                <p>{{ distance.toFixed(2) }}</p>
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

function degreesToRadians(degrees) {
                return degrees * Math.PI / 180;
}

function calculateDistance(point1, point2) {
        const lat1 = point1.getLat();
        const lng1 = point1.getLng();
        const lat2 = point2.getLat();
        const lng2 = point2.getLng();
        const earthRadiusKm = 6371;
        const dLat = degreesToRadians(lat2 - lat1);
        const dLng = degreesToRadians(lng2 - lng1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
                    Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadiusKm * c;
        return distance;
}

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
            distance : 0, // Keep track of total distance
            watchId: null,
            position: null,
            marker: null,
            previousPosition: null, // Declare previousPosition variable
            timeoutId: null, // Declare timeoutId variable
            timerId : null,
            polyline: null,

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
            let map;
            let previousPosition;
            let polyline;
            let watchId;

            this.polyline = new kakao.maps.Polyline({
                map: this.map,
                path: [],
                strokeWeight: 5,
                strokeColor: '#FF0000',
                strokeOpacity: 0.7,
                strokeStyle: 'solid'
            });

            const success = (position) => {
                this.position = position.coords;
                const {latitude, longitude } = position.coords;
                const currentPosition = new kakao.maps.LatLng(latitude, longitude);
                const path = this.polyline.getPath();
                path.push(currentPosition);
                this.polyline.setPath(path);


                if (!map) {
                    const mapOptions = {
                        center: new kakao.maps.LatLng(latitude, longitude),
                        level: 3,
                        MapTypeId: kakao.maps.MapTypeId.ROADMAP
                    };                   
                    this.map = new kakao.maps.Map(document.getElementById('map'),mapOptions);
                    this.marker = new kakao.maps.Marker({position: currentPosition, map: this.map});
                    this.polyline = new kakao.maps.Polyline({
                        map: this.map,
                        path: [],
                        strokeWeight: 5,
                        strokeColor: '#FF0000',
                        strokeOpacity: 0.7,
                        strokeStyle: 'solid'
                    });
                } else {
                    // Update the marker position and calculate the distance from the previous position
                    this.marker.setPosition(currentPosition);
                    map.panTo(currentPosition);
                    if (previousPosition) {
                        const newDistance = calculateDistance(previousPosition, currentPosition);
                        this.distance += newDistance;
                        console.log(`Distance traveled: ${newDistance.toFixed(3)} km`);
                        console.log(`Total distance traveled: ${this.distance.toFixed(3)} km`);
                    }
                    this.startRandomMovement(position);
                }
                previousPosition = currentPosition;
                
            }
            function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            }
            watchId = navigator.geolocation.watchPosition(success, error);
        },
        startRandomMovement(map) {
            if (this.position) {
                const { latitude, longitude } = this.position;
                const randomLat = latitude + Math.random() * 0.001; // Generate a random latitude near the current latitude
                const randomLng = longitude + Math.random() * 0.001; // Generate a random longitude near the current longitude
                const newPosition = new kakao.maps.LatLng(randomLat, randomLng);

                if (!this.polyline) {
                    this.polyline = new kakao.maps.Polyline({
                        path: [newPosition],
                        strokeWeight: 5,
                        strokeColor: '#0000FF',
                        strokeOpacity: 0.7,
                        strokeStyle: 'solid'
                    });
                    this.polyline.setMap(map); // Add the polyline to the map
                } else {
                    const path = this.polyline.getPath();
                    path.push(newPosition);
                    this.polyline.setPath(path);
                }
                this.marker.setPosition(newPosition);
                this.map.panTo(newPosition);
                if (this.previousPosition) {
                    const newDistance = calculateDistance(this.previousPosition, newPosition);
                    this.distance += newDistance;
                    console.log(`Distance more traveled: ${newDistance.toFixed(3)} km`);
                    console.log(`Total distance traveled: ${this.distance.toFixed(3)} km`);
                }
                this.previousPosition = newPosition;

                this.timeoutId = setTimeout(() => {
                    this.startRandomMovement(map);
                }, 2000);
            } else {
                console.error('Position is not available.');
            }
        },
        stopTracking() {
            navigator.geolocation.clearWatch(watchId);
            this.distance = 0;
            this.totalDistance = 0;
            console.log('Tracking stopped.');
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
            this.totalDistance = this.distance; // Assign the current distance to totalDistance
            this.distance = 0; // Reset the distance
            const timeData = {
                min: Math.floor(this.timer / 60),
                seconds: this.timer % 60
            };
            console.log('timeData:', timeData);
            console.log(`Final Distance: ${this.totalDistance.toFixed(10)} km`);

            this.$router.push({
                name: 'WalkDayReport',
                query: {
                min: timeData.min,
                seconds: timeData.seconds,
                distance: this.totalDistance
                }
            });
        },
        toggleTimer() {
            if (!this.isWalking) {
                // Start the timer and random movement
                this.isWalking = true;
                this.timer = 0;
                this.intervalId = setInterval(() => {
                    this.timer++;
                }, 1000);
                if (this.position) {
                    this.startRandomMovement(); // Call the startRandomMovement method
                }else{
                    console.error('Position is not available.');
                }                
                // Call the startRandomMovement method
            } else {
                // Stop the timer
                this.isWalking = false;
                clearInterval(this.intervalId);
                clearTimeout(this.timeoutId);

                this.stopTimer();
                this.openModal2 = true;
            }
        },
        closeModal() {
            this.openModal2 = false
            this.startTimer()
            this.startRandomMovement(); // Call the startRandomMovement method

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
}
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