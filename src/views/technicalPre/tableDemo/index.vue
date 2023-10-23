<template>
  <div class="tableDemo">
    <el-table
      :data="tableData"
      height="100%"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="visit_count"
        label="访问量">
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup>
import { getTableData } from "@/api/tableDemo";

onMounted(() => {
  initTable();
})

const tableData = ref([]);
const initTable = () => {
  const params = {
    page: 1,
    limit: 20,
    tab: "ask",
    mdrender: "true"
  }
  getTableData(params).then(res => {
    const { success, data } = res;
    if(success) {
      tableData.value = data;
    }
  })
}

</script>
<style scoped lang="scss">
div.tableDemo {

}
</style>
