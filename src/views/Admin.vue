<template>
  <div class="admin">
    <h1>Dashboard</h1>
    <div>
      <section>
        <h3>Gestion fil d'évement</h3>
        <ul class="menu">
        <router-link to="/admin/list-event" class="menu-item">Voir tous</router-link>
        <router-link to="/admin/create-event" class="menu-item" >create</router-link>
       </ul>
      </section>
      <section>
        <h3>Gestion des discutions</h3>
      </section>
    </div>
      <transition>
        <router-view />
     </transition>
  </div>
</template>
<script>
export default {
  name: 'Admin',
};
</script>
<style lang="scss" scoped>
.admin {
  padding: 185px 15px 0 15px;
  min-height: 100vh;
  background: #d0d0d0;

  h3 {
    padding-left: 5px;
  }

  .menu{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 15px;

    .menu-item{
      min-width: 120px;
      text-align: center;
    }
  }
}
</style>
