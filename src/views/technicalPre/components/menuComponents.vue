<template>
  <el-menu
    default-active="1"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse">
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="2" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup>
const isCollapse = ref(false);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
}
</script>
