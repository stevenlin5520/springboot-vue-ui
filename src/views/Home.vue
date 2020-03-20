<template>
  <div>
    <!-- 外层容器。当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列 -->
    <el-container style="height: 600px; border: 1px solid #eee">
      <!-- 侧边栏容器 -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <!-- 构建左侧菜单 -->
        <el-menu :default-openeds="['1','3']" :default-active="['1-1','1-4','3-1-1']">
          <!-- 可展开的菜单，一级菜单 -->
          <el-submenu index="1">
            <!-- 对应 el-submenu 的菜单名 -->
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <!-- 二级菜单组 -->
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <!-- 可展开的菜单，三级菜单 -->
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="3">

            <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
            <el-submenu index="3-1">
              <template slot="title">页面设置</template>
              <el-menu-item index="3-1-1">页面生成</el-menu-item>
              <el-menu-item index="3-1-2">页面删除</el-menu-item>
            </el-submenu>

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
          <span>王小虎</span>
        </el-header>

        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
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
