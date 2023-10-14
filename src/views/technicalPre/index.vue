<template>
  <div class="technicalPre">
    <el-container>
      <el-aside width="200px">
        <MenuComponents />
      </el-aside>
      <el-main>
        <table-components />
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import MenuComponents from "./components/menuComponents.vue"
import TableComponents from "./components/tableComponent.vue"

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
