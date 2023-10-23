<template>
  <div class="echartDemo">
    <div style="width: 100%; height: 100%" id="myChart"></div>
  </div>
</template>
<script setup>
import * as echarts from "echarts";

onMounted(() => {
  initMyChart();
})

let myChart = null;
const initMyChart = () => {

  const xAxisData = [];
  const data = [];
  for(let i = 1; i < 25 ;i++) {
    xAxisData.push(i)
    data.push(i * 45);
  }

  const seriesData = [
    {
      type: "line",
      name: "小明",
      data
    }
  ];

  if (myChart) echarts.dispose(myChart);
  myChart = echarts.init(document.getElementById("myChart"))
  let option = {
    legend: {
      itemWidth: 10,
      itemHeight: 3,
      type: "scroll",
      top: 0,
      right: 5,
      icon: "rect"
    },
    tooltip: {
      appendToBody: true,
      trigger: 'axis',
      textStyle: {
        fontSize: 10
      },
    },
    grid: {
      left: 10,
      right: 5,
      bottom: 5,
      top: 15,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      triggerEvent: true,
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: "#D8DCE6",
        },
      },
      axisLabel: {
        color: "#626D85",
        font: {
          size: 13,
          weight: 400,
        },
      },
      axisLine: {
        lineStyle: {
          color: "#D8DCE6",
        },
      },
    },
    yAxis: {
      type: 'value',
      splitNumber: 3,
      scale: true,
      nameTextStyle: {
        align: "left",
        font: {
          size: 14,
          weight: 500,
        },
        color: "#626D85",
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#D8DCE6",
        },
      },
      axisLabel: {
        color: "#626D85",
        font: {
          size: 13,
          weight: 400,
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#D8DCE6",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#EDEFF4",
        },
      },
    },
    series: seriesData,
  }
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart?.resize();
  });
}

</script>
<style scoped lang="scss">
div.echartDemo {

}
</style>
