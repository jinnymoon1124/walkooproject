<template>
    <div>
        <!-- 산책종료할건지 확인 모달창 -->
    <div class="black-bg" v-if="openModal == true">
        <div class="white-bg">
            <h2>산책을 종료하겠습니까?</h2>
            <button class="quit" @click="$router.push('./walkdayreport')">확인</button>
            <button class="close" @click="openModal = false">취소</button>
        </div>
    </div>
    <h1>산책 진행 중 페이지</h1>
    <div id="map">    </div>
    

    <div id= "walkcontainer">
        <div id="pointcontainer">
            <img class = "point" src="../assets/getpoint.png">
            <img class = "point" src="../assets/getpoint.png">
            <img class = "point" src="../assets/point.png">
            <img class = "point" src="../assets/point.png">
            <img class = "point" src="../assets/point.png">
        </div>
        <div id="datacontainer">
            <div class="walkdata">
                <img src="../assets/walkicon.png">
                <p>516 걸음</p>
            </div>
            <div class="timerdata">
                <img src="../assets/timericon.png">
                <p>0 시간 50 분</p>
            </div>
            <div class="distancedata">
                <img src="../assets/distanceicon.png">
                <p>3 KM</p>
            </div>
        </div>

        <button type="button" id="walkend" @click="openModal = true">산책종료</button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            map : null,
            openModal : false,
        };
    },
    mounted() {
        if (window.kakao && !indow.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=930ce9e25463ef7e86418ee9d4ba0575';
            document.head.appendChild(script);
        }
    },
    methods: {
        initMap() {
            var container = document.getElementById("map");
            var options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };
            var map = new kakao.maps.Map(container, options);
            map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
        },
        close(event) {
            if(event.target.classList.contains('black-bg') || event.target.classList.contains('close')) {
                this.openModal = false;
            } else if (event.target.classList.contains('white-bg')) {
                this.opneModal = true
            }
        }
    },
};
</script>

<style scoped>

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position:absolute; 
  padding: 20px;
  z-index: 2;

}
.white-bg {
  width: 100%; 
  background: white;
  border-radius: 8px;
  padding: 70px;
  font-size: 20px;
  margin-top: 500px;

} 
.quit {
    cursor: pointer;
    border : none;
    background: #6667AB;
    color: white;
    font-size: 30px;
    font-weight: bold;
    border-radius: 5px;
    padding: 20px 80px;
    margin: 20px;
}
.quit:hover {
    background-color: rgba(182, 10, 10, 0.63);
    font-weight: bold;
    transform: scale(1, 1);
    transition: all 0.5s
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
    transition: all 0.5s
}

p {
    font-weight: bolder;
    letter-spacing: 3px;
}


#map {
    width: 750px;
    margin:auto;
    height: 900px;
    z-index: 1;
}
#walkcontainer {
    width:750px;
    margin: auto;
    height: 500px;
    background-color: rgb(244, 244, 244);
}
#pointcontainer {
    height: 90px;
}
#datacontainer {
    height: 250px;
    display: flex;
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
    border-left: lightgrey 1px solid;
    border-right: lightgrey 1px solid;
}

.distancedata {
    flex : 1;
}

#walkend {
    background-color: #b40617;
    color: #ffffff;
    border: none;
    display: inline-block;
    margin: 15px auto;
    padding: 30px 100px;
    border-radius: 15px;
    font-size: 30px;
    letter-spacing: 2px;    
}
#walkend:hover {
    background-color: #790511;
    color: white;
    font-weight: bold;
    transform: scale(1, 1);
    transition: all 0.5s
}
</style>