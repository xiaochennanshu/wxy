<template>
  <div style="margin: 10px">
        <router-link to="/index">首页</router-link>
      </div>
  <div>
    <div style="width: 80%;margin: 0 auto;">
      <el-form-item
        label="话题编号"
        :label-width="80"
        style="display:inline-flex; margin-right: 10px;"
      >
        <el-input
          v-model="searchId"
          placeholder="请输入话题编号"
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
      :data="topics"
      style="width: 80%; margin:0 auto"
    >
      <el-table-column
        prop="id"
        label="话题编号"
        width="150"
      />
      <el-table-column
        prop="name"
        label="话题名称"
        width="120"
      />
      <el-table-column
        prop="categoryId"
        label="分类编号"
        width="120"
      />
      <el-table-column
        prop="attendCount"
        label="参与人数"
        width="120"
      />
      <el-table-column
        prop="attendType"
        label="参与方式"
        width="120"
      />
      <el-table-column
        prop="attentionCount"
        label="关注人数"
        width="120"
      />
      <el-table-column
        prop="awardName"
        label="奖品名称"
        width="120"
      />
      <el-table-column
        prop="content"
        label="内容"
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
      style="width: 80%;margin:0 auto"
      @current-change="currentchange"
    />
  </div>
  <el-dialog
    v-model="dialogFormVisible"
    title="话题编辑"
  >
    <el-form :model="c">
      <el-form-item
        label="话题名称"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="topic.name"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item
        label="参与方式"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="topic.attendType"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item
        label="所属类型"
        :label-width="formLabelWidth"
      >
       <t-pagination-select
          @page-change="pageChange"
          :optionSource="categories"
          v-model="topic.categoryId"
          labelKey="name"
          valueKey="id"
          style="width:100%;"
          placeholder="请选择所属类型"
          :paginationOption="selectPage"
        />
      </el-form-item>

      <el-form-item
        label="奖品名称"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="topic.awardName"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="参与人数"
        :label-width="formLabelWidth"
      >
        <el-input-number
          v-model="topic.attendCount"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="关注人数"
        :label-width="formLabelWidth"
      >
        <el-input-number
          v-model="topic.attentionCount"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="话题内容"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="topic.content"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
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
  updateTopicOne,
  addTopicOne,
  delTopicOne,
  getTopicPage,
  getTopicOne,
} from "../../http/topic";
import {
  getPage,
} from "../../http/topicCategory";
import { cloneDeep } from "lodash-es";
import TPaginationSelect from "./module/TPaginationSelect.vue";
export default defineComponent({
  data() {
    return {
      topics: [],
      page: {
        total: 0,
        current: 1,
        size: 10,
      },
      selectPage: {
        total: 0,
        current: 1,
        size: 6,
        pagerCount: 5,
      },
      categories:[],
      searchId: null,
      dialogFormVisible: false,
      topic: {
        id: 0,
        showStatus: 0,
      },
      formLabelWidth: 80,
    };
  },
  mounted() {
    this.getTopicsPage(1);
    this.getCategoriesPage(1);
  },
  components: {
    "t-pagination-select": TPaginationSelect,
  },
  methods: {
    pageChange(current) {
      this.getCategoriesPage(current);
    },
    getCategoriesPage(current) {
      const data = {
        current: current,
        size: 6,
      };
      getPage(data)
        .then((res) => {
          console.log(res);
          const page = res.data.page;
          this.categories = page.records;
          this.selectPage = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    search() {
      if (this.searchId == null || this.searchId == "") {
        alert("请输入话题编号后查询");
        return;
      }
      getTopicOne(this.searchId)
        .then((res) => {
          if (res.data == null) {
            this.topics = [];
          } else {
            this.topics = [];
            this.topics.push(res.data.help);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    research() {
      this.searchId = null;
      this.getTopicsPage(1);
    },
    toEdit(topic) {
      this.dialogFormVisible = true;
      this.topic = cloneDeep(topic);
    },
    getTopicsPage(current) {
      const data = {
        current: current,
        size: 10,
      };
      getTopicPage(data)
        .then((res) => {
          console.log(res);
          const page = res.data.page;
          this.topics = page.records;
          this.page = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    currentchange(current) {
      // console.log(current);
      this.getTopicsPage(current);
      this.page.current = current; //数据更新到目前显示的页面
    },
    del(id) {
      if (confirm("是否删除") == true) console.log(id);
      console.log(id);
      delTopicOne(id)
        .then((res) => {
          if (res.success) {
            this.getTopicsPage(this.page.current);
          } else {
            return false;
          }
        })
        .catch((err) => {});
    },
    toAdd() {
      this.dialogFormVisible = true;
      this.topic = {
        id: 0,
        showStatus: 0,
      };
    },
    save() {
      const topic = this.topic;
      if (topic.id == 0) {
        addTopicOne(topic)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getTopicsPage(this.page.current);
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
        updateTopicOne(topic)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getTopicsPage(this.page.current);
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