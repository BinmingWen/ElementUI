<template>
<div>
  <h1>Alert警告提示框</h1>
  <el-alert title="成功信息提示" :closable="false" type="success" :show-icon="true" effect="dark" center>
    <div slot>我是辅助信息</div>
  </el-alert>
  <el-alert title="成功信息提示" type="info" center></el-alert>
  <el-alert title="成功信息提示" type="warning" center></el-alert>
  <el-alert title="成功信息提示" type="error" center :closable="false"></el-alert>
</div>
</template>

<script>
export default {
  name: "Alerts"
}
</script>

<style scoped>

</style>
