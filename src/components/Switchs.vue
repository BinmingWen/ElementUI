<template>
  <div>
    <h1>Switch开关组件</h1>
    <el-switch v-model="value"
               ref="sw"
               active-text="打开"
               @change="switchChange"
               inactive-text="关闭"
               active-color="#13ce66"
               inactive-color="#ff4949"></el-switch>
    <el-button @click="focusClick" type="primary">调用事件方法</el-button>

  </div>
</template>

<script>
export default {
  name: "Switchs",
  data() {
    return {
      value:true
    }
  },
  methods:{
    switchChange() {
      console.log("调用改变事件")
    },
    focusClick() {
      this.$refs.sw.focus();
    }
  }
}
</script>

<style scoped>

</style>
