<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeHot />
  <HomeNew />
  <HomeProducts />
</template>
<script setup>
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeProducts from "./components/HomeProducts.vue";
</script>
<style>
.container {
  position: relative;
}
</style>
