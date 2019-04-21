<template>
  <div id="home">
    <h2>这是首页</h2>
    <el-row>
      <el-button type="primary" @click="getInfoClick">去请求</el-button>
    </el-row>
    <el-row><h1>Echarts图表</h1></el-row>
    <div class="container">
      <bar-graph></bar-graph>
    </div>

    <div class="container">
      <pie-graph></pie-graph>
    </div>
  </div>
</template>
<script>
import BarGraph from "@/components/bargraph";
import PieGraph from "@/components/piegraph";
export default {
  components: {
    BarGraph,
    PieGraph
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    getInfoClick() {
      this.$ajax({
        method: "post",
        url: "userInfo/getInfo",
        data: {
          userName: "haha",
          password: "123456"
        }
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

