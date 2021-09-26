<template>
  <div>
    <input
    type="file"
    :id="id"
    @change="handleChange($event)"
    accept="image/*,video/*" />
    <!-- <div>
    <img
    :alt="`tmp-image${i}`"
    width="100"
    height="100" />
    </div> -->
    <button type="button"> X </button>
  </div>
</template>
<script>

export default {
  name: 'InputFile',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleChange(e) {
      const { files } = e.target;

      const fileData = {
        name: files[0].name,
        src: URL.createObjectURL(files[0]),
        size: files[0].size,
        type: files[0].type,
        origin: files[0],
      };
      this.$emit('fileChange', fileData);
    },
  },
};
</script>
