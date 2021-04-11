<template>
<div>
  <el-container class="container">
    <!-- 头区域 -->
    <el-header>
      <img src="../assets/study.png" alt="">
      <span>前端学习笔记</span>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
        text-color="#333"
        active-text-color="red"
        :unique-opened="true"
        collapse-transition="false"
        :collapse="isCollapse"
        :router="true">

          <!-- 一级菜单 -->
          <el-submenu :index="'1'">
            <template #title>
              <i class="el-icon-pear"></i>
              <span>计算机网络</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="1-1">应用层</el-menu-item>
            <el-menu-item index="1-2">传输层</el-menu-item>
            <el-menu-item index="1-3">网络层</el-menu-item>
            <el-menu-item index="1-4">数据链路层</el-menu-item>
            <el-menu-item index="1-5">物理层</el-menu-item>
          </el-submenu>

          <!-- 一级菜单 -->
          <el-submenu :index="'2'">
            <template #title>
              <i class="el-icon-grape"></i>
              <span>HTML</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="2-1">总结</el-menu-item>
          </el-submenu>

          <!-- 一级菜单 -->
          <el-submenu index="3">
            <template #title>
              <i class="el-icon-orange"></i>
              <span>CSS</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="3-1">总结</el-menu-item>
          </el-submenu>

          <!-- 一级菜单 -->
          <el-submenu index="4">
            <template #title>
              <i class="el-icon-cherry"></i>
              <span>JavaScript</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="4-1">总结</el-menu-item>
          </el-submenu>

          <!-- 一级菜单 -->
          <el-submenu index="5">
            <template #title>
              <i class="el-icon-apple"></i>
              <span>数据结构</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="5-1">总结</el-menu-item>
          </el-submenu>
      </el-menu>
      </el-aside>
      <!-- 主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container> 
</div>   
</template>

<script>
export default {
  name: 'home',
  props: {
    
  },
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    //点击按钮切换菜单的折叠和展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
  




  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 750px;
}
.el-header {
  /* background-color: #; */
  border-bottom: 1px solid #dcdfe6;
  color: #333;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content:left;
  width: 100%;

}

.el-aside {
  /* background-color: #D3DCE6; */
  color: #333;
  /* text-align: center;
  line-height: 200px; */
}

.el-menu {
  border-right: solid 1px white;
}

.el-main {
  background-color: white;
  color: #333;
  border-left: 1px solid #dcdfe6;
  /* text-align: center;
  line-height: 160px; */
}
.toggle-button {
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer; 
}




</style>
