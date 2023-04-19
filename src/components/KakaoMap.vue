<template>
  
  <div id="mappage">
    <Sidebar />
        <div :style="{ 'margin-left' : sidebarHeight, sidebarWidth }">
            <router-view />
        </div>    
    <div id="map">        
        <div class="uptab">
            <img src="../assets/person1.png">
            <img src="../assets/person2.png">
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
                <p>0 시간 0 분</p>
            </div>
            <div class="distancedata">
                <img src="../assets/distanceicon.png">
                <p>0 KM</p>
            </div>
        </div>

        <button type="button" id="walkstart" @click="$router.push('./walkend')">산책시작</button>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar.vue'
import { sidebarWidth, sidebarHeight } from './sidebar/state';

export default {
    components: {
        Sidebar
    },
    setup() {
        return {sidebarWidth , sidebarHeight}
    },
    data() {
        return {
            map : null,
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
        script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=YOUR_APP_KEY';
        document.head.appendChild(script);
        },
        initMap() {
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
            

                var container = document.getElementById("map");
                var options = {
                    center: new kakao.maps.LatLng(latitude, longitude),
                    level: 3
                };
                var map = new kakao.maps.Map(container, options);

                var imageSrc = "https://ibb.co/5r8NTC2",
                    imageSize = new kakao.maps.Size(64, 69),
                    imageOption = {offset: new kakao.maps.Point(27, 69)};

                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                    markerPosition = new kakao.maps.LatLng(latitude, longitude);

                var marker = new kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage
                });
                
            marker.setMap(map);
            }, error => {
                console.log(error);
            });
        }
    }
};
</script>

<style>
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
    margin-left: 100px;
}
.uptab img {
    width: 100px;
    margin: 0 10px;
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

#walkstart {
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
#walkstart:hover {
    background-color: #036439;
    color: white;
    font-weight: bold;
    transform: scale(1, 1);
    transition: all 0.5s
}
</style>