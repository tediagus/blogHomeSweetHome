<template>
<router-link :to="path" class="btn-back">retour </router-link>
</template>
<script>
export default {
  name: 'BackButton',
  props: {
    path: {
      type: String,
      default() {
        return '/';
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-back{
  height: 15px;
  min-width: 40px;
  display: block;
  text-align: right;
  padding-right: 5px;
  position: absolute;
  right: 0;
  top: 0;

}
</style>
