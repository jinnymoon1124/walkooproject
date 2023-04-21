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
            <div class="date" v-for="day in getDaysInMonth()" :key="day" 
              :class="{ today: isToday(day), selected: isSelected(day), sunday : isSunday(day)}" 
              @click="selectDate(day)">{{ day }}</div>
          </div>
          <div class="footer">{{ selectedDate }}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import moment from 'moment';


export default {
  name: 'walkrecord',
  data() {
    return {
      year: moment().year(),
      month: moment().month() + 1,
      selectedDate: null,
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
      return this.selectedDate.isSame(date, 'day');
    },
    selectDate(day) {
      const date = moment(`${this.year}-${this.month}-${day}`, 'YYYY-MM-DD');
      this.selectedDate = date;
    },
    isSunday(day) {
      const date = moment(`${this.year}-${this.month}-${day}`, 'YYYY-MM-DD');
      return date.day() === 0; // 0 is Sunday
    },
  },
};
</script>

<style scoped>
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
  display:flex;
  justify-content: center;
  height: 100%; /* 이 부분을 수정하면 일 그리드 셀의 너비가 조정됩니다. */
  border-top: 1px solid #ccc;
  cursor: pointer;  
  padding-top: 10px;
  box-sizing: border-box;
}

.date:hover {
  box-shadow: inset 0 0 0 2px rgb(130, 0, 32);
  transition: all 0.1s;
}
.date.sunday {
  color: red;
}

.today {
  background-color: #ffa3a3;
}

.selected {
  color: #7c0505;
  font-weight: 900;
}

.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  font-size: 14px;
  color: #666;
}
</style>
  
  