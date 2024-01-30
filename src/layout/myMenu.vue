<template>
  <el-menu
    default-active="/tableDemo"
    :router="true"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose">
    <el-menu-item
      v-for="(item, index) in menuList"
      :index="item.index">
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup>
import { List, TrendCharts, Management } from '@element-plus/icons-vue'

const menuList = [
  { name: "表格", icon: List, index: '/tableDemo' },
  { name: "图表", icon: TrendCharts, index: '/echartDemo' },
  { name: "模型", icon: Management, index: '/modelDemo' },
  { name: "绘画", icon: Management, index: '/tldrawDemo' },
]

const isCollapse = ref(false);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
}
</script>
