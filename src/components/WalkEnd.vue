<template>
  <div id="mappage">
    <!-- 산책종료할건지 확인 모달창 -->
    <div class="black-bg" v-if="openModal == true">
      <div class="white-bg">
        <h2>산책을 마칠까요?</h2>
        <button class="quit" @click="$router.push('./walkdayreport')">
          확인
        </button>
        <button class="close" @click="openModal = false">취소</button>
      </div>
    </div>

    <Sidebar />
    <div :style="{ 'margin-left': sidebarHeight, sidebarWidth }">
      <router-view />
    </div>
    <div id="map">
      <div class="uptab">
        <img src="../assets/person1.png" />
        <img src="../assets/person2.png" />
      </div>
    </div>

    <div id="walkcontainer">
      <div id="pointcontainer">
        <img class="point" src="../assets/getpoint.png" />
        <img class="point" src="../assets/getpoint.png" />
        <img class="point" src="../assets/point.png" />
        <img class="point" src="../assets/point.png" />
        <img class="point" src="../assets/point.png" />
      </div>
      <div id="datacontainer">
        <div class="walkdata">
          <img src="../assets/walkicon.png" />
          <p>516 걸음</p>
        </div>
        <div class="timerdata">
          <img src="../assets/timericon.png" />
          <p>0 시간 50 분</p>
        </div>
        <div class="distancedata">
          <img src="../assets/distanceicon.png" />
          <p>3 KM</p>
        </div>
      </div>

      <button type="button" id="walkend" @click="openModal = true">
        산책종료
      </button>
    </div>
  </div>
</template>

<script>
import Sidebar from "./sidebar/Sidebar.vue";
import { sidebarWidth, sidebarHeight } from "./sidebar/state";

export default {
  components: {
    Sidebar,
  },
  setup() {
    return { sidebarWidth, sidebarHeight };
  },
  data() {
    return {
      map: null,
      openModal: false,
    };
  },
  mounted() {
    this.loadKakaoMapAPI();
  },
  created() {
    this.loadKakaoMapAPI();
  },
  methods: {
    loadKakaoMapAPI() {
      const script = document.createElement("script");
      script.onload = () => this.initMap();
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=930ce9e25463ef7e86418ee9d4ba0575";
      document.head.appendChild(script);
    },
    initMap() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapOptions = {
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 3,
            MapTypeId: kakao.maps.MapTypeId.ROADMAP,
          };
          const map = new kakao.maps.Map(
            document.getElementById("map"),
            mapOptions
          );

          const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(latitude, longitude),
            map,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    },
    close(event) {
      if (
        event.target.classList.contains("black-bg") ||
        event.target.classList.contains("close")
      ) {
        this.openModal = false;
      } else if (event.target.classList.contains("white-bg")) {
        this.opneModal = true;
      }
    },
  },
};
</script>

<style scoped>
#mappage {
  background-color: #ebefff;
  width: inherit;
  position: relative;
  height: 100vh;
}
.black-bg {
  width: 95%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
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
.uptab {
  z-index: 2;
  height: 50px;
  position: absolute;
}
.uptab img {
  width: 100px;
  margin: 0 10px;
}
.quit {
  cursor: pointer;
  border: none;
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
  transition: all 0.3s;
}
.close {
  cursor: pointer;
  border: none;
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
  transition: all 0.3s;
}

p {
  font-weight: bolder;
  letter-spacing: 3px;
}

#map {
  width: 100%;
  margin: auto;
  height: 60vh;
  z-index: 1;
}
#walkcontainer {
  width: 750px;
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

.timerdata img,
.walkdata img,
.distancedata img {
  width: 60px;
  padding: 40px 50px;
}

.point {
  width: 50px;
  padding: 20px 10px;
}

.walkdata {
  flex: 1;
}

.timerdata {
  flex: 1;
}

.distancedata {
  flex: 1;
}

#walkend {
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
#walkend:hover {
  background-color: #790511;
  color: white;
  font-weight: bold;
  transform: scale(1, 1);
  transition: all 0.5s;
}
</style>