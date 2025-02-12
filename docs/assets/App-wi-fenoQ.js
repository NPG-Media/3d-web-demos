import{r as t,_ as ce,j as g,b as J,s as Y}from"./index-CkEUT0eu.js";import{O as fe,P as ye,M as me,a as $,S as X,U as we,R as be,u as D,W as B,L as ae,H as Pe,D as Re,F as W,b as ke,c as Me,d as je,e as Se,f as Fe,g as H,h as Ie,i as Ee,B as Te,j as Ce,k as ne,N as T,V as de,l as ze,Q as q,m as R,T as De,E as A,C as Ue,G as _e,n as Ae,o as Le,p as Oe}from"./HamburgerMenu-BCXgWqBx.js";import{u as K,a as ge,B as Be}from"./BackButton-_QzQLuJJ.js";import{T as Z,D as Ge}from"./DynamicCameraFov-Ds88TBf8.js";function Ne(o,e="pointer",n="auto",d=document.body){t.useEffect(()=>{if(o)return d.style.cursor=e,()=>void(d.style.cursor=n)},[o])}var Ve=Object.defineProperty,Ye=(o,e,n)=>e in o?Ve(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,oe=(o,e,n)=>(Ye(o,typeof e!="symbol"?e+"":e,n),n);class Q{constructor(e){oe(this,"camera",new fe(-1,1,1,-1,0,1)),oe(this,"geometry",new ye(2,2)),oe(this,"mesh"),this.mesh=new me(this.geometry,e)}get material(){return this.mesh.material}set material(e){this.mesh.material=e}dispose(){this.mesh.geometry.dispose()}render(e){e.render(this.mesh,this.camera)}}function Xe(o,e,n,d){const f=class extends X{constructor(i={}){const x=Object.entries(o);super({uniforms:x.reduce((m,[s,h])=>{const l=we.clone({[s]:{value:h}});return{...m,...l}},{}),vertexShader:e,fragmentShader:n}),this.key="",x.forEach(([m])=>Object.defineProperty(this,m,{get:()=>this.uniforms[m].value,set:s=>this.uniforms[m].value=s})),Object.assign(this,i)}};return f.key=$.generateUUID(),f}const He=()=>parseInt(be.replace(/\D+/g,"")),pe=He();function ee(o,e,n){const d=D(u=>u.size),f=D(u=>u.viewport),c=typeof o=="number"?o:d.width*f.dpr,i=typeof e=="number"?e:d.height*f.dpr,x=(typeof o=="number"?n:o)||{},{samples:m=0,depth:s,...h}=x,l=t.useMemo(()=>{const u=new B(c,i,{minFilter:ae,magFilter:ae,type:Pe,...h});return s&&(u.depthTexture=new Re(c,i,W)),u.samples=m,u},[]);return t.useLayoutEffect(()=>{l.setSize(c,i),m&&(l.samples=m)},[m,l,c,i]),t.useEffect(()=>()=>l.dispose(),[]),l}function Qe(o){const e=t.useRef(null),n=t.useRef(!1),d=t.useRef(!1),f=t.useRef(o);return t.useLayoutEffect(()=>void(f.current=o),[o]),t.useEffect(()=>{const c=e.current;if(c){const i=ke(()=>(n.current=!1,!0)),x=c.onBeforeRender;c.onBeforeRender=()=>n.current=!0;const m=Me(()=>(n.current!==d.current&&(f.current==null||f.current(d.current=n.current)),!0));return()=>{c.onBeforeRender=x,i(),m()}}},[]),e}const $e=t.forwardRef(({children:o,compute:e,width:n,height:d,samples:f=8,renderPriority:c=0,eventPriority:i=0,frames:x=1/0,stencilBuffer:m=!1,depthBuffer:s=!0,generateMipmaps:h=!1,...l},u)=>{const{size:y,viewport:a}=D(),p=ee((n||y.width)*a.dpr,(d||y.height)*a.dpr,{samples:f,stencilBuffer:m,depthBuffer:s,generateMipmaps:h}),[S]=t.useState(()=>new je),k=t.useCallback((F,M,w)=>{var C,j;let b=(C=p.texture)==null?void 0:C.__r3f.parent;for(;b&&!(b instanceof Se);)b=b.__r3f.parent;if(!b)return!1;w.raycaster.camera||w.events.compute(F,w,(j=w.previousRoot)==null?void 0:j.getState());const[U]=w.raycaster.intersectObject(b);if(!U)return!1;const z=U.uv;if(!z)return!1;M.raycaster.setFromCamera(M.pointer.set(z.x*2-1,z.y*2-1),M.camera)},[]);return t.useImperativeHandle(u,()=>p.texture,[p]),t.createElement(t.Fragment,null,Fe(t.createElement(qe,{renderPriority:c,frames:x,fbo:p},o,t.createElement("group",{onPointerOver:()=>null})),S,{events:{compute:e||k,priority:i}}),t.createElement("primitive",ce({object:p.texture},l)))});function qe({frames:o,renderPriority:e,children:n,fbo:d}){let f=0,c,i,x,m;return H(s=>{(o===1/0||f<o)&&(c=s.gl.autoClear,i=s.gl.xr.enabled,x=s.gl.getRenderTarget(),m=s.gl.xr.isPresenting,s.gl.autoClear=!0,s.gl.xr.enabled=!1,s.gl.xr.isPresenting=!1,s.gl.setRenderTarget(d),s.gl.render(s.scene,s.camera),s.gl.setRenderTarget(x),s.gl.autoClear=c,s.gl.xr.enabled=i,s.gl.xr.isPresenting=m,f++)},e),t.createElement(t.Fragment,null,n)}const We=Xe({blur:0,map:null,sdf:null,blend:0,size:0,resolution:new de},`varying vec2 vUv;
   void main() {
     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
     vUv = uv;
   }`,`uniform sampler2D sdf;
   uniform sampler2D map;
   uniform float blur;
   uniform float size;
   uniform float time;
   uniform vec2 resolution;
   varying vec2 vUv;
   #include <packing>
   void main() {
     vec2 uv = gl_FragCoord.xy / resolution.xy;
     vec4 t = texture2D(map, uv);
     float k = blur;
     float d = texture2D(sdf, vUv).r/size;
     float alpha = 1.0 - smoothstep(0.0, 1.0, clamp(d/k + 1.0, 0.0, 1.0));
     gl_FragColor = vec4(t.rgb, blur == 0.0 ? t.a : t.a * alpha);
     #include <tonemapping_fragment>
     #include <${pe>=154?"colorspace_fragment":"encodings_fragment"}>
   }`),Je=t.forwardRef(({children:o,events:e=void 0,blur:n=0,eventPriority:d=0,renderPriority:f=0,worldUnits:c=!1,resolution:i=512,...x},m)=>{Ie({PortalMaterialImpl:We});const s=t.useRef(null),{scene:h,gl:l,size:u,viewport:y,setEvents:a}=D(),p=ee(i,i),[S,k]=t.useState(0);H(()=>{const j=s.current.blend>0?Math.max(1,f):0;S!==j&&k(j)}),t.useEffect(()=>{e!==void 0&&a({enabled:!e})},[e]);const[F,M]=t.useState(!0),w=Qe(M);t.useLayoutEffect(()=>{var j;w.current=(j=s.current)==null?void 0:j.__r3f.parent},[]),t.useLayoutEffect(()=>{if(w.current&&n&&s.current.sdf===null){const j=new me(w.current.geometry,new Ee),b=new Te().setFromBufferAttribute(j.geometry.attributes.position),U=new fe(b.min.x*(1+2/i),b.max.x*(1+2/i),b.max.y*(1+2/i),b.min.y*(1+2/i),.1,1e3);U.position.set(0,0,1),U.lookAt(0,0,0),l.setRenderTarget(p),l.render(j,U);const L=Ze(i,i,l)(p.texture),G=new Float32Array(i*i);l.readRenderTargetPixels(L,0,0,i,i,G);let O=1/0;for(let N=0;N<G.length;N++)G[N]<O&&(O=G[N]);O=-O,s.current.size=O,s.current.sdf=L.texture,l.setRenderTarget(null)}},[i,n]),t.useImperativeHandle(m,()=>s.current);const C=t.useCallback((j,b,U)=>{var z;if(!w.current)return!1;if(b.pointer.set(j.offsetX/b.size.width*2-1,-(j.offsetY/b.size.height)*2+1),b.raycaster.setFromCamera(b.pointer,b.camera),((z=s.current)==null?void 0:z.blend)===0){const[L]=b.raycaster.intersectObject(w.current);if(!L)return b.raycaster.camera=void 0,!1}},[]);return t.createElement("portalMaterialImpl",ce({ref:s,blur:n,blend:0,resolution:[u.width*y.dpr,u.height*y.dpr],attach:"material"},x),t.createElement($e,{attach:"map",frames:F?1/0:0,eventPriority:d,renderPriority:f,compute:C},o,t.createElement(Ke,{events:e,rootScene:h,priority:S,material:s,worldUnits:c})))});function Ke({events:o=void 0,rootScene:e,material:n,priority:d,worldUnits:f}){const c=D(l=>l.scene),i=D(l=>l.setEvents),x=ee(),m=ee();t.useLayoutEffect(()=>{c.matrixAutoUpdate=!1},[]),t.useEffect(()=>{o!==void 0&&i({enabled:o})},[o]);const[s,h]=t.useMemo(()=>{const l={value:0};return[new Q(new X({uniforms:{a:{value:x.texture},b:{value:m.texture},blend:l},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }`,fragmentShader:`
          uniform sampler2D a;
          uniform sampler2D b;
          uniform float blend;
          varying vec2 vUv;
          #include <packing>
          void main() {
            vec4 ta = texture2D(a, vUv);
            vec4 tb = texture2D(b, vUv);
            gl_FragColor = mix(tb, ta, blend);
            #include <tonemapping_fragment>
            #include <${pe>=154?"colorspace_fragment":"encodings_fragment"}>
          }`})),l]},[]);return H(l=>{var u;let y=n==null||(u=n.current)==null?void 0:u.__r3f.parent;if(y){if(f)c.matrixWorld.identity();else{var a;d&&((a=n.current)==null?void 0:a.blend)===1&&y.updateWorldMatrix(!0,!1),c.matrixWorld.copy(y.matrixWorld)}if(d){var p,S,k;((p=n.current)==null?void 0:p.blend)>0&&((S=n.current)==null?void 0:S.blend)<1?(h.value=n.current.blend,l.gl.setRenderTarget(x),l.gl.render(c,l.camera),l.gl.setRenderTarget(m),l.gl.render(e,l.camera),l.gl.setRenderTarget(null),s.render(l.gl)):((k=n.current)==null?void 0:k.blend)===1&&l.gl.render(c,l.camera)}}},d),t.createElement(t.Fragment,null)}const Ze=(o,e,n)=>{let d=new B(o,e,{minFilter:Ce,magFilter:ae,type:W,format:ne,generateMipmaps:!0}),f=new B(o,e,{minFilter:T,magFilter:T}),c=new B(o,e,{minFilter:T,magFilter:T}),i=new B(o,e,{minFilter:T,magFilter:T}),x=new B(o,e,{minFilter:T,magFilter:T}),m=new B(o,e,{minFilter:T,magFilter:T,type:W,format:ne}),s=new B(o,e,{minFilter:T,magFilter:T,type:W,format:ne});const h=new Q(new X({uniforms:{tex:{value:null}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,fragmentShader:`
        uniform sampler2D tex;
        varying vec2 vUv;
        #include <packing>
        void main() {
          gl_FragColor = pack2HalfToRGBA(vUv * (round(texture2D(tex, vUv).x)));
        }`})),l=new Q(new X({uniforms:{tex:{value:null}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,fragmentShader:`
        uniform sampler2D tex;
        varying vec2 vUv;
        #include <packing>
        void main() {
          gl_FragColor = pack2HalfToRGBA(vUv * (1.0 - round(texture2D(tex, vUv).x)));
        }`})),u=new Q(new X({uniforms:{tex:{value:null},offset:{value:0},level:{value:0},maxSteps:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tex;
        uniform float offset;
        uniform float level;
        uniform float maxSteps;
        #include <packing>
        void main() {
          float closestDist = 9999999.9;
          vec2 closestPos = vec2(0.0);
          for (float x = -1.0; x <= 1.0; x += 1.0) {
            for (float y = -1.0; y <= 1.0; y += 1.0) {
              vec2 voffset = vUv;
              voffset += vec2(x, y) * vec2(${1/o}, ${1/e}) * offset;
              vec2 pos = unpackRGBATo2Half(texture2D(tex, voffset));
              float dist = distance(pos.xy, vUv);
              if(pos.x != 0.0 && pos.y != 0.0 && dist < closestDist) {
                closestDist = dist;
                closestPos = pos;
              }
            }
          }
          gl_FragColor = pack2HalfToRGBA(closestPos);
        }`})),y=new Q(new X({uniforms:{tex:{value:null},size:{value:new de(o,e)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tex;
        uniform vec2 size;
        #include <packing>
        void main() {
          gl_FragColor = vec4(distance(size * unpackRGBATo2Half(texture2D(tex, vUv)), size * vUv), 0.0, 0.0, 0.0);
        }`})),a=new Q(new X({uniforms:{inside:{value:s.texture},outside:{value:m.texture},tex:{value:null}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D inside;
        uniform sampler2D outside;
        uniform sampler2D tex;
        #include <packing>
        void main() {
          float i = texture2D(inside, vUv).x;
          float o =texture2D(outside, vUv).x;
          if (texture2D(tex, vUv).x == 0.0) {
            gl_FragColor = vec4(o, 0.0, 0.0, 0.0);
          } else {
            gl_FragColor = vec4(-i, 0.0, 0.0, 0.0);
          }
        }`}));return p=>{let S=d;p.minFilter=T,p.magFilter=T,h.material.uniforms.tex.value=p,n.setRenderTarget(f),h.render(n);const k=Math.ceil(Math.log(Math.max(o,e))/Math.log(2));let F=f,M=null;for(let w=0;w<k;w++){const C=Math.pow(2,k-w-1);M=F===f?i:f,u.material.uniforms.level.value=w,u.material.uniforms.maxSteps.value=k,u.material.uniforms.offset.value=C,u.material.uniforms.tex.value=F.texture,n.setRenderTarget(M),u.render(n),F=M}n.setRenderTarget(m),y.material.uniforms.tex.value=M.texture,y.render(n),l.material.uniforms.tex.value=p,n.setRenderTarget(c),l.render(n),F=c;for(let w=0;w<k;w++){const C=Math.pow(2,k-w-1);M=F===c?x:c,u.material.uniforms.level.value=w,u.material.uniforms.maxSteps.value=k,u.material.uniforms.offset.value=C,u.material.uniforms.tex.value=F.texture,n.setRenderTarget(M),u.render(n),F=M}return n.setRenderTarget(s),y.material.uniforms.tex.value=M.texture,y.render(n),n.setRenderTarget(S),a.material.uniforms.tex.value=p,a.render(n),n.setRenderTarget(null),S}},et=({portalId:o,maxScroll:e,children:n})=>{console.log(`Loading portal scene ${o}`);const d=t.useRef(null),[f,c]=t.useState(0);return t.useEffect(()=>{const i=x=>{c(m=>$.clamp(m+x.deltaY*.003,0,e))};return window.addEventListener("wheel",i),()=>{window.removeEventListener("wheel",i)}},[e]),H(()=>{d.current&&(d.current.position.y=+f)}),g.jsx("group",{ref:d,children:n})},tt=({cubeModelPath:o,portalData:e,rotationSpeed:n=.01})=>{var le,ue;const{camera:d,scene:f}=D(),{nodes:c}=ze(o),[i,x]=t.useState(null),[m,s]=t.useState(!1),[h,l]=t.useState([]),u=t.useRef(!1),y=t.useRef(!1),a=t.useRef(null),p=t.useRef(new q),S=t.useRef(!1),k=t.useRef({x:0,y:0}),F=D(P=>P.camera.position.clone()),M=t.useRef(new R(1,0,0)),w=t.useRef(new R(0,1,0)),C=t.useRef(new q),j=t.useRef(new q),b=t.useMemo(()=>{const P=new De;return e.map((v,I)=>({id:I,node:c[v.meshId],texture:P.load(v.texturePath,r=>r.flipY=!1),normal:v.normal,header:v.header,tagline:v.tagline}))},[]),[U,z]=K(()=>({springRotation:a.current?[a.current.rotation.x,a.current.rotation.y,a.current.rotation.z]:[0,0,0],config:{mass:2,tension:300,friction:40,precision:.01},onStart:()=>{u.current=!0},onRest:()=>{u.current=!1}})),L=()=>{if(!a.current)return;const P=a.current.matrixWorld,v=[];b.forEach(({id:I,normal:r})=>{const E=r.clone().applyMatrix4(P).normalize(),_=F.clone().sub(a.current.position).normalize();E.dot(_)>0&&v.push(I)}),l(v)},G=P=>{y.current||(S.current=!0,k.current={x:P.clientX,y:P.clientY})},O=P=>{if(!S.current||!a.current||y.current)return;const v=P.clientX-k.current.x,I=P.clientY-k.current.y;C.current.setFromAxisAngle(M.current,I*n),j.current.setFromAxisAngle(w.current,v*n),p.current.multiplyQuaternions(j.current,p.current),p.current.multiplyQuaternions(C.current,p.current),a.current.quaternion.copy(p.current);const r=new A().setFromQuaternion(p.current);z.start({from:{springRotation:[a.current.rotation.x,a.current.rotation.y,a.current.rotation.z]},to:{springRotation:[r.x,r.y,r.z]}}),k.current={x:P.clientX,y:P.clientY}},N=()=>{S.current=!1,ve()},ve=()=>{if(!a.current)return;const P=b.reduce((E,_)=>{const re=_.normal.clone().applyQuaternion(a.current.quaternion).dot(F.clone().sub(a.current.position).normalize());return re>E.dot?{id:_.id,dot:re}:E},{id:-1,dot:-1/0});function v(E,_){const V=E-_;return V>Math.PI+Math.PI/2?E-Math.PI*2:V>Math.PI/2?E-Math.PI:V<-Math.PI-Math.PI/2?E+Math.PI*2:V<-Math.PI/2?E+Math.PI:E}const I=(E,_)=>{const V=new q().setFromEuler(E);return _.applyQuaternion(V),_.dot(new R(0,1,0))>0};let r=new A;switch(P.id){case 0:p.current.setFromAxisAngle(new R(0,1,0),Math.PI),r=new A(0,Math.PI,0),r.x=v(r.x,a.current.rotation.x),r.y=v(r.y,a.current.rotation.y),r.z=v(r.z,a.current.rotation.z),I(r,new R(0,1,0))||(r.z+=Math.PI);break;case 1:p.current.setFromAxisAngle(new R(1,0,0),-Math.PI/2),r=new A(-Math.PI/2,0,0),r.x=v(r.x,a.current.rotation.x),r.y=v(r.y,a.current.rotation.y),r.z=v(r.z,a.current.rotation.z),I(r,new R(0,0,1))||(r.y+=Math.PI);break;case 2:p.current.setFromAxisAngle(new R(1,0,0),Math.PI/2),r=new A(Math.PI/2,0,0),r.x=v(r.x,a.current.rotation.x),r.y=v(r.y,a.current.rotation.y),r.z=v(r.z,a.current.rotation.z),I(r,new R(0,0,-1))||(r.y+=Math.PI);break;case 3:p.current.setFromAxisAngle(new R(0,1,0),-Math.PI/2),r=new A(0,-Math.PI/2,0),r.x=v(r.x,a.current.rotation.x),r.y=v(r.y,a.current.rotation.y),r.z=v(r.z,a.current.rotation.z),I(r,new R(0,1,0))||(r.z-=Math.PI/2,r.y+=Math.PI,r.x+=Math.PI/2);break;case 4:p.current.set(0,0,0,1),r=new A(0,0,0);break;case 5:p.current.setFromAxisAngle(new R(0,1,0),Math.PI/2),r=new A(0,Math.PI/2,0),r.x=v(r.x,a.current.rotation.x),r.y=v(r.y,a.current.rotation.y),r.z=v(r.z,a.current.rotation.z),I(r,new R(0,1,0))||(r.z+=Math.PI/2,r.y+=Math.PI,r.x+=Math.PI/2);break;default:r=new A(0,0,0)}z.start({from:{springRotation:[a.current.rotation.x,a.current.rotation.y,a.current.rotation.z]},to:{springRotation:[r.x,r.y,r.z]}})},te=f.children.find(P=>P.name==="Camera Parent");if(te)te.add(d);else throw new Error("Camera parent not found in the scene");const[ie,se]=K(()=>({cameraPosition:[0,0,0],backgroundColor:"#ffffff",config:{mass:1,tension:300,friction:80,precision:.01,clamp:!0}})),xe=P=>{x(b[P]),se.start({to:{cameraPosition:[0,.5,-2],backgroundColor:"#000000"},onStart:()=>{y.current=!0},onRest:()=>{y.current=!1,s(!0)}})},he=()=>{s(!1),x(null),se.start({to:{cameraPosition:[0,0,0],backgroundColor:"#ffffff"},onStart:()=>{y.current=!0},onRest:()=>{y.current=!1,L()}})};return H(()=>{if(m||L(),y.current){const[P,v,I]=ie.cameraPosition.get();te.position.set(P,v,I),f.background=new Ue(ie.backgroundColor.get())}}),t.useEffect(()=>(window.addEventListener("pointerdown",G),window.addEventListener("pointerup",N),window.addEventListener("pointermove",O),L(),()=>{window.removeEventListener("pointerdown",G),window.removeEventListener("pointerup",N),window.removeEventListener("pointermove",O)}),[]),g.jsxs(g.Fragment,{children:[!m&&g.jsx(ge.group,{ref:a,rotation:U.springRotation,children:h.map(P=>{const{node:v,texture:I,header:r,tagline:E}=b[P];return g.jsx(rt,{node:v,texture:I,header:r,tagline:E,inTransition:y.current,onEnterPortal:()=>xe(P)},P)})}),m&&i&&g.jsxs(g.Fragment,{children:[g.jsx(Be,{onClick:he,children:"Back"}),g.jsx("group",{position:(le=a.current)==null?void 0:le.position,rotation:(ue=a.current)==null?void 0:ue.rotation,children:g.jsx("group",{position:i.node.position,rotation:i.node.rotation,children:g.jsxs(et,{portalId:i.id,maxScroll:1e3,children:[g.jsx(nt,{header:i.header,tagline:i.tagline||""}),g.jsx("mesh",{geometry:i.node.geometry,position:[0,-.5,-3],scale:1.5,children:g.jsx("meshBasicMaterial",{map:i.texture})})]})})})]})]})};function rt({node:o,texture:e,header:n,inTransition:d,onEnterPortal:f,tagline:c=""}){const{geometry:i,position:x,rotation:m}=o,[s,h]=t.useState(!1),[l,u]=t.useState(!1),[y,a]=t.useState(!1),[p,S]=t.useState(0);Ne(y);const{scale:k}=K({scale:y?1.1:1,config:{mass:2,tension:400,friction:40}}),{textOpacity:F}=K({textOpacity:l?1:0,config:{duration:500},onStart:()=>{h(!0)},onRest:()=>{h(!1)}});H(()=>{s&&S(F.get())});const M=n===`Sport &
Communication`?.3:.4,w=n===`Sport &
Communication`?1.2:1.4;return g.jsx(ge.mesh,{geometry:i,position:x,rotation:m,scale:k,onPointerOver:()=>{a(!0),u(!0)},onPointerOut:()=>{a(!1),d||u(!1)},onClick:()=>{u(!0),a(!1),f()},children:g.jsxs(Je,{children:[g.jsx(Z,{font:`${J||""}/fonts/RedHatDisplay-SemiBold.ttf`,color:"#ffffff",anchorY:"top",anchorX:"left",position:[-1.1,2,1],fontSize:M,children:n}),c&&g.jsx(Z,{font:`${J||""}/fonts/RedHatDisplay-Regular.ttf`,color:"#ffffff",fillOpacity:p,anchorY:"top",anchorX:"left",position:[-1,w,1],fontSize:.1,maxWidth:2,lineHeight:1.2,overflowWrap:"break-word",children:c}),g.jsx("mesh",{geometry:i,position:[0,-.5,-3],scale:1.5,children:g.jsx("meshBasicMaterial",{map:e})})]})})}const nt=({header:o,tagline:e})=>{const n=o===`Sport &
Communication`?.3:.4,d=o===`Sport &
Communication`?1.2:1.4;return g.jsxs(g.Fragment,{children:[g.jsx(Z,{font:`${J||""}/fonts/RedHatDisplay-SemiBold.ttf`,color:"#ffffff",anchorY:"top",anchorX:"left",position:[-1.1,2,1],fontSize:n,children:o}),g.jsx(Z,{font:`${J||""}/fonts/RedHatDisplay-Regular.ttf`,color:"#ffffff",anchorY:"top",anchorX:"left",position:[-1,d,1],fontSize:.1,maxWidth:2,lineHeight:1.2,overflowWrap:"break-word",children:e})]})},ot=()=>{const{camera:o}=D(),e=t.useRef(new R),n=t.useRef(o.position.clone()),d=.01,f=1.5,c=.02,i=t.useRef(0),x=t.useRef(0);return t.useEffect(()=>{const m=h=>{const l=h.movementX*.01||0,u=h.movementY*.01||0;e.current.x=$.clamp(e.current.x+l,-1.5,f),e.current.y=$.clamp(e.current.y-u,-1.5,f)},s=h=>{if(h.gamma===null||h.beta===null)return;const l=h.gamma-i.current,u=h.beta-x.current;e.current.x=$.clamp(e.current.x+l*.06,-1.5,f),e.current.y=$.clamp(e.current.y-u*.06,-1.5,f),i.current=h.gamma,x.current=h.beta};return window.addEventListener("mousemove",m),window.addEventListener("deviceorientation",s),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("deviceorientation",s)}},[]),H(()=>{o.position.lerp(n.current.clone().add(e.current),d),e.current.lerp(new R(0,0,0),c),o.lookAt(0,0,0)}),null},at=()=>{const{scene:o}=D(),e=new _e;return e.position.set(0,0,0),e.name="Camera Parent",o.add(e),null},it={cubeModelPath:Y+"/models/npgCube.glb",rotationSpeed:.01,portalData:[{meshId:"design",texturePath:Y+"/images/design.jpg",normal:new R(0,0,-1),header:"Design",tagline:`NPG Design utvikler kreative løsninger innen konseptutvikling, 3D-visualisering, grafisk design og merkevareopplevelser.

Vårt designteam støtter alt vi gjør her på NPG. La oss skape visuelle og strategiske løsninger som hever din merkevare.`},{meshId:"event",texturePath:Y+"/images/event.jpg",normal:new R(0,-1,0),header:"Event",tagline:`I NPG Event skaper vi ikke bare event; vi skaper minneverdige opplevelser som binder mennesker og ideer sammen. 

Vi utvikler unike eventer og møteplasser som skaper meningsfulle opplevelser som fremmer kunnskap, innovasjon, samarbeid og bærekraft. Ditt eventbyrå for næringslivet!`},{meshId:"exibition",texturePath:Y+"/images/exibition.jpg",normal:new R(0,1,0),header:"Exibition",tagline:`Bli synlig med NPG Exhibition. Vi er det mest erfarne byrået i Norge innen messer, med over 30 års ekspertise nasjonalt og internasjonalt. 

Planlegger du å delta på messer i Norge eller internasjonalt? Benytt NPG, Norges ledende byrå innen messestands.`},{meshId:"interactive",texturePath:Y+"/images/interactive.jpg",normal:new R(1,0,0),header:"Interactive",tagline:`NPG Interactive skaper engasjerende digitale opplevelser med teknologi og kreativitet, og tilbyr nye måter å oppleve produkter og tjenester på. 

Hos NPG Interactive kombinerer vi teknologi og kreativitet for å skape engasjerende, digitale opplevelser.`},{meshId:"marketing",texturePath:Y+"/images/marketing.jpg",normal:new R(0,0,1),header:"Marketing",tagline:`NPG Marketing er et markedsføringsbyrå som tilbyr skreddersydde strategier og kreative løsninger for å styrke din merkevares synlighet og engasjement. 

NPG Marketing bistår bedrifter med markedsføringsstrategier, innholdsproduksjon og digitale kampanjer.`},{meshId:"sport",texturePath:Y+"/images/sport.jpg",normal:new R(-1,0,0),header:`Sport &
Communication`,tagline:`NPG Sport & Communication er Norges ledende sportsbyrå. Vi skal være det fremste rådgivermiljøet for virksomheter, profiler og forbund. 

NPG Sport & Communication er Norges ledende sportsbyrå. Vi rådgir virksomheter, profiler og forbund i skjæringspunktet mellom idrett og næringsliv, både nasjonalt og internasjonalt – og tar også oppdrag utenfor idretten.`}]},mt=()=>{const[o,e]=t.useState(!1),n=()=>{e(d=>!d)};return g.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden"},children:[g.jsxs(Ae,{camera:{position:new R(0,0,6),fov:50,near:.2,far:20},gl:{powerPreference:"high-performance",alpha:!1,antialias:!0,shadowMapEnabled:!1},shadows:!1,children:[g.jsx("color",{attach:"background",args:["#ffffff"]}),g.jsx(Ge,{frameSize:3}),g.jsx(at,{}),g.jsx(tt,{...it}),g.jsx(ot,{}),o&&g.jsx(Le,{})]}),g.jsx("div",{id:"ui-overlay",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"},children:g.jsx(Oe,{showStats:o,onToggleStats:n})})]})};export{mt as default};
