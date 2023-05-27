<template>
    <div class="WalkRecordPage">
      <!-- top -->
      <div class="top">
          <p class="top_name">산책기록</p>
      </div>
  
      <!-- middle -->
      <div class="middle">
        <div class="calendar">
          <div class="head">
            <button @click="prevMonth">&lt;</button>
            <div class="thismonth">{{ year }}년 {{ month }}월</div>
            <button @click="nextMonth">&gt;</button>
          </div>
          <div class="days">
            <div class="day" v-for="(day, index) in days" :key="index">{{ day }}</div>
            <div class="date" 
              v-for="day in getDaysInMonth()" 
              :key="day" 
              :class="{ today: isToday(day), selected: isSelected(day), sunday : isSunday(day)}" 
              @click="selectDate(day)">
              <div v-if="!isSelected(day)">{{ day }}</div>
              <div v-if="isSelected(day)" class="report-container">
                <div>{{ day }}</div>
                <div class="report-button-container">
                  <button class="report-button" @click="openReport()">
                    🤍 <br/>산 책 기 록 
                  </button>
                </div>
              </div>
              <div class="report-image"
                  v-show="!isSelected(day) && ((year === 2023 && month === 4 && day === 6) || (year === 2023 && month === 4 && day === 18))">
                <img v-if="day === 6" src="../assets/BadgePage/icon_2.png" alt="friend">
                <img v-if="day === 18" src="../assets/BadgePage/icon_3.png" alt="walkpet">
              </div>
            </div>
          </div>
        </div>
      </div>

    <div class="modal" v-if="report.isOpen">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ report.date }} <br /> 산책 기록</h2>
          <span class="close" @click="closeReport()">&times;</span>
        </div>
        <div v-if="report.image">
          <img :src="report.image" alt="리포트 이미지" style="width: 80px; height: 80px">
          <div class="modal-body">
            <p>산책 시작 시간: {{ report.start }}</p>
            <p>산책 시간: {{ report.duration }}</p>
            <p>산책 거리: {{ report.distance }}</p>
          </div>
        </div>
      </div>
    </div>

    </div>
</template>

<script>
import moment from 'moment';
import walkfriend from '../assets/BadgePage/icon_2.png'
import walkpet from '../assets/BadgePage/icon_3.png'

export default {
  name: 'walkrecord',
  data() {
    return {
      year: moment().year(),
      month: moment().month() + 1,
      selectedDate: null,
      report: {
        date: '',
        duration: '',
        isOpen: false,
      },
    };
  },
  computed: {
    days() {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    },
  },
  methods: {
    prevMonth() {
      if (this.month === 1) {
        this.month = 12;
        this.year -= 1;
      } else {
        this.month -= 1;
      }
    },
    nextMonth() {
      if (this.month === 12) {
        this.month = 1;
        this.year += 1;
      } else {
        this.month += 1;
      }
    },
    getDaysInMonth() {
      const date = moment(`${this.year}-${this.month}-01`, 'YYYY-MM-DD');
      const daysInMonth = date.daysInMonth();
      const startDay = date.day();
      const days = [];
      for (let i = 0; i < startDay; i++) {
        days.push('');
      }
      for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
      }
      return days;
    },
    isToday(day) {
      const today = moment();
      const date = moment(`${this.year}-${this.month}-${day}`, 'YYYY-MM-DD');
      return today.isSame(date, 'day');
    },
    isSelected(day) {
      if (!this.selectedDate) {
        return false;
      }
      const date = moment(`${this.year}-${this.month}-${day}`, 'YYYY-MM-DD');
      return this.selectedDate.isSame(date, 'day') && ['2023-04-06', '2023-04-18'].includes(date.format('YYYY-MM-DD'));
    },
    selectDate(day) {
      const date = moment(`${this.year}-${this.month}-${day}`, 'YYYY-MM-DD');
      this.selectedDate = date;
    },
    isSunday(day) {
      const date = moment(`${this.year}-${this.month}-${day}`, 'YYYY-MM-DD');
      return date.day() === 0; // 0 is Sunday
    },
    openReport() {
      const reportDate = this.selectedDate.format('YYYY년 MM월 DD일');
      let reportImage = ''; // 이미지 경로를 저장할 변수
      let reportDuration = '';
      let reportStart = '';
      let reportDistance = '';

      if (reportDate === '2023년 04월 18일') {
        reportImage = walkfriend; // 이미지 경로를 저장
        reportDuration = '3분';
        reportDistance = '2km';
        reportStart = 'PM 11:00';
      } else if (reportDate === '2023년 04월 06일') {
        reportImage = walkpet; // 이미지 경로를 저장
        reportDuration = '1시간';
        reportDistance = '1km';
        reportStart = 'AM 8:00';
      }
      this.report.date = reportDate;
      this.report.image = reportImage; // report 객체에 이미지 경로를 저장
      this.report.duration = reportDuration;
      this.report.start = reportStart;
      this.report.distance = reportDistance;
      this.report.isOpen = true;
    },
    closeReport() {
      this.report.isOpen = false;
    },
  },
};
</script>

