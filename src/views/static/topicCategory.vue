<template>
  <div>
    <div style="margin: 10px">
        <router-link to="/index">首页</router-link>
      </div>
    <div style="width: 60%;margin: 0 auto;">
      <el-form-item
        label="分类编号"
        :label-width="80"
        style="display:inline-flex; margin-right: 10px;"
      >
        <el-input
          v-model="searchId"
          placeholder="请输入分类编号"
        ></el-input>
      </el-form-item>

      <el-button
        type="primary"
        @click="search"
      >查询</el-button>

      <el-button
        type="warning"
        @click="research"
      >重置</el-button>

      <el-button
        type="success"
        @click="toAdd"
      >添加</el-button>
    </div>
    <el-table
      :data="categories"
      style="width: 60%; margin:0 auto"
      :default-sort="{prop: 'sort', order: 'descending'}"
    >
      <el-table-column
        prop="id"
        label="分类编号"
        width="150"
      />
      <el-table-column
        prop="name"
        label="分类名称"
        width="120"
      />
      <el-table-column
        label="当前状态"
        width="120"
      >
        <template #default="scope">
          {{scope.row.showStatus==0?'启用':'未启用'}}
        </template>
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        sortable
        width="120"
      />
      <el-table-column
        prop="subjectCount"
        label="专题数量"
        width="120"
      />
      <el-table-column
        fixed="right"
        label="功能管理"
        width="120"
      >
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="toEdit(scope.row)"
          >更新</el-button>
          <el-button
            link
            type="primary"
            size="small"
            @click="del(scope.row.id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :page-size="page.size"
      :total="page.total"
      style="width: 60%;margin:0 auto"
      @current-change="currentchange"
    />
  </div>
  <el-dialog
    v-model="dialogFormVisible"
    title="分类编辑"
  >
    <el-form :model="c">
      <el-form-item
        label="分类名称"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="category.name"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item
        label="状态"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="category.showStatus"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="排序"
        :label-width="formLabelWidth"
      >
        <el-input-number
          v-model="category.sort"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="状态"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="category.showStatus"
          placeholder="请选择"
        >
          <el-option
            label="启用"
            :value="0"
          />
          <el-option
            label="未启用"
            :value="1"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        label="专题数量"
        :label-width="formLabelWidth"
      >
        <el-input-number
          v-model="category.subjectCount"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="save"
        >保存
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
  
  <script>
import { defineComponent } from "vue";
import {
  updateOne,
  addOne,
  delOne,
  getPage,
  getOne,
} from "../../http/topicCategory";
import { cloneDeep } from "lodash-es";
export default defineComponent({
  data() {
    return {
      categories: [],
      page: {
        total: 0,
        current: 1,
        size: 10,
      },
      searchId: null,
      dialogFormVisible: false,
      category: {
        id: 0,
        showStatus: 0,
      },
      formLabelWidth: 80,
    };
  },
  mounted() {
    this.getCategoriesPage(1);
  },
  methods: {
    search() {
      if (this.searchId == null || this.searchId == "") {
        alert("请输入分类编号后查询");
        return;
      }
      getOne(this.searchId)
        .then((res) => {
          if (res.data == null) {
            this.categories = [];
          } else {
            this.categories = [];
            this.categories.push(res.data.help);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    research() {
      this.searchId = null;
      this.getCategoriesPage(1);
    },
    toEdit(category) {
      console.log(category);
      this.dialogFormVisible = true;
      this.category = cloneDeep(category);
    },
    getCategoriesPage(current) {
      const data = {
        current: current,
        size: 10,
      };
      getPage(data)
        .then((res) => {
          console.log(res);
          const page = res.data.page;
          this.categories = page.records;
          this.page = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    currentchange(current) {
      // console.log(current);
      this.getCategoriesPage(current);
      this.page.current = current; //数据更新到目前显示的页面
    },
    del(id) {
      if (confirm("是否删除") == true) console.log(id);
      console.log(id);
      delOne(id)
        .then((res) => {
          if (res.success) {
            this.getCategoriesPage(this.page.current);
          } else {
            return false;
          }
        })
        .catch((err) => {});
    },
    toAdd() {
      this.dialogFormVisible = true;
      this.category = {
        id: 0,
        showStatus: 0,
      };
    },
    save() {
      const category = this.category;
      if (category.id == 0) {
        addOne(category)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getCategoriesPage(this.page.current);
              ElMessage(res.msg);
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("网络错误联系管理员");
          });
      } else {
        updateOne(category)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getCategoriesPage(this.page.current);
              ElMessage(res.msg);
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("网络错误联系管理员");
          });
      }
    },
  },
});
</script>
  <style lang = "scss" scoped></style>