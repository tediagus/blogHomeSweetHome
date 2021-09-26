<template>
  <div>
    <h3>Les évenments </h3>
    <router-link to="/admin" >Retour </router-link>
    <div>
      <EventList :eventsItems="events" />
    </div>
  </div>
</template>
<script>
import EventList from '@/components/event/EventList.vue';
import { mapState } from 'vuex';

export default {
  name: 'ListEvent',
  components: {
    EventList,
  },
  data() {
    return { };
  },
  computed: {
    ...mapState('eventStore', ['events']),
  },
  methods: {
  },
  created() {
    this.$store.dispatch('eventStore/getALLEvents');
  },
};

</script>
