<template>
  <div class="myHeader">
    <div class="left">
      <span>技术汇总累计</span>
    </div>
    <div class="right">
      <el-switch
        v-model="isDark"
        inline-prompt
        :active-action-icon="Moon"
        :inactive-action-icon="Sunny"
        @change="toggleDark"
      />
    </div>
  </div>
</template>
<script setup>
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>
<style scoped lang="scss">
div.myHeader {
  width: 100%;
  height: 59px;
  border-bottom: 1px solid var(--el-border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  div.left {
    font-size: 16px;
    font-weight: bold;
  }
  div.right {

  }
}
</style>
