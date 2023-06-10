import{_ as k,d as E,a9 as v,o as F,c as I,a as g,b as t,w as a,F as P,e as s,a4 as S}from"./index-3ab77bd9.js";import{c as z,E as d,a as U,b as $,d as L,e as W,f as O,g as B}from"./el-table-column-ac813115.js";import{b as N,E as j,a as D,c as T}from"./el-button-e59d99a8.js";import{g as A,a as M,d as q,b as G,u as H,E as J}from"./topicCategory-40885585.js";/* empty css                   */const K=E({data(){return{categories:[],page:{total:0,current:1,size:10},searchId:null,dialogFormVisible:!1,category:{id:0,showStatus:0},formLabelWidth:80}},mounted(){this.getCategoriesPage(1)},methods:{search(){if(this.searchId==null||this.searchId==""){alert("请输入分类编号后查询");return}A(this.searchId).then(e=>{e.data==null?this.categories=[]:(this.categories=[],this.categories.push(e.data.help))}).catch(e=>{console.log(e)})},research(){this.searchId=null,this.getCategoriesPage(1)},toEdit(e){console.log(e),this.dialogFormVisible=!0,this.category=z(e)},getCategoriesPage(e){M({current:e,size:10}).then(u=>{console.log(u);const m=u.data.page;this.categories=m.records,this.page=m}).catch(u=>{console.log(u)})},currentchange(e){this.getCategoriesPage(e),this.page.current=e},del(e){confirm("是否删除")==!0&&console.log(e),console.log(e),q(e).then(l=>{if(l.success)this.getCategoriesPage(this.page.current);else return!1}).catch(l=>{})},toAdd(){this.dialogFormVisible=!0,this.category={id:0,showStatus:0}},save(){const e=this.category;e.id==0?G(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getCategoriesPage(this.page.current),d(l.msg);else return d(l.msg),!1}).catch(l=>{d("网络错误联系管理员")}):H(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getCategoriesPage(this.page.current),d(l.msg);else return d(l.msg),!1}).catch(l=>{d("网络错误联系管理员")})}}}),Q={style:{margin:"10px"}},R={style:{width:"60%",margin:"0 auto"}},X={class:"dialog-footer"};function Y(e,l,u,m,Z,x){const f=v("router-link"),p=D,n=N,i=j,r=W,b=U,w=$,c=J,h=O,y=B,C=T,V=L;return F(),I(P,null,[g("div",null,[g("div",Q,[t(f,{to:"/index"},{default:a(()=>[s("首页")]),_:1})]),g("div",R,[t(n,{label:"分类编号","label-width":80,style:{display:"inline-flex","margin-right":"10px"}},{default:a(()=>[t(p,{modelValue:e.searchId,"onUpdate:modelValue":l[0]||(l[0]=o=>e.searchId=o),placeholder:"请输入分类编号"},null,8,["modelValue"])]),_:1}),t(i,{type:"primary",onClick:e.search},{default:a(()=>[s("查询")]),_:1},8,["onClick"]),t(i,{type:"warning",onClick:e.research},{default:a(()=>[s("重置")]),_:1},8,["onClick"]),t(i,{type:"success",onClick:e.toAdd},{default:a(()=>[s("添加")]),_:1},8,["onClick"])]),t(b,{data:e.categories,style:{width:"60%",margin:"0 auto"},"default-sort":{prop:"sort",order:"descending"}},{default:a(()=>[t(r,{prop:"id",label:"分类编号",width:"150"}),t(r,{prop:"name",label:"分类名称",width:"120"}),t(r,{label:"当前状态",width:"120"},{default:a(o=>[s(S(o.row.showStatus==0?"启用":"未启用"),1)]),_:1}),t(r,{prop:"sort",label:"排序",sortable:"",width:"120"}),t(r,{prop:"subjectCount",label:"专题数量",width:"120"}),t(r,{fixed:"right",label:"功能管理",width:"120"},{default:a(o=>[t(i,{link:"",type:"primary",size:"small",onClick:_=>e.toEdit(o.row)},{default:a(()=>[s("更新")]),_:2},1032,["onClick"]),t(i,{link:"",type:"primary",size:"small",onClick:_=>e.del(o.row.id)},{default:a(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(w,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,style:{width:"60%",margin:"0 auto"},onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),t(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[7]||(l[7]=o=>e.dialogFormVisible=o),title:"分类编辑"},{footer:a(()=>[g("span",X,[t(i,{onClick:l[6]||(l[6]=o=>e.dialogFormVisible=!1)},{default:a(()=>[s("取消")]),_:1}),t(i,{type:"primary",onClick:e.save},{default:a(()=>[s("保存 ")]),_:1},8,["onClick"])])]),default:a(()=>[t(C,{model:e.c},{default:a(()=>[t(n,{label:"分类名称","label-width":e.formLabelWidth},{default:a(()=>[t(p,{modelValue:e.category.name,"onUpdate:modelValue":l[1]||(l[1]=o=>e.category.name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"状态","label-width":e.formLabelWidth},{default:a(()=>[t(p,{modelValue:e.category.showStatus,"onUpdate:modelValue":l[2]||(l[2]=o=>e.category.showStatus=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"排序","label-width":e.formLabelWidth},{default:a(()=>[t(c,{modelValue:e.category.sort,"onUpdate:modelValue":l[3]||(l[3]=o=>e.category.sort=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"状态","label-width":e.formLabelWidth},{default:a(()=>[t(y,{modelValue:e.category.showStatus,"onUpdate:modelValue":l[4]||(l[4]=o=>e.category.showStatus=o),placeholder:"请选择"},{default:a(()=>[t(h,{label:"启用",value:0}),t(h,{label:"未启用",value:1})]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"专题数量","label-width":e.formLabelWidth},{default:a(()=>[t(c,{modelValue:e.category.subjectCount,"onUpdate:modelValue":l[5]||(l[5]=o=>e.category.subjectCount=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const se=k(K,[["render",Y]]);export{se as default};
