<template>
  <div class="container">
    <p v-if="isLoading"> Loading ... </p>
    <div v-else>
       <EventList :eventsItems="events"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventList from '@/components/event/EventList.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    EventList,
  },
  computed: {
    ...mapActions('eventStore', ['getAllEvents']),
    ...mapState('eventStore', ['loading', 'events']),
    isLoading() {
      return this.loading;
    },
  },
  async mounted() {
    await this.$store.dispatch('eventStore/getAllEvents');
  // this.getAllEvents();
  },
};
</script>
<style lang="scss" scoped>
  .container{
    padding-top: 7rem;
    padding-left: 0.65rem;
    padding-right: 0.65rem;
  }

</style>
