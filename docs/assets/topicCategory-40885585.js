import{aa as Y,g as oe,ab as ie,j as p,ac as I,d as Z,u as ce,n as de,r as me,ad as pe,v as g,ae as P,x as fe,z as be,af as ve,o as v,c as K,R as j,C as a,B as L,ag as F,b as R,w as H,A as k,ah as Ne,ai as he,H as q,G as J,aj as ge,ak as ye,E as T,W as Ie,al as Ve,a3 as Ee,am as Q,$ as we,a8 as V}from"./index-3ab77bd9.js";import{C as ee,I as C,U as y,e as _e,f as Se,h as Ae,a as Pe}from"./el-button-e59d99a8.js";const Fe=100,ke=600,X={beforeMount(t,N){const i=N.value,{interval:r=Fe,delay:E=ke}=Y(i)?{}:i;let c,m;const u=()=>Y(i)?i():i.handler(),f=()=>{m&&(clearTimeout(m),m=void 0),c&&(clearInterval(c),c=void 0)};t.addEventListener("mousedown",w=>{w.button===0&&(f(),u(),document.addEventListener("mouseup",()=>f(),{once:!0}),m=setTimeout(()=>{c=setInterval(()=>{u()},r)},E))})}},Te=oe({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:ie,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:t=>t===null||p(t)||["min","max"].includes(t),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:t=>t>=0&&t===Number.parseInt(`${t}`,10)},validateEvent:{type:Boolean,default:!0}}),Ce={[ee]:(t,N)=>N!==t,blur:t=>t instanceof FocusEvent,focus:t=>t instanceof FocusEvent,[C]:t=>p(t)||I(t),[y]:t=>p(t)||I(t)},xe=["aria-label","onKeydown"],Be=["aria-label","onKeydown"],Oe=Z({name:"ElInputNumber"}),De=Z({...Oe,props:Te,emits:Ce,setup(t,{expose:N,emit:i}){const r=t,{t:E}=ce(),c=de("input-number"),m=me(),u=pe({currentValue:r.modelValue,userInput:null}),{formItem:f}=_e(),w=g(()=>p(r.modelValue)&&r.modelValue<=r.min),$=g(()=>p(r.modelValue)&&r.modelValue>=r.max),ne=g(()=>{const e=G(r.step);return P(r.precision)?Math.max(G(r.modelValue),e):(e>r.precision,r.precision)}),x=g(()=>r.controls&&r.controlsPosition==="right"),U=Se(),h=Ae(),B=g(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(I(e))return"";if(p(e)){if(Number.isNaN(e))return"";P(r.precision)||(e=e.toFixed(r.precision))}return e}),O=(e,n)=>{if(P(n)&&(n=ne.value),n===0)return Math.round(e);let l=String(e);const s=l.indexOf(".");if(s===-1||!l.replace(".","").split("")[s+n])return e;const S=l.length;return l.charAt(S-1)==="5"&&(l=`${l.slice(0,Math.max(0,S-1))}6`),Number.parseFloat(Number(l).toFixed(n))},G=e=>{if(I(e))return 0;const n=e.toString(),l=n.indexOf(".");let s=0;return l!==-1&&(s=n.length-l-1),s},W=(e,n=1)=>p(e)?O(e+r.step*n):u.currentValue,D=()=>{if(r.readonly||h.value||$.value)return;const e=Number(B.value)||0,n=W(e);_(n),i(C,u.currentValue)},z=()=>{if(r.readonly||h.value||w.value)return;const e=Number(B.value)||0,n=W(e,-1);_(n),i(C,u.currentValue)},M=(e,n)=>{const{max:l,min:s,step:o,precision:b,stepStrictly:S,valueOnClear:A}=r;l<s&&Ve("InputNumber","min should not be greater than max.");let d=Number(e);if(I(e)||Number.isNaN(d))return null;if(e===""){if(A===null)return null;d=Ee(A)?{min:s,max:l}[A]:A}return S&&(d=O(Math.round(d/o)*o,b)),P(b)||(d=O(d,b)),(d>l||d<s)&&(d=d>l?l:s,n&&i(y,d)),d},_=(e,n=!0)=>{var l;const s=u.currentValue,o=M(e);if(!n){i(y,o);return}s!==o&&(u.userInput=null,i(y,o),i(ee,o,s),r.validateEvent&&((l=f==null?void 0:f.validate)==null||l.call(f,"change").catch(b=>Q())),u.currentValue=o)},te=e=>{u.userInput=e;const n=e===""?null:Number(e);i(C,n),_(n,!1)},ae=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&_(n),u.userInput=null},re=()=>{var e,n;(n=(e=m.value)==null?void 0:e.focus)==null||n.call(e)},le=()=>{var e,n;(n=(e=m.value)==null?void 0:e.blur)==null||n.call(e)},ue=e=>{i("focus",e)},se=e=>{var n;i("blur",e),r.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(l=>Q()))};return fe(()=>r.modelValue,e=>{const n=M(u.userInput),l=M(e,!0);!p(n)&&(!n||n!==l)&&(u.currentValue=l,u.userInput=null)},{immediate:!0}),be(()=>{var e;const{min:n,max:l,modelValue:s}=r,o=(e=m.value)==null?void 0:e.input;if(o.setAttribute("role","spinbutton"),Number.isFinite(l)?o.setAttribute("aria-valuemax",String(l)):o.removeAttribute("aria-valuemax"),Number.isFinite(n)?o.setAttribute("aria-valuemin",String(n)):o.removeAttribute("aria-valuemin"),o.setAttribute("aria-valuenow",String(u.currentValue)),o.setAttribute("aria-disabled",String(h.value)),!p(s)&&s!=null){let b=Number(s);Number.isNaN(b)&&(b=null),i(y,b)}}),ve(()=>{var e;const n=(e=m.value)==null?void 0:e.input;n==null||n.setAttribute("aria-valuenow",`${u.currentValue}`)}),N({focus:re,blur:le}),(e,n)=>(v(),K("div",{class:L([a(c).b(),a(c).m(a(U)),a(c).is("disabled",a(h)),a(c).is("without-controls",!e.controls),a(c).is("controls-right",a(x))]),onDragstart:n[1]||(n[1]=T(()=>{},["prevent"]))},[e.controls?j((v(),K("span",{key:0,role:"button","aria-label":a(E)("el.inputNumber.decrease"),class:L([a(c).e("decrease"),a(c).is("disabled",a(w))]),onKeydown:F(z,["enter"])},[R(a(q),null,{default:H(()=>[a(x)?(v(),k(a(Ne),{key:0})):(v(),k(a(he),{key:1}))]),_:1})],42,xe)),[[a(X),z]]):J("v-if",!0),e.controls?j((v(),K("span",{key:1,role:"button","aria-label":a(E)("el.inputNumber.increase"),class:L([a(c).e("increase"),a(c).is("disabled",a($))]),onKeydown:F(D,["enter"])},[R(a(q),null,{default:H(()=>[a(x)?(v(),k(a(ge),{key:0})):(v(),k(a(ye),{key:1}))]),_:1})],42,Be)),[[a(X),D]]):J("v-if",!0),R(a(Pe),{id:e.id,ref_key:"input",ref:m,type:"number",step:e.step,"model-value":a(B),placeholder:e.placeholder,readonly:e.readonly,disabled:a(h),size:a(U),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:n[0]||(n[0]=T(()=>{},["prevent"])),onKeydown:[F(T(D,["prevent"]),["up"]),F(T(z,["prevent"]),["down"])],onBlur:se,onFocus:ue,onInput:te,onChange:ae},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var ze=Ie(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const Le=we(ze);function Re(t){return V({url:"/mall/cms-topic-category/page",method:"post",data:t})}function $e(t){return V({url:`/mall/cms-topic-category/one/${t}`,method:"get"})}function Ue(t){return V({url:`/mall/cms-topic-category/del/${t}`,method:"get"})}function Ge(t){return V({url:"/mall/cms-topic-category/add",method:"post",data:t})}function We(t){return V({url:"/mall/cms-topic-category/edit",method:"post",data:t})}export{Le as E,Re as a,Ge as b,Ue as d,$e as g,We as u};
