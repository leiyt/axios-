<template>
  <div id="login">
    <div class="login_box">
      <div class="img-box">
        <img src="../assets/logo.png" alt="">
      </div>
      <el-form
        status-icon
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" auto-complete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginClick">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    loginClick () {
      console.log('login');
      this.$router.push({ path:'/home'})
    }
  }
}
</script>

<style scoped>
.login_box {
  width: 500px;
  /* height: 300px; */
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 5px #333;
}
.img-box{
  height: 100px;
  padding: 10px;
  text-align: center;
}
.img-box>img{
  height: 100%;
}
.el-input{
  width: 90%;
}
.el-form{
  padding: 10px;
  padding-right: 30px;
}
.el-form-item__content{
  text-align: left;
}
.el-button{
  padding: 12px 25px;
}
</style>
