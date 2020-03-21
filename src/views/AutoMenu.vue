<template>
  <div>
    <!-- 外层容器。当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列 -->
    <el-container style="height: 500px; border: 1px solid #eee">
      <!-- 侧边栏容器 -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <!-- 构建左侧菜单 -->
        <el-menu>
          <el-submenu v-for="(item,index) in $router.options.routes" :key="item" :index="index+''">
            <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
            <el-menu-item v-for="(item2,index2) in item.children" :key="item2" :index="index+'-'+index2">
              <template>{{item2.name}}</template>
            </el-menu-item>
          </el-submenu>
        </el-menu>

      </el-aside>

      <el-container>

        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>steven</span>
        </el-header>

        <el-main>

          <router-view></router-view>

        </el-main>
      </el-container>

    </el-container>

  </div>
</template>

<script>
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
