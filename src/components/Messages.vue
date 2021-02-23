<template>
  <div>
    <h1>Message信息的使用</h1>
    <el-button :plain="true" @click="open" >打开消息提示</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
    <el-button @click="closeTip">关闭提示信息</el-button>
  </div>
</template>

<script>
export default {
  name: "Messages",
  methods: {
    open() {
      this.$message({
        message:'这是一条消息提示',
        center: true,
        showClose:true,
        duration:0,
      });
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      });
    },
    closeTip() {
      this.$message.closeAll();
    }
  }
}
</script>

<style scoped>

</style>
