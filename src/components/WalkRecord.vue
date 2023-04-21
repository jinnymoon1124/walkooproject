<template>
    <div class="WalkRecordPage">
      <!-- top -->
      <div class="top">
        <div class="top_wrap">
          <div class="top_left">
            <img
              class="icon"
              src="../assets/backbutton.png"
              @click="$router.go(-1)"
            />
          </div>
          <p class="top_center top_name">산책기록</p>
          <div class="top_right"></div>
        </div>
      </div>
  
      <!-- middle -->
      <div class="middle">
        
      </div>

    </div>
</template>

<script>
export default {
name: "WalkRecord",
};
</script>

<style>
.WalkRecordPage {
height: 100vh;
}
.WalkRecordPage .top {
position: relative;
box-sizing: border-box;
width: 100%;
height: 12vh;
display: flex;
justify-content: center; /* 가로 중앙에 위치 */
align-items: flex-end; /* 세로 위에서 70% 지점에 위치 */
background: #687089;
padding: 1em;
}
.WalkRecordPage .top_wrap {
width: 100%;
height: auto;
display: flex;
align-items: center;
}
.WalkRecordPage .top_center {
width: 70%;
height: fit-content;
}
.WalkRecordPage .top_left,
.WalkRecordPage .top_right {
width: 15%;
height: fit-content;
}
.WalkRecordPage .top_name {
text-align: center;
font-family: "Inter";
font-style: normal;
font-weight: 700;
font-size: 1.3rem;
line-height: 21px;

text-align: center;
letter-spacing: -0.32px;

color: #ffffff;
}
.WalkRecordPage .middle {
position: relative;
width: 100%;
height: 80vh;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
}

</style>
  
  