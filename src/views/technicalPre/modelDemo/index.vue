<template>
  <div class="modelDemo">
<!--    <AutoTruck />-->
<!--    <GeometryModel />-->
<!--    <LineModel />-->
<!--    <ConstructionSteel :width="800" :height="450"/>-->
    <CampusModel :width="800" :height="450"/>
  </div>
</template>
<script setup>
import AutoTruck from "./components/autoTruck.vue";
import GeometryModel from "./components/geometryModel.vue";
import LineModel from "./components/lineModel.vue";
import CampusModel from "./components/campusModel.vue"


import ConstructionSteel from "./components/constructionSteel.vue";
</script>
<style scoped lang="scss">
div.modelDemo {

}
</style>
