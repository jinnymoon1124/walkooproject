<template>
  <div id="mappage">
    <h1>산책 시작 시 페이지</h1>
    <div id="map">

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
export default {
    data() {
        return {
            map : null,
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
        }
    }
};
</script>

<style>
#mappage{ width:inherit; height:600px; position:relative; }
p {
    font-weight: bolder;
    letter-spacing: 3px;
}

/* #mappage {
    margin: auto;
    width: 1000px;
    height: 2000px;
} */
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
    border-left: lightgrey 1px solid;
    border-right: lightgrey 1px solid;
}

.distancedata {
    flex : 1;
}

#walkstart {
    background-color: #77af9c;
    color: #ffffff;
    border: none;
    display: inline-block;
    margin: 15px auto;
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