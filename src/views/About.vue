<template>
  <div class="login-container">

    <!-- 登陆框 -->
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="avatar-box">
        <img src="../assets/logo.png" alt="">
      </div>

    
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 登录表单数据对象
      // loginForm: {
      //   username: 'admin', // 登录的用户名
      //   password: '123456' // 登录密码
      // },
      // // 登录表单的验证规则对象
      // loginFormRules: {
      //   // 用户名的校验规则
      //   username: [{ required: true, message: '请输入登录名称', trigger: 'blur' }],
      //   password: [{ required: true, message: '请输入登录密码', trigger: 'blur' }]
      // }
    }
  },
  methods: {
    
  }
}
</script>

<style>
.login-container {
  background-color: #2b4b6b;
  height: 100%;
  overflow: hidden;
}

.login-box {
  width: 450px;
  height: 304px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/* .avatar-box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 8px;
  box-shadow: 0 0 10px #eee;
  position: absolute;
  background-color: #fff;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
} */

.el-form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>



// WEBPACK FOOTER //
// src/components/Login.vue  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
