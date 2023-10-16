<template>
  <el-table
    :data="tableData"
    height="100%"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>
<script setup>

const tableData = ref([]);
for(let i = 0; i < 300; i++) {
  tableData.value.push({
    date: "2023-10-14",
    name: "李雨健",
    address: "山西省太原市小店区",
  })
}

</script>
