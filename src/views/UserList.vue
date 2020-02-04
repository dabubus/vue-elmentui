<template>
  <div>
    <!-- 搜索与添加区域 -->
    <el-row :gutter="20">
      <el-col :span="8">
        <!-- @change="saveHistoryData" -->
        <!-- {{showSearch}} -->
        <el-input placeholder="请输入内容" v-model="search" clearable>
          <!-- <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
          </el-select>-->
          <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
      </el-col>
    </el-row>

    <!-- 用户列表区域 -->
    <el-table :data="tables" stripe border>
      <!-- <el-table-column type="index" label="#"></el-table-column> -->
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="password" label="密码" sortable></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column label="状态">
        <template v-slot="scope">
          <!-- {{scope.row.used}} -->
          <el-switch v-model="scope.row.used" @change="userStateChange(scope.row)"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180px">
        <template v-slot="scope">
          <el-row>
            <!-- <el-button-group style=""> -->
            <el-tooltip class="item" effect="dark" content="修改" placement="top">
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click="showEditUser(scope.row.id)"
              ></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click="checkDelete(scope.row.id)"
              ></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="设置" placement="top">
              <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
            </el-tooltip>
            <!-- </el-button-group> -->
          </el-row>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页栏区域 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageInfo.page"
      :page-sizes="[1, 2, 5, 10, pageInfo.total]"
      :page-size="pageInfo.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.total"
    ></el-pagination>

    <!-- 添加用户对话框 -->
    <el-dialog title="提示" :visible.sync="addDialogVisible" width="50%" @close="addDialogClose">
      <!-- 主体 -->
      <el-form :model="addForm" :rules="addFormrules" ref="addFormRef" label-position="left">
        <el-form-item label="用户名" label-width="80px" prop="username">
          <!-- prefix-icon="el-icon-user-solid" -->
          <el-input v-model="addForm.username" placeholder="please input you username"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px" prop="password">
          <!-- prefix-icon="el-icon-lock" -->
          <el-input v-model="addForm.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item label="姓名" label-width="80px" prop="name">
          <el-input v-model="addForm.name" placeholder="please input you username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="80px" prop="email">
          <el-input v-model="addForm.email" placeholder="please input you username"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑用户对话框 -->
    <el-dialog title="提示" :visible.sync="editDialogVisible" width="50%" @close="editDialogClose">
      <!-- 主体 -->
      <el-form :model="editForm" :rules="addFormrules" ref="editFormRef" label-position="left">
        <el-form-item label="用户名" label-width="80px" prop="username">
          <!-- prefix-icon="el-icon-user-solid" -->
          <el-input v-model="editForm.username" placeholder="please input you username" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名" label-width="80px" prop="name">
          <el-input v-model="editForm.name" placeholder="please input you username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="80px" prop="email">
          <el-input v-model="editForm.email" placeholder="please input you username"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">关 闭</el-button>
        <el-button type="primary" @click="updateEdit()">更 新</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    // 邮箱验证规则
    var checkEmail = (rule, value, callback) => {
      // 邮箱正确的正则表达式
      const regEmail = /^([\w\_\-]+)@([\w\-]+[\.]?)*[\w]+\.[a-zA-Z]{2,10}$/;

      // 非必填
      if (!value) {
        return callback();
      }
      if (value.match(regEmail)) {
        return callback();
      }
      callback(new Error("请输入正确的邮箱"));
    };

    return {
      search: "",
      pageInfo: {
        page: 1,
        size: 5,
        total: 0
      },
      userList: [],
      addDialogVisible: false,
      editDialogVisible: false,

      // 添加用户表现数据
      addForm: {
        username: "",
        password: "",
        name: "",
        email: ""
      },

      addFormrules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            min: 5,
            max: 12,
            message: "长度在 5 到 12 个字符",
            trigger: "blur"
          }
        ],
        // 验证用户名是否合法
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 12, message: `长度在 6 到 12 个字符`, trigger: "blur" }
        ],
        name: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ],
        email: [{ validator: checkEmail, trigger: "blur" }]
      },

      // 查询到的用户信息
      editForm: {}
    };
  },
  created() {
    this.setHistoryData();
    this.getUserlist();
    // console.log(this.$route.path)
  },
  computed: {
    // 模糊搜索
    tables() {
      // 把保存设置放到计算属性中， 当tables 发生改变时调用(search 引发的tables的改变,  PS 要有组件绑定tables时才有效 <el-table :data="tables" stripe border>)
      const search = this.search;
      if (search) {
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        // 注意： filter() 不会对空数组进行检测。
        // 注意： filter() 不会改变原始数组。
        return this.userList.filter(data => {
          // some() 方法用于检测数组中的元素是否满足指定条件;
          // some() 方法会依次执行数组的每个元素：
          // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
          // 如果没有满足条件的元素，则返回false。
          // 注意： some() 不会对空数组进行检测。
          // 注意： some() 不会改变原始数组。
          return Object.keys(data).some(key => {
            // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
            // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
            return (
              String(data[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.userList;
    },
    // 使用计算属性监听search修改 <el-input placeholder="请输入内容" v-model="showSearch" clearable>
    showSearch: {
      // console.log('showSearch')
      get: function() {
        console.log("showSearch");
        // 保存输入的数据
        this.saveHistoryData();
        return this.search;
      },
      set: function(newValue) {
        this.search = newValue;
      }
    }
  },
  // 监听器
  watch: {
    // 如果 `search` 发生改变，这个函数就会运行
    search: function(newQuestion, oldQuestion) {
      this.saveHistoryData();
    }
  },
  methods: {
    // 动态渲染做出导航菜单
    async getUserlist() {
      let tokenstr = window.localStorage.getItem("token");
      const res = await this.$http.get("api/getuserlist", {
        params: this.pageInfo
      });
      //   console.log(res);
      if (res.code != 200) {
        this.$message.error("获取用户列表失败");
      } else {
        this.userList = res.data.object;
        this.pageInfo.total = res.data.total;
      }
      // console.log(this.userList);
      // console.log(this.pageInfo);
      //   this.menuList = res.data;
    },
    // 保存已输入数据
    saveHistoryData() {
      // console.log("savein");
      // 把已输入数据保存到sessionStorage里面
      window.sessionStorage.setItem("usersearch", this.search);
    },
    // 填入历史数据
    setHistoryData() {
      console.log(window.sessionStorage.getItem("usersearch"));
      if (window.sessionStorage.getItem("usersearch")) {
        this.search = window.sessionStorage.getItem("usersearch");
      }
    },
    // 监听pagesize 改变
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageInfo.size = val;
      this.getUserlist();
    },
    // 监听page 改变
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.pageInfo.page = val;
      this.getUserlist();
    },
    // 监听用户状态改变
    userStateChange(userInfo) {
      // console.log(userInfo)
      // 判断是否修改成功
      this.updateUser(userInfo).then(res => {
        // console.log(res);
        if (res.code != 200) {
          userInfo.used = !userInfo.used;
          return this.$message.error("修改用户信息失败");
        }
        this.$message.success(`用户id: ${userInfo.id} 状态修改成功`);
      });
    },
    // 更新用户信息
    updateUser(userInfo) {
      const result = this.$http({
        method: "post",
        url: "api/updateuser",
        data: this.$Qs.stringify(userInfo)
      });
      // console.log(result)
      return result;
    },
    // 添加用户
    addUser() {
      // 表单预校验
      this.$refs.addFormRef.validate(async (valid, validobj) => {
        console.log(valid);
        if (valid) {
          const result = await this.$http({
            method: "post",
            url: "api/adduser",
            data: this.$Qs.stringify(this.addForm)
          });
          if (result.code == 200) {
            this.$message.success("用户添加成功");
            // this.$refs.addFormRef.resetFields();
            this.addDialogVisible = false;
            this.getUserlist();
          } else {
            this.$message.error("用户添加失败");
          }
        } else {
          this.$message.error("请正确填写各项数据");
        }
      });
    },

    // 添加用户弹窗关闭处理
    addDialogClose() {
      this.$refs.addFormRef.resetFields();
    },

    // 更新编辑的用户数据
    updateEdit() {
      this.$refs.editFormRef.validate(async valid => {
        console.log(valid);
        if (valid) {
          let userInfo = this.editForm
          this.updateUser(userInfo).then(res => {
            // console.log(res);
            if (res.code != 200) {
              return this.$message.error("修改用户信息失败");
            }
            this.getUserlist()
            this.$message.success(`用户id: ${userInfo.id} 信息修改成功`);
          });
        } else {
          this.$message.error(`请正确填写各项数据`);
        }
      });
    },

    // 编辑用户弹窗关闭处理
    editDialogClose() {
      this.$refs.editFormRef.resetFields();
    },

    // 确认删除弹窗
    checkDelete(userid) {
      console.log("checkDelete");
      this.$confirm("是否要删除改用户", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
      })
        // 点击确认后操作
        .then(async () => {
          // this.$message({
          //   type: "info",
          //   message: "保存修改"
          // });
          console.log("delete id:", userid);
          const result = await this.deleteUser(userid);
          if (result.code == 200) {
            this.$message.success("用户删除成功");
            // this.$refs.addFormRef.resetFields();
            // this.addDialogVisible = false;
            this.getUserlist();
          } else {
            this.$message.error("用户删除失败");
          }
        })

        // 点击取消或关闭操作
        .catch(action => {
          this.$message({
            type: "info",
            message: "已取消删除操作"
          });
        });
    },

    // 删除用户
    deleteUser(userid) {
      const result = this.$http({
        method: "get",
        url: "api/deleteuser",
        params: { id: userid }
      });
      // console.log(result)
      return result;
    },

    // 查询用户信息
    async showEditUser(id) {
      const result = await this.$http.get("api/users", { params: { id: id } });
      // console.log(result)
      if (result.code == 200) {
        this.editForm = result.data;
        // this.$message.success("获取用户数据成功")
        this.editDialogVisible = true;
      } else {
        this.$message.error("获取用户数据失败");
      }
    }
  }
};
</script>

<style >
.el-table {
  margin-top: 12px;
  font-size: 12px;
}
</style>