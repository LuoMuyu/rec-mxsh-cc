import{j as c,K as u,h as m,r as d,R as e,C as p,V as g,E as f,G as E,I as b,D as h}from"./vendor.2bf3c6ec.js";import{k as C,b as k}from"./index.1a703921.js";import"./index.3664b769.js";const x=()=>{const{t}=c(),l=u(),o=m(),[r,i]=d.exports.useState(""),n=()=>{C(r),k.post("login").then(s=>{const a=s.data;a.code===200?(o({title:t(a.message),status:"success",duration:3e3,isClosable:!0}),l.push("settings/0")):o({title:t(a.message),status:"error",duration:3e3,isClosable:!0})})};return e.createElement(p,{p:"4",h:"full"},e.createElement(g,{w:{base:"full",md:"50%"}},e.createElement(f,{isRequired:!0},e.createElement(E,null,t("password")),e.createElement(b,{type:"password",value:r,onChange:s=>i(s.target.value),onKeyUp:s=>{s.key==="Enter"&&n()}})),e.createElement(h,{onClick:n},t("login"))))};export{x as default};
