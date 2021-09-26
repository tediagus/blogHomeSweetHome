<template>
    <video :src="source" e v-if="mediaType === 'movie'"/>
    <img  v-else
    :src="sourceUrl"
    :alt="source"
    class="image"/>
</template>
<script>
import { EVENT_URL } from '@/services/event.service';

export default {
  name: 'Media',
  props: {
    mediaType: {
      type: String,
    },
    source: {
      type: String,
    },
  },
  computed: {
    sourceUrl() {
      return `${EVENT_URL}/${this.source} `;
    },
  },
};
</script>
<style lang="scss">
  .image{
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    object-position: 0px 0px;
  }
</style>
