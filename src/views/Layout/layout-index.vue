<template>
  <div>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <LayoutFooter />
    <!-- 二级路由出口 -->
    <RouterView />
  </div>
</template>
<script setup>
//导入子组件--导航栏、header、footer、

import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
</script>
<style></style>
