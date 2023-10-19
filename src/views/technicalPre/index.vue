<template>
  <div class="technicalPre">
    <el-container>
      <el-aside width="200px">
        <MenuComponents />
      </el-aside>
      <el-main>
<!--        <table-components />-->
<!--        <demo1 />-->
<!--        <demo2 />-->
        <demo3 />
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import MenuComponents from "./components/menuComponents.vue"
import TableComponents from "./components/tableComponent.vue"
import Demo1 from "./threeDemo/demo1.vue";
import Demo2 from "./threeDemo/demo2.vue";
import Demo3 from "./threeDemo/demo3.vue";

</script>
<style scoped lang="scss">
div.technicalPre {
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
  }
}
</style>
