<template>
  <section class="event-list-container">
    <EventItem v-for="(item, index) in eventsItems"
    :event="item"
    :key="index"
    @show-event="showEvent" />

    <ModalEvent ref="modalEvent">
        <template #modal-header> <h2>{{modalContent.title}}</h2></template>
        <template #modal-content>
          <div>{{modalContent.content}}</div>
          <div  v-if="modalContent.resources">
          <Media
            class="media-container"
            v-for="(resource, i) in modalContent.resources"
            :key="`resource-${i}`"
            :mode="resource.type"
            :source="resource.source"
          />
          </div>
        </template>
    </ModalEvent>
  </section>
</template>
<script>
import EventItem from '@/components/event/EventItem.vue';
import ModalEvent from '@/components/event/ModalEvent.vue';
import Media from '@/components/event/Media.vue';

export default {
  name: 'EventList',
  components: {
    EventItem,
    ModalEvent,
    Media,
  },
  data() {
    return {
      modalContent: {},
    };
  },
  props: {
    eventsItems: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  methods: {
    showEvent(eventItem) {
      if (eventItem) {
        this.modalContent.title = eventItem.title;
        this.modalContent.content = eventItem.description;
        this.modalContent.resources = eventItem.medias.length ? eventItem.medias : [];
        this.modalContent.Footer = eventItem.title;
      }
      this.$refs.modalEvent.open();
    },
  },
};
</script>
<style lang="scss" scoped>
.event-list-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
</style>
