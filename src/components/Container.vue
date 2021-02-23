<template>
  <div>
    <div>
      <h2>布局容器</h2>
      <el-container direction="vertical">
<!--        header-->
        <el-header height="100px"><h1>我是标题</h1></el-header>
        <el-container>
<!--          aside-->
          <el-aside width="100px"><h1>我是菜单</h1></el-aside>
<!--          main-->
          <el-main><h1>我是中心内容</h1></el-main>
        </el-container>
        <el-footer height="50px">我是页脚</el-footer>
      </el-container>
    </div>

  </div>
</template>

<script>
export default {
  name: "container"
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
