<template>
  <div>
    <!-- 导航栏 -->
    <TopNavBar />
    <!-- 内容 -->

    <router-view />

    <!-- 页脚 -->
    <Footer />
    <!-- 返回顶部 -->
    <BackTop />
    <!-- 侧边导航栏 -->
    <!-- <SideNavBar /> -->
  </div>
</template>


<script setup lang="ts">
import TopNavBar from './components/layout/TopNavBar.vue'
import Footer from './components/layout/Footer.vue'
import BackTop from './components/BackTop.vue'
import SideNavBar from './components/layout/SideNavBar.vue'
</script>


<style scoped>
</style>