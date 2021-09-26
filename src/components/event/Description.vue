<template>
  <div class="description">
    <slot name="media"> </slot>
    <div class="resume">
      <slot name="title"> </slot>
      <!-- <slot name="content">
    </slot> -->
    </div>
    <slot name="footer" >
    </slot>
    </div>

</template>
<script>

export default {
  name: 'Description',
  props: {
    description: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>

   .description {
    border-radius: 5px;
    position: relative;

    &.full {
        height: 100%;
    }

    .resume{
      position: absolute;
      left: 0px;
      right: 0;
      bottom: 20px;
      color : var(--white);
      padding: 5px;
    ;
      border-bottom-right-radius: 5px;

      &::before{
        content: "";
        background: rgba(0, 0, 0, 0.3);
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        min-height: 50px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        z-index: -1;
      }
    }

     .title {
       font-weight: 600;
       top: 8rem;
       z-index: 1;
       color: #fff;
     }
   }
</style>
