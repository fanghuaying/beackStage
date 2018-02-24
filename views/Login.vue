<template>
  <div class="login">
    <div class="login-main">
      <el-form :model="ruleForm2" :rules="rule2" ref="ruleForm2">
        <div class="login-logo">
          <img src="../src/assets/logo.png">
        </div>
        <el-form-item prop="account">
          <el-input type="text" v-model="ruleForm2.account" placeholder="请输入工号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item>
          <el-button type="info" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { requestLogin } from "../src/api/api.js"
export default {
  name: 'Login',
  data () {
    return {
      logining: false,
      ruleForm2: {
        account: "admin",
        checkPass: "123456"
      },
      rule2: {
        account: [
          { required: true, message: "请输入工号", trigger: "blur" },
        ],
        checkPass: [
          { required: true, message: "请输入密码", trigger: "blur"}
        ]
      },
      checked: true
    };
  },
  methods: {
    handleSubmit2(ev){
      var _this = this;
      this.$refs.ruleForm2.validate((valid) => {
        if(valid){
          this.logining = true;
          var loginParams = { username: this.ruleForm2.account, password:this.ruleForm2.checkPass};
          requestLogin(loginParams).then(data => {
            console.log(data.data)
            this.logining = false;
            let { msg,code,user} = data;
            if(code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              });
            }else{
              sessionStorage.setItem('user',JSON.stringify(user));
              this.$router.push({path: "/Home"})
            }
          });
        }else{
          console.log("error submit!")
          return false;
        }
      })
    }
    // goStage : function(){
    //   this.$router.push({path:"/stage"})
    // }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  display: flex;
  align-items: center;
  background: url('../src/assets/logo-background.png') no-repeat;
  background-size:100% 100%;
  overflow: hidden;
  height: 970px;
  min-width: 1500px;
}
.login-main{
  display: inline-block;
  width: 20%;
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
