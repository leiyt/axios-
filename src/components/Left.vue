<template>
  <div id="left">
    <el-menu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>素材管理
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="1-1">新闻管理</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
          <el-menu-item index="1-5">选项5</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message"></i>导航二
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-menu-item index="2-4">选项4</el-menu-item>
          <el-menu-item index="2-5">选项5</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
#left {
  min-height: 666px;
  overflow-y: auto;
  border-right: 1px solid #e6e6e6;
}
.el-menu {
  border: none;
}

.el-submenu__title::after,
.el-submenu__title::before {
  content: "";
  display: table;
  height: 1px;
  width: 80%;
  background: #e6e6e6;
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
}
.el-menu-item-group__title {
  padding: 0;
}
</style>
