<template>
  <div class="layout">
    <el-container>
      <el-header>
        <my-header />
      </el-header>
      <el-container>
        <el-aside style="max-width: 200px;width: auto;">
          <my-menu />
        </el-aside>
        <el-main>
          <el-config-provider :locale="locale">
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component
                  v-if="$route.meta.keepAlive"
                  :is="Component"
                  :key="$route.path"/>
              </keep-alive>
              <component
                v-if="!$route.meta.keepAlive"
                :is="Component"
                :key="$route.path"/>
            </router-view>
          </el-config-provider>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import MyHeader from "./myHeader.vue";
import MyMenu from "./myMenu.vue";

const locale = zhCn;


</script>
<style scoped lang="scss">
div.layout {
  width: 100%;
  height: 100%;
  >.el-container {
    height: 100%;
  }
  .el-main {
    width: 100%;
    height: calc(100vh - 60px);
    padding: 15px;
    overflow: hidden;
  }
}
</style>
