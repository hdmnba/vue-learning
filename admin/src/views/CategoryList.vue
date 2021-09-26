<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="parent.name" label="上级分类"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button
            @click="$router.push(`/rest/categories/edit/${scope.row._id}`)"
            size="small"
            type="text"
            >编辑</el-button
          >
          <el-button type="text" @click="deleteCate(scope.row)" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      dialogVisible: false,
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/categories");
      this.items = res.data;
    },
    async deleteCate(row) {
      this.$confirm(`是否确定要删除分类 "${row.name}"`, "提示", {
        confirmButtonText: "删",
        type: "warning",
        cancelButtonText: "不删",
      })
        .then(async () => {
          const res = await this.$http.delete(`rest/categories/${row._id}`);
          console.log(res);
          if (res.data) {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.fetch();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    this.fetch();
  },
};
</script>