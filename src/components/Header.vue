<template>
  <div id="header">
    <el-row height='60'>
      <el-col :span="16">
        <div class="logo_box">
          <img src="../assets/logo-font.png" alt="">
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info_box">
          <span class="info_item login">用户A</span>
          <span class="info_item cancle btn" @click="exitClick">注销</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  mounted(){

  },
  methods:{
    exitClick(){
      //清空用户信息和token，回到登录页
     this.$router.push({name: "login", path: "/login" })
    }
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  background-color: #545c64;
  color: #fff;
}
.el-row {
  height: 60px;
}
.el-row::after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #e6e6e6;
}
.el-col{
  height: 60px;
}
.logo_box{
  height: 30px;
  padding: 15px;
	text-align: left;
}
.logo_box>img{
  height: 100%;
}
.info_box{
  display: inline-block;
  width: 100%;
  height: 40px;
  padding: 10px 0;
  text-align: right;
}
.info_item{
  display: inline-block;
  padding: 0 20px;
  line-height: 40px;
}
.info_item.login::before,.info_item.cancle::before{
  content: '';
  display: inline-block;
  width: 28px;
  height: 28px;
  vertical-align: middle;
  margin-right: 10px;
  background-size: 90% 90%;
  background-position: center center;
  background-repeat: no-repeat;
}
.info_item.login::before{
  background-image: url(../assets/user.png);
}
.info_item.cancle::before{
  background-image: url(../assets/exit.png);
}
.btn.cancle{
  cursor: pointer;
}
</style>
