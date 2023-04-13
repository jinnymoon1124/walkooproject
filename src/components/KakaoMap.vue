<template>
  <div id="mappage">
    <h1>카카오 맵 테스트</h1>
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

        <button type="button" id="walkstart">산책시작</button>
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
p {
    font-weight: bolder;
    letter-spacing: 3px;
}

#mappage {
    margin: auto;
    width: 1000px;
    height: 2000px;
    background-color: white;
}
#map {
    width: 500px;
    margin:auto;
    height: 700px;
}
#walkcontainer {
    width:500px;
    margin: auto;
    height: 300px;
    background-color: rgb(197, 197, 197);
}
#pointcontainer {
    height: 70px;
}
#datacontainer {
    height: 150px;
    background-color: aquamarine;
    display: flex;
}

.timerdata img, .walkdata img, .distancedata img {
    width: 30px;
    padding: 20px 50px;
}

.point {
    width: 30px;
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
    padding: 15px 30px;
    border-radius: 15px;
    font-weight: bolder;
    letter-spacing: 2px;    
}
</style>