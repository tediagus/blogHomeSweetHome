<template>
  <div>
    <loader v-if="isLoading" />
    <strong class="calendar-month"> Juillet </strong>
    <ul class="calendar-days">
      <li :class="{'day-item': true,'is-current':  isCurrentDay(day)}"
      v-for="day, index of nbDaysOfMonth" :key="index"
      @click="handleClick(day)">
         <span>{{getDayName(day)}}</span>
        <span>{{getDay(day)}}</span>
        </li>
    </ul>
  </div>
</template>
<script>
import Loader from '@/components/Loader.vue';
import dateLib from '@/utils/date';

export default {
  name: 'Calendar',
  components: {
    Loader,
  },
  data() {
    return {
      currentDate: null,
      nbDaysOfMonth: [],
      isLoading: false,

    };
  },
  mounted() {
    this.nbDaysOfMonth = dateLib.daysInMonth();
  },

  methods: {
    getDay(d) {
      return dateLib.day(d);
    },
    getDayName(d) {
      return dateLib.dayName(d, true).toUpperCase();
    },
    isCurrentDay(d) {
      return dateLib.isCurrentDay(d);
    },

    handleClick(d) {
      this.isLoading = true;
      console.log(d);
    },
  },
};
</script>
<style lang="scss" scoped>
  .calendar-month{
    height: 20px;
    width: 100%;
    background: chocolate;
  }
  .calendar-days{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    transition: transform 0.7s ease-in-out;
    scroll-snap-type: x mandatory;
    padding-top: 10px;

    .day-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border: 1px solid rgb(126, 126, 126);
      border-radius: 50%;
      flex-shrink: 0;
      margin-right:3px ;
      margin-left:3px ;

      &.is-current{
        background: rgb(99, 193, 221);
      }

    }

  }
</style>
