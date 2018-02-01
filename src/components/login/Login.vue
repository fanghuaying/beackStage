<template>
  <div class="login">
    <div class="login-main">
      <div class="login-logo">
        <img src="../../assets/logo.png">
        <el-input  placeholder="请输入工号">
        </el-input>
        <el-input  placeholder="请输入密码">
        </el-input>
        <el-button type="info" plain>登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input21: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  display: flex;
  align-items: center;
  background: url('../../assets/logo-background.png') no-repeat;
  background-size:100% 100%;
  overflow: hidden;
  height: 970px;
  min-width: 1500px;
}
.login-main{
  display: inline-block;
  width: 23%;
  height: 40%;
  margin: auto auto;
}
.login-logo{
  text-align: center;
}
.login-logo img{
  width: 70%;
}
.el-input{
  width: 100%;
  margin-top: 15px; 
  color: #8b807e;
}
.el-button{
  width: 100%;
  margin-top:20px; 
  color: #8b807e;
  background: #ddded6;

}
</style>
