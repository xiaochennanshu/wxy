import{a8 as l,_ as d,o as i,c as r,b as c,w as g,F as m,Q as _,A as h,a1 as y}from"./index-3ab77bd9.js";import"./el-button-e59d99a8.js";import{f,b as S,g as b}from"./el-table-column-ac813115.js";function k(e){return l({url:"/mall/cms-topic/page",method:"post",data:e})}function x(e){return l({url:`/mall/cms-topic/one/${e}`,method:"get"})}function z(e){return l({url:`/mall/cms-topic/del/${e}`,method:"get"})}function E(e){return l({url:"/mall/cms-topic/add",method:"post",data:e})}function B(e){return l({url:"/mall/cms-topic/edit",method:"post",data:e})}const v={name:"TPaginationSelect",props:{value:{type:[String,Number]},width:{type:String},valueKey:{type:String},labelKey:{type:String},optionSource:{type:Array},paginationOption:{type:Object,default:()=>({size:6,current:1,pagerCount:5,total:0})}},computed:{childSelectedValue:{get(){return this.value},set(e){this.$emit("input",e)}},attrs(){return{"popper-append-to-body":!1,clearable:!0,filterable:!0,...this.$attrs}}},watch:{childSelectedValue(e){this.childSelectedValue=e}}},O={class:"t_pagination_select"};function T(e,n,t,V,w,o){const u=f,s=S,p=b;return i(),r("div",O,[c(p,y({modelValue:o.childSelectedValue,"onUpdate:modelValue":n[1]||(n[1]=a=>o.childSelectedValue=a),onChange:n[2]||(n[2]=a=>e.$emit("change",a)),style:{width:t.width||"100%"}},o.attrs),{default:g(()=>[(i(!0),r(m,null,_(t.optionSource,a=>(i(),h(u,{key:a[t.valueKey],label:a[t.labelKey],value:a[t.valueKey]},null,8,["label","value"]))),128)),c(s,{small:"",layout:"total,prev, pager, next",onCurrentChange:n[0]||(n[0]=a=>e.$emit("page-change",a)),"hide-on-single-page":!0,"page-size":t.paginationOption.size,"current-page":t.paginationOption.current,"pager-count":t.paginationOption.pagerCount,total:t.paginationOption.total},null,8,["page-size","current-page","pager-count","total"])]),_:1},16,["modelValue","style"])])}const A=d(v,[["render",T],["__scopeId","data-v-fd7c45e5"]]);export{A as T,x as a,E as b,z as d,k as g,B as u};
