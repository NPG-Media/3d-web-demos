import{r as c,s as D,j as l,T as ge,c as ft,B as dt}from"./index-CkEUT0eu.js";import{V as ye,C as at,m as W,Q as V,r as rt,s as fe,E as mt,t as pt,u as st,g as we,e as be,A as ht,v as vt,l as yt,M as se,w as ie,T as wt,a as gt,x as Me,n as bt,o as Mt,p as _t,q as xt}from"./HamburgerMenu-BCXgWqBx.js";import{u as St,C as jt,b as At,P as Ct,L as Et,c as Pt,E as Rt,A as Tt,a as Ot,T as It}from"./AddCameraTarget-BY_eifMB.js";import{T as Lt,D as kt}from"./DynamicCameraFov-Ds88TBf8.js";import{u as Dt}from"./Helper-uIA9oKEp.js";function oe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function Wt(t,e){if(t){if(typeof t=="string")return pe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pe(t,e)}}function Bt(t){if(Array.isArray(t))return pe(t)}function qt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ft(t){return Bt(t)||qt(t)||Wt(t)||zt()}new ye;new ye;function Ht(t,e,n){return Math.max(e,Math.min(n,t))}function Qt(t,e){return Ht(t-Math.floor(t/e)*e,0,e)}function $t(t,e){var n=Qt(e-t,Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n}function it(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var P=function t(e,n,o){var a=this;it(this,t),oe(this,"dot2",function(r,s){return a.x*r+a.y*s}),oe(this,"dot3",function(r,s,i){return a.x*r+a.y*s+a.z*i}),this.x=e,this.y=n,this.z=o},Nt=[new P(1,1,0),new P(-1,1,0),new P(1,-1,0),new P(-1,-1,0),new P(1,0,1),new P(-1,0,1),new P(1,0,-1),new P(-1,0,-1),new P(0,1,1),new P(0,-1,1),new P(0,1,-1),new P(0,-1,-1)],_e=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],xe=new Array(512),Se=new Array(512),Yt=function(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(var n=0;n<256;n++){var o;n&1?o=_e[n]^e&255:o=_e[n]^e>>8&255,xe[n]=xe[n+256]=o,Se[n]=Se[n+256]=Nt[o%12]}};Yt(0);function Ut(t){if(typeof t=="number")t=Math.abs(t);else if(typeof t=="string"){var e=t;t=0;for(var n=0;n<e.length;n++)t=(t+(n+1)*(e.charCodeAt(n)%96))%2147483647}return t===0&&(t=311),t}function je(t){var e=Ut(t);return function(){var n=e*48271%2147483647;return e=n,n/2147483647}}var Gt=function t(e){var n=this;it(this,t),oe(this,"seed",0),oe(this,"init",function(o){n.seed=o,n.value=je(o)}),oe(this,"value",je(this.seed)),this.init(e)};new Gt(Math.random());var Vt=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.01,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1/(2*Math.PI);return o/Math.atan(1/n)*Math.atan(Math.sin(2*Math.PI*e*a)/n)},lt=function(e){return 1/(1+e+.48*e*e+.235*e*e*e)},Xt=function(e){return e},Zt={in:function(e){return 1-Math.cos(e*Math.PI/2)},out:function(e){return Math.sin(e*Math.PI/2)},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},Jt={in:function(e){return e*e*e},out:function(e){return 1-Math.pow(1-e,3)},inOut:function(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}},Kt={in:function(e){return e*e*e*e*e},out:function(e){return 1-Math.pow(1-e,5)},inOut:function(e){return e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2}},en={in:function(e){return 1-Math.sqrt(1-Math.pow(e,2))},out:function(e){return Math.sqrt(1-Math.pow(e-1,2))},inOut:function(e){return e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2}},tn={in:function(e){return e*e*e*e},out:function(e){return 1- --e*e*e*e},inOut:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e}},nn={in:function(e){return e===0?0:Math.pow(2,10*e-10)},out:function(e){return e===1?1:1-Math.pow(2,-10*e)},inOut:function(e){return e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2}};function b(t,e,n){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.25,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:.01,r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:1/0,s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:lt,i=arguments.length>7&&arguments[7]!==void 0?arguments[7]:.001,f="velocity_"+e;if(t.__damp===void 0&&(t.__damp={}),t.__damp[f]===void 0&&(t.__damp[f]=0),Math.abs(t[e]-n)<=i)return t[e]=n,!1;o=Math.max(1e-4,o);var M=2/o,j=s(M*a),A=t[e]-n,h=n,z=r*o;A=Math.min(Math.max(A,-z),z),n=t[e]-A;var C=(t.__damp[f]+M*A)*a;t.__damp[f]=(t.__damp[f]-M*C)*j;var O=n+(A+C)*j;return h-t[e]>0==O>h&&(O=h,t.__damp[f]=(O-h)/a),t[e]=O,!0}var on=function(e){return e&&e.isCamera},an=function(e){return e&&e.isLight},Z=new W,Ae=new V,Ce=new V,J=new rt,de=new W;function rn(t,e,n,o,a,r,s){typeof e=="number"?Z.setScalar(e):Array.isArray(e)?Z.set(e[0],e[1],e[2]):Z.copy(e);var i=t.parent;t.updateWorldMatrix(!0,!1),de.setFromMatrixPosition(t.matrixWorld),on(t)||an(t)?J.lookAt(de,Z,t.up):J.lookAt(Z,de,t.up),ue(t.quaternion,Ce.setFromRotationMatrix(J),n,o,a,r,s),i&&(J.extractRotation(i.matrixWorld),Ae.setFromRotationMatrix(J),ue(t.quaternion,Ce.copy(t.quaternion).premultiply(Ae.invert()),n,o,a,r,s))}function G(t,e,n,o,a,r,s,i){return b(t,e,t[e]+$t(t[e],n),o,a,r,s,i)}var K=new ye,Ee,Pe;function sn(t,e,n,o,a,r,s){return typeof e=="number"?K.setScalar(e):Array.isArray(e)?K.set(e[0],e[1]):K.copy(e),Ee=b(t,"x",K.x,n,o,a,r,s),Pe=b(t,"y",K.y,n,o,a,r,s),Ee||Pe}var Y=new W,Re,Te,Oe;function he(t,e,n,o,a,r,s){return typeof e=="number"?Y.setScalar(e):Array.isArray(e)?Y.set(e[0],e[1],e[2]):Y.copy(e),Re=b(t,"x",Y.x,n,o,a,r,s),Te=b(t,"y",Y.y,n,o,a,r,s),Oe=b(t,"z",Y.z,n,o,a,r,s),Re||Te||Oe}var N=new fe,Ie,Le,ke,De;function ln(t,e,n,o,a,r,s){return typeof e=="number"?N.setScalar(e):Array.isArray(e)?N.set(e[0],e[1],e[2],e[3]):N.copy(e),Ie=b(t,"x",N.x,n,o,a,r,s),Le=b(t,"y",N.y,n,o,a,r,s),ke=b(t,"z",N.z,n,o,a,r,s),De=b(t,"w",N.w,n,o,a,r,s),Ie||Le||ke||De}var ee=new mt,We,Be,qe;function cn(t,e,n,o,a,r,s){return Array.isArray(e)?ee.set(e[0],e[1],e[2],e[3]):ee.copy(e),We=G(t,"x",ee.x,n,o,a,r,s),Be=G(t,"y",ee.y,n,o,a,r,s),qe=G(t,"z",ee.z,n,o,a,r,s),We||Be||qe}var U=new at,ze,Fe,He;function un(t,e,n,o,a,r,s){return e instanceof at?U.copy(e):Array.isArray(e)?U.setRGB(e[0],e[1],e[2]):U.set(e),ze=b(t,"r",U.r,n,o,a,r,s),Fe=b(t,"g",U.g,n,o,a,r,s),He=b(t,"b",U.b,n,o,a,r,s),ze||Fe||He}var T=new V,k=new fe,Qe=new fe,te=new fe,$e,Ne,Ye,Ue;function ue(t,e,n,o,a,r,s){var i=t;Array.isArray(e)?T.set(e[0],e[1],e[2],e[3]):T.copy(e);var f=t.dot(T)>0?1:-1;return T.x*=f,T.y*=f,T.z*=f,T.w*=f,$e=b(t,"x",T.x,n,o,a,r,s),Ne=b(t,"y",T.y,n,o,a,r,s),Ye=b(t,"z",T.z,n,o,a,r,s),Ue=b(t,"w",T.w,n,o,a,r,s),k.set(t.x,t.y,t.z,t.w).normalize(),Qe.set(i.__damp.velocity_x,i.__damp.velocity_y,i.__damp.velocity_z,i.__damp.velocity_w),te.copy(k).multiplyScalar(Qe.dot(k)/k.dot(k)),i.__damp.velocity_x-=te.x,i.__damp.velocity_y-=te.y,i.__damp.velocity_z-=te.z,i.__damp.velocity_w-=te.w,t.set(k.x,k.y,k.z,k.w),$e||Ne||Ye||Ue}var ne=new pt,Ge,Ve,Xe;function fn(t,e,n,o,a,r,s){return Array.isArray(e)?ne.set(e[0],e[1],e[2]):ne.copy(e),Ge=b(t,"radius",ne.radius,n,o,a,r,s),Ve=G(t,"phi",ne.phi,n,o,a,r,s),Xe=G(t,"theta",ne.theta,n,o,a,r,s),Ge||Ve||Xe}var le=new rt,Ze=new W,Je=new V,Ke=new W,et,tt,nt;function dn(t,e,n,o,a,r,s){var i=t;return i.__damp===void 0&&(i.__damp={position:new W,rotation:new V,scale:new W},t.decompose(i.__damp.position,i.__damp.rotation,i.__damp.scale)),Array.isArray(e)?le.set.apply(le,Ft(e)):le.copy(e),le.decompose(Ze,Je,Ke),et=he(i.__damp.position,Ze,n,o,a,r,s),tt=ue(i.__damp.rotation,Je,n,o,a,r,s),nt=he(i.__damp.scale,Ke,n,o,a,r,s),t.compose(i.__damp.position,i.__damp.rotation,i.__damp.scale),et||tt||nt}var ot=Object.freeze({__proto__:null,rsqw:Vt,exp:lt,linear:Xt,sine:Zt,cubic:Jt,quint:Kt,circ:en,quart:tn,expo:nn,damp:b,dampLookAt:rn,dampAngle:G,damp2:sn,damp3:he,damp4:ln,dampE:cn,dampC:un,dampQ:ue,dampS:fn,dampM:dn});const ct=c.createContext(null);function mn(){return c.useContext(ct)}function pn({eps:t=1e-5,enabled:e=!0,infinite:n,horizontal:o,pages:a=1,distance:r=1,damping:s=.25,maxSpeed:i=1/0,prepend:f=!1,style:M={},children:j}){const{get:A,setEvents:h,gl:z,size:C,invalidate:O,events:R}=st(),[d]=c.useState(()=>document.createElement("div")),[L]=c.useState(()=>document.createElement("div")),[E]=c.useState(()=>document.createElement("div")),F=z.domElement.parentNode,B=c.useRef(0),S=c.useMemo(()=>({el:d,eps:t,fill:L,fixed:E,horizontal:o,damping:s,offset:0,delta:0,scroll:B,pages:a,range(_,g,v=0){const y=_-v,x=y+g+v*2;return this.offset<y?0:this.offset>x?1:(this.offset-y)/(x-y)},curve(_,g,v=0){return Math.sin(this.range(_,g,v)*Math.PI)},visible(_,g,v=0){const y=_-v,x=y+g+v*2;return this.offset>=y&&this.offset<=x}}),[t,s,o,a]);c.useEffect(()=>{d.style.position="absolute",d.style.width="100%",d.style.height="100%",d.style[o?"overflowX":"overflowY"]="auto",d.style[o?"overflowY":"overflowX"]="hidden",d.style.top="0px",d.style.left="0px";for(const g in M)d.style[g]=M[g];E.style.position="sticky",E.style.top="0px",E.style.left="0px",E.style.width="100%",E.style.height="100%",E.style.overflow="hidden",d.appendChild(E),L.style.height=o?"100%":`${a*r*100}%`,L.style.width=o?`${a*r*100}%`:"100%",L.style.pointerEvents="none",d.appendChild(L),f?F.prepend(d):F.appendChild(d),d[o?"scrollLeft":"scrollTop"]=1;const H=R.connected||z.domElement;requestAnimationFrame(()=>R.connect==null?void 0:R.connect(d));const _=A().events.compute;return h({compute(g,v){const{left:y,top:x}=F.getBoundingClientRect(),Q=g.clientX-y,$=g.clientY-x;v.pointer.set(Q/v.size.width*2-1,-($/v.size.height)*2+1),v.raycaster.setFromCamera(v.pointer,v.camera)}}),()=>{F.removeChild(d),h({compute:_}),R.connect==null||R.connect(H)}},[a,r,o,d,L,E,F]),c.useEffect(()=>{if(R.connected===d){const H=C[o?"width":"height"],_=d[o?"scrollWidth":"scrollHeight"],g=_-H;let v=0,y=!0,x=!0;const Q=()=>{if(!(!e||x)&&(O(),v=d[o?"scrollLeft":"scrollTop"],B.current=v/g,n)){if(!y){if(v>=g){const u=1-S.offset;d[o?"scrollLeft":"scrollTop"]=1,B.current=S.offset=-u,y=!0}else if(v<=0){const u=1+S.offset;d[o?"scrollLeft":"scrollTop"]=_,B.current=S.offset=u,y=!0}}y&&setTimeout(()=>y=!1,40)}};d.addEventListener("scroll",Q,{passive:!0}),requestAnimationFrame(()=>x=!1);const $=u=>d.scrollLeft+=u.deltaY/2;return o&&d.addEventListener("wheel",$,{passive:!0}),()=>{d.removeEventListener("scroll",Q),o&&d.removeEventListener("wheel",$)}}},[d,R,C,n,S,O,o,e]);let ae=0;return we((H,_)=>{ae=S.offset,ot.damp(S,"offset",B.current,s,_,i,void 0,t),ot.damp(S,"delta",Math.abs(ae-S.offset),s,_,i,void 0,t),S.delta>t&&O()}),c.createElement(ct.Provider,{value:S},j)}function hn(t,e){const n=c.useRef(),[o]=c.useState(()=>e?e instanceof be?{current:e}:e:n),[a]=c.useState(()=>new ht(void 0));c.useLayoutEffect(()=>{e&&(o.current=e instanceof be?e:e.current),a._root=o.current});const r=c.useRef({}),s=c.useMemo(()=>{const i={};return t.forEach(f=>Object.defineProperty(i,f.name,{enumerable:!0,get(){if(o.current)return r.current[f.name]||(r.current[f.name]=a.clipAction(f,o.current))},configurable:!0})),{ref:o,clips:t,actions:i,names:t.map(f=>f.name),mixer:a}},[t]);return we((i,f)=>a.update(f)),c.useEffect(()=>{const i=o.current;return()=>{r.current={},a.stopAllAction(),Object.values(s.actions).forEach(f=>{i&&a.uncacheAction(f,i)})}},[t]),s}const ce=[{offset:0,name:"Boat window",type:"2D",poiInfo:{title:"3D Web Experiences are Here!",description:["Start scrolling to get a taste of what 3D web experiences can offer."],image:D+"/images/interactive.jpg",parentStyling:{fontFamily:"Red Hat Display"},globalPath:!0,imageStyling:{objectFit:"cover",height:"auto"}}},{name:"Boat front",offset:.25,poiInfo:{title:"A New Way to Visualize Web Content",description:["Wether it's for showcasing products, visualizing data, staff training, or just for fun, 3D web experiences are an exciting new way to engage with web content."],parentStyling:{fontFamily:"Red Hat Display"},image:D+"/images/ship.jpg",imageStyling:{objectFit:"cover",height:"auto"},globalPath:!0}},{name:"Windmill",offset:.707,component:()=>l.jsx(gn,{text:"Animations, Interactions and More!",position:[-.08,.23,.18],rotation:[0,Math.PI,0],scale:[.08,.08,.08]})},{name:"Boat end",offset:.85,poiInfo:{title:"Interactive 3D models in browser",description:["This is a test of the ScrollControls component.","Scroll to move the camera to different stops.","The camera will lock to each stop for a short delay.","The camera will unlock after the delay and allow scrolling to the next stop."],image:D+"/images/ship.jpg",imageStyling:{objectFit:"cover",height:"auto"},globalPath:!0}},{name:"Boat end",offset:1,poiInfo:{title:"Interactive 3D models in browser",description:["This is a test of the ScrollControls component.","Scroll to move the camera to different stops.","The camera will lock to each stop for a short delay.","The camera will unlock after the delay and allow scrolling to the next stop."],image:D+"/images/ship.jpg",imageStyling:{objectFit:"cover",height:"auto"},globalPath:!0}}],vn=({title:t,description:e,image:n,parentStyling:o,globalPath:a=!1,imageStyling:r,buttons:s})=>{const i=vt();return St(i.breakpoints.down("md")),l.jsx(jt,{sx:{display:"flex",flexDirection:"column",maxWidth:"25rem",height:"25rem",backgroundColor:"rgba(0, 0, 0, 0.8)",pointerEvents:"auto",borderRadius:"5rem",padding:"3rem",...o},children:l.jsxs(At,{sx:{flex:1},children:[t&&l.jsx(ge,{variant:"h5",component:"div",sx:{fontFamily:"Red Hat Display",fontWeight:700,color:"white",paddingBottom:1},children:t}),e&&e.map((f,M)=>l.jsx(ge,{variant:"body2",sx:{fontFamily:"Red Hat Display",fontWeight:400,color:"white",paddingTop:1},children:f},M))]})})},yn=({modelData:t,scrollLength:e=1})=>l.jsx(pn,{pages:e,children:l.jsx(wn,{modelData:t,stopDelay:600})});function wn({modelData:t,stopDelay:e=1e3}){var Q,$;const{camera:n}=st(),o=mn(),a=D+t.path,{scene:r,animations:s}=yt(a),i=r.getObjectByName("RS_Camera"),f=r.getObjectByName("Rotor"),{actions:M}=hn(s,r),[j,A]=c.useState(0);c.useEffect(()=>void(M.Animation.play().paused=!0),[M]);const h=ce,z=.08,[C,O]=c.useState(0),[R,d]=c.useState(!1),[L,E]=c.useState(!0),[F,B]=c.useState(!1);c.useEffect(()=>{o.el&&(o.el.style.overflow="scroll",o.el.style.scrollbarWidth="none",o.el.style.msOverflowStyle="none")},[o]);const S={RobotArm:`${D}/textures/M_RobotArm_occlusionRoughnessMetallic.png`,WindTurbine_Base:`${D}/textures/M_Windmill_occlusionRoughnessMetallic.png`,WindTurbine_Base2:`${D}/textures/M_WindmillBase_occlusionRoughnessMetallic.png`,Tanker:`${D}/textures/M_Tanker_occlusionRoughnessMetallic.png`},ae=()=>{const[u,m]=c.useState({}),p=c.useRef(!1);return c.useEffect(()=>{if(p.current)return;const I=new wt,re=w=>new Promise(X=>{I.load(w,q=>{q.wrapS=Me,q.wrapT=Me,q.flipY=!1,X(q)})});Promise.all(Object.entries(S).map(async([w,X])=>{const q=await re(X);return{key:w,texture:q}})).then(w=>{const X=Object.fromEntries(w.map(({key:q,texture:ut})=>[q,ut]));m(X),p.current=!0})},[]),u},H=({scene:u})=>{const m=ae();return c.useEffect(()=>{if(!u||Object.keys(m).length===0)return;const p=u.getObjectByName("RobotArm");p&&p.traverse(w=>{w instanceof se&&w.material instanceof ie&&(w.material.aoMap=m.RobotArm,w.material.needsUpdate=!0)});const I=u.getObjectByName("WindTurbine_Base");I&&I.traverse(w=>{w instanceof se&&w.material instanceof ie&&(w.material.aoMap=m.WindTurbine_Base,w.material.needsUpdate=!0)}),I instanceof se&&I.material instanceof ie&&(I.material.aoMap=m.WindTurbine_Base2,I.material.needsUpdate=!0);const re=u.getObjectByName("Tanker");re&&re.traverse(w=>{w instanceof se&&w.material instanceof ie&&(w.material.aoMap=m.Tanker,w.material.needsUpdate=!0)})},[u,m]),null};r.traverse(u=>{u.name.includes("Placeholder")&&(u.visible=!1),u.name.includes("PlaneToHide")&&(u.visible=!1)});const _=()=>{for(let u=0;u<h.length;u++)if(Math.abs(o.offset-h[u].offset)<z){if(u===C)return;d(!0),E(!0),o.el.style.touchAction="none",O(u),console.log("Scroll locked to stop: ",u),setTimeout(()=>{d(!1),o.el.style.touchAction="auto",console.log("Scroll unlocked")},e);break}},g=u=>{R?u.preventDefault():L&&!F&&(B(!0),setTimeout(()=>{E(!1),B(!1)},1e3))},v=()=>{if(i){const u=i.getWorldPosition(new W),m=i.getWorldQuaternion(new V);n.position.set(u.x,u.y,u.z),n.quaternion.set(m.x,m.y,m.z,m.w),j<.2?(n.near=2e-6,n.far=.1):j<.6?(n.near=1e-5,n.far=.5):(n.near=.01,n.far=8),n.updateProjectionMatrix()}else console.warn("RS_Camera not found in scene.")},y=c.useRef(null),x=c.useRef(null);return c.useEffect(()=>{if(!y.current){const u=document.getElementById("ui-overlay");if(!u){console.error("UI overlay not found!");return}const m=document.createElement("div");m.id="scrollOverlay",m.style.position="absolute",m.style.top="0vh",m.style.left="0",m.style.width="100%",m.style.height=`${200*ce.length}vh`,u.appendChild(m),y.current=m,x.current=ft.createRoot(m),x.current.render(l.jsx(l.Fragment,{children:ce.map((p,I)=>p.poiInfo&&l.jsx(dt,{sx:{position:"absolute",top:`${p.offset*(ce.length-1)*200+50}vh`,left:"2rem",transform:"translateY(-50%)",pointerEvents:"auto"},children:l.jsx(vn,{title:p.poiInfo.title,description:p.poiInfo.description,image:p.poiInfo.image,globalPath:p.poiInfo.globalPath})},I))}))}return()=>{var u;x.current&&x.current.unmount(),(u=y.current)==null||u.remove()}},[]),c.useEffect(()=>(o.el.addEventListener("wheel",g,{passive:!1}),o.el.addEventListener("touchmove",g,{passive:!1}),()=>{o.el.removeEventListener("wheel",g),o.el.removeEventListener("touchmove",g)})),we((u,m)=>{const p=M.Animation;!R&&!L&&(ve||_()),f&&f.rotateZ(m*-1.6),R?(o.el.scrollTop=h[C].offset*(o.el.scrollHeight-o.el.clientHeight),A(h[C].offset)):A(o.offset),Math.abs(p.time/p.getClip().duration-j)>1e-4?p.time=gt.damp(p.time,p.getClip().duration*j,3,m):p.time=p.getClip().duration*j,y.current&&(y.current.style.top=-(p.time/p.getClip().duration*200*(h.length-1))+"vh"),v(),ve&&console.log("Scroll offset: ",o.offset)}),l.jsxs(l.Fragment,{children:[l.jsx("primitive",{object:r,dispose:null}),l.jsx(H,{scene:r}),C!==null&&((Q=h[C])==null?void 0:Q.component)&&(($=h[C])==null?void 0:$.component())]})}const gn=({text:t,position:e=[0,0,0],rotation:n=[0,0,0],scale:o=[1,1,1]})=>l.jsx(Lt,{font:"fonts/RedHatDisplay-SemiBold.ttf",color:"#ffffff",anchorY:"top",anchorX:"left",fontSize:.5,position:e,rotation:n,scale:o,maxWidth:3,lineHeight:1.2,fillOpacity:1,children:t}),me={sceneTitle:"Scroll Demo",sceneModels:[{path:"/models/scrollDemo2.glb",castShadow:!0,receiveShadow:!0}],canvasSettings:{backgroundColor:"#666666",antialias:!0,environmentProps:{preset:"studio",background:!1,environmentIntensity:.1,backgroundBlurriness:.1},usePostEffects:!0},parentPoi:{name:"Test scene parent POI",description:"The parent POI for the test scene, encompassing all child POIs.",type:"staticObject",isMaster:!0,cameraControls:{type:"orbit",enablePan:!1,startPosition:{x:0,y:2,z:10},targetOffset:{x:0,y:1,z:0},constraints:{up:50,down:-1,minZoom:1,maxZoom:12}}},debugSettings:{allTrue:!1,gridHelper:!1,axesHelper:!1,stats:!1,lightHelpers:!1}};let ve=!1;const Cn=()=>{const t=c.useRef(null),e=c.useRef(null),n=c.useRef(null),[o,a]=c.useState(!1),r=()=>{a(h=>!h)},[s,i]=c.useState(!1),f=()=>{i(h=>!h)},[M,j]=c.useState(!1),A=()=>{j(h=>!h)};return c.useEffect(()=>{ve=M},[M]),l.jsx("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",backgroundColor:"#333333"},children:l.jsxs(Ct,{initialPoi:me.parentPoi,children:[l.jsxs(bt,{ref:t,camera:{position:new W(0,2,10),near:2e-6,far:.1},gl:{powerPreference:"high-performance",alpha:!1,antialias:!0},shadows:!s,children:[l.jsx("color",{attach:"background",args:["#333333"]}),l.jsxs(c.Suspense,{fallback:l.jsx(Et,{}),children:[l.jsx(Pt,{modelData:me.sceneModels}),l.jsx(Rt,{preset:"city"}),l.jsx(bn,{debugMode:M}),l.jsx(kt,{frameSize:6}),l.jsx(Tt,{}),l.jsx(yn,{modelData:me.sceneModels[0],scrollLength:10}),l.jsx("fog",{attach:"fog",args:["#333333",4,6]}),o&&l.jsx(Mt,{}),!s&&l.jsx(Mn,{})]})]}),l.jsx("div",{id:"overlay",ref:e,className:"absolute left-0 top-0 h-full w-full pointer-events-none overflow-hidden"}),l.jsx("div",{ref:n,id:"ui-overlay",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",overflow:"hidden"},children:l.jsx(_t,{showStats:o,onToggleStats:r,usePerformanceMode:s,onTogglePerformanceMode:f,debugMode:M,onToggleDebugMode:A})})]})})},bn=({debugMode:t})=>{const e=c.useRef();return Dt(t?e:null,xt),l.jsxs("group",{children:[l.jsx("directionalLight",{color:"#ffe0cc",position:[5,5,-10],castShadow:!0,intensity:20,"shadow-mapSize":[1024,1024],"shadow-bias":-.01,children:l.jsx("orthographicCamera",{ref:e,attach:"shadow-camera",args:[-5,5,5,-2,10,16]})}),l.jsx("directionalLight",{position:[-5,5,5],intensity:.4,"shadow-mapSize":[128,128]}),l.jsx("directionalLight",{position:[-5,5,-5],intensity:.4,"shadow-mapSize":[128,128]}),l.jsx("directionalLight",{position:[0,5,0],intensity:.4,"shadow-mapSize":[128,128]})]})},Mn=()=>l.jsx(l.Fragment,{children:l.jsx(Ot,{children:l.jsx(It,{})})});export{Cn as default,ve as useDebug};
