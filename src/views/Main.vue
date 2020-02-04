<template>
  <div style="height: 100%">
    <!-- ; border: 1px solid #eee -->
    <el-container class=".home-container">
      <!-- 头部区域 -->
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item @click.native="logout">登出</el-dropdown-item>
            <el-dropdown-item>
              <el-button type="primary" v-on:click="logout">logout</el-button>
            </el-dropdown-item>
            <!-- <el-button type="primary" v-on:click="logout">logout</el-button> -->
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <!-- 头部区域 -->
      <!-- 中间主体区域  -->
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse ? '' : '200px'" style="">
          <div class="toggle-botton" @click="toggleCollapse"><i :class="isCollapse? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i></div>
          <!-- 侧边栏导航菜单 -->
          <!-- :default-openeds="['1', '2']" 默认打开index位1，2的菜单 -->
          <!-- 不用边框 border-right: 0 -->
          <el-menu
            :default-active="$route.path"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409bff"
            :unique-opened="true"
            :collapse="isCollapse"
            :collapse-transition="false"
            :router='true'
            style="border-right: 0"
          >
          <!-- 一级菜单 -->
            <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
              <template slot="title">
                <!-- 图标 -->
                <i :class="iconsObj[item.id]"></i>
                <!-- 文本 -->
                <span>{{item.authName}}</span>
              </template>

              <!-- 二级菜单 -->
              <el-menu-item-group v-for="subItem in item.children" :key="subItem.id">
                <!-- <template slot="title">分组一</template> -->
                <!-- <el-menu-item index="1-1">选项1</el-menu-item> -->
                <el-menu-item :index= "'/' + subItem.path">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{subItem.authName}}</span>
                  </template> 
                </el-menu-item>
              </el-menu-item-group>
              <!-- <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group> -->
              <!-- <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu> -->
            </el-submenu>
          </el-menu>
          <!-- 侧边栏导航菜单 -->
        </el-aside>
        <!-- 侧边导航栏 -->
        <!-- 右侧主体区域 -->
        <el-main>
          <router-view></router-view>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table> -->
        </el-main>
        <!-- 右侧主体区域 -->
      </el-container>
      <!-- 中间主体区域  -->

      <!-- 页脚区域 -->
      <el-footer style="text-align: right; font-size: 12px">footer</el-footer>
      <!-- 页脚区域 -->
    </el-container>
  </div>
</template>

<style>
.home-container {
  /* border: 1px solid #eee; */
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: auto;
  /* 最大高度超过出现滚动栏 */
  /* max-height: 650px; */
}

html,body,#app,.el-container {
   height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  /* line-height: 60px; */
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  /* line-height: 60px; */
}

.el-aside {
  background-color: #545c64;
  /* color: #333; */
  height: 100%;
}

/* 不用边框 */
.el-menu-no-border {
  border-right: 0;
}

.toggle-botton {
  background-color: #545c64;
  color: #ffffff;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  /* 文本间距 */
  /* letter-spacing: 0.5em; */
  /* 鼠标变手指形状 */
  cursor: pointer;
}

</style>


<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(10).fill(item),
      // 导航菜单数据
      menuList: [],
      iconsObj: {
        '100': 'el-icon-location',
        '200': 'el-icon-menu',
      },
      // navMenu是否折叠
      isCollapse: false,
      // toggleBottonText: '<<',
      toggleBottonIconObj: {
        'open': 'el-icon-d-arrow-right',
        'close': 'el-icon-d-arrow-left'
      }
    };
  },
  created() {
    this.getMenulist()
    // console.log(this.$route.path)
  },
  methods: {
    logout() {
      console.log("logout");
      window.localStorage.setItem("token", "");
      this.$router.replace({ path: "/login" });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    async getMenulist() {
      let tokenstr = window.localStorage.getItem("token");
      const res = await this.$http.get('api/menus', { params: {token: tokenstr} })
      console.log(res) 
      this.menuList = res.data
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
      // if(this.isCollapse) {
      //   this.toggleBottonText = '>>'
      // } else {
      //   this.toggleBottonText = '<<'
      // }
    }
  }
};
</script>