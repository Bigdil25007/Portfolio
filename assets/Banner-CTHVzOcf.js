import{_ as d,b as r,c as n,d as e,t as c,y as b,a as y,f as m,g as k,n as j,p as S,i as B,u as w,r as p,w as C,o as I,F as _,k as v,l as A,m as q,h as D,z as N}from"./index-DNzbofAu.js";import{_ as P}from"./Footer-D6q_hoBN.js";const ot=t=>t.replace(/\n/g,"<br>"),z={class:"wrapper"},E={class:"progress",role:"progressbar","aria-label":"Basic example","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},F={__name:"ProgressBar",props:{title:{type:String,default:"N/A"},fill:{type:Number,required:!0},color:{type:String,default:"rgb(220, 53, 69)"}},setup(t){return(a,o)=>(r(),n("div",z,[e("span",null,c(t.title),1),e("div",E,[e("div",{class:"progress-bar",style:b({width:t.fill+"%",backgroundColor:t.color})},null,4)])]))}},rt=d(F,[["__scopeId","data-v-6a5c3daa"]]),M=t=>(S("data-v-f78d6740"),t=t(),B(),t),R={class:"img-container"},V=["src","alt"],O=M(()=>e("span",{class:"overlay-text"},"En savoir plus",-1)),T={class:"carousel-caption d-md-block"},G={__name:"Slide",props:{isActive:{type:Boolean,default:!1},img:{type:String,required:!0},link:{type:String,default:"/"},imgAlt:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""}},setup(t){return(a,o)=>{const l=y("router-link");return r(),n("div",{class:j(["carousel-item",{active:t.isActive}])},[e("div",R,[m(l,{to:t.link},{default:k(()=>[e("img",{src:t.img,alt:t.imgAlt,class:"d-block w-100"},null,8,V)]),_:1},8,["to"]),O]),e("div",T,[e("h5",null,c(t.title),1),e("p",null,c(t.description),1)])],2)}}},H=d(G,[["__scopeId","data-v-f78d6740"]]),h={fr:{id:"projets",title:"Mes projets",link:{text:"Retrouvez tous mes projets ici !",path:"/fr/projets"}},en:{id:"projets",title:"My projects",link:{text:"Find all my projects here!",path:"/en/projets"}}},f={fr:[{title:"API de gestion de défis d'éco-développement informatique",description:"Description du projet 1",img:"/projets/api_mongoDB/mongodb.jpg?url",link:"/fr/projets/api_mongoDB"},{title:"Remindr",description:"Description du projet 2",img:"/projets/remindr/dashboard.png?url",link:"/en/projets/api_mongoDB"}]},$=t=>(S("data-v-c4188561"),t=t(),B(),t),J={id:"caroussel",class:"carousel slide"},K={class:"carousel-indicators"},L=["data-bs-slide-to"],Q={class:"carousel-inner"},U=$(()=>e("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#caroussel","data-bs-slide":"prev"},[e("span",{class:"carousel-control-prev-icon"})],-1)),W=$(()=>e("button",{class:"carousel-control-next",type:"button","data-bs-target":"#caroussel","data-bs-slide":"next"},[e("span",{class:"carousel-control-next-icon"})],-1)),X={__name:"Caroussel",setup(t){const a=w(),o=p(h[a.params.lang]),l=p(o.value.link),u=p(f[a.params.lang]);return C(()=>a.params.lang,s=>{o.value=h[s],u.value=f[s],l.value=o.value.link}),I(()=>{let s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",s.crossOrigin="anonymous",document.body.appendChild(s),s=document.createElement("script"),s.src="https://code.jquery.com/jquery-3.6.0.min.js",document.body.appendChild(s)}),(s,et)=>{const x=y("router-link");return r(),n(_,null,[m(P,{id:o.value.id},null,8,["id"]),e("section",null,[e("h2",null,c(o.value.title),1),e("div",J,[e("div",K,[(r(!0),n(_,null,v(u.value,(g,i)=>(r(),n("button",{key:i,"data-bs-target":"#caroussel","data-bs-slide-to":i,class:j({active:i===0})},null,10,L))),128))]),e("div",Q,[(r(!0),n(_,null,v(u.value,(g,i)=>(r(),A(H,q({key:i,ref_for:!0},g,{isActive:i===0}),null,16,["isActive"]))),128))]),U,W]),m(x,{to:l.value.path},{default:k(()=>[D(c(l.value.text),1)]),_:1},8,["to"])])],64)}}},nt=d(X,[["__scopeId","data-v-c4188561"]]),Y=["src","alt"],Z={class:"slot-wrapper"},tt={__name:"Banner",props:{src:{type:String,required:!0},alt:{type:String,default:""},height:{type:String,default:"20rem"}},setup(t){const a=t;return(o,l)=>(r(),n("div",{class:"banner",style:b({height:a.height})},[e("img",{src:a.src,alt:a.alt},null,8,Y),e("div",Z,[N(o.$slots,"default",{},void 0,!0)])],4))}},lt=d(tt,[["__scopeId","data-v-052becd8"]]);export{lt as B,nt as C,rt as P,ot as f};
