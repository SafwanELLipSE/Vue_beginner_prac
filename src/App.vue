<template>
  <div class="app">
    <nav>
      <div class="navigation__logo">
        Twotter
      </div>
      <div class="navigation__user">
        {{ state.user.username }}
      </div>
    </nav>

    <!-- <UserProfile/> -->
    <router-view/>
  </div>
</template>

<script>
import {reactive} from 'vue';
import VueRouter from 'vue-router';
// import UserProfile from "./views/UserProfile.vue"; 

export default{
  name: 'App',
  // components: {UserProfile},
  setup(){
    const state = reactive({
      user:{
        username: '_BulBul Panday'
      }
    })

    return{
      state
    }
  },
  // data(){
  //   return{
  //     user:{
  //       username: '_BulBul Panday'
  //     }
  //   }
  // }
}
</script>

<style>
@import './styles/main.css';
#app {
  font-family: Arial, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fA;
}
</style>
