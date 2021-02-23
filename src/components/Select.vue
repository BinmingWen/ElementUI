<template>
  <div>
    <h1>Select选择器</h1>
    <el-select v-model="development" multiple clearable @blur="BlurSelect">
      <el-option v-for="option in options"
                 :label="option.name"
                 :key="option.id"

                 :value="option.name"></el-option>
    </el-select>

    <h2>你选中的是：{{development instanceof Array}}</h2>
  </div>
</template>

<script>
export default {
  name: "Select",
  data(){
    return {
      options:[
        {id:'1',name:'研发部'},
        {id:'2',name:'小卖部'},
        {id:'3',name:'小米部'},
      ],
      development:'',
    }
  },
  methods:{
    BlurSelect() {
      console.log("失去焦点！")
    }
  }
}
</script>

<style scoped>

</style>
