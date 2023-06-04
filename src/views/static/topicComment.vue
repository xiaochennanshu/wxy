<template>
  <div>
    <div style="width: 60%;margin: 0 auto;">
      <el-form-item
        label="回复编号"
        :label-width="80"
        style="display:inline-flex; margin-right: 10px;"
      >
        <el-input
          v-model="searchId"
          placeholder="请输入回复编号"
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
      :data="comments"
      style="width: 60%; margin:0 auto"
      :default-sort="{prop: 'sort', order: 'descending'}"
    >
      <el-table-column
        prop="id"
        label="回复编号"
        width="150"
      />
      <el-table-column
        prop="memberNickName"
        label="回复者昵称"
        width="120"
      />
      <el-table-column
        label="是否显示"
        width="120"
      >
        <template #default="scope">
          {{scope.row.showStatus==0?'显示':'不显示'}}
        </template>
      </el-table-column>

      <el-table-column
        prop="content"
        label="回复的内容"
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
        label="回复者昵称"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="comment.memberNickName"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item
        label="回复的话题"
        :label-width="formLabelWidth"
      >
        <t-pagination-select
          @page-change="pageChange"
          :optionSource="topics"
          v-model="comment.topicId"
          labelKey="name"
          valueKey="id"
          style="width:100%;"
          placeholder="请选择回复的话题"
          :paginationOption="selectPage"
        />
      </el-form-item>

      <el-form-item
        label="是否显示"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="comment.showStatus"
          placeholder="请选择"
        >
          <el-option
            label="显示"
            :value="0"
          />
          <el-option
            label="不显示"
            :value="1"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        label="回复内容"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="comment.content"
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
  updateOne,
  addOne,
  delOne,
  getPage,
  getOne,
} from "../../http/topicComment";
import { getTopicPage, getTopicOne } from "../../http/topic";
import { cloneDeep } from "lodash-es";
import TPaginationSelect from "./module/TPaginationSelect.vue";
export default defineComponent({
  data() {
    return {
      comments: [],
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
      searchId: null,
      dialogFormVisible: false,
      comment: {
        id: 0,
        showStatus: 0,
      },
      formLabelWidth: 90,
    };
  },
  components: {
    "t-pagination-select": TPaginationSelect,
  },
  mounted() {
    this.getTopicsPage(1);
    this.getCommentsPage(1);
  },
  methods: {
    pageChange(current) {
      this.getTopicsPage(current);
    },
    getTopicsPage(current) {
      const data = {
        current: current,
        size: 6,
      };
      getTopicPage(data)
        .then((res) => {
          console.log(res);
          const page = res.data.page;
          this.topics = page.records;
          this.selectPage = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    search() {
      if (this.searchId == null || this.searchId == "") {
        alert("请输入回复编号后查询");
        return;
      }
      getOne(this.searchId)
        .then((res) => {
          if (res.data == null) {
            this.comments = [];
          } else {
            this.comments = [];
            this.comments.push(res.data.help);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    research() {
      this.searchId = null;
      this.getCommentsPage(1);
    },
    toEdit(comment) {
      console.log(comment);
      this.dialogFormVisible = true;
      this.comment = cloneDeep(comment);
    },
    getCommentsPage(current) {
      const data = {
        current: current,
        size: 10,
      };
      getPage(data)
        .then((res) => {
          console.log(res);
          const page = res.data.page;
          this.comments = page.records;
          this.page = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    currentchange(current) {
      // console.log(current);
      this.getCommentsPage(current);
      this.page.current = current; //数据更新到目前显示的页面
    },
    del(id) {
      if (confirm("是否删除") == true) console.log(id);
      console.log(id);
      delOne(id)
        .then((res) => {
          if (res.success) {
            this.getCommentsPage(this.page.current);
          } else {
            return false;
          }
        })
        .catch((err) => {});
    },
    toAdd() {
      this.dialogFormVisible = true;
      this.comment = {
        id: 0,
        showStatus: 0,
      };
    },
    save() {
      const comment = this.comment;
      if (comment.id == 0) {
        addOne(comment)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getCommentsPage(this.page.current);
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
        updateOne(comment)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getCommentsPage(this.page.current);
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