<style scoped>
.WalkRecordPage {
height: 100vh;
overflow-y: auto;
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

.calendar {
  width: 750px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  height: 50px;
}
.thismonth {
  font-weight: bold;
  font-size: 25px;
}

.head > button {
  border: none;
  font-weight: 900;
  font-size: 30px;
  color: grey;
  padding: 0px 10px;
}

.calheader > button:hover {
   color: rgb(255, 255, 255);
   background-color: #687089;
   border-radius: 50px;

}
.days .day:nth-child(1),
.days .day:nth-child(2),
.days .day:nth-child(3),
.days .day:nth-child(4),
.days .day:nth-child(5),
.days .day:nth-child(6),
.days .day:nth-child(7) {
  background-color: #fcdede; /* 배경색을 칠함 */
  font-weight: bold; /* 글씨체를 굵게 함 */
  font-size: 18px; /* 글씨 크기를 조정함 */
  height: 100%; /* 그리드 셀 높이를 조정함 */
  display: flex; /* 내부 콘텐츠를 가운데 정렬하기 위해 추가 */
  justify-content: center; /* 내부 콘텐츠를 가운데 정렬하기 위해 추가 */
  align-items: center; /* 내부 콘텐츠를 가운데 정렬하기 위해 추가 */
}
.days .day:nth-child(1) {
  color: red;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 130px; /* 변경된 높이 */
}

.date {
  display:inline-block;
  justify-content: center;
  height: 100%; /* 이 부분을 수정하면 일 그리드 셀의 너비가 조정됩니다. */
  cursor: pointer;  
  padding-top: 10px;
  box-sizing: border-box;
}

.date:hover {
  box-shadow: inset 0 0 0 2px rgb(146, 146, 146);
  transition: all 0.1s;
}
.date.sunday {
  color: red;
}

.today {
  background-color: #b7ba8c;
  border-radius: 10px;
}

.selected {
  font-weight: 900;
}


.modal {
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 400px;
height: 800px;
background-color: #ffffff;
border-radius: 5px;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.modal .close {
position: absolute;
top: 20px;
right: 20px;
font-size: 30px;
color: #333;
cursor: pointer;
}
.modal-body img {
max-width: 100%;
height: auto;
}
.report-button-container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 20px;
}
.report-image {
  width: 45px; 
  height: 45px;
  display:inline-block;
  justify-content: center;
  padding-top: 10px;
}

.report-button{
  width: 90px;
  height: 70px;
  border-radius: 20px;
  border: none;
  background-color: rgb(254, 233, 138);
  font-weight: bold;
  line-height: 150%;

}
.report-button:hover{
  border: 1px solid grey;
  transform: scale(1, 1);
  transition: all 0.3s
}

</style>
  
  