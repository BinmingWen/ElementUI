<template>
<div>
  <h1>Radio组件的使用</h1>
  <el-radio v-model="radio" label="1" border>备选项</el-radio>
  <el-radio v-model="radio" label="2" border disabled>备选项</el-radio>
  <h1>Radio组件组的使用</h1>
  <el-radio-group v-model="radio">
    <el-radio label="1"></el-radio>
    <el-radio label="2"></el-radio>
    <el-radio label="3"></el-radio>
    <el-radio label="4"></el-radio>
  </el-radio-group>
</div>
</template>

<script>
export default {
  name: "Radio",
  data() {
    return{
      radio:"2"
    }
  }
}
</script>

<style scoped>

</style>
