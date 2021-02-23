<template>
  <div>
    <h1>Input组件输入框</h1>
    <el-input v-model="name" clearable></el-input>
    <p>{{name}}</p>
    <el-input type="textarea" placeholder="请输入内容" v-model="textArea" autosize clearable></el-input>
    <br>
    <br>
    <el-input placeholder="请输入用户名"
              v-model="username"
              prefix-icon="el-icon-user-solid"
              @change="ChangeInput"
              @blur="BlurInput"
              @focus="FocusInput"
              @clear="ClearInput"
              ref="input"
              clearable>

    </el-input>
    <el-button @click="FocusClick">focus方法</el-button>
    <el-button @click="BlurClick">Blur方法</el-button>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      name:'温明彬',
      textArea:'',
      username:'',
      password:'',
    }
  },
  methods:{
    ChangeInput(value) {
      console.log("发生事件改变"+value);

    },
    BlurInput() {
      console.log("失去焦点")
    },
    FocusInput() {
      console.log("获取焦点")
    },
    ClearInput() {
      console.log("清空输入框")
    },
    FocusClick() {
      this.$refs.input.focus();
    },
    BlurClick() {
      this.$refs.input.blur();
    }
  }
}
</script>

<style scoped>

</style>
