<template>
  <div id="app">
      <!-- <Header /> -->
    <router-view/>
    <!-- <Footer /> -->
  </div>
</template>
<script>
// import Header from '@/components/Header.vue';
// import Footer from '@/components/Footer.vue';
import initStore from './store';

initStore();

export default {
  name: 'App',
  components: {
    // Header,
    // Footer,
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
@import url('./styles/reset.scss');
@import url('./styles/default.scss');

#app {
  font-family: Roboto, sans-serif;
  height: 100%;
  min-height: 100vh;
  width: 100%;

  h1,h2,h3,h4,h5,h6{
    font-family: Playball, sans-serif;
    // padding: 5px 0px;
  }

  h1{
    font-size: 30px;
  }

  h2{
    font-size: 24px;
  }
   h3{
    font-size: 18px;
  }
  h4{
    font-size: 16px;
  }
  h5{
    font-size: 14px;
  }
  h6{
    font-size: 12px;
  }
}
</style>
