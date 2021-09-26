<template>
<div class="overlay">
<canvas ref="loader" width="100" height="100" ></canvas>
</div>
</template>
<script>
export default {
  name: 'Loader',
  data() {
    return {
      ctx: null,
      starPosition: 0,
      width: 50,
      height: 50,
      x: 90,
      y: 90,

    };
  },
  mounted() {
    this.initLoader();

    this.drawCube();
  },
  methods: {
    initLoader() {
      const c = this.$refs.loader;
      this.ctx = c.getContext('2d');
    },

    drawCube() {
      const { ctx } = this;

      ctx.strokeStyle = 'rgba(0,153,255,0.4)';
      ctx.clearRect(0, 0, this.$refs.loader.width, this.$refs.loader.height);

      ctx.beginPath();

      ctx.moveTo(10, 90);
      ctx.lineTo(90, 90);
      ctx.lineTo(90, 40);
      ctx.lineTo(40, 40);
      ctx.lineTo(40, 60);
      ctx.lineTo(90, 60);

      ctx.moveTo(90, 40);
      ctx.lineTo(40, 10);
      ctx.lineTo(10, 40);
      ctx.lineTo(10, 90);

      ctx.stroke();

    //  ctx.fill();
    },
  },
};
</script>
<style lang="scss" scoped>
.overlay{
  position: fixed;
  width: 100%;
  height: 100%;
  top:0;
  bottom: 0;
  left:0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
}
 canvas {
    border: 1px solid black;
  }

</style>
