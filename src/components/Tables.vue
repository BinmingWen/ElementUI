<template>
  <div>
    <h1>表格组件的使用</h1>
    <el-table :data="tableData"  border
              :resizable="false"
              empty-text="暂无数据"
              :fit="true"
              highlight-current-row
              :row-class-name="showCss"
              ref="myTable"
              @select="selectTables"
              :show-header="true">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="编号" align="center" fixed="left" width="100px" header-align="left"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄" :sort-method="sorts" sortable></el-table-column>
      <el-table-column prop="email" label="邮箱地址"></el-table-column>
      <el-table-column prop="dept.name" label="部门" :formatter="showDept"></el-table-column>
      <el-table-column >
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>

      </el-table-column>
    </el-table>
    <el-button @click="clearAll" type="primary">清空所有选中项</el-button>
  </div>
</template>

<script>
export default {
  name: "Tables",
  data(){
    return {
      tableData:[
        {id:1,name:'张三',age:22,email:'18027761141@163.com',dept:{id:1,name:'研发部'}},
        {id:2,name:'李四',age:23,email:'18021261141@163.com',dept:{id:2,name:'销售部'}},
        {id:3,name:'王五',age:24,email:'18021214141@163.com',dept:{}},
      ]
    }
  },
  methods:{
    sorts(a,b){
      return a.age - b.age;
    },
    showDept(row, column, cellValue, index) {
      /*console.log(row);
      console.log(column);
      console.log(cellValue);
      console.log(index);*/
      if (cellValue) {
        return cellValue;
      }
      return "暂无部门";
    },
    showCss({row, rowIndex}) {
      if (rowIndex % 2 === 0) {
        return "warning-row";
      }
      return "success-row"
    },
    selectTables(selection,row) {
      console.log(selection);
      console.log(row);

    },
    clearAll() {
      this.$refs.myTable.clearSelection();
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
