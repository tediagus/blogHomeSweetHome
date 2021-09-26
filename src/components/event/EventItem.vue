/* eslint-disable no-tabs */
<template>
  <article class="event-item-container">
    <Description
      :class="{ full: event.medias.length === 0 }"
       @click.native="$emit('show-event', event)"
    >
      <template #media>
        <div class="media-container">
         <Media
          v-for="(media, i) in event.medias"
          :key="`media-${i}`"
          :source="media.source"
        />
        </div>
      </template>
      <template #title>
        <h3 class="title">{{ event.title }}</h3>
      </template>

      <!-- <template #footer>
        <LinkButton @click.native="$emit('show-event', event)" class="btn-link" />
      </template> -->
    </Description>
  </article>
</template>
<script>
import Description from '@/components/event/Description.vue';
import Media from '@/components/event/Media.vue';
// import LinkButton from '@/components/LinkButton.vue';

export default {
  name: 'EventItem',
  components: {
    Description,
    Media,
    // LinkButton,
  },
  props: {
    event: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>

 .event-item-container {
    width: 85%;
    height: 100px;
    position: relative;
    margin-bottom: 1rem;
    box-shadow: 0.25rem 0.1875rem 0.625rem 0.1875rem rgba(0, 0, 0, 0.2);
    font-size: 0.875rem;
    border-radius: 5px;

    .media-container{
      height: 100px;
      display: flex;
      width: 100%;
      overflow: hidden;
      border-radius: 5px;
    }

//   .btn-link {
//     position: absolute;
//     right: 10px;
//     bottom: 5px;
//   }
 }

</style>
