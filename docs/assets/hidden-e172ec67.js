import{c as i,j as e,r as c,u as b,a as L,b as w,T as s,L as y,P as v,d as a}from"./index-b262bcd9.js";import{u as T,B as A,L as F,a as u}from"./list-item-2b973a9c.js";const m=r=>i("svg",{...r,cursor:"pointer",width:"20px",height:"20px",viewBox:"0 0 32 32",enableBackground:"new 0 0 32 32",children:[e("path",{d:"M16,7C9.934,7,4.798,10.776,3,16c1.798,5.224,6.934,9,13,9s11.202-3.776,13-9C27.202,10.776,22.066,7,16,7z",fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"2"}),e("circle",{cx:"16",cy:"16",fill:"none",r:"5",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"2"})]}),H=c.memo(()=>{const{withVibration:r}=b(50),[g]=L(),n=w(),{hiddenSections:o,toggleSectionItem:k,isSectionItemsChecked:h,getSectionItemsCheckedCount:p,getAllSectionItemsCheckedCount:C,getAllSectionItemsHiddenCount:d,toggleHiddenSectionItemsChecked:x,showAllSectionItems:f,showSectionItems:I,showSectionItem:S}=T();return i(c.Fragment,{children:[i(s,{variant:"h2",align:"center",children:[n("Cachés")," (",C(o),"/",d(o),")"]}),e(A,{onClick:r(f),disabled:d(o)===0,children:n("Tout afficher")}),o.length===0?i(c.Fragment,{children:[e(s,{variant:"h2",align:"center",children:n("Aucun éléments cachés")}),e(y,{to:v.Home,children:e(a,{underlined:!0,children:n("Vérifier ma liste")})})]}):e(c.Fragment,{children:o.map(t=>i(c.Fragment,{children:[i(s,{variant:"h3",align:"center",children:[n(t.title)," (",p(t),"/",t.items.length,")"]}),i(F,{style:{width:"100%"},ref:g,children:[i(u,{children:[e("input",{id:t.title,type:"checkbox",onChange:r(x(t.title)),checked:h(t)}),e("label",{htmlFor:t.title,style:{flex:1,cursor:"pointer"},children:e(a,{align:"center",variant:"italic",color:"grey",children:h(t)?n("Tout décocher"):n("Tout cocher")})}),e(m,{onClick:r(I(t.title))})]}),t.items.map(l=>i(u,{children:[e("input",{id:l.title,onChange:r(k(t.title,l.title)),type:"checkbox",checked:l.checked}),e("label",{htmlFor:l.title,style:{flex:1,cursor:"pointer"},children:e(a,{style:{cursor:"pointer"},children:n(l.title)})}),e(m,{onClick:r(S(t.title,l.title))})]},l.title))]})]},t.title))})]})});export{H as HiddenPage};