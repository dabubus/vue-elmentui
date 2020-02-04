<template>
  <div class="login_container">
    <!-- login -->
    <!-- 登陆框 -->
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- <h2 class="login_title">User Login</h2> -->
      <!-- label-position="top"  -->
      <el-form
        class="login_form"
        :model="loginform"
        :rules="loginrules"
        ref="loginformref"
        label-position="left"
      >
        <el-form-item label="用户名" label-width="80px" prop="username">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="loginform.username"
            placeholder="please input you username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px" prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginform.password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" v-on:click="login">login</el-button>
          <el-button type="info" @click="resetloginform">reset</el-button>
          <el-button type="primary" @click="register">register</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  height: 300px;
  width: 450px;
  background: #ffffff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.login_title {
  position: relative;
  left: 10px;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.avatar_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 8px;
  box-shadow: 0 0 10px #eee;
  position: absolute;
  background-color: #fff;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
</style>

<script>
export default {
  data() {
    return {
      // 登录表达数据对象
      loginform: {
        username: "admin",
        password: "1234567"
      },
      loginrules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 5, max: 12, message: "长度在 5 到 12 个字符", trigger: "blur" }
        ],
        // 验证用户名是否合法
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    resetloginform() {
      // console.log(this.$refs.loginformref.resetFields())
      this.$refs.loginformref.resetFields();
    },
    register() {
      this.$refs.loginformref.validate(async (valid, validobj) => {
        // console.log(valid);
        if (!valid) {
        } else {
          this.$http({
            method: "post",
            url: "api/register",
            data: this.$Qs.stringify(this.loginform)
          }).then(res => {
            // console.log(res.data);
            if (res.code == 400) {
              console.log("user is exist2");
              this.$message.error("该用户名已存在");
              return;
            } else if (res.code == 200) {
              console.log("register succsee");
              this.$message({
                message: "恭喜你，注册成功",
                type: "success"
              });
            } else {
              console.log("error");
              // return this.$message.error('该用户名已存在');
            }
          });
        }
        //console.log(validobj)
      });
    },
    login() {
      this.$refs.loginformref.validate(async (valid, validobj) => {
        // console.log(valid);
        if (!valid) {
        } else {
          // let url = 'sys/try/ajax/json_demo.json'
          // console.log('url', url)
          // const res = await this.$http.post('myurl/tsysu', this.loginform)
          // console.log('result', res)
          // console.log(this.loginform);
          // this.$http
          //   .get("http://localhost:8089/api/register", { params: this.loginform })
          //   .then(res => {
          //     console.log(res);
          //   });
          // this.$http
          //   .post("http://localhost:8089/api/register",  this.$Qs.stringify(this.loginform))
          //   .then(res => {
          //     console.log(res);
          //   });

          const result = await this.$http({
            method: "post",
            url: "api/login",
            data: this.$Qs.stringify(this.loginform)
          });
          // console.log(result.code);
          // 判断是否为服务器访问失败
          if (result.code == 404) {
            return this.$message.error(result.message);
          }
          else {
            // 使用mutations
            //this.$store.commit('settoken', result.data.data)
            // 使用actions
            if (result.code == 200) {
              // console.log(result);
              // 使用actions把得到的token赋值给Vuex.Store state.token
              this.$store.dispatch("settoken", result.data);
              // console.log(this.$store.state.token);
              // 把state.token保存到localStorage的token里面
              window.localStorage.setItem("token", this.$store.state.token);
              this.$message({
                message: "登录成功",
                type: "success"
              });
              this.$router.push("/tabsmain");
              // this.$router.replace({path:'/main'})
            }
          }
        }
        //console.log(validobj)
      });
    },
    login2() {
      this.$refs.loginformref.validate((valid, validobj) => {
        console.log(valid);
        if (!valid) {
        } else {
          let url = "sys/try/ajax/json_demo.json";
          console.log("url", url);
          const result = this.$http.get("sys/try/ajax/json_demo.json", "");
          console.log(
            "result",
            result.then(val => {
              console.log("then", val);
            })
          );
        }
        //console.log(validobj)
      });
    }
  }
};
</script>