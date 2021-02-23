<template>
  <div>
    <h1>Checkbox的使用</h1>
<!--    <el-radio v-model="label" label="男" border size="small" @change="checkboxClick">男</el-radio>
    <el-radio v-model="label" label="女" border size="mini" @change="checkboxClick">女</el-radio>
    <el-radio v-model="label" label="其他性别" border size="medium" @change="checkboxClick">其他性别</el-radio>-->
    <el-checkbox v-model="checked" true-label="北京">北京</el-checkbox>
    <el-checkbox v-model="checked" true-label="上海">上海</el-checkbox>
    <el-checkbox v-model="checked" true-label="天津">天津</el-checkbox>

    <h1>checkbox group的使用</h1>
    <el-checkbox-group v-model="checkList" @change="CGclick()">
      <el-checkbox label="复选框 A" border></el-checkbox>
      <el-checkbox label="复选框 B" border></el-checkbox>
      <el-checkbox label="复选框 C" border></el-checkbox>
      <el-checkbox label="禁用" disabled border></el-checkbox>
      <el-checkbox label="选中且禁用" disabled border></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  data() {
    return {
      checked:true,
      checkList:[],

    }
  },
  methods:{
    checkboxClick(){
      console.log(this.label);
    },
    CGclick() {
      console.log(this.checkList);
    }
  }
}
</script>

<style scoped>

</style>
