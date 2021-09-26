<template>
    <div class="modal"  v-show="isOpen">
        <svg class="close-icon" viewBox="0 0 20 20" @click="handleClick">
            <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,
            4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,
            4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,
            0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,
            0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,
            0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,
            16.172,4.317,15.898,4.045z"></path>
        </svg>
        <div class="modal-content">
            <slot name="modal-header"></slot>
            <slot name="modal-content"></slot>
            <slot name="modal-footer"></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ModalEvent',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    handleClick() {
      this.close();
    },
  },
};
</script>
<style lang="scss" scoped>
    .modal{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      background: rgba($color: #000000, $alpha: 0.7);

    .close-icon{
        width: 27px;
        height: 24px;
        fill: #fff;
        position: fixed;
        top: 3px;
        right: 3px;
    }
      .modal-content{
        background: #fff;
        box-sizing: border-box;
        height: 90%;
        width: 90%;
        margin: 31px auto;
        overflow: auto;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
      }
    }
</style>
