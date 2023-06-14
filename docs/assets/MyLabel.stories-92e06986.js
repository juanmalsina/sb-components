import{j as H}from"./jsx-runtime-91a467a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const s=({label:l="No label",size:v="normal",allCaps:C=!1,color:z="primary",fontColor:_})=>H("span",{className:`label ${v}  text-${z}`,style:{color:_},children:C?l.toUpperCase():l});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"El tamaño del label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Mayúsculas",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Colores básicos del botón",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Probar colores fuentes",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const M={title:"UI/MyLabel",component:s,argTypes:{color:{control:"select"},fontColor:{control:"color"}},tags:["UIcustom"]},e={args:{label:"Hola mundo",size:"normal",color:"primary"}},a={args:{label:"Hola mundo",size:"normal",color:"secondary"}},r={args:{label:"Hola mundo",size:"normal",color:"tertiary"}},o={args:{label:"Hola mundo",size:"normal",allCaps:!0}};var n,t,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Hola mundo",
    size: "normal",
    color: "primary"
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var m,u,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Hola mundo",
    size: "normal",
    color: "secondary"
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var p,d,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Hola mundo",
    size: "normal",
    color: "tertiary"
  }
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var b,f,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Hola mundo",
    size: "normal",
    allCaps: true
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const N=["Primary","Secondary","Terciary","UpperCase"];export{e as Primary,a as Secondary,r as Terciary,o as UpperCase,N as __namedExportsOrder,M as default};
//# sourceMappingURL=MyLabel.stories-92e06986.js.map
