<template>
  <div id="app">
     <el-container v-if="$route.meta.keepAlive">
      <el-header>
        <!-- 导航栏 -->
        <header-nav></header-nav>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 侧边栏 -->
          <left-nav></left-nav>
        </el-aside>
        <el-main>
          <!-- Body -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- 登录页 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import headerNav from './components/Header.vue'
import leftNav from './components/Left.vue'

export default {
  components:{
    headerNav,
    leftNav
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header{
  padding: 0;
}
</style>
