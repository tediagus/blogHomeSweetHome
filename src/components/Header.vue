<template>
  <div class="header">
    <ul>
      <li><span class="capital-name">C</span><span class="suffix-name">hloé</span></li>
      <li><span class="capital-name">T</span><span class="suffix-name">iméo</span></li>
      <li><span class="capital-name">E</span><span class="suffix-name">stéban</span></li>
      <li><span class="capital-name">T</span><span class="suffix-name">édiaga</span></li>
    </ul>
    <strong class="header-title">home</strong>
     <!-- <nav class="header-menu">
       <ul class="menu">
        <router-link to="/">Home</router-link> |
        <router-link to="/admin">Admin</router-link>
       </ul>
    </nav> -->
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
  },
};

</script>
<style lang="scss" scoped>
   .header {
     background-color: chocolate;
     display: flex;
     padding-left: 5px;
     padding-top: 2px;
     padding-bottom: 2px;
     margin-bottom: 10px;
  //   background-image: url('~@/assets/imgs/home-cube.jpg');
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-position: bottom 4px right 0;

  //   display: flex;
  //   flex-direction: column;
  //   align-items: flex-end;
  //   justify-content: flex-end;
     position: fixed;
     right: 0;
     left: 0;
     top: 0;
  //   z-index: 1;
    .capital-name {
      font-size: 23px;
      color : #fff;
      margin-right: 5px;
    }
    .suffix-name{
      font-size: 12px;
      color : #fff;
    }

     .header-title{
        color: #fff;
        padding: 5px;
        font-size: 43px;
        padding-bottom: 10px;
        padding-right: 15px;
        font-weight: bolder;
        transform: translate(80%, 25%);
        }
  //   .menu{
  //     display: flex;
  //     flex-direction: row;
  //     align-items: center;
  //   }
  //   .router-link-active{
  //     color: yellow;
  //     padding: 5px;
  //   }

 }
</style>
