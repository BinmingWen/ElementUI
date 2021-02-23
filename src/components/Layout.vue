<template>
  <div>
    <div>
      <h1>Layout布局的使用</h1>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark" border style="border: 2px red solid">布局24份</div></el-col>
      </el-row>

      <el-row  :gutter="50" tag="span">
        <el-col :span="4"><div style="border: 1px red solid;">占用4份</div></el-col>
        <el-col :span="8"><div style="border: 1px red solid;">占用8份</div></el-col>
        <el-col :span="3"><div style="border: 1px red solid;">占用3份</div></el-col>
        <el-col :span="1"><div style="border: 1px red solid;">占用1份</div></el-col>
      </el-row>

      <el-row>
        <el-col ><div style="border: 1px blue solid;">我是占用12分</div></el-col>
        <el-col :span="6" :pull="4"><div style="border: 1px blue solid;">我是占用6分</div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped>

</style>
