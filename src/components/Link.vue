<template>
<div>
  <h1>Link文字连接</h1>
  <div>
    <el-link href="https://element.eleme.io" target="_blank" :underline="false">默认链接</el-link>
    <el-link type="primary" :underline="false">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>
  </div>
</div>
</template>

<script>
export default {
  name: "Link"
}
</script>

<style scoped>

</style>
