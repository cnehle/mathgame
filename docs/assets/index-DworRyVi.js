var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=[{name:`star`,question:`Сколько звёздочек ты видишь?`,draw(e,t,n){return`<g transform="translate(${e},${t})">
        <g style="animation:popIn .4s ${n}s cubic-bezier(.34,1.56,.64,1) both,floatY 2.6s ${n}s ease-in-out infinite">
          <polygon points="0,-26 6,-10 24,-10 10,3 15,22 0,10 -15,22 -10,3 -24,-10 -6,-10"
            fill="#FFD93D" stroke="#c8880a" stroke-width="2.5"/>
          <ellipse cx="-5" cy="-9" rx="6" ry="5" fill="rgba(255,255,255,.4)" transform="rotate(-30,-5,-9)"/>
        </g>
      </g>`}},{name:`apple`,question:`Сколько яблок ты видишь?`,draw(e,t,n){return`<g transform="translate(${e},${t})">
        <g style="animation:popIn .4s ${n}s cubic-bezier(.34,1.56,.64,1) both,floatY 2.9s ${n}s ease-in-out infinite">
          <ellipse cx="0" cy="5" rx="20" ry="22" fill="#e74c3c" stroke="#922b21" stroke-width="2.5"/>
          <ellipse cx="-6" cy="-1" rx="7" ry="10" fill="rgba(255,255,255,.2)"/>
          <line x1="0" y1="-17" x2="0" y2="-27" stroke="#4a2c0a" stroke-width="3.5" stroke-linecap="round"/>
          <ellipse cx="7" cy="-25" rx="8" ry="6" fill="#27ae60" stroke="#1a6e3c" stroke-width="1.5" transform="rotate(-22,7,-25)"/>
        </g>
      </g>`}},{name:`balloon`,question:`Сколько шариков ты видишь?`,draw(e,t,n){return`<g transform="translate(${e},${t})">
        <g style="animation:popIn .4s ${n}s cubic-bezier(.34,1.56,.64,1) both,floatY 3.1s ${n}s ease-in-out infinite">
          <ellipse cx="0" cy="-5" rx="18" ry="22" fill="#C3B1E1" stroke="#7d5db5" stroke-width="2.5"/>
          <ellipse cx="-6" cy="-13" rx="6" ry="8" fill="rgba(255,255,255,.28)"/>
          <polygon points="0,17 -5,23 5,23" fill="#7d5db5"/>
          <path d="M0,23 Q6,29 0,37 Q-6,45 0,51" fill="none" stroke="#7d5db5" stroke-width="2"/>
        </g>
      </g>`}},{name:`fish`,question:`Сколько рыбок ты видишь?`,draw(e,t,n){return`<g transform="translate(${e},${t})">
        <g style="animation:popIn .4s ${n}s cubic-bezier(.34,1.56,.64,1) both,floatY 2.3s ${n}s ease-in-out infinite">
          <ellipse cx="-2" cy="0" rx="22" ry="14" fill="#6BFFB8" stroke="#1a7a56" stroke-width="2.5"/>
          <polygon points="20,0 33,-12 33,12" fill="#6BFFB8" stroke="#1a7a56" stroke-width="2.5"/>
          <circle cx="-12" cy="-4" r="4" fill="#1a7a56"/>
          <circle cx="-12" cy="-4" r="1.8" fill="white"/>
          <path d="M-4,-9 Q4,-14 12,-9" fill="none" stroke="#1a7a56" stroke-width="2"/>
        </g>
      </g>`}},{name:`flower`,question:`Сколько цветочков ты видишь?`,draw(e,t,n){return`<g transform="translate(${e},${t})">
        <g style="animation:popIn .4s ${n}s cubic-bezier(.34,1.56,.64,1) both,floatY 3.3s ${n}s ease-in-out infinite">
          <ellipse cx="0"   cy="-20" rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2"/>
          <ellipse cx="19"  cy="-6"  rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2" transform="rotate(72,19,-6)"/>
          <ellipse cx="12"  cy="16"  rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2" transform="rotate(144,12,16)"/>
          <ellipse cx="-12" cy="16"  rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2" transform="rotate(216,-12,16)"/>
          <ellipse cx="-19" cy="-6"  rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2" transform="rotate(288,-19,-6)"/>
          <circle cx="0" cy="0" r="12" fill="#FFD93D" stroke="#c8880a" stroke-width="2.5"/>
          <circle cx="-3" cy="-3" r="4" fill="rgba(255,255,255,.45)"/>
        </g>
      </g>`}},{name:`rocket`,question:`Сколько ракет ты видишь?`,draw(e,t,n){return`<g transform="translate(${e},${t})">
        <g style="animation:popIn .4s ${n}s cubic-bezier(.34,1.56,.64,1) both,floatY 2.1s ${n}s ease-in-out infinite">
          <ellipse cx="0" cy="-10" rx="10" ry="18" fill="#a29bfe" stroke="#6c5ce7" stroke-width="2"/>
          <polygon points="0,-28 -10,-10 10,-10" fill="#6c5ce7"/>
          <rect x="-4" y="-6" width="8" height="10" rx="3" fill="#74b9ff"/>
          <polygon points="-10,8 -18,20 -4,14" fill="#fd79a8"/>
          <polygon points="10,8 18,20 4,14" fill="#fd79a8"/>
          <ellipse cx="0" cy="18" rx="5" ry="8" fill="#fdcb6e" opacity=".9">
            <animate attributeName="ry" values="8;12;8" dur="0.3s" repeatCount="indefinite"/>
          </ellipse>
        </g>
      </g>`}}];function d(){return u[Math.floor(Math.random()*u.length)]}var f=600,p=28,m=50,h=24,g=p*2+h;function _(e,t,n,r=0){let i=t<=3?t:3,a=Math.ceil(t/i),o=a*g+m*2;e.setAttribute(`viewBox`,`0 0 ${f} ${o}`),e.removeAttribute(`width`),e.removeAttribute(`height`);let s=``;for(let e=0;e<t;e++){let o=Math.floor(e/i),c=e%i,l=(f-((o===a-1&&t%i!==0?t%i:i)*g-h))/2+p+c*g,u=m+o*g+p,d=(e*.08).toFixed(2);if(s+=n.draw(l,u,Number(d)),e>=t-r){let t=p-2,n=(e*.08+.35).toFixed(2);s+=`
        <line x1="${l-t}" y1="${u-t}" x2="${l+t}" y2="${u+t}"
          stroke="#FF6B9D" stroke-width="6" stroke-linecap="round"
          style="animation:popIn .3s ${n}s both"/>
        <line x1="${l+t}" y1="${u-t}" x2="${l-t}" y2="${u+t}"
          stroke="#FF6B9D" stroke-width="6" stroke-linecap="round"
          style="animation:popIn .3s ${n}s both"/>`}}e.innerHTML=s}var v={easy:{label:`Easy`,labelRu:`Лёгкий`,maxCount:5,useAddition:!1,useSubtraction:!1,timeLimit:null,drawingMode:!1},medium:{label:`Medium`,labelRu:`Средний`,maxCount:8,useAddition:!0,useSubtraction:!1,timeLimit:90,drawingMode:!1},hard:{label:`Hard`,labelRu:`Сложный`,maxCount:10,useAddition:!0,useSubtraction:!0,timeLimit:60,drawingMode:!1},drawing:{label:`Drawing`,labelRu:`Рисование`,maxCount:9,useAddition:!1,useSubtraction:!1,timeLimit:null,drawingMode:!0}},y=class{svgEl;constructor(e){this.svgEl=e}generate(e,t){let n=v[t];return n.drawingMode||!n.useAddition||e<3?this.makeCount(e,n.maxCount):!n.useSubtraction||e<6?Math.random()<.5?this.makeAdd(e,n.maxCount):this.makeCount(e,n.maxCount):Math.random()<.5?this.makeSub(e,n.maxCount):this.makeAdd(e,n.maxCount)}makeCount(e,t){let n=x(e<3?1:2,Math.min(t,e<3?5:e<6?8:9)),r=d();return _(this.svgEl,n,r),{text:r.question,answer:n}}makeAdd(e,t){let n=Math.min(t,e<6?7:10),r=x(1,Math.floor(n/2)),i=x(1,n-r),a=d();return _(this.svgEl,r+i,a),{text:`${r} + ${i} = ?`,answer:r+i}}makeSub(e,t){let n=x(4,Math.min(t,e<8?8:10)),r=x(1,n-1),i=d();return _(this.svgEl,n,i,r),{text:`${n} − ${r} = ?`,answer:n-r}}};function b(e){let t=[];for(;t.length<3;){let n=x(Math.max(0,e-3),Math.min(10,e+3));n!==e&&!t.includes(n)&&t.push(n)}return S([e,...t])}function x(e,t){return Math.floor(Math.random()*(t-e+1))+e}function S(e){return[...e].sort(()=>Math.random()-.5)}var C=class{state={x:0,y:0,normX:0,normY:0};listeners=[];rafId=0;targetNormX=0;targetNormY=0;currentNormX=0;currentNormY=0;constructor(){window.addEventListener(`mousemove`,this.onMouseMove),this.tick()}onMouseMove=e=>{this.state.x=e.clientX,this.state.y=e.clientY,this.targetNormX=e.clientX/window.innerWidth*2-1,this.targetNormY=e.clientY/window.innerHeight*2-1};tick=()=>{let e=.06;this.currentNormX+=(this.targetNormX-this.currentNormX)*e,this.currentNormY+=(this.targetNormY-this.currentNormY)*e,this.state.normX=this.currentNormX,this.state.normY=this.currentNormY,this.listeners.forEach(e=>e(this.state)),this.rafId=requestAnimationFrame(this.tick)};subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}destroy(){window.removeEventListener(`mousemove`,this.onMouseMove),cancelAnimationFrame(this.rafId)}},w=class{starGroup;moon;clouds;unsub=null;constructor(e,t){this.starGroup=e.querySelector(`#star-g`),this.moon=e.querySelector(`#moon`),this.clouds=Array.from(e.querySelectorAll(`.cloud`)),this.unsub=t.subscribe(({normX:e,normY:t})=>{this.starGroup&&this.starGroup.setAttribute(`transform`,`translate(${e*12},${t*8})`),this.moon&&(this.moon.setAttribute(`cx`,String(880+e*30)),this.moon.setAttribute(`cy`,String(72+t*20))),this.clouds.forEach((n,r)=>{let i=r%2==0?-18:-12;n.setAttribute(`transform`,`translate(${e*i},${t*5})`)})})}destroy(){this.unsub?.()}},T=class{svg;particles=[];positions=[];maxParticles=12;rafId=0;colors=[`#FFD93D`,`#FF6B9D`,`#6BFFB8`,`#C3B1E1`,`#FF8C69`];constructor(){let e=`http://www.w3.org/2000/svg`;this.svg=document.createElementNS(e,`svg`),this.svg.style.cssText=`position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:999;overflow:visible;`,document.body.appendChild(this.svg);for(let t=0;t<this.maxParticles;t++){let n=document.createElementNS(e,`circle`);n.setAttribute(`r`,String(6-t*.4)),n.setAttribute(`fill`,this.colors[t%this.colors.length]),n.style.opacity=`0`,this.svg.appendChild(n),this.particles.push(n),this.positions.push({x:0,y:0})}window.addEventListener(`mousemove`,this.onMove),this.animate()}onMove=e=>{this.positions.unshift({x:e.clientX,y:e.clientY}),this.positions.length>this.maxParticles&&this.positions.pop()};animate=()=>{this.particles.forEach((e,t)=>{let n=this.positions[t];n&&(e.setAttribute(`cx`,String(n.x)),e.setAttribute(`cy`,String(n.y)),e.style.opacity=String(1-t/this.maxParticles))}),this.rafId=requestAnimationFrame(this.animate)};destroy(){window.removeEventListener(`mousemove`,this.onMove),cancelAnimationFrame(this.rafId),this.svg.remove()}},E=class{container;isAnimating=!1;enabled=!1;onScrollCallback=null;wheelHandler;touchStartY=0;touchHandler;touchEndHandler;constructor(e){this.container=e,this.wheelHandler=e=>{e.deltaY>30&&this.triggerNext()},this.touchHandler=e=>{this.touchStartY=e.touches[0].clientY},this.touchEndHandler=e=>{this.touchStartY-e.changedTouches[0].clientY>40&&this.triggerNext()},window.addEventListener(`wheel`,this.wheelHandler,{passive:!0}),window.addEventListener(`touchstart`,this.touchHandler,{passive:!0}),window.addEventListener(`touchend`,this.touchEndHandler,{passive:!0})}onNext(e){this.onScrollCallback=e}triggerNext(){this.isAnimating||!this.onScrollCallback||this.enabled&&this.onScrollCallback()}async transition(e){this.isAnimating||=(this.isAnimating=!0,this.container.style.transition=`transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.35s`,this.container.style.transform=`translateY(-40px)`,this.container.style.opacity=`0`,await te(350),e(),this.container.style.transition=`none`,this.container.style.transform=`translateY(40px)`,this.container.style.opacity=`0`,this.container.offsetHeight,this.container.style.transition=`transform 0.4s cubic-bezier(.34,1.2,.64,1), opacity 0.4s`,this.container.style.transform=`translateY(0)`,this.container.style.opacity=`1`,await te(400),!1)}destroy(){window.removeEventListener(`wheel`,this.wheelHandler),window.removeEventListener(`touchstart`,this.touchHandler),window.removeEventListener(`touchend`,this.touchEndHandler)}};function D(){let e=`http://www.w3.org/2000/svg`,t=document.createElementNS(e,`svg`);t.setAttribute(`viewBox`,`0 0 400 200`),t.style.cssText=`position:fixed;top:20%;left:50%;transform:translateX(-50%);pointer-events:none;z-index:50;width:min(400px,90vw);`;let n=[`#FFD93D`,`#FF6B9D`,`#6BFFB8`,`#C3B1E1`,`#FF8C69`];for(let r=0;r<14;r++){let i=document.createElementNS(e,`polygon`),a=ne(30,370),o=ne(40,160),s=ne(8,16),c=[];for(let e=0;e<10;e++){let t=Math.PI/5*e-Math.PI/2,n=e%2==0?s:s*.45;c.push(`${a+Math.cos(t)*n},${o+Math.sin(t)*n}`)}i.setAttribute(`points`,c.join(` `)),i.setAttribute(`fill`,n[r%n.length]),i.setAttribute(`opacity`,`0.9`),i.style.cssText=`animation:celebrate ${ne(7,13)/10}s ${(r*.06).toFixed(2)}s ease-out both;`,t.appendChild(i)}document.body.appendChild(t),setTimeout(()=>t.remove(),1600)}var ee=class{bar;startTime=0;duration=0;rafId=0;onExpire=null;active=!1;constructor(e){this.bar=e}start(e,t){this.stop(),this.duration=e*1e3,this.startTime=performance.now(),this.onExpire=t,this.active=!0,this.bar.style.display=`block`,this.tick()}stop(){this.active=!1,cancelAnimationFrame(this.rafId),this.bar.style.width=`100%`}hide(){this.stop(),this.bar.style.display=`none`}tick=()=>{if(!this.active)return;let e=performance.now()-this.startTime,t=Math.min(e/this.duration,1),n=1-t;if(this.bar.style.width=`${n*100}%`,n>.5?this.bar.style.background=`#6BFFB8`:n>.25?this.bar.style.background=`#FFD93D`:this.bar.style.background=`#FF6B9D`,t>=1){this.active=!1,this.onExpire?.();return}this.rafId=requestAnimationFrame(this.tick)}};function te(e){return new Promise(t=>setTimeout(t,e))}function ne(e,t){return Math.floor(Math.random()*(t-e+1))+e}var re=[{name:`star`,fill:`#FFD93D`,stroke:`#c8880a`,points:[[50,8],[58,32],[82,32],[63,47],[70,72],[50,57],[30,72],[37,47],[18,32],[42,32],[50,8],[50,8],[50,8],[50,8],[50,8],[50,8]]},{name:`heart`,fill:`#FF6B9D`,stroke:`#8a1040`,points:[[50,80],[30,62],[15,48],[15,33],[25,22],[38,22],[50,35],[62,22],[75,22],[85,33],[85,48],[70,62],[50,80],[50,80],[50,80],[50,80]]},{name:`hexagon`,fill:`#6BFFB8`,stroke:`#1a6a46`,points:[[50,10],[76,25],[76,75],[50,90],[24,75],[24,25],[50,10],[50,10],[50,10],[50,10],[50,10],[50,10],[50,10],[50,10],[50,10],[50,10]]},{name:`flower`,fill:`#FF8C69`,stroke:`#c24d1e`,points:[[50,15],[58,30],[72,22],[65,36],[82,38],[70,48],[78,62],[62,58],[58,75],[50,63],[42,75],[38,58],[22,62],[30,48],[18,38],[35,36]]},{name:`diamond`,fill:`#C3B1E1`,stroke:`#5a3e8a`,points:[[50,8],[70,30],[92,50],[70,70],[50,92],[30,70],[8,50],[30,30],[50,8],[50,8],[50,8],[50,8],[50,8],[50,8],[50,8],[50,8]]},{name:`cloud`,fill:`#a29bfe`,stroke:`#6c5ce7`,points:[[30,65],[18,65],[10,57],[10,48],[18,40],[22,40],[25,33],[33,28],[42,28],[48,33],[52,28],[62,26],[72,30],[76,40],[80,40],[88,48]]}];function ie(e,t,n){return e+(t-e)*n}function ae(e){return e<.5?2*e*e:-1+(4-2*e)*e}function oe(e){return e.map((e,t)=>`${t===0?`M`:`L`}${e[0]},${e[1]}`).join(` `)+` Z`}function se(e,t,n){let r=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),o=parseInt(t.slice(1,3),16),s=parseInt(t.slice(3,5),16),c=parseInt(t.slice(5,7),16);return`#${Math.round(ie(r,o,n)).toString(16).padStart(2,`0`)}${Math.round(ie(i,s,n)).toString(16).padStart(2,`0`)}${Math.round(ie(a,c,n)).toString(16).padStart(2,`0`)}`}var ce=class{pathEl;currentShapeIdx=0;rafId=0;constructor(e){let t=`http://www.w3.org/2000/svg`,n=document.createElementNS(t,`circle`);n.setAttribute(`cx`,`50`),n.setAttribute(`cy`,`50`),n.setAttribute(`r`,`46`),n.setAttribute(`fill`,`rgba(255,255,255,0.06)`),e.appendChild(n),this.pathEl=document.createElementNS(t,`path`),this.pathEl.setAttribute(`fill`,re[0].fill),this.pathEl.setAttribute(`stroke`,re[0].stroke),this.pathEl.setAttribute(`stroke-width`,`2`),this.pathEl.setAttribute(`d`,oe(re[0].points)),e.appendChild(this.pathEl)}async morphToRandom(){let e=(this.currentShapeIdx+1+Math.floor(Math.random()*(re.length-1)))%re.length;await this.morphTo(e),this.currentShapeIdx=e}morphTo(e){return new Promise(t=>{let n=re[this.currentShapeIdx],r=re[e],i=performance.now();cancelAnimationFrame(this.rafId);let a=e=>{let o=Math.min((e-i)/600,1),s=ae(o),c=n.points.map((e,t)=>[ie(e[0],r.points[t][0],s),ie(e[1],r.points[t][1],s)]);this.pathEl.setAttribute(`d`,oe(c)),this.pathEl.setAttribute(`fill`,se(n.fill,r.fill,s)),this.pathEl.setAttribute(`stroke`,se(n.stroke,r.stroke,s)),o<1?this.rafId=requestAnimationFrame(a):t()};this.rafId=requestAnimationFrame(a)})}destroy(){cancelAnimationFrame(this.rafId)}},le=1e-7,ue=1e-4,de=class{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}},fe=class{refCount(e){return pe(`refCount`)}incRef(e){return pe(`incRef`)}timerAvailable(){return!0}time(e){return pe(`time`)}read(e){return pe(`read`)}readSync(e){return pe(`readSync`)}readToGPU(e,t){return pe(`readToGPU`)}numDataIds(){return pe(`numDataIds`)}disposeData(e,t){return pe(`disposeData`)}write(e,t,n){return pe(`write`)}move(e,t,n,r,i){return pe(`move`)}createTensorFromGPUData(e,t,n){return pe(`createTensorFromGPUData`)}memory(){return pe(`memory`)}floatPrecision(){return pe(`floatPrecision`)}epsilon(){return this.floatPrecision()===32?le:ue}dispose(){return pe(`dispose`)}};function pe(e){throw Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function me(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,_e(e,t,n)}function he(e,t,n){return Math.max(e,Math.min(t,n))}function ge(e){return e%2==0?e:e+1}function _e(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function ve(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function O(e,t){if(!e)throw Error(typeof t==`string`?t:t())}function ye(e,t,n=``){O(xe(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function be(e){O(e!=null,()=>`The input to the tensor constructor must be a non-null value.`)}function k(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function xe(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Se(e){return e%1==0}function Ce(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function we(e){let t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return me(t),t}function Te(e,t){return t<=e.length?e:e+` `.repeat(t-e.length)}function Ee(e,t=e=>0,n,r){return new Promise((i,a)=>{let o=0,s=()=>{if(e()){i();return}o++;let c=t(o);if(n!=null&&o>=n){a();return}r==null?setTimeout(s,c):r(s,c)};s()})}function De(e,t){let n=1,r=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)n*=e[t];else if(e[t]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${t}`);r=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(r===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);let i=e.slice();return i[r]=t/n,i}function Oe(e,t){let n=t.length;return e=e==null?t.map((e,t)=>t):[].concat(e),O(e.every(e=>e>=-n&&e<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),O(e.every(e=>Se(e)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?n+e:e)}function ke(e,t){let n=[],r=[],i=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||i?null:Oe(t,e).sort(),o=0;for(let t=0;t<e.length;++t){if(a!=null){if(a[o]===t&&e[t]!==1)throw Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(a[o]==null||a[o]>t)&&e[t]===1&&(n.push(e[t]),r.push(t)),a[o]<=t&&o++}e[t]!==1&&(n.push(e[t]),r.push(t))}return{newShape:n,keptDims:r}}function Ae(e,t){return je(e,t)}function je(e,t){let n=null;if(e==null||e===`float32`)n=new Float32Array(t);else if(e===`int32`)n=new Int32Array(t);else if(e===`bool`)n=new Uint8Array(t);else if(e===`string`)n=Array(t);else throw Error(`Unknown data type ${e}`);return n}function Me(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function Ne(e){return e===`bool`||e===`complex64`||e===`float32`||e===`int32`||e===`string`}function Pe(e,t){return!(t===`complex64`||t===`float32`&&e!==`complex64`||t===`int32`&&e!==`float32`&&e!==`complex64`||t===`bool`&&e===`bool`)}function Fe(e){if(e===`float32`||e===`int32`)return 4;if(e===`complex64`)return 8;if(e===`bool`)return 1;throw Error(`Unknown dtype ${e}`)}function Ie(e){if(e==null)return 0;let t=0;return e.forEach(e=>t+=e.length),t}function Le(e){return typeof e==`string`||e instanceof String}function Re(e){return typeof e==`boolean`}function ze(e){return typeof e==`number`}function Be(e){return Array.isArray(e)?Be(e[0]):e instanceof Float32Array?`float32`:e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?`int32`:ze(e)?`float32`:Le(e)?`string`:Re(e)?`bool`:`float32`}function Ve(e){return!!(e&&e.constructor&&e.call&&e.apply)}function He(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function A(e){let t=e.length;if(t<2)return[];let n=Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function Ue(e,t,n,r=!1){let i=[];if(t.length===1){let a=t[0]*(r?2:1);for(let t=0;t<a;t++)i[t]=n[e+t]}else{let a=t[0],o=t.slice(1),s=o.reduce((e,t)=>e*t)*(r?2:1);for(let t=0;t<a;t++)i[t]=Ue(e+t*s,o,n,r)}return i}function We(e,t,n=!1){if(e.length===0)return t[0];let r=e.reduce((e,t)=>e*t)*(n?2:1);if(r===0)return[];if(r!==t.length)throw Error(`[${e}] does not match the input size ${t.length}${n?` for a complex tensor`:``}.`);return Ue(0,e,t,n)}function Ge(e,t){if(Array.isArray(e))return e;if(t===`float32`)return e instanceof Float32Array?e:new Float32Array(e);if(t===`int32`)return e instanceof Int32Array?e:new Int32Array(e);if(t===`bool`||t===`string`)return Uint8Array.from(new Int32Array(e));throw Error(`Unknown dtype ${t}`)}function Ke(e,t){let n=qe(e,t);for(let e=0;e<n.length;e++)n[e]=1;return n}function qe(e,t){if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`)return new Uint8Array(e);throw Error(`Unknown data type ${t}`)}function Je(e,t){let n=e.reduce((e,t)=>e*t,1);if(t==null||t===`float32`)return We(e,new Float32Array(n));if(t===`int32`)return We(e,new Int32Array(n));if(t===`bool`)return We(e,new Uint8Array(n));throw Error(`Unknown data type ${t}`)}function Ye(e){e.forEach(t=>{O(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function Xe(e,t,n){if(t===0)return 0;if(t===1)return e[0];let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=n[t]*e[t];return r}function Ze(e,t,n){if(t===0)return[];if(t===1)return[e];let r=Array(t);for(let t=0;t<r.length-1;++t)r[t]=Math.floor(e/n[t]),e-=r[t]*n[t];return r[r.length-1]=e,r}function Qe(e){return e&&e.then&&typeof e.then==`function`}var $e=`tfjsflags`,et=class{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=tt,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(j().getBool(`IS_TEST`)||j().getBool(`PROD`)||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){let t=this.urlFlags[e];j().getBool(`IS_TEST`)||j().getBool(`PROD`)||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if(Qe(t))throw Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(this.global===void 0||this.global.location===void 0||this.global.location.search===void 0)return;let e=this.getQueryParams(this.global.location.search);$e in e&&e[$e].split(`,`).forEach(e=>{let[t,n]=e.split(`:`);this.urlFlags[t]=rt(t,n)})}};function tt(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...n)=>(nt(t,n[0],n[1]),n.join(`=`))),t}function nt(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||``)}function rt(e,t){let n=t.toLowerCase();return n===`true`||n===`false`?n===`true`:`${+n}`===n?+n:t}function j(){return it}var it=null;function at(e){it=e}var ot;function st(){if(ot==null){let e;if(typeof window<`u`)e=window;else if(typeof global<`u`)e=global;else if(typeof process<`u`)e=process;else if(typeof self<`u`)e=self;else throw Error(`Could not find a global object`);ot=e}return ot}function ct(){let e=st();return e._tfGlobals??=new Map,e._tfGlobals}function lt(e,t){let n=ct();if(n.has(e))return n.get(e);{let r=t();return n.set(e,r),n.get(e)}}var ut=`Acos`,dt=`Acosh`,ft=`AddN`,pt=`ArgMax`,mt=`ArgMin`,ht=`Asin`,gt=`Asinh`,_t=`Atan`,vt=`Atanh`,yt=`Atan2`,bt=`AvgPool`,xt=`AvgPoolGrad`,St=`AvgPool3D`,Ct=`AvgPool3DGrad`,wt=`BatchMatMul`,Tt=`BatchToSpaceND`,Et=`Bincount`,Dt=`BitwiseAnd`,Ot=`BroadcastTo`,kt=`BroadcastArgs`,At=`Cast`,jt=`Ceil`,Mt=`ClipByValue`,Nt=`Complex`,Pt=`ComplexAbs`,Ft=`Concat`,It=`Conv2D`,Lt=`Conv2DBackpropFilter`,Rt=`Conv2DBackpropInput`,zt=`Conv3D`,Bt=`Conv3DBackpropFilterV2`,Vt=`Conv3DBackpropInputV2`,Ht=`Cosh`,Ut=`Cumprod`,Wt=`Cumsum`,Gt=`CropAndResize`,Kt=`DenseBincount`,qt=`DepthToSpace`,Jt=`DepthwiseConv2dNative`,Yt=`DepthwiseConv2dNativeBackpropFilter`,Xt=`DepthwiseConv2dNativeBackpropInput`,Zt=`Diag`,Qt=`Dilation2D`,$t=`Dilation2DBackpropInput`,en=`Dilation2DBackpropFilter`,tn=`Draw`,nn=`RealDiv`,rn=`Einsum`,an=`EluGrad`,on=`Equal`,sn=`ExpandDims`,cn=`Expm1`,ln=`Fill`,un=`FlipLeftRight`,dn=`Floor`,fn=`FloorDiv`,pn=`FusedBatchNorm`,mn=`GatherV2`,hn=`GatherNd`,gn=`Greater`,_n=`GreaterEqual`,vn=`Identity`,yn=`IFFT`,bn=`Imag`,xn=`IsFinite`,Sn=`IsInf`,Cn=`IsNan`,wn=`LeakyRelu`,Tn=`Less`,En=`LessEqual`,Dn=`LinSpace`,On=`Log1p`,kn=`LogicalAnd`,An=`LogicalNot`,jn=`LogicalOr`,Mn=`LogSoftmax`,Nn=`LRNGrad`,Pn=`Maximum`,Fn=`MaxPool`,In=`MaxPoolGrad`,Ln=`MaxPool3D`,Rn=`MaxPool3DGrad`,zn=`MaxPoolWithArgmax`,Bn=`Mean`,Vn=`Minimum`,Hn=`MirrorPad`,Un=`Multinomial`,Wn=`Multiply`,Gn=`NotEqual`,Kn=`NonMaxSuppressionV3`,qn=`NonMaxSuppressionV4`,Jn=`NonMaxSuppressionV5`,Yn=`OnesLike`,Xn=`OneHot`,Zn=`Pack`,Qn=`PadV2`,$n=`Prelu`,er=`Prod`,tr=`RaggedGather`,nr=`RaggedRange`,rr=`RaggedTensorToTensor`,ir=`Range`,ar=`Real`,or=`Reciprocal`,sr=`Relu`,cr=`Reshape`,lr=`ResizeNearestNeighbor`,ur=`ResizeNearestNeighborGrad`,dr=`ResizeBilinear`,fr=`ResizeBilinearGrad`,pr=`Relu6`,mr=`Reverse`,hr=`Round`,gr=`Rsqrt`,_r=`ScatterNd`,vr=`TensorScatterUpdate`,yr=`SearchSorted`,br=`Select`,xr=`Selu`,Sr=`Slice`,Cr=`Sinh`,wr=`Sign`,Tr=`Sigmoid`,Er=`Softplus`,Dr=`Sqrt`,Or=`SpaceToBatchND`,kr=`SplitV`,Ar=`Softmax`,jr=`SparseFillEmptyRows`,Mr=`SparseReshape`,Nr=`SparseSegmentMean`,Pr=`SparseSegmentSum`,Fr=`SparseToDense`,Ir=`SquaredDifference`,Lr=`Square`,Rr=`StaticRegexReplace`,zr=`StridedSlice`,Br=`StringNGrams`,Vr=`StringSplit`,Hr=`StringToHashBucketFast`,Ur=`Tanh`,Wr=`Tile`,Gr=`TopK`,Kr=`Transform`,qr=`Transpose`,Jr=`Unique`,Yr=`Unpack`,Xr=`UnsortedSegmentSum`,Zr=`ZerosLike`,Qr=`Step`,$r=`FromPixels`,ei=`RotateWithOffset`,ti=`_FusedMatMul`,ni=`FusedConv2D`,ri=`FusedDepthwiseConv2D`;function ii(...e){j().getBool(`IS_TEST`)||j().getBool(`PROD`)||console.warn(...e)}function ai(...e){j().getBool(`IS_TEST`)||j().getBool(`PROD`)||console.log(...e)}var oi=lt(`kernelRegistry`,()=>new Map),si=lt(`gradRegistry`,()=>new Map);function ci(e,t){let n=pi(e,t);return oi.get(n)}function li(e){return si.get(e)}function ui(e){let t=oi.entries(),n=[];for(;;){let{done:r,value:i}=t.next();if(r)break;let[a,o]=i,[s]=a.split(`_`);s===e&&n.push(o)}return n}function di(e){let{kernelName:t,backendName:n}=e,r=pi(t,n);oi.has(r)&&ii(`The kernel '${t}' for backend '${n}' is already registered`),oi.set(r,e)}function fi(e){let{kernelName:t}=e;si.has(t)&&j().getBool(`DEBUG`)&&ii(`Overriding the gradient for '${t}'`),si.set(t,e)}function pi(e,t){return`${t}_${e}`}function mi(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}var hi=l(o(((e,t)=>{t.exports=r;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function r(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}r.prototype.__isLong__,Object.defineProperty(r.prototype,`__isLong__`,{value:!0});function i(e){return(e&&e.__isLong__)===!0}r.isLong=i;var a={},o={};function s(e,t){var n,r,i;return t?(e>>>=0,(i=0<=e&&e<256)&&(r=o[e],r)?r:(n=l(e,(e|0)<0?-1:0,!0),i&&(o[e]=n),n)):(e|=0,(i=-128<=e&&e<128)&&(r=a[e],r)?r:(n=l(e,e<0?-1:0,!1),i&&(a[e]=n),n))}r.fromInt=s;function c(e,t){if(isNaN(e))return t?b:y;if(t){if(e<0)return b;if(e>=g)return T}else{if(e<=-_)return E;if(e+1>=_)return w}return e<0?c(-e,t).neg():l(e%h|0,e/h|0,t)}r.fromNumber=c;function l(e,t,n){return new r(e,t,n)}r.fromBits=l;var u=Math.pow;function d(e,t,n){if(e.length===0)throw Error(`empty string`);if(e===`NaN`||e===`Infinity`||e===`+Infinity`||e===`-Infinity`)return y;if(typeof t==`number`?(n=t,t=!1):t=!!t,n||=10,n<2||36<n)throw RangeError(`radix`);var r;if((r=e.indexOf(`-`))>0)throw Error(`interior hyphen`);if(r===0)return d(e.substring(1),t,n).neg();for(var i=c(u(n,8)),a=y,o=0;o<e.length;o+=8){var s=Math.min(8,e.length-o),l=parseInt(e.substring(o,o+s),n);if(s<8){var f=c(u(n,s));a=a.mul(f).add(c(l))}else a=a.mul(i),a=a.add(c(l))}return a.unsigned=t,a}r.fromString=d;function f(e,t){return typeof e==`number`?c(e,t):typeof e==`string`?d(e,t):l(e.low,e.high,typeof t==`boolean`?t:e.unsigned)}r.fromValue=f;var p=65536,m=1<<24,h=p*p,g=h*h,_=g/2,v=s(m),y=s(0);r.ZERO=y;var b=s(0,!0);r.UZERO=b;var x=s(1);r.ONE=x;var S=s(1,!0);r.UONE=S;var C=s(-1);r.NEG_ONE=C;var w=l(-1,2147483647,!1);r.MAX_VALUE=w;var T=l(-1,-1,!0);r.MAX_UNSIGNED_VALUE=T;var E=l(0,-2147483648,!1);r.MIN_VALUE=E;var D=r.prototype;D.toInt=function(){return this.unsigned?this.low>>>0:this.low},D.toNumber=function(){return this.unsigned?(this.high>>>0)*h+(this.low>>>0):this.high*h+(this.low>>>0)},D.toString=function(e){if(e||=10,e<2||36<e)throw RangeError(`radix`);if(this.isZero())return`0`;if(this.isNegative())if(this.eq(E)){var t=c(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}else return`-`+this.neg().toString(e);for(var i=c(u(e,6),this.unsigned),a=this,o=``;;){var s=a.div(i),l=(a.sub(s.mul(i)).toInt()>>>0).toString(e);if(a=s,a.isZero())return l+o;for(;l.length<6;)l=`0`+l;o=``+l+o}},D.getHighBits=function(){return this.high},D.getHighBitsUnsigned=function(){return this.high>>>0},D.getLowBits=function(){return this.low},D.getLowBitsUnsigned=function(){return this.low>>>0},D.getNumBitsAbs=function(){if(this.isNegative())return this.eq(E)?64:this.neg().getNumBitsAbs();for(var e=this.high==0?this.low:this.high,t=31;t>0&&!(e&1<<t);t--);return this.high==0?t+1:t+33},D.isZero=function(){return this.high===0&&this.low===0},D.eqz=D.isZero,D.isNegative=function(){return!this.unsigned&&this.high<0},D.isPositive=function(){return this.unsigned||this.high>=0},D.isOdd=function(){return(this.low&1)==1},D.isEven=function(){return(this.low&1)==0},D.equals=function(e){return i(e)||(e=f(e)),this.unsigned!==e.unsigned&&this.high>>>31==1&&e.high>>>31==1?!1:this.high===e.high&&this.low===e.low},D.eq=D.equals,D.notEquals=function(e){return!this.eq(e)},D.neq=D.notEquals,D.ne=D.notEquals,D.lessThan=function(e){return this.comp(e)<0},D.lt=D.lessThan,D.lessThanOrEqual=function(e){return this.comp(e)<=0},D.lte=D.lessThanOrEqual,D.le=D.lessThanOrEqual,D.greaterThan=function(e){return this.comp(e)>0},D.gt=D.greaterThan,D.greaterThanOrEqual=function(e){return this.comp(e)>=0},D.gte=D.greaterThanOrEqual,D.ge=D.greaterThanOrEqual,D.compare=function(e){if(i(e)||(e=f(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},D.comp=D.compare,D.negate=function(){return!this.unsigned&&this.eq(E)?E:this.not().add(x)},D.neg=D.negate,D.add=function(e){i(e)||(e=f(e));var t=this.high>>>16,n=this.high&65535,r=this.low>>>16,a=this.low&65535,o=e.high>>>16,s=e.high&65535,c=e.low>>>16,u=e.low&65535,d=0,p=0,m=0,h=0;return h+=a+u,m+=h>>>16,h&=65535,m+=r+c,p+=m>>>16,m&=65535,p+=n+s,d+=p>>>16,p&=65535,d+=t+o,d&=65535,l(m<<16|h,d<<16|p,this.unsigned)},D.subtract=function(e){return i(e)||(e=f(e)),this.add(e.neg())},D.sub=D.subtract,D.multiply=function(e){if(this.isZero())return y;if(i(e)||(e=f(e)),n)return l(n.mul(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned);if(e.isZero())return y;if(this.eq(E))return e.isOdd()?E:y;if(e.eq(E))return this.isOdd()?E:y;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(v)&&e.lt(v))return c(this.toNumber()*e.toNumber(),this.unsigned);var t=this.high>>>16,r=this.high&65535,a=this.low>>>16,o=this.low&65535,s=e.high>>>16,u=e.high&65535,d=e.low>>>16,p=e.low&65535,m=0,h=0,g=0,_=0;return _+=o*p,g+=_>>>16,_&=65535,g+=a*p,h+=g>>>16,g&=65535,g+=o*d,h+=g>>>16,g&=65535,h+=r*p,m+=h>>>16,h&=65535,h+=a*d,m+=h>>>16,h&=65535,h+=o*u,m+=h>>>16,h&=65535,m+=t*p+r*d+a*u+o*s,m&=65535,l(g<<16|_,m<<16|h,this.unsigned)},D.mul=D.multiply,D.divide=function(e){if(i(e)||(e=f(e)),e.isZero())throw Error(`division by zero`);if(n)return!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1?this:l((this.unsigned?n.div_u:n.div_s)(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned);if(this.isZero())return this.unsigned?b:y;var t,r,a;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return b;if(e.gt(this.shru(1)))return S;a=b}else{if(this.eq(E))return e.eq(x)||e.eq(C)?E:e.eq(E)?x:(t=this.shr(1).div(e).shl(1),t.eq(y)?e.isNegative()?x:C:(r=this.sub(e.mul(t)),a=t.add(r.div(e)),a));if(e.eq(E))return this.unsigned?b:y;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();a=y}for(r=this;r.gte(e);){t=Math.max(1,Math.floor(r.toNumber()/e.toNumber()));for(var o=Math.ceil(Math.log(t)/Math.LN2),s=o<=48?1:u(2,o-48),d=c(t),p=d.mul(e);p.isNegative()||p.gt(r);)t-=s,d=c(t,this.unsigned),p=d.mul(e);d.isZero()&&(d=x),a=a.add(d),r=r.sub(p)}return a},D.div=D.divide,D.modulo=function(e){return i(e)||(e=f(e)),n?l((this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},D.mod=D.modulo,D.rem=D.modulo,D.not=function(){return l(~this.low,~this.high,this.unsigned)},D.and=function(e){return i(e)||(e=f(e)),l(this.low&e.low,this.high&e.high,this.unsigned)},D.or=function(e){return i(e)||(e=f(e)),l(this.low|e.low,this.high|e.high,this.unsigned)},D.xor=function(e){return i(e)||(e=f(e)),l(this.low^e.low,this.high^e.high,this.unsigned)},D.shiftLeft=function(e){return i(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?l(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):l(0,this.low<<e-32,this.unsigned)},D.shl=D.shiftLeft,D.shiftRight=function(e){return i(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?l(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):l(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},D.shr=D.shiftRight,D.shiftRightUnsigned=function(e){if(i(e)&&(e=e.toInt()),e&=63,e===0)return this;var t=this.high;if(e<32){var n=this.low;return l(n>>>e|t<<32-e,t>>>e,this.unsigned)}else if(e===32)return l(t,0,this.unsigned);else return l(t>>>e-32,0,this.unsigned)},D.shru=D.shiftRightUnsigned,D.shr_u=D.shiftRightUnsigned,D.toSigned=function(){return this.unsigned?l(this.low,this.high,!1):this},D.toUnsigned=function(){return this.unsigned?this:l(this.low,this.high,!0)},D.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},D.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},D.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]},r.fromBytes=function(e,t,n){return n?r.fromBytesLE(e,t):r.fromBytesBE(e,t)},r.fromBytesLE=function(e,t){return new r(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},r.fromBytesBE=function(e,t){return new r(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}}))()),gi=hi.default||hi;function _i(e){return gi.fromString(e,!0,16)}var vi=_i(`c3a5c85c97cb3127`),yi=_i(`b492b66fbe98f273`),bi=_i(`9ae16a3b2f90404f`);function xi(e){return e.xor(e.shru(47))}function Si(e,t,n){let r=e.slice(t,t+n);return gi.fromBytes(Array.from(r),!0,!0)}function Ci(e,t){return Si(e,t,8)}function wi(e,t){return Si(e,t,4)}function Ti(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function Ei(e,t,n=_i(`9ddfea08eb382d69`)){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let i=t.xor(r).mul(n);return i=i.xor(i.shru(47)),i=i.mul(n),i}function Di(e,t,n,r,i,a){i=i.add(e),a=Ti(a.add(i).add(r),21);let o=i;return i=i.add(t),i=i.add(n),a=a.add(Ti(i,44)),[i.add(r),a.add(o)]}function Oi(e,t,n,r){return Di(Ci(e,t),Ci(e,t+8),Ci(e,t+16),Ci(e,t+24),n,r)}function ki(e,t=e.length){if(t>=8){let n=bi.add(t*2),r=Ci(e,0).add(bi),i=Ci(e,t-8);return Ei(Ti(i,37).mul(n).add(r),Ti(r,25).add(i).mul(n),n)}if(t>=4){let n=bi.add(t*2);return Ei(wi(e,0).shl(3).add(t),wi(e,t-4),n)}if(t>0){let n=e[0],r=e[t>>1],i=e[t-1],a=n+(r<<8),o=t+(i<<2);return xi(bi.mul(a).xor(vi.mul(o))).mul(bi)}return bi}function Ai(e,t=e.length){let n=bi.add(t*2),r=Ci(e,0).mul(yi),i=Ci(e,8),a=Ci(e,t-8).mul(n),o=Ci(e,t-16).mul(bi);return Ei(Ti(r.add(i),43).add(Ti(a,30)).add(o),r.add(Ti(i.add(bi),18)).add(a),n)}function ji(e,t=e.length){let n=bi.add(t*2),r=Ci(e,0).mul(bi),i=Ci(e,8),a=Ci(e,t-8).mul(n),o=Ci(e,t-16).mul(bi),s=Ti(r.add(i),43).add(Ti(a,30)).add(o),c=Ei(s,r.add(Ti(i.add(bi),18)).add(a),n),l=Ci(e,16).mul(n),u=Ci(e,24),d=s.add(Ci(e,t-32)).mul(n),f=c.add(Ci(e,t-24)).mul(n);return Ei(Ti(l.add(u),43).add(Ti(d,30)).add(f),l.add(Ti(u.add(r),18)).add(d),n)}function Mi(e,t=e.length){let n=gi.fromNumber(81,!0);if(t<=32)return t<=16?ki(e,t):Ai(e,t);if(t<=64)return ji(e,t);let r=n,i=n.mul(yi).add(113),a=xi(i.mul(bi).add(113)).mul(bi),o=[gi.UZERO,gi.UZERO],s=[gi.UZERO,gi.UZERO];r=r.mul(bi).add(Ci(e,0));let c=0,l=(t-1>>6)*64,u=l+(t-1&63)-63;do r=Ti(r.add(i).add(o[0]).add(Ci(e,c+8)),37).mul(yi),i=Ti(i.add(o[1]).add(Ci(e,c+48)),42).mul(yi),r=r.xor(s[1]),i=i.add(o[0]).add(Ci(e,c+40)),a=Ti(a.add(s[0]),33).mul(yi),o=Oi(e,c,o[1].mul(yi),r.add(s[0])),s=Oi(e,c+32,a.add(s[1]),i.add(Ci(e,c+16))),[a,r]=[r,a],c+=64;while(c!==l);let d=yi.add(a.and(255).shl(1));return c=u,s[0]=s[0].add(t-1&63),o[0]=o[0].add(s[0]),s[0]=s[0].add(o[0]),r=Ti(r.add(i).add(o[0]).add(Ci(e,c+8)),37).mul(d),i=Ti(i.add(o[1]).add(Ci(e,c+48)),42).mul(d),r=r.xor(s[1].mul(9)),i=i.add(o[0].mul(9).add(Ci(e,c+40))),a=Ti(a.add(s[0]),33).mul(d),o=Oi(e,c,o[1].mul(d),r.add(s[0])),s=Oi(e,c+32,a.add(s[1]),i.add(Ci(e,c+16))),[a,r]=[r,a],Ei(Ei(o[0],s[0],d).add(xi(i).mul(vi)).add(a),Ei(o[1],s[1],d).add(r),d)}function Ni(e,t){return t===`string`?Li(e):Fi([e],t)}function Pi(e,t){return e instanceof Float32Array&&t===`float32`||e instanceof Int32Array&&t===`int32`||e instanceof Uint8Array&&t===`bool`}function Fi(e,t){if(t===`string`)throw Error(`Cannot convert a string[] to a TypedArray`);if(Array.isArray(e)&&(e=Bi(e)),j().getBool(`DEBUG`)&&Me(e,t),Pi(e,t))return e;if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`){let t=new Uint8Array(e.length);for(let n=0;n<t.length;++n)Math.round(e[n])!==0&&(t[n]=1);return t}else throw Error(`Unknown data type ${t}`)}function Ii(){return j().platform.now()}function Li(e,t=`utf-8`){return t||=`utf-8`,j().platform.encode(e,t)}function Ri(e,t=`utf-8`){return t||=`utf-8`,j().platform.decode(e,t)}function zi(e){return j().platform.isTypedArray==null?mi(e):j().platform.isTypedArray(e)}function Bi(e,t=[],n=!1){if(t??=[],typeof e==`boolean`||typeof e==`number`||typeof e==`string`||Qe(e)||e==null||zi(e)&&n)t.push(e);else if(Array.isArray(e)||zi(e))for(let r=0;r<e.length;++r)Bi(e[r],t,n);else{let r=-1;for(let t of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(t)&&(r=Math.max(r,Number(t)));for(let i=0;i<=r;i++)Bi(e[i],t,n)}return t}var Vi=class{constructor(e,t){this.backendTimer=e,this.logger=t,t??(this.logger=new Ui)}profileKernel(e,t,n){let r,i=()=>{r=n()},a,o=Ii();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(i);else{i();for(let e of r)e.dataSync();a=Promise.resolve({kernelMs:Ii()-o})}if(j().getBool(`CHECK_COMPUTATION_FOR_ERRORS`))for(let t=0;t<r.length;t++){let n=r[t];n.data().then(t=>{Hi(t,n.dtype,e)})}return{kernelName:e,outputs:r,inputs:t,timeMs:a.then(e=>e.kernelMs),extraInfo:a.then(e=>e.getExtraProfileInfo==null?``:e.getExtraProfileInfo())}}logKernelProfile(e){let{kernelName:t,outputs:n,timeMs:r,inputs:i,extraInfo:a}=e;n.forEach(e=>{Promise.all([e.data(),r,a]).then(n=>{this.logger.logKernelProfile(t,e,n[0],n[1],i,n[2])})})}};function Hi(e,t,n){if(t!==`float32`)return!1;for(let t=0;t<e.length;t++){let r=e[t];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}var Ui=class{logKernelProfile(e,t,n,r,i,a){let o=typeof r==`number`?Te(`${r}ms`,9):r.error,s=Te(e,25),c=t.rank,l=t.size,u=Te(t.shape.toString(),14),d=``;for(let e in i){let n=i[e];if(n!=null){let r=n.shape||t.shape,i=r.length;d+=`${e}: ${i}D ${i>0?r:``} `}}console.log(`%c${s}\t%c${o}\t%c${c}D ${u}\t%c${l}\t%c${d}\t%c${a}`,`font-weight:bold`,`color:red`,`color:blue`,`color: orange`,`color: green`,`color: steelblue`)}};function Wi(e,t,n){let r={},i={};for(let e=0;e<t.length;e++)r[t[e].id]=!0;for(let n=0;n<e.length;n++){let a=e[n],o=a.inputs;for(let e in o){let n=o[e],s=!1;for(let e=0;e<t.length;e++)if(r[n.id]){a.outputs.forEach(e=>r[e.id]=!0),s=!0,i[a.id]=!0;break}if(s)break}}let a={};a[n.id]=!0;let o={};for(let t=e.length-1;t>=0;t--){let n=e[t],r=n.inputs;for(let e=0;e<n.outputs.length;e++)if(a[n.outputs[e].id]){for(let e in r)a[r[e].id]=!0,o[n.id]=!0;break}}let s=[];for(let t=0;t<e.length;t++){let n=e[t];if(i[n.id]&&o[n.id]){let e={};for(let t in n.inputs){let i=n.inputs[t];r[i.id]&&(e[t]=i)}let t=Object.assign({},n);t.inputs=e,t.outputs=n.outputs,s.push(t)}}return s}function Gi(e,t,n,r){for(let i=t.length-1;i>=0;i--){let a=t[i],o=[];if(a.outputs.forEach(t=>{let n=e[t.id];n==null?o.push(null):o.push(n)}),a.gradient==null)throw Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);let s=a.gradient(o);for(let t in a.inputs){if(!(t in s))throw Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(s)}.`);let i=n(()=>s[t]());if(i.dtype!==`float32`)throw Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${i.dtype}'`);let o=a.inputs[t];if(!xe(i.shape,o.shape))throw Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${t}' has shape '${i.shape}', which does not match the shape of the input '${o.shape}'`);if(e[o.id]==null)e[o.id]=i;else{let t=e[o.id];e[o.id]=r(t,i),t.dispose()}}}}var Ki=20,qi=3,Ji=7;function Yi(e,t,n,r){let i=A(t),a=Xi(e,t,n,i),o=t.length,s=$i(e,t,n,i,a),c=[`Tensor`];return r&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${o}`),c.push(`  shape: [${t}]`),c.push(`  values:`)),c.push(s.map(e=>`    `+e).join(`
`)),c.join(`
`)}function Xi(e,t,n,r){let i=k(t),a=r[r.length-1],o=Array(a).fill(0),s=t.length,c=n===`complex64`?ea(e):e;if(s>1)for(let e=0;e<i/a;e++){let t=e*a;for(let e=0;e<a;e++)o[e]=Math.max(o[e],Zi(c[t+e],0,n).length)}return o}function Zi(e,t,n){let r;return r=Array.isArray(e)?`${parseFloat(e[0].toFixed(Ji))} + ${parseFloat(e[1].toFixed(Ji))}j`:Le(e)?`'${e}'`:n===`bool`?Qi(e):parseFloat(e.toFixed(Ji)).toString(),Te(r,t)}function Qi(e){return e===0?`false`:`true`}function $i(e,t,n,r,i,a=!0){let o=n===`complex64`?2:1,s=t[0],c=t.length;if(c===0)return n===`complex64`?[Zi(ea(e)[0],0,n)]:n===`bool`?[Qi(e[0])]:[e[0].toString()];if(c===1){if(s>Ki){let t=qi*o,r=Array.from(e.slice(0,t)),a=Array.from(e.slice((s-qi)*o,s*o));return n===`complex64`&&(r=ea(r),a=ea(a)),[`[`+r.map((e,t)=>Zi(e,i[t],n)).join(`, `)+`, ..., `+a.map((e,t)=>Zi(e,i[s-qi+t],n)).join(`, `)+`]`]}return[`[`+(n===`complex64`?ea(e):Array.from(e)).map((e,t)=>Zi(e,i[t],n)).join(`, `)+`]`]}let l=t.slice(1),u=r.slice(1),d=r[0]*o,f=[];if(s>Ki){for(let t=0;t<qi;t++){let r=t*d,a=r+d;f.push(...$i(e.slice(r,a),l,n,u,i,!1))}f.push(`...`);for(let t=s-qi;t<s;t++){let r=t*d,a=r+d;f.push(...$i(e.slice(r,a),l,n,u,i,t===s-1))}}else for(let t=0;t<s;t++){let r=t*d,a=r+d;f.push(...$i(e.slice(r,a),l,n,u,i,t===s-1))}let p=c===2?`,`:``;f[0]=`[`+(s>0?f[0]+p:``);for(let e=1;e<f.length-1;e++)f[e]=` `+f[e]+p;let m=`,
`;for(let e=2;e<c;e++)m+=`
`;return f[f.length-1]=` `+f[f.length-1]+`]`+(a?``:m),f}function ea(e){let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var ta=class{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=k(e),n!=null){let e=n.length;O(e===this.size,()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`)}if(t===`complex64`)throw Error(`complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).`);this.values=n||je(t,this.size),this.strides=A(e)}set(e,...t){t.length===0&&(t=[0]),O(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let n=this.locToIndex(t);this.values[n]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(let n of e){if(n<0||n>=this.shape[t]){let t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw Error(t)}t++}let n=e[e.length-1];for(let t=0;t<e.length-1;++t)n+=this.strides[t]*e[t];return this.values[n]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];let t=Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return na().makeTensor(this.values,this.shape,this.dtype)}},na=null,ra=null;function ia(e){na=e}function aa(e){ra=e}var oa=class{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||`float32`,this.size=k(e),this.strides=A(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():`higher`}get rank(){return this.shape.length}async buffer(){let e=await this.data();return ra.buffer(this.shape,this.dtype,e)}bufferSync(){return ra.buffer(this.shape,this.dtype,this.dataSync())}async array(){let e=await this.data();return We(this.shape,e,this.dtype===`complex64`)}arraySync(){return We(this.shape,this.dataSync(),this.dtype===`complex64`)}async data(){this.throwIfDisposed();let e=na().read(this.dataId);if(this.dtype===`string`){let t=await e;try{return t.map(e=>Ri(e))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}}return e}dataToGPU(e){return this.throwIfDisposed(),na().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=na().readSync(this.dataId);if(this.dtype===`string`)try{return e.map(e=>Ri(e))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}return e}async bytes(){this.throwIfDisposed();let e=await na().read(this.dataId);return this.dtype===`string`?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),na().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw Error(`Tensor is disposed.`)}print(e=!1){return ra.print(this,e)}clone(){return this.throwIfDisposed(),ra.clone(this)}toString(e=!1){return Yi(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),ra.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),na().makeVariable(this,e,t,n)}};Object.defineProperty(oa,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function M(){return lt(`Tensor`,()=>oa)}M();var sa=class extends oa{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!xe(e.shape,this.shape))throw Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);na().disposeTensor(this),this.dataId=e.dataId,na().incRef(this,null)}dispose(){na().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(sa,Symbol.hasInstance,{value:e=>e instanceof oa&&e.assign!=null&&e.assign instanceof Function});var ca;(function(e){e.R0=`R0`,e.R1=`R1`,e.R2=`R2`,e.R3=`R3`,e.R4=`R4`,e.R5=`R5`,e.R6=`R6`})(ca||={});var la;(function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`int32`,e.complex64=`complex64`})(la||={});var ua;(function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`bool`,e.complex64=`complex64`})(ua||={});var da;(function(e){e.float32=`float32`,e.int32=`float32`,e.bool=`float32`,e.complex64=`complex64`})(da||={});var fa;(function(e){e.float32=`complex64`,e.int32=`complex64`,e.bool=`complex64`,e.complex64=`complex64`})(fa||={});var pa={float32:da,int32:la,bool:ua,complex64:fa};function ma(e,t){if(e===`string`||t===`string`){if(e===`string`&&t===`string`)return`string`;throw Error(`Can not upcast ${e} with ${t}`)}return pa[e][t]}function ha(e){return ma(e,`int32`)}function ga(e){return typeof e==`object`&&!!e&&`texture`in e&&e.texture instanceof WebGLTexture}function _a(e){return typeof GPUBuffer<`u`&&typeof e==`object`&&!!e&&`buffer`in e&&e.buffer instanceof GPUBuffer}function va(e,t){if(e.dtype===t.dtype)return[e,t];let n=ma(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function ya(e,t){return t.some(t=>t.id===e.id)}function ba(e){let t=[];return xa(e,t,new Set),t}function xa(e,t,n){if(e==null)return;if(e instanceof oa){t.push(e);return}if(!Sa(e))return;let r=e;for(let e in r){let i=r[e];n.has(i)||(n.add(i),xa(i,t,n))}}function Sa(e){return Array.isArray(e)||typeof e==`object`}function Ca(e){return e.kernelName!=null}var wa=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}},Ta=class e{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new wa}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t];if(await this.initializeBackend(n).success){await this.setBackend(n);return}}throw Error(`Could not initialize any backends, all backend initializations failed.`)}get backend(){if(this.pendingBackendInit!=null)throw Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){let{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(ii(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;let{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Vi(this.backendInstance),!0}setupRegisteredKernels(){ui(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){ui(e).forEach(t=>{t.disposeFunc!=null&&t.disposeFunc(this.registry[e])})}initializeBackend(e){let t=this.registryFactory[e];if(t==null)throw Error(`Cannot initialize backend ${e}, no registration found.`);try{let n=t.factory();if(n&&!(n instanceof fe)&&typeof n.then==`function`){let t=++this.pendingBackendInitId,r=n.then(n=>t<this.pendingBackendInitId?!1:(this.registry[e]=n,this.pendingBackendInit=null,!0)).catch(n=>t<this.pendingBackendInitId?!1:(this.pendingBackendInit=null,ii(`Initialization of backend ${e} failed`),ii(n.stack||n.message),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[e]=n,{success:!0,asyncInit:!1}}catch(t){return ii(`Initialization of backend ${e} failed`),ii(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw Error(`No backend found in registry.`);return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t],{success:r,asyncInit:i}=this.initializeBackend(n);if(i||r)return{name:n,asyncInit:i}}throw Error(`Could not initialize any backends, all backend initializations failed.`)}moveData(e,t){let n=this.state.tensorInfo.get(t),r=n.backend,i=this.readSync(t),a=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,i,n.shape,n.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n=null;if(t==null){if(typeof e!=`function`)throw Error(`Please provide a function to tidy()`);t=e}else{if(typeof e!=`string`&&!(e instanceof String))throw Error(`When calling with two arguments, the first argument to tidy() must be a string`);if(typeof t!=`function`)throw Error(`When calling with two arguments, the 2nd argument to tidy() must be a function`);n=e}let r;return this.scopedRun(()=>this.startScope(n),()=>this.endScope(r),()=>(r=t(),r instanceof Promise&&console.error(`Cannot return a Promise inside of tidy.`),r))}scopedRun(e,t,n){e();try{let e=n();return t(),e}catch(e){throw t(),e}}nextTensorId(){return e.nextTensorId++}nextVariableId(){return e.nextVariableId++}clone(e){let t=N.runKernel(vn,{x:e}),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],e=>({x:()=>{let t={x:e};return N.runKernel(At,t,{dtype:`float32`})}}),[],{}),t}runKernel(e,t,n){if(this.backendName??this.backend,ci(e,this.backendName)==null)throw Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool(`IS_TEST`)}checkKernelForMemLeak(e,t,n){let r=this.backend.numDataIds(),i=0;n.forEach(e=>{i+=e.dtype===`complex64`?3:1});let a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-i-a;if(o>0)throw Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[],r=this.isTapeOn(),i=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let o;this.backendName??this.backend;let s,c=Ca(e)?e.kernelName:this.state.activeScope==null?``:this.state.activeScope.name;if(Ca(e)){let{kernelName:t,inputs:i,attrs:a}=e;this.backendName??this.backend;let c=ci(t,this.backendName);O(c!=null,()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`),o=()=>{let e=this.backend.numDataIds();s=c.kernelFunc({inputs:i,attrs:a,backend:this.backend});let o=Array.isArray(s)?s:[s];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,o);let l=o.map(e=>e.rank==null?this.makeTensorFromTensorInfo(e):e);if(r){let e=this.getTensorsForGradient(t,i,l);n=this.saveTensorsForBackwardMode(e)}return l}}else{let{forwardFunc:t}=e,i=e=>{r&&(n=e.map(e=>this.keep(this.clone(e))))};o=()=>{let e=this.backend.numDataIds();s=this.tidy(()=>t(this.backend,i));let n=Array.isArray(s)?s:[s];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,e,n),n}}let{inputs:l,attrs:u}=e,d=Ca(e)?null:e.backwardsFunc,f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool(`DEBUG`)&&!this.state.profiling?t=o():(f=this.profiler.profileKernel(c,l,()=>o()),this.ENV.getBool(`DEBUG`)&&this.profiler.logKernelProfile(f),t=f.outputs)}),r&&this.addTapeNode(c,l,t,d,n,u),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(l).map(e=>l[e]==null?null:l[e].shape),outputShapes:t.map(e=>e.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(s)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(e=>this.keep(this.clone(e)))}getTensorsForGradient(e,t,n){let r=li(e);if(r!=null){let e=r.inputsToSave||[],i=r.outputsToSave||[],a;r.saveAllInputs?(O(Array.isArray(t),()=>`saveAllInputs is true, expected inputs to be an array.`),a=Object.keys(t).map(e=>t[e])):a=e.map(e=>t[e]);let o=n.filter((e,t)=>i[t]);return a.concat(o)}return[]}makeTensor(e,t,n,r){if(e==null)throw Error(`Values passed to engine.makeTensor() are null`);n||=`float32`,r||=this.backend;let i=e;n===`string`&&Le(e[0])&&(i=e.map(e=>Li(e)));let a=r.write(i,t,n),o=new oa(t,n,a,this.nextTensorId());if(this.trackTensor(o,r),n===`string`){let e=this.state.tensorInfo.get(a),t=Ie(i);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,n,r){n||=`float32`;let i={dataId:e,shape:t,dtype:n};return this.makeTensorFromTensorInfo(i,r)}makeTensorFromTensorInfo(e,t){let{dataId:n,shape:r,dtype:i}=e,a=new oa(r,i,n,this.nextTensorId());return this.trackTensor(a,t),a}makeVariable(e,t=!0,n,r){n||=this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.cast(r));let i=new sa(e,t,n,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(e,t){this.state.numTensors++,e.dtype===`string`&&this.state.numStringTensors++;let n=0;e.dtype!==`complex64`&&e.dtype!==`string`&&(n=e.size*Fe(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof sa||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;let t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype===`string`&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!==`complex64`&&e.dtype!==`string`){let t=e.size*Fe(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(let e in this.state.registeredVariables){let t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){let e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons??=[],e.reasons.push(`Memory usage by string tensors is approximate (2 bytes per character)`)),e}async profile(e){this.state.profiling=!0;let t=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(e=>e.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n;for(let e of this.state.activeProfile.kernels)e.kernelTimeMs=await e.kernelTimeMs,e.extraInfo=await e.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,n,r,i,a){let o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:i},s=li(e);s!=null&&(r=s.gradFunc),r!=null&&(o.gradient=e=>(e=e.map((e,t)=>{if(e==null){let e=n[t],r=qe(e.size,e.dtype);return this.makeTensor(r,e.shape,e.dtype)}return e}),r(e.length>1?e:e[0],i,a))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){let t={track:[],name:`unnamed scope`,id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){let t=ba(e),n=new Set(t.map(e=>e.id));for(let e=0;e<this.state.activeScope.track.length;e++){let t=this.state.activeScope.track[e];!t.kept&&!n.has(t.id)&&t.dispose()}let r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(e=>{!e.kept&&e.scopeId===r.id&&this.track(e)})}gradients(e,t,n,r=!1){if(O(t.length>0,()=>`gradients() received an empty list of xs.`),n!=null&&n.dtype!==`float32`)throw Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy(`forward`,e));O(i instanceof oa,()=>`The result y returned by f() must be a tensor.`);let a=Wi(this.state.activeTape,t,i);if(!r&&a.length===0&&t.length>0)throw Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.`);return this.tidy(`backward`,()=>{let e={};e[i.id]=n??Ea(i.shape),Gi(e,a,e=>this.tidy(e),Oa);let r=t.map(t=>e[t.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(e=>{for(let t of e.saved)t.dispose()}),this.state.activeTape=null),{value:i,grads:r}})}customGrad(e){return O(Ve(e),()=>`The f passed in customGrad(f) must be a function.`),(...t)=>{O(t.every(e=>e instanceof oa),()=>`The args passed in customGrad(f)(x1, x2,...) must all be tensors`);let n,r={};return t.forEach((e,t)=>{r[t]=e}),this.runKernelFunc({forwardFunc:(r,i)=>(n=e(...t,i),O(n.value instanceof oa,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),O(Ve(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),backwardsFunc:(e,r)=>{let i=n.gradFunc(e,r),a=Array.isArray(i)?i:[i];O(a.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),O(a.every(e=>e instanceof oa),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let o={};return a.forEach((e,t)=>{o[t]=()=>e}),o},inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){let t=Ii(),n=await this.backend.time(e);return n.wallMs=Ii()-t,n}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new wa;for(let e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};Ta.nextTensorId=0,Ta.nextVariableId=0;function Ea(e){let t=Ke(k(e),`float32`);return N.makeTensor(t,e,`float32`)}function Da(){let e=st();return e._tfengine??=new Ta(new et(e)),at(e._tfengine.ENV),ia(()=>e._tfengine),e._tfengine}var N=Da();function Oa(e,t){let n={a:e,b:t};return N.runKernel(`Add`,n)}function ka(){return typeof navigator<`u`&&navigator!=null}var Aa;function ja(e){if(Aa!==void 0)return Aa;if(e||ka()){if(e||=navigator,e.product===`ReactNative`)return!0;let t=e.userAgent||e.vendor||(typeof window<`u`?window.opera:``);if(!t){let t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Ma(){return typeof window<`u`&&window.document!=null||typeof WorkerGlobalScope<`u`}var Na=j();Na.registerFlag(`DEBUG`,()=>!1,e=>{e&&console.warn(`Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.`)}),Na.registerFlag(`IS_BROWSER`,()=>Ma()),Na.registerFlag(`IS_NODE`,()=>typeof process<`u`&&process.versions!==void 0&&process.versions.node!==void 0),Na.registerFlag(`IS_CHROME`,()=>typeof navigator<`u`&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),Na.registerFlag(`IS_SAFARI`,()=>typeof navigator<`u`&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),Na.registerFlag(`PROD`,()=>!1),Na.registerFlag(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`,()=>Na.getBool(`DEBUG`)),Na.registerFlag(`DEPRECATION_WARNINGS_ENABLED`,()=>!0),Na.registerFlag(`IS_TEST`,()=>!1),Na.registerFlag(`CHECK_COMPUTATION_FOR_ERRORS`,()=>Na.getBool(`DEBUG`)),Na.registerFlag(`WRAP_TO_IMAGEBITMAP`,()=>!1),Na.registerFlag(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`,()=>!1),Na.registerFlag(`USE_SETTIMEOUTCUSTOM`,()=>!1);function Pa(e,t){let n=e;if(zi(e))return t===`string`?[]:[e.length];if(ga(e)){let t=e.channels||`RGBA`;return[e.height,e.width*t.length]}else if(_a(e))return[e.buffer.size/(t==null?4:Fe(t))];if(!Array.isArray(e))return[];let r=[];for(;Array.isArray(n)||zi(n)&&t!==`string`;)r.push(n.length),n=n[0];return Array.isArray(e)&&j().getBool(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`)&&Fa(e,r,[]),r}function Fa(e,t,n){if(n||=[],!Array.isArray(e)&&!zi(e)){O(t.length===0,()=>`Element arr[${n.join(`][`)}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}O(t.length>0,()=>`Element arr[${n.join(`][`)}] should be a primitive, but is an array of ${e.length} elements`),O(e.length===t[0],()=>`Element arr[${n.join(`][`)}] should have ${t[0]} elements, but has ${e.length} elements`);let r=t.slice(1);for(let t=0;t<e.length;++t)Fa(e[t],r,n.concat(t))}function Ia(e,t,n,r){if(e!==`string_or_numeric`){if(e==null)throw Error(`Expected dtype cannot be null.`);if(e!==`numeric`&&e!==t||e===`numeric`&&t===`string`)throw Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function P(e,t,n,r=`numeric`){if(e instanceof M())return Ia(r,e.dtype,t,n),e;let i=Be(e);if(i!==`string`&&[`bool`,`int32`,`float32`].indexOf(r)>=0&&(i=r),Ia(r,i,t,n),e==null||!zi(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`){let r=e==null?`null`:e.constructor.name;throw Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}let a=Pa(e,i);!zi(e)&&!Array.isArray(e)&&(e=[e]);let o=i===`string`?Bi(e,[],!0):Fi(e,i);return N.makeTensor(o,a,i)}function La(e,t,n,r=`numeric`){if(!Array.isArray(e))throw Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((e,i)=>P(e,`${t}[${i}]`,n,r))}var Ra=`__op`;function F(e){let t=Object.keys(e);if(t.length!==1)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0],r=e[n];n.endsWith(`_`)&&(n=n.substring(0,n.length-1)),n+=Ra;let i=(...e)=>{N.startScope(n);try{let t=r(...e);return Qe(t)&&console.error(`Cannot return a Promise inside of tidy.`),N.endScope(t),t}catch(e){throw N.endScope(null),e}};return Object.defineProperty(i,`name`,{value:n,configurable:!0}),i}function za(e,t){let n=P(e,`real`,`complex`),r=P(t,`imag`,`complex`);ye(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);let i={real:n,imag:r};return N.runKernel(Nt,i)}var Ba=F({complex_:za});function Va(e,t,n,r){if(r==null)r=Be(e);else if(r===`complex64`)throw Error(`Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).`);if(_a(e)||ga(e)){if(r!==`float32`&&r!==`int32`)throw Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return N.backend.createTensorFromGPUData(e,t||n,r)}if(!zi(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`)throw Error(`values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray`);if(t!=null){Ye(t);let e=k(t),r=k(n);O(e===r,()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`);for(let e=0;e<n.length;++e){let r=n[e],i=e===n.length-1?r!==k(t.slice(e)):!0;O(n[e]===t[e]||!i,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!zi(e)&&!Array.isArray(e)&&(e=[e]),t||=n,e=r===`string`?Bi(e,[],!0):Fi(e,r),N.makeTensor(e,t,r)}function Ha(e,t,n){return Va(e,t,Pa(e,n),n)}var Ua={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8},Wa=class e{static join(t){return new e(t).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(e=>zi(e)?e.buffer:e),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let n=0;n<e.length;n++){let r=e[n];n!==e.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);let i=t+r.byteLength;this.shards.push({buffer:r,start:t,end:i}),t=i}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0||(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e))return new ArrayBuffer(0);let n=this.findShardForByte(e);if(n===-1)throw Error(`Could not find start shard for byte ${e}`);let r=t-e,i=new ArrayBuffer(r),a=new Uint8Array(i),o=0;for(let r=n;r<this.shards.length;r++){let n=this.shards[r],i=e+o-n.start,s=o,c=Math.min(t,n.end)-n.start,l=new Uint8Array(n.buffer,i,c-i);if(a.set(l,s),o+=l.length,t<n.end)break}return i}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(t){return e<t.start?-1:+(e>=t.end)}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;let n=Ga(this.shards,t);return n===-1?-1:(this.previousShardIndex=n,this.previousShardIndex)}};function Ga(e,t){let n=0,r=e.length;for(;n<=r;){let i=Math.floor((r-n)/2)+n,a=t(e[i]);if(a===0)return i;a<0?r=i:n=i+1}return-1}function Ka(){return N}function qa(){return N.memory()}function I(e,t){return N.tidy(e,t)}function L(e){ba(e).forEach(e=>e.dispose())}function Ja(e){return N.keep(e)}function Ya(e,t,n=1){return N.registerBackend(e,t,n)}function Xa(){return N.backend}var Za=4;async function Qa(e,t){let n=[],r=[],i=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);for(let a=0;a<i.length;++a){let o=i[a],s=Array.isArray(e)?e[a].tensor:e[o];if(s.dtype!==`float32`&&s.dtype!==`int32`&&s.dtype!==`bool`&&s.dtype!==`string`&&s.dtype!==`complex64`)throw Error(`Unsupported dtype in weight '${o}': ${s.dtype}`);let c={name:o,shape:s.shape,dtype:s.dtype};if(s.dtype===`string`){let e=new Promise(async e=>{let t=await s.bytes(),n=t.reduce((e,t)=>e+t.length,0)+Za*t.length,r=new Uint8Array(n),i=0;for(let e=0;e<t.length;e++){let n=t[e],a=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(a,i),i+=Za,r.set(n,i),i+=n.length}e(r)});r.push(e)}else r.push(s.data());t!=null&&(c.group=t),n.push(c)}return{data:no(await Promise.all(r)),specs:n}}function $a(e,t){let n=new Wa(e),r={},i=0;for(let e of t){let t=eo(e,(e,t)=>n.slice(i+e,i+t));r[e.name]=to(e,n.slice(i,i+t)),i+=t}return r}function eo(e,t){let n=k(e.shape),r;if(`quantization`in e)r=Ua[e.quantization.dtype];else if(e.dtype===`string`){let e=0;for(let r=0;r<n;r++)e+=Za+new Uint32Array(t(e,e+Za))[0];return e}else r=Ua[e.dtype];return n*r}function to(e,t){let n=e.name,r=e.dtype,i=e.shape,a=k(i),o,s=0;if(`quantization`in e){let i=e.quantization;if(i.dtype===`uint8`||i.dtype===`uint16`){if(!(`min`in i&&`scale`in i))throw Error(`Weight ${e.name} with quantization ${i.dtype} doesn't have corresponding metadata min and scale.`)}else if(i.dtype===`float16`){if(r!==`float32`)throw Error(`Weight ${e.name} is quantized with ${i.dtype} which only supports weights of type float32 not ${r}.`)}else throw Error(`Weight ${e.name} has unknown quantization dtype ${i.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let c=Ua[i.dtype],l=i.dtype===`uint8`?new Uint8Array(t):new Uint16Array(t);if(r===`float32`)if(i.dtype===`uint8`||i.dtype===`uint16`){o=new Float32Array(l.length);for(let e=0;e<l.length;e++){let t=l[e];o[e]=t*i.scale+i.min}}else if(i.dtype===`float16`)o=_o()(l);else throw Error(`Unsupported quantization type ${i.dtype} for weight type float32.`);else if(r===`int32`){if(i.dtype!==`uint8`&&i.dtype!==`uint16`)throw Error(`Unsupported quantization type ${i.dtype} for weight type int32.`);o=new Int32Array(l.length);for(let e=0;e<l.length;e++){let t=l[e];o[e]=Math.round(t*i.scale+i.min)}}else throw Error(`Unsupported dtype in weight '${n}': ${r}`);s+=a*c}else if(r===`string`){let n=k(e.shape);o=[];for(let e=0;e<n;e++){let e=new Uint32Array(t.slice(s,s+Za))[0];s+=Za;let n=new Uint8Array(t.slice(s,s+e));o.push(n),s+=e}}else{let e=Ua[r];if(r===`float32`)o=new Float32Array(t);else if(r===`int32`)o=new Int32Array(t);else if(r===`bool`)o=new Uint8Array(t);else if(r===`complex64`){o=new Float32Array(t);let e=new Float32Array(o.length/2),n=new Float32Array(o.length/2);for(let t=0;t<e.length;t++)e[t]=o[t*2],n[t]=o[t*2+1];let r=Ha(e,i,`float32`),a=Ha(n,i,`float32`),s=Ba(r,a);return r.dispose(),a.dispose(),s}else throw Error(`Unsupported dtype in weight '${n}': ${r}`);s+=a*e}return Ha(o,i,r)}function no(e){if(e===null)throw Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0,n=[];e.forEach(e=>{if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)});let r=new Uint8Array(t),i=0;return n.forEach(e=>{r.set(new Uint8Array(e.buffer),i),i+=e.byteLength}),r.buffer}var ro=typeof Buffer<`u`&&(typeof Blob>`u`||typeof atob>`u`||typeof btoa>`u`);function io(e){return ro?Buffer.byteLength(e,`utf8`):new Blob([e]).size}function ao(e){if(ro)return Buffer.from(e).toString(`base64`);let t=new Uint8Array(e),n=``;for(let e=0,r=t.length;e<r;e++)n+=String.fromCharCode(t[e]);return btoa(n)}function oo(e){if(ro){let t=Buffer.from(e,`base64`);return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n.set([t.charCodeAt(e)],e);return n.buffer}function so(e){return Wa.join(e)}function co(e,t){let n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function lo(e,t,n){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw Error(`modelJSON has weightsManifest but weightSpecs is null`);if(!n)throw Error(`modelJSON has weightsManifest but weightData is null`);r.weightSpecs=t,r.weightData=n}return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(r.initializerSignature=e.initializerSignature),r}async function uo(e,t){let n,r;return e.weightsManifest!=null&&([n,r]=await t(e.weightsManifest)),lo(e,n,r)}function fo(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`Expected JSON model topology, received ArrayBuffer.`);return{dateSaved:new Date,modelTopologyType:`JSON`,modelTopologyBytes:e.modelTopology==null?0:io(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:io(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:new Wa(e.weightData).byteLength}}function po(e){let t=[];for(let n of e)t.push(...n.weights);return t}function mo(){let e=e=>{let t=e<<13,n=0;for(;!(t&8388608);)n-=8388608,t<<=1;return t&=-8388609,n+=947912704,t|n},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function ho(){let e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function go(){let e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function _o(){let e=mo(),t=ho(),n=go();return r=>{let i=new ArrayBuffer(4*r.length),a=new Uint32Array(i);for(let i=0;i<r.length;i++){let o=r[i];a[i]=e[n[o>>10]+(o&1023)]+t[o>>10]}return new Float32Array(i)}}var vo=class e{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return e.instance??=new e,e.instance}static registerSaveRouter(t){e.getInstance().saveRouters.push(t)}static registerLoadRouter(t){e.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return e.getHandlers(t,`save`)}static getLoadHandlers(t,n){return e.getHandlers(t,`load`,n)}static getHandlers(t,n,r){let i=[];return(n===`load`?e.getInstance().loadRouters:e.getInstance().saveRouters).forEach(e=>{let n=e(t,r);n!==null&&i.push(n)}),i}},yo=e=>vo.getSaveHandlers(e),bo=(e,t)=>vo.getLoadHandlers(e,t),xo=`tensorflowjs`,So=1,Co=`models_store`,wo=`model_info_store`;function To(){if(!j().getBool(`IS_BROWSER`))throw Error(`Failed to obtain IndexedDB factory because the current environmentis not a web browser.`);let e=typeof window>`u`?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw Error(`The current browser does not appear to support IndexedDB.`);return t}function Eo(e){let t=e.result;t.createObjectStore(Co,{keyPath:`modelPath`}),t.createObjectStore(wo,{keyPath:`modelPath`})}var Do=class{constructor(e){if(this.indexedDB=To(),e==null||!e)throw Error(`For IndexedDB, modelPath must not be null, undefined or empty.`);this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((e,n)=>{let r=this.indexedDB.open(xo,So);r.onupgradeneeded=()=>Eo(r),r.onsuccess=()=>{let i=r.result;if(t==null){let t=i.transaction(Co,`readonly`),r=t.objectStore(Co).get(this.modelPath);r.onsuccess=()=>{if(r.result==null)return i.close(),n(Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(r.result.modelArtifacts)},r.onerror=e=>(i.close(),n(r.error)),t.oncomplete=()=>i.close()}else{t.weightData=Wa.join(t.weightData);let r=fo(t),a=i.transaction(wo,`readwrite`),o=a.objectStore(wo),s;try{s=o.put({modelPath:this.modelPath,modelArtifactsInfo:r})}catch(e){return n(e)}let c;s.onsuccess=()=>{c=i.transaction(Co,`readwrite`);let s=c.objectStore(Co),l;try{l=s.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:r})}catch(e){return n(e)}l.onsuccess=()=>e({modelArtifactsInfo:r}),l.onerror=e=>{o=a.objectStore(wo);let t=o.delete(this.modelPath);t.onsuccess=()=>(i.close(),n(l.error)),t.onerror=e=>(i.close(),n(l.error))}},s.onerror=e=>(i.close(),n(s.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}}},r.onerror=e=>n(r.error)})}};Do.URL_SCHEME=`indexeddb://`;var Oo=e=>j().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(Do.URL_SCHEME)?ko(e.slice(Do.URL_SCHEME.length)):null;vo.registerSaveRouter(Oo),vo.registerLoadRouter(Oo);function ko(e){return new Do(e)}function Ao(e){return e.startsWith(Do.URL_SCHEME)?e.slice(Do.URL_SCHEME.length):e}var jo=class{constructor(){this.indexedDB=To()}async listModels(){return new Promise((e,t)=>{let n=this.indexedDB.open(xo,So);n.onupgradeneeded=()=>Eo(n),n.onsuccess=()=>{let r=n.result,i=r.transaction(wo,`readonly`),a=i.objectStore(wo).getAll();a.onsuccess=()=>{let t={};for(let e of a.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},a.onerror=e=>(r.close(),t(a.error)),i.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)})}async removeModel(e){return e=Ao(e),new Promise((t,n)=>{let r=this.indexedDB.open(xo,So);r.onupgradeneeded=()=>Eo(r),r.onsuccess=()=>{let i=r.result,a=i.transaction(wo,`readwrite`),o=a.objectStore(wo),s=o.get(e),c;s.onsuccess=()=>{if(s.result==null)return i.close(),n(Error(`Cannot find model with path '${e}' in IndexedDB.`));{let r=o.delete(e),a=()=>{c=i.transaction(Co,`readwrite`);let r=c.objectStore(Co).delete(e);r.onsuccess=()=>t(s.result.modelArtifactsInfo),r.onerror=e=>n(s.error)};r.onsuccess=a,r.onerror=e=>(a(),i.close(),n(s.error))}},s.onerror=e=>(i.close(),n(s.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}},r.onerror=e=>n(r.error)})}},Mo=`/`,No=`tensorflowjs_models`,Po=`info`,Fo=`model_topology`,Io=`weight_specs`,Lo=`weight_data`,Ro=`model_metadata`;function zo(e){return{info:[No,e,Po].join(Mo),topology:[No,e,Fo].join(Mo),weightSpecs:[No,e,Io].join(Mo),weightData:[No,e,Lo].join(Mo),modelMetadata:[No,e,Ro].join(Mo)}}function Bo(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}function Vo(e){let t=e.split(Mo);if(t.length<3)throw Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Mo)}function Ho(e){return e.startsWith(Uo.URL_SCHEME)?e.slice(Uo.URL_SCHEME.length):e}var Uo=class{constructor(e){if(!j().getBool(`IS_BROWSER`)||typeof window>`u`||window.localStorage===void 0)throw Error(`The current environment does not support local storage.`);if(this.LS=window.localStorage,e==null||!e)throw Error(`For local storage, modelPath must not be null, undefined or empty.`);this.modelPath=e,this.keys=zo(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);{let t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=fo(e),i=Wa.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,ao(i));let a={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature==null?void 0:e.signature,userDefinedMetadata:e.userDefinedMetadata==null?void 0:e.userDefinedMetadata,modelInitializer:e.modelInitializer==null?void 0:e.modelInitializer,initializerSignature:e.initializerSignature==null?void 0:e.initializerSignature,trainingConfig:e.trainingConfig==null?void 0:e.trainingConfig};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch{throw Bo(this.keys),Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){let e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!==`JSON`)throw Error(`BrowserLocalStorage does not support loading non-JSON model topology yet.`);let t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(n==null)throw Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;let r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;let i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){let e=JSON.parse(i);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,e.signature!=null&&(t.signature=e.signature),e.userDefinedMetadata!=null&&(t.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(t.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(t.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(t.trainingConfig=e.trainingConfig)}let a=this.LS.getItem(this.keys.weightData);if(a==null)throw Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=oo(a),t}};Uo.URL_SCHEME=`localstorage://`;var Wo=e=>j().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(Uo.URL_SCHEME)?Go(e.slice(Uo.URL_SCHEME.length)):null;vo.registerSaveRouter(Wo),vo.registerLoadRouter(Wo);function Go(e){return new Uo(e)}var Ko=class{constructor(){O(j().getBool(`IS_BROWSER`),()=>`Current environment is not a web browser`),O(typeof window>`u`||window.localStorage!==void 0,()=>`Current browser does not appear to support localStorage`),this.LS=window.localStorage}async listModels(){let e={},t=No+Mo,n=Mo+Po;for(let r=0;r<this.LS.length;++r){let i=this.LS.key(r);if(i.startsWith(t)&&i.endsWith(n)){let t=Vo(i);e[t]=JSON.parse(this.LS.getItem(i))}}return e}async removeModel(e){e=Ho(e);let t=zo(e);if(this.LS.getItem(t.info)==null)throw Error(`Cannot find model at path '${e}'`);let n=JSON.parse(this.LS.getItem(t.info));return Bo(t),n}},qo=`://`,Jo=class e{constructor(){this.managers={}}static getInstance(){return e.instance??=new e,e.instance}static registerManager(t,n){O(t!=null,()=>`scheme must not be undefined or null.`),t.endsWith(qo)&&(t=t.slice(0,t.indexOf(qo))),O(t.length>0,()=>`scheme must not be an empty string.`);let r=e.getInstance();O(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){let n=e.getInstance().managers[t];if(n==null)throw Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(e.getInstance().managers)}},Yo=class{constructor(){this.messageName=`setTimeoutCustom`,this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder??=new TextEncoder,this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>`u`||!j().getBool(`USE_SETTIMEOUTCUSTOM`)){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},`*`)},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener(`message`,e=>{if(e.source===window&&e.data.name===this.messageName){e.stopPropagation();let t=this.functionRefs[e.data.index];t(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return mi(e)}};if(j().get(`IS_BROWSER`)){j().setPlatform(`browser`,new Yo);try{Jo.registerManager(Uo.URL_SCHEME,new Ko)}catch{}try{Jo.registerManager(Do.URL_SCHEME,new jo)}catch{}}var Xo=o(((e,t)=>{t.exports={}})),Zo={importFetch:()=>Xo()},Qo,$o=class{constructor(){this.util=Xo(),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return j().global.fetch==null?(Qo??=Zo.importFetch(),Qo(e,t)):j().global.fetch(e,t)}now(){let e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?``:new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}};j().get(`IS_NODE`)&&!j().get(`IS_BROWSER`)&&j().setPlatform(`node`,new $o);function es(e,t=`float32`,n){return t||=`float32`,Ye(e),new ta(e,t,n)}function ts(e,t){let n=P(e,`x`,`cast`);if(!Ne(t))throw Error(`Failed to cast to unknown dtype ${t}`);if(t===`string`&&n.dtype!==`string`||t!==`string`&&n.dtype===`string`)throw Error(`Only strings can be casted to strings`);let r={x:n},i={dtype:t};return N.runKernel(At,r,i)}var R=F({cast_:ts});function ns(e){let t={x:P(e,`x`,`clone`,`string_or_numeric`)};return N.runKernel(vn,t)}var rs=F({clone_:ns});function is(e,t=!1){console.log(e.toString(t))}Da(),aa({buffer:es,cast:R,clone:rs,print:is});function as(e,t){let n=P(e,`a`,`add`),r=P(t,`b`,`add`);[n,r]=va(n,r);let i={a:n,b:r};return N.runKernel(`Add`,i)}var z=F({add_:as});function os(e,t){let n=P(e,`a`,`floorDiv`),r=P(t,`b`,`floorDiv`);[n,r]=va(n,r);let i={a:n,b:r};return N.runKernel(fn,i)}var ss=F({floorDiv_:os});function cs(e,t){let n=P(e,`a`,`div`),r=P(t,`b`,`div`);if([n,r]=va(n,r),n.dtype===`int32`&&r.dtype===`int32`)return ss(n,r);let i={a:n,b:r};return N.runKernel(nn,i,{})}var B=F({div_:cs});function ls(e,t){let n=P(e,`a`,`mul`),r=P(t,`b`,`mul`);[n,r]=va(n,r);let i={a:n,b:r};return N.runKernel(Wn,i)}var V=F({mul_:ls});function us(e){let t=P(e,`x`,`abs`);if(t.dtype===`complex64`){let e={x:t};return N.runKernel(Pt,e)}else{let e={x:t};return N.runKernel(`Abs`,e)}}var ds=F({abs_:us});function fs(e){let t={x:P(e,`x`,`acos`)};return N.runKernel(ut,t)}var ps=F({acos_:fs});function ms(e){let t={x:P(e,`x`,`acosh`)};return N.runKernel(dt,t)}var hs=F({acosh_:ms});function gs(e,t=null,n=!1){let r={x:P(e,`x`,`all`,`bool`)},i={axis:t,keepDims:n};return N.runKernel(`All`,r,i)}var _s=F({all_:gs});function vs(e,t=null,n=!1){let r={x:P(e,`x`,`any`,`bool`)},i={axis:t,keepDims:n};return N.runKernel(`Any`,r,i)}var ys=F({any_:vs});function bs(e,t=0){let n={x:P(e,`x`,`argMax`)},r={axis:t};return N.runKernel(pt,n,r)}var xs=F({argMax_:bs});function Ss(e,t=0){let n={x:P(e,`x`,`argMin`)},r={axis:t};return N.runKernel(mt,n,r)}var Cs=F({argMin_:Ss});function ws(e){let t={x:P(e,`x`,`asin`)};return N.runKernel(ht,t)}var Ts=F({asin_:ws});function Es(e){let t={x:P(e,`x`,`asinh`)};return N.runKernel(gt,t)}var Ds=F({asinh_:Es});function Os(e){let t={x:P(e,`x`,`atan`)};return N.runKernel(_t,t)}var ks=F({atan_:Os});function As(e,t){let n=P(e,`a`,`atan2`),r=P(t,`b`,`atan2`);[n,r]=va(n,r);let i={a:n,b:r};return N.runKernel(yt,i)}var js=F({atan2_:As});function Ms(e){let t={x:P(e,`x`,`atanh`)};return N.runKernel(vt,t)}var Ns=F({atanh_:Ms});function Ps(e,t,n,r,i=`NHWC`,a){let o=e[3];return Ls(e,[...t,o],n,a,r,null,null,Zs(i))}function Fs(e,t,n,r,i,a,o=`channelsLast`){let[s,c]=Hs(t),l;if(o===`channelsLast`)l=[s,c,e[3],e[3]];else if(o===`channelsFirst`)l=[s,c,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return Ls(e,l,n,r,i,a,!1,o)}function Is(e,t,n,r,i,a,o=`NDHWC`){let[s,c,l]=Us(t),u,d;if(o===`NDHWC`)d=`channelsLast`,u=[s,c,l,e[4],e[4]];else if(o===`NCDHW`)d=`channelsFirst`,u=[s,c,l,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return Rs(e,u,n,r,i,!1,d,a)}function Ls(e,t,n,r,i,a,o=!1,s=`channelsLast`){let[c,l,u,d]=[-1,-1,-1,-1];if(s===`channelsLast`)[c,l,u,d]=e;else if(s===`channelsFirst`)[c,d,l,u]=e;else throw Error(`Unknown dataFormat ${s}`);let[f,p,,m]=t,[h,g]=Hs(n),[_,v]=Hs(r),y=Ws(f,_),b=Ws(p,v),{padInfo:x,outHeight:S,outWidth:C}=Gs(i,l,u,h,g,y,b,a,s),w=o?m*d:m,T;return s===`channelsFirst`?T=[c,w,S,C]:s===`channelsLast`&&(T=[c,S,C,w]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:u,inChannels:d,outHeight:S,outWidth:C,outChannels:w,padInfo:x,strideHeight:h,strideWidth:g,filterHeight:f,filterWidth:p,effectiveFilterHeight:y,effectiveFilterWidth:b,dilationHeight:_,dilationWidth:v,inShape:e,outShape:T,filterShape:t}}function Rs(e,t,n,r,i,a=!1,o=`channelsLast`,s){let[c,l,u,d,f]=[-1,-1,-1,-1,-1];if(o===`channelsLast`)[c,l,u,d,f]=e;else if(o===`channelsFirst`)[c,f,l,u,d]=e;else throw Error(`Unknown dataFormat ${o}`);let[p,m,h,,g]=t,[_,v,y]=Us(n),[b,x,S]=Us(r),C=Ws(p,b),w=Ws(m,x),T=Ws(h,S),{padInfo:E,outDepth:D,outHeight:ee,outWidth:te}=Ks(i,l,u,d,_,v,y,C,w,T,s),ne=a?g*f:g,re;return o===`channelsFirst`?re=[c,ne,D,ee,te]:o===`channelsLast`&&(re=[c,D,ee,te,ne]),{batchSize:c,dataFormat:o,inDepth:l,inHeight:u,inWidth:d,inChannels:f,outDepth:D,outHeight:ee,outWidth:te,outChannels:ne,padInfo:E,strideDepth:_,strideHeight:v,strideWidth:y,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:C,effectiveFilterHeight:w,effectiveFilterWidth:T,dilationDepth:b,dilationHeight:x,dilationWidth:S,inShape:e,outShape:re,filterShape:t}}function zs(e,t,n,r,i){r??=Vs(e,t,n);let a=e[0],o=e[1];return[qs((a-t+2*r)/n+1,i),qs((o-t+2*r)/n+1,i)]}function Bs(e,t,n,r,i,a){i??=Vs(e,t[0],r[0]);let o=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(o[n]=qs((e[n]-t[n]+2*i)/r[n]+1,a));return o}function Vs(e,t,n,r=1){let i=Ws(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)}function Hs(e){return typeof e==`number`?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function Us(e){return typeof e==`number`?[e,e,e]:e}function Ws(e,t){return t<=1?e:e+(e-1)*(t-1)}function Gs(e,t,n,r,i,a,o,s,c){let l,u,d;if(typeof e==`number`){l={top:e,bottom:e,left:e,right:e,type:e===0?`VALID`:`NUMBER`};let i=zs([t,n],a,r,e,s);u=i[0],d=i[1]}else if(e===`same`){u=Math.ceil(t/r),d=Math.ceil(n/i);let e=Math.max(0,(u-1)*r+a-t),s=Math.max(0,(d-1)*i+o-n),c=Math.floor(e/2),f=e-c,p=Math.floor(s/2);l={top:c,bottom:f,left:p,right:s-p,type:`SAME`}}else if(e===`valid`)l={top:0,bottom:0,left:0,right:0,type:`VALID`},u=Math.ceil((t-a+1)/r),d=Math.ceil((n-o+1)/i);else if(typeof e==`object`){let f=c===`channelsLast`?e[1][0]:e[2][0],p=c===`channelsLast`?e[1][1]:e[2][1],m=c===`channelsLast`?e[2][0]:e[3][0],h=c===`channelsLast`?e[2][1]:e[3][1];l={top:f,bottom:p,left:m,right:h,type:f===0&&p===0&&m===0&&h===0?`VALID`:`EXPLICIT`},u=qs((t-a+f+p)/r+1,s),d=qs((n-o+m+h)/i+1,s)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:u,outWidth:d}}function Ks(e,t,n,r,i,a,o,s,c,l,u){let d,f,p,m;if(e===`valid`&&(e=0),typeof e==`number`){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?`VALID`:`NUMBER`};let h=Bs([t,n,r,1],[s,c,l],1,[i,a,o],e,u);f=h[0],p=h[1],m=h[2]}else if(e===`same`){f=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/o);let e=(f-1)*i+s-t,u=(p-1)*a+c-n,h=(m-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(u/2),y=u-v,b=Math.floor(h/2);d={top:v,bottom:y,left:b,right:h-b,front:g,back:_,type:`SAME`}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:f,outHeight:p,outWidth:m}}function qs(e,t){if(!t)return Math.trunc(e);switch(t){case`round`:return Math.round(e);case`ceil`:return Math.ceil(e);case`floor`:return Math.floor(e);default:throw Error(`Unknown roundingMode ${t}`)}}function Js(e){let[t,n,r]=Hs(e);return t===1&&n===1&&r===1}function Ys(e,t){return Js(e)||Js(t)}function Xs(e){return Hs(e).every(e=>e>0)}function Zs(e){if(e===`NHWC`)return`channelsLast`;if(e===`NCHW`)return`channelsFirst`;throw Error(`Unknown dataFormat ${e}`)}function Qs(e,t,n){if(n!=null){if(typeof t==`string`)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t==`number`)O(Se(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t==`object`)t.forEach(t=>{t.forEach(t=>{O(Se(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}function $s(e,t){let n={x:P(e,`x`,`reshape`,`string_or_numeric`)},r={shape:t};return N.runKernel(cr,n,r)}var H=F({reshape_:$s});function ec(e,t,n,r,i){let a=P(e,`x`,`avgPool`,`float32`);O(Ys(n,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`);let o=a,s=!1;a.rank===3&&(s=!0,o=H(a,[1,a.shape[0],a.shape[1],a.shape[2]])),O(o.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`),Qs(`avgPool`,r,i);let c={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:i},u=N.runKernel(bt,c,l);return u=R(u,a.dtype),s?H(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var tc=F({avgPool_:ec});function nc(e,t,n,r,i,a=`NDHWC`){let o=P(e,`x`,`avgPool3d`,`float32`),s=o,c=!1;o.rank===4&&(c=!0,s=H(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),O(s.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${s.rank}.`),O(a===`NDHWC`,()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),O(typeof n==`number`&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),Qs(`avgPool3d`,r,i);let l={x:s},u={filterSize:t,strides:n,pad:r,dimRoundingMode:i,dataFormat:a},d=N.runKernel(St,l,u);return d=R(d,s.dtype),c?H(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var rc=F({avgPool3d_:nc});function ic(e,t=0){O(e.length>=1,()=>`Pass at least one tensor to concat`);let n=La(e,`tensors`,`concat`,`string_or_numeric`);if(n[0].dtype===`complex64`&&n.forEach(e=>{if(e.dtype!==`complex64`)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${e.dtype}. `)}),n.length===1)return rs(n[0]);let r=n,i={axis:t};return N.runKernel(Ft,r,i)}var ac=F({concat_:ic});function oc(e,t,n=!1,r=!1){let i=P(e,`a`,`matMul`),a=P(t,`b`,`matMul`);[i,a]=va(i,a);let o={a:i,b:a},s={transposeA:n,transposeB:r};return N.runKernel(wt,o,s)}var sc=F({matMul_:oc});function cc(e){let t={x:P(e,`x`,`sigmoid`,`float32`)};return N.runKernel(Tr,t)}var lc=F({sigmoid_:cc});function uc(e,t,n){let r=P(e,`x`,`slice`,`string_or_numeric`);if(r.rank===0)throw Error(`Slicing scalar is not possible`);let i={x:r},a={begin:t,size:n};return N.runKernel(Sr,i,a)}var dc=F({slice_:uc});function fc(e){let t={x:P(e,`x`,`tanh`,`float32`)};return N.runKernel(Ur,t)}var pc=F({tanh_:fc});function mc(e,t,n){let r=P(e,`x`,`batchToSpaceND`),i=t.reduce((e,t)=>e*t);O(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),O(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),O(r.shape[0]%i===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(` * `)} === ${i}`);let a={x:r},o={blockShape:t,crops:n};return N.runKernel(Tt,a,o)}var hc=F({batchToSpaceND_:mc});function gc(e){let t;return t=e.rank===0||e.rank===1?H(e,[1,1,1,e.size]):e.rank===2?H(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?H(e,[1,e.shape[0],e.shape[1],e.shape[2]]):e,t}function _c(e,t,n,r,i,a){a??=.001;let o=P(e,`x`,`batchNorm`),s=P(t,`mean`,`batchNorm`),c=P(n,`variance`,`batchNorm`),l;i!=null&&(l=P(i,`scale`,`batchNorm`));let u;r!=null&&(u=P(r,`offset`,`batchNorm`)),O(s.rank===c.rank,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),O(u==null||s.rank===u.rank,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),O(l==null||s.rank===l.rank,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let d={x:gc(o),scale:l,offset:u,mean:s,variance:c},f={varianceEpsilon:a};return H(N.runKernel(pn,d,f),o.shape)}var vc=F({batchNorm_:_c});function yc(e,t,n,r,i,a){let o=P(e,`x`,`batchNorm`),s=P(t,`mean`,`batchNorm`),c=P(n,`variance`,`batchNorm`),l;i!=null&&(l=P(i,`scale`,`batchNorm`));let u;return r!=null&&(u=P(r,`offset`,`batchNorm`)),O(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),O(s.rank===2||s.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${s.rank}.`),O(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&O(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&O(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),vc(o,s,c,u,l,a)}var bc=F({batchNorm2d_:yc});function xc(e,t,n,r,i,a){let o=P(e,`x`,`batchNorm`),s=P(t,`mean`,`batchNorm`),c=P(n,`variance`,`batchNorm`),l;i!=null&&(l=P(i,`scale`,`batchNorm`));let u;return r!=null&&(u=P(r,`offset`,`batchNorm`)),O(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),O(s.rank===3||s.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${s.rank}.`),O(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&O(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&O(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),vc(o,s,c,u,l,a)}var Sc=F({batchNorm3d_:xc});function Cc(e,t,n,r,i,a){let o=P(e,`x`,`batchNorm`),s=P(t,`mean`,`batchNorm`),c=P(n,`variance`,`batchNorm`),l;i!=null&&(l=P(i,`scale`,`batchNorm`));let u;return r!=null&&(u=P(r,`offset`,`batchNorm`)),O(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),O(s.rank===4||s.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${s.rank}.`),O(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&O(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&O(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),vc(o,s,c,u,l,a)}var wc=F({batchNorm4d_:Cc});function Tc(e,t,n){let r=P(e,`x`,`bincount`),i=P(t,`weights`,`bincount`);O(r.dtype===`int32`,()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),O(n>=0,()=>`size must be non-negative, but got ${n}.`),O(i.size===r.size||i.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${i.shape}.`);let a={x:r,weights:i},o={size:n};return N.runKernel(Et,a,o)}var Ec=F({bincount_:Tc});function Dc(e,t){let n=P(e,`broadcastTo`,`x`),r=n.shape;if(Ye(t),t.length<n.rank)throw Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){let e=n.shape.slice();for(;e.length<t.length;)e.unshift(1);n=H(n,e)}let i=n.shape,a=Array.from(t);for(let e=t.length-1;e>=0;e--)if(i[e]===t[e])a[e]=1;else if(n.shape[e]!==1)throw Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(a.map((e,t)=>e>1?t:-1).filter(e=>e>=0).length===0)return rs(n);let o={x:n},s={reps:a};return N.runKernel(Wr,o,s)}var Oc=F({broadcastTo_:Dc});function kc(e){let t={x:P(e,`x`,`ceil`,`float32`)};return N.runKernel(jt,t)}var Ac=F({ceil_:kc});function jc(e,t,n){Ye(e),n||=Be(t);let r={shape:e,value:t,dtype:n};return N.runKernel(ln,{},r)}function Mc(e,t,n){let r=P(e,`x`,`clipByValue`);if(O(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return jc(r.shape,t,r.dtype);let i={x:r},a={clipValueMin:t,clipValueMax:n};return N.runKernel(Mt,i,a)}var Nc=F({clipByValue_:Mc});function Pc(e){return ac(e,0)}var Fc=F({concat1d_:Pc});function Ic(e,t){return ac(e,t)}var Lc=F({concat2d_:Ic});function Rc(e,t){return ac(e,t)}var zc=F({concat3d_:Rc});function Bc(e,t){return ac(e,t)}var Vc=F({concat4d_:Bc});function Hc(e,t,n,r,i=`NHWC`,a=[1,1],o){let s=P(e,`x`,`conv2d`,`float32`),c=P(t,`filter`,`conv2d`,`float32`),l=s,u=!1;s.rank===3&&(u=!0,l=H(s,[1,s.shape[0],s.shape[1],s.shape[2]])),O(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),O(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),Qs(`conv2d`,r,o);let d=i===`NHWC`?l.shape[3]:l.shape[1];O(d===c.shape[2],()=>`Error in conv2d: depth of input (${d}) must match input depth for filter ${c.shape[2]}.`),O(Ys(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),O(Xs(a),()=>`Error in conv2D: Dilated rates should be larger than 0.`),O(Xs(n),()=>`Error in conv2D: Strides should be larger than 0.`);let f={x:l,filter:c},p={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o},m=N.runKernel(It,f,p);return u?H(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var Uc=F({conv2d_:Hc});function Wc(e,t,n,r,i=`NWC`,a=1,o){let s=P(e,`x`,`conv1d`),c=P(t,`filter`,`conv1d`),l=s,u=!1;s.rank===2&&(u=!0,l=H(s,[1,s.shape[0],s.shape[1]])),O(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),O(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),Qs(`conv1d`,r,o),O(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),O(Ys(n,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`),O(Xs(a),()=>`Error in conv1D: Dilated rates should be larger than 0.`),O(Xs(n),()=>`Error in conv1D: Stride should be larger than 0.`),O(i===`NWC`,()=>`Error in conv1d: got dataFormat of ${i} but only NWC is currently supported.`);let d=H(c,[1,c.shape[0],c.shape[1],c.shape[2]]),f=Uc(H(l,[l.shape[0],1,l.shape[1],l.shape[2]]),d,[1,n],r,`NHWC`,[1,a],o);return u?H(f,[f.shape[2],f.shape[3]]):H(f,[f.shape[0],f.shape[2],f.shape[3]])}var Gc=F({conv1d_:Wc});function Kc(e,t,n,r,i,a=`NHWC`,o){O(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let s=e,c=t,l=!1;t.rank===3&&(l=!0,c=H(t,[1,t.shape[0],t.shape[1],t.shape[2]]),s=[1,e[0],e[1],e[2]]),O(s.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${s.length}.`),O(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),O(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);let u=a===`NHWC`?s[3]:s[1],d=a===`NHWC`?c.shape[3]:c.shape[1];O(u===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[2]}.`),O(d===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${d}) must match output depth for filter ${n.shape[3]}.`),Qs(`conv2dDerInput`,i,o);let f={dy:c,filter:n},p={strides:r,pad:i,dataFormat:a,dimRoundingMode:o,inputShape:s},m=N.runKernel(Rt,f,p);return l?H(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var qc=F({conv2DBackpropInput_:Kc});function Jc(e,t,n,r,i,a){return qc(n,P(e,`x`,`conv2dTranspose`),P(t,`filter`,`conv2dTranspose`),r,i,`NHWC`,a)}var Yc=F({conv2dTranspose_:Jc});function Xc(e,t,n,r,i=`NDHWC`,a=[1,1,1]){let o=P(e,`x`,`conv3d`),s=P(t,`filter`,`conv3d`),c=o,l=!1;o.rank===4&&(l=!0,c=H(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),O(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),O(s.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${s.rank}.`),O(c.shape[4]===s.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${s.shape[3]}.`),O(Ys(n,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),O(i===`NDHWC`,()=>`Error in conv3d: got dataFormat of ${i} but only NDHWC is currently supported.`),O(Xs(a),()=>`Error in conv3D: Dilated rates should be larger than 0.`),O(Xs(n),()=>`Error in conv3D: Strides should be larger than 0.`);let u={x:c,filter:s},d={strides:n,pad:r,dataFormat:i,dilations:a},f=N.runKernel(zt,u,d);return l?H(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var Zc=F({conv3d_:Xc});function Qc(e,t,n,r,i){O(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let a=e,o=t,s=!1;t.rank===4&&(s=!0,o=H(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,e[0],e[1],e[2],e[3]]);let c=a[4],l=o.shape[4];O(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),O(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),O(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),O(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),O(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);let u={dy:o,filter:n},d={pad:i,strides:r,inputShape:a},f=N.runKernel(Vt,u,d);return s?H(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var $c=F({conv3DBackpropInput_:Qc});function el(e,t,n,r,i){return $c(n,P(e,`x`,`conv3dTranspose`),P(t,`filter`,`conv3dTranspose`),r,i)}var tl=F({conv3dTranspose_:el});function nl(e){let t={x:P(e,`x`,`cos`,`float32`)};return N.runKernel(`Cos`,t)}var rl=F({cos_:nl});function il(e){let t={x:P(e,`x`,`cosh`,`float32`)};return N.runKernel(Ht,t)}var al=F({cosh_:il});function ol(e,t=0,n=!1,r=!1){let i={x:P(e,`x`,`cumprod`)},a={axis:t,exclusive:n,reverse:r};return N.runKernel(Ut,i,a)}var sl=F({cumprod_:ol});function cl(e,t=0,n=!1,r=!1){let i={x:P(e,`x`,`cumsum`)},a={axis:t,exclusive:n,reverse:r};return N.runKernel(Wt,i,a)}var ll=F({cumsum_:cl});function ul(e,t,n,r=!1){let i=P(e,`x`,`denseBincount`),a=P(t,`weights`,`denseBincount`);O(i.dtype===`int32`,()=>`Error in denseBincount: input dtype must be int32, but got ${i.dtype}`),O(i.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${i.rank}.`),O(n>=0,()=>`size must be non-negative, but got ${n}.`),O(a.size===i.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${i.shape}, weights shape: ${a.shape}.`);let o={x:i,weights:a},s={size:n,binaryOutput:r};return N.runKernel(Kt,o,s)}var dl=F({denseBincount_:ul});function fl(e,t,n=`NHWC`){let r=P(e,`x`,`depthToSpace`,`float32`),i=n===`NHWC`?r.shape[1]:r.shape[2],a=n===`NHWC`?r.shape[2]:r.shape[3],o=n===`NHWC`?r.shape[3]:r.shape[1];O(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),O(i*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${i} and ${t}  for depthToSpace with input shape
    ${r.shape}`),O(a*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${t} for depthToSpace with input shape
        ${r.shape}`),O(o%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`);let s={x:r},c={blockSize:t,dataFormat:n};return N.runKernel(qt,s,c)}var pl=F({depthToSpace_:fl});function ml(e,t,n,r,i=`NHWC`,a=[1,1],o){let s=P(e,`x`,`depthwiseConv2d`,`float32`),c=P(t,`filter`,`depthwiseConv2d`,`float32`),l=s,u=!1;s.rank===3&&(u=!0,l=H(s,[1,s.shape[0],s.shape[1],s.shape[2]])),O(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),O(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);let d=i===`NHWC`?l.shape[3]:l.shape[1];O(d===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${d}) must match the inChannels dimension in filter ${c.shape[2]}.`),Qs(`depthwiseConv2d`,r,o);let f={x:l,filter:c},p={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o},m=N.runKernel(Jt,f,p);return u?H(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var hl=F({depthwiseConv2d_:ml});function gl(e,t,n,r,i=[1,1],a=`NHWC`){let o=P(e,`x`,`dilation2d`),s=P(t,`filter`,`dilation2d`);O(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),O(s.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${s.rank}.`),O(a===`NHWC`,()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let c=o,l=!1;o.rank===3&&(c=H(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0),O(c.shape[3]===s.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${c.shape[3]} vs ${s.shape[2]}`);let u={x:c,filter:s},d={strides:n,pad:r,dilations:i},f=N.runKernel(Qt,u,d);return l?H(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var _l=F({dilation2d_:gl});function vl(e,t){let n=e.length,r=[];for(let i=0;i<n;i++){let a=n-1-i,o=e[a]||1;(t[t.length-1-i]||1)>1&&o===1&&r.unshift(a)}return r}function yl(e,t){let n=[];for(let r=0;r<t.length;r++){let i=e[e.length-r-1],a=t.length-r-1,o=t[a];(i==null||i===1&&o>1)&&n.unshift(a)}return n}function U(e,t){let n=Math.max(e.length,t.length),r=Array(n);for(let i=0;i<n;i++){let a=e[e.length-i-1];a??=1;let o=t[t.length-i-1];if(o??=1,a===1)r[n-i-1]=o;else if(o===1)r[n-i-1]=a;else if(a!==o){let n=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(n)}else r[n-i-1]=a}return r}function bl(e,t){let n=P(e,`a`,`equal`,`string_or_numeric`),r=P(t,`b`,`equal`,`string_or_numeric`);[n,r]=va(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(on,i)}var xl=F({equal_:bl});function Sl(e,t,n){let r=P(t,`a`,`where`),i=P(n,`b`,`where`),a=P(e,`condition`,`where`,`bool`),o=U(U(a.shape,r.shape),i.shape),s={condition:Oc(a,o),t:Oc(r,o),e:Oc(i,o)};return N.runKernel(br,s)}var Cl=F({where_:Sl});function wl(e){let t={x:P(e,`x`,`zerosLike`)};return N.runKernel(Zr,t)}var Tl=F({zerosLike_:wl});function El(e,t){let n=P(e,`a`,`div`),r=P(t,`b`,`div`);[n,r]=va(n,r);let i=B(n,r),a=Tl(i);return Cl(xl(r,a),a,i)}var Dl=F({divNoNan_:El});function Ol(e,t){let n=P(e,`t1`,`dot`),r=P(t,`t2`,`dot`);O((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);let i=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];if(O(i===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${i} and ${a}.`),n.rank===1&&r.rank===1)return H(sc(H(n,[1,-1]),H(r,[-1,1])),[]);if(n.rank===1&&r.rank===2){let e=sc(H(n,[1,-1]),H(r,[r.shape[0],r.shape[1]]));return H(e,[e.size])}else if(n.rank===2&&r.rank===1){let e=sc(n,H(r,[-1,1]));return H(e,[e.size])}else return sc(n,H(r,[r.shape[0],r.shape[1]]))}var kl=F({dot_:Ol});function Al(e,...t){let n=t.map((e,t)=>P(e,`tensors${t}`,`einsum`)),r={equation:e};return N.runKernel(rn,n,r)}var jl=F({einsum_:Al});function Ml(e){let t={x:P(e,`x`,`elu`,`float32`)};return N.runKernel(`Elu`,t)}var Nl=F({elu_:Ml});function Pl(e){let t=P(e,`x`,`erf`);O(t.dtype===`int32`||t.dtype===`float32`,()=>"Input dtype must be `int32` or `float32`."),t.dtype===`int32`&&(t=R(t,`float32`));let n={x:t};return N.runKernel(`Erf`,n)}var Fl=F({erf_:Pl});function Il(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Ll(e,t,n){let r=e.length+t.length,i=[],a=0,o=0;for(let s=0;s<r;s++)n.indexOf(s)===-1?i.push(e[a++]):i.push(t[o++]);return i}function Rl(e,t){let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]}function zl(e,t){return Ll(e,t.map(e=>1),t)}function Bl(e,t,n){O(Il(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function Vl(e,t){if(Il(e,t))return null;let n=[];for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(e=>n.push(e)),n}function Hl(e){return e.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function Ul(e,t){let n=[];for(let r=t-e;r<t;++r)n.push(r);return n}function Wl(e,t=null,n=!1){let r={x:P(e,`x`,`max`)},i={reductionIndices:t,keepDims:n};return N.runKernel(`Max`,r,i)}var Gl=F({max_:Wl});function Kl(e,t=null,n=!1){let r={x:P(e,`x`,`min`)},i={axis:t,keepDims:n};return N.runKernel(`Min`,r,i)}var ql=F({min_:Kl});function Jl(e,t){let n=P(e,`base`,`pow`),r=P(t,`exp`,`pow`);[n,r]=va(n,r);let i={a:n,b:r};return N.runKernel(`Pow`,i)}var Yl=F({pow_:Jl});function Xl(e,t){if((zi(e)&&t!==`string`||Array.isArray(e))&&t!==`complex64`)throw Error(`Error creating a new Scalar: value must be a primitive (number|boolean|string)`);if(t===`string`&&zi(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Va(e,[],[],t)}function Zl(e){let t={x:P(e,`x`,`sqrt`,`float32`)};return N.runKernel(Dr,t)}var Ql=F({sqrt_:Zl});function $l(e){let t=P(e,`x`,`square`);return N.runKernel(`Square`,{x:t},{})}var eu=F({square_:$l});function tu(e,t=null,n=!1){let r=P(e,`x`,`sum`);r.dtype===`bool`&&(r=R(r,`int32`));let i={x:r},a={axis:t,keepDims:n};return N.runKernel(`Sum`,i,a)}var W=F({sum_:tu});function nu(e,t=`euclidean`,n=null,r=!1){e=P(e,`x`,`norm`);let i=ru(e,t,n),a=i.shape;if(r){let t=Oe(n,e.shape);a=zl(i.shape,t)}return H(i,a)}function ru(e,t,n=null){if(e.rank===0)return ds(e);if(e.rank!==1&&n===null)return ru(H(e,[-1]),t,n);if(e.rank===1||typeof n==`number`||Array.isArray(n)&&n.length===1){if(t===1)return W(ds(e),n);if(t===1/0)return Gl(ds(e),n);if(t===-1/0)return ql(ds(e),n);if(t===`euclidean`||t===2)return Ql(W(Yl(ds(e),Xl(2,`int32`)),n));throw Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return Gl(W(ds(e),n[0]),n[1]-1);if(t===1/0)return Gl(W(ds(e),n[1]),n[0]);if(t===-1/0)return ql(W(ds(e),n[1]),n[0]);if(t===`fro`||t===`euclidean`)return Ql(W(eu(e),n));throw Error(`Error in norm: invalid ord value: ${t}`)}throw Error(`Error in norm: invalid axis: ${n}`)}var iu=F({norm_:nu});function au(e,t=null,n=!1){return iu(e,`euclidean`,t,n)}var ou=F({euclideanNorm_:au});function su(e){let t={x:P(e,`x`,`exp`)};return N.runKernel(`Exp`,t)}var cu=F({exp_:su});function lu(e,t=0){let n=P(e,`x`,`expandDims`,`string_or_numeric`);O(t<=n.rank,()=>`Axis must be <= rank of the tensor`);let r={input:n},i={dim:t};return N.runKernel(sn,r,i)}var uu=F({expandDims_:lu});function du(e){let t={x:P(e,`x`,`expm1`)};return N.runKernel(cn,t)}var fu=F({expm1_:du});function pu(e,t){let n=P(e,`x`,`tile`,`string_or_numeric`);O(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);let r={x:n},i={reps:t};return N.runKernel(Wr,r,i)}var mu=F({tile_:pu});function hu(e,t,n,r=`float32`){t??=e;let i=es([e,t],r),a=e<=t?e:t;for(let e=0;e<a;++e)i.set(1,e,e);let o=H(i.toTensor(),[e,t]);if(n==null)return o;if(n.length===1)return mu(uu(o,0),[n[0],1,1]);if(n.length===2)return mu(uu(uu(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return mu(uu(uu(uu(o,0),0),0),[n[0],n[1],n[2],1,1]);throw Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}var gu=F({eye_:hu});function _u(e){let t={x:P(e,`x`,`floor`,`float32`)};return N.runKernel(dn,t)}var vu=F({floor_:_u});function yu(e,t,n=0,r=0){let i={x:P(e,`x`,`gather`),indices:P(t,`indices`,`gather`,`int32`)},a={axis:n,batchDims:r};return N.runKernel(mn,i,a)}var bu=F({gather_:yu});function xu(e,t){let n=P(e,`a`,`greater`,`string_or_numeric`),r=P(t,`b`,`greater`,`string_or_numeric`);[n,r]=va(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(gn,i)}var Su=F({greater_:xu});function Cu(e,t){let n=P(e,`a`,`greaterEqual`,`string_or_numeric`),r=P(t,`b`,`greaterEqual`,`string_or_numeric`);[n,r]=va(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(_n,i)}var wu=F({greaterEqual_:Cu});function Tu(e){let t={input:P(e,`input`,`imag`)};return N.runKernel(bn,t)}var Eu=F({imag_:Tu});function Du(e){let t={x:P(e,`x`,`isFinite`)};return N.runKernel(xn,t)}var Ou=F({isFinite_:Du});function ku(e){let t={x:P(e,`x`,`isInf`)};return N.runKernel(Sn,t)}var Au=F({isInf_:ku});function ju(e){let t={x:P(e,`x`,`isNaN`)};return N.runKernel(Cn,t)}var Mu=F({isNaN_:ju});function Nu(e,t=.2){let n={x:P(e,`x`,`leakyRelu`)},r={alpha:t};return N.runKernel(wn,n,r)}var Pu=F({leakyRelu_:Nu});function Fu(e,t){let n=P(e,`a`,`less`,`string_or_numeric`),r=P(t,`b`,`less`,`string_or_numeric`);[n,r]=va(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Tn,i)}var Iu=F({less_:Fu});function Lu(e,t){let n=P(e,`a`,`lessEqual`,`string_or_numeric`),r=P(t,`b`,`lessEqual`,`string_or_numeric`);[n,r]=va(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(En,i)}var Ru=F({lessEqual_:Lu});function zu(e,t=5,n=1,r=1,i=.5){let a=P(e,`x`,`localResponseNormalization`);O(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),O(Se(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let o=a,s=!1;a.rank===3&&(s=!0,o=H(a,[1,a.shape[0],a.shape[1],a.shape[2]]));let c={x:o},l={depthRadius:t,bias:n,alpha:r,beta:i},u=N.runKernel(`LRN`,c,l);return s?H(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var Bu=F({localResponseNormalization_:zu});function Vu(e){let t={x:P(e,`x`,`log`,`float32`)};return N.runKernel(`Log`,t)}var Hu=F({log_:Vu});function Uu(e){let t={x:P(e,`x`,`log1p`)};return N.runKernel(On,t)}var Wu=F({log1p_:Uu});function Gu(e,t){O(Ve(e),()=>`The f passed in variableGrads(f) must be a function`),O(t==null||Array.isArray(t)&&t.every(e=>e instanceof sa),()=>`The varList passed in variableGrads(f, varList) must be an array of variables`);let n=t!=null;if(!n){t=[];for(let e in N.registeredVariables)t.push(N.registeredVariables[e])}let r=n?t.filter(e=>!e.trainable):null,i=t.length;t=t.filter(e=>e.trainable),O(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${i} variables is trainable.`);let{value:a,grads:o}=N.gradients(e,t,null,!0);O(o.some(e=>e!=null),()=>`Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().`),O(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);let s={};return t.forEach((e,t)=>{o[t]!=null&&(s[e.name]=o[t])}),r?.forEach(e=>s[e.name]=null),{value:a,grads:s}}function Ku(e){return N.customGrad(e)}function qu(e){let t={x:P(e,`x`,`neg`)};return N.runKernel(`Neg`,t)}var Ju=F({neg_:qu});function Yu(e){let t={x:P(e,`x`,`softplus`)};return N.runKernel(Er,t)}var Xu=F({softplus_:Yu});function Zu(e){let t=P(e,`x`,`logSigmoid`);return Ku(e=>({value:Ju(Xu(Ju(e))),gradFunc:t=>V(t,lc(Ju(e)))}))(t)}var Qu=F({logSigmoid_:Zu});function $u(e,t){let n=P(e,`a`,`sub`),r=P(t,`b`,`sub`);[n,r]=va(n,r);let i={a:n,b:r};return N.runKernel(`Sub`,i)}var G=F({sub_:$u});function ed(e,t=-1){let n=P(e,`logits`,`logSoftmax`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Ku((e,n)=>{let r=G(e,Gl(e,t,!0)),i=G(R(r,`float32`),Hu(W(cu(r),t,!0)));return n([i]),{value:i,gradFunc:(e,n)=>{let[r]=n,i=cu(r);return G(e,V(W(e,t,!0),i))}}})(n)}var td=F({logSoftmax_:ed});function nd(e,t=null,n=!1){let r=P(e,`x`,`logSumExp`),i=Oe(t,r.shape),a=Gl(r,i,!0),o=Hu(W(cu(G(r,a)),i)),s=z(H(a,o.shape),o);return n?H(s,zl(s.shape,i)):s}var rd=F({logSumExp_:nd});function id(e,t){let n=P(e,`a`,`logicalAnd`,`bool`),r=P(t,`b`,`logicalAnd`,`bool`);U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(kn,i)}var ad=F({logicalAnd_:id});function od(e){let t={x:P(e,`x`,`logicalNot`,`bool`)};return N.runKernel(An,t)}var sd=F({logicalNot_:od});function cd(e,t){let n=P(e,`a`,`logicalOr`,`bool`),r=P(t,`b`,`logicalOr`,`bool`);U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(jn,i)}var ld=F({logicalOr_:cd});function ud(e,t){let n=P(e,`a`,`logicalXor`,`bool`),r=P(t,`b`,`logicalXor`,`bool`);return U(n.shape,r.shape),ad(ld(e,t),sd(ad(e,t)))}var dd=F({logicalXor_:ud});function fd(e,t,n,r,i){let a=P(e,`x`,`maxPool`),o=a,s=!1;a.rank===3&&(s=!0,o=H(a,[1,a.shape[0],a.shape[1],a.shape[2]])),O(o.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`),O(Ys(n,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`),Qs(`maxPool`,r,i);let c={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:i},u=N.runKernel(Fn,c,l);return s?H(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var pd=F({maxPool_:fd});function md(e,t=[1,1,1],n,r,i,a=`NDHWC`){let o=P(e,`x`,`maxPool3d`),s=o,c=!1;o.rank===4&&(c=!0,s=H(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),O(s.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${s.rank}.`),O(a===`NDHWC`,()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),Qs(`maxPool3d`,r,i);let l={x:s},u={filterSize:t,strides:n,pad:r,dimRoundingMode:i,dataFormat:a},d=N.runKernel(Ln,l,u);return c?H(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var hd=F({maxPool3d_:md});function gd(e,t){let n=P(e,`a`,`maximum`),r=P(t,`b`,`maximum`);[n,r]=va(n,r),n.dtype===`bool`&&(n=R(n,`int32`),r=R(r,`int32`)),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Pn,i)}var _d=F({maximum_:gd});function vd(e,t=null,n=!1){let r={x:P(e,`x`,`mean`)},i={axis:t,keepDims:n};return N.runKernel(Bn,r,i)}var yd=F({mean_:vd});function bd(e,t=`float32`){if(Ye(e),t===`complex64`)return Ba(bd(e,`float32`),bd(e,`float32`));let n=qe(k(e),t);return N.makeTensor(n,e,t)}function xd(e,t=`float32`){if(Ye(e),t===`complex64`)return Ba(xd(e,`float32`),bd(e,`float32`));let n=Ke(k(e),t);return N.makeTensor(n,e,t)}function Sd(e,t){let n=P(e,`a`,`minimum`),r=P(t,`b`,`minimum`);[n,r]=va(n,r),n.dtype===`bool`&&(n=R(n,`int32`),r=R(r,`int32`)),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Vn,i)}var Cd=F({minimum_:Sd});function wd(e,t,n){O(n===`reflect`||n===`symmetric`,()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);let r=P(e,`x`,`mirrorPad`);if(r.rank===0)throw Error(`mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad`);O(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);let i=+(n===`reflect`);for(let e=0;e<r.rank;e++)O(t[e].length===2,()=>`Invalid number of paddings. Must be length of 2 each.`),O(t[e][0]>=0&&t[e][0]<=r.shape[e]-i&&t[e][1]>=0&&t[e][1]<=r.shape[e]-i,()=>`Padding in dimension ${e} cannot be greater than or equal to ${r.shape[e]-i} or less than 0 for input of shape ${r.shape}`);let a={paddings:t,mode:n},o={x:r};return N.runKernel(Hn,o,a)}var Td=F({mirrorPad_:wd});function Ed(e,t){let n=P(e,`a`,`mod`),r=P(t,`b`,`mod`);[n,r]=va(n,r);let i={a:n,b:r};return N.runKernel(`Mod`,i)}var Dd=F({mod_:Ed});function Od(e,t=null,n=!1){e=P(e,`x`,`moments`);let r=Oe(t,e.shape),i=yd(e,r,n),a=i.shape;return n||(a=zl(i.shape,r)),{mean:i,variance:yd(eu(G(R(e,`float32`),H(i,a))),r,n)}}var kd=F({moments_:Od});function Ad(e,t){let n=P(e,`a`,`notEqual`,`string_or_numeric`),r=P(t,`b`,`notEqual`,`string_or_numeric`);[n,r]=va(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Gn,i)}var jd=F({notEqual_:Ad});function Md(e,t,n=1,r=0,i=`int32`){if(t<2)throw Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let a={indices:P(e,`indices`,`oneHot`,`int32`)},o={dtype:i,depth:t,onValue:n,offValue:r};return N.runKernel(Xn,a,o)}var Nd=F({oneHot_:Md});function Pd(e){let t={x:P(e,`x`,`onesLike`)};return N.runKernel(Yn,t)}var Fd=F({onesLike_:Pd});function Id(e,t,n=0){let r=P(e,`x`,`pad`);if(r.rank===0)throw Error(`pad(scalar) is not defined. Pass non-scalar to pad`);let i={paddings:t,constantValue:n},a={x:r};return N.runKernel(Qn,a,i)}var Ld=F({pad_:Id});function Rd(e,t,n){let r=P(e,`x`,`spaceToBatchND`);O(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),O(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),O(r.shape.reduce((e,r,i)=>i>0&&i<=t.length?e&&(r+n[i-1][0]+n[i-1][1])%t[i-1]===0:e,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);let i={x:r},a={blockShape:t,paddings:n};return N.runKernel(Or,i,a)}var zd=F({spaceToBatchND_:Rd});function Bd(e,t,n,r,i,a,o){i??=[1,1],a??=1,r===0&&(r=`valid`);let s=P(e,`x`,`maxPool`),c=s,l=!1;s.rank===3&&(l=!0,c=H(s,[1,s.shape[0],s.shape[1],s.shape[2]])),O(Ys(a,i),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${i}'`);let u=Fs(c.shape,t,a,i,r),d=[u.dilationHeight,u.dilationWidth],f;f=r===`same`?Hd([u.filterHeight,u.filterWidth],d):[[0,0],[0,0]];let p=d[0]===1&&d[1]===1,[m,h]=Vd([u.inHeight,u.inWidth],d,f),g=p?r:`valid`,_=p?c:zd(c,d,m),v=(n===`avg`?()=>tc(_,t,a,g,o):()=>pd(_,t,a,g,o))(),y=p?v:hc(v,d,h);return l?H(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function Vd(e,t,n){let r=n.map(e=>e[0]),i=n.map(e=>e[1]),a=e.concat(r,i),o=t.map((e,t)=>(e-a[t]%e)%e),s=i.map((e,t)=>e+o[t]);return[t.map((e,t)=>[r[t],s[t]]),t.map((e,t)=>[0,o[t]])]}function Hd(e,t){let n=e.map((e,n)=>e+(e-1)*(t[n]-1)).map(e=>e-1),r=n.map(e=>Math.floor(e/2)),i=n.map((e,t)=>e-r[t]);return n.map((e,t)=>[r[t],i[t]])}var Ud=F({pool_:Bd});function Wd(e,t){let n={x:P(e,`x`,`prelu`),alpha:P(t,`alpha`,`prelu`)};return N.runKernel($n,n)}var Gd=F({prelu_:Wd});function Kd(e,t=null,n=!1){let r=P(e,`x`,`prod`);r.dtype===`bool`&&(r=R(r,`int32`));let i={x:r},a={axis:t,keepDims:n};return N.runKernel(er,i,a)}var qd=F({prod_:Kd}),Jd=o(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=o();t.next=function(){var e=2091639*t.s0+t.c*23283064365386963e-26;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=e|0)},t.c=1,t.s0=n(` `),t.s1=n(` `),t.s2=n(` `),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function i(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function a(e,t){var n=new r(e),a=t&&t.state,o=n.next;return o.int32=function(){return n.next()*4294967296|0},o.double=function(){return o()+(o()*2097152|0)*11102230246251565e-32},o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}function o(){var e=4022871197;return function(t){t=String(t);for(var n=0;n<t.length;n++){e+=t.charCodeAt(n);var r=.02519603282416938*e;e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296}return(e>>>0)*23283064365386963e-26}}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.alea=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),Yd=o(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=``;t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor128=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),Xd=o(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorwow=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),Zd=o(((e,t)=>{(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.x,n=t.i,r=e[n],i;return r^=r>>>7,i=r^r<<24,r=e[n+1&7],i^=r^r>>>10,r=e[n+3&7],i^=r^r>>>3,r=e[n+4&7],i^=r^r<<7,r=e[n+7&7],r^=r<<13,i^=r^r<<9,e[n]=i,t.i=n+1&7,i};function n(e,t){var n,r=[];if(t===(t|0))r[0]=t;else for(t=``+t,n=0;n<t.length;++n)r[n&7]=r[n&7]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&r[n]===0;++n);for(n==8?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}n(t,e)}function i(e,t){return t.x=e.x.slice(),t.i=e.i,t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.x&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorshift7=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),Qd=o(((e,t)=>{(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.w,n=t.X,r=t.i,i,a;return t.w=e=e+1640531527|0,a=n[r+34&127],i=n[r=r+1&127],a^=a<<13,i^=i<<17,a^=a>>>15,i^=i>>>12,a=n[r]=a^i,t.i=r,a+(e^e>>>16)|0};function n(e,t){var n,r,i,a,o,s=[],c=128;for(t===(t|0)?(r=t,t=null):(t+=`\0`,r=0,c=Math.max(c,t.length)),i=0,a=-32;a<c;++a)t&&(r^=t.charCodeAt((a+32)%t.length)),a===0&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(o=o+1640531527|0,n=s[a&127]^=r+o,i=n==0?i+1:0);for(i>=128&&(s[(t&&t.length||0)&127]=-1),i=127,a=512;a>0;--a)r=s[i+34&127],n=s[i=i+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[i]=r^n;e.w=o,e.X=s,e.i=i}n(t,e)}function i(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.X&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor4096=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),$d=o(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.b,n=t.c,r=t.d,i=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^i,i=i-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^i,t.a=i-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=e|0):n+=e;for(var r=0;r<n.length+20;r++)t.b^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.tychei=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),ef=o(((e,t)=>{(function(e,n,r){var i=256,a=6,o=52,s=`random`,c=r.pow(i,a),l=r.pow(2,o),u=l*2,d=i-1,f;function p(e,t,o){var d=[];t=t==1?{entropy:!0}:t||{};var f=_(g(t.entropy?[e,y(n)]:e??v(),3),d),p=new m(d),b=function(){for(var e=p.g(a),t=c,n=0;e<l;)e=(e+n)*i,t*=i,n=p.g(1);for(;e>=u;)e/=2,t/=2,n>>>=1;return(e+n)/t};return b.int32=function(){return p.g(4)|0},b.quick=function(){return p.g(4)/4294967296},b.double=b,_(y(p.S),n),(t.pass||o||function(e,t,n,i){return i&&(i.S&&h(i,p),e.state=function(){return h(p,{})}),n?(r[s]=e,t):e})(b,f,`global`in t?t.global:this==r,t.state)}function m(e){var t,n=e.length,r=this,a=0,o=r.i=r.j=0,s=r.S=[];for(n||(e=[n++]);a<i;)s[a]=a++;for(a=0;a<i;a++)s[a]=s[o=d&o+e[a%n]+(t=s[a])],s[o]=t;(r.g=function(e){for(var t,n=0,a=r.i,o=r.j,s=r.S;e--;)t=s[a=d&a+1],n=n*i+s[d&(s[a]=s[o=d&o+t])+(s[o]=t)];return r.i=a,r.j=o,n})(i)}function h(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function g(e,t){var n=[],r=typeof e,i;if(t&&r==`object`)for(i in e)try{n.push(g(e[i],t-1))}catch{}return n.length?n:r==`string`?e:e+`\0`}function _(e,t){for(var n=e+``,r,i=0;i<n.length;)t[d&i]=d&(r^=t[d&i]*19)+n.charCodeAt(i++);return y(t)}function v(){try{var t;return f&&(t=f.randomBytes)?t=t(i):(t=new Uint8Array(i),(e.crypto||e.msCrypto).getRandomValues(t)),y(t)}catch{var r=e.navigator,a=r&&r.plugins;return[+new Date,e,a,e.screen,y(n)]}}function y(e){return String.fromCharCode.apply(0,e)}if(_(r.random(),n),typeof t==`object`&&t.exports){t.exports=p;try{f=Xo()}catch{}}else typeof define==`function`&&define.amd?define(function(){return p}):r[`seed`+s]=p})(typeof self<`u`?self:e,[],Math)})),tf=l(o(((e,t)=>{var n=Jd(),r=Yd(),i=Xd(),a=Zd(),o=Qd(),s=$d(),c=ef();c.alea=n,c.xor128=r,c.xorwow=i,c.xorshift7=a,c.xor4096=o,c.tychei=s,t.exports=c}))()),nf=class{constructor(e,t,n,r,i){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);let a=i||Math.random();this.random=tf.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){let e=this.nextVal;return this.nextVal=NaN,e}let e,t,n=!1;for(;!n;){let r,i,a;do r=2*this.random()-1,i=2*this.random()-1,a=r*r+i*i;while(a>=1||a===0);let o=Math.sqrt(-2*Math.log(a)/a);e=this.mean+this.stdDev*r*o,t=this.mean+this.stdDev*i*o,(!this.truncated||this.isValidTruncated(e))&&(n=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype===`float32`?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}},rf=class{constructor(e=0,t=1,n,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype===`float32`,this.min=e,this.range=t-e,this.dtype=n,r??=Math.random(),typeof r==`number`&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=tf.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}};function af(e,t=0,n=1,r,i){if(Ye(e),r!=null&&r===`bool`)throw Error(`Unsupported data type ${r}`);let a=new nf(t,n,r,!1,i),o=es(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var of=F({randomNormal_:af});function sf(e,t=0,n=1,r=`float32`,i){Ye(e);let a=es(e,r),o=new rf(t,n,null,i);for(let e=0;e<a.values.length;e++)a.values[e]=o.nextValue();return a.toTensor()}var cf=F({randomUniform_:sf});function lf(e,t,n=1,r=`float32`){if(n===0)throw Error(`Cannot have a step of zero`);let i={start:e,stop:t,step:n,dtype:r};return N.runKernel(ir,{},i)}function uf(e){let t={input:P(e,`input`,`real`)};return N.runKernel(ar,t)}var df=F({real_:uf});function ff(e){let t={x:P(e,`x`,`reciprocal`)};return N.runKernel(or,t)}var pf=F({reciprocal_:ff});function mf(e){let t={x:P(e,`x`,`relu`)};return N.runKernel(sr,t)}var hf=F({relu_:mf});function gf(e){let t={x:P(e,`x`,`relu6`)};return N.runKernel(pr,t)}var _f=F({relu6_:gf});function vf(e,t){let n={x:P(e,`x`,`reverse`)},r={dims:t};return N.runKernel(mr,n,r)}var yf=F({reverse_:vf});function bf(e){let t={x:P(e,`x`,`round`)};return N.runKernel(hr,t)}var xf=F({round_:bf});function Sf(e){let t={x:P(e,`x`,`rsqrt`,`float32`)};return N.runKernel(gr,t)}var Cf=F({rsqrt_:Sf});function wf(e){let t={x:P(e,`x`,`selu`)};return N.runKernel(xr,t)}var Tf=F({selu_:wf});function Ef(e,t,n,r,i,a=[1,1],o=`NHWC`){let s=P(e,`x`,`separableConv2d`),c=P(t,`depthwiseFilter`,`separableConv2d`),l=P(n,`pointwiseFilter`,`separableConv2d`),u=s,d=!1;if(s.rank===3&&(d=!0,u=H(s,[1,s.shape[0],s.shape[1],s.shape[2]])),o===`NCHW`)throw Error(`separableConv2d currently does not support dataFormat NCHW; only NHWC is supported`);O(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),O(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),O(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),O(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),O(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);let f=c.shape[2],p=c.shape[3];O(l.shape[2]===f*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*p}, but got ${l.shape[2]}.`);let m=Uc(hl(u,c,r,i,o,a),l,1,`valid`,o);return d?H(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var Df=F({separableConv2d_:Ef});function Of(e){let t={x:P(e,`x`,`sign`)};return N.runKernel(wr,t)}var kf=F({sign_:Of});function Af(e){let t={x:P(e,`x`,`sin`,`float32`)};return N.runKernel(`Sin`,t)}var jf=F({sin_:Af});function Mf(e){let t={x:P(e,`x`,`sinh`)};return N.runKernel(Cr,t)}var Nf=F({sinh_:Mf});function Pf(e,t,n){let r=P(e,`x`,`slice1d`);return O(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),dc(r,[t],[n])}var Ff=F({slice1d_:Pf});function If(e,t,n){let r=P(e,`x`,`slice2d`);return O(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),dc(r,t,n)}var Lf=F({slice2d_:If});function Rf(e,t,n){let r=P(e,`x`,`slice3d`);return O(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),dc(r,t,n)}var zf=F({slice3d_:Rf});function Bf(e,t,n){let r=P(e,`x`,`slice4d`);return O(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),dc(r,t,n)}var Vf=F({slice4d_:Bf});function Hf(e,t=-1){let n=P(e,`logits`,`softmax`,`float32`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);let r={logits:n},i={dim:t};return N.runKernel(Ar,r,i)}var Uf=F({softmax_:Hf});function Wf(e){O(e.dtype===`complex64`,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);let t={input:e};return N.runKernel(`FFT`,t)}var Gf=F({fft_:Wf});function Kf(e){O(e.dtype===`complex64`,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);let t={input:e};return N.runKernel(yn,t)}var qf=F({ifft_:Kf});function Jf(e){let t=e.shape[e.shape.length-1],n=e.size/t,r;if(t<=2)r=qf(H(e,[n,t]));else{let i=[n,2*(t-1)],a=H(df(e),[n,t]),o=H(Eu(e),[n,t]),s=yf(dc(a,[0,1],[n,t-2]),1),c=V(yf(dc(o,[0,1],[n,t-2]),1),Xl(-1));r=qf(H(Ba(ac([a,s],1),ac([o,c],1)),[i[0],i[1]]))}if(r=df(r),e.rank===3&&e.shape[0]!==0){let t=r,n=e.shape[0];r=H(r,[n,r.shape[0]/n,r.shape[1]]),t.dispose()}return r}var Yf=F({irfft_:Jf});function Xf(e,t,n=0){let r={x:P(e,`x`,`split`)},i={numOrSizeSplits:t,axis:n};return N.runKernel(kr,r,i)}var Zf=F({split_:Xf});function Qf(e,t){O(e.dtype===`float32`,()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1],r=e.size/n,i;if(t!=null&&t<n){let r=e.shape.map(e=>0),a=e.shape.map(e=>e);a[e.shape.length-1]=t,i=dc(e,r,a),n=t}else if(t!=null&&t>n){let r=e.shape.map(e=>e);r[e.shape.length-1]=t-n,i=ac([e,bd(r)],e.shape.length-1),n=t}else i=e;let a=Tl(i),o=Gf(H(Ba(i,a),[r,n])),s=Math.floor(n/2)+1,c=df(o),l=Eu(o),u=Zf(c,[s,n-s],c.shape.length-1),d=Zf(l,[s,n-s],l.shape.length-1),f=i.shape.slice();return f[i.shape.length-1]=s,H(Ba(u[0],d[0]),f)}var $f=F({rfft_:Qf});function ep(e,t){let n=P(e,`a`,`squaredDifference`),r=P(t,`b`,`squaredDifference`);[n,r]=va(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Ir,i,{})}var tp=F({squaredDifference_:ep});function np(e,t){let n=P(e,`x`,`squeeze`,`string_or_numeric`);return H(n,ke(n.shape,t).newShape)}var rp=F({squeeze_:np});function ip(e,t=0){let n=La(e,`tensors`,`stack`,`string_or_numeric`);O(n.length>=1,()=>`Pass at least one tensor to tf.stack`),n.length>0&&O(t<=n[0].rank,()=>`Axis must be <= rank of the tensor`);let r=n,i={axis:t};return N.runKernel(Zn,r,i)}var ap=F({stack_:ip});function op(e,t=0){let n={x:P(e,`x`,`step`)},r={alpha:t};return N.runKernel(Qr,n,r)}var sp=F({step_:op});function cp(e,t,n,r,i=0,a=0,o=0,s=0,c=0){let l={x:P(e,`x`,`stridedSlice`,`string_or_numeric`)},u={begin:t,end:n,strides:r,beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:c};return N.runKernel(zr,l,u)}var lp=F({stridedSlice_:cp});function up(e){let t={x:P(e,`x`,`tan`,`float32`)};return N.runKernel(`Tan`,t)}var dp=F({tan_:up});function fp(e,t){be(e);let n=Pa(e,t);if(n.length!==1)throw Error(`tensor1d() requires values to be a flat/TypedArray`);return Va(e,null,n,t)}function pp(e,t,n){if(be(e),t!=null&&t.length!==2)throw Error(`tensor2d() requires shape to have two numbers`);let r=Pa(e,n);if(r.length!==2&&r.length!==1)throw Error(`tensor2d() requires values to be number[][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Va(e,t,r,n)}function mp(e,t,n){if(be(e),t!=null&&t.length!==4)throw Error(`tensor4d() requires shape to have four numbers`);let r=Pa(e,n);if(r.length!==4&&r.length!==1)throw Error(`tensor4d() requires values to be number[][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor4d() requires shape to be provided when `values` are a flat array");return Va(e,t,r,n)}function hp(e,t,n){let r=t.rank>1?t.shape[t.rank-1]:1,i=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${i}.`;if(n.rank<i)throw Error(a+` update.rank < ${i}. `);if(e.length<r+(n.rank-i))throw Error(a+` Output shape length < ${r+(n.rank-i)}`);if(n.rank!==i+e.length-r)throw Error(a+` update.rank != ${i+e.length-r}`);for(let e=0;e<i;++e)if(n.shape[e]!==t.shape[e])throw Error(a+` updates.shape[${e}] (${n.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<n.rank-i;++t)if(n.shape[t+i]!==e[t+r])throw Error(a+` updates.shape[${t+i}] (${n.shape[t+i]}) != shape[${t+i}] (${e[t+i]})`)}function gp(e,t,n){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!==`int32`)throw Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw Error(`Updates specified for empty output. updates shape: ${e.shape}`)}hp(n,t,e)}function _p(e,t,n){let r=t.shape.length,i=r>1?t.shape[r-1]:1,a=n.length,o=1;for(let e=i;e<a;++e)o*=n[e];let s=i<1?1:i,c=k(t.shape)/s,l=[...A(n.slice(0,i)),1],u=k(n);return{sliceRank:i,numUpdates:c,sliceSize:o,strides:l,outputSize:u}}function vp(e,t=1,n=!0){let r=P(e,`x`,`topk`);if(r.rank===0)throw Error(`topk() expects the input to be of rank 1 or higher`);let i=r.shape[r.shape.length-1];if(t<0)throw Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>i)throw Error(`'k' passed to topk() must be <= the last dimension (${i}) but got ${t}`);let a={x:r},o={k:t,sorted:n},[s,c]=N.runKernel(Gr,a,o);return{values:s,indices:c}}var yp=F({topk_:vp});function bp(e,t=0,n=1,r,i){if(Ye(e),r!=null&&r===`bool`)throw Error(`Unsupported data type $ { dtype }`);let a=new nf(t,n,r,!0,i),o=es(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var xp=F({truncatedNormal_:bp});function Sp(e,t=0){let n=P(e,`x`,`unique`,`string_or_numeric`);O(n.rank>0,()=>`The input tensor must be at least 1D`);let r={x:n},i={axis:t},[a,o]=N.runKernel(Jr,r,i);return{values:a,indices:o}}var Cp=F({unique_:Sp});function wp(e,t,n){let r=P(e,`x`,`unsortedSegmentSum`),i=P(t,`segmentIds`,`unsortedSegmentSum`,`int32`);O(Se(n),()=>`numSegments must be of dtype int`);let a={x:r,segmentIds:i},o={numSegments:n};return N.runKernel(Xr,a,o)}var Tp=F({unsortedSegmentSum_:wp});function Ep(e,t=0){let n=P(e,`x`,`unstack`,`string_or_numeric`);O(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);let r={value:n},i={axis:t};return N.runKernel(Yr,r,i)}var Dp=F({unstack_:Ep});function Op(e,t=!0,n,r){return N.makeVariable(e,t,n,r)}function kp(e,t){let n=[];for(let e=0;e<t.length;e++)t[e]&&n.push(e);let r=es(e,`int32`),i=es([n.length,e.length],`int32`);for(let t=0;t<n.length;t++){let a=r.indexToLoc(n[t]),o=t*e.length;i.values.set(a,o)}return i.toTensor()}function Ap(e,t,n){let r=P(e,`x`,`transpose`);if(t??=r.shape.map((e,t)=>t).reverse(),O(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(e=>{O(e>=0&&e<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();let i={x:r},a={perm:t};return r.dtype===`complex64`?I(()=>{let e=df(r),t=Eu(r);return e=N.runKernel(qr,{x:e},a),t=N.runKernel(qr,{x:t},a),n&&(t=Ju(t)),Ba(e,t)}):N.runKernel(qr,i,a)}var jp=F({transpose_:Ap});function Mp(e,t){if(t==null)return e.shape.slice();if(xe(e.shape,t))return t;if(e.shape.length===t.length){let n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}function Np(e,t,n,r){let i=P(e,`x`,`dropout`);if(O(i.dtype===`float32`,()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${i.dtype} tensor instead.`),O(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof oa?i.clone():i;let a=Mp(i,n),o=1-t;return V(i,B(vu(z(cf(a,0,1,`float32`,r),o)),o))}var Pp=F({dropout_:Np});function Fp(e,t,n,r,i,a=`NHWC`,o){let s=e;e.rank===3&&(s=H(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=H(t,[1,t.shape[0],t.shape[1],t.shape[2]])),O(s.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${s.shape}.`),O(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),O(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);let l=a===`NHWC`?s.shape[3]:s.shape[1],u=a===`NHWC`?c.shape[3]:c.shape[1];O(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),O(u===n[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${n[3]}).`),Qs(`conv2dDerFilter`,i,o);let d={x:s,dy:c},f={strides:r,pad:i,dataFormat:a,dimRoundingMode:o,filterShape:n};return N.runKernel(Lt,d,f)}var Ip=F({conv2DBackpropFilter_:Fp});function Lp(e,t,n){if(n==null||n===`linear`)return e;if(n===`relu`)return V(e,sp(t));throw Error(`Cannot compute gradient for fused activation ${n}.`)}function Rp(e,t){let n=t,r=yl(e.shape,t.shape);return r.length>0&&(n=W(n,r)),H(n,e.shape)}function zp(e,t,n,r){if(t===`linear`)return e;if(t===`relu`)return hf(e);if(t===`elu`)return Nl(e);if(t===`relu6`)return _f(e);if(t===`prelu`)return Gd(e,n);if(t===`leakyrelu`)return Pu(e,r);if(t===`sigmoid`)return lc(e);throw Error(`Unknown fused activation ${t}.`)}var Bp=(e,t)=>!(e>0)||t===`linear`;function Vp({x:e,filter:t,strides:n,pad:r,dataFormat:i=`NHWC`,dilations:a=[1,1],dimRoundingMode:o,bias:s,activation:c=`linear`,preluActivationWeights:l,leakyreluAlpha:u}){if(c||=`linear`,Bp(N.state.gradientDepth,c)===!1){O(i===`NHWC`,()=>`Error in fused conv2d: got dataFormat of ${i} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let d=Uc(e,t,n,r,i,a,o);return s!=null&&(d=z(d,s)),zp(d,c,l,u)}let d=P(e,`x`,`conv2d`,`float32`),f=P(t,`filter`,`conv2d`,`float32`),p=d,m=!1;d.rank===3&&(m=!0,p=H(d,[1,d.shape[0],d.shape[1],d.shape[2]])),O(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),O(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),Qs(`fused conv2d`,r,o);let h=i===`NHWC`?p.shape[3]:p.shape[1];O(f.shape[2]===h,()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${f.shape[2]}.`),O(Ys(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let g=Ls(p.shape,f.shape,n,a,r,o),_;s!=null&&(_=P(s,`bias`,`fused conv2d`),[_]=va(_,d),i===`NHWC`?U(g.outShape,_.shape):(O(_.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${_.shape.length}.`),O(_.shape.length===0||_.shape[0]===g.outChannels||_.shape[0]===1,()=>`Error in fused conv2d: bias shape (${_.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let v;if(l!=null){let e=l.shape;if(O(e.length<=1||e.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`),e.length===1)O(e[0]===1||e[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${g.outChannels}).`);else if(e.length===3)try{U(e,g.outShape)}catch{let t=`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(t)}v=P(l,`prelu weights`,`fused conv2d`)}let y=(e,t)=>{O(i===`NHWC`,()=>`Error in gradient of fused conv2D: got dataFormat of ${i} but only NHWC is currently supported.`);let[o,s,l,u]=t,d=Lp(e,l,c);O(Js(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);let f=[qc(s.shape,d,o,n,r),Ip(s,d,o.shape,n,r)];if(u!=null){let e=Rp(u,d);f.push(e)}return f},b={x:p,filter:f,bias:_,preluActivationWeights:v},x={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o,activation:c,leakyreluAlpha:u};return s==null?Ku((e,t,n)=>{let r=N.runKernel(ni,b,x);return n([t,e,r]),m&&(r=H(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:y}})(p,f):Ku((e,t,n,r)=>{let i=N.runKernel(ni,b,x);return r([t,e,i,n]),m&&(i=H(i,[i.shape[1],i.shape[2],i.shape[3]])),{value:i,gradFunc:y}})(p,f,_)}var Hp=F({fusedConv2d_:Vp});function Up(e,t,n,r,i,a=[1,1],o){let s=e;e.rank===3&&(s=H(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=H(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={x:s,dy:c},u={strides:r,pad:i,dimRoundingMode:o,dilations:a,filterShape:n};return N.runKernel(Yt,l,u)}var Wp=F({depthwiseConv2dNativeBackpropFilter_:Up});function Gp(e,t,n,r,i,a=[1,1],o){let s=t,c=!1;t.rank===3&&(c=!0,s=H(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={dy:s,filter:n},u={strides:r,pad:i,dimRoundingMode:o,dilations:a,inputShape:e},d=N.runKernel(Xt,l,u);return c?H(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var Kp=F({depthwiseConv2dNativeBackpropInput_:Gp});function qp({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:i,activation:a=`linear`,preluActivationWeights:o,leakyreluAlpha:s=.2}){if(Bp(N.state.gradientDepth,a)===!1){let c=sc(e,t,n,r);return i!=null&&(c=z(c,i)),zp(c,a,o,s)}let c=P(e,`a`,`fused matMul`),l=P(t,`b`,`fused matMul`);[c,l]=va(c,l);let u=n?c.shape[c.rank-2]:c.shape[c.rank-1],d=r?l.shape[l.rank-1]:l.shape[l.rank-2],f=n?c.shape[c.rank-1]:c.shape[c.rank-2],p=r?l.shape[l.rank-2]:l.shape[l.rank-1],m=c.shape.slice(0,-2),h=l.shape.slice(0,-2),g=k(m),_=k(h);O(u===d,()=>`Error in fused matMul: inner shapes (${u}) and (${d}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`);let v=U(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([f,p]),y=n?H(c,[g,u,f]):H(c,[g,f,u]),b=r?H(l,[_,p,d]):H(l,[_,d,p]),x;i!=null&&(x=P(i,`bias`,`fused matMul`),[x]=va(x,c),U(v,x.shape));let S;o!=null&&(S=P(o,`prelu weights`,`fused matMul`));let C=(e,t)=>{let[o,s,c,l]=t,u=Lp(H(e,c.shape),c,a),d,f;if(!n&&!r?(d=sc(u,s,!1,!0),f=sc(o,u,!0,!1)):!n&&r?(d=sc(u,s,!1,!1),f=sc(u,o,!0,!1)):n&&!r?(d=sc(s,u,!1,!0),f=sc(o,u,!1,!1)):(d=sc(s,u,!0,!0),f=sc(u,o,!0,!0)),i!=null){let e=Rp(l,u);return[d,f,e]}else return[d,f]},w={a:y,b,bias:x,preluActivationWeights:S},T={transposeA:n,transposeB:r,activation:a,leakyreluAlpha:s};return i==null?Ku((e,t,n)=>{let r=N.runKernel(ti,w,T);return n([e,t,r]),{value:H(r,v),gradFunc:C}})(y,b):Ku((e,t,n,r)=>{let i=N.runKernel(ti,w,T);return r([e,t,i,n]),{value:H(i,v),gradFunc:C}})(y,b,x)}var Jp=F({fusedMatMul_:qp});function Yp(e,t,n,r,i=`bilinear`,a=0){let o=P(e,`image`,`cropAndResize`),s=P(t,`boxes`,`cropAndResize`,`float32`),c=P(n,`boxInd`,`cropAndResize`,`int32`),l=s.shape[0];O(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),O(s.rank===2&&s.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${s.shape}.`),O(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${s.shape}.`),O(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),O(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),O(i===`bilinear`||i===`nearest`,()=>`method must be bilinear or nearest, but was ${i}`);let u={image:o,boxes:s,boxInd:c},d={method:i,extrapolationValue:a,cropSize:r};return N.runKernel(Gt,u,d)}var Xp=F({cropAndResize_:Yp});function Zp(e){let t=P(e,`image`,`flipLeftRight`,`float32`);O(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);let n={image:t};return N.runKernel(un,n,{})}var Qp=F({flipLeftRight_:Zp});function $p(e){let t=P(e,`image`,`grayscaleToRGB`),n=t.rank-1,r=t.shape[n];O(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),O(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);let i=Array(t.rank);return i.fill(1,0,n),i[n]=3,mu(t,i)}var em=F({grayscaleToRGB_:$p});function tm(e){let t=P(e,`image`,`RGBToGrayscale`),n=t.rank-1,r=t.shape[n];O(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),O(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);let i=t.dtype,a=R(t,`float32`),o=fp([.2989,.587,.114]),s;switch(t.rank){case 2:s=jl(`ij,j->i`,a,o);break;case 3:s=jl(`ijk,k->ij`,a,o);break;case 4:s=jl(`ijkl,l->ijk`,a,o);break;case 5:s=jl(`ijklm,m->ijkl`,a,o);break;case 6:s=jl(`ijklmn,n->ijklm`,a,o);break;default:throw Error(`Not a valid tensor rank.`)}return s=uu(s,-1),R(s,i)}var nm=F({rgbToGrayscale_:tm});function rm(e,t,n=0,r=.5){let i=P(e,`image`,`rotateWithOffset`,`float32`);O(i.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${i.rank}.`);let a={image:i},o={radians:t,fillValue:n,center:r};return N.runKernel(ei,a,o)}var im=F({rotateWithOffset_:rm});function am(e,t,n,r,i,a){r??=.5,i??=-1/0,a??=0;let o=e.shape[0];return n=Math.min(n,o),O(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),O(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),O(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),O(t.rank===1,()=>`scores must be a 1D tensor`),O(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),O(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a}}function om(e,t,n,r=.5,i=-1/0){let a=P(e,`boxes`,`nonMaxSuppression`,`float32`),o=P(t,`scores`,`nonMaxSuppression`,`float32`),s=am(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;let c={maxOutputSize:n,iouThreshold:r,scoreThreshold:i};return N.runKernel(Kn,{boxes:a,scores:o},c)}var sm=F({nonMaxSuppression_:om});function cm(e,t,n){let r=lm(e,t,n),i=r<0?-(r+1):r;e.splice(i,0,t)}function lm(e,t,n){return dm(e,t,n||um)}function um(e,t){return e>t?1:e<t?-1:0}function dm(e,t,n){let r=0,i=e.length,a=0,o=!1;for(;r<i;){a=r+(i-r>>>1);let s=n(t,e[a]);s>0?r=a+1:(i=a,o=!s)}return o?r:-r-1}function fm(e,t,n,r,i){return hm(e,t,n,r,i,0)}function pm(e,t,n,r,i,a){return hm(e,t,n,r,i,0,!1,a,!0)}function mm(e,t,n,r,i,a){return hm(e,t,n,r,i,a,!0)}function hm(e,t,n,r,i,a,o=!1,s=!1,c=!1){let l=[];for(let e=0;e<t.length;e++)t[e]>i&&l.push({score:t[e],boxIndex:e,suppressBeginIndex:0});l.sort(vm);let u=a>0?-.5/a:0,d=[],f=[];for(;d.length<n&&l.length>0;){let t=l.pop(),{score:n,boxIndex:a,suppressBeginIndex:o}=t;if(n<i)break;let s=!1;for(let n=d.length-1;n>=o;--n){let o=gm(e,a,d[n]);if(o>=r){s=!0;break}if(t.score*=_m(r,u,o),t.score<=i)break}t.suppressBeginIndex=d.length,s||(t.score===n?(d.push(a),f.push(t.score)):t.score>i&&cm(l,t,vm))}let p=d.length,m=n-p;s&&m>0&&(d.push(...Array(m).fill(0)),f.push(...Array(m).fill(0)));let h={selectedIndices:d};return o&&(h.selectedScores=f),c&&(h.validOutputs=p),h}function gm(e,t,n){let r=e.subarray(t*4,t*4+4),i=e.subarray(n*4,n*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(i[0],i[2]),u=Math.min(i[1],i[3]),d=Math.max(i[0],i[2]),f=Math.max(i[1],i[3]),p=(s-a)*(c-o),m=(d-l)*(f-u);if(p<=0||m<=0)return 0;let h=Math.max(a,l),g=Math.max(o,u),_=Math.min(s,d),v=Math.min(c,f),y=Math.max(_-h,0)*Math.max(v-g,0);return y/(p+m-y)}function _m(e,t,n){let r=Math.exp(t*n*n);return n<=e?r:0}function vm(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}async function ym(e,t,n,r=.5,i=-1/0){let a=P(e,`boxes`,`nonMaxSuppressionAsync`),o=P(t,`scores`,`nonMaxSuppressionAsync`),s=am(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;let c=await Promise.all([a.data(),o.data()]),l=c[0],u=c[1],{selectedIndices:d}=fm(l,u,n,r,i);return a!==e&&a.dispose(),o!==t&&o.dispose(),fp(d,`int32`)}var bm=ym;function xm(e,t,n,r=.5,i=-1/0,a=0){let o=P(e,`boxes`,`nonMaxSuppression`),s=P(t,`scores`,`nonMaxSuppression`),c=am(o,s,n,r,i,a);n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma;let l={boxes:o,scores:s},u={maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a},d=N.runKernel(Jn,l,u);return{selectedIndices:d[0],selectedScores:d[1]}}var Sm=F({nonMaxSuppressionWithScore_:xm});async function Cm(e,t,n,r=.5,i=-1/0,a=0){let o=P(e,`boxes`,`nonMaxSuppressionAsync`),s=P(t,`scores`,`nonMaxSuppressionAsync`),c=am(o,s,n,r,i,a);n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma;let l=await Promise.all([o.data(),s.data()]),u=l[0],d=l[1],{selectedIndices:f,selectedScores:p}=mm(u,d,n,r,i,a);return o!==e&&o.dispose(),s!==t&&s.dispose(),{selectedIndices:fp(f,`int32`),selectedScores:fp(p)}}var wm=Cm;function Tm(e,t,n,r=.5,i=-1/0,a=!1){let o=P(e,`boxes`,`nonMaxSuppression`),s=P(t,`scores`,`nonMaxSuppression`),c=am(o,s,n,r,i,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,f={boxes:o,scores:s},p={maxOutputSize:l,iouThreshold:u,scoreThreshold:d,padToMaxOutputSize:a},m=N.runKernel(qn,f,p);return{selectedIndices:m[0],validOutputs:m[1]}}var Em=F({nonMaxSuppressionPadded_:Tm});async function Dm(e,t,n,r=.5,i=-1/0,a=!1){let o=P(e,`boxes`,`nonMaxSuppressionAsync`),s=P(t,`scores`,`nonMaxSuppressionAsync`),c=am(o,s,n,r,i,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,[f,p]=await Promise.all([o.data(),s.data()]),{selectedIndices:m,validOutputs:h}=pm(f,p,l,u,d,a);return o!==e&&o.dispose(),s!==t&&s.dispose(),{selectedIndices:fp(m,`int32`),validOutputs:Xl(h,`int32`)}}var Om=Dm;function km(e,t,n=!1,r=!1){let i=P(e,`images`,`resizeBilinear`);O(i.rank===3||i.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${i.rank}.`),O(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),O(r===!1||n===!1,()=>`Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.`);let a=i,o=!1;i.rank===3&&(o=!0,a=H(i,[1,i.shape[0],i.shape[1],i.shape[2]]));let[]=t,s={images:a},c={alignCorners:n,halfPixelCenters:r,size:t},l=N.runKernel(dr,s,c);return o?H(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var Am=F({resizeBilinear_:km});function jm(e,t,n=!1,r=!1){let i=P(e,`images`,`resizeNearestNeighbor`);O(i.rank===3||i.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${i.rank}.`),O(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),O(i.dtype===`float32`||i.dtype===`int32`,()=>"`images` must have `int32` or `float32` as dtype"),O(r===!1||n===!1,()=>`Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.`);let a=i,o=!1;i.rank===3&&(o=!0,a=H(i,[1,i.shape[0],i.shape[1],i.shape[2]]));let[]=t,s={images:a},c={alignCorners:n,halfPixelCenters:r,size:t},l=N.runKernel(lr,s,c);return o?H(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var Mm=F({resizeNearestNeighbor_:jm});function Nm(e,t=`binary`,n=!1,r=.5){let i=P(e,`image`,`threshold`),a=i.shape[0]*i.shape[1],o=V(fp([r]),255),s,c,l,u;if(O(i.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${i.rank}.`),O(i.shape[2]===3||i.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${i.shape[2]}.`),O(i.dtype===`int32`||i.dtype===`float32`,()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${i.dtype}.`),O(t===`otsu`||t===`binary`,()=>`Method must be binary or otsu, but was ${t}`),i.shape[2]===3){[s,c,l]=Zf(i,[1,1,1],-1);let e=V(s,.2989),t=V(c,.587),n=V(l,.114);u=z(z(e,t),n)}else u=e;return t===`otsu`&&(o=Pm(Ec(R(xf(u),`int32`),Ha([]),256),a)),R(V(n?Ru(u,o):Su(u,o),255),`int32`)}function Pm(e,t){let n=fp([-1]),r=fp([0]),i=fp([0]),a,o,s,c,l,u;for(let d=0;d<e.size-1;d++){a=dc(e,0,d+1),o=dc(e,d+1),l=B(W(a),t),u=B(W(o),t),s=B(W(V(a,lf(0,a.size))),W(a));let f=jc(o.shape,a.size),p=z(lf(0,o.size),f);c=B(W(V(o,p)),W(o));let m=G(s,c),h=G(s,c);i=V(V(V(l,u),m),h);let g=Su(i,r);r=Cl(g,i,r),n=Cl(g,fp([d]),n)}return n}var Fm=F({threshold_:Nm});function Im(e,t,n=`nearest`,r=`constant`,i=0,a){let o=P(e,`image`,`transform`,`float32`),s=P(t,`transforms`,`transform`,`float32`);O(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),O(s.rank===2&&(s.shape[0]===o.shape[0]||s.shape[0]===1)&&s.shape[1]===8,()=>`Error in transform: Input transform should be batch x 8 or 1 x 8`),O(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);let c={image:o,transforms:s},l={interpolation:n,fillMode:r,fillValue:i,outputShape:a};return N.runKernel(Kr,c,l)}var Lm=F({transform_:Im});function Rm(e,t,n){let r=P(e,`a`,`bandPart`);O(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);let i=r.shape,[a,o]=r.shape.slice(-2),s,c;typeof t==`number`?(O(t%1==0,()=>`bandPart(): numLower must be an integer, got ${t}.`),O(t<=a,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`),s=P(t<0?a:t,`numLower`,`bandPart`)):(O(t.dtype===`int32`,()=>`bandPart(): numLower's dtype must be an int32.`),s=Cl(Iu(t,0),a,Cd(t,a))),typeof n==`number`?(O(n%1==0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),O(n<=o,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`),c=P(n<0?o:n,`numUpper`,`bandPart`)):(O(n.dtype===`int32`,()=>`bandPart(): numUpper's dtype must be an int32.`),c=Cl(Iu(n,0),o,Cd(n,o)));let l=G(H(lf(0,a,1,`int32`),[-1,1]),lf(0,o,1,`int32`)),u=ad(Ru(l,s),wu(l,Ju(c))),d=bd([a,o],r.dtype);return H(ap(Dp(H(r,[-1,a,o])).map(e=>Cl(u,e,d))),i)}var zm=F({bandPart_:Rm});function Bm(e){let t;if(Array.isArray(e)){t=!1,O(e!=null&&e.length>0,()=>`Gram-Schmidt process: input must not be null, undefined, or empty`);let n=e[0].shape[0];for(let t=1;t<e.length;++t)O(e[t].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${n})`)}else t=!0,e=Zf(e,e.shape[0],0).map(e=>rp(e,[0]));O(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);let n=[],r=e;for(let t=0;t<e.length;++t)n.push(N.tidy(()=>{let e=r[t];if(t>0)for(let r=0;r<t;++r){let t=V(W(V(n[r],e)),n[r]);e=G(e,t)}return B(e,iu(e,`euclidean`))}));return t?ap(n,0):n}var Vm=F({gramSchmidt_:Bm});function Hm(e,t=!1){if(O(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return Um(e,t);{let n=Dp(H(e,[e.shape.slice(0,e.shape.length-2).reduce((e,t)=>e*t),e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),r=[],i=[];return n.forEach(e=>{let[n,a]=Um(e,t);r.push(n),i.push(a)}),[H(ap(r,0),e.shape),H(ap(i,0),e.shape)]}}function Um(e,t=!1){return N.tidy(()=>{O(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);let n=e.shape[0],r=e.shape[1],i=gu(n),a=rs(e),o=pp([[1]],[1,1]),s=rs(o),c=n>=r?r:n;for(let e=0;e<c;++e){let t=a,c=s,l=i;[s,a,i]=N.tidy(()=>{let t=dc(a,[e,e],[n-e,1]),c=iu(t),l=dc(a,[e,e],[1,1]),u=Cl(Su(l,0),pp([[-1]]),pp([[1]])),d=G(l,V(u,c)),f=B(t,d);s=f.shape[0]===1?rs(o):ac([o,dc(f,[1,0],[f.shape[0]-1,f.shape[1]])],0);let p=Ju(B(sc(u,d),c)),m=dc(a,[e,0],[n-e,r]),h=V(p,s),g=jp(s);if(e===0)a=G(m,sc(h,sc(g,m)));else{let t=G(m,sc(h,sc(g,m)));a=ac([dc(a,[0,0],[e,r]),t],0)}let _=jp(h),v=dc(i,[0,e],[n,i.shape[1]-e]);if(e===0)i=G(v,sc(sc(v,s),_));else{let t=G(v,sc(sc(v,s),_));i=ac([dc(i,[0,0],[n,e]),t],1)}return[s,a,i]}),L([t,c,l])}return!t&&n>r&&(i=dc(i,[0,0],[n,r]),a=dc(a,[0,0],[r,r])),[i,a]})}var Wm=F({qr_:Hm}),Gm={flipLeftRight:Qp,grayscaleToRGB:em,resizeNearestNeighbor:Mm,resizeBilinear:Am,rgbToGrayscale:nm,rotateWithOffset:im,cropAndResize:Xp,nonMaxSuppression:sm,nonMaxSuppressionAsync:bm,nonMaxSuppressionWithScore:Sm,nonMaxSuppressionWithScoreAsync:wm,nonMaxSuppressionPadded:Em,nonMaxSuppressionPaddedAsync:Om,threshold:Fm,transform:Lm},Km={bandPart:zm,gramSchmidt:Vm,qr:Wm},qm=new Map,Jm=new Map,Ym=class{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}},Xm=class e{constructor(){this.classNameMap={}}static getMap(){return e.instance??=new e,e.instance}static register(t){e.getMap().classNameMap[t.className]=[t,t.fromConfig]}};function K(e,t,n){O(e.className!=null,()=>`Class being registered does not have the static className property defined.`),O(typeof e.className==`string`,()=>`className is required to be a string, but got type `+typeof e.className),O(e.className.length>0,()=>`Class being registered has an empty-string as its className, which is disallowed.`),t===void 0&&(t=`Custom`),n===void 0&&(n=e.className);let r=n,i=t+`>`+r;return Xm.register(e),qm.set(i,e),Jm.set(e,i),e}var Zm=class extends Ym{minimize(e,t=!1,n){let{value:r,grads:i}=this.computeGradients(e,n);if(n!=null){let e=n.map(e=>({name:e.name,tensor:i[e.name]}));this.applyGradients(e)}else this.applyGradients(i);return L(i),t?r:(r.dispose(),null)}get iterations(){return this.iterations_??=0,this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return Gu(e,t)}dispose(){this.iterations_!=null&&L(this.iterations_)}async saveIterations(){return this.iterations_??=0,{name:`iter`,tensor:Xl(this.iterations_,`int32`)}}async getWeights(){throw Error(`getWeights() is not implemented for this optimizer yet.`)}async setWeights(e){throw Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}};Object.defineProperty(Zm,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});var Qm=class extends Zm{static get className(){return`Adadelta`}constructor(e,t,n=null){super(),this.learningRate=e,this.rho=t,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],n??(this.epsilon=N.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=N.registeredVariables[t];this.accumulatedGrads[n]??(this.accumulatedGrads[n]={originalName:`${t}/accum_grad`,variable:I(()=>Tl(r).variable(!1))}),this.accumulatedUpdates[n]??(this.accumulatedUpdates[n]={originalName:`${t}/accum_var`,variable:I(()=>Tl(r).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedGrads[n].variable,o=this.accumulatedUpdates[n].variable;I(()=>{let e=z(V(a,this.rho),V(eu(i),1-this.rho)),t=V(B(Ql(z(o,this.epsilon)),Ql(z(a,this.epsilon))),i),n=z(V(o,this.rho),V(eu(t),1-this.rho));a.assign(e),o.assign(n);let s=z(V(t,-this.learningRate),r);r.assign(s)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(L(this.accumulatedGrads.map(e=>e.variable)),L(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){let e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=e.length/2;this.accumulatedGrads=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedUpdates=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}},$m=class extends Zm{static get className(){return`Adagrad`}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=N.registeredVariables[t];this.accumulatedGrads[n]??(this.accumulatedGrads[n]={originalName:`${t}/accumulator`,variable:I(()=>jc(r.shape,this.initialAccumulatorValue).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedGrads[n].variable;I(()=>{let e=z(a,eu(i));a.assign(e);let t=z(V(B(i,Ql(z(e,N.backend.epsilon()))),-this.learningRate),r);r.assign(t)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&L(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulatedGrads=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}},eh=class extends Zm{static get className(){return`Adam`}constructor(e,t,n,r=null){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],I(()=>{this.accBeta1=Xl(t).variable(),this.accBeta2=Xl(n).variable()}),r??(this.epsilon=N.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);I(()=>{let n=G(1,this.accBeta1),r=G(1,this.accBeta2);t.forEach((t,i)=>{let a=N.registeredVariables[t];this.accumulatedFirstMoment[i]??(this.accumulatedFirstMoment[i]={originalName:`${t}/m`,variable:I(()=>Tl(a).variable(!1))}),this.accumulatedSecondMoment[i]??(this.accumulatedSecondMoment[i]={originalName:`${t}/v`,variable:I(()=>Tl(a).variable(!1))});let o=Array.isArray(e)?e[i].tensor:e[t];if(o==null)return;let s=this.accumulatedFirstMoment[i].variable,c=this.accumulatedSecondMoment[i].variable,l=z(V(s,this.beta1),V(o,1-this.beta1)),u=z(V(c,this.beta2),V(eu(o),1-this.beta2)),d=B(l,n),f=B(u,r);s.assign(l),c.assign(u);let p=z(V(B(d,z(Ql(f),this.epsilon)),-this.learningRate),a);a.assign(p)}),this.accBeta1.assign(V(this.accBeta1,this.beta1)),this.accBeta2.assign(V(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&L(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&L(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),I(()=>{this.accBeta1.assign(Yl(this.beta1,this.iterations_+1)),this.accBeta2.assign(Yl(this.beta2,this.iterations_+1))});let t=e.length/2;this.accumulatedFirstMoment=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}},th=class extends Zm{static get className(){return`Adamax`}constructor(e,t,n,r=null,i=0){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.decay=i,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],I(()=>{this.iteration=Xl(0).variable(),this.accBeta1=Xl(t).variable()}),r??(this.epsilon=N.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);I(()=>{let n=G(1,this.accBeta1),r=B(-this.learningRate,z(V(this.iteration,this.decay),1));t.forEach((t,i)=>{let a=N.registeredVariables[t];this.accumulatedFirstMoment[i]??(this.accumulatedFirstMoment[i]={originalName:`${t}/m`,variable:Tl(a).variable(!1)}),this.accumulatedWeightedInfNorm[i]??(this.accumulatedWeightedInfNorm[i]={originalName:`${t}/v`,variable:Tl(a).variable(!1)});let o=Array.isArray(e)?e[i].tensor:e[t];if(o==null)return;let s=this.accumulatedFirstMoment[i].variable,c=this.accumulatedWeightedInfNorm[i].variable,l=z(V(s,this.beta1),V(o,1-this.beta1)),u=_d(V(c,this.beta2),ds(o));s.assign(l),c.assign(u);let d=z(V(B(r,n),B(l,z(u,this.epsilon))),a);a.assign(d)}),this.iteration.assign(z(this.iteration,1)),this.accBeta1.assign(V(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&L(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&L(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw Error(`getWeights() is not implemented for Adamax yet.`)}async setWeights(e){throw Error(`setWeights() is not implemented for Adamax yet.`)}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}},nh=class extends Zm{static get className(){return`SGD`}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=Array.isArray(e)?e[n].tensor:e[t];if(r==null)return;let i=N.registeredVariables[t];I(()=>{let e=z(V(this.c,r),i);i.assign(e)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Ja(Xl(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw Error(`SGD optimizer does not have settable weights.`)}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}},rh=class extends nh{static get className(){return`Momentum`}constructor(e,t,n=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=n,this.accumulations=[],this.m=Xl(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=N.registeredVariables[t];this.accumulations[n]??(this.accumulations[n]={originalName:`${t}/momentum`,variable:I(()=>Tl(r).variable(!1))});let i=this.accumulations[n].variable,a=Array.isArray(e)?e[n].tensor:e[t];a!=null&&I(()=>{let e,t=z(V(this.m,i),a);e=this.useNesterov?z(V(this.c,z(a,V(t,this.m))),r):z(V(this.c,t),r),i.assign(t),r.assign(e)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&L(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulations=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}},ih=class extends Zm{static get className(){return`RMSProp`}constructor(e,t=.9,n=0,r=null,i=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=n,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=i,r??(this.epsilon=N.backend.epsilon()),e==null)throw Error(`learningRate for RMSPropOptimizer must be defined.`)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=N.registeredVariables[t];this.accumulatedMeanSquares[n]??(this.accumulatedMeanSquares[n]={originalName:`${t}/rms`,variable:I(()=>Tl(r).variable(!1))}),this.accumulatedMoments[n]??(this.accumulatedMoments[n]={originalName:`${t}/momentum`,variable:I(()=>Tl(r).variable(!1))}),this.accumulatedMeanGrads[n]==null&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${t}/mg`,variable:I(()=>Tl(r).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedMeanSquares[n].variable,o=this.accumulatedMoments[n].variable;I(()=>{let e=z(V(a,this.decay),V(eu(i),1-this.decay));if(this.centered){let t=this.accumulatedMeanGrads[n].variable,s=z(V(t,this.decay),V(i,1-this.decay)),c=B(V(i,this.learningRate),Ql(G(e,z(eu(s),this.epsilon)))),l=z(V(o,this.momentum),c);a.assign(e),t.assign(s),o.assign(l);let u=G(r,l);r.assign(u)}else{let e=z(V(a,this.decay),V(eu(i),1-this.decay)),t=z(V(o,this.momentum),B(V(i,this.learningRate),Ql(z(e,this.epsilon))));a.assign(e),o.assign(t);let n=G(r,t);r.assign(n)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&L(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&L(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&L(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=this.centered?e.length/3:e.length/2;this.accumulatedMeanSquares=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedMoments=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}},ah=[Qm,$m,eh,th,rh,ih,nh];function oh(){for(let e of ah)K(e)}function sh(e,t,n,r){o(e),n??=0,r??=1,s(n,r);let i=0,a=a=>(a.then(a=>(t(n+ ++i/e.length*(r-n)),a)),a);function o(e){O(e!=null&&Array.isArray(e)&&e.length>0,()=>`promises must be a none empty array`)}function s(e,t){O(e>=0&&e<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${e}`),O(t>=0&&t<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${t}`),O(t>=e,()=>`startFraction must be no more than endFraction, but got startFraction ${e} and endFraction ${t}`)}return Promise.all(e.map(a))}async function ch(e,t){t??={};let n=t.fetchFunc==null?j().platform.fetch:t.fetchFunc,r=e.map(e=>n(e,t.requestInit,{isBinary:!0})),i=(t.onProgress==null?await Promise.all(r):await sh(r,t.onProgress,0,.5)).map(e=>e.arrayBuffer());return t.onProgress==null?await Promise.all(i):await sh(i,t.onProgress,.5,1)}function lh(e,t){var n;let r=t.fetchFunc==null?j().platform.fetch:t.fetchFunc,i=0,a;return(n=t.onProgress)==null||n.call(t,0),new ReadableStream({pull:async n=>{for(var o;i<e.length;){a||=(await r(e[i],t.requestInit,{isBinary:!0})).body.getReader();let{done:s,value:c}=await a.read();if(s){i++,a=void 0,(o=t.onProgress)==null||o.call(t,i/e.length);continue}n.enqueue(c);return}n.close()}})}var uh=`application/octet-stream`,dh=`application/json`,fh=class{constructor(e,t){if(this.DEFAULT_METHOD=`POST`,t??={},this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc==null?this.fetch=j().platform.fetch:(O(typeof t.fetchFunc==`function`,()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc),O(e!=null&&e.length>0,()=>`URL path for http must not be null, undefined or empty.`),Array.isArray(e)&&O(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw Error(`requestInit is expected to have no pre-existing body, but has one.`);this.requestInit=t.requestInit||{},this.loadOptions=t}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.`);let t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;let n=co(e,[{paths:[`./model.weights.bin`],weights:e.weightSpecs}]);if(t.body.append(`model.json`,new Blob([JSON.stringify(n)],{type:dh}),`model.json`),e.weightData!=null){let n=Wa.join(e.weightData);t.body.append(`model.weights.bin`,new Blob([n],{type:uh}),`model.weights.bin`)}let r=await this.fetch(this.path,t);if(r.ok)return{modelArtifactsInfo:fo(e),responses:[r]};throw Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async loadModelJSON(){let e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let e=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(`.pb`)?e+=` Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.`:e+=` Please make sure the server is serving valid JSON for this request.`,Error(e)}let n=t.modelTopology,r=t.weightsManifest;if(n==null&&r==null)throw Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return t}async load(){return this.loadOptions.streamWeights?this.loadStream():uo(await this.loadModelJSON(),e=>this.loadWeights(e))}async loadStream(){let e=await this.loadModelJSON(),t=await this.getWeightUrls(e.weightsManifest),n=po(e.weightsManifest);return Object.assign(Object.assign({},e),{weightSpecs:n,getWeightStream:()=>lh(t,this.loadOptions)})}async getWeightUrls(e){let[t,n]=ph(Array.isArray(this.path)?this.path[1]:this.path),r=this.weightPathPrefix||t,i=[],a=[];for(let t of e)for(let e of t.paths)this.weightUrlConverter==null?i.push(r+e+n):a.push(this.weightUrlConverter(e));return this.weightUrlConverter&&i.push(...await Promise.all(a)),i}async loadWeights(e){let t=await this.getWeightUrls(e);return[po(e),await ch(t,this.loadOptions)]}};fh.URL_SCHEME_REGEX=/^https?:\/\//;function ph(e){let t=e.lastIndexOf(`/`),n=e.lastIndexOf(`?`),r=e.substring(0,t),i=n>t?e.substring(n):``;return[r+`/`,i]}function mh(e){return e.match(fh.URL_SCHEME_REGEX)!=null}var hh=(e,t)=>{if(typeof fetch>`u`&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(n=Array.isArray(e)?e.every(e=>mh(e)):mh(e),n)return gh(e,t)}return null};vo.registerSaveRouter(hh),vo.registerLoadRouter(hh);function gh(e,t){return new fh(e,t)}function _h(e,t){return gh(e,t)}function vh(e,t){let n=e.shape.length,r=t.shape.length;if(n<1)throw Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(t.dtype!==`int32`)throw Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(k(e.shape)===0)throw Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let i=t.shape,a=i[i.length-1],o=1;for(let e=0;e<i.length-1;++e)o*=i[e];let s=e.shape,c=i.slice();c.pop();let l=1;for(let e=a;e<n;++e)l*=s[e],c.push(s[e]);let u=[...A(e.shape).map(e=>e/l),1].slice(0,a);return[c,o,l,u]}var yh=s({assertParamsValid:()=>Sh,computeFlatOffset:()=>Fh,computeOutShape:()=>wh,getNormalizedAxes:()=>Oh,isSliceContinous:()=>Ph,maskToAxes:()=>Ch,parseSliceParams:()=>Ih,sliceInfo:()=>Lh,startForAxis:()=>Mh,startIndicesWithElidedDims:()=>kh,stopForAxis:()=>Nh,stopIndicesWithElidedDims:()=>Ah,stridesForAxis:()=>jh,stridesWithElidedDims:()=>Th}),bh=-2,xh=-1;function Sh(e,t,n){let r=e.shape.length;O(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),O(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let i=0;i<r;++i)O(t[i]+n[i]<=e.shape[i],()=>`Error in slice${r}D: begin[${i}] + size[${i}] (${t[i]+n[i]}) would overflow input.shape[${i}] (${e.shape[i]})`)}function Ch(e){let t=[],n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function wh(e,t,n){let r=[];for(let i=0;i<e.length;i++)r[i]=Math.ceil((t[i]-e[i])/n[i]);return r}function Th(e,t,n,r){let i=[...e];for(let e=i.length;e<r.length;e++)i.push(1);for(let e=0;e<n;e++)e===0?i[t]=1:(i.splice(t,0,1),i.pop());return i}function Eh(e,t,n){return n<=e?n:n-(t-1)}function Dh(e,t){let n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function Oh(e,t,n,r,i,a,o,s,c){let l=e.length,u=Array(l),d=Array(l),f=Array(l);if(t.length&&n>0){let c=t[0],l=n+1;u=kh(o,c,l,r,e),d=Ah(s,c,l,i,e),f=Th(a,c,l,e)}else for(let t=0;t<l;t++)u[t]=Mh(o,r,a,e,t,c),d[t]=Nh(s,i,a,e,t,c),f[t]=jh(a,t,c);return{begin:u,end:d,strides:f}}function kh(e,t,n,r,i){let a=[...i],o=Dh(n,t);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=0;else{let o=Eh(t,n,i),s=r[o];e&1<<o&&(s=0),a[i]=s}return a}function Ah(e,t,n,r,i){let a=[...i],o=Dh(n,t);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=2**53-1;else{let o=Eh(t,n,i),s=r[o];e&1<<o&&(s=2**53-1),a[i]=s}for(let e=0;e<a.length;e++){let t=i[e];a[e]<0&&(a[e]+=t),a[e]=he(0,a[e],i[e])}return a}function jh(e,t,n){let r=e[t];return(n&1<<t||r==null)&&(r=1),r}function Mh(e,t,n,r,i,a){let o=t[i],s=n[i]||1;(e&1<<i||a&1<<i||o==null)&&(o=s>0?-(2**53-1):2**53-1);let c=r[i];return o<0&&(o+=c),o=he(0,o,c-1),o}function Nh(e,t,n,r,i,a){let o=t[i],s=n[i]||1;(e&1<<i||a&1<<i||o==null)&&(o=s>0?2**53-1:-(2**53-1));let c=r[i];return o<0&&(o+=c),o=s>0?he(0,o,c):he(-1,o,c-1),o}function Ph(e,t,n){let r=n.length;for(let e=0;e<n.length;e++)if(n[e]>1){r=e;break}for(let i=r+1;i<n.length;i++)if(t[i]>0||n[i]!==e[i])return!1;return!0}function Fh(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function Ih(e,t,n){let r,i=e.shape.length;r=typeof t==`number`?[t,...Array(i-1).fill(0)]:t.length<i?t.concat(Array(i-t.length).fill(0)):t.slice(),r.forEach(e=>{O(e!==-1,()=>`slice() does not support negative begin indexing.`)});let a;return a=n==null?Array(i).fill(-1):typeof n==`number`?[n,...Array(i-1).fill(-1)]:n.length<i?n.concat(Array(i-n.length).fill(-1)):n,a=a.map((t,n)=>t>=0?t:(O(t===-1,()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${n}.`),e.shape[n]-r[n])),[r,a]}function Lh(e,t,n,r,i,a,o,s,c){let l;if(r==null?(l=Array(t.length),l.fill(1)):l=r,o!=null&&o&o-1)throw Error(`Multiple ellipses in slice is not allowed.`);let u=!1,d={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:l.slice(),beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:c};for(let e=0;e<d.dims;e++)u&&1<<e&s&&d.numAddAxisAfterEllipsis++,1<<e&o&&(u=!0);u||(d.ellipsisMask|=1<<d.dims,d.dims++);let f={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};Rh(d,f);let p=!0,m=!0,h=!0,g=[],_=[];for(let t=0;t<e.length;++t){if(f.strides[t]===0)throw Error(`strides[${t}] must be non-zero`);let n=!!(f.shrinkAxisMask&1<<t),r=e[t];if(r===-1){g.push(n?1:-1);continue}let i=[f.beginMask&1<<t,f.endMask&1<<t],a=[f.strides[t]>0?0:-1,f.strides[t]>0?r:r-1];if(n&&f.strides[t]<=0)throw Error(`only stride 1 allowed on non-range indexing.`);h&&=f.strides[t]===1;let o=!!(f.beginMask&1<<t&&f.endMask&1<<t);if(f.beginValid&&f.endValid){if(n){let e=f.begin[t]<0?r+f.begin[t]:f.begin[t];if(f.begin[t]=e,f.end[t]=f.begin[t]+1,e<0||e>=r)throw Error(`slice index ${f.begin[t]} of dimension ${t} out of bounds.`)}else f.begin[t]=zh(f.begin[t],0,f.strides[t],r,i,a),f.end[t]=zh(f.end[t],1,f.strides[t],r,i,a);let e=f.strides[t]===1&&f.begin[t]===0&&f.end[t]===r;p&&=e,m&&=t===0&&f.strides[t]===1||e}else p=p&&f.strides[t]===1&&o,m&&=t===0&&f.strides[t]===1||o;let s,c=!1;if(f.beginValid&&f.endValid?(s=f.end[t]-f.begin[t],c=!0):n?(s=1,c=!0):o&&r>=0&&(s=f.strides[t]<0?-r:r,c=!0),c){let e;e=s===0||s<0!=f.strides[t]<0?0:Math.trunc(s/f.strides[t])+(s%f.strides[t]===0?0:1),g.push(e)}else g.push(-1)}for(let e=0;e<f.finalShapeGatherIndices.length;++e){let t=f.finalShapeGatherIndices[e];t>=0?_.push(g[t]):t===bh&&_.push(1)}return{finalShapeSparse:_.filter((e,t)=>f.finalShapeGatherIndices[t]!==bh),finalShape:_,isIdentity:p,sliceDim0:m,isSimpleSlice:h,begin:f.begin,end:f.end,strides:f.strides}}function Rh(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=Array(t.dims),t.end=Array(t.dims),t.strides=Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){let i=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<i;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(bh),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[r]),e.end!=null&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(xh),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}function zh(e,t,n,r,i,a){if(i[t])return n>0?a[t]:a[t+1&1];{let t=e<0?r+e:e;return t<a[0]?a[0]:t>a[1]?a[1]:t}}var Bh=class{static sgd(e){return new nh(e)}static momentum(e,t,n=!1){return new rh(e,t,n)}static rmsprop(e,t=.9,n=0,r=null,i=!1){return new ih(e,t,n,r,i)}static adam(e=.001,t=.9,n=.999,r=null){return new eh(e,t,n,r)}static adadelta(e=.001,t=.95,n=null){return new Qm(e,t,n)}static adamax(e=.002,t=.9,n=.999,r=null,i=0){return new th(e,t,n,r,i)}static adagrad(e,t=.1){return new $m(e,t)}},Vh=typeof requestAnimationFrame<`u`?requestAnimationFrame:typeof setImmediate<`u`?setImmediate:e=>e();function Hh(){return new Promise(e=>Vh(()=>e()))}function Uh(e,t){let n=e[0].length;e.forEach((e,t)=>{O(e.length===n,()=>`Error in concat${n}D: rank of tensors[${t}] must be the same as the rank of the rest (${n})`)}),O(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);let r=e[0];e.forEach((e,i)=>{for(let a=0;a<n;a++)O(a===t||e[a]===r[a],()=>`Error in concat${n}D: Shape of tensors[${i}] (${e}) does not match the shape of the rest (${r}) along the non-concatenated axis ${i}.`)})}function Wh(e,t){let n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}var Gh;(function(e){e[e.FIRST_DIM_SIZE=0]=`FIRST_DIM_SIZE`,e[e.VALUE_ROWIDS=1]=`VALUE_ROWIDS`,e[e.ROW_LENGTHS=2]=`ROW_LENGTHS`,e[e.ROW_SPLITS=3]=`ROW_SPLITS`,e[e.ROW_LIMITS=4]=`ROW_LIMITS`,e[e.ROW_STARTS=5]=`ROW_STARTS`})(Gh||={});function Kh(e,t,n){let r=[];if(n==null&&t==null)return r;if(t==null)for(;r.length<e+n.length;)r.push(-1);else r=t.slice();if(n==null)return r;if(e+n.length!==r.length)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${r.length}`);for(let i=1;i<n.length;++i){let a=n[i],o=r[r.length-n.length+i],s=r[o];if(a>=0)if(s>=0){if(s!==a)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${i+e}] = ${a} but shape[${i+e}] = ${s}`)}else r[o]=a}return r}function qh(e){let t={FIRST_DIM_SIZE:Gh.FIRST_DIM_SIZE,VALUE_ROWIDS:Gh.VALUE_ROWIDS,ROW_LENGTHS:Gh.ROW_LENGTHS,ROW_SPLITS:Gh.ROW_SPLITS,ROW_LIMITS:Gh.ROW_LIMITS,ROW_STARTS:Gh.ROW_STARTS},n=[];for(let r of e)if(r in t)n.push(t[r]);else break;return n}function Jh(e){return e.length===0?0:e[0]===Gh.FIRST_DIM_SIZE?e.length-1:e.length}function Yh(e,t){if(e==null||t==null)return;let n=e.length,r=t.length;if(n>=r)throw Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let i=0;i<Math.min(n,r-1);++i){let n=e[i],r=t[i+1];if(n>=0&&r>=0&&n!==1&&n!==r)throw Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${i-e.length}] = ${n} but ragged tensor input.flatValues.shape[${i-e.length}] = ${r}`)}}function Xh(e){return e<=30?e:He(e,Math.floor(Math.sqrt(e)))}function Zh(e,t,n){return[n*(typeof e==`number`?e:e[0]),t*(typeof e==`number`?e:e[1])]}function Qh(e,t,n,r=!0){let i=[];if(r)i=i.concat(t.slice(0)),i.push(e[0]/n),i=i.concat(e.slice(1));else{i=i.concat(e[0]);let n=t.length;for(let r=0;r<n;++r)i=i.concat([e[r+1]/t[r],t[r]]);i=i.concat(e.slice(n+1))}return i}function $h(e,t,n=!0){let r=[];if(n){r.push(t);for(let n=t+1;n<e;++n)n<=2*t?(r.push(n),r.push(n-(t+1))):r.push(n)}else{let n=[],i=[];for(let r=1;r<e;++r)r>=t*2+1||r%2==1?i.push(r):n.push(r);r.push(...n),r.push(0),r.push(...i)}return r}function eg(e,t,n,r=!0){let i=[];r?i.push(e[0]/n):i.push(e[0]*n);for(let n=1;n<e.length;++n)n<=t.length?r?i.push(t[n-1]*e[n]):i.push(e[n]/t[n-1]):i.push(e[n]);return i}function tg(e,t){let n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function ng(e,t,n){let r=e.slice(0,1);for(let i=0;i<n;++i)r.push(e[i+1]-t[i][0]-t[i][1]);return r}var rg=1.7580993408473768,ig=1.0507009873554805,ag=.3275911,og=.254829592,sg=-.284496736,cg=1.421413741,lg=-1.453152027,ug=1.061405429;function dg(e,t){if(e.length!==t.length)throw Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let n=new Float32Array(e.length*2);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function fg(e){let t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function pg(e){let t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=0;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function mg(e){let t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=2;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function hg(e,t){return{real:e[t*2],imag:e[t*2+1]}}function gg(e,t,n,r){e[r*2]=t,e[r*2+1]=n}function _g(e,t){let n=new Float32Array(e/2),r=new Float32Array(e/2);for(let i=0;i<Math.ceil(e/2);i++){let a=(t?2:-2)*Math.PI*(i/e);n[i]=Math.cos(a),r[i]=Math.sin(a)}return{real:n,imag:r}}function vg(e,t,n){let r=(n?2:-2)*Math.PI*(e/t);return{real:Math.cos(r),imag:Math.sin(r)}}var yg=`->`,bg=/->/g,xg=`,`,Sg=`...`;function Cg(e,t){e=e.replace(/\s/g,``);let n=(e.length-e.replace(bg,``).length)/2;if(n<1)throw Error(`Equations without an arrow are not supported.`);if(n>1)throw Error(`Equation must contain exactly one arrow ("${yg}").`);let[r,i]=e.split(yg);O(r.indexOf(Sg)===-1,()=>`The ellipsis notation ("${Sg}") is not supported yet.`);let a=r.split(xg),o=a.length;if(t!==o)throw Error(`Expected ${o} input tensors, received ${t}`);if(o>2)throw Error(`Support for more than 2 input tensors is not implemented yet.`);let s=[];for(let e=0;e<i.length;++e){let t=i[e];if(!a.some(e=>e.indexOf(t)!==-1))throw Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);s.indexOf(t)===-1&&s.push(t)}for(let e=0;e<r.length;++e){let t=r[e];s.indexOf(t)===-1&&t!==xg&&s.push(t)}let c=Array(a.length);for(let e=0;e<o;++e){if(new Set(a[e].split(``)).size!==a[e].length)throw Error(`Found duplicate axes in input component ${a[e]}. Support for duplicate axes in input is not implemented yet.`);c[e]=[];for(let t=0;t<a[e].length;++t)c[e].push(s.indexOf(a[e][t]))}let l=s.length,u=i.length,d=[];for(let e=u;e<l;++e)d.push(e);return{allDims:s,summedDims:d,idDims:c}}function wg(e,t){let n=Array(e);n.fill(-1);for(let e=0;e<t.length;++e)n[t[e]]=e;let r=[];for(let t=0;t<e;++t)n[t]===-1&&r.push(t);return n=n.filter(e=>e!==-1),{permutationIndices:n,expandDims:r}}function Tg(e,t,n){let r=Array(e);for(let e=0;e<n.length;++e){let i=n[e].shape;for(let n=0;n<t[e].length;++n)r[t[e][n]]===void 0?r[t[e][n]]=i[n]:O(r[t[e][n]]===i[n],()=>`Expected dimension ${r[t[e][n]]} at axis ${n} of input shaped ${JSON.stringify(i)}, but got dimension ${i[n]}`)}}function Eg(e,t){let n=e,r=[],i=0;e.length===0&&n.push(-1),i=e.length+1;for(let e=0;e<i;++e)r.push([]);let a=[];for(let e=0;e<n.length;++e){let i=n[e],o=Og(t,i);for(let t of o)a.indexOf(t)===-1&&(r[e].push(t),a.push(t))}return{path:n,steps:r}}function Dg(e){return e.every((e,t)=>e===t)}function Og(e,t){let n=[];for(let r=0;r<e.length;++r)(e[r].length===0||e[r].indexOf(t)!==-1||t===-1)&&n.push(r);return n}function kg(e,t,n=0){let r=[];if(typeof t==`number`)O(e.shape[n]%t===0,()=>`Number of splits must evenly divide the axis.`),r=Array(t).fill(e.shape[n]/t);else{O(t.reduce((e,t)=>(t===-1&&(e+=1),e),0)<=1,()=>`There should be only one negative value in split array.`);let i=t.indexOf(-1);if(i!==-1){let r=t.reduce((e,t)=>t>0?e+t:e);t[i]=e.shape[n]-r}O(e.shape[n]===t.reduce((e,t)=>e+t),()=>`The sum of sizes must match the size of the axis dimension.`),r=t}return r}function Ag(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function jg(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function Mg(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}function Ng(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function Pg(e,t){return`size ${e} must be non-negative, not ${t}`}function Fg(){return`reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero`}function Ig(e,t){return`Input to reshape is a SparseTensor with ${k(e)}
  dense values, but the requested shape requires a multiple of ${k(t)}. inputShape=${e} outputShape= ${t}`}function Lg(e,t){return`Input to reshape is a tensor with ${k(e)} dense values, but the requested shape has ${k(t)}. inputShape=${e} outputShape=${t}`}function Rg(){return`segment ids must be >= 0`}function zg(){return`segment ids are not increasing`}function Bg(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function Vg(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}var Hg=s({collectGatherOpShapeInfo:()=>Gg,computeOutShape:()=>Wg,segOpComputeOptimalWindowSize:()=>Ug});function Ug(e,t){let n=!1,r;for(e<=30?(r=e,n=!0):r=He(e,Math.floor(Math.sqrt(e)));!n;)r>t||r===e?n=!0:r=He(e,r+1);return r}function Wg(e,t,n){let r=[],i=e.length;for(let a=0;a<i;a++)a===t?r.push(n):r.push(e[a]);return r}function Gg(e,t,n,r){let i=t.shape.length,a=e.shape.length;if(r!==0&&(r<-i||r>i))throw Error(`Expect batchDims in the range of [-${i}, ${i}], but got ${r}`);if(r<0&&(r+=i),r>a)throw Error(`batchDims (${r}) must be less than rank(x) (
    ${a}).`);if(n<r)throw Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let n=0;n<r;++n)if(e.shape[n]!==t.shape[n])throw Error(`x.shape[${n}]: ${e.shape[n]} should be equal to indices.shape[${n}]: ${t.shape[n]}.`);let o=e.shape[n],s=[],c=1,l=1,u=1;for(let t=0;t<r;++t)s.push(e.shape[t]),c*=e.shape[t];for(let t=r;t<n;t++)s.push(e.shape[t]),l*=e.shape[t];for(let e=r;e<i;e++)s.push(t.shape[e]);for(let t=n+1;t<a;t++)s.push(e.shape[t]),u*=e.shape[t];return{batchSize:c,sliceSize:u,outerSize:l,dimSize:o,outputShape:s}}var Kg=s({ERF_A1:()=>og,ERF_A2:()=>sg,ERF_A3:()=>cg,ERF_A4:()=>lg,ERF_A5:()=>ug,ERF_P:()=>ag,PARALLELIZE_THRESHOLD:()=>30,RowPartitionType:()=>Gh,SELU_SCALE:()=>ig,SELU_SCALEALPHA:()=>rg,applyActivation:()=>zp,assertAndGetBroadcastShape:()=>U,assertAxesAreInnerMostDims:()=>Bl,assertParamsConsistent:()=>Uh,assignToTypedArray:()=>gg,axesAreInnerMostDims:()=>Il,calculateShapes:()=>_p,checkEinsumDimSizes:()=>Tg,checkPadOnDimRoundingMode:()=>Qs,combineLocations:()=>Ll,combineRaggedTensorToTensorShapes:()=>Kh,complexWithEvenIndex:()=>pg,complexWithOddIndex:()=>mg,computeConv2DInfo:()=>Ls,computeConv3DInfo:()=>Rs,computeDefaultPad:()=>Vs,computeDilation2DInfo:()=>Ps,computeOptimalWindowSize:()=>Xh,computeOutAndReduceShapes:()=>Rl,computeOutShape:()=>Wh,computePool2DInfo:()=>Fs,computePool3DInfo:()=>Is,convertConv2DDataFormat:()=>Zs,decodeEinsumEquation:()=>Cg,eitherStridesOrDilationsAreOne:()=>Ys,expandShapeToKeepDim:()=>zl,exponent:()=>vg,exponents:()=>_g,fromStringArrayToUint8:()=>Jg,fromUint8ToStringArray:()=>qg,getAxesPermutation:()=>Vl,getBroadcastDims:()=>vl,getComplexWithIndex:()=>hg,getEinsumComputePath:()=>Eg,getEinsumPermutation:()=>wg,getFusedBiasGradient:()=>Rp,getFusedDyActivation:()=>Lp,getImageCenter:()=>Zh,getInnerMostAxes:()=>Ul,getPermuted:()=>$h,getRaggedRank:()=>Jh,getReductionAxes:()=>yl,getReshaped:()=>Qh,getReshapedPermuted:()=>eg,getRowPartitionTypesHelper:()=>qh,getSliceBeginCoords:()=>tg,getSliceSize:()=>ng,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>Ag,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>jg,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>Mg,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>Fg,getSparseReshapeInputOutputMismatchErrorMessage:()=>Lg,getSparseReshapeInputOutputMultipleErrorMessage:()=>Ig,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>Ng,getSparseReshapeNegativeOutputDimErrorMessage:()=>Pg,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>Vg,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>Rg,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>zg,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>Bg,getUndoAxesPermutation:()=>Hl,isIdentityPermutation:()=>Dg,log:()=>ai,mergeRealAndImagArrays:()=>dg,prepareAndValidate:()=>vh,prepareSplitSize:()=>kg,segment_util:()=>Hg,shouldFuse:()=>Bp,slice_util:()=>yh,splitRealAndImagArrays:()=>fg,stridesOrDilationsArePositive:()=>Xs,tupleValuesAreOne:()=>Js,upcastType:()=>ma,validateDefaultValueShape:()=>Yh,validateInput:()=>gp,validateUpdateShape:()=>hp,warn:()=>ii});function qg(e){try{return e.map(e=>Ri(e))}catch(e){throw Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function Jg(e){return e.map(e=>Li(e))}oh();var Yg={kernelName:`Abs`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,sp(R(n,`float32`),-1))}}},Xg={kernelName:ut,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=eu(R(n,`float32`));return Ju(B(e,Ql(G(Xl(1),t))))}}}},Zg={kernelName:dt,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,Ql(G(eu(R(n,`float32`)),1)))}}},Qg={kernelName:`Add`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=e,r=yl(n.shape,i);return r.length>0&&(t=W(t,r)),H(t,n.shape)},b:()=>{let t=e,n=yl(r.shape,i);return n.length>0&&(t=W(t,n)),H(t,r.shape)}}}},$g={kernelName:ft,saveAllInputs:!0,gradFunc:(e,t)=>{let n={};return t.forEach((t,r)=>{n[r]=()=>e.clone()}),n}},e_={kernelName:pt,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>Tl(n)}}},t_={kernelName:mt,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>Tl(n)}}},n_={kernelName:ht,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,Ql(G(Xl(1),eu(R(n,`float32`)))))}}},r_={kernelName:gt,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,Ql(z(Xl(1),eu(R(n,`float32`)))))}}},i_={kernelName:yt,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=V(e,B(r,z(eu(n),eu(r)))),a=yl(n.shape,i);return a.length>0&&(t=W(t,a)),H(t,n.shape)},b:()=>{let t=Ju(V(e,B(n,z(eu(n),eu(r))))),a=yl(r.shape,i);return a.length>0&&(t=W(t,a)),H(t,r.shape)}}}},a_={kernelName:_t,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,z(eu(R(n,`float32`)),1))}}},o_={kernelName:vt,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,G(Xl(1),eu(R(n,`float32`))))}}};function s_(e,t,n,r,i,a){let o=P(e,`dy`,`avgPool3dGrad`),s=P(t,`input`,`avgPool3dGrad`),c=o,l=s,u=!1;s.rank===4&&(u=!0,c=H(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]]),l=H(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]])),O(c.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),O(l.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${l.rank}.`),Qs(`avgPool3dGrad`,i,a);let d={dy:c,input:l},f={filterSize:n,strides:r,pad:i,dimRoundingMode:a},p=N.runKernel(Ct,d,f);return u?H(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var c_=F({avgPool3dGrad_:s_}),l_={kernelName:St,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{filterSize:i,strides:a,pad:o,dimRoundingMode:s}=n;return{x:()=>c_(e,r,i,a,o,s)}}};function u_(e,t,n,r,i){let a=P(e,`dy`,`avgPoolGrad`),o=P(t,`input`,`avgPoolGrad`);O(o.rank===a.rank,()=>`Rank of input (${o.rank}) does not match rank of dy (${a.rank})`);let s=o,c=a,l=!1;o.rank===3&&(l=!0,s=H(o,[1,o.shape[0],o.shape[1],o.shape[2]]),c=H(a,[1,a.shape[0],a.shape[1],a.shape[2]])),O(c.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${c.rank}.`),O(s.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${s.rank}.`);let u={dy:c,input:s},d={filterSize:n,strides:r,pad:i},f=N.runKernel(xt,u,d);return l?H(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var d_=F({avgPoolGrad_:u_}),f_={kernelName:bt,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{filterSize:i,strides:a,pad:o}=n;return{x:()=>d_(e,r,i,a,o)}}},p_={kernelName:wt,inputsToSave:[`a`,`b`],gradFunc:(e,t,n)=>{let[r,i]=t,{transposeA:a,transposeB:o}=n;return!a&&!o?{a:()=>sc(e,i,!1,!0),b:()=>sc(r,e,!0,!1)}:!a&&o?{a:()=>sc(e,i,!1,!1),b:()=>sc(e,r,!0,!1)}:a&&!o?{a:()=>sc(i,e,!1,!0),b:()=>sc(r,e,!1,!1)}:{a:()=>sc(i,e,!0,!0),b:()=>sc(e,r,!0,!0)}}},m_={kernelName:Tt,gradFunc:(e,t,n)=>{let{blockShape:r,crops:i}=n;return{x:()=>zd(e,r,i)}}},h_={kernelName:Ot,gradFunc:(e,t,n)=>{let r=n,i=r.inputShape,a=r.shape,o=Array.from(a);for(let e=i.length-1;e>=0;e--)if(i[e]===a[e])o[e]=1;else if(i[e]!==1)throw Error(`broadcastTo(): [${i}] cannot be broadcast to [${a}].`);let s=[];for(let e=0;e<o.length;e++)o[e]>1&&s.push(e);return{x:()=>W(e,s,!0)}}},g_={kernelName:At,gradFunc:e=>({x:()=>e.clone()})},__={kernelName:jt,gradFunc:e=>({x:()=>Tl(e)})},v_={kernelName:Mt,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{clipValueMin:i,clipValueMax:a}=n;return{x:()=>Cl(ad(wu(r,i),Ru(r,a)),e,Tl(e))}}},y_={kernelName:Pt,inputsToSave:[`x`],gradFunc:Yg.gradFunc},b_={kernelName:Ft,saveAllInputs:!0,gradFunc:(e,t,n)=>{let r=t.map(e=>e.shape),{axis:i}=n,a=Oe(i,t[0].shape)[0];return Zf(e,r.map(e=>e[a]),a).map(e=>()=>e)}},x_={kernelName:It,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,{dilations:a,strides:o,pad:s,dataFormat:c}=n;return O(Js(a),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`),{x:()=>qc(r.shape,e,i,o,s,c),filter:()=>Ip(r,e,i.shape,o,s,c)}}},S_={kernelName:Rt,inputsToSave:[`dy`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,{strides:a,pad:o,dataFormat:s,dimRoundingMode:c}=n;return{dy:()=>Uc(e,i,a,o,s,1,c),filter:()=>Ip(e,r,i.shape,a,o,s,c)}}};function C_(e,t,n,r,i){let a=e;e.rank===4&&(a=H(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]));let o=t;o.rank===4&&(o=H(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),O(a.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${a.shape}.`),O(o.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${o.shape}.`),O(n.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${n}.`),O(a.shape[4]===n[3],()=>`Error in conv3dDerFilter: depth of input ${a.shape[4]}) must match input depth in filter (${n[3]}.`),O(o.shape[4]===n[4],()=>`Error in conv3dDerFilter: depth of dy (${o.shape[4]}) must match output depth for filter (${n[4]}).`);let s={x:a,dy:o},c={strides:r,pad:i,filterShape:n};return N.runKernel(Bt,s,c)}var w_=F({conv3DBackpropFilter_:C_}),T_={kernelName:zt,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let{dilations:r,strides:i,pad:a}=n;O(Js(r),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);let[o,s]=t;return{x:()=>$c(o.shape,e,s,i,a),filter:()=>w_(o,e,s.shape,i,a)}}},E_={kernelName:`Cos`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(Ju(jf(R(n,`float32`))),e)}}},D_={kernelName:Ht,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(Nf(R(n,`float32`)),e)}}},O_={kernelName:Wt,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i,exclusive:a,reverse:o}=n;return{x:()=>{let t=Vl([i],r.rank),n=ll(e,i,a,!o);return t!=null&&(n=jp(n,t)),n}}}},k_={kernelName:Jt,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let{dilations:r,strides:i,pad:a,dimRoundingMode:o}=n,s=r??[1,1];O(Js(s),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[c,l]=t;return O(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${c.rank}.`),O(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${l.rank}.`),O(c.shape[3]===l.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${c.shape[3]}) must match the inChannels dimension in filter ${l.shape[2]}.`),O(Ys(i,s),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${i} and dilations '${s}'.`),Qs(`depthwiseConv2d`,a,o),{x:()=>Kp(c.shape,e,l,i,a,s,o),filter:()=>Wp(c,e,l.shape,i,a,s,o)}}},A_={kernelName:Qt,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,a={x:r,filter:i,dy:e},o={x:r,filter:i,dy:e};return{x:()=>N.runKernel($t,a,n),filter:()=>N.runKernel(en,o,n)}}},j_={kernelName:`Elu`,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t,r={dy:e,y:n};return{x:()=>N.runKernel(an,r)}}},M_={kernelName:`Erf`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t,r=V(cu(Ju(eu(n))),2/Math.sqrt(Math.PI));return{x:()=>V(e,r)}}},N_={kernelName:`Exp`,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,n)}}},P_={kernelName:sn,inputsToSave:[`input`],gradFunc:(e,t)=>{let[n]=t;return{input:()=>H(e,n.shape)}}},F_={kernelName:cn,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,cu(n))}}},I_={kernelName:dn,gradFunc:e=>({x:()=>Tl(e)})},L_={kernelName:fn,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=B(e,R(r,`float32`)),a=yl(n.shape,i);return a.length>0?H(W(t,a),n.shape):t},b:()=>{let t=V(e,R(n,`float32`)),a=yl(r.shape,i);a.length>0&&(t=H(W(t,a),r.shape));let o=eu(r);return Ju(B(t,R(o,`float32`)))}}}},R_={kernelName:pn,inputsToSave:[`x`,`mean`,`variance`,`scale`],gradFunc:(e,t,n)=>{let{varianceEpsilon:r}=n,[i,a,o,s]=t,c=s??Xl(1),l=yl(a.shape,i.shape),u=[];if(a.rank===1){for(let e=0;e<i.shape.length-1;++e)u.push(i.shape[e]);u.push(1)}let d=G(i,a),f=V(e,c),p=Cf(z(o,Xl(r))),m=V(V(V(p,p),p),Xl(-.5));return{x:()=>a.rank===1?H(V(V(e,mu(H(p,[1,1,1,a.shape[0]]),u)),c),i.shape):H(V(V(e,p),c),i.shape),mean:()=>{let e=V(V(p,Xl(-1)),f);return a.rank===1&&(e=W(e,l)),H(e,a.shape)},variance:()=>{let e=V(V(m,d),f);return a.rank===1&&(e=W(e,l)),H(e,a.shape)},scale:()=>{let t=V(e,V(d,p));return a.rank===1&&(t=W(t,l)),H(t,a.shape)},offset:()=>{let t=e;return a.rank===1&&(t=W(t,l)),H(t,a.shape)}}}},z_={kernelName:mn,inputsToSave:[`x`,`indices`],gradFunc:(e,t,n)=>{let[r,i]=t,{axis:a,batchDims:o}=n,s=Oe(a,r.shape)[0],c=(e,t,n)=>()=>{let r=e.shape,i=t.size,o=r.slice(0,s),c=o.length,l=r.slice(a,r.length).slice(1),u=l.length,d=B_(0,c),f=B_(c+1,c+1+u),p=H(n,V_([o,[i],l])),m=H(t,[i]),h=V_([[c],d,f]),g=Tp(jp(p,h),m,e.shape[s]),_=Hl(h);return g=jp(g,_),g};if(o===1){let t=r.shape[0],n=r.split(t,0);return{x:()=>ap(n.map((t,n)=>c(t,i.slice(n,1),e.slice(n,1))())).reshape(r.shape),indices:()=>i}}else return{x:c(r,i,e),indices:()=>i}}};function B_(e,t){let n=[];for(let r=e;r<t;++r)n.push(r);return n}function V_(e){let t=[];for(let n=0;n<e.length;++n)for(let r=0;r<e[n].length;++r)t.push(e[n][r]);return t}var H_={kernelName:_n,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>Tl(n),b:()=>Tl(r)}}},U_={kernelName:vn,gradFunc:e=>({x:()=>R(e,`float32`)})},W_={kernelName:xn,gradFunc:e=>({x:()=>Tl(e)})},G_={kernelName:Sn,gradFunc:e=>({x:()=>Tl(e)})},K_={kernelName:Cn,gradFunc:e=>({x:()=>Tl(e)})},q_={kernelName:wn,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{alpha:i}=n,a=Su(r,0);return{x:()=>Cl(a,e,V(e,i))}}},J_={kernelName:On,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,z(n,1))}}},Y_={kernelName:`Log`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,R(n,`float32`))}}},X_={kernelName:Mn,inputsToSave:[],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n;return{logits:()=>{let t=cu(r);return G(e,V(W(e,i,!0),t))}}}};function Z_(e,t,n,r=5,i=1,a=1,o=.5){let s={x:e,y:t,dy:n},c={depthRadius:r,bias:i,alpha:a,beta:o};return N.runKernel(Nn,s,c)}var Q_=F({localResponseNormalizationBackprop_:Z_}),$_={kernelName:`LRN`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{depthRadius:a,bias:o,alpha:s,beta:c}=n;return{x:()=>Q_(r,i,e,a,o,s,c)}}};function ev(e,t,n,r){return t.rank<n.rank&&(t=H(t,zl(t.shape,r))),e.rank<n.rank&&(e=H(e,zl(e.shape,r))),{x:()=>V(e,R(xl(n,t),e.dtype))}}var tv={kernelName:`Max`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let{reductionIndices:r}=n,i=t[0],a=t[1],o=ev(e,a,i,Oe(r,i.shape));return{x:()=>o.x()}}},nv={kernelName:Pn,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>V(e,R(wu(n,r),`float32`)),b:()=>V(e,R(Iu(n,r),`float32`))}}};function rv(e,t,n,r,i,a,o){let s=P(e,`dy`,`maxPool3dGrad`),c=P(t,`input`,`maxPool3dGrad`),l=P(n,`output`,`maxPool3dGrad`),u=s,d=c,f=l,p=!1;c.rank===4&&(p=!0,u=H(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]]),d=H(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]]),f=H(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),O(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),O(d.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${d.rank}.`),O(f.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${f.rank}.`),Qs(`maxPool3dGrad`,a,o);let m={dy:u,input:d,output:f},h={filterSize:r,strides:i,pad:a,dimRoundingMode:o},g=N.runKernel(Rn,m,h);return p?H(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}var iv=F({maxPool3dGrad_:rv}),av={kernelName:Ln,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=n;return{x:()=>iv(e,r,i,a,o,s,c)}}};function ov(e,t,n,r,i,a,o){let s=P(e,`dy`,`maxPoolGrad`),c=P(t,`input`,`maxPoolGrad`),l=P(n,`output`,`maxPoolGrad`);O(c.rank===s.rank,()=>`Rank of input (${c.rank}) does not match rank of dy (${s.rank})`),O(s.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${s.rank}.`),O(c.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${c.rank}.`),Qs(`maxPoolGrad`,a,o);let u={dy:s,input:c,output:l},d={filterSize:r,strides:i,pad:a,dimRoundingMode:o};return N.runKernel(In,u,d)}var sv=F({maxPoolGrad_:ov}),cv={kernelName:Fn,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{filterSize:a,strides:o,pad:s}=n;return{x:()=>sv(e,r,i,a,o,s)}}},lv={kernelName:Bn,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n,a=Oe(i,r.shape),o=Rl(r.shape,a)[1],s=k(o);return{x:()=>{let t=r.shape.slice();return a.forEach(e=>{t[e]=1}),B(V(H(e,t),xd(r.shape,`float32`)),s)}}}},uv={kernelName:`Min`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let{axis:r}=n,[i,a]=t,o=ev(e,a,i,Oe(r,i.shape));return{x:()=>o.x()}}},dv={kernelName:Vn,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>V(e,R(Ru(n,r),`float32`)),b:()=>V(e,R(Su(n,r),`float32`))}}},fv={kernelName:Hn,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let r=t[0],{paddings:i}=n,a=i.map(e=>e[0]);return{x:()=>dc(e,a,r.shape)}}},pv={kernelName:`Mod`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=yl(n.shape,i);return t.length>0?H(W(e,t),n.shape):e},b:()=>{let t=V(e,Ju(vu(B(n,r)))),a=yl(r.shape,i);return a.length>0?H(W(t,a),r.shape):t}}}},mv={kernelName:Wn,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=V(e,R(r,`float32`)),a=yl(n.shape,i);return a.length>0?H(W(t,a),n.shape):t},b:()=>{let t=V(e,R(n,`float32`)),a=yl(r.shape,i);return a.length>0?H(W(t,a),r.shape):t}}}},hv={kernelName:`Neg`,gradFunc:e=>({x:()=>Ju(e)})},gv={kernelName:Xn,inputsToSave:[`indices`],gradFunc:(e,t)=>{let n=t[0];return{indices:()=>bd(n.shape,`float32`)}}},_v={kernelName:Yn,gradFunc:e=>({x:()=>Tl(e)})},vv={kernelName:Zn,saveAllInputs:!0,gradFunc:(e,t,n)=>{let{axis:r}=n;return Dp(e,r).map(e=>()=>e)}},yv={kernelName:Qn,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let r=t[0],{paddings:i}=n,a=i.map(e=>e[0]);return{x:()=>dc(e,a,r.shape)}}},bv={kernelName:`Pow`,inputsToSave:[`a`,`b`],outputsToSave:[!0],gradFunc:(e,t)=>{let[n,r,i]=t,a=n,o=r,s=U(a.shape,o.shape);return{a:()=>{let t=R(o,`float32`),n=V(e,V(t,Yl(a,G(t,Xl(1))))),r=yl(a.shape,s);return r.length>0&&(n=W(n,r)),H(n,a.shape)},b:()=>{let t=V(e,V(i,Cl(Su(a,0),Hu(a),Tl(a)))),n=yl(o.shape,s);return n.length>0&&(t=W(t,n)),H(t,o.shape)}}}},xv={kernelName:$n,inputsToSave:[`x`,`alpha`],gradFunc:(e,t)=>{let[n,r]=t,i=Su(n,0);return{x:()=>Cl(i,e,V(e,r)),alpha:()=>{let t=Cl(i,Tl(e),V(e,n)),a=yl(r.shape,e.shape);return a.length>0&&(t=W(t,a)),H(t,r.shape)}}}};function Sv(e,t,n){let r=e.shape.slice();return r[n]=1,V(H(t,r),V(sl(e,n,!0,!1),sl(e,n,!0,!0)))}function Cv(e,t,n){let r=e.shape.length,i=r-n.length,a=Vl(n,r),o=e;a!=null&&(o=jp(e,a));let s=o.shape.slice(),c=s.splice(r-n.length,n.length).reduce((e,t)=>e*t,1);s.push(c);let l=Sv(o.reshape(s),t,i);if(l=l.reshape(o.shape),a!=null){let e=Hl(a);l=jp(l,e)}return l}var wv={kernelName:er,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n,a=[];return a=i==null?r.shape.map((e,t)=>t):typeof i==`number`?[i]:i,{x:()=>Cv(r,e,a)}}},Tv={kernelName:nn,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=B(e,R(r,`float32`)),a=yl(n.shape,i);return a.length>0?H(W(t,a),n.shape):t},b:()=>{let t=V(e,R(n,`float32`)),a=yl(r.shape,i);a.length>0&&(t=H(W(t,a),r.shape));let o=eu(r);return Ju(B(t,R(o,`float32`)))}}}},Ev={kernelName:or,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,Ju(eu(n)))}}},Dv={kernelName:pr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t,r=V(Ru(n,6),sp(n));return{x:()=>V(e,R(r,`float32`))}}},Ov={kernelName:sr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,R(sp(n),`float32`))}}},kv={kernelName:cr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>H(e,n.shape)}}},Av={kernelName:dr,inputsToSave:[`images`],gradFunc:(e,t,n)=>{let[r]=t,i={dy:e,images:r};return{images:()=>N.runKernel(fr,i,n)}}},jv={kernelName:lr,inputsToSave:[`images`],gradFunc:(e,t,n)=>{let[r]=t,i={dy:e,images:r};return{images:()=>N.runKernel(ur,i,n)}}},Mv={kernelName:mr,gradFunc:(e,t,n)=>{let{dims:r}=n,i=Oe(r,e.shape);return{x:()=>yf(e,i)}}},Nv={kernelName:hr,gradFunc:e=>({x:()=>Tl(e)})},Pv={kernelName:gr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>Ju(B(e,V(Yl(n,1.5),2)))}}},Fv={kernelName:br,inputsToSave:[`condition`],gradFunc:(e,t)=>{let[n]=t;return{condition:()=>R(Tl(n),`float32`),t:()=>V(e,R(n,e.dtype)),e:()=>V(e,R(sd(n),e.dtype))}}},Iv={kernelName:xr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=Su(n,Xl(0)),r=Xl(rg);return Cl(t,V(e,Xl(ig)),V(V(e,r),cu(R(n,`float32`))))}}}},Lv={kernelName:Tr,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,V(n,G(Xl(1),n)))}}},Rv={kernelName:wr,gradFunc:e=>({x:()=>Tl(e)})},zv={kernelName:`Sin`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(rl(R(n,`float32`)),e)}}},Bv={kernelName:Cr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(al(R(n,`float32`)),e)}}},Vv={kernelName:Sr,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{begin:i,size:a}=n,o=r.shape,[s,c]=Ih(r,i,a),l=[];for(let t=0;t<e.rank;t++)l.push([s[t],o[t]-s[t]-c[t]]);return{x:()=>Ld(e,l)}}},Hv={kernelName:Ar,outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r]=t,{dim:i}=n,a=V(e,r);return{logits:()=>G(a,V(W(a,[i],!0),r))}}},Uv={kernelName:Er,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,lc(n))}}},Wv={kernelName:Or,gradFunc:(e,t,n)=>{let{blockShape:r,paddings:i}=n;return{x:()=>hc(e,r,i)}}},Gv={kernelName:kr,gradFunc:(e,t,n)=>{let{axis:r}=n;return{x:()=>ac(e,r)}}},Kv={kernelName:Dr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,V(Ql(R(n,`float32`)),2))}}},qv={kernelName:Lr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,V(R(n,`float32`),2))}}},Jv={kernelName:Ir,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Xl(2);return{a:()=>V(e,V(i,G(n,r))),b:()=>V(e,V(i,G(r,n)))}}},Yv={kernelName:Qr,gradFunc:e=>({x:()=>Tl(e)})},Xv={kernelName:`Sub`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=e,r=yl(n.shape,i);return r.length>0&&(t=W(t,r)),H(t,n.shape)},b:()=>{let t=e,n=yl(r.shape,i);return n.length>0&&(t=W(t,n)),H(Ju(t),r.shape)}}}},Zv={kernelName:`Sum`,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,i=r.shape.slice(),{axis:a}=n;Oe(a,r.shape).forEach(e=>{i[e]=1});let o=V(H(e,i),xd(r.shape,`float32`));return{x:()=>o}}},Qv={kernelName:`Tan`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,eu(rl(n)))}}},$v={kernelName:Ur,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(G(Xl(1),eu(n)),e)}}},ey={kernelName:Wr,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{reps:i}=n;return{x:()=>{let t=Tl(r);if(r.rank===1)for(let n=0;n<i[0];++n)t=z(t,dc(e,[n*r.shape[0]],[r.shape[0]]));else if(r.rank===2)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)t=z(t,dc(e,[n*r.shape[0],a*r.shape[1]],[r.shape[0],r.shape[1]]));else if(r.rank===3)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)for(let o=0;o<i[2];++o)t=z(t,dc(e,[n*r.shape[0],a*r.shape[1],o*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else if(r.rank===4)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)for(let o=0;o<i[2];++o)for(let s=0;s<i[3];++s)t=z(t,dc(e,[n*r.shape[0],a*r.shape[1],o*r.shape[2],s*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));else throw Error(`Gradient for tile operation is not implemented for rank-${r.rank} tensors yet.`);return t}}}},ty={kernelName:qr,gradFunc:(e,t,n)=>{let{perm:r}=n,i=Hl(r);return{x:()=>jp(e,i)}}},ny={kernelName:Yr,gradFunc:(e,t,n)=>{let{axis:r}=n;return{value:()=>ap(e,r)}}},ry={kernelName:Xr,inputsToSave:[`segmentIds`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>iy(e,n)}}};function iy(e,t){let n=bu(e,_d(t,Tl(t))),r=wu(t,Xl(0,`int32`)),i=n.rank-r.rank;for(let e=0;e<i;++e)r=uu(r,e+1);r=ad(r,xd(n.shape,`bool`));let a=Tl(n);return Cl(r,n,a)}var ay=[Yg,Xg,Zg,Qg,$g,e_,t_,n_,r_,i_,a_,o_,l_,f_,p_,m_,h_,g_,__,v_,y_,b_,S_,x_,T_,E_,D_,O_,k_,A_,Tv,j_,M_,N_,P_,F_,L_,I_,R_,z_,H_,U_,W_,G_,K_,q_,J_,Y_,X_,$_,tv,tv,nv,av,cv,lv,uv,dv,fv,pv,mv,hv,gv,_v,vv,yv,yv,bv,xv,wv,Ev,Dv,Ov,kv,Av,jv,Mv,Nv,Pv,Fv,Iv,Lv,Rv,zv,Bv,Vv,Hv,Uv,Wv,Wv,Gv,Gv,Kv,Jv,qv,Yv,Xv,Zv,Qv,$v,ey,ty,ny,ry,{kernelName:Zr,gradFunc:e=>({x:()=>Tl(e)})}];for(let e of ay)fi(e);M().prototype.abs=function(){return this.throwIfDisposed(),ds(this)},M().prototype.acos=function(){return this.throwIfDisposed(),ps(this)},M().prototype.acosh=function(){return this.throwIfDisposed(),hs(this)},M().prototype.add=function(e){return this.throwIfDisposed(),z(this,e)},M().prototype.all=function(e,t){return this.throwIfDisposed(),_s(this,e,t)},M().prototype.any=function(e,t){return this.throwIfDisposed(),ys(this,e,t)},M().prototype.argMax=function(e){return this.throwIfDisposed(),xs(this,e)},M().prototype.argMin=function(e){return this.throwIfDisposed(),Cs(this,e)},M().prototype.asScalar=function(){return this.throwIfDisposed(),O(this.size===1,()=>`The array must have only 1 element.`),H(this,[])},M().prototype.asType=function(e){return this.throwIfDisposed(),R(this,e)},M().prototype.as1D=function(){return this.throwIfDisposed(),H(this,[this.size])},M().prototype.as2D=function(e,t){return this.throwIfDisposed(),H(this,[e,t])},M().prototype.as3D=function(e,t,n){return this.throwIfDisposed(),H(this,[e,t,n])},M().prototype.as4D=function(e,t,n,r){return this.throwIfDisposed(),H(this,[e,t,n,r])},M().prototype.as5D=function(e,t,n,r,i){return this.throwIfDisposed(),H(this,[e,t,n,r,i])},M().prototype.asin=function(){return this.throwIfDisposed(),Ts(this)},M().prototype.asinh=function(){return this.throwIfDisposed(),Ds(this)},M().prototype.atan=function(){return this.throwIfDisposed(),ks(this)},M().prototype.atan2=function(e){return this.throwIfDisposed(),js(this,e)},M().prototype.atanh=function(){return this.throwIfDisposed(),Ns(this)},M().prototype.avgPool=function(e,t,n,r){return this.throwIfDisposed(),tc(this,e,t,n,r)},M().prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),hc(this,e,t)},M().prototype.batchNorm=function(e,t,n,r,i){return this.throwIfDisposed(),vc(this,e,t,n,r,i)},M().prototype.broadcastTo=function(e){return this.throwIfDisposed(),Oc(this,e)},M().prototype.cast=function(e){return this.throwIfDisposed(),R(this,e)},M().prototype.ceil=function(){return this.throwIfDisposed(),Ac(this)},M().prototype.clipByValue=function(e,t){return this.throwIfDisposed(),Nc(this,e,t)},M().prototype.concat=function(e,t){return this.throwIfDisposed(),e instanceof oa&&(e=[e]),ac([this,...e],t)},M().prototype.conv1d=function(e,t,n,r,i,a){return this.throwIfDisposed(),Gc(this,e,t,n,r,i,a)},M().prototype.conv2dTranspose=function(e,t,n,r,i){return this.throwIfDisposed(),Yc(this,e,t,n,r,i)},M().prototype.conv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),Uc(this,e,t,n,r,i,a)},M().prototype.cos=function(){return this.throwIfDisposed(),rl(this)},M().prototype.cosh=function(){return this.throwIfDisposed(),al(this)},M().prototype.cumprod=function(e,t,n){return this.throwIfDisposed(),sl(this,e,t,n)},M().prototype.cumsum=function(e,t,n){return this.throwIfDisposed(),ll(this,e,t,n)},M().prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),pl(this,e,t)},M().prototype.depthwiseConv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),hl(this,e,t,n,r,i,a)},M().prototype.dilation2d=function(e,t,n,r,i){return this.throwIfDisposed(),_l(this,e,t,n,r,i)},M().prototype.divNoNan=function(e){return this.throwIfDisposed(),Dl(this,e)},M().prototype.div=function(e){return this.throwIfDisposed(),B(this,e)},M().prototype.dot=function(e){return this.throwIfDisposed(),kl(this,e)},M().prototype.elu=function(){return this.throwIfDisposed(),Nl(this)},M().prototype.equal=function(e){return this.throwIfDisposed(),xl(this,e)},M().prototype.erf=function(){return this.throwIfDisposed(),Fl(this)},M().prototype.euclideanNorm=function(e,t){return this.throwIfDisposed(),ou(this,e,t)},M().prototype.exp=function(){return this.throwIfDisposed(),cu(this)},M().prototype.expandDims=function(e){return this.throwIfDisposed(),uu(this,e)},M().prototype.expm1=function(){return this.throwIfDisposed(),fu(this)},M().prototype.fft=function(){return this.throwIfDisposed(),Gf(this)},M().prototype.flatten=function(){return this.throwIfDisposed(),H(this,[this.size])},M().prototype.floor=function(){return this.throwIfDisposed(),vu(this)},M().prototype.floorDiv=function(e){return this.throwIfDisposed(),ss(this,e)},M().prototype.gather=function(e,t,n){return this.throwIfDisposed(),bu(this,e,t,n)},M().prototype.greaterEqual=function(e){return this.throwIfDisposed(),wu(this,e)},M().prototype.greater=function(e){return this.throwIfDisposed(),Su(this,e)},M().prototype.ifft=function(){return this.throwIfDisposed(),qf(this)},M().prototype.irfft=function(){return this.throwIfDisposed(),Yf(this)},M().prototype.isFinite=function(){return this.throwIfDisposed(),Ou(this)},M().prototype.isInf=function(){return this.throwIfDisposed(),Au(this)},M().prototype.isNaN=function(){return this.throwIfDisposed(),Mu(this)},M().prototype.leakyRelu=function(e){return this.throwIfDisposed(),Pu(this,e)},M().prototype.lessEqual=function(e){return this.throwIfDisposed(),Ru(this,e)},M().prototype.less=function(e){return this.throwIfDisposed(),Iu(this,e)},M().prototype.localResponseNormalization=function(e,t,n,r){return this.throwIfDisposed(),Bu(this,e,t,n,r)},M().prototype.logSigmoid=function(){return this.throwIfDisposed(),Qu(this)},M().prototype.logSoftmax=function(e){return this.throwIfDisposed(),td(this,e)},M().prototype.logSumExp=function(e,t){return this.throwIfDisposed(),rd(this,e,t)},M().prototype.log=function(){return this.throwIfDisposed(),Hu(this)},M().prototype.log1p=function(){return this.throwIfDisposed(),Wu(this)},M().prototype.logicalAnd=function(e){return this.throwIfDisposed(),ad(this,e)},M().prototype.logicalNot=function(){return this.throwIfDisposed(),sd(this)},M().prototype.logicalOr=function(e){return this.throwIfDisposed(),ld(this,e)},M().prototype.logicalXor=function(e){return this.throwIfDisposed(),dd(this,e)},M().prototype.matMul=function(e,t,n){return this.throwIfDisposed(),sc(this,e,t,n)},M().prototype.maxPool=function(e,t,n,r){return this.throwIfDisposed(),pd(this,e,t,n,r)},M().prototype.max=function(e,t){return this.throwIfDisposed(),Gl(this,e,t)},M().prototype.maximum=function(e){return this.throwIfDisposed(),_d(this,e)},M().prototype.mean=function(e,t){return this.throwIfDisposed(),yd(this,e,t)},M().prototype.min=function(e,t){return this.throwIfDisposed(),ql(this,e,t)},M().prototype.minimum=function(e){return this.throwIfDisposed(),Cd(this,e)},M().prototype.mirrorPad=function(e,t){return this.throwIfDisposed(),Td(this,e,t)},M().prototype.mod=function(e){return this.throwIfDisposed(),Dd(this,e)},M().prototype.mul=function(e){return this.throwIfDisposed(),V(this,e)},M().prototype.neg=function(){return this.throwIfDisposed(),Ju(this)},M().prototype.norm=function(e,t,n){return this.throwIfDisposed(),iu(this,e,t,n)},M().prototype.notEqual=function(e){return this.throwIfDisposed(),jd(this,e)},M().prototype.oneHot=function(e,t=1,n=0){return this.throwIfDisposed(),Nd(this,e,t,n)},M().prototype.onesLike=function(){return this.throwIfDisposed(),Fd(this)},M().prototype.pad=function(e,t){return this.throwIfDisposed(),Ld(this,e,t)},M().prototype.pool=function(e,t,n,r,i,a){return this.throwIfDisposed(),Ud(this,e,t,n,r,i,a)},M().prototype.pow=function(e){return this.throwIfDisposed(),Yl(this,e)},M().prototype.prelu=function(e){return this.throwIfDisposed(),Gd(this,e)},M().prototype.prod=function(e,t){return this.throwIfDisposed(),qd(this,e,t)},M().prototype.reciprocal=function(){return this.throwIfDisposed(),pf(this)},M().prototype.relu=function(){return this.throwIfDisposed(),hf(this)},M().prototype.relu6=function(){return this.throwIfDisposed(),_f(this)},M().prototype.reshapeAs=function(e){return this.throwIfDisposed(),H(this,e.shape)},M().prototype.reshape=function(e){return this.throwIfDisposed(),H(this,e)},M().prototype.resizeBilinear=function(e,t,n){return this.throwIfDisposed(),Am(this,e,t,n)},M().prototype.resizeNearestNeighbor=function(e,t,n){return this.throwIfDisposed(),Mm(this,e,t,n)},M().prototype.reverse=function(e){return this.throwIfDisposed(),yf(this,e)},M().prototype.rfft=function(){return this.throwIfDisposed(),$f(this)},M().prototype.round=function(){return this.throwIfDisposed(),xf(this)},M().prototype.rsqrt=function(){return this.throwIfDisposed(),Cf(this)},M().prototype.selu=function(){return this.throwIfDisposed(),Tf(this)},M().prototype.separableConv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),Df(this,e,t,n,r,i,a)},M().prototype.sigmoid=function(){return this.throwIfDisposed(),lc(this)},M().prototype.sign=function(){return this.throwIfDisposed(),kf(this)},M().prototype.sin=function(){return this.throwIfDisposed(),jf(this)},M().prototype.sinh=function(){return this.throwIfDisposed(),Nf(this)},M().prototype.slice=function(e,t){return this.throwIfDisposed(),dc(this,e,t)},M().prototype.softmax=function(e){return this.throwIfDisposed(),Uf(this,e)},M().prototype.softplus=function(){return this.throwIfDisposed(),Xu(this)},M().prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),zd(this,e,t)},M().prototype.split=function(e,t){return this.throwIfDisposed(),Zf(this,e,t)},M().prototype.sqrt=function(){return this.throwIfDisposed(),Ql(this)},M().prototype.square=function(){return this.throwIfDisposed(),eu(this)},M().prototype.squaredDifference=function(e){return this.throwIfDisposed(),tp(this,e)},M().prototype.squeeze=function(e){return this.throwIfDisposed(),rp(this,e)},M().prototype.stack=function(e,t){return this.throwIfDisposed(),ap(e instanceof oa?[this,e]:[this,...e],t)},M().prototype.step=function(e){return this.throwIfDisposed(),sp(this,e)},M().prototype.stridedSlice=function(e,t,n,r,i,a,o,s){return this.throwIfDisposed(),lp(this,e,t,n,r,i,a,o,s)},M().prototype.sub=function(e){return this.throwIfDisposed(),G(this,e)},M().prototype.sum=function(e,t){return this.throwIfDisposed(),W(this,e,t)},M().prototype.tan=function(){return this.throwIfDisposed(),dp(this)},M().prototype.tanh=function(){return this.throwIfDisposed(),pc(this)},M().prototype.tile=function(e){return this.throwIfDisposed(),mu(this,e)},M().prototype.toBool=function(){return this.throwIfDisposed(),R(this,`bool`)},M().prototype.toFloat=function(){return this.throwIfDisposed(),R(this,`float32`)},M().prototype.toInt=function(){return this.throwIfDisposed(),R(this,`int32`)},M().prototype.topk=function(e,t){return this.throwIfDisposed(),yp(this,e,t)},M().prototype.transpose=function(e){return this.throwIfDisposed(),jp(this,e)},M().prototype.unique=function(e){return this.throwIfDisposed(),Cp(this,e)},M().prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),Tp(this,e,t)},M().prototype.unstack=function(e){return this.throwIfDisposed(),Dp(this,e)},M().prototype.where=function(e,t){return this.throwIfDisposed(),Cl(e,this,t)},M().prototype.zerosLike=function(){return this.throwIfDisposed(),Tl(this)};var oy=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},sy=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},q=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},J=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},cy=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},ly=class{constructor(e){this.maxEntries=e||100,this.cache=new Map}get(e){let t;return this.cache.has(e)&&(t=this.cache.get(e),this.cache.delete(e),this.cache.set(e,t)),t}put(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxEntries){let e=this.cache.keys().next().value;this.cache.delete(e)}this.cache.set(e,t)}getMaxEntries(){return this.maxEntries}setMaxEntries(e){if(e<0)throw Error(`The maxEntries of LRU caches must be at least 0, but got ${e}.`);if(this.maxEntries>e)for(let t=0;t<this.maxEntries-e;t++){let e=this.cache.keys().next().value;this.cache.delete(e)}this.maxEntries=e}};function uy(e,t){if(Array.isArray(e)){let n=[];for(let r=0;r<t;r++)n=n.concat(e);return n}else{let n=Array(t);return n.fill(e),n}}function dy(e,t){if(!e)throw new cy(t)}function fy(e,t){let n=0;for(let r of e)r===t&&n++;return n}function py(e){return e.length===1?e[0]:e}function my(e){return Array.isArray(e)?e:[e]}function hy(e){let t=e.replace(/(.)([A-Z][a-z0-9]+)/g,`$1_$2`).replace(/([a-z])([A-Z])/g,`$1_$2`).toLowerCase();return t[0]===`_`?`private`+t:t}function gy(e){return e.length<=1||e.indexOf(`_`)===-1?e:e.replace(/[_]+(\w|$)/g,(e,t)=>t.toUpperCase())}var _y={};function vy(e){if(e==null)return null;let t={};return t.className=e.getClassName(),t.config=e.getConfig(),t}function yy(e){if(!(typeof e!=`object`||!e))if(Array.isArray(e))e.forEach(e=>yy(e));else{let t=Object.keys(e);for(let n of t){let t=e[n];typeof t==`object`&&t&&(!Array.isArray(t)&&t.type===`ndarray`&&typeof t.value==`number`?e[n]=t.value:yy(t))}}}function by(e,t={},n={},r=`object`,i=!1){if(typeof e==`string`){let i=e,a;if(i in n)a=n[i];else if(i in _y)a=_y[i];else if(a=t[i],a==null)throw new q(`Unknown ${r}: ${e}. This may be due to one of the following reasons:\n1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return a}else{let a=e;if(a.className==null||a.config==null)throw new q(`${r}: Improper config format: ${JSON.stringify(a)}.\n'className' and 'config' must set.`);let o=a.className,s,c;if(o in n?[s,c]=n[o]:o in _y?[s,c]=_y.className:o in t&&([s,c]=t[o]),s==null)throw new q(`Unknown ${r}: ${o}. This may be due to one of the following reasons:\n1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(c!=null){let e={};for(let t of Object.keys(_y))e[t]=_y[t];for(let t of Object.keys(n))e[t]=n[t];let t=a.config;t.customObjects=e;let r=Object.assign({},_y);for(let e of Object.keys(n))_y[e]=n[e];yy(a.config);let o=c(s,a.config,n,i);return _y=Object.assign({},r),o}else{let e=Object.assign({},_y);for(let e of Object.keys(n))_y[e]=n[e];let t=new s(a.config);return _y=Object.assign({},e),t}}}function xy(e,t){return e<t?-1:+(e>t)}function Sy(e,t){return-1*xy(e,t)}function Cy(e){if(e==null)return e;let t=[];for(let n of e)t.indexOf(n)===-1&&t.push(n);return t}function wy(e){if(e==null)throw new q(`Invalid value in obj: ${JSON.stringify(e)}`);for(let t in e)if(e.hasOwnProperty(t))return!1;return!0}function Ty(e,t,n){if(n!=null&&e.indexOf(n)<0)throw new q(`${n} is not a valid ${t}.  Valid values are ${e} or null/undefined.`)}function Ey(e,t,n=0,r=1/0){return dy(n>=0),dy(r>=n),Array.isArray(e)&&e.length>=n&&e.length<=r&&e.every(e=>typeof e===t)}function Dy(e,t){Array.isArray(e)?(O(e.length>0,()=>`${t} is unexpectedly an empty array.`),e.forEach((e,n)=>Dy(e,`element ${n+1} of ${t}`))):O(Number.isInteger(e)&&e>0,()=>`Expected ${t} to be a positive integer, but got ${Oy(e)}.`)}function Oy(e){return e===null?`null`:Array.isArray(e)?`[`+e.map(e=>Oy(e)).join(`,`)+`]`:typeof e==`string`?`"${e}"`:`${e}`}function ky(e,t,n){let r=n==null?Ii():n(),i;return(...a)=>{let o=n==null?Ii():n();return o-r<t?i:(r=o,i=e(...a),i)}}function Ay(e){return e===`relu`?`relu`:e===`linear`?`linear`:e===`elu`?`elu`:null}var jy=0;function My(){return jy++}var Ny={};function Py(e=``){return e in Ny||(Ny[e]=0),Ny[e]+=1,e+Ny[e].toString()}var Fy=[`channelsFirst`,`channelsLast`],Iy=[`nearest`,`bilinear`],Ly=[`valid`,`same`,`causal`],Ry=[`max`,`avg`],zy=[`sum`,`mul`,`concat`,`ave`],By=new Map;function Vy(e){Ty(Fy,`DataFormat`,e)}function Hy(e){Ty(Iy,`InterpolationFormat`,e)}function Uy(e){Ty(Ly,`PaddingMode`,e)}function Wy(e){Ty(Ry,`PoolMode`,e)}var Gy=[],Ky=`/`;function qy(e,t){Gy.push(e);try{let e=t();return Gy.pop(),e}catch(e){throw Gy.pop(),e}}function Jy(){return Gy.length===0?``:Gy.join(Ky)+Ky}function Yy(e){if(!Qy(e))throw Error(`Not a valid tensor name: '`+e+`'`);return Jy()+e}function Xy(e){if(!Qy(e))throw Error(`Not a valid tensor name: '`+e+`'`);By.has(e)||By.set(e,0);let t=By.get(e);if(By.set(e,By.get(e)+1),t>0){let n=`${e}_${t}`;return By.set(n,1),n}else return e}var Zy=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function Qy(e){return!!e.match(Zy)}function $y(e){return e===parseInt(e.toString(),10)}function eb(e,t,n){t??=0,n??=e.length;let r=1;for(let i=t;i<n;++i)r*=e[i];return r}function tb(e){if(e.length===0)return NaN;let t=1/0;for(let n=0;n<e.length;n++){let r=e[n];r<t&&(t=r)}return t}function nb(e){if(e.length===0)return NaN;let t=-1/0;for(let n=0;n<e.length;n++){let r=e[n];r>t&&(t=r)}return t}function rb(e,t){if(t<e)throw new q(`end (${t}) < begin (${e}) is forbidden.`);let n=[];for(let r=e;r<t;++r)n.push(r);return n}var ib;function ab(){return ib??=Xa().epsilon(),ib}function ob(){return`channelsLast`}function sb(e,t){return R(e,t)}function cb(e,t=-1){let n=e.shape.slice();return t<0&&(t=n.length+t+1),n.splice(t,0,1),H(e,n)}function lb(e,t){return I(()=>{if(e.shape.length!==2)throw new q(`repeat() expects a rank-2 tensor, but received a rank-${e.shape.length} tensor.`);return _b(cb(e,1),[1,t,1])})}function ub(e){return H(e,[eb(e.shape)])}function db(e){if(e.rank<=1)throw new q(`batchFlatten requires a minimum rank of 2. Got rank: ${e.rank}.`);return H(e,[e.shape[0],eb(e.shape,1)])}function fb(e,t,n){return I(()=>{switch(e.rank){case 1:return Ff(e,t,n);case 2:return Lf(e,[t,0],[n,e.shape[1]]);case 3:return zf(e,[t,0,0],[n,e.shape[1],e.shape[2]]);case 4:return Vf(e,[t,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3]]);case 5:return dc(e,[t,0,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3],e.shape[4]]);case 6:return dc(e,[t,0,0,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3],e.shape[4],e.shape[5]]);default:throw new q(`sliceAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}})}function pb(e,t,n){return I(()=>{switch(e.rank){case 1:return Ff(e,t,n);case 2:return Lf(e,[0,t],[e.shape[0],n]);case 3:return zf(e,[0,0,t],[e.shape[0],e.shape[1],n]);case 4:return Vf(e,[0,0,0,t],[e.shape[0],e.shape[1],e.shape[2],n]);default:throw new q(`sliceAlongLastAxis() received an unsupported tensor rank: ${e.rank}`)}})}function mb(e,t,n,r){return I(()=>{switch(e.rank){case 1:return Ff(e,t,n);case 2:switch(r){case 1:return fb(e,t,n);case 2:return pb(e,t,n);default:throw new q(`The axis is not within the rank of the tensor ${r}`)}case 3:switch(r){case 1:return fb(e,t,n);case 2:return zf(e,[0,t,0],[e.shape[0],n,e.shape[2]]);case 3:return pb(e,t,n);default:throw new q(`The axis is not within the rank of the tensor ${r}`)}case 4:switch(r){case 1:return fb(e,t,n);case 2:return Vf(e,[0,t,0,0],[e.shape[0],n,e.shape[2],e.shape[3]]);case 3:return Vf(e,[0,0,t,0],[e.shape[0],e.shape[1],n,e.shape[3]]);case 4:return pb(e,t,n);default:throw new q(`The axis is not within the rank of the tensor ${r}`)}default:throw new q(`sliceAlongLastAxis() received an unsupported tensor rank: ${e.rank}`)}})}function hb(e,t=-1){let n;return t<0&&(n=e[0].rank,t=n===0?0:n),t===e[0].rank&&(t=-1),ac(e,t)}function gb(e,t){switch(e.rank){case 1:return Fc([e,t]);case 2:return Lc([e,t],0);case 3:return zc([e,t],0);case 4:return Vc([e,t],0);default:throw new q(`concatAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}}function _b(e,t){if(Array.isArray(t)||(t=[t]),e.rank!==t.length)throw new q(`The length of input n (${t.length}) does not match the number of dimensions in input x (${e.rank})`);return mu(e,t)}function vb(e,t=0,n=1,r,i){return of(e,t,n,r,i)}function yb(e,t,n,r){if(e.rank<2||t.rank<2)throw new J(`dot requires both inputs to be rank >= 2 but got x shape = ${e.shape} and y shape = ${t.shape}`);if(t.rank>=3&&e.shape.slice(-1)[0]!==t.shape.slice(-2)[0])throw new J(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${e.shape} and  y shape = ${t.shape}`);if(e.rank===2&&t.rank===2)return Jp({a:e,b:t,transposeA:!1,transposeB:!1,bias:r?Sb(e.rank,r,ob()):null,activation:n});{let i=e.shape.slice(),a=i.pop();e=H(e,[-1,a]);let o=t.shape.slice(),s=o.pop(),c=o.pop(),l=[...o,s],u=Array.from({length:t.rank},(e,n)=>n===0?t.rank-2:n<=t.rank-2?n-1:n);t=H(jp(t,u),[c,-1]);let d=[...i,...l];return H(Jp({a:e,b:t,transposeA:!1,transposeB:!1,bias:r?Sb(e.rank,r,ob()):null,activation:n}),d)}}function bb(e,t,n){return I(()=>(t=Array.isArray(t)?fp(t,`int32`):R(t,`int32`),bu(e,t,n)))}function xb(e){return V(e,e)}function Sb(e,t,n){let r=t.shape;if(t.rank!==1&&t.rank!==e)throw new q(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${e}`);if(e===5){if(n===`channelsFirst`)return r.length===1?H(t,[1,r[0],1,1,1]):H(t,[1,r[3],r[0],r[1],r[2]]);if(n===`channelsLast`)return r.length===1?H(t,[1,1,1,1,r[0]]):H(t,[1].concat(r))}else if(e===4){if(n===`channelsFirst`)return r.length===1?H(t,[1,r[0],1,1]):H(t,[1,r[2],r[0],r[1]]);if(n===`channelsLast`)return r.length===1?H(t,[1,1,1,r[0]]):H(t,[1].concat(r))}else if(e===3){if(n===`channelsFirst`)return r.length===1?H(t,[1,r[0],1]):H(t,[1,r[1],r[0]]);if(n===`channelsLast`)return r.length===1?H(t,[1,1,r[0]]):H(t,[1].concat(r))}else if(e<3)return t;throw new q(`Unsupported input rank by biasAdd: ${t.rank}`)}function Cb(e,t,n){return I(()=>(n??=ob(),Vy(n),z(e,Sb(e.rank,t,n))))}function wb(e,t=1){if(t!==1)throw new J(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return Nl(e)}function Tb(e){return I(()=>B(e,z(ds(e),1)))}function Eb(e,t,n,r){return I(()=>Pp(e,t,n,r))}function Db(e){return I(()=>Nc(z(.5,V(.2,e)),0,1))}function Ob(e,t,n=!1){return n?e():t()}var kb=[`fanIn`,`fanOut`,`fanAvg`],Ab=[`normal`,`uniform`,`truncatedNormal`];function jb(e){Ty(kb,`FanMode`,e)}function Mb(e){Ty(Ab,`Distribution`,e)}var Nb=class extends Ym{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}},Pb=class extends Nb{apply(e,t){return bd(e,t)}};Pb.className=`Zeros`,K(Pb);var Fb=class extends Nb{apply(e,t){return xd(e,t)}};Fb.className=`Ones`,K(Fb);var Ib=class extends Nb{constructor(e){if(super(),typeof e!=`object`)throw new q(`Expected argument of type ConstantConfig but got ${e}`);if(e.value===void 0)throw new q(`config must have value set but got ${e}`);this.value=e.value}apply(e,t){return I(()=>V(Xl(this.value),xd(e,t)))}getConfig(){return{value:this.value}}};Ib.className=`Constant`,K(Ib);var Lb=class extends Nb{constructor(e){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=e.minval||this.DEFAULT_MINVAL,this.maxval=e.maxval||this.DEFAULT_MAXVAL,this.seed=e.seed}apply(e,t){return cf(e,this.minval,this.maxval,t,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}};Lb.className=`RandomUniform`,K(Lb);var Rb=class extends Nb{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new J(`randomNormal does not support dType ${t}.`);return vb(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}};Rb.className=`RandomNormal`,K(Rb);var zb=class extends Nb{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new J(`truncatedNormal does not support dType ${t}.`);return xp(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}};zb.className=`TruncatedNormal`,K(zb);var Bb=class extends Nb{constructor(e){super(),this.gain=e.gain==null?1:e.gain}apply(e,t){return I(()=>{if(e.length!==2||e[0]!==e[1])throw new q(`Identity matrix initializer can only be used for 2D square matrices.`);return V(this.gain,gu(e[0]))})}getConfig(){return{gain:this.gain}}};Bb.className=`Identity`,K(Bb);function Vb(e,t=`channelsLast`){let n,r;if(Vy(t),e.length===2)n=e[0],r=e[1];else if([3,4,5].indexOf(e.length)!==-1){if(t===`channelsFirst`){let t=eb(e,2);n=e[1]*t,r=e[0]*t}else if(t===`channelsLast`){let t=eb(e,0,e.length-2);n=e[e.length-2]*t,r=e[e.length-1]*t}}else{let t=eb(e);n=Math.sqrt(t),r=Math.sqrt(t)}return[n,r]}var Hb=class extends Nb{constructor(e){if(super(),e.scale<0)throw new q(`scale must be a positive float. Got: ${e.scale}`);this.scale=e.scale==null?1:e.scale,this.mode=e.mode==null?`fanIn`:e.mode,jb(this.mode),this.distribution=e.distribution==null?`normal`:e.distribution,Mb(this.distribution),this.seed=e.seed}apply(e,t){let n=Vb(e),r=n[0],i=n[1],a=this.scale;if(this.mode===`fanIn`?a/=Math.max(1,r):this.mode===`fanOut`?a/=Math.max(1,i):a/=Math.max(1,(r+i)/2),this.distribution===`normal`){let n=Math.sqrt(a);if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new J(`${this.getClassName()} does not support dType ${t}.`);return xp(e,0,n,t,this.seed)}else{let n=Math.sqrt(3*a);return cf(e,-n,n,t,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}};Hb.className=`VarianceScaling`,K(Hb);var Ub=class extends Hb{constructor(e){super({scale:1,mode:`fanAvg`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return Hb.className}};Ub.className=`GlorotUniform`,K(Ub);var Wb=class extends Hb{constructor(e){super({scale:1,mode:`fanAvg`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return Hb.className}};Wb.className=`GlorotNormal`,K(Wb);var Gb=class extends Hb{constructor(e){super({scale:2,mode:`fanIn`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return Hb.className}};Gb.className=`HeNormal`,K(Gb);var Kb=class extends Hb{constructor(e){super({scale:2,mode:`fanIn`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return Hb.className}};Kb.className=`HeUniform`,K(Kb);var qb=class extends Hb{constructor(e){super({scale:1,mode:`fanIn`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return Hb.className}};qb.className=`LeCunNormal`,K(qb);var Jb=class extends Hb{constructor(e){super({scale:1,mode:`fanIn`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return Hb.className}};Jb.className=`LeCunUniform`,K(Jb);var Yb=class extends Nb{constructor(e){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=e.gain==null?this.DEFAULT_GAIN:e.gain,this.seed=e.seed}apply(e,t){return I(()=>{if(e.length<2)throw new J(`Shape must be at least 2D.`);if(t!==`int32`&&t!==`float32`&&t!==void 0)throw TypeError(`Unsupported data type ${t}.`);t=t;let n=k(e.slice(0,-1)),r=e[e.length-1],i=n*r;i>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${i}) elements: Slowness may result.`);let a=vb([Math.max(r,n),Math.min(r,n)],0,1,t,this.seed),o=Km.qr(a,!1),s=o[0],c=o[1].flatten().stridedSlice([0],[Math.min(r,n)*Math.min(r,n)],[Math.min(r,n)+1]);return s=V(s,c.sign()),n<r&&(s=s.transpose()),V(Xl(this.gain),s.reshape(e))})}getConfig(){return{gain:this.gain,seed:this.seed}}};Yb.className=`Orthogonal`,K(Yb);var Xb={constant:`Constant`,glorotNormal:`GlorotNormal`,glorotUniform:`GlorotUniform`,heNormal:`HeNormal`,heUniform:`HeUniform`,identity:`Identity`,leCunNormal:`LeCunNormal`,leCunUniform:`LeCunUniform`,ones:`Ones`,orthogonal:`Orthogonal`,randomNormal:`RandomNormal`,randomUniform:`RandomUniform`,truncatedNormal:`TruncatedNormal`,varianceScaling:`VarianceScaling`,zeros:`Zeros`};function Zb(e,t={}){return by(e,Xm.getMap().classNameMap,t,`initializer`)}function Qb(e){return vy(e)}function $b(e){if(typeof e==`string`){let t=e in Xb?Xb[e]:e;if(t===`GlorotNormal`)return new Wb;if(t===`GlorotUniform`)return new Ub;if(t===`HeNormal`)return new Gb;if(t===`HeUniform`)return new Kb;if(t===`LeCunNormal`)return new qb;if(t===`LeCunUniform`)return new Jb;{let e={};return e.className=t,e.config={},Zb(e)}}else if(e instanceof Nb)return e;else return Zb(e)}function ex(e){return Array.isArray(e)&&Array.isArray(e[0])}function tx(e){return e.length===0?[]:Array.isArray(e[0])?e:[e]}function Y(e){let t;if(Array.isArray(e)){if(e.length!==1)throw new q(`Expected Tensor length to be 1; got ${e.length}`);t=e[0]}else t=e;return t}function nx(e){if(Array.isArray(e)&&Array.isArray(e[0])){if(e.length===1)return e=e,e[0];throw new q(`Expected exactly 1 Shape; got ${e.length}`)}else return e}function rx(e){let t=0;for(let n of e)n.shape.length===0?t+=1:t+=n.shape.reduce((e,t)=>e*t);return t}var ix=`Variable`,ax=class{constructor(e,t=`float32`,n=ix,r=!0,i=null){this.dtype=t??`float32`,this.shape=e.shape,this.id=My(),n??=ix,this.originalName=Yy(n),this.name=Xy(this.originalName),this.trainable_=r,this.constraint=i,this.val=Op(e,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(e){return this.assertNotDisposed(),ox(this.val,e),this.val.id!==e.id&&(this.val.assign(e),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(e){this.trainable_=e,this.val.trainable=e}};function ox(e,t){if(e.shape.toString()!==t.shape.toString())throw Error(`Shape mismatch: `+JSON.stringify(e.shape)+` vs. `+JSON.stringify(t.shape))}function sx(e){return e.map(e=>e.read())}function cx(e){e.forEach(e=>{e[0].write(e[1])})}var lx=class{constructor(e){this.dtype=e.dtype,this.shape=e.shape,e.shape==null?this.ndim=e.ndim:this.ndim=e.shape.length,this.maxNDim=e.maxNDim,this.minNDim=e.minNDim,this.axes=e.axes||{}}},ux=class{constructor(e,t,n,r,i,a,o){this.dtype=e,this.shape=t,this.sourceLayer=n,this.inputs=r,this.callArgs=i,this.outputTensorIndex=o,this.id=My(),a!=null&&(this.originalName=Yy(a),this.name=Xy(this.originalName)),this.rank=t.length}},dx=0,fx=class{constructor(e,t){this.callArgs=t,this.id=dx++,this.outboundLayer=e.outboundLayer,this.inboundLayers=e.inboundLayers,this.nodeIndices=e.nodeIndices,this.tensorIndices=e.tensorIndices,this.inputTensors=e.inputTensors,this.outputTensors=e.outputTensors,this.inputMasks=e.inputMasks,this.outputMasks=e.outputMasks,this.inputShapes=e.inputShapes,this.outputShapes=e.outputShapes;for(let t of e.inboundLayers)t?.outboundNodes.push(this);e.outboundLayer.inboundNodes.push(this)}getConfig(){let e=[];for(let t of this.inboundLayers)t==null?e.push(null):e.push(t.name);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:e,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}},px=0,mx=class extends Ym{constructor(e={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=px++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let t=e.name;if(!t){let e=this.getClassName();t=hy(e)+`_`+Py(e)}if(this.name=t,this.trainable_=e.trainable==null?!0:e.trainable,e.inputShape!=null||e.batchInputShape!=null){let t;if(e.batchInputShape!=null)t=e.batchInputShape;else if(e.inputShape!=null){let n=null;e.batchSize!=null&&(n=e.batchSize),t=[n].concat(e.inputShape)}this.batchInputShape=t;let n=e.dtype;n??=e.inputDType,n??=`float32`,this.dtype=n}e.weights==null?this.initialWeights=null:this.initialWeights=e.weights,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(e,t){return e.name+`_ib-`+t.toString()}getNodeAtIndex(e,t){if(this.inboundNodes.length===0)throw new sy(`The layer has never been called and thus has no defined ${t}.`);if(this.inboundNodes.length<=e)throw new q(`Asked to get ${t} at node ${e}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[e]}getInputAt(e){return py(this.getNodeAtIndex(e,`input`).inputTensors)}getOutputAt(e){return py(this.getNodeAtIndex(e,`output`).outputTensors)}get input(){if(this.inboundNodes.length>1)throw new oy(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new oy(`Layer ${this.name} is not connected, no input to return.`);return py(this.getNodeAtIndex(0,`input`).inputTensors)}get output(){if(this.inboundNodes.length===0)throw new oy(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new oy(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return py(this.getNodeAtIndex(0,`output`).outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(e=>e())}get updates(){return this._updates}get built(){return this._built}set built(e){this._built=e}get trainable(){return this.trainable_}set trainable(e){this._trainableWeights.forEach(t=>t.trainable=e),this.trainable_=e}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(e=>e.trainable):[]}set trainableWeights(e){this._trainableWeights=e}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(e=>!e.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(e){this._nonTrainableWeights=e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw Error(`Cannot call the resetStates() method of a non-stateful Layer object.`)}assertInputCompatibility(e){let t=my(e);if(this.inputSpec==null||this.inputSpec.length===0)return;let n=my(this.inputSpec);if(t.length!==n.length)throw new q(`Layer ${this.name} expects ${n.length} inputs, but it received ${t.length} input tensors. Input received: ${e}`);for(let e=0;e<t.length;e++){let r=t[e],i=n[e];if(i==null)continue;let a=r.rank;if(i.ndim!=null&&a!==i.ndim)throw new q(`Input ${e} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new q(`Input ${e} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new q(`Input ${e} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&r.dtype!==i.dtype)throw new q(`Input ${e} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${r.dtype}.`);if(i.axes){let t=r.shape;for(let n in i.axes){let r=Number(n),a=i.axes[n],o=r>=0?t[r]:t[t.length+r];if(a!=null&&[a,null].indexOf(o)===-1)throw new q(`Input ${e} is incompatible with layer ${this.name}: expected axis ${r} of input shape to have value ${a} but got shape ${t}.`)}}if(i.shape!=null)for(let t=0;t<i.shape.length;++t){let n=i.shape[t],a=r.shape[t];if(n!=null&&a!=null&&n!==a)throw new q(`Input ${e} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${r.shape}.`)}}}call(e,t){return e}invokeCallHook(e,t){this._callHook!=null&&this._callHook(e,t)}setCallHook(e){this._callHook=e}clearCallHook(){this._callHook=null}apply(e,t){t||={},this.assertNotDisposed();let n=my(e),r=vx(e),i=yx(e);if(r===i)throw new q(`Arguments to apply() must be all SymbolicTensors or all Tensors`);return qy(this.name,()=>{if(!this.built){this.assertInputCompatibility(e);let t=[];for(let n of my(e))t.push(n.shape);this.build(py(t)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&i&&(this._refCount=1)}if(this.assertInputCompatibility(e),i){let r=this.call(e,t);this.supportsMasking&&this.setMaskMetadata(e,r);let i=my(r),a=[];for(let e of i)n.indexOf(e)!==-1&&(e=e.clone()),a.push(e);if(r=py(a),this.activityRegularizer!=null)throw new J(`Layer invocation in the presence of activity regularizer(s) is not supported yet.`);return r}else{let n=hx(e),r=this.computeOutputShape(n),i,a=gx(e);if(this.warnOnIncompatibleInputShape(Array.isArray(e)?n[0]:n),i=r!=null&&r.length>0&&Array.isArray(r[0])?r.map((n,r)=>new ux(a,n,this,my(e),t,this.name,r)):new ux(a,r,this,my(e),t,this.name),this.addInboundNode(e,i,null,null,n,r,t),this._refCount++,this.activityRegularizer!=null)throw new J(`Layer invocation in the presence of activity regularizer(s) is not supported yet.`);return i}})}warnOnIncompatibleInputShape(e){if(this.batchInputShape!=null)if(e.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(e)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let t=!1;this.batchInputShape.forEach((n,r)=>{n!=null&&e[r]!=null&&e[r]!==n&&(t=!0)}),t&&console.warn(`The shape of the input tensor (${JSON.stringify(e)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new oy(`The layer ${this.name} has never been called and thus has no defined output shape.`);let e=[];for(let t of this.inboundNodes){let n=JSON.stringify(t.outputShapes);e.indexOf(n)===-1&&e.push(n)}if(e.length===1){let e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new oy(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new sy(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return rx(this.weights)}build(e){this.built=!0}getWeights(e=!1){return sx(e?this.trainableWeights:this.weights)}setWeights(e){I(()=>{let t=this.weights;if(t.length!==e.length)throw new q(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${e.length}, but the layer was expecting ${t.length} weights. Provided weights: ${e}...`);if(t.length===0)return;let n=[],r=sx(t);for(let i=0;i<r.length;++i){let a=r[i],o=t[i],s=e[i];if(!xe(a.shape,s.shape))throw new q(`Layer weight shape ${a.shape} not compatible with provided weight shape ${s.shape}`);n.push([o,s])}cx(n)})}addWeight(e,t,n,r,i,a,o,s){if(this._addedWeightNames.indexOf(e)!==-1)throw new q(`Duplicate weight name ${e} for layer ${this.name}`);this._addedWeightNames.push(e),n??=`float32`,this.fastWeightInitDuringBuild&&(r=s==null?$b(`zeros`):s());let c=r.apply(t,n),l=new ax(c,n,e,a,o);return c.dispose(),i!=null&&this.addLoss(()=>i.apply(l.read())),a??=!0,a?this._trainableWeights.push(l):this._nonTrainableWeights.push(l),l}setFastWeightInitDuringBuild(e){this.fastWeightInitDuringBuild=e}addLoss(e){e==null||Array.isArray(e)&&e.length===0||(e=my(e),this._losses!==void 0&&this._losses!==null&&this.losses.push(...e))}computeOutputShape(e){return e}computeMask(e,t){if(!this.supportsMasking){if(t!=null)if(Array.isArray(t))t.forEach(e=>{if(e!=null)throw TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return t}setMaskMetadata(e,t,n){if(!this.supportsMasking)return;let r=this.computeMask(e,n),i=my(t),a=my(r);if(i.length!==a.length)throw Error(`${this.name} outputs ${i.length} tensors but ${i.length} masks for those tensors`);for(let e=0;e<i.length;e++)i[e].kerasMask=a[e]}addInboundNode(e,t,n,r,i,a,o=null){let s=my(e);t=my(t),n=my(n),r=my(r),i=tx(i),a=tx(a);let c=[],l=[],u=[];for(let e of s)c.push(e.sourceLayer),l.push(e.nodeIndex),u.push(e.tensorIndex);new fx({outboundLayer:this,inboundLayers:c,nodeIndices:l,tensorIndices:u,inputTensors:s,outputTensors:t,inputMasks:n,outputMasks:r,inputShapes:i,outputShapes:a},o);for(let e=0;e<t.length;e++)t[e].sourceLayer=this,t[e].nodeIndex=this.inboundNodes.length-1,t[e].tensorIndex=e}getConfig(){let e={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(e.batchInputShape=this.batchInputShape),this.dtype!=null&&(e.dtype=this.dtype),e}disposeWeights(){return this.weights.forEach(e=>e.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let e=0;return--this._refCount===0&&(e=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:e}}};function hx(e){e=my(e);let t=[];for(let n of e)t.push(n.shape);return py(t)}function gx(e){return`float32`}function _x(e,t,n){if((t==null||n!=null&&n>0)&&(t=e.sourceLayer,n=e.nodeIndex),t.inboundNodes.length===0)return[e];{let e=t.inboundNodes[n];if(e.inboundLayers.length===0)return e.inputTensors;{let t=[];for(let n=0;n<e.inboundLayers.length;n++){let r=e.inputTensors[n],i=e.inboundLayers[n],a=e.nodeIndices[n],o=_x(r,i,a);for(let e of o)t.indexOf(e)===-1&&t.push(e)}return t}}}function vx(e){let t=!0;for(let n of my(e))if(!(n instanceof ux)){t=!1;break}return t}function yx(e){let t=!0;for(let n of my(e))if(n instanceof ux){t=!1;break}return t}var bx=class extends mx{constructor(e){if(super({dtype:e.dtype,name:e.name==null?Py(`input`).toString():e.name}),e.batchSize??=null,e.sparse??=!1,this.trainable=!1,this.built=!0,this.sparse=e.sparse,e.inputShape!=null&&e.batchInputShape!=null)throw new q(`Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.`);let t=e.batchInputShape;if(t==null){if(e.inputShape==null)throw new q("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");t=[e.batchSize].concat(e.inputShape)}else if(e.batchSize!=null)throw new q(`Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.`);let n=e.dtype||`float32`;this.batchInputShape=t,this.dtype=n,this.inputSpec=[{shape:t}];let r=new ux(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new fx({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[t],outputShapes:[t]})}apply(e,t){throw new q(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}};bx.className=`InputLayer`,K(bx);function xx(e){if(e.batchShape==null&&e.shape==null)throw Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(e.batchShape!=null&&e.shape!=null)throw new q("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=e.batchShape;e.shape!=null&&t==null&&(t=[null].concat(e.shape));let n=e.dtype;return n??=`float32`,new bx({batchInputShape:t,name:e.name,dtype:n,sparse:e.sparse}).inboundNodes[0].outputTensors[0]}function Sx(e,t){if(e.dtype==null||e.dtype===t.dtype)return t;try{return R(t,e.dtype)}catch{throw new q(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${e.name}' (${e.dtype}).`)}}var Cx=class e{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof e)for(let e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(let e of t)this.add(e.key,e.value)}}add(e,t,n){if(this.id2Value[e.id]==null)this.id2Value[e.id]=Sx(e,t),this.name2Id[e.name]=e.id,n!=null&&(this.id2Mask[e.id]=n);else throw new q(`Duplicate key: name=${e.name}, id=${e.id}`);return this}addFeed(e){this.add(e.key,e.value)}hasKey(e){return this.id2Value[e.id]!=null}names(){return Object.keys(this.name2Id)}getValue(e){if(e instanceof ux){if(this.id2Value[e.id]==null)throw new q(`Nonexistent key: ${e.name}`);return this.id2Value[e.id]}else{let t=this.name2Id[e];if(t==null)throw new q(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Value[t]}}getMask(e){if(e instanceof ux){if(this.id2Value[e.id]==null)throw new q(`Nonexistent key: ${e.name}`);return this.id2Mask[e.id]}else{let t=this.name2Id[e];if(t==null)throw new q(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Mask[t]}}disposeMasks(){this.id2Mask!=null&&L(this.id2Mask)}},wx=new ly,Tx=new ly;function Ex(e){wx?.setMaxEntries(e),Tx?.setMaxEntries(e)}function Dx(e,t,n,r){let i=n==null?!1:n.training,a=Array.isArray(e),o=a?e:[e],s=o.map(e=>e.name),c=[],l=t.names();for(let e of s)l.indexOf(e)===-1?c.push(null):c.push(t.getValue(e));r!=null&&(r.maxNumTensors=-1/0,r.minNumTensors=1/0);let u=s.join(`,`)+`|`+t.names().sort().join(`,`),d=wx.get(u),f;if(d==null){let e=Ox(o,t);d=e.sorted,f=e.recipientCounts,wx.put(u,d),Tx.put(u,f)}f={},i||Object.assign(f,Tx.get(u));let p=new Cx(t);for(let e=0;e<d.length;++e){if(r!=null){let e=qa().numTensors;e>r.maxNumTensors&&(r.maxNumTensors=e),e<r.minNumTensors&&(r.minNumTensors=e)}let a=d[e],o=a.sourceLayer;if(o instanceof bx)continue;let l=[],u=[],m=[],h=!1;for(let e of a.inputs){let n=p.getValue(e),r=p.getMask(e);l.push(n),u.push(r),r!=null&&(h=!0),i||(f[e.name]--,f[e.name]===0&&!t.hasKey(e)&&s.indexOf(e.name)===-1&&!n.isDisposed&&e.sourceLayer.stateful!==!0&&m.push(n))}h&&(n||={},n.mask=u[0]);let g=my(o.apply(l,n)),_=null;o.supportsMasking&&(_=o.computeMask(l,u));let v=jx(a),y=Array.isArray(v)?v:[v];for(let e=0;e<y.length;++e){p.hasKey(y[e])||p.add(y[e],g[e],Array.isArray(_)?_[0]:_);let t=s.indexOf(y[e].name);t!==-1&&(c[t]=g[e])}i||L(m)}return p.disposeMasks(),a?c:c[0]}function Ox(e,t){O(e!=null&&e.length>0,()=>`Expected at least one fetch, got none`);let n=[],r={};if(e.length===1){let i=Ax(e[0],t);n=i.sorted,r=i.recipientMap}else{let i=new Set;for(let a of e){let{sorted:e,recipientMap:o}=Ax(a,t);for(let t of e)i.has(t.name)||(n.push(t),i.add(t.name));for(let e in o)r[e]??(r[e]=new Set),o[e].forEach(t=>r[e].add(t))}}return{sorted:n,recipientCounts:kx(r)}}function kx(e){let t={};for(let n in e)t[n]=e[n].size;return t}function Ax(e,t){let n=new Set,r=[],i={};for(let e of t.names())n.add(e);let a=[],o=[];for(a.push(e);a.length>0;){let e=a[a.length-1];if(n.has(e.name)){a.pop();continue}let t=o[o.length-1]===a.length-1;if(e.inputs.length===0||t)a.pop(),r.push(e),n.add(e.name),t&&o.pop();else{o.push(a.length-1);for(let t of e.inputs)i[t.name]??(i[t.name]=new Set),i[t.name].add(e.name),!n.has(t.name)&&a.push(t)}}return{sorted:r,recipientMap:i}}function jx(e){let t;if(e.sourceLayer.inboundNodes.length===1)t=e.sourceLayer.output;else{let n=null;for(let t=0;t<e.sourceLayer.inboundNodes.length;++t)for(let r of e.sourceLayer.inboundNodes[t].outputTensors)if(r.id===e.id){n=t;break}t=e.sourceLayer.getOutputAt(n)}return t}j().registerFlag(`TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES`,()=>100,Ex);function Mx(e,t){return I(()=>Ql(W(V(e,e),t,!0)))}var Nx=class extends Ym{getConfig(){return{}}},Px=class extends Nx{constructor(e){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=e.maxValue==null?this.defaultMaxValue:e.maxValue,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return I(()=>{let t=Mx(e,this.axis);return V(e,B(Nc(t,0,this.maxValue),z(ab(),t)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}};Px.className=`MaxNorm`,K(Px);var Fx=class extends Nx{constructor(e){super(),this.defaultAxis=0,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return I(()=>B(e,z(ab(),Mx(e,this.axis))))}getConfig(){return{axis:this.axis}}};Fx.className=`UnitNorm`,K(Fx);var Ix=class extends Nx{apply(e){return hf(e)}};Ix.className=`NonNeg`,K(Ix);var Lx=class extends Nx{constructor(e){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=e.minValue==null?this.defaultMinValue:e.minValue,this.maxValue=e.maxValue==null?this.defaultMaxValue:e.maxValue,this.rate=e.rate==null?this.defaultRate:e.rate,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return I(()=>{let t=Mx(e,this.axis);return V(e,B(z(V(this.rate,Nc(t,this.minValue,this.maxValue)),V(1-this.rate,t)),z(ab(),t)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}};Lx.className=`MinMaxNorm`,K(Lx);var Rx={maxNorm:`MaxNorm`,minMaxNorm:`MinMaxNorm`,nonNeg:`NonNeg`,unitNorm:`UnitNorm`};function zx(e){return vy(e)}function Bx(e,t={}){return by(e,Xm.getMap().classNameMap,t,`constraint`)}function Vx(e){return e==null?null:typeof e==`string`?Bx({className:e in Rx?Rx[e]:e,config:{}}):e instanceof Nx?e:Bx(e)}async function Hx(e){if(e==null)return;let t=[],n=[],r=[];for(let i in e){let a=e[i];if(typeof a!=`number`){let e=a;t.push(e.data()),n.push(i),r.push(e)}}if(t.length>0){let i=await Promise.all(t);for(let t=0;t<i.length;++t)e[n[t]]=i[t][0];L(r)}}function Ux(e){if(e!=null)for(let t in e){let n=e[t];typeof n!=`number`&&n.dispose()}}var Wx;(function(e){e[e.SILENT=0]=`SILENT`,e[e.VERBOSE=1]=`VERBOSE`})(Wx||={});var Gx=class{constructor(){this.validationData=null}setParams(e){this.params=e}async onEpochBegin(e,t){}async onEpochEnd(e,t){}async onBatchBegin(e,t){}async onBatchEnd(e,t){}async onTrainBegin(e){}async onTrainEnd(e){}setModel(e){}},Kx=class{constructor(e,t=10){e??=[],this.callbacks=e,this.queueLength=t}append(e){this.callbacks.push(e)}setParams(e){for(let t of this.callbacks)t.setParams(e)}setModel(e){for(let t of this.callbacks)t.setModel(e)}async onEpochBegin(e,t){t??={};for(let n of this.callbacks)await n.onEpochBegin(e,t)}async onEpochEnd(e,t){t??={};for(let n of this.callbacks)await n.onEpochEnd(e,t)}async onBatchBegin(e,t){t??={};for(let n of this.callbacks)await n.onBatchBegin(e,t)}async onBatchEnd(e,t){t??={};for(let n of this.callbacks)await n.onBatchEnd(e,t)}async onTrainBegin(e){e??={};for(let t of this.callbacks)await t.onTrainBegin(e)}async onTrainEnd(e){e??={};for(let t of this.callbacks)await t.onTrainEnd(e)}},qx=class extends Gx{constructor(){super()}async onEpochBegin(e){this.seen=0,this.totals={}}async onBatchEnd(e,t){t??={};let n=t.size==null?0:t.size;this.seen+=n;for(let e in t){let r=t[e];if(typeof r==`number`)this.totals.hasOwnProperty(e)||(this.totals[e]=0),this.totals[e]=this.totals[e]+r*n;else{let t;e in this.totals?t=this.totals[e]:this.totals[e]=0;let i=I(()=>z(this.totals[e],V(r,n)));this.totals[e]=i,t?.dispose()}}}async onEpochEnd(e,t){if(t!=null)for(let e of this.params.metrics)this.totals[e]!=null&&(typeof this.totals[e]==`number`?t[e]=this.totals[e]/this.seen:I(()=>{t[e]=V(B(1,this.seen),this.totals[e]),this.totals[e].dispose(),Ja(t[e])}))}},Jx=class extends Gx{async onTrainBegin(e){this.epoch=[],this.history={}}async onEpochEnd(e,t){t??={},this.epoch.push(e);for(let e in t)this.history[e]??(this.history[e]=[]),this.history[e].push(t[e])}async syncData(){let e=[],t=[],n=[];for(let r in this.history){let i=this.history[r];for(let a=0;a<i.length;++a)if(typeof i[a]!=`number`){let o=i[a];e.push(o.data()),t.push(r),n.push(a)}}let r=await Promise.all(e);for(let e=0;e<r.length;++e)this.history[t[e]][n[e]].dispose(),this.history[t[e]][n[e]]=r[e][0]}},Yx=class extends Gx{constructor(e,t){if(super(),this.currentEpoch=0,this.nowFunc=e.nowFunc,this.nextFrameFunc=e.nextFrameFunc||Hh,this.yieldEvery=t||`auto`,this.yieldEvery===`auto`&&(this.yieldEvery=125),this.yieldEvery===`never`&&e.onYield!=null)throw Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");ze(this.yieldEvery)&&(this.maybeWait=ky(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=e.onTrainBegin,this.trainEnd=e.onTrainEnd,this.epochBegin=e.onEpochBegin,this.epochEnd=e.onEpochEnd,this.batchBegin=e.onBatchBegin,this.batchEnd=e.onBatchEnd,this.yield=e.onYield}async maybeWait(e,t,n){let r=[];this.yield!=null&&(await Hx(n),r.push(this.yield(e,t,n))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(e,t){this.currentEpoch=e,this.epochBegin!=null&&(await Hx(t),await this.epochBegin(e,t))}async onEpochEnd(e,t){let n=[];this.epochEnd!=null&&(await Hx(t),n.push(this.epochEnd(e,t))),this.yieldEvery===`epoch`&&n.push(this.nextFrameFunc()),await Promise.all(n)}async onBatchBegin(e,t){this.batchBegin!=null&&(await Hx(t),await this.batchBegin(e,t))}async onBatchEnd(e,t){let n=[];this.batchEnd!=null&&(await Hx(t),n.push(this.batchEnd(e,t))),this.yieldEvery===`batch`?n.push(this.nextFrameFunc()):ze(this.yieldEvery)&&n.push(this.maybeWait(this.currentEpoch,e,t)),await Promise.all(n)}async onTrainBegin(e){this.trainBegin!=null&&(await Hx(e),await this.trainBegin(e))}async onTrainEnd(e){this.trainEnd!=null&&(await Hx(e),await this.trainEnd(e))}};function Xx(e,t){return e??={},e instanceof Gx?[e]:Array.isArray(e)&&e[0]instanceof Gx?e:my(e).map(e=>new Yx(e,t))}var Zx=class e{constructor(){}static registerCallbackConstructor(t,n){O(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),e.checkForDuplicate(n),e.constructors[t]??(e.constructors[t]=[]),e.constructors[t].push(n)}static checkForDuplicate(t){for(let n in e.constructors)e.constructors[+n].forEach(e=>{if(e===t)throw new q(`Duplicate callback constructor.`)})}static clear(){e.constructors={}}static createCallbacks(t){let n=[];for(let r in e.constructors){let i=+r;t>=i&&n.push(...e.constructors[i])}return n.map(e=>new e)}};Zx.constructors={};function Qx(e,t,n,r,i,a,o,s,c){let l=new Jx,u=[new qx,...Zx.createCallbacks(t)];e!=null&&u.push(...e),u.push(l);let d=new Kx(u);return d.setParams({epochs:n,initialEpoch:r,samples:i,steps:a,batchSize:o,verbose:t,doValidation:s,metrics:c}),{callbackList:d,history:l}}function $x(e,t={},n=!1){return by(e,Xm.getMap().classNameMap,t,`layer`,n)}function eS(e,t){return I(()=>{e.dtype!==`float32`&&(e=R(e,`float32`));let n=W(xb(e),t,!0),r=Ql(_d(n,jc(n.shape,ab())));return B(e,r)})}function tS(e,t){return I(()=>yd(xb(G(t,e)),-1))}function nS(e,t){return I(()=>yd(ds(G(t,e)),-1))}function rS(e,t){return I(()=>V(100,yd(ds(B(G(e,t),Nc(ds(e),ab(),Number.MAX_VALUE))),-1)))}function iS(e,t){return I(()=>yd(xb(G(Hu(z(1,Nc(t,ab(),Number.MAX_VALUE))),Hu(z(1,Nc(e,ab(),Number.MAX_VALUE))))),-1))}function aS(e,t){return I(()=>yd(xb(_d(0,G(1,V(e,t)))),-1))}function oS(e,t){return I(()=>yd(_d(0,G(1,V(e,t))),-1))}function sS(e,t){return I(()=>{let n=W(V(e,t),-1);return _d(0,z(1,G(Gl(V(G(1,e),t),-1),n)))})}function cS(e,t){return I(()=>{let n=Math.log(2),r=G(t,e);return yd(G(z(r,Xu(V(-2,r))),n),-1)})}function lS(e,t,n=!1){return I(()=>{if(n)t=Uf(t);else{let e=W(t,t.shape.length-1,!0);t=B(t,e)}return t=Nc(t,ab(),1-ab()),Ju(W(V(R(e,`float32`),Hu(t)),t.shape.length-1))})}function uS(e,t,n=!1){return I(()=>{let r=R(vu(ub(e)),`int32`);t=Nc(t,ab(),1-ab());let i=t.shape;return lS(H(Nd(r,i[i.length-1]),i),t,n)})}function dS(e,t){if(!xe(e.shape,t.shape))throw new q(`logits and labels must have the same shape, but got shapes ${JSON.stringify(e.shape)} and ${JSON.stringify(t.shape)}`);return I(()=>{let n=hf(t),r=Ju(ds(t));return z(G(n,V(t,e)),Wu(cu(r)))})}function fS(e,t){return I(()=>{let n;return n=Nc(t,ab(),1-ab()),n=Hu(B(n,G(1,n))),yd(dS(e,n),-1)})}function pS(e,t){return I(()=>W(V(e,Hu(B(Nc(e,ab(),1),Nc(t,ab(),1)))),-1))}function mS(e,t){return I(()=>yd(G(t,V(e,Hu(z(ab(),t)))),-1))}function hS(e,t){return I(()=>Ju(W(V(eS(e,-1),eS(t,-1)),-1)))}var gS={meanSquaredError:tS,meanAbsoluteError:nS,meanAbsolutePercentageError:rS,meanSquaredLogarithmicError:iS,squaredHinge:aS,hinge:oS,categoricalHinge:sS,logcosh:cS,categoricalCrossentropy:lS,sparseCategoricalCrossentropy:uS,binaryCrossentropy:fS,kullbackLeiblerDivergence:pS,poisson:mS,cosineProximity:hS};function _S(e){if(typeof e==`string`){if(e in gS)return gS[e];let t=`Unknown loss ${e}`;throw e.toLowerCase().includes(`softmaxcrossentropy`)&&(t=`Unknown loss ${e}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new q(t)}else return e}function vS(e,t){return I(()=>yd(xl(e,sb(Su(t,V(.5,Fd(t))),e.dtype)),-1))}function yS(e,t){return I(()=>sb(xl(xs(e,-1),xs(t,-1)),`float32`))}function bS(e,t){return I(()=>R(W(ad(xl(e,1),xl(t,1))),`float32`))}function xS(e,t){return I(()=>R(W(ad(xl(e,0),xl(t,1))),`float32`))}function SS(e,t){return I(()=>{let n=bS(e,t),r=z(n,xS(e,t));return R(Cl(Su(r,0),B(n,r),0),`float32`)})}function CS(e,t){return fS(e,t)}function wS(e,t){return e.rank===t.rank&&(e=rp(e,[e.rank-1])),t=xs(t,-1),t.dtype!==e.dtype&&(t=R(t,e.dtype)),R(xl(e,t),`float32`)}var TS=tS,ES=tS,DS=nS,OS=nS,kS=rS,AS=rS,jS=lS,MS=hS,NS=uS,PS={binaryAccuracy:vS,categoricalAccuracy:yS,precision:SS,categoricalCrossentropy:jS,sparseCategoricalCrossentropy:NS,mse:TS,MSE:ES,mae:DS,MAE:OS,mape:kS,MAPE:AS,cosine:MS};function FS(e){if(typeof e==`string`&&e in PS)return PS[e];if(typeof e!=`string`&&e!=null)return e;throw new q(`Unknown metric ${e}`)}function IS(e){if(dy(e!==null,`Unknown LossOrMetricFn ${e}`),typeof e==`string`)return e;{let t;for(let n of Object.keys(gS))if(gS[n]===e){t=n;break}if(t!==void 0)return t;for(let n of Object.keys(PS))if(PS[n]===e){t=n;break}return t===void 0?e.name:t}}function LS(e){let t={Adagrad:()=>Bh.adagrad(.01),Adadelta:()=>Bh.adadelta(1,.95,ab()),Adam:()=>Bh.adam(.001,.9,.999,ab()),Adamax:()=>Bh.adamax(.002,.9,.999,ab(),0),RMSProp:()=>Bh.rmsprop(.001,.9,0,ab()),SGD:()=>Bh.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,e in t)return t[e]();throw new q(`Unknown Optimizer ${e}`)}var RS=1*1024*1024;function zS(e,t,n=!1){if(typeof e!=`object`||!e||Object.getPrototypeOf(e)!==Object.prototype||!BS(e))throw Error(`User-defined metadata is expected to be a JSON object, but is not.`);if(n){let n=JSON.stringify(e);n.length>1048576&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${n.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${RS}.`)}}function BS(e){if(e===null)return!0;if(typeof e==`object`)if(Object.getPrototypeOf(e)===Object.prototype){let t=Object.keys(e);for(let n of t)if(typeof n!=`string`||!BS(e[n]))return!1;return!0}else if(Array.isArray(e)){for(let t of e)if(!BS(t))return!1;return!0}else return!1;else{let t=typeof e;return t===`string`||t===`number`||t===`boolean`}}function VS(e,t,n,r=console.log){let i=US(e),a=[`Layer (type)`,`Input Shape`,`Output shape`,`Param #`];i?(t||=90,n||=[.32,.61,.89,1]):(t||=115,n||=[.24,.48,.7,.8,1]),n[n.length-1]<=1&&(n=n.map(e=>Math.floor(t*e)));let o;if(!i){a.push(`Receives inputs`),o=[];for(let t in e.nodesByDepth)o.push(...e.nodesByDepth[t])}r(`_`.repeat(t)),WS(a,n,r),r(`=`.repeat(t));let s=e.layers;for(let e=0;e<s.length;++e)i?GS(s[e],n,r):KS(s[e],n,o,r),r((e===s.length-1?`=`:`_`).repeat(t));e.checkTrainableWeightsConsistency();let c=HS(e),l=rx(e.nonTrainableWeights);r(`Total params: ${c+l}`),r(`Trainable params: ${c}`),r(`Non-trainable params: ${l}`),r(`_`.repeat(t))}function HS(e){let t;return t=e.collectedTrainableWeights==null?rx(e.trainableWeights):rx(e.collectedTrainableWeights),t}function US(e){let t=!0,n=[],r=[];for(let t in e.nodesByDepth)n.push(e.nodesByDepth[t]);for(let e of n){if(e.length>1||e.length===1&&e[0].inboundLayers.length>1){t=!1;break}r.push(...e)}if(t)for(let n of e.layers){let e=!1;for(let i of n.inboundNodes)if(r.indexOf(i)!==-1)if(e){t=!1;break}else e=!0;if(!t)break}return t}function WS(e,t,n=console.log){let r=``;for(let n=0;n<e.length;++n)n>0&&(r=r.slice(0,r.length-1)+` `),r+=e[n],r=r.slice(0,t[n]),r+=` `.repeat(t[n]-r.length);n(r)}function GS(e,t,n){let r,i;try{i=e.inboundNodes.map(e=>JSON.stringify(e.inputShapes)).join(`,`)}catch{i=`multiple`}try{r=JSON.stringify(e.outputShape)}catch{r=`multiple`}WS([`${e.name} (${e.getClassName()})`,i,r,e.countParams().toString()],t,n)}function KS(e,t,n,r){let i,a;try{a=e.inboundNodes.map(e=>JSON.stringify(e.inputShapes)).join(`,`)}catch{a=`multiple`}try{i=JSON.stringify(e.outputShape)}catch{i=`multiple`}let o=[];for(let t of e.inboundNodes)if(!(n!=null&&n.length>0&&n.indexOf(t)===-1))for(let e=0;e<t.inboundLayers.length;++e){let n=t.inboundLayers[e].name,r=t.nodeIndices[e],i=t.tensorIndices[e];o.push(`${n}[${r}][${i}]`)}let s=e.name,c=e.getClassName(),l=o.length===0?``:o[0];WS([`${s} (${c})`,a,i,e.countParams().toString(),l],t,r);for(let e=1;e<o.length;++e)WS([``,``,``,``,o[e]],t,r)}function qS(e,t,n){return(e===`inboundNodes`||e===`outputLayers`||e===`inputLayers`)&&t===0&&typeof n==`string`}function JS(e,t){if(e===null)return null;if(typeof e==`string`)return gy(e);if(typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Array){let n=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];qS(t,i,r)?n.push(r):n.push(JS(r,t))}return n}else{let t={};for(let n of Object.keys(e)){let r=e[n];if(n===`name`&&typeof r==`string`)t[n]=r;else{let e=gy(n);t[e]=JS(r,e)}}return t}}function YS(e,t){if(e==null)return null;if(typeof e==`string`)return hy(e);if(typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Array){let n=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];qS(t,i,r)?n.push(r):n.push(YS(r,t))}return n}else{let t={};for(let n of Object.keys(e)){let r=e[n],i=hy(n);(n===`name`||n===`className`)&&typeof r==`string`?t[i]=r:t[i]=YS(r,n)}return t}}var XS=`4.22.0`,ZS=e=>{let t=Object.keys(e);if(t.length===0)return!1;let n=t[0].split(`/`);return!isNaN(parseInt(n[n.length-1],10))},QS=class e extends mx{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){let e=this.getClassName().toLowerCase();this.name=Py(e)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],Cy(this.inputs).length!==this.inputs.length)throw new q(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(e=>e.name)}`);Cy(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(e=>e.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(let e of this.outputs){let t=e.sourceLayer,n=e.nodeIndex,r=e.tensorIndex;this.outputLayers.push(t),this.outputLayersNodeIndices.push(n),this.outputLayersTensorIndices.push(r)}for(let e of this.inputs){let t=e.sourceLayer,n=e.nodeIndex,r=e.tensorIndex;dy(n===0,`input layer has >1 nodes`),dy(r===0,`input layer has >1 tensors`),this.inputLayers.push(t),this.inputLayersNodeIndices.push(n),this.inputLayersTensorIndices.push(r)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let e=0;e<this.inputLayers.length;e++){let n=this.inputLayers[e];if(!(n instanceof bx))throw TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${e} (0-based) originates from layer type ${n.getClassName()}.`);this.inputNames.push(n.name),this.feedInputShapes.push(n.batchInputShape),this.feedInputNames.push(n.name)}for(let e of this.outputLayers)this.outputNames.push(e.name);this.internalInputShapes=this.inputs.map(e=>e.shape),this.internalOutputShapes=this.outputs.map(e=>e.shape);let n={},r={},i={},a={},o={},s=[],c=(t,n,r,i,a,l)=>{(i==null||a==null||l==null)&&(i=t.sourceLayer,a=t.nodeIndex,l=t.tensorIndex);let u=i.inboundNodes[a];if(r.indexOf(u)!==-1)throw new sy(`The tensor ${t.name} at layer "${i.name}" is part of a cycle.`);if(n.indexOf(u)!==-1)return;this.containerNodes.add(e.nodeKey(i,a)),i.id in o||(o[i.id]=Object.keys(o).length),r.indexOf(u)===-1&&r.push(u);let d=u.inboundLayers.length;for(let e=0;e<d;e++){let t=u.inputTensors[e],i=u.inboundLayers[e],a=u.nodeIndices[e],o=u.tensorIndices[e];c(t,n,r,i,a,o)}for(n.push(u);r.indexOf(u)>=0;)r.splice(r.indexOf(u),1);s.push(u)},l=[],u=[];for(let e of this.outputs)c(e,l,u);let d=s.slice().reverse();for(let e of d){r[e.id]=e,e.id in n||(n[e.id]=0);let t=n[e.id],o=i[e.outboundLayer.id]==null?0:i[e.outboundLayer.id];t=Math.max(t,o),i[e.outboundLayer.id]=t,a[e.outboundLayer.id]=e.outboundLayer,n[e.id]=t;for(let i=0;i<e.inboundLayers.length;i++){let a=e.inboundLayers[i],o=e.nodeIndices[i],s=a.inboundNodes[o],c=n[s.id]==null?0:n[s.id];n[s.id]=Math.max(t+1,c),r[s.id]=s}}let f={};for(let e in n){let t=n[e];t in f||(f[t]=[]),f[t].push(r[e])}let p={};for(let e in i){let t=i[e];t in p||(p[t]=[]),p[t].push(a[e])}let m=Object.keys(p).map(e=>parseInt(e,10)).sort(Sy);this.layers=[];for(let t of m){let n=p[t];n.sort((e,t)=>{let n=o[e.id],r=o[t.id];return n<r?-1:+(n>r)});for(let t of n)t instanceof e&&this.internalContainerRefs.push(t),this.layers.push(t)}this.layersByDepth=p,m=Object.keys(f).map(e=>parseInt(e,10)).sort(Sy);let h=this.inputs.slice(),g=[];for(let e of m)for(let t of f[e]){let e=t.outboundLayer;if(e!=null){for(let n of t.inputTensors)if(h.indexOf(n)===-1)throw new sy(`Graph disconnected: cannot obtain value for tensor ${n} at layer "${e.name}". The following previous layers were accessed without issue: ${g}`);for(let e of t.outputTensors)h.push(e);g.push(e.name)}}this.nodesByDepth=f;let _=this.layers.map(e=>e.name);for(let e of _){let t=_.filter(t=>t===e).length;if(t!==1)throw new sy(`The name "${e}" is used ${t} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(_))}this.outboundNodes=[],this.inboundNodes=[],new fx({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(e=>null),outputMasks:this.outputs.map(e=>null),inputShapes:this.inputs.map(e=>e.shape),outputShapes:this.outputs.map(e=>e.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();let e={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(let t of this.layers)e.numDisposedVariables+=t.dispose().numDisposedVariables;for(let t of this.internalContainerRefs)e.numDisposedVariables+=t.dispose().numDisposedVariables}return e.refCountAfterDispose=this._refCount,e}get trainable(){return this.trainable_}set trainable(e){this.layers.forEach(t=>{t._trainableWeights.forEach(t=>t.trainable=e)}),this.trainable_=e}get trainableWeights(){if(this._trainableWeights.length>0)throw new q(`Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.`);if(!this.trainable)return[];let e=[];for(let t of this.layers)e=e.concat(t.trainableWeights);return e}get nonTrainableWeights(){let e=[];for(let t of this.layers)e.push(...t.nonTrainableWeights);if(!this.trainable){let t=[];for(let e of this.layers)t.push(...e.trainableWeights);return t.concat(e)}return e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(e,t=!0){let n={},r=0,i=ZS(e);i&&this.parseWeights(e);for(let e of this.layers)for(let[t,a]of e.weights.entries()){let e=i?`${a.name.split(`/`).slice(0,-1).join(`/`)+`/`}${t}`:a.originalName;if(n[e]!=null)throw new q(`Duplicate weight name: ${e}`);n[e]=a,r++}let a=[];for(let r in e){let i=r;if(n[r]==null){let e=r.split(`/`);i=e.slice(0,-2).concat([e[e.length-1]]).join(`/`)}if(n[i]!=null)a.push([n[i],e[r]]);else if(t)throw new q(`Provided weight data has no target variable: ${r}`);delete n[i]}if(t){let e=[];for(let t in n)e.push(t);if(e.length>0)throw new q(`${e.length} of ${r} weights are not set: ${e}`)}cx(a)}parseWeights(e){for(let t in Object.keys(e)){let n=t.split(`/`),r=[`vars`,`layer_checkpoint_dependencies`],i=n.map(e=>e.startsWith(`_`)?e.slice(1):e).filter(e=>!r.includes(e)).join(`/`);i!==t&&(e[i]=e[t],delete e[t])}}updatedConfig(){let e=this.getConfig(),t={};return t.className=this.getClassName(),t.config=e,t.kerasVersion=`tfjs-layers ${XS}`,t.backend=`TensorFlow.js`,t}toJSON(e,t=!0){let n=YS(this.updatedConfig());return t?JSON.stringify(n):n}call(e,t){return I(()=>{e=my(e);let n=new Cx;for(let t=0;t<this.inputs.length;++t)n.add(this.inputs[t],e[t]);return Dx(this.outputs,n,t)})}computeMask(e,t){return I(()=>{e=my(e);let n;return n=t==null?uy(null,e.length):my(t),this.runInternalGraph(e,n)[1]})}computeOutputShape(e){let t=tx(e);if(t.length!==this.inputLayers.length)throw new q(`Invalid inputShape argument ${e}: model has ${this.inputLayers.length} tensor inputs.`);let n={};for(let e=0;e<t.length;e++){let r=this.inputLayers[e],i=t[e],a=r.name+`_0_0`;n[a]=i}let r=Object.keys(this.nodesByDepth).map(e=>parseInt(e,10)).sort(Sy);if(r.length>1)for(let e of r){let t=this.nodesByDepth[e];for(let e of t){let t=e.outboundLayer;if(this.inputLayers.map(e=>e.id).indexOf(t.id)!==-1)continue;let r=[];for(let t=0;t<e.inboundLayers.length;t++){let i=e.inboundLayers[t],a=e.nodeIndices[t],o=e.tensorIndices[t],s=n[`${i.name}_${a}_${o}`];r.push(s)}let i=tx(t.computeOutputShape(py(r))),a=t.inboundNodes.indexOf(e);for(let e=0;e<i.length;e++){let r=`${t.name}_${a}_${e}`;n[r]=i[e]}}}let i=[],a=[];for(let e=0;e<this.outputLayers.length;e++){let t=this.outputLayers[e],n=this.outputLayersNodeIndices[e],r=this.outputLayersTensorIndices[e],i=`${t.name}_${n}_${r}`;a.push(i)}for(let e=0;e<a.length;e++){let t=a[e];dy(t in n),i.push(n[t])}return py(i)}runInternalGraph(e,t){t??=uy(null,e.length);let n={};for(let r=0;r<this.inputs.length;++r){let i=this.inputs[r],a=e[r],o=t[r];n[i.id]=[a,o]}let r=Object.keys(this.nodesByDepth).map(e=>parseInt(e,10)).sort(Sy);for(let e of r){let t=this.nodesByDepth[e];for(let e of t){let t=e.outboundLayer,r=e.inputTensors,i=e.outputTensors,a=[];for(let e of r)e.id in n&&a.push(n[e.id]);if(a.length===r.length){let r={},o,s,c,l;if(e.callArgs!=null&&(r=e.callArgs),a.length===1){let[e,n]=a[0];r.mask??=n,c=my(t.call(e,r)),l=my(t.computeMask(e,n)),o=[e],s=[n]}else o=a.map(e=>e[0]),s=a.map(e=>e[1]),r.mask??=s,c=my(t.call(o,r)),l=my(t.computeMask(o,s));if(t.activityRegularizer)throw new J(`LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.`);for(let e=0;e<i.length;++e){let t=i[e],r=c[e],a=l[e];n[t.id]=[r,a]}}}}let i=[],a=[],o=[];for(let e of this.outputs){dy(e.id in n,`Could not compute output ${e.name} : ${e.id}`);let[t,r]=n[e.id];o.push(t.shape),i.push(t),a.push(r)}return[i,a,o]}buildNodeConversionMap(t){let n={},r;for(let t of this.layers){r=+(t instanceof e);for(let i=0;i<t.inboundNodes.length;i++){let a=e.nodeKey(t,i);this.containerNodes.has(a)&&(n[a]=r,r+=1)}}return n}getLayer(e,t){if(t!=null)return this.findLayer(t);if(e==null)throw new q(`Provide either a layer name or layer index`);if(typeof e==`number`)return this.findLayer(e);for(let t of this.layers)if(t.name===e)return t;throw new q(`No such layer: ${e}`)}findLayer(e){if(this.layers.length<=e)throw new q(`Was asked to retrieve layer at index ${e}, but model only has ${this.layers.length} layer(s).`);return this.layers[e]}calculateLosses(){return I(()=>{let t=[];for(let n of this.layers)for(let r=0;r<n.inboundNodes.length;++r){let i=e.nodeKey(n,r);this.containerNodes.has(i)&&t.push(...n.calculateLosses())}return t})}getConfig(){let t={name:this.name},n=this.buildNodeConversionMap(this.layers),r=[];for(let t of this.layers){let i=t.getClassName(),a=t.getConfig(),o=[];for(let r=0;r<t.inboundNodes.length;r++){let i=t.inboundNodes[r],a=e.nodeKey(t,r),s={};if(this.containerNodes.has(a)){if(i.callArgs)try{JSON.stringify(i.callArgs),s=i.callArgs}catch{console.warn(`Layer ${t.name} was passed non-serializable keyword arguments: ${i.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),s={}}if(i.inboundLayers.length>0){let t=[];for(let r=0;r<i.inboundLayers.length;r++){let a=i.inboundLayers[r],o=i.nodeIndices[r],c=i.tensorIndices[r],l=n[e.nodeKey(a,o)];l??=0,t.push([a.name,l,c,s])}o.push(t)}}}let s={};s.name=t.name,s.className=i,s.config=a,s.inboundNodes=o,r.push(s)}t.layers=r;let i=[];for(let t=0;t<this.inputLayers.length;t++){let r=this.inputLayers[t],a=this.inputLayersNodeIndices[t],o=e.nodeKey(r,a);if(!this.containerNodes.has(o))continue;let s=n[o];s??=0;let c=this.inputLayersTensorIndices[t];i.push([r.name,s,c])}t.inputLayers=i;let a=[];for(let t=0;t<this.outputLayers.length;t++){let r=this.outputLayers[t],i=this.outputLayersNodeIndices[t],o=e.nodeKey(r,i);if(!this.containerNodes.has(o))continue;let s=n[o];s??=0;let c=this.outputLayersTensorIndices[t];a.push([r.name,s,c])}return t.outputLayers=a,t}static fromConfig(e,t,n={},r=!1){let i={},a={};function o(e,t){e.name in a?a[e.name].push(t):a[e.name]=[t]}function s(e,t){let n=[],r;for(let a of t){let s=a[0],c=a[1],l=a[2];if(r=a[3]==null?{}:a[3],!(s in i)){o(e,t);return}let u=i[s];if(u.inboundNodes.length<=c){o(e,t);return}let d=u.inboundNodes[c];n.push(d.outputTensors[l])}n.length>0&&e.apply(py(n),r)}function c(e){let n=e.name,a=$x(e,t.customObjects==null?{}:t.customObjects);a.setFastWeightInitDuringBuild(r),i[n]=a,e.inboundNodes.forEach(e=>{if(!(e instanceof Array))throw new q(`Corrupted configuration, expected array for nodeData: ${e}`);o(a,e)})}let l=t.name,u=t.layers;for(let e of u)c(e);for(;!wy(a);)for(let e of u){let t=i[e.name];if(t.name in a){let e=a[t.name];delete a[t.name];for(let n of e)s(t,n)}}let d=[],f=[],p=t.inputLayers;for(let e of p){let t=e[0],n=e[1],r=e[2];dy(t in i);let a=i[t].inboundNodes[n].outputTensors;d.push(a[r])}let m=t.outputLayers;for(let e of m){let t=e[0],n=e[1],r=e[2];dy(t in i);let a=i[t].inboundNodes[n].outputTensors;f.push(a[r])}return new e({inputs:d,outputs:f,name:l})}get stateful(){if(this._stateful)throw new q(`Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.`);for(let e of this.layers)if(e.stateful)return!0;return!1}resetStates(){I(()=>{this.layers.forEach(e=>{e.stateful&&e.resetStates()})})}};function $S(e,t,n){let r=t.length;if(e==null||Array.isArray(e)&&e.length===0)return t.map(e=>null);if(r===1)return Array.isArray(e)&&e.length===1?e:typeof e==`object`&&t[0]in e?[e[t[0]]]:[e];if(Array.isArray(e)){if(e.length!==r)throw Error(`Provided ${n} is an array of ${e.length} element(s), but the model has ${r} outputs. Make sure a set of weights is provided for each model output.`);return e}else if(typeof e==`object`&&Object.keys(e).length>0&&typeof e[Object.keys(e)[0]]==`object`){let n=[];return t.forEach(t=>{t in e?n.push(e[t]):n.push(null)}),n}else throw Error(`The model has multiple (${r}) outputs, so ${n} must be either an array with ${r} elements or an object with ${t} keys. Provided ${n} not understood: ${JSON.stringify(e)}`)}function eC(e,t){return $S(e,t,`classWeight`)}async function tC(e,t,n,r){if(t!=null||r!=null)throw Error(`Support sampleWeight is not implemented yet`);if(n!=null){let t=I(()=>{if(e.shape.length===1)return rs(e);if(e.shape.length===2){if(e.shape[1]>1)return xs(e,1);if(e.shape[1]===1)return H(e,[e.shape[0]]);throw Error(`Encountered unexpected last-dimension size (${e.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw Error(`Unexpected rank of target (y) tensor (${e.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),r=Array.from(await t.data());L(t);let i=[];return r.forEach(e=>{if(n[e]==null)throw Error(`classWeight must contain all classes in the training data. The class ${e} exists in the data but not in classWeight`);i.push(n[e])}),fp(i,`float32`)}else return null}function nC(e,t){return V(e,t)}var rC=32;function iC(e,t){let n,r,i=t;n=i.xs,r=i.ys,O(n!=null&&r!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);let a=aC(`input`,e.inputNames,n),o=aC(`output`,e.outputNames,r),s=a[0].shape[0];O(a.length===e.inputs.length,()=>`LayersModel has ${e.inputs.length} inputs, but the dataset provides ${a.length} inputs.  (Expected input keys: ${JSON.stringify(e.inputNames)})`),O(o.length===e.outputs.length,()=>`LayersModel has ${e.outputs.length} outputs, but the dataset provides ${o.length} outputs.  (Expected output keys: ${JSON.stringify(e.outputNames)})`);for(let t=0;t<a.length;t++)O(a[t].shape[0]===s,()=>`Batch size mismatch: input ${e.inputNames[t]} has ${a[t].shape[0]}; expected  ${s} based on input ${e.inputNames[0]}.`);for(let t=0;t<o.length;t++)O(o[t].shape[0]===s,()=>`Batch size mismatch: output ${e.outputNames[t]} has ${o[t].shape[0]}; expected  ${s} based on input ${e.inputNames[0]}.`);return{xs:a,ys:o}}function aC(e,t,n){if(n instanceof oa)return[n];if(Array.isArray(n))return O(n.length===t.length,()=>`Received an array of ${n.length} Tensors, but expected ${t.length} to match the ${e} keys ${t}.`),n;{let r=[];for(let i of t){if(n[i]==null)throw new q(`The feature data generated by the dataset lacks the required ${e} key '${i}'.`);r.push(n[i])}return r}}function oC(e){if(e.length===3)throw new J(`Validation with sample weights is not implemented yet.`);return{xs:e[0],ys:e[1]}}async function sC(e,t,n){let r=n.batchesPerEpoch!=null;if(O(e.optimizer!=null,()=>`You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig).`),O(n!=null,()=>`For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call.`),O(n.epochs!=null&&n.epochs>0&&Number.isInteger(n.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${n.epochs}`),O(!r||n.batchesPerEpoch>0&&Number.isInteger(n.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${n.batchesPerEpoch}`),O(n.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),e.isTraining)throw Error(`Cannot start training because another fit() call is ongoing.`);e.isTraining=!0;try{let i=n.validationData!=null,a,o;if(i)if(lC(n.validationData))O(n.validationBatches==null||n.validationBatches>0&&Number.isInteger(n.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${n.validationBatches}`);else{let e=oC(n.validationData);a=e.xs,o=e.ys}let s=e.makeTrainFunction(),c=e.getDedupedMetricsNames(),l;l=i?c.slice().concat(c.map(e=>`val_`+e)):c.slice();let{callbackList:u,history:d}=Qx(Xx(n.callbacks,n.yieldEvery),n.verbose==null?1:n.verbose,n.epochs,null,null,cC(t,n),null,i,l);u.setModel(e),e.history=d,await u.onTrainBegin(),e.stopTraining_=!1;let f=n.initialEpoch==null?0:n.initialEpoch,p=await t.iterator();for(;f<n.epochs;){let l={};await u.onEpochBegin(f);let d=0,m=0;for(r||(p=await t.iterator());!r||d<n.batchesPerEpoch;){let t=await p.next();if(r&&t.done){console.warn(`You provided \`batchesPerEpoch\` as ${n.batchesPerEpoch}, but your dataset iterator ran out of data after ${d} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${n.batchesPerEpoch*n.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(t.value!=null){let{xs:r,ys:i}=iC(e,t.value),a={};a.batch=m,a.size=r[0].shape[0],await u.onBatchBegin(m,a);let o=[];if(n.classWeight!=null){let t=eC(n.classWeight,e.outputNames);for(let e=0;e<t.length;++e)o.push(await tC(i[e],null,t[e]))}let l=r.concat(i).concat(o),f=s(l);L(l);for(let e=0;e<c.length;++e){let t=c[e],n=f[e];a[t]=n,Ja(n)}await u.onBatchEnd(m,a),Ux(a),m++,d++}if(r?d>=n.batchesPerEpoch:t.done){if(i){let t;t=lC(n.validationData)?my(await e.evaluateDataset(n.validationData,{batches:n.validationBatches})):my(e.evaluate(a,o,{batchSize:n.validationBatchSize==null?rC:n.validationBatchSize,verbose:0}));for(let n=0;n<e.metricsNames.length;++n)l[`val_${e.metricsNames[n]}`]=t[n]}break}if(e.stopTraining_)break}if(await u.onEpochEnd(f,l),f++,e.stopTraining_)break}return await u.onTrainEnd(),await e.history.syncData(),e.history}finally{e.isTraining=!1}}function cC(e,t){let n=null;return t.batchesPerEpoch==null?Number.isFinite(e.size)&&(n=e.size):n=t.batchesPerEpoch,n}function lC(e){return typeof e.iterator==`function`}function uC(e){return typeof e.next==`function`}async function dC(e,t,n){n||={};let r=n.batches!=null,i=e.testFunction,a=[];if(n.verbose>0)throw new J(`Verbose mode is not implemented yet.`);O(!r||n.batches>0&&Number.isInteger(n.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(n.batches)}`);let o=uC(t)?t:await t.iterator(),s=0,c=0;for(;!r||c<n.batches;){let t=await o.next();if(a=I(()=>{if(t.value){let{xs:n,ys:r}=iC(e,t.value),o=n.concat(r),l=I(()=>i(o));if(L(o),c===0)for(let e=0;e<l.length;++e)a.push(Xl(0));let u=o[0].shape[0];for(let e=0;e<l.length;++e){let t=l[e],n=a[e];a[e]=I(()=>z(a[e],V(u,t))),c>0&&L(n)}L(l),s+=u,++c}return a}),t.done){r&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${n.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let e=0;e<a.length;++e){let t=a[e];a[e]=B(a[e],s),L(t)}return py(a)}function fC(e){O(e>0&&Number.isInteger(e),()=>`batchSize is required to be a positive integer, but got ${e}`)}function pC(e,t,n){return e==null?[null]:Array.isArray(e)?e.map(e=>fb(e,t,n-t)):fb(e,t,n-t)}function mC(e,t){return I(()=>e==null?null:Array.isArray(e)?e.map(e=>mC(e,t)):bb(e,t.dtype===`int32`?t:R(t,`int32`)))}function hC(e,t){let n=[],r=0,i=null;for(;r<e;)i=r+t,i>=e&&(i=e),n.push([r,i]),r=i;return n}function gC(e){let t=[];e instanceof oa&&(e=[e]);for(let n=0;n<e.length;++n){let r=e[n];if(r.rank===1)t.push(cb(r,1));else if(r.rank===0)throw Error(`Expected tensor to be at least 1D, but received a 0D tensor (scalar).`);else t.push(r)}return t}function _C(e,t){if(e==null)return;let n=[];if(t instanceof oa)n.push(t.id);else if(Array.isArray(t))t.forEach(e=>n.push(e.id));else if(t!=null)for(let e in t){let r=t[e];n.push(r.id)}let r=[];if(e instanceof oa)n.indexOf(e.id)===-1&&r.push(e);else if(Array.isArray(e))e.forEach(e=>{n.indexOf(e.id)===-1&&r.push(e)});else if(e!=null)for(let t in e){let i=e[t];n.indexOf(i.id)===-1&&r.push(i)}r.forEach(e=>{e.isDisposed||e.dispose()})}function vC(e){return e instanceof oa}function yC(e){return Array.isArray(e)}function bC(e){return!vC(e)&&!yC(e)}function xC(e,t,n,r=!0,i=``){if(t==null||t.length===0){if(e!=null){let t=!1;if(yC(e)&&e.length>0)t=!0;else if(bC(e)){for(let n in e)if(e.hasOwnProperty(n)){t=!0;break}}else t=!0;if(t)throw new q(`Error when checking model ${i} expected no data, but got ${e}`)}return[]}if(e==null)return t.map(e=>null);let a;if(bC(e)){e=e,a=[];for(let n of t){if(e[n]==null)throw new q(`No data provided for "${n}". Need data for each key in: ${t}`);a.push(e[n])}}else if(yC(e)){if(e=e,e.length!==t.length)throw new q(`Error when checking model ${i}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${e}`);a=e}else{if(e=e,t.length>1)throw new q(`The model ${i} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${e.shape}`);a=[e]}if(a=gC(a),n!=null)for(let e=0;e<t.length;++e){if(n[e]==null)continue;let o=a[e];if(o.shape.length!==n[e].length)throw new q(`Error when checking ${i}: expected ${t[e]} to have ${n[e].length} dimension(s). but got array with shape ${o.shape}`);for(let t=0;t<n[e].length;++t){if(t===0&&!r)continue;let a=o.shape[t],s=n[e][t];if(s!=null&&s>=0&&a!==s)throw new q(`${i} expected a batch of elements where each example has shape [${n[e].slice(1,n[e].length)}] (i.e.,tensor shape [*,${n[e].slice(1,n[e].length)}]) but the ${i} received an input with ${o.shape[0]} examples, each with shape [${o.shape.slice(1,o.shape.length)}] (tensor shape [${o.shape}])`)}}return a}function SC(e,t,n){let r=Cy(e.map(e=>e.shape[0]));r.sort();let i=Cy(t.map(e=>e.shape[0]));if(i.sort(),r.length>1)throw new q(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(e.map(e=>e.shape))}`);if(i.length>1)throw new q(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(e=>e.shape))}`);if(r.length>0&&i.length>0&&!xe(r,i))throw new q(`Input Tensors should have the same number of samples as target Tensors. Found ${r[0]} input sample(s) and ${i[0]} target sample(s).`)}function CC(e,t,n){let r=[tS,fS,lS];for(let i=0;i<e.length;++i){let a=e[i],o=t[i],s=n[i];if(o!=null){if(o===lS&&a.shape[a.shape.length-1]===1)throw new q(`You are passing a target array of shape ${a.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(r.indexOf(o)!==-1){let e=a.shape.slice(1),t=s.slice(1);for(let n=0;n<e.length;++n){let r=e[n],i=t[n];if(i!=null&&r!==i)throw new q(`A target Tensor with shape ${a.shape} was passed for an output of shape ${s}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function wC(e,t,n,r=!0,i=``){let a;if(Array.isArray(e)){if(e.length!==t.length)throw new q(`Error when checking model ${i}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${e.length} Tensors(s).`);a=e}else{if(t.length>1)throw new q(`The model expects ${t.length} ${i} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(e.shape)}.`);a=[e]}if(n!=null)for(let e=0;e<t.length;++e){if(n[e]==null)continue;let o=a[e];if(o.shape.length!==n[e].length)throw new q(`Error when checking ${i}: expected ${t[e]} to have ${n[e].length} dimension(s), but got array with shape ${JSON.stringify(o.shape)}`);for(let a=0;a<n[e].length;++a){if(a===0&&!r)continue;let s=o.shape[a],c=n[e][a];if(c!=null&&c!==s)throw new q(`Error when checking ${i}: expected ${t[e]} to have shape ${JSON.stringify(n[e])} but got array with shape ${JSON.stringify(o.shape)}.`)}}}function TC(e,t){if(e==null||Array.isArray(e)&&e.length===0)return t.map(e=>[]);let n;if(typeof e==`string`||typeof e==`function`)n=[e];else if(Array.isArray(e)||typeof e==`object`)n=e;else throw TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${e}`);if(Array.isArray(n))return t.map(e=>n);{let e=[];for(let r of t){let t=n.hasOwnProperty(r)?n[r]:[];Array.isArray(t)||(t=[t]),e.push(t)}return e}}var EC=`layers-model`,DC=class extends QS{constructor(e){super(e),this.isTraining=!1}summary(e,t,n=console.log){if(!this.built)throw new q(`This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).`);VS(this,e,t,n)}compile(e){if(e.loss??=[],this.loss=e.loss,typeof e.optimizer==`string`)this.optimizer_=LS(e.optimizer),this.isOptimizerOwned=!0;else{if(!(e.optimizer instanceof Zm))throw new q(`User-defined optimizer must be an instance of tf.Optimizer.`);this.optimizer_=e.optimizer,this.isOptimizerOwned=!1}let t=[];if(!Array.isArray(e.loss)&&typeof e.loss!=`string`&&typeof e.loss!=`function`){e.loss=e.loss;for(let t in e.loss)if(this.outputNames.indexOf(t)===-1)throw new q(`Unknown entry in loss dictionary: "${t}". Only expected the following keys: ${this.outputNames}`);for(let n of this.outputNames)e.loss[n]??console.warn(`Output "${n}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${n} during training`),t.push(_S(e.loss[n]))}else if(Array.isArray(e.loss)){if(e.loss.length!==this.outputs.length)throw new q(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${e.loss}.`);t=e.loss.map(e=>_S(e))}else{let n=_S(e.loss);this.outputs.forEach(e=>{t.push(n)})}this.lossFunctions=t,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let e=0;e<this.outputs.length;++e){let t=this.internalOutputShapes[e],n=this.outputNames[e];this.feedOutputNames.push(n),this.feedOutputShapes.push(t),this.feedLossFns.push(this.lossFunctions[e])}let n=[];this.metrics=e.metrics,this.metricsNames=[`loss`],this.metricsTensors=[],qy(`loss`,()=>{for(let e=0;e<this.outputs.length;++e){if(n.indexOf(e)!==-1)continue;let t=this.lossFunctions[e];this.outputs.length>1&&(this.metricsTensors.push([t,e]),this.metricsNames.push(this.outputNames[e]+`_loss`))}});let r=TC(e.metrics,this.outputNames),i=(e,t,n)=>{this.outputNames.length>1&&(t=this.outputNames[e]+`_`+t),this.metricsNames.push(t),this.metricsTensors.push([n,e])};qy(`metric`,()=>{for(let e=0;e<this.outputs.length;++e)n.indexOf(e)===-1&&(t=>{let n,r,a;for(let o of t){if(typeof o==`string`&&[`accuracy`,`acc`,`crossentropy`,`ce`].indexOf(o)!==-1){let t=this.internalOutputShapes[e];t[t.length-1]===1||this.lossFunctions[e]===fS?[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=CS):r=vS:this.lossFunctions[e]===uS?[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=NS):r=wS:[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=jS):r=yS;let i;[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(i=`ce`):i=`acc`,a=r,n=``+i}else a=FS(o),n=``+IS(o);let t;qy(n,()=>{t=a}),i(e,n,t)}})(r[e])}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(e,t,n={}){let r=n.batchSize==null?32:n.batchSize;fC(r);let i=this.standardizeUserDataXY(e,t,!0,r);try{let e=i[0].concat(i[1]);this.makeTestFunction();let t=this.testFunction;return py(this.testLoop(t,e,r,n.verbose,n.steps))}finally{_C(i[0],e),_C(i[1],t)}}async evaluateDataset(e,t){return this.makeTestFunction(),dC(this,e,t)}checkNumSamples(e,t,n,r=`steps`){let i;if(n!=null){if(i=null,t!=null)throw new q(`If ${r} is set, batchSize must be null or undefined.Got batchSize = ${t}`)}else if(e!=null)i=Array.isArray(e)?e[0].shape[0]:e.shape[0];else throw new q(`Either the input data should have a defined shape, or ${r} shoud be specified.`);return i}execute(e,t){if(Array.isArray(t)&&t.length===0)throw new q("`outputs` is an empty Array, which is not allowed.");let n=Array.isArray(t),r=n?t:[t],i=this.retrieveSymbolicTensors(r),a=new Cx;if(e instanceof oa&&(e=[e]),Array.isArray(e)){if(e.length!==this.inputs.length)throw new q(`The number of inputs provided (${e.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let t=0;t<this.inputs.length;++t)a.add(this.inputs[t],e[t])}else for(let t of this.inputs){let n=e[t.name];if(n==null)throw new q(`No value is provided for the model's input ${t.name}`);a.add(t,n)}let o=Dx(i,a);return n?o:o[0]}retrieveSymbolicTensors(e){let t=uy(null,e.length),n=e.length;for(let r of this.layers){let i=Array.isArray(r.output)?r.output:[r.output],a=i.map(e=>e.name);for(let r=0;r<e.length;++r){let o=a.indexOf(e[r]);if(o!==-1&&(t[r]=i[o],n--),n===0)break}if(n===0)break}if(n>0){let n=[];throw t.forEach((t,r)=>{t??n.push(e[r])}),new q(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(n)}`)}return t}predictLoop(e,t=32,n=!1){return I(()=>{let r=this.checkNumSamples(e);if(n)throw new J(`Verbose predictLoop() is not implemented yet.`);let i=hC(r,t),a=this.outputs.map(e=>[]);for(let t=0;t<i.length;++t)I(()=>{let n=i[t][0],r=i[t][1],a=pC(e,n,r),o=[];if(Array.isArray(a))for(let e=0;e<a.length;++e)o.push({key:this.inputs[e],value:a[e]});else o.push({key:this.inputs[0],value:a});let s=new Cx(o);return Dx(this.outputs,s)}).forEach((e,t)=>a[t].push(e));return py(a.map(e=>ac(e,0)))})}predict(e,t={}){let n=gC(e);wC(n,this.inputNames,this.feedInputShapes,!1);try{let e=t.batchSize==null?32:t.batchSize;return fC(e),this.predictLoop(n,e)}finally{_C(n,e)}}predictOnBatch(e){wC(e,this.inputNames,this.feedInputShapes,!0);let t=(Array.isArray(e)?e[0]:e).shape[0];return this.predictLoop(e,t)}standardizeUserDataXY(e,t,n=!0,r){if(this.optimizer_==null)throw new sy(`You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).`);let i=[];for(let e=0;e<this.feedOutputShapes.length;++e){let t=this.feedOutputShapes[e];this.feedLossFns[e]===uS?i.push(t.slice(0,t.length-1).concat([1])):i.push(t)}if(e=xC(e,this.feedInputNames,this.feedInputShapes,!1,`input`),t=xC(t,this.feedOutputNames,i,!1,`target`),SC(e,t,null),CC(t,this.feedLossFns,this.feedOutputShapes),this.stateful&&r!=null&&r>0&&e[0].shape[0]%r!==0)throw new q(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${r}. Found: ${e[0].shape[0]} sample(s).`);return[e,t]}async standardizeUserData(e,t,n,r,i=!0,a){let[o,s]=this.standardizeUserDataXY(e,t,i,a);if(n!=null)throw Error(`sample weight is not supported yet.`);let c=null;if(r!=null){let e=eC(r,this.outputNames);c=[];for(let t=0;t<e.length;++t)c.push(await tC(s[t],null,e[t]))}return[o,s,c]}testLoop(e,t,n,r=0,i){return I(()=>{let a=this.checkNumSamples(t,n,i,`steps`),o=[];if(r>0)throw new J(`Verbose mode is not implemented yet.`);if(i!=null)throw new J(`steps mode in testLoop() is not implemented yet`);{let r=hC(a,n),i=fp(rb(0,a));for(let n=0;n<r.length;++n){let a=r[n][0],s=r[n][1],c=e(mC(t,fb(i,a,s-a)));if(n===0)for(let e=0;e<c.length;++e)o.push(Xl(0));for(let e=0;e<c.length;++e){let t=c[e];o[e]=z(o[e],V(s-a,t))}}for(let e=0;e<o.length;++e)o[e]=B(o[e],a)}return o})}getDedupedMetricsNames(){let e=this.metricsNames,t=[];for(let n=0;n<e.length;++n){let r=e[n],i=r;if(fy(e,r)>1){let t=fy(e.slice(0,n),r);i+=`_${t}`}t.push(i)}return t}makeTrainFunction(){return e=>{let t=[],n=e.slice(0,this.inputs.length),r=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=e.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),a=[],o=()=>{let e=[];for(let t=0;t<this.inputs.length;++t)e.push({key:this.inputs[t],value:n[t]});let o=new Cx(e),s=Dx(this.outputs,o,{training:!0}),c;for(let e=0;e<this.lossFunctions.length;++e){let n=this.lossFunctions[e],a=n(r[e],s[e]);i[e]!=null&&(a=nC(a,i[e]));let o=yd(a);t.push(o),c=e===0?a:z(c,a)}for(let e=0;e<this.metricsTensors.length;++e){let n;if(this.outputs.length>1&&e<this.outputs.length)n=t[e];else{let t=this.metricsTensors[e][0],i=this.metricsTensors[e][1];n=yd(t(r[i],s[i]))}Ja(n),a.push(n)}return c=yd(c),this.calculateLosses().forEach(e=>{c=z(c,e)}),c},s=this.collectedTrainableWeights.map(e=>e.read());return[this.optimizer_.minimize(o,!0,s)].concat(a)}}makeTestFunction(){this.testFunction=e=>I(()=>{let t=[],n,r=e.slice(0,this.inputs.length),i=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),a=[];for(let e=0;e<this.inputs.length;++e)a.push({key:this.inputs[e],value:r[e]});let o=new Cx(a),s=Dx(this.outputs,o);for(let e=0;e<this.lossFunctions.length;++e){let r=this.lossFunctions[e],a=yd(r(i[e],s[e]));n=e===0?a:z(n,a),t.push(n)}for(let e=0;e<this.metricsTensors.length;++e){let n=this.metricsTensors[e][0],r=this.metricsTensors[e][1],a=yd(n(i[r],s[r]));t.push(a)}return t})}async fit(e,t,n={}){if(this.isTraining)throw Error(`Cannot start training because another fit() call is ongoing.`);this.isTraining=!0;let r,i,a,o,s,c,l,u,d;try{let f=n.batchSize==null?32:n.batchSize;fC(f);let p=await this.standardizeUserData(e,t,n.sampleWeight,n.classWeight,!1,f);r=p[0],i=p[1],d=p[2];let m=!1,h;if(n.validationData!=null&&n.validationData.length>0){if(m=!0,n.validationData.length===2)s=n.validationData[0],c=n.validationData[1];else if(n.validationData.length===3)throw new J(`validationData including sample weights is not supported yet.`);else throw new q(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${n.validationData} is invalid.`);let e=await this.standardizeUserData(s,c,null,null,!0,f);l=e[0],u=e[1],h=l.concat(u)}else if(n.validationSplit!=null&&n.validationSplit>0&&n.validationSplit<1){m=!0;let e=Math.floor(r[0].shape[0]*(1-n.validationSplit)),t=r[0].shape[0];l=pC(r,e,t),a=r,r=pC(r,0,e),u=pC(i,e,t),o=i,i=pC(i,0,e),h=l.concat(u)}else n.validationSteps!=null&&(m=!0);let g=r.concat(i).concat(d);this.checkTrainableWeightsConsistency();let _=this.makeTrainFunction(),v=this.getDedupedMetricsNames(),y,b;m?(this.makeTestFunction(),y=this.testFunction,b=v.slice().concat(v.map(e=>`val_`+e))):(y=null,h=[],b=v.slice());let x=Xx(n.callbacks,n.yieldEvery);return await this.fitLoop(_,g,v,f,n.epochs,n.verbose,x,y,h,n.shuffle,b,n.initialEpoch,null,null)}finally{this.isTraining=!1,_C(r,e),_C(i,t),_C(a,e),_C(o,t),_C(l,s),_C(u,c),d!=null&&L(d)}}async fitLoop(e,t,n,r,i,a,o,s,c,l,u,d,f,p){r??=32,i??=1,l??=!0,d??=0;let m=!1;if(s!=null&&c!=null&&(m=!0),p!=null&&(m=!0,f==null))throw new q("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");let h=this.checkNumSamples(t,r,f,`steps_per_epoch`),g;h!=null&&(g=rb(0,h)),a??=1;let{callbackList:_,history:v}=Qx(o,a,i,d,h,f,r,m,u);_.setModel(this),this.history=v,await _.onTrainBegin(),this.stopTraining_=!1;for(let a=d;a<i;++a){await _.onEpochBegin(a);let i={};if(f!=null)throw new J(`stepsPerEpoch mode is not implemented yet.`);{if(l===`batch`)throw new J(`batch shuffling is not implemneted yet`);l&&me(g);let a=fp(g),o=hC(h,r);for(let l=0;l<o.length;++l){let u={};if(await _.onBatchBegin(l,u),I(()=>{let d=o[l][0],f=o[l][1],p=fb(a,d,f-d);u.batch=l,u.size=f-d;let h=e(mC(t,p));for(let e=0;e<n.length;++e){let t=n[e],r=h[e];u[t]=r,Ja(r)}if(l===o.length-1&&m){let e=this.testLoop(s,c,r);for(let t=0;t<n.length;++t){let r=n[t],a=e[t];Ja(a),i[`val_`+r]=a}}}),await _.onBatchEnd(l,u),Ux(u),this.stopTraining_)break}a.dispose()}if(await _.onEpochEnd(a,i),this.stopTraining_)break}return await _.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(e,t){return sC(this,e,t)}async trainOnBatch(e,t){let n=await this.standardizeUserData(e,t),r=n[0],i=n[1],a=this.makeTrainFunction()(r.concat(i)),o=[];for(let e of a){let t=await e.data();o.push(t[0])}return L(a),_C(n[0],e),_C(n[1],t),py(o)}getNamedWeights(e){let t=[],n=e!=null&&e.trainableOnly,r=n?this.trainableWeights:this.weights,i=this.getWeights(n);for(let e=0;e<r.length;++e)n&&!r[e].trainable||t.push({name:r[e].originalName,tensor:i[e]});return t}set stopTraining(e){this.stopTraining_=e}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(e){this.optimizer_!==e&&(this.optimizer_=e,this.isOptimizerOwned=!1)}dispose(){let e=super.dispose();if(e.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){let t=qa().numTensors;this.optimizer_.dispose(),e.numDisposedVariables+=t-qa().numTensors}return e}getLossIdentifiers(){let e;if(typeof this.loss==`string`)e=hy(this.loss);else if(Array.isArray(this.loss)){for(let e of this.loss)if(typeof e!=`string`)throw Error(`Serialization of non-string loss is not supported.`);e=this.loss.map(e=>hy(e))}else{let t=Object.keys(this.loss);e={};let n=this.loss;for(let r of t)if(typeof n[r]==`string`)e[r]=hy(n[r]);else throw Error(`Serialization of non-string loss is not supported.`)}return e}getMetricIdentifiers(){if(typeof this.metrics==`string`||typeof this.metrics==`function`)return[hy(IS(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(e=>hy(IS(e)));{let e={};for(let t in this.metrics)e[t]=hy(IS(this.metrics[t]));return e}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(e){if(e.weighted_metrics!=null)throw Error(`Loading weight_metrics is not supported yet.`);if(e.loss_weights!=null)throw Error(`Loading loss_weights is not supported yet.`);if(e.sample_weight_mode!=null)throw Error(`Loading sample_weight_mode is not supported yet.`);let t=$x(JS(e.optimizer_config)),n;if(typeof e.loss==`string`)n=gy(e.loss);else if(Array.isArray(e.loss))n=e.loss.map(e=>gy(e));else if(e.loss!=null){n={};for(let t in e.loss)n[t]=gy(e.loss[t])}let r;if(Array.isArray(e.metrics))r=e.metrics.map(e=>gy(e));else if(e.metrics!=null){r={};for(let t in e.metrics)r[t]=gy(e.metrics[t])}this.compile({loss:n,metrics:r,optimizer:t})}async save(e,t){if(typeof e==`string`){let t=yo(e);if(t.length===0)throw new q(`Cannot find any save handlers for URL '${e}'`);if(t.length>1)throw new q(`Found more than one (${t.length}) save handlers for URL '${e}'`);e=t[0]}if(e.save==null)throw new q("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");let n=await Qa(this.getNamedWeights(t)),r={modelTopology:this.toJSON(null,!1),format:EC,generatedBy:`TensorFlow.js tfjs-layers v${XS}`,convertedBy:null};if(t!=null&&t.includeOptimizer&&this.optimizer!=null){r.trainingConfig=this.getTrainingConfig();let{data:e,specs:t}=await Qa(await this.optimizer.getWeights(),`optimizer`);n.specs.push(...t),n.data=so([n.data,e])}return this.userDefinedMetadata!=null&&(zS(this.userDefinedMetadata,this.name,!0),r.userDefinedMetadata=this.userDefinedMetadata),r.weightData=n.data,r.weightSpecs=n.specs,e.save(r)}setUserDefinedMetadata(e){zS(e,this.name),this.userDefinedMetadata=e}getUserDefinedMetadata(){return this.userDefinedMetadata}};DC.className=`Model`,K(DC);var OC=class extends DC{};OC.className=`Functional`,K(OC);async function kC(e,t){if(t??={},typeof e==`string`){let n=bo(e,t);if(n.length===0)n.push(_h(e,t));else if(n.length>1)throw new q(`Found more than one (${n.length}) load handlers for URL '${e}'`);e=n[0]}return AC(e,void 0,t)}async function AC(e,t,n){if(n??={},e.load==null)throw new q("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let r=await e.load(),i=r.modelTopology;i.model_config!=null&&(i=i.model_config);let a=n.strict==null?!0:n.strict,o=r.weightData!=null&&r.weightSpecs!=null&&a,s=$x(JS(i),t,o),c=r.trainingConfig;if(c!=null&&s.loadTrainingConfig(c),r.userDefinedMetadata!=null&&s.setUserDefinedMetadata(r.userDefinedMetadata),r.weightData!=null){if(r.weightSpecs==null)throw new q(`LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.`);let{modelWeights:e,optimizerWeights:t}=jC(r.weightData,r.weightSpecs);s.loadWeights(e,a),s.optimizer!=null&&t.length>0&&await s.optimizer.setWeights(t),L(e),L(t.map(e=>e.tensor))}return s}function jC(e,t){let n=$a(e,t),r={},i=[];return t.forEach(e=>{e.group===`optimizer`?i.push({name:e.name,tensor:n[e.name]}):r[e.name]=n[e.name]}),{modelWeights:r,optimizerWeights:i}}var MC=class e extends DC{constructor(e){if(super({inputs:[],outputs:[]}),e||={},this.trainable=!0,this.built=!1,this.name=e.name==null?Py(`sequential_`):e.name,e.layers!=null)for(let t of e.layers)this.add(t)}checkShape(e){if(e.inboundNodes[0].outputTensors[0].shape.some(e=>e<0))throw new q(`Negative dimension size caused by adding layer ${e.name} with input shape [${e.inboundNodes[0].inputTensors[0].shape}]`)}add(t){let n=t instanceof e||t instanceof DC,r;if(n){if(r=t,r.outputs.length!==1)throw new q(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);if(r.inputs.length!==1)throw new q(`All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.`)}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new q("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");let e=xx({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+`_input`});t.apply(e)}if(n)this.outputs=r.outputs,this.inputs=r.inputs;else{if(t.inboundNodes.length!==1)throw new q(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new q(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=_x(this.outputs[0])}this.inboundNodes=[],new fx({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:uy(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(e=>e.shape),outputShapes:this.outputs[0].shape})}else{let e=t.apply(this.outputs[0]);if(Array.isArray(e))throw TypeError(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);this.checkShape(t),this.outputs=[e],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw TypeError(`There are no layers in the model.`);if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{let e=this.layers.length-1;this.layers[e].outboundNodes=[],this.outputs=[this.layers[e].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(e,t){return this.model??this.build(),this.model.call(e,t)}build(e){if(nx(e),this.inputs.length===0||this.outputs.length===0)throw TypeError(`Sequential model cannot be built: model is empty. Add some layers first.`);this.model=new DC({inputs:this.inputs,outputs:this.outputs[0],name:this.name+`_model`}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(e,t,n=console.log){this.built||this.build(),super.summary(e,t,n)}setWeights(e){this.model??this.build(),this.model.setWeights(e)}evaluate(e,t,n={}){if(!this.built)throw new sy(`The model needs to be compiled before being used.`);return this.model.evaluate(e,t,n)}async evaluateDataset(e,t){if(!this.built)throw new sy(`The model needs to be compiled before being used.`);return this.model.evaluateDataset(e,t)}predict(e,t={}){return this.model??this.build(),this.model.predict(e,t)}predictOnBatch(e){return this.model??this.build(),this.model.predictOnBatch(e)}compile(e){this.build(),this.model.compile(e),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(e){this.model.optimizer=e}async fit(e,t,n={}){if(!this.built)throw new sy(`The model needs to be compiled before being used.`);return this.model.fit(e,t,n)}async fitDataset(e,t){if(!this.built)throw new sy(`The model needs to be compiled before being used.`);return this.model.fitDataset(e,t)}async trainOnBatch(e,t){return this.model.trainOnBatch(e,t)}static fromConfig(t,n,r={},i=!1){let a,o={};if(n instanceof Array){if(n[0].className==null||n[0].className===`Merge`)throw new q(`Legacy serialization format not supported yet.`);a=n}else O(n.layers!=null,()=>`When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field.`),a=n.layers,delete n.layers,o=n;let s=new t(o);if(!(s instanceof e))throw new J(`Sequential.fromConfig called on non-Sequential input: ${s}`);for(let e of a){let t=$x(e,void 0,i);i&&t.setFastWeightInitDuringBuild(!0),s.add(t)}return s}set stopTraining(e){if(this.model==null)throw new q(`Cannot set the stopTraining property of a sequential model before it is compiled.`);this.model.stopTraining=e}get stopTraining(){if(this.model==null)throw new q(`Cannot get the stopTraining property of a sequential model before it is compiled.`);return this.model.stopTraining}getConfig(){let e=[];for(let t of this.layers){let n={};n.className=t.getClassName(),n.config=t.getConfig(),e.push(n)}return{name:this.name,layers:e}}};MC.className=`Sequential`,K(MC);function NC(e){return new MC(e)}var PC=class extends Ym{getConfig(){return{}}},FC=class extends PC{apply(e,t=1){return wb(e,t)}};FC.className=`elu`,K(FC);var IC=class extends PC{apply(e){return Tf(e)}};IC.className=`selu`,K(IC);var LC=class extends PC{apply(e){return hf(e)}};LC.className=`relu`,K(LC);var RC=class extends PC{apply(e){return I(()=>Cd(6,hf(e)))}};RC.className=`relu6`,K(RC);var zC=class extends PC{apply(e){return e}};zC.className=`linear`,K(zC);var BC=class extends PC{apply(e){return lc(e)}};BC.className=`sigmoid`,K(BC);var VC=class extends PC{apply(e){return Db(e)}};VC.className=`hardSigmoid`,K(VC);var HC=class extends PC{apply(e){return Xu(e)}};HC.className=`softplus`,K(HC);var UC=class extends PC{apply(e){return Tb(e)}};UC.className=`softsign`,K(UC);var WC=class extends PC{apply(e){return pc(e)}};WC.className=`tanh`,K(WC);var GC=class extends PC{apply(e,t=-1){return Uf(e,t)}};GC.className=`softmax`,K(GC);var KC=class extends PC{apply(e,t=-1){return td(e,t)}};KC.className=`logSoftmax`,K(KC);var qC=class extends PC{apply(e){return I(()=>I(()=>V(e,V(.5,z(1,Fl(B(e,Math.sqrt(2))))))))}};qC.className=`gelu`,K(qC);var JC=class extends PC{apply(e){return I(()=>V(.5,V(e,z(1,pc(V(Ql(B(2,Math.PI)),z(e,V(.044715,Yl(e,3)))))))))}};JC.className=`gelu_new`,K(JC);var YC=class extends PC{apply(e){return I(()=>V(e,pc(Xu(e))))}};YC.className=`mish`,K(YC);var XC=class extends PC{apply(e,t=1){return I(()=>V(lc(V(e,t)),e))}};XC.className=`swish`,K(XC);function ZC(e){return e.getClassName()}function QC(e,t={}){return by(e,Xm.getMap().classNameMap,t,`activation`)}function $C(e){if(e==null){let e={};return e.className=`linear`,e.config={},QC(e)}if(typeof e==`string`){let t={};return t.className=e,t.config={},QC(t)}else if(e instanceof PC)return e;else return QC(e)}function ew(e){if(e!=null&&typeof e!=`object`)throw Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${e}`)}var tw=class extends Ym{},nw=class extends tw{constructor(e){super(),ew(e),this.l1=e==null||e.l1==null?.01:e.l1,this.l2=e==null||e.l2==null?.01:e.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(e){return I(()=>{let t=bd([1]);return this.hasL1&&(t=z(t,W(V(this.l1,ds(e))))),this.hasL2&&(t=z(t,W(V(this.l2,xb(e))))),H(t,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(e,t){return new e({l1:t.l1,l2:t.l2})}};nw.className=`L1L2`,K(nw);var rw={l1l2:`L1L2`};function iw(e){return vy(e)}function aw(e,t={}){return by(e,Xm.getMap().classNameMap,t,`regularizer`)}function ow(e){return e==null?null:typeof e==`string`?aw({className:e in rw?rw[e]:e,config:{}}):e instanceof tw?e:aw(e)}var sw=class extends mx{constructor(e){super(e??{}),this.supportsMasking=!0,e!=null&&(this.maxValue=e.maxValue)}call(e,t){e=Y(e);let n=hf(e);return this.maxValue!=null&&(n=Nc(n,0,this.maxValue)),n}computeOutputShape(e){return e}getConfig(){let e={maxValue:this.maxValue},t=super.getConfig();return Object.assign(e,t),e}};sw.className=`ReLU`,K(sw);var cw=class extends mx{constructor(e){super(e??{}),this.DEFAULT_ALPHA=.3,e??={},this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){return Pu(Y(e),this.alpha)}computeOutputShape(e){return e}getConfig(){let e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}};cw.className=`LeakyReLU`,K(cw);var lw=class extends mx{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA_INITIALIZER=`zeros`,e??={},this.supportsMasking=!0,this.alphaInitializer=$b(e.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=ow(e.alphaRegularizer),this.alphaConstraint=Vx(e.alphaConstraint),e.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(e.sharedAxes))this.sharedAxes=e.sharedAxes;else if(typeof e.sharedAxes==`number`)this.sharedAxes=[e.sharedAxes];else throw new q(`Expected sharedAxes to be a number or an array of numbers, but got ${e.sharedAxes}`)}build(e){e=nx(e);let t=e.slice(1);if(this.sharedAxes!=null)for(let e of this.sharedAxes)t[e-1]=1;this.alpha=this.addWeight(`alpha`,t,`float32`,this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);let n={};if(this.sharedAxes!=null)for(let t=1;t<e.length;++t)n[t]=e[t];this.inputSpec=[new lx({ndim:e.length,axes:n})],this.built=!0}call(e,t){return e=Y(e),Gd(e,this.alpha.read())}getConfig(){let e={alphaInitializer:Qb(this.alphaInitializer),alphaRegularizer:iw(this.alphaRegularizer),alphaConstraint:zx(this.alphaConstraint),sharedAxes:this.sharedAxes},t=super.getConfig();return Object.assign(e,t),e}};lw.className=`PReLU`,K(lw);var uw=class extends mx{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA=1,e??={},e.alpha!=null&&e.alpha!==this.DEFAULT_ALPHA)throw new J(`Non-default alpha value (${e.alpha}) is not supported by the ELU layer yet.`);this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){return Nl(Y(e))}computeOutputShape(e){return e}getConfig(){let e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}};uw.className=`ELU`,K(uw);var dw=class extends mx{constructor(e){super(e??{}),this.DEFAULT_THETA=1,e??={},this.theta=e.theta==null?this.DEFAULT_THETA:e.theta}call(e,t){let n=Y(e);return V(n,R(Su(n,this.theta),`float32`))}computeOutputShape(e){return e}getConfig(){let e={theta:this.theta},t=super.getConfig();return Object.assign(e,t),e}};dw.className=`ThresholdedReLU`,K(dw);var fw=class extends mx{constructor(e){super(e??{}),this.DEFAULT_AXIS=1,e??={},this.softmax=new GC().apply,this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis}call(e,t){return I(()=>{let n=Y(e),r=t.mask;if(r!=null){let e=V(G(xd(n.shape),R(r,n.dtype)),Xl(-1e9));n=z(n,e)}return this.axis instanceof Array?this.axis.length>1?cu(G(n,rd(n,this.axis,!0))):this.softmax(n,this.axis[0]):this.softmax(n,this.axis)})}computeOutputShape(e){return e}getConfig(){let e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}};fw.className=`Softmax`,K(fw);function pw(e,t,n){if(typeof e==`number`)return uy(e,t);if(e.length!==t)throw new q(`The ${n} argument must be an integer or tuple of ${t} integers. Received: ${e.length} elements.`);for(let r=0;r<t;++r){let i=e[r];if(!$y(i))throw new q(`The ${n} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(e)} including a non-integer number ${i}`)}return e}function mw(e,t,n,r,i=1){if(e==null)return e;let a=t+(t-1)*(i-1),o;return o=n===`same`?e:e-a+1,Math.floor((o+r-1)/r)}function hw(e,t,n,r){if(e==null)return null;if(r===`valid`)e=e*t+nb([n-t,0]);else if(r===`same`)e*=t;else throw new q(`Unsupport padding mode: ${r}.`);return e}function gw(e,t){return I(()=>(Vy(t),t===`channelsFirst`?jp(e,[0,2,3,1]):e))}function _w(e,t){return I(()=>(Vy(t),t===`channelsFirst`?jp(e,[0,2,3,4,1]):e))}function vw(e,t,n,r=1,i=`valid`,a,o=1){return I(()=>{if(a??=ob(),Vy(a),e.shape.length!==3)throw new q(`The input of a conv1dWithBias operation should be 3, but is ${e.shape.length} instead.`);if(t.shape.length!==3)throw new q(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(n!=null&&n.shape.length!==1)throw new q(`The bias for a conv1dWithBias operation should be 1, but is ${n.shape.length} instead`);if(a===`channelsFirst`&&(e=jp(e,[0,2,1])),i===`causal`)throw new J(`The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.`);let s=Gc(e,t,r,i===`same`?`same`:`valid`,`NWC`,o);return n!=null&&(s=Cb(s,n)),s})}function yw(e,t,n,r=[1,1],i=`valid`,a,o,s=null){return I(()=>{if(a??=ob(),Vy(a),e.rank!==3&&e.rank!==4)throw new q(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${e.rank}.`);if(t.rank!==3&&t.rank!==4)throw new q(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${e.rank}.`);let c=gw(e,a);if(i===`causal`)throw new J(`The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.`);return c=Hp({x:c,filter:t,strides:r,pad:i===`same`?`same`:`valid`,dilations:o,dataFormat:`NHWC`,bias:n,activation:s}),a===`channelsFirst`&&(c=jp(c,[0,3,1,2])),c})}function bw(e,t,n,r=[1,1,1],i=`valid`,a,o){return I(()=>{if(a??=ob(),Vy(a),e.rank!==4&&e.rank!==5)throw new q(`conv3dWithBias expects input to be of rank 4 or 5, but received ${e.rank}.`);if(t.rank!==4&&t.rank!==5)throw new q(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${e.rank}.`);let s=_w(e,a);if(i===`causal`)throw new J(`The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.`);return s=Zc(s,t,r,i===`same`?`same`:`valid`,`NDHWC`,o),n!=null&&(s=Cb(s,n)),a===`channelsFirst`&&(s=jp(s,[0,4,1,2,3])),s})}var xw=class e extends mx{constructor(t,n){if(super(n),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.verifyArgs(n),this.rank=t,Dy(this.rank,`rank`),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new J(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=pw(n.kernelSize,t,`kernelSize`),this.strides=pw(n.strides==null?1:n.strides,t,`strides`),this.padding=n.padding==null?`valid`:n.padding,Uy(this.padding),this.dataFormat=n.dataFormat==null?`channelsLast`:n.dataFormat,Vy(this.dataFormat),this.activation=$C(n.activation),this.useBias=n.useBias==null?!0:n.useBias,this.biasInitializer=$b(n.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=Vx(n.biasConstraint),this.biasRegularizer=ow(n.biasRegularizer),this.activityRegularizer=ow(n.activityRegularizer),this.dilationRate=pw(n.dilationRate==null?1:n.dilationRate,t,`dilationRate`),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new q(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate==`number`)this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new q(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate==`number`)this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new q(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(e){if(dy(`kernelSize`in e,`required key 'kernelSize' not in config`),typeof e.kernelSize!=`number`&&!Ey(e.kernelSize,`number`,1,3))throw new q(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(e.kernelSize)}.`)}getConfig(){let e={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:ZC(this.activation),useBias:this.useBias,biasInitializer:Qb(this.biasInitializer),biasRegularizer:iw(this.biasRegularizer),activityRegularizer:iw(this.activityRegularizer),biasConstraint:zx(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}},Sw=class e extends xw{constructor(t,n){super(t,n),this.kernel=null,e.verifyArgs(n),this.filters=n.filters,Dy(this.filters,`filters`),this.kernelInitializer=$b(n.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=Vx(n.kernelConstraint),this.kernelRegularizer=ow(n.kernelRegularizer)}build(e){e=nx(e);let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new q(`The channel dimension of the input should be defined. Found ${e[t]}`);let n=e[t],r=this.kernelSize.concat([n,this.filters]);this.kernel=this.addWeight(`kernel`,r,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[t]:n}}],this.built=!0}call(e,t){return I(()=>{e=Y(e);let t,n=this.bias==null?null:this.bias.read(),r=Ay(this.activation.getClassName());if(r!=null&&this.rank===2)t=yw(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate,r);else{if(this.rank===1)t=vw(e,this.kernel.read(),n,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)t=yw(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)t=bw(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new J(`convolutions greater than 3D are not implemented yet.`);this.activation!=null&&(t=this.activation.apply(t))}return t})}computeOutputShape(e){e=nx(e);let t=[],n=this.dataFormat===`channelsLast`?e.slice(1,e.length-1):e.slice(2);for(let e=0;e<n.length;++e){let r=mw(n[e],this.kernelSize[e],this.padding,this.strides[e],typeof this.dilationRate==`number`?this.dilationRate:this.dilationRate[e]);t.push(r)}let r=[e[0]];return this.dataFormat===`channelsLast`?(r=r.concat(t),r.push(this.filters)):(r.push(this.filters),r=r.concat(t)),r}getConfig(){let e={filters:this.filters,kernelInitializer:Qb(this.kernelInitializer),kernelRegularizer:iw(this.kernelRegularizer),kernelConstraint:zx(this.kernelConstraint)},t=super.getConfig();return Object.assign(e,t),e}static verifyArgs(e){if(!(`filters`in e)||typeof e.filters!=`number`||e.filters<1)throw new q(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(e.filters)}`)}},Cw=class e extends Sw{constructor(t){super(2,t),e.verifyArgs(t)}getConfig(){let e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!Ey(e.kernelSize,`number`,1,2))throw new q(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(e.kernelSize)}.`)}};Cw.className=`Conv2D`,K(Cw);var ww=class e extends Sw{constructor(t){super(3,t),e.verifyArgs(t)}getConfig(){let e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!(Array.isArray(e.kernelSize)&&(e.kernelSize.length===1||e.kernelSize.length===3)))throw new q(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(e.kernelSize)}.`)}};ww.className=`Conv3D`,K(ww);var Tw=class extends Cw{constructor(e){if(super(e),this.inputSpec=[new lx({ndim:4})],this.padding!==`same`&&this.padding!==`valid`)throw new q(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=nx(e),e.length!==4)throw new q(`Input should have rank 4; Received input shape: `+JSON.stringify(e));let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new q("The channel dimension of the inputs should be defined. Found `None`.");let n=e[t],r=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight(`kernel`,r,`float32`,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new lx({ndim:4,axes:{[t]:n}})],this.built=!0}call(e,t){return I(()=>{let t=Y(e);if(t.shape.length!==4)throw new q(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${t.shape.length}`);let n=t.shape,r=n[0],i,a;this.dataFormat===`channelsFirst`?(i=2,a=3):(i=1,a=2);let o=n[i],s=n[a],c=this.kernelSize[0],l=this.kernelSize[1],u=this.strides[0],d=this.strides[1],f=[r,hw(o,u,c,this.padding),hw(s,d,l,this.padding),this.filters];this.dataFormat!==`channelsLast`&&(t=jp(t,[0,2,3,1]));let p=Yc(t,this.kernel.read(),f,this.strides,this.padding);return this.dataFormat!==`channelsLast`&&(p=jp(p,[0,3,1,2])),this.bias!=null&&(p=Cb(p,this.bias.read(),this.dataFormat)),this.activation!=null&&(p=this.activation.apply(p)),p})}computeOutputShape(e){e=nx(e);let t=e.slice(),n,r,i;this.dataFormat===`channelsFirst`?(n=1,r=2,i=3):(n=3,r=1,i=2);let a=this.kernelSize[0],o=this.kernelSize[1],s=this.strides[0],c=this.strides[1];return t[n]=this.filters,t[r]=hw(t[r],s,a,this.padding),t[i]=hw(t[i],c,o,this.padding),t}getConfig(){let e=super.getConfig();return delete e.dilationRate,e}};Tw.className=`Conv2DTranspose`,K(Tw);var Ew=class extends ww{constructor(e){if(super(e),this.inputSpec=[new lx({ndim:5})],this.padding!==`same`&&this.padding!==`valid`)throw new q(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=nx(e),e.length!==5)throw new q(`Input should have rank 5; Received input shape: `+JSON.stringify(e));let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new q("The channel dimension of the inputs should be defined. Found `None`.");let n=e[t],r=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight(`kernel`,r,`float32`,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new lx({ndim:5,axes:{[t]:n}})],this.built=!0}call(e,t){return I(()=>{let t=Y(e);if(t.shape.length!==5)throw new q(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${t.shape.length}`);let n=t.shape,r=n[0],i,a,o;this.dataFormat===`channelsFirst`?(o=2,i=3,a=4):(o=1,i=2,a=3);let s=n[o],c=n[i],l=n[a],u=this.kernelSize[0],d=this.kernelSize[1],f=this.kernelSize[2],p=this.strides[0],m=this.strides[1],h=this.strides[2],g=[r,hw(s,p,u,this.padding),hw(c,m,d,this.padding),hw(l,h,f,this.padding),this.filters];this.dataFormat!==`channelsLast`&&(t=jp(t,[0,2,3,4,1]));let _=tl(t,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!==`channelsLast`&&(_=jp(_,[0,4,1,2,3])),this.bias!==null&&(_=Cb(_,this.bias.read(),this.dataFormat)),this.activation!==null&&(_=this.activation.apply(_)),_})}computeOutputShape(e){e=nx(e);let t=e.slice(),n,r,i,a;this.dataFormat===`channelsFirst`?(n=1,r=2,i=3,a=4):(n=4,r=1,i=2,a=3);let o=this.kernelSize[0],s=this.kernelSize[1],c=this.kernelSize[2],l=this.strides[0],u=this.strides[1],d=this.strides[2];return t[n]=this.filters,t[r]=hw(t[r],l,o,this.padding),t[i]=hw(t[i],u,s,this.padding),t[a]=hw(t[a],d,c,this.padding),t}getConfig(){let e=super.getConfig();return delete e.dilationRate,e}};Ew.className=`Conv3DTranspose`,K(Ew);var Dw=class extends Sw{constructor(e,t){if(super(e,t),this.DEFAULT_DEPTHWISE_INITIALIZER=`glorotUniform`,this.DEFAULT_POINTWISE_INITIALIZER=`glorotUniform`,this.depthwiseKernel=null,this.pointwiseKernel=null,t.filters==null)throw new q("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(t.kernelInitializer!=null||t.kernelRegularizer!=null||t.kernelConstraint!=null)throw new q(`Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.`);if(t.padding!=null&&t.padding!==`same`&&t.padding!==`valid`)throw new q(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(t.padding)}`);this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=$b(t.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=ow(t.depthwiseRegularizer),this.depthwiseConstraint=Vx(t.depthwiseConstraint),this.pointwiseInitializer=$b(t.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=ow(t.pointwiseRegularizer),this.pointwiseConstraint=Vx(t.pointwiseConstraint)}build(e){if(e=nx(e),e.length<this.rank+2)throw new q(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(e)}`);let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null||e[t]<0)throw new q(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(e[t])}`);let n=e[t],r=this.kernelSize.concat([n,this.depthMultiplier]),i=[];for(let e=0;e<this.rank;++e)i.push(1);i.push(n*this.depthMultiplier,this.filters),this.depthwiseKernel=this.addWeight(`depthwise_kernel`,r,`float32`,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight(`pointwise_kernel`,i,`float32`,this.pointwiseInitializer,this.pointwiseRegularizer,!0,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.inputSpec=[new lx({ndim:this.rank+2,axes:{[t]:n}})],this.built=!0}call(e,t){return I(()=>{e=Y(e);let t;if(this.rank===1)throw new J(`1D separable convolution is not implemented yet.`);return this.rank===2&&(this.dataFormat===`channelsFirst`&&(e=jp(e,[0,2,3,1])),t=Df(e,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,`NHWC`)),this.useBias&&(t=Cb(t,this.bias.read(),this.dataFormat)),this.activation!=null&&(t=this.activation.apply(t)),this.dataFormat===`channelsFirst`&&(t=jp(t,[0,3,1,2])),t})}getConfig(){let e=super.getConfig();return delete e.rank,delete e.kernelInitializer,delete e.kernelRegularizer,delete e.kernelConstraint,e.depthwiseInitializer=Qb(this.depthwiseInitializer),e.pointwiseInitializer=Qb(this.pointwiseInitializer),e.depthwiseRegularizer=iw(this.depthwiseRegularizer),e.pointwiseRegularizer=iw(this.pointwiseRegularizer),e.depthwiseConstraint=zx(this.depthwiseConstraint),e.pointwiseConstraint=zx(this.pointwiseConstraint),e}};Dw.className=`SeparableConv`;var Ow=class extends Dw{constructor(e){super(2,e)}};Ow.className=`SeparableConv2D`,K(Ow);var kw=class e extends Sw{constructor(t){super(1,t),e.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){let e=super.getConfig();return delete e.rank,delete e.dataFormat,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!Ey(e.kernelSize,`number`,1,1))throw new q(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(e.kernelSize)}.`)}};kw.className=`Conv1D`,K(kw);var Aw=class extends mx{constructor(e){super(e),typeof e.cropping==`number`?this.cropping=[[e.cropping,e.cropping],[e.cropping,e.cropping]]:typeof e.cropping[0]==`number`?this.cropping=[[e.cropping[0],e.cropping[0]],[e.cropping[1],e.cropping[1]]]:this.cropping=e.cropping,this.dataFormat=e.dataFormat===void 0?`channelsLast`:e.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(e){return this.dataFormat===`channelsFirst`?[e[0],e[1],e[2]-this.cropping[0][0]-this.cropping[0][1],e[3]-this.cropping[1][0]-this.cropping[1][1]]:[e[0],e[1]-this.cropping[0][0]-this.cropping[0][1],e[2]-this.cropping[1][0]-this.cropping[1][1],e[3]]}call(e,t){return I(()=>(e=Y(e),this.dataFormat===`channelsLast`?mb(mb(e,this.cropping[0][0],e.shape[1]-this.cropping[0][0]-this.cropping[0][1],2),this.cropping[1][0],e.shape[2]-this.cropping[1][1]-this.cropping[1][0],3):mb(mb(e,this.cropping[0][0],e.shape[2]-this.cropping[0][0]-this.cropping[0][1],3),this.cropping[1][0],e.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)))}getConfig(){let e={cropping:this.cropping,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}};Aw.className=`Cropping2D`,K(Aw);var jw=class extends mx{constructor(e){super(e),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=e.size==null?this.DEFAULT_SIZE:e.size,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,Vy(this.dataFormat),this.interpolation=e.interpolation==null?`nearest`:e.interpolation,Hy(this.interpolation)}computeOutputShape(e){if(this.dataFormat===`channelsFirst`){let t=e[2]==null?null:this.size[0]*e[2],n=e[3]==null?null:this.size[1]*e[3];return[e[0],e[1],t,n]}else{let t=e[1]==null?null:this.size[0]*e[1],n=e[2]==null?null:this.size[1]*e[2];return[e[0],t,n,e[3]]}}call(e,t){return I(()=>{let t=Y(e),n=t.shape;if(this.dataFormat===`channelsFirst`){t=jp(t,[0,2,3,1]);let e=this.size[0]*n[2],r=this.size[1]*n[3];return jp(this.interpolation===`nearest`?Gm.resizeNearestNeighbor(t,[e,r]):Gm.resizeBilinear(t,[e,r]),[0,3,1,2])}else{let e=this.size[0]*n[1],r=this.size[1]*n[2];return this.interpolation===`nearest`?Gm.resizeNearestNeighbor(t,[e,r]):Gm.resizeBilinear(t,[e,r])}})}getConfig(){let e={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}};jw.className=`UpSampling2D`,K(jw);function Mw(e,t,n=[1,1],r=`valid`,i,a){return I(()=>{i??=ob(),Vy(i);let o=gw(e,i);if(e.rank!==4)throw new q(`Input for depthwiseConv2d is required to be 4-D, but is instead ${e.rank}-D`);if(t.rank!==4)throw new q(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return o=hl(o,t,n,r===`same`?`same`:`valid`,`NHWC`,a),i===`channelsFirst`&&(o=jp(o,[0,3,1,2])),o})}var Nw=class extends xw{constructor(e){super(2,e),this.depthwiseKernel=null,this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=$b(e.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=Vx(e.depthwiseConstraint),this.depthwiseRegularizer=ow(e.depthwiseRegularizer)}build(e){if(e=nx(e),e.length<4)throw new q(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(e)}.`);let t=this.dataFormat===`channelsFirst`?1:3;if(e[t]==null||e[t]<0)throw new q(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${e[t]}).`);let n=e[t],r=[this.kernelSize[0],this.kernelSize[1],n,this.depthMultiplier];this.depthwiseKernel=this.addWeight(`depthwise_kernel`,r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight(`bias`,[n*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return I(()=>{e=Y(e);let t=Mw(e,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(t=Cb(t,this.bias.read(),this.dataFormat)),this.activation!=null&&(t=this.activation.apply(t)),t})}computeOutputShape(e){e=nx(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2],r=this.dataFormat===`channelsFirst`?e[1]*this.depthMultiplier:e[3]*this.depthMultiplier,i=mw(t,this.kernelSize[0],this.padding,this.strides[0]),a=mw(n,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat===`channelsFirst`?[e[0],r,i,a]:[e[0],i,a,r]}getConfig(){let e=super.getConfig();return e.depthMultiplier=this.depthMultiplier,e.depthwiseInitializer=Qb(this.depthwiseInitializer),e.depthwiseRegularizer=iw(this.depthwiseRegularizer),e.depthwiseConstraint=zx(this.depthwiseRegularizer),e}};Nw.className=`DepthwiseConv2D`,K(Nw);function Pw(e,t,n,r){if(Array.isArray(e)){if(t!=null||n!=null)throw new q(`When inputs is an array, neither initialState or constants should be provided`);r!=null&&(n=e.slice(e.length-r,e.length),e=e.slice(0,e.length-r)),e.length>1&&(t=e.slice(1,e.length)),e=e[0]}function i(e){return e==null||Array.isArray(e)?e:[e]}return t=i(t),n=i(n),{inputs:e,initialState:t,constants:n}}function Fw(e,t,n,r=!1,i,a,o=!1,s=!1){return I(()=>{let c=t.shape.length;if(c<3)throw new q(`Input should be at least 3D, but is ${c}D.`);let l=[1,0].concat(rb(2,c));if(t=jp(t,l),a!=null)throw new J(`The rnn() functoin of the deeplearn.js backend does not support constants yet.`);o&&console.warn(`Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend.`),i!=null&&(i=R(R(i,`bool`),`float32`),i.rank===c-1&&(i=uu(i,-1)),i=jp(i,l)),r&&(t=yf(t,0),i!=null&&(i=yf(i,0)));let u=[],d,f=n,p=t.shape[0],m=Dp(t),h;i!=null&&(h=Dp(i));for(let t=0;t<p;++t){let n=m[t],r=I(()=>e(n,f));if(i==null)d=r[0],f=r[1];else{let e=I(()=>{let e=h[t],n=G(Fd(e),e);return{output:z(V(r[0],e),V(f[0],n)),newStates:f.map((t,i)=>z(V(r[1][i],e),V(t,n)))}});d=e.output,f=e.newStates}s&&u.push(d)}let g;return s&&(g=ap(u,1)),[d,g,f]})}var Iw=class e extends mx{constructor(e){super(e);let t;if(e.cell==null)throw new q(`cell property is missing for the constructor of RNN.`);if(t=Array.isArray(e.cell)?new Ww({cells:e.cell}):e.cell,t.stateSize==null)throw new q("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=t,this.returnSequences=e.returnSequences==null?!1:e.returnSequences,this.returnState=e.returnState==null?!1:e.returnState,this.goBackwards=e.goBackwards==null?!1:e.goBackwards,this._stateful=e.stateful==null?!1:e.stateful,this.unroll=e.unroll==null?!1:e.unroll,this.supportsMasking=!0,this.inputSpec=[new lx({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){return this.states_==null?rb(0,Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1).map(e=>null):this.states_}setStates(e){this.states_=e}computeOutputShape(e){ex(e)&&(e=e[0]),e=e;let t=this.cell.stateSize;Array.isArray(t)||(t=[t]);let n=t[0],r;if(r=this.returnSequences?[e[0],e[1],n]:[e[0],n],this.returnState){let n=[];for(let r of t)n.push([e[0],r]);return[r].concat(n)}else return r}computeMask(e,t){return I(()=>{Array.isArray(t)&&(t=t[0]);let e=this.returnSequences?t:null;if(this.returnState){let t=this.states.map(e=>null);return[e].concat(t)}else return e})}get states(){if(this.states_==null){let e=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,t=[];for(let n=0;n<e;++n)t.push(null);return t}else return this.states_}set states(e){this.states_=e}build(e){if(this.numConstants!=null)throw new J(`Constants support is not implemented in RNN yet.`);ex(e)&&(e=e[0]),e=e;let t=this.stateful?e[0]:null,n=e.slice(2);this.inputSpec[0]=new lx({shape:[t,null,...n]});let r=[e[0]].concat(e.slice(2));this.cell.build(r);let i;if(i=Array.isArray(this.cell.stateSize)?this.cell.stateSize:[this.cell.stateSize],this.stateSpec!=null){if(!xe(this.stateSpec.map(e=>e.shape[e.shape.length-1]),i))throw new q(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=i.map(e=>new lx({shape:[null,e]}));this.stateful&&this.resetStates()}resetStates(e,t=!1){I(()=>{if(!this.stateful)throw new oy(`Cannot call resetStates() on an RNN Layer that is not stateful.`);let n=this.inputSpec[0].shape[0];if(n==null)throw new q("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(e=>bd([n,e])):this.states_=[bd([n,this.cell.stateSize])];else if(e==null)L(this.states_),this.keptStates!=null&&(L(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(e=>bd([n,e])):this.states_[0]=bd([n,this.cell.stateSize]);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new q(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t===!0?this.keptStates.push(this.states_.slice()):L(this.states_);for(let t=0;t<this.states_.length;++t){let r=e[t],i=[n,Array.isArray(this.cell.stateSize)?this.cell.stateSize[t]:this.cell.stateSize];if(!xe(r.shape,i))throw new q(`State ${t} is incompatible with layer ${this.name}: expected shape=${i}, received shape=${r.shape}`);this.states_[t]=r}}this.states_=this.states_.map(e=>Ja(e.clone()))})}apply(e,t){let n=t==null?null:t.initialState,r=t==null?null:t.constants;t??={};let i=Pw(e,n,r,this.numConstants);e=i.inputs,n=i.initialState,r=i.constants;let a=[],o=[];if(n!=null){t.initialState=n,a=a.concat(n),this.stateSpec=[];for(let e of n)this.stateSpec.push(new lx({shape:e.shape}));o=o.concat(this.stateSpec)}if(r!=null&&(t.constants=r,a=a.concat(r),this.numConstants=r.length),a[0]instanceof ux){let n=[e].concat(a),r=this.inputSpec.concat(o),i=this.inputSpec;this.inputSpec=r;let s=super.apply(n,t);return this.inputSpec=i,s}else return super.apply(e,t)}call(e,t){return I(()=>{let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;e=Y(e),i??=this.stateful?this.states_:this.getInitialState(e);let a=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(i.length!==a)throw new q(`RNN Layer has ${a} state(s) but was passed ${i.length} initial state(s).`);this.unroll&&console.warn(`Ignoring unroll = true for RNN layer, due to imperative backend.`);let o={training:r},s=Fw((e,t)=>{let n=this.cell.call([e].concat(t),o);return[n[0],n.slice(1)]},e,i,this.goBackwards,n,null,this.unroll,this.returnSequences),c=s[0],l=s[1],u=s[2];this.stateful&&this.resetStates(u,r);let d=this.returnSequences?l:c;return this.returnState?[d].concat(u):d})}getInitialState(e){return I(()=>{let t=bd(e.shape);return t=W(t,[1,2]),t=cb(t),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(e=>e>1?_b(t,[1,e]):t):this.cell.stateSize>1?[_b(t,[1,this.cell.stateSize])]:[t]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(e)}getConfig(){let t=super.getConfig(),n={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(n.numConstants=this.numConstants);let r=this.cell.getConfig();return this.getClassName()===e.className&&(n.cell={className:this.cell.getClassName(),config:r}),Object.assign(Object.assign(Object.assign({},r),t),n)}static fromConfig(e,t,n={}){let r=t.cell,i=$x(r,n);return new e(Object.assign(t,{cell:i}))}};Iw.className=`RNN`,K(Iw);var Lw=class extends mx{},Rw=class extends Lw{constructor(e){super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,this.units=e.units,Dy(this.units,`units`),this.activation=$C(e.activation==null?this.DEFAULT_ACTIVATION:e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=$b(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=$b(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=$b(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=ow(e.kernelRegularizer),this.recurrentRegularizer=ow(e.recurrentRegularizer),this.biasRegularizer=ow(e.biasRegularizer),this.kernelConstraint=Vx(e.kernelConstraint),this.recurrentConstraint=Vx(e.recurrentConstraint),this.biasConstraint=Vx(e.biasConstraint),this.dropout=tb([1,nb([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=tb([1,nb([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=nx(e),this.kernel=this.addWeight(`kernel`,[e[e.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight(`bias`,[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return I(()=>{if(e=e,e.length!==2)throw new q(`SimpleRNNCell expects 2 input Tensors, got ${e.length}.`);let n=e[1];e=e[0];let r=t.training==null?!1:t.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Gw({ones:()=>Fd(e),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Gw({ones:()=>Fd(n),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));let i,a=this.dropoutMask,o=this.recurrentDropoutMask;i=yb(a==null?e:V(e,a),this.kernel.read()),this.bias!=null&&(i=Cb(i,this.bias.read())),o!=null&&(n=V(n,o));let s=z(i,yb(n,this.recurrentKernel.read()));return this.activation!=null&&(s=this.activation.apply(s)),[s,s]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:ZC(this.activation),useBias:this.useBias,kernelInitializer:Qb(this.kernelInitializer),recurrentInitializer:Qb(this.recurrentInitializer),biasInitializer:Qb(this.biasInitializer),kernelRegularizer:iw(this.kernelRegularizer),recurrentRegularizer:iw(this.recurrentRegularizer),biasRegularizer:iw(this.biasRegularizer),activityRegularizer:iw(this.activityRegularizer),kernelConstraint:zx(this.kernelConstraint),recurrentConstraint:zx(this.recurrentConstraint),biasConstraint:zx(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},e),t)}};Rw.className=`SimpleRNNCell`,K(Rw);var zw=class extends Iw{constructor(e){e.cell=new Rw(e),super(e)}call(e,t){return I(()=>{this.cell.dropoutMask!=null&&(L(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(L(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return new e(t)}};zw.className=`SimpleRNN`,K(zw);var Bw=class extends Lw{constructor(e){if(super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_RECURRENT_ACTIVATION=`hardSigmoid`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.resetAfter)throw new q(`GRUCell does not support reset_after parameter set to true.`);this.units=e.units,Dy(this.units,`units`),this.activation=$C(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=$C(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=$b(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=$b(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=$b(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=ow(e.kernelRegularizer),this.recurrentRegularizer=ow(e.recurrentRegularizer),this.biasRegularizer=ow(e.biasRegularizer),this.kernelConstraint=Vx(e.kernelConstraint),this.recurrentConstraint=Vx(e.recurrentConstraint),this.biasConstraint=Vx(e.biasConstraint),this.dropout=tb([1,nb([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=tb([1,nb([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=nx(e);let t=e[e.length-1];this.kernel=this.addWeight(`kernel`,[t,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight(`bias`,[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return I(()=>{if(e=e,e.length!==2)throw new q(`GRUCell expects 2 input Tensors (inputs, h, c), got ${e.length}.`);let n=t.training==null?!1:t.training,r=e[1];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Gw({ones:()=>Fd(e),rate:this.dropout,training:n,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Gw({ones:()=>Fd(r),rate:this.recurrentDropout,training:n,count:3,dropoutFunc:this.dropoutFunc}));let i=this.dropoutMask,a=this.recurrentDropoutMask,o,s,c;0<this.dropout&&this.dropout<1&&(e=V(e,i[0]));let l=yb(e,this.kernel.read());this.useBias&&(l=Cb(l,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=V(r,a[0]));let u=this.recurrentKernel.read(),[d,f]=Zf(u,[2*this.units,this.units],u.rank-1),p=yb(r,d),[m,h,g]=Zf(l,3,l.rank-1),[_,v]=Zf(p,2,p.rank-1);o=this.recurrentActivation.apply(z(m,_)),s=this.recurrentActivation.apply(z(h,v));let y=yb(V(s,r),f);c=this.activation.apply(z(g,y));let b=z(V(o,r),V(z(1,Ju(o)),c));return[b,b]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:ZC(this.activation),recurrentActivation:ZC(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Qb(this.kernelInitializer),recurrentInitializer:Qb(this.recurrentInitializer),biasInitializer:Qb(this.biasInitializer),kernelRegularizer:iw(this.kernelRegularizer),recurrentRegularizer:iw(this.recurrentRegularizer),biasRegularizer:iw(this.biasRegularizer),activityRegularizer:iw(this.activityRegularizer),kernelConstraint:zx(this.kernelConstraint),recurrentConstraint:zx(this.recurrentConstraint),biasConstraint:zx(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},e),t)}};Bw.className=`GRUCell`,K(Bw);var Vw=class extends Iw{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new Bw(e),super(e)}call(e,t){return I(()=>{this.cell.dropoutMask!=null&&(L(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(L(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}};Vw.className=`GRU`,K(Vw);var Hw=class extends Lw{constructor(e){super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_RECURRENT_ACTIVATION=`hardSigmoid`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,this.units=e.units,Dy(this.units,`units`),this.activation=$C(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=$C(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=$b(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=$b(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=$b(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=e.unitForgetBias,this.kernelRegularizer=ow(e.kernelRegularizer),this.recurrentRegularizer=ow(e.recurrentRegularizer),this.biasRegularizer=ow(e.biasRegularizer),this.kernelConstraint=Vx(e.kernelConstraint),this.recurrentConstraint=Vx(e.recurrentConstraint),this.biasConstraint=Vx(e.biasConstraint),this.dropout=tb([1,nb([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=tb([1,nb([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){var t;e=nx(e);let n=e[e.length-1];this.kernel=this.addWeight(`kernel`,[n,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let r;if(this.useBias){if(this.unitForgetBias){let e=this.biasInitializer,n=this.units;r=new(t=class extends Nb{apply(t,r){let i=e.apply([n]),a=new Fb().apply([n]),o=e.apply([n*2]);return gb(gb(i,a),o)}},t.className=`CustomInit`,t)}else r=this.biasInitializer;this.bias=this.addWeight(`bias`,[this.units*4],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(e,t){return I(()=>{let n=t.training==null?!1:t.training;if(e=e,e.length!==3)throw new q(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let r=e[1],i=e[2];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Gw({ones:()=>Fd(e),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Gw({ones:()=>Fd(r),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let a=this.dropoutMask,o=this.recurrentDropoutMask,s,c,l,u;0<this.dropout&&this.dropout<1&&(e=V(e,a[0]));let d=yb(e,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=V(r,o[0])),d=z(d,yb(r,this.recurrentKernel.read())),this.useBias&&(d=Cb(d,this.bias.read()));let[f,p,m,h]=Zf(d,4,d.rank-1);s=this.recurrentActivation.apply(f),c=this.recurrentActivation.apply(p),l=z(V(c,i),V(s,this.activation.apply(m))),u=this.recurrentActivation.apply(h);let g=V(u,this.activation.apply(l));return[g,g,l]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:ZC(this.activation),recurrentActivation:ZC(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Qb(this.kernelInitializer),recurrentInitializer:Qb(this.recurrentInitializer),biasInitializer:Qb(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:iw(this.kernelRegularizer),recurrentRegularizer:iw(this.recurrentRegularizer),biasRegularizer:iw(this.biasRegularizer),activityRegularizer:iw(this.activityRegularizer),kernelConstraint:zx(this.kernelConstraint),recurrentConstraint:zx(this.recurrentConstraint),biasConstraint:zx(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},e),t)}};Hw.className=`LSTMCell`,K(Hw);var Uw=class extends Iw{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new Hw(e),super(e)}call(e,t){return I(()=>{this.cell.dropoutMask!=null&&(L(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(L(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}};Uw.className=`LSTM`,K(Uw);var Ww=class extends Lw{constructor(e){super(e),this.cells=e.cells}get stateSize(){let e=[];for(let t of this.cells.slice().reverse())Array.isArray(t.stateSize)?e.push(...t.stateSize):e.push(t.stateSize);return e}call(e,t){return I(()=>{e=e;let n=e.slice(1),r=[];for(let e of this.cells.slice().reverse())Array.isArray(e.stateSize)?r.push(n.splice(0,e.stateSize.length)):r.push(n.splice(0,1));r.reverse();let i=[],a;for(let o=0;o<this.cells.length;++o){let s=this.cells[o];n=r[o],a=o===0?[e[0]].concat(n):[a[0]].concat(n),a=s.call(a,t),i.push(a.slice(1))}n=[];for(let e of i.slice().reverse())n.push(...e);return[a[0]].concat(n)})}build(e){ex(e)&&(e=e[0]),e=e;let t;this.cells.forEach((n,r)=>{qy(`RNNCell_${r}`,()=>{n.build(e),t=Array.isArray(n.stateSize)?n.stateSize[0]:n.stateSize,e=[e[0],t]})}),this.built=!0}getConfig(){let e=super.getConfig(),t={cells:this.cells.map(e=>({className:e.getClassName(),config:e.getConfig()}))};return Object.assign(Object.assign({},e),t)}static fromConfig(e,t,n={}){let r=[];for(let e of t.cells)r.push($x(e,n));return new e({cells:r})}get trainableWeights(){if(!this.trainable)return[];let e=[];for(let t of this.cells)e.push(...t.trainableWeights);return e}get nonTrainableWeights(){let e=[];for(let t of this.cells)e.push(...t.nonTrainableWeights);if(!this.trainable){let t=[];for(let e of this.cells)t.push(...e.trainableWeights);return t.concat(e)}return e}getWeights(){let e=[];for(let t of this.cells)e.push(...t.weights);return sx(e)}setWeights(e){let t=[];for(let n of this.cells){let r=n.weights.length,i=e.splice(r);for(let e=0;e<n.weights.length;++e)t.push([n.weights[e],i[e]])}cx(t)}};Ww.className=`StackedRNNCells`,K(Ww);function Gw(e){let{ones:t,rate:n,training:r=!1,count:i=1,dropoutFunc:a}=e,o=()=>a==null?Eb(t(),n):a(t(),n),s=()=>Ob(o,t,r);return!i||i<=1?Ja(s().clone()):Array(i).fill(void 0).map(s).map(e=>Ja(e.clone()))}var Kw=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},qw=class extends Iw{constructor(e){if(e.unroll)throw new J(`Unrolling is not possible with convolutional RNNs.`);if(Array.isArray(e.cell))throw new J(`It is not possible at the moment to stack convolutional cells.`);super(e),this.inputSpec=[new lx({ndim:5})]}call(e,t){return I(()=>{if(this.cell.dropoutMask!=null&&(L(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(L(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),t&&t.constants)throw new q(`ConvRNN2D cell does not support constants`);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}computeOutputShape(e){let t=this.computeSingleOutputShape(e);return this.returnSequences||(t=[t[0],...t.slice(2)]),this.returnState&&(t=[t,...[,,].fill([e[0],...t.slice(-3)])]),t}getInitialState(e){return I(()=>{let{stateSize:t}=this.cell,n=e.shape,r=this.computeSingleOutputShape(n),i=bd([r[0],...r.slice(2)]);return Array.isArray(t)?Array(t.length).fill(i):[i]})}resetStates(e,t=!1){I(()=>{if(!this.stateful)throw new oy(`Cannot call resetStates() on an RNN Layer that is not stateful.`);let n=this.inputSpec[0].shape,r=this.computeSingleOutputShape(n),i=[r[0],...r.slice(2)];if(n[0]==null)throw new q("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>bd(i)):this.states_=[bd(i)];else if(e==null)L(this.states_),this.keptStates!=null&&(L(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>bd(i)):this.states_[0]=bd(i);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new q(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t?this.keptStates.push(this.states_.slice()):L(this.states_);for(let t=0;t<this.states_.length;++t){let n=e[t],r=i;if(!xe(n.shape,r))throw new q(`State ${t} is incompatible with layer ${this.name}: expected shape=${r}, received shape=${n.shape}`);this.states_[t]=n}}this.states_=this.states_.map(e=>Ja(e.clone()))})}computeSingleOutputShape(e){let{dataFormat:t,filters:n,kernelSize:r,padding:i,strides:a,dilationRate:o}=this.cell,s=t===`channelsFirst`,c=e[s?3:2],l=e[s?4:3],u=mw(c,r[0],i,a[0],o[0]),d=mw(l,r[1],i,a[1],o[1]);return[...e.slice(0,2),...s?[n,u,d]:[u,d,n]]}};qw.className=`ConvRNN2D`;var Jw=class extends Hw{constructor(e){let{filters:t,kernelSize:n,strides:r,padding:i,dataFormat:a,dilationRate:o}=e;super(Object.assign(Object.assign({},e),{units:t})),this.filters=t,Dy(this.filters,`filters`),this.kernelSize=pw(n,2,`kernelSize`),this.kernelSize.forEach(e=>Dy(e,`kernelSize`)),this.strides=pw(r||1,2,`strides`),this.strides.forEach(e=>Dy(e,`strides`)),this.padding=i||`valid`,Uy(this.padding),this.dataFormat=a||`channelsLast`,Vy(this.dataFormat),this.dilationRate=pw(o||1,2,`dilationRate`),this.dilationRate.forEach(e=>Dy(e,`dilationRate`))}build(e){var t;e=nx(e);let n=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[n]==null)throw new q(`The channel dimension of the input should be defined. Found ${e[n]}`);let r=e[n],i=this.kernelSize.concat([r,this.filters*4]);this.kernel=this.addWeight(`kernel`,i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);let a=this.kernelSize.concat([this.filters,this.filters*4]);if(this.recurrentKernel=this.addWeight(`recurrent_kernel`,a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let e;if(this.unitForgetBias){let n=this.biasInitializer,r=this.filters;e=new(t=class extends Nb{apply(e,t){return hb([n.apply([r]),xd([r]),n.apply([r*2])])}},t.className=`CustomInit`,t)}else e=this.biasInitializer;this.bias=this.addWeight(`bias`,[this.filters*4],null,e,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(e,t){return I(()=>{if(e.length!==3)throw new q(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let n=t.training||!1,r=e[0],i=e[1],a=e[2];0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Gw({ones:()=>Fd(r),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let o=this.dropoutMask,s=(e,t,n)=>!t||!t[n]?e:V(t[n],e),c=s(r,o,0),l=s(r,o,1),u=s(r,o,2),d=s(r,o,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Gw({ones:()=>Fd(i),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let f=this.recurrentDropoutMask,p=s(i,f,0),m=s(i,f,1),h=s(i,f,2),g=s(i,f,3),[_,v,y,b]=Zf(this.kernel.read(),4,3),[x,S,C,w]=this.useBias?Zf(this.bias.read(),4):[null,null,null,null];c=this.inputConv(c,_,x,this.padding),l=this.inputConv(l,v,S,this.padding),u=this.inputConv(u,y,C,this.padding),d=this.inputConv(d,b,w,this.padding);let[T,E,D,ee]=Zf(this.recurrentKernel.read(),4,3);p=this.recurrentConv(p,T),m=this.recurrentConv(m,E),h=this.recurrentConv(h,D),g=this.recurrentConv(g,ee);let te=this.recurrentActivation.apply(z(c,p)),ne=z(V(this.recurrentActivation.apply(z(l,m)),a),V(te,this.activation.apply(z(u,h)))),re=V(this.recurrentActivation.apply(z(d,g)),this.activation.apply(ne));return[re,re,ne]})}getConfig(){let e=super.getConfig(),{units:t}=e,n=Kw(e,[`units`]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},n),r)}inputConv(e,t,n,r){let i=Uc(e,t,this.strides,r||`valid`,this.dataFormat===`channelsFirst`?`NCHW`:`NHWC`,this.dilationRate);return n?Cb(i,n,this.dataFormat):i}recurrentConv(e,t){return Uc(e,t,1,`same`,this.dataFormat===`channelsFirst`?`NCHW`:`NHWC`)}};Jw.className=`ConvLSTM2DCell`,K(Jw);var Yw=class extends qw{constructor(e){let t=new Jw(e);super(Object.assign(Object.assign({},e),{cell:t}))}static fromConfig(e,t){return new e(t)}};Yw.className=`ConvLSTM2D`,K(Yw);var Xw=class extends mx{constructor(e){super(e),this.rate=Math.max(Math.min(e.rate,1),0),this.noiseShape=e.noiseShape,this.seed=e.seed,this.supportsMasking=!0}getNoiseShape(e){if(this.noiseShape==null)return this.noiseShape;let t=e.shape,n=[];for(let e=0;e<this.noiseShape.length;++e)n.push(this.noiseShape[e]==null?t[e]:this.noiseShape[e]);return n}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);if(0<this.rate&&this.rate<1){let e=t.training==null?!1:t.training,r=this.getNoiseShape(n);return Ob(()=>Eb(n,this.rate,r,this.seed),()=>n,e)}return e})}getConfig(){let e={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},t=super.getConfig();return Object.assign(e,t),e}dispose(){return super.dispose()}};Xw.className=`Dropout`,K(Xw);var Zw=class extends Xw{constructor(e){super(e),this.inputSpec=[{ndim:3}]}getNoiseShape(e){let t=e.shape;return[t[0],1,t[2]]}};Zw.className=`SpatialDropout1D`,K(Zw);var Qw=class extends mx{constructor(e){if(super(e),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.batchInputShape==null&&e.inputShape==null&&e.inputDim!=null){let t=null;e.batchSize!=null&&(t=e.batchSize),this.batchInputShape=[t,e.inputDim]}this.units=e.units,Dy(this.units,`units`),this.activation=$C(e.activation),e.useBias!=null&&(this.useBias=e.useBias),this.kernelInitializer=$b(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=$b(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=Vx(e.kernelConstraint),this.biasConstraint=Vx(e.biasConstraint),this.kernelRegularizer=ow(e.kernelRegularizer),this.biasRegularizer=ow(e.biasRegularizer),this.activityRegularizer=ow(e.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(e){e=nx(e);let t=e[e.length-1];this.kernel??(this.kernel=this.addWeight(`kernel`,[t,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:t}}],this.built=!0}computeOutputShape(e){e=nx(e);let t=e.slice();return t[t.length-1]=this.units,t}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e),r=Ay(this.activation.getClassName()),i;return r==null?(i=yb(n,this.kernel.read()),this.bias!=null&&(i=Cb(i,this.bias.read())),this.activation!=null&&(i=this.activation.apply(i))):i=yb(n,this.kernel.read(),r,this.bias?this.bias.read():null),i})}getConfig(){let e={units:this.units,activation:ZC(this.activation),useBias:this.useBias,kernelInitializer:Qb(this.kernelInitializer),biasInitializer:Qb(this.biasInitializer),kernelRegularizer:iw(this.kernelRegularizer),biasRegularizer:iw(this.biasRegularizer),activityRegularizer:iw(this.activityRegularizer),kernelConstraint:zx(this.kernelConstraint),biasConstraint:zx(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}};Qw.className=`Dense`,K(Qw);var $w=class extends mx{constructor(e){e||={},super(e),this.inputSpec=[{minNDim:3}],this.dataFormat=e.dataFormat}computeOutputShape(e){e=nx(e);for(let t of e.slice(1))if(t==null)throw new q(`The shape of the input to "Flatten" is not fully defined (got ${e.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[e[0],eb(e,1)]}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);if(this.dataFormat===`channelsFirst`&&n.rank>1){let e=[0];for(let t=2;t<n.rank;++t)e.push(t);e.push(1),n=jp(n,e)}return db(n)})}getConfig(){let e={};this.dataFormat!=null&&(e.dataFormat=this.dataFormat);let t=super.getConfig();return Object.assign(e,t),e}};$w.className=`Flatten`,K($w);var eT=class extends mx{constructor(e){super(e),this.supportsMasking=!0,this.activation=$C(e.activation)}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);return this.activation.apply(n)})}getConfig(){let e={activation:ZC(this.activation)},t=super.getConfig();return Object.assign(e,t),e}};eT.className=`Activation`,K(eT);var tT=class extends mx{constructor(e){super(e),this.n=e.n,this.inputSpec=[{ndim:2}]}computeOutputShape(e){return[e[0],this.n,e[1]]}call(e,t){return I(()=>(e=Y(e),lb(e,this.n)))}getConfig(){let e={n:this.n},t=super.getConfig();return Object.assign(e,t),e}};tT.className=`RepeatVector`,K(tT);var nT=class extends mx{constructor(e){super(e),this.targetShape=e.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(e){return e<0||e==null}fixUnknownDimension(e,t){let n=`Total size of new array must be unchanged.`,r=t.slice(),i=1,a=null;for(let e=0;e<r.length;++e){let t=r[e];if(this.isUnknown(t))if(a===null)a=e;else throw new q(`Can only specifiy one unknown dimension.`);else i*=t}let o=eb(e);if(a!==null){if(i===0||o%i!==0)throw new q(n);r[a]=o/i}else if(o!==i)throw new q(n);return r}computeOutputShape(e){let t=!1;for(let n=0;n<e.length;++n)if(this.isUnknown(e[n])){t=!0;break}return t?e.slice(0,1).concat(this.targetShape):e.slice(0,1).concat(this.fixUnknownDimension(e.slice(1),this.targetShape))}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e),r=n.shape;return H(n,r.slice(0,1).concat(this.fixUnknownDimension(r.slice(1),this.targetShape)))})}getConfig(){let e={targetShape:this.targetShape},t=super.getConfig();return Object.assign(e,t),e}};nT.className=`Reshape`,K(nT);var rT=class extends mx{constructor(e){if(super(e),e.dims==null)throw Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(e.dims))throw Error(`Permute constructor requires \`dims\` to be an Array, but received ${e.dims} instead.`);let t=rb(1,e.dims.length+1);if(!xe(e.dims.slice().sort(),t))throw Error("Invalid permutation `dims`: "+JSON.stringify(e.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=e.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new lx({ndim:this.dims.length+1})]}computeOutputShape(e){e=nx(e);let t=e.slice();return this.dims.forEach((n,r)=>{t[r+1]=e[n]}),t}call(e,t){return jp(Y(e),this.dimsIncludingBatch)}getConfig(){let e={dims:this.dims},t=super.getConfig();return Object.assign(e,t),e}};rT.className=`Permute`,K(rT);var iT=class extends mx{constructor(e){super(e??{}),this.supportsMasking=!0,e==null?this.maskValue=0:this.maskValue=e.maskValue==null?0:e.maskValue}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={maskValue:this.maskValue};return Object.assign(t,e),t}computeMask(e,t){return ys(jd(Y(e),this.maskValue),-1)}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);return V(n,R(ys(jd(n,this.maskValue),-1,!0),n.dtype))})}};iT.className=`Masking`,K(iT);var aT=class extends mx{constructor(e){if(super(e),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER=`randomUniform`,e.batchInputShape==null&&e.inputShape==null){let t=null;e.batchSize!=null&&(t=e.batchSize),e.inputLength==null?this.batchInputShape=[t,null]:this.batchInputShape=[t].concat(my(e.inputLength))}this.inputDim=e.inputDim,Dy(this.inputDim,`inputDim`),this.outputDim=e.outputDim,Dy(this.outputDim,`outputDim`),this.embeddingsInitializer=$b(e.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=ow(e.embeddingsRegularizer),this.activityRegularizer=ow(e.activityRegularizer),this.embeddingsConstraint=Vx(e.embeddingsConstraint),this.maskZero=e.maskZero,this.supportsMasking=e.maskZero,this.inputLength=e.inputLength}build(e){this.embeddings=this.addWeight(`embeddings`,[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(e){}computeMask(e,t){return I(()=>this.maskZero?(e=Y(e),jd(e,Tl(e))):null)}computeOutputShape(e){if(e=nx(e),this.inputLength==null)return[...e,this.outputDim];let t=my(this.inputLength);if(t.length!==e.length-1)throw new q(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);{let n=0;for(let r=0;r<t.length;++r){let i=t[r],a=e[r+1];if(i!=null&&a!=null&&i!==a)throw new q(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);i??(t[n]=a),n++}}return[e[0],...t,this.outputDim]}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);return n.dtype!==`int32`&&(n=sb(n,`int32`)),H(bb(this.embeddings.read(),H(n,[n.size])),nx(this.computeOutputShape(n.shape)))})}getConfig(){let e={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:Qb(this.embeddingsInitializer),embeddingsRegularizer:iw(this.embeddingsRegularizer),activityRegularizer:iw(this.activityRegularizer),embeddingsConstraint:zx(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},t=super.getConfig();return Object.assign(e,t),e}};aT.className=`Embedding`,K(aT);var oT=class extends mx{constructor(e){super(e||{}),this.supportsMasking=!0}mergeFunction(e){throw new J}computeElementwiseOpOutputShape(e,t){if(e==null||t==null)return null;if(e.length<t.length)return this.computeElementwiseOpOutputShape(t,e);if(t.length===0)return e;let n=e.slice(0,e.length-t.length);for(let r=0;r<t.length;++r){let i=e[e.length-t.length+r],a=t[r];if(i==null||a==null||i<0||a<0)n.push(null);else if(i===1)n.push(a);else if(a===1)n.push(i);else{if(i!==a)throw new q(`Operands could not be broadcast together with shapes `+JSON.stringify(e)+` `+JSON.stringify(t));n.push(i)}}return n}build(e){if(Array.isArray(e)&&!Array.isArray(e[0])&&(e=[nx(e)]),e=e,e.length<2)throw new q(`A merge layer should be called on an Array of at least 2 inputs. Got ${e.length} input(s).`);let t=[];for(let n of e)n!=null&&n[0]!==null&&t.push(n[0]);if(t=Cy(t),t.length>1)throw new q(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(e)}.`);let n=e[0]==null?null:e[0].slice(1);for(let t=1;t<e.length;++t){let r=e[t]==null?null:e[t].slice(1);n=this.computeElementwiseOpOutputShape(n,r)}let r=e.map(e=>e.length);e.indexOf(null)===-1&&Cy(r).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(e,t){return I(()=>{if(e=e,this.reshapeRequired){let t=[],n=e.map(e=>e.rank);if(n.indexOf(null)===-1){let r=nb(n);for(let n of e){let e=n.rank;for(let t=0;t<r-e;++t)n=cb(n,1);t.push(n)}return this.mergeFunction(t)}else{let n=!1;for(let r of e){let e=r.rank;if(e==null){let e=r.shape,i=e[0],a=e.slice(1).concat([i]),o=H(r,[i].concat(eb(e.slice(1))));o=jp(o,[1,0]),o=H(o,a),t.push(o),n=!0}else if(e>1){let i=rb(1,e).concat([0]);t.push(jp(r,i)),n=!0}else t.push(r)}let r=this.mergeFunction(t),i=r.rank;if(n){if(i==null){let e=r.shape,t=e[e.length-1],n=[t].concat(e.slice(0,e.length-1));r=H(jp(H(r,[-1,t]),[1,0]),n)}else if(i>1){let e=[i-1].concat(rb(0,i-1));r=jp(r,e)}}return r}}else return this.mergeFunction(e)})}computeOutputShape(e){e=e;let t;t=e[0]==null?null:e[0].slice(1);for(let n=1;n<e.length;++n){let r=e[n]==null?null:e[n].slice(1);t=this.computeElementwiseOpOutputShape(t,r)}let n=[];for(let t of e)t!=null&&t[0]!==null&&n.push(t[0]);return n=Cy(n),t=n.length===1?n.concat(t):[null].concat(t),t}computeMask(e,t){return I(()=>{if(t==null)return null;if(!Array.isArray(t))throw new q("`mask` should be an Array");if(!Array.isArray(e))throw new q("`inputs` should be an Array");if(t.length!==e.length)throw new q(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${e.length} vs ${t.length})`);if(t.every(e=>e==null))return null;t=t.map(e=>e==null?e:uu(e,0));let n=t[0];for(let e=1;e<t.length-1;++e)n=ad(n,t[e]);return n})}},sT=class extends oT{constructor(e){super(e)}mergeFunction(e){return I(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=z(t,e[n]);return t})}};sT.className=`Add`,K(sT);var cT=class extends oT{constructor(e){super(e)}mergeFunction(e){return I(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=V(t,e[n]);return t})}};cT.className=`Multiply`,K(cT);var lT=class extends oT{constructor(e){super(e)}mergeFunction(e){return I(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=z(t,e[n]);return V(1/e.length,t)})}};lT.className=`Average`,K(lT);var uT=class extends oT{constructor(e){super(e)}mergeFunction(e){return I(()=>{let t=e[0];for(let n=1;n<e.length;++n)t=_d(t,e[n]);return t})}};uT.className=`Maximum`,K(uT);var dT=class extends oT{constructor(e){super(e)}mergeFunction(e){return I(()=>{let t=e[0];for(let n=1;n<e.length;++n)t=Cd(t,e[n]);return t})}};dT.className=`Minimum`,K(dT);var fT=class extends oT{constructor(e){super(e),this.DEFAULT_AXIS=-1,e??={},this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){if(!(Array.isArray(e)&&Array.isArray(e[0]))||e.length===1)throw new q("A `Concatenate` layer should be called on a list of at least 2 inputs");e=e;let t=!0;for(let n of e)if(n!=null){t=!1;break}if(t)return;let n=[];for(let t=0;t<e.length;++t){let r=e[t].slice();r.splice(this.axis,1);let i=!1;for(let e of n)if(xe(e,r)){i=!0;break}i||n.push(r)}if(n.length>1)throw new q("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(e))}mergeFunction(e){return I(()=>hb(e,this.axis))}computeOutputShape(e){if(!(Array.isArray(e)&&Array.isArray(e[0])))throw new q("A `Concatenate` layer should be called on a list of inputs.");let t=e,n=t[0].slice(),r=this.axis<0?n.length+this.axis:this.axis;for(let e of t.slice(1)){if(n[r]==null||e[r]==null){n[r]=null;break}n[r]+=e[r]}return n}computeMask(e,t){if(t==null)return null;if(!Array.isArray(t))throw new q("`mask` should be an array for Concatenate");if(!Array.isArray(e))throw new q("`inputs` should be an array for Concatenate");if(t.length!==e.length)throw new q(`Mismatch in the length of mask (${t.length}) and the legnth of inputs (${e.length})`);return I(()=>{let n=!0;if(t.forEach(e=>{if(e!=null){n=!1;return}}),n)return null;let r=[];for(let n=0;n<e.length;++n)t[n]==null?r.push(R(Fd(e[n]),`bool`)):t[n].rank<e[n].rank?r.push(uu(t[n],-1)):r.push(t[n]);return _s(ac(r,this.axis),-1,!1)})}getConfig(){let e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}};fT.className=`Concatenate`,K(fT);function pT(e,t){for(;e<0;)e+=t;return e}function mT(e,t,n){if(e.shape.length>3||t.shape.length>3)throw new J(`batchDot is not implemented for tensors of 4D or higher rank yet`);if(O(e.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${e.shape.length}`),O(e.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof n==`number`&&(n=[n,n]),e.dtype===`complex64`||t.dtype===`complex64`)throw new J(`batchDot is not implemented for complex64-type Tensors yet.`);let r=e.shape.length,i=t.shape.length;n??=[r-1,i-2];let a=n;return I(()=>{let n;if(r>i){n=r-i;let e=[];for(let t=0;t<n;++t)e.push(1);t=H(t,t.shape.concat(e))}else if(i>r){n=i-r;let t=[];for(let e=0;e<n;++e)t.push(1);e=H(e,e.shape.concat(t))}else n=0;let o;if(e.shape.length===2&&t.shape.length===2)o=a[0]===a[1]?W(V(e,t),a[0]):W(V(jp(e,[1,0]),t),a[1]);else{let n=a[0]!==e.shape.length-1,r=a[1]===t.shape.length-1;o=sc(e,t,n,r)}if(n>0){let e;e=r>i?r+i-3:r-1;let t=[];for(let r=e;r<e+n;++r)t.push(r);o=rp(o,t)}return o.shape.length===1&&(o=uu(o,1)),o})}var hT=class extends oT{constructor(e){super(e),this.axes=e.axes,this.normalize=e.normalize==null?!1:e.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){O(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let t=e[0],n=e[1];if(t.length>3||n.length>3)throw new J(`Dot layer does not support tensors of 4D or higher rank yet.`);let r=this.interpretAxes(t,n);if(t[r[0]]!==n[r[1]])throw new q(`Dimension incompatibility: ${t[r[0]]} !== ${n[r[1]]}`)}mergeFunction(e){if(e.length!==2)throw new q(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${e.length} input(s).`);let t=e[0],n=e[1],r;return r=Array.isArray(this.axes)?this.axes.map((t,n)=>pT(t,e[n].shape.length)):[pT(this.axes,t.shape.length),pT(this.axes,n.shape.length)],this.normalize&&(t=eS(t,r[0]),n=eS(n,r[1])),mT(t,n,r)}interpretAxes(e,t){let n;return n=Array.isArray(this.axes)?this.axes:[pT(this.axes,e.length),pT(this.axes,t.length)],n}computeOutputShape(e){O(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let t=e[0].slice(),n=e[1].slice();if(t.length>3||n.length>3)throw new J(`Dot layer does not support tensors of 4D or higher rank yet.`);let r=this.interpretAxes(t,n);t.splice(r[0],1),n.splice(r[1],1),n.splice(0,1);let i=t.concat(n);return i.length===1&&i.push(1),i}computeMask(e,t){return null}getConfig(){let e={axes:this.axes,normalize:this.normalize},t=super.getConfig();return Object.assign(e,t),e}};hT.className=`Dot`,K(hT);var gT=class extends mx{constructor(e){super(e),this.supportsMasking=!0,this.stddev=e.stddev}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={stddev:this.stddev};return Object.assign(t,e),t}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);return Ob(()=>z(vb(n.shape,0,this.stddev),n),()=>n,t.training||!1)})}};gT.className=`GaussianNoise`,K(gT);var _T=class extends mx{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);return this.rate>0&&this.rate<1?Ob(()=>{let e=Math.sqrt(this.rate/(1-this.rate));return V(n,vb(n.shape,1,e))},()=>n,t.training||!1):n})}};_T.className=`GaussianDropout`,K(_T);var vT=class extends mx{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate,this.noiseShape=e.noiseShape}_getNoiseShape(e){return this.noiseShape||Y(e).shape}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return I(()=>{if(this.rate<1&&this.rate>0){let n=this._getNoiseShape(e);return Ob(()=>{let t=Y(e),r=-1.6732632423543772*1.0507009873554805,i=wu(cf(n),this.rate);i=sb(i,`float32`);let a=((1-this.rate)*(1+this.rate*r**2))**-.5,o=-a*r*this.rate;return z(V(z(V(t,i),V(z(i,-1),r)),a),o)},()=>Y(e),t.training||!1)}return e})}};vT.className=`AlphaDropout`,K(vT);function yT(e,t,n,r,i,a=.001){let o;if(e.rank===2)o=bc(e,t,n,r,i,a);else if(e.rank===3)o=Sc(e,t,n,r,i,a);else if(e.rank===4)o=wc(e,t,n,r,i,a);else throw new J(`batchNormalization is not implemented for array of rank ${e.rank} yet`);return o}function bT(e,t,n,r,i=.001){return I(()=>{let a=kd(e,r),o=a.mean,s=a.variance;return[yT(e,o,s,n,t,i),o,s]})}function xT(e,t,n,r,i=.001){return I(()=>{let a=kd(e,r),o=a.mean,s=a.variance,c=[];for(let t of rb(0,e.rank))r.indexOf(t)===-1?c.push(e.shape[t]):c.push(1);let l=H(o,c),u=H(s,c),d=t==null?null:H(t,c);return[yT(e,l,u,n==null?null:H(n,c),d,i),o,s]})}function ST(e,t,n,r,i=.001){return xe(r.slice().sort(),rb(0,e.rank-1))?bT(e,t,n,r,i):xT(e,t,n,r,i)}var CT=class extends mx{constructor(e){e??={},super(e),this.supportsMasking=!0,this.axis=e.axis==null?-1:e.axis,this.momentum=e.momentum==null?.99:e.momentum,this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null?!0:e.center,this.scale=e.scale==null?!0:e.scale,this.betaInitializer=$b(e.betaInitializer||`zeros`),this.gammaInitializer=$b(e.gammaInitializer||`ones`),this.movingMeanInitializer=$b(e.movingMeanInitializer||`zeros`),this.movingVarianceInitializer=$b(e.movingVarianceInitializer||`ones`),this.betaConstraint=Vx(e.betaConstraint),this.gammaConstraint=Vx(e.gammaConstraint),this.betaRegularizer=ow(e.betaRegularizer),this.gammaRegularizer=ow(e.gammaRegularizer)}build(e){e=nx(e);let t=this.axis>=0?this.axis:this.axis+e.length,n=e[t];if(n==null)throw new q(`Axis ${t} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(e)}.`);this.inputSpec=[new lx({ndim:e.length,axes:{[t]:n}})];let r=[n];this.scale&&(this.gamma=this.addWeight(`gamma`,r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight(`beta`,r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight(`moving_mean`,r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight(`moving_variance`,r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(e,t){return I(()=>{let n=t.training==null?!1:t.training,r=Y(e),i=r.shape,a=i.length,o=rb(0,a),s=this.axis>=0?this.axis:this.axis+a;o.splice(s,1);let c=uy(1,a);c[s]=i[s];let l=o.slice();l.sort();let u=!xe(l,rb(0,a).slice(0,a-1)),d=()=>u?yT(r,H(this.movingMean.read(),c),H(this.movingVariance.read(),c),this.center?H(this.beta.read(),c):null,this.scale?H(this.gamma.read(),c):null,this.epsilon):yT(r,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon);if(!n)return d();let[f,p,m]=ST(r,this.gamma.read(),this.beta.read(),o,this.epsilon),h=(e,t,n)=>{I(()=>{let r=1-n,i=e.read(),a=V(G(i,t),r);e.write(G(i,a))})};return h(this.movingMean,p,this.momentum),h(this.movingVariance,m,this.momentum),f})}getConfig(){let e={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Qb(this.betaInitializer),gammaInitializer:Qb(this.gammaInitializer),movingMeanInitializer:Qb(this.movingMeanInitializer),movingVarianceInitializer:Qb(this.movingVarianceInitializer),betaRegularizer:iw(this.betaRegularizer),gammaRegularizer:iw(this.gammaRegularizer),betaConstraint:zx(this.betaConstraint),gammaConstraint:zx(this.gammaConstraint)},t=super.getConfig();return Object.assign(e,t),e}};CT.className=`BatchNormalization`,K(CT);var wT=class extends mx{constructor(e){if(e??={},super(e),this.axis=e.axis==null?-1:e.axis,typeof this.axis==`number`){if(!Number.isInteger(this.axis))throw Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(let e of this.axis)if(!Number.isInteger(e))throw Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null?!0:e.center,this.scale=e.scale==null?!0:e.scale,this.betaInitializer=$b(e.betaInitializer||`zeros`),this.gammaInitializer=$b(e.gammaInitializer||`ones`),this.betaRegularizer=ow(e.betaRegularizer),this.gammaRegularizer=ow(e.gammaRegularizer),this.supportsMasking=!0}build(e){e=nx(e);let t=e.length;typeof this.axis==`number`&&(this.axis=[this.axis]);for(let e=0;e<this.axis.length;++e)this.axis[e]<0&&(this.axis[e]+=t);for(let e of this.axis)if(e<0||e>=t)throw Error(`Invalid axis: ${e}`);if(this.axis.length!==Cy(this.axis).length)throw Error(`Found duplicate axes in: ${this.axis}`);let n=this.axis.map(t=>e[t]);this.scale?this.gamma=this.addWeight(`gamma`,n,`float32`,this.gammaInitializer,this.gammaRegularizer,!0):this.gamma=null,this.center?this.beta=this.addWeight(`beta`,n,`float32`,this.betaInitializer,this.betaRegularizer,!0):this.beta=null,this.built=!0}call(e,t){let n=Y(e),r=n.shape,i=r.length;return I(()=>{let{mean:e,variance:t}=kd(n,this.axis,!0),a=uy(1,i);for(let e of this.axis)a[e]=r[e];let o=e=>e!=null&&e.shape.length!==i?H(e,a):e,s=this.scale?o(this.gamma.read()):null,c=this.center?o(this.beta.read()):null,l=[],u=[];for(let e=0;e<i;++e)this.axis.indexOf(e)===-1?(l.push(1),u.push(r[e])):(l.push(r[e]),u.push(1));return e=mu(e,l),t=mu(t,l),s!=null&&(s=mu(s,u)),c!=null&&(c=mu(c,u)),yT(n,e,t,c,s,this.epsilon)})}getConfig(){let e={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Qb(this.betaInitializer),gammaInitializer:Qb(this.gammaInitializer),betaRegularizer:iw(this.betaRegularizer),gammaRegularizer:iw(this.gammaRegularizer)},t=super.getConfig();return Object.assign(e,t),e}};wT.className=`LayerNormalization`,K(wT);function TT(e,t,n){return I(()=>{if(e.rank!==4)throw new q(`temporalPadding expects input tensor to be 4-D, but received a ${e.rank}-D tensor.`);if(t??=[[1,1],[1,1]],t.length!==2||t[0].length!==2||t[1].length!==2)throw new q("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(n??=ob(),n!==`channelsLast`&&n!==`channelsFirst`)throw new q(`Unknown data format: ${n}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let r;return r=n===`channelsFirst`?[[0,0],[0,0],t[0],t[1]]:[[0,0],t[0],t[1],[0,0]],Ld(e,r)})}var ET=class extends mx{constructor(e){if(e??={},super(e),this.dataFormat=e.dataFormat==null?ob():e.dataFormat,e.padding==null)this.padding=[[1,1],[1,1]];else if(typeof e.padding==`number`)this.padding=[[e.padding,e.padding],[e.padding,e.padding]];else{if(e.padding=e.padding,e.padding.length!==2)throw new q(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${e.padding.length} array.`);let t,n;if(typeof e.padding[0]==`number`)t=[e.padding[0],e.padding[0]],n=[e.padding[1],e.padding[1]];else{if(e.padding=e.padding,e.padding[0].length!==2)throw new q(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${e.padding[0].length} array.`);if(t=e.padding[0],e.padding[1].length!==2)throw new q(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${e.padding[1].length} array.`);n=e.padding[1]}this.padding=[t,n]}this.inputSpec=[new lx({ndim:4})]}computeOutputShape(e){e=nx(e);let t,n;return this.dataFormat===`channelsFirst`?(t=e[2]!=null&&e[2]>=0?e[2]+this.padding[0][0]+this.padding[0][1]:null,n=e[3]!=null&&e[3]>=0?e[3]+this.padding[1][0]+this.padding[1][1]:null,[e[0],e[1],t,n]):(t=e[1]!=null&&e[1]>=0?e[1]+this.padding[0][0]+this.padding[0][1]:null,n=e[2]!=null&&e[2]>=0?e[2]+this.padding[1][0]+this.padding[1][1]:null,[e[0],t,n,e[3]])}call(e,t){return I(()=>TT(Y(e),this.padding,this.dataFormat))}getConfig(){let e={padding:this.padding,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}};ET.className=`ZeroPadding2D`,K(ET);function DT(e,t,n,r,i,a){return I(()=>{Vy(i),Wy(a),Uy(r),n??=[1,1],r??=`valid`,i??=ob(),a??=`max`,e=gw(e,i);let o,s=r===`same`?`same`:`valid`;return o=a===`max`?pd(e,t,n,s):tc(e,t,n,s),i===`channelsFirst`&&(o=jp(o,[0,3,1,2])),o})}function OT(e,t,n,r,i,a){return I(()=>{Vy(i),Wy(a),Uy(r),n??=[1,1,1],r??=`valid`,i??=ob(),a??=`max`,e=_w(e,i);let o,s=r===`same`?`same`:`valid`;return o=a===`max`?hd(e,t,n,s):rc(e,t,n,s),i===`channelsFirst`&&(o=jp(o,[0,4,1,2,3])),o})}var kT=class extends mx{constructor(e){if(e.poolSize??=2,super(e),typeof e.poolSize==`number`)this.poolSize=[e.poolSize];else if(Array.isArray(e.poolSize)&&e.poolSize.length===1&&typeof e.poolSize[0]==`number`)this.poolSize=e.poolSize;else throw new q(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.poolSize)}`);if(Dy(this.poolSize,`poolSize`),e.strides==null)this.strides=this.poolSize;else if(typeof e.strides==`number`)this.strides=[e.strides];else if(Array.isArray(e.strides)&&e.strides.length===1&&typeof e.strides[0]==`number`)this.strides=e.strides;else throw new q(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.strides)}`);Dy(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,Uy(this.padding),this.inputSpec=[new lx({ndim:3})]}computeOutputShape(e){e=nx(e);let t=mw(e[1],this.poolSize[0],this.padding,this.strides[0]);return[e[0],t,e[2]]}call(e,t){return I(()=>(this.invokeCallHook(e,t),e=cb(Y(e),2),rp(this.poolingFunction(Y(e),[this.poolSize[0],1],[this.strides[0],1],this.padding,`channelsLast`),[2])))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides},t=super.getConfig();return Object.assign(e,t),e}},AT=class extends kT{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return Vy(i),Uy(r),DT(e,t,n,r,i,`max`)}};AT.className=`MaxPooling1D`,K(AT);var jT=class extends kT{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return Vy(i),Uy(r),DT(e,t,n,r,i,`avg`)}};jT.className=`AveragePooling1D`,K(jT);var MT=class extends mx{constructor(e){if(e.poolSize??=[2,2],super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==2)throw new q(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides];Dy(this.poolSize,`poolSize`),Dy(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,Vy(this.dataFormat),Uy(this.padding),this.inputSpec=[new lx({ndim:4})]}computeOutputShape(e){e=nx(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2];return t=mw(t,this.poolSize[0],this.padding,this.strides[0]),n=mw(n,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat===`channelsFirst`?[e[0],e[1],t,n]:[e[0],t,n,e[3]]}call(e,t){return I(()=>(this.invokeCallHook(e,t),this.poolingFunction(Y(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},NT=class extends MT{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return Vy(i),Uy(r),DT(e,t,n,r,i,`max`)}};NT.className=`MaxPooling2D`,K(NT);var PT=class extends MT{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return Vy(i),Uy(r),DT(e,t,n,r,i,`avg`)}};PT.className=`AveragePooling2D`,K(PT);var FT=class extends mx{constructor(e){if(e.poolSize??=[2,2,2],super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==3)throw new q(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides,e.strides];Dy(this.poolSize,`poolSize`),Dy(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,Vy(this.dataFormat),Uy(this.padding),this.inputSpec=[new lx({ndim:5})]}computeOutputShape(e){e=nx(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2],r=this.dataFormat===`channelsFirst`?e[4]:e[3];return t=mw(t,this.poolSize[0],this.padding,this.strides[0]),n=mw(n,this.poolSize[1],this.padding,this.strides[1]),r=mw(r,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat===`channelsFirst`?[e[0],e[1],t,n,r]:[e[0],t,n,r,e[4]]}call(e,t){return I(()=>(this.invokeCallHook(e,t),this.poolingFunction(Y(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},IT=class extends FT{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return Vy(i),Uy(r),OT(e,t,n,r,i,`max`)}};IT.className=`MaxPooling3D`,K(IT);var LT=class extends FT{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return Vy(i),Uy(r),OT(e,t,n,r,i,`avg`)}};LT.className=`AveragePooling3D`,K(LT);var RT=class extends mx{constructor(e){super(e),this.inputSpec=[new lx({ndim:3})]}computeOutputShape(e){return[e[0],e[2]]}call(e,t){throw new J}},zT=class extends RT{constructor(e){super(e||{})}call(e,t){return I(()=>yd(Y(e),1))}};zT.className=`GlobalAveragePooling1D`,K(zT);var BT=class extends RT{constructor(e){super(e||{})}call(e,t){return I(()=>Gl(Y(e),1))}};BT.className=`GlobalMaxPooling1D`,K(BT);var VT=class extends mx{constructor(e){super(e),this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,Vy(this.dataFormat),this.inputSpec=[new lx({ndim:4})]}computeOutputShape(e){return e=e,this.dataFormat===`channelsLast`?[e[0],e[3]]:[e[0],e[1]]}call(e,t){throw new J}getConfig(){let e={dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},HT=class extends VT{call(e,t){return I(()=>{let t=Y(e);return this.dataFormat===`channelsLast`?yd(t,[1,2]):yd(t,[2,3])})}};HT.className=`GlobalAveragePooling2D`,K(HT);var UT=class extends VT{call(e,t){return I(()=>{let t=Y(e);return this.dataFormat===`channelsLast`?Gl(t,[1,2]):Gl(t,[2,3])})}};UT.className=`GlobalMaxPooling2D`,K(UT);var WT=class extends mx{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return this.layer==null?!1:this.layer.trainable}set trainable(e){this.layer!=null&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){let e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},t=super.getConfig();return Object.assign(e,t),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,t,n={}){let r=t.layer,i=$x(r,n);delete t.layer;let a={layer:i};return Object.assign(a,t),new e(a)}},GT=class extends WT{constructor(e){super(e),this.supportsMasking=!0}build(e){if(e=nx(e),e.length<3)throw new q(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(e)}`);this.inputSpec=[{shape:e}];let t=[e[0]].concat(e.slice(2));this.layer.built||(this.layer.build(t),this.layer.built=!0),super.build(e)}computeOutputShape(e){e=nx(e);let t=[e[0]].concat(e.slice(2)),n=this.layer.computeOutputShape(t),r=e[1];return[n[0],r].concat(n.slice(1))}call(e,t){return I(()=>(e=Y(e),Fw((e,n)=>[Y(this.layer.call(e,t)),[]],e,[],!1,null,null,!1,!0)[1]))}};GT.className=`TimeDistributed`,K(GT);function KT(e){Ty(zy,`BidirectionalMergeMode`,e)}var qT=`concat`,JT=class extends WT{constructor(e){super(e);let t=e.layer.getConfig(),n={};n.className=e.layer.getClassName(),n.config=t,this.forwardLayer=$x(n),t.goBackwards=t.goBackwards!==!0;let r={};if(r.className=e.layer.getClassName(),r.config=t,this.backwardLayer=$x(r),this.forwardLayer.name=`forward_`+this.forwardLayer.name,this.backwardLayer.name=`backward_`+this.backwardLayer.name,this.mergeMode=e.mergeMode===void 0?qT:e.mergeMode,KT(this.mergeMode),e.weights)throw new J(`weights support is not implemented for Bidirectional layer yet.`);this._stateful=e.layer.stateful,this.returnSequences=e.layer.returnSequences,this.returnState=e.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=e.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(e){this._trainable=e,this.forwardLayer!=null&&(this.forwardLayer.trainable=e),this.backwardLayer!=null&&(this.backwardLayer.trainable=e)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(e){let t=e.length,n=Math.floor(t/2);this.forwardLayer.setWeights(e.slice(0,n)),this.backwardLayer.setWeights(e.slice(n))}computeOutputShape(e){let t=this.forwardLayer.computeOutputShape(e);Array.isArray(t)&&Array.isArray(t[0])||(t=[t]),t=t;let n,r,i;return this.returnState&&(i=t.slice(1)),n=t[0],n=n,this.mergeMode===`concat`?(n[n.length-1]*=2,r=[n]):r=this.mergeMode==null?[n,n.slice()]:[n],this.returnState?this.mergeMode==null?r.concat(i).concat(i.slice()):[n].concat(i,i.slice()):py(r)}apply(e,t){let n=t==null?null:t.initialState,r=t==null?null:t.constants;t??={};let i=Pw(e,n,r,this.numConstants);if(e=i.inputs,n=i.initialState,r=i.constants,Array.isArray(e)&&(n=e.slice(1),e=e[0]),(n==null||n.length===0)&&r==null)return super.apply(e,t);let a=[],o=[];if(n!=null){let e=n.length;if(e%2>0)throw new q("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");t.initialState=n,a.push(...n);let r=n.map(e=>new lx({shape:e.shape}));this.forwardLayer.stateSpec=r.slice(0,e/2),this.backwardLayer.stateSpec=r.slice(e/2),o.push(...r)}if(r!=null)throw new J(`Support for constants in Bidirectional layers is not implemented yet.`);let s=a[0]instanceof ux;for(let e of a)if(e instanceof ux!==s)throw new q(`The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors`);if(s){let n=[e].concat(a),r=this.inputSpec.concat(o),i=this.inputSpec;this.inputSpec=r;let s=super.apply(n,t);return this.inputSpec=i,s}else return super.apply(e,t)}call(e,t){return I(()=>{let n=t.initialState,r,i;if(n==null)r=this.forwardLayer.call(e,t),i=this.backwardLayer.call(e,t);else{let a=n.slice(0,n.length/2),o=n.slice(n.length/2);r=this.forwardLayer.call(e,Object.assign(t,{initialState:a})),i=this.backwardLayer.call(e,Object.assign(t,{initialState:o}))}let a;this.returnState&&(Array.isArray(r)&&(a=r.slice(1).concat(i.slice(1))),r=r[0],i=i[0]),this.returnSequences&&(i=yf(i,1));let o;return this.mergeMode===`concat`?o=hb([r,i]):this.mergeMode===`sum`?o=z(r,i):this.mergeMode===`ave`?o=V(.5,z(r,i)):this.mergeMode===`mul`?o=V(r,i):this.mergeMode??(o=[r,i]),this.returnState?this.mergeMode==null?o.concat(a):[o].concat(a):o})}resetStates(e){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(e){qy(this.forwardLayer.name,()=>{this.forwardLayer.build(e)}),qy(this.backwardLayer.name,()=>{this.backwardLayer.build(e)}),this.built=!0}computeMask(e,t){Array.isArray(t)&&(t=t[0]);let n;if(n=this.returnSequences?this.mergeMode==null?[t,t]:t:this.mergeMode==null?[null,null]:null,this.returnState){let e=this.forwardLayer.states.map(e=>null);return Array.isArray(n)?n.concat(e).concat(e):[n].concat(e,e)}else return n}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(e),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(e)}getConfig(){let e={mergeMode:this.mergeMode},t=super.getConfig();return Object.assign(e,t),e}static fromConfig(e,t){let n=$x(t.layer);if(delete t.layer,t.numConstants!=null)throw new J(`Deserialization of a Bidirectional layer with numConstants present is not supported yet.`);let r=t;return r.layer=n,new e(r)}};JT.className=`Bidirectional`,K(JT);var YT=class extends mx{constructor(e){super(e),this.scale=e.scale,e.offset?this.offset=e.offset:this.offset=0}getConfig(){let e={scale:this.scale,offset:this.offset},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return I(()=>(e=Y(e),e.dtype!==`float32`&&(e=sb(e,`float32`)),z(V(e,this.scale),this.offset)))}};YT.className=`Rescaling`,K(YT);var{resizeBilinear:XT,cropAndResize:ZT}=Gm,QT=class extends mx{constructor(e){super(e),this.height=e.height,this.width=e.width}centerCrop(e,t,n,r,i,a,o,s){return I(()=>{let c,l=!1,u=[t/a,n/o,(r+t)/a,(i+n)/o],d=[];e.rank===3?(l=!0,c=ap([e])):c=e;for(let e=0;e<c.shape[0];e++)d.push(u);let f=Ha(d,[d.length,4]),p=lf(0,d.length,1,`int32`),m=ZT(c,f,p,[r,i],`nearest`);return sb(l?Y(Dp(m)):m,s)})}upsize(e,t,n,r){return I(()=>sb(XT(e,[t,n]),r))}call(e,t){return I(()=>{let t=Y(e),n=t.dtype,r=t.shape,i=r[r.length-3],a=r[r.length-2],o=0;i!==this.height&&(o=Math.floor((i-this.height)/2));let s=0;return a!==this.width&&(s=Math.floor((a-this.width)/2),s===0&&(s=1)),o>=0&&s>=0?this.centerCrop(t,o,s,this.height,this.width,i,a,n):this.upsize(e,this.height,this.width,n)})}getConfig(){let e={height:this.height,width:this.width},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=nx(e);let t=e.length-3,n=e.length-2;return e[t]=this.height,e[n]=this.width,e}};QT.className=`CenterCrop`,K(QT);function $T(e,t,n,r){let i=Y(e);if(i.dtype!==`int32`&&(i=sb(i,`int32`)),t===`int`)return i;let a=i.shape;if(i.rank===0&&(i=uu(i,-1)),t===`oneHot`&&i.shape[i.shape.length-1]!==1&&(i=uu(i,-1)),i.rank>2)throw new q(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${a} which would result in output rank ${i.rank}.`);let o=[`multiHot`,`oneHot`].includes(t),s=i,c;if(c=r!==void 0&&t===`count`?dl(s,r,n,o):dl(s,[],n,o),t!==`tfIdf`)return c;if(r)return V(c,r);throw new q(`When outputMode is 'tfIdf', weights must be provided.`)}var eE=class extends mx{constructor(e){super(e),this.numTokens=e.numTokens,e.outputMode?this.outputMode=e.outputMode:this.outputMode=`multiHot`}getConfig(){let e={numTokens:this.numTokens,outputMode:this.outputMode},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){return e=nx(e),e==null?[this.numTokens]:this.outputMode===`oneHot`&&e[e.length-1]!==1?(e.push(this.numTokens),e):(e[e.length-1]=this.numTokens,e)}call(e,t){return I(()=>{e=Y(e),e.dtype!==`int32`&&(e=sb(e,`int32`));let n;if(t.countWeights!==void 0){if(this.outputMode!==`count`)throw new q(`countWeights is not used when outputMode !== count.
              Received countWeights=${t.countWeights}`);n=Y(t.countWeights)}let r=Gl(e),i=ql(e),a=Su(this.numTokens,r).bufferSync().get(0),o=wu(i,0).bufferSync().get(0);if(!(a&&o))throw new q(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return $T(e,this.outputMode,this.numTokens,n)})}};eE.className=`CategoryEncoding`,K(eE);var tE=new Set([`bilinear`,`nearest`]),nE=class extends mx{constructor(e){if(super(e),this.height=e.height,this.width=e.width,e.interpolation)if(tE.has(e.interpolation))this.interpolation=e.interpolation;else throw new q(`Invalid interpolation parameter: ${e.interpolation} is not implemented`);else this.interpolation=`bilinear`;this.cropToAspectRatio=!!e.cropToAspectRatio}computeOutputShape(e){e=nx(e);let t=e[2];return[this.height,this.width,t]}getConfig(){let e={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return I(()=>{let t=[this.height,this.width];if(this.interpolation===`bilinear`)return Gm.resizeBilinear(e,t,!this.cropToAspectRatio);if(this.interpolation===`nearest`)return Gm.resizeNearestNeighbor(e,t,!this.cropToAspectRatio);throw Error(`Interpolation is ${this.interpolation} but only ${[...tE]} are supported`)})}};nE.className=`Resizing`,K(nE);var rE=class{constructor(e){this.seed=e}next(){if(this.seed!==void 0)return this.seed++}};rE.className=`RandomSeed`;var iE=class extends mx{constructor(e){super(e),this.randomGenerator=new rE(e.seed)}getConfig(){let e={seed:this.randomGenerator.seed},t=super.getConfig();return Object.assign(e,t),e}};iE.className=`BaseRandomLayer`;var aE=new Set([`bilinear`,`nearest`]),oE=class extends iE{constructor(e){super(e);let{factor:t,interpolation:n=`bilinear`}=e;if(this.factor=t,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new q(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new q(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new q(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(n)if(aE.has(n))this.interpolation=n;else throw new q(`Invalid interpolation parameter: ${n} is not implemented`)}getConfig(){let e={factor:this.factor,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=nx(e);let t=e[2];return[this.imgHeight,-1,t]}call(e,t){return I(()=>{let t=Y(e);this.imgHeight=t.shape[t.shape.length-3];let n=t.shape[t.shape.length-2];this.widthFactor=cf([1],1+this.widthLower,1+this.widthUpper,`float32`,this.randomGenerator.next());let r=this.widthFactor.dataSync()[0]*n;r=Math.round(r);let i=[this.imgHeight,r];switch(this.interpolation){case`bilinear`:return Gm.resizeBilinear(e,i);case`nearest`:return Gm.resizeNearestNeighbor(e,i);default:throw Error(`Interpolation is ${this.interpolation}
          but only ${[...aE]} are supported`)}})}};oE.className=`RandomWidth`,K(oE);function sE(e){return new Cw(e)}function cE(e){return new Qw(e)}function lE(e){return new Xw(e)}function uE(e){return new $w(e)}function dE(e){return new CT(e)}function fE(e){return new NT(e)}j().registerFlag(`KEEP_INTERMEDIATE_TENSORS`,()=>!1,e=>{e&&console.warn(`Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.`)});var pE;(function(e){e[e.DT_INVALID=0]=`DT_INVALID`,e[e.DT_FLOAT=1]=`DT_FLOAT`,e[e.DT_DOUBLE=2]=`DT_DOUBLE`,e[e.DT_INT32=3]=`DT_INT32`,e[e.DT_UINT8=4]=`DT_UINT8`,e[e.DT_INT16=5]=`DT_INT16`,e[e.DT_INT8=6]=`DT_INT8`,e[e.DT_STRING=7]=`DT_STRING`,e[e.DT_COMPLEX64=8]=`DT_COMPLEX64`,e[e.DT_INT64=9]=`DT_INT64`,e[e.DT_BOOL=10]=`DT_BOOL`,e[e.DT_QINT8=11]=`DT_QINT8`,e[e.DT_QUINT8=12]=`DT_QUINT8`,e[e.DT_QINT32=13]=`DT_QINT32`,e[e.DT_BFLOAT16=14]=`DT_BFLOAT16`,e[e.DT_QINT16=15]=`DT_QINT16`,e[e.DT_QUINT16=16]=`DT_QUINT16`,e[e.DT_UINT16=17]=`DT_UINT16`,e[e.DT_COMPLEX128=18]=`DT_COMPLEX128`,e[e.DT_HALF=19]=`DT_HALF`,e[e.DT_RESOURCE=20]=`DT_RESOURCE`,e[e.DT_VARIANT=21]=`DT_VARIANT`,e[e.DT_UINT32=22]=`DT_UINT32`,e[e.DT_UINT64=23]=`DT_UINT64`,e[e.DT_FLOAT_REF=101]=`DT_FLOAT_REF`,e[e.DT_DOUBLE_REF=102]=`DT_DOUBLE_REF`,e[e.DT_INT32_REF=103]=`DT_INT32_REF`,e[e.DT_UINT8_REF=104]=`DT_UINT8_REF`,e[e.DT_INT16_REF=105]=`DT_INT16_REF`,e[e.DT_INT8_REF=106]=`DT_INT8_REF`,e[e.DT_STRING_REF=107]=`DT_STRING_REF`,e[e.DT_COMPLEX64_REF=108]=`DT_COMPLEX64_REF`,e[e.DT_INT64_REF=109]=`DT_INT64_REF`,e[e.DT_BOOL_REF=110]=`DT_BOOL_REF`,e[e.DT_QINT8_REF=111]=`DT_QINT8_REF`,e[e.DT_QUINT8_REF=112]=`DT_QUINT8_REF`,e[e.DT_QINT32_REF=113]=`DT_QINT32_REF`,e[e.DT_BFLOAT16_REF=114]=`DT_BFLOAT16_REF`,e[e.DT_QINT16_REF=115]=`DT_QINT16_REF`,e[e.DT_QUINT16_REF=116]=`DT_QUINT16_REF`,e[e.DT_UINT16_REF=117]=`DT_UINT16_REF`,e[e.DT_COMPLEX128_REF=118]=`DT_COMPLEX128_REF`,e[e.DT_HALF_REF=119]=`DT_HALF_REF`,e[e.DT_RESOURCE_REF=120]=`DT_RESOURCE_REF`,e[e.DT_VARIANT_REF=121]=`DT_VARIANT_REF`,e[e.DT_UINT32_REF=122]=`DT_UINT32_REF`,e[e.DT_UINT64_REF=123]=`DT_UINT64_REF`})(pE||={});var mE;(function(e){(function(e){e[e.LEGACY=0]=`LEGACY`,e[e.V1=1]=`V1`,e[e.V2=2]=`V2`})(e.CheckpointFormatVersion||={})})(mE||={});function hE(e,t){return gE(e,t)}function gE(e,t,n=new Map,r=new Set){if(e==null)return null;if(typeof Blob==`function`&&e instanceof Blob)return e.slice();if(r.has(e))throw Error(`Circular references are not supported.`);if(n.has(e))return n.get(e);let i=t(e);if(i.recurse&&i.value!==null)throw Error(`A deep map function may not return both a value and recurse=true.`);if(!i.recurse)return n.set(e,i.value),i.value;if(bE(e)){let i=Array.isArray(e)?[]:{};r.add(e);for(let a in e){let o=e[a];i[a]=gE(o,t,n,r)}return r.delete(e),e.__proto__&&(i.__proto__=e.__proto__),i}else throw Error(`Can't recurse into non-iterable type: ${e}`)}function _E(e,t=yE){return vE(e,t)}function vE(e,t,n=new Set){let r=e[0];if(n.has(r))throw Error(`Circular references are not supported.`);let i=t(e);if(i.recurse&&i.value!==null)throw Error(`A deep zip function may not return both a value and recurse=true.`);if(!i.recurse)return i.value;if(bE(r)){let i=Array.isArray(r)?[]:{};n.add(r);for(let a in r)i[a]=vE(e.map(e=>e[a]),t,n);return n.delete(r),i}else throw Error(`Can't recurse into non-iterable type: ${r}`)}function yE(e){return e===null?null:bE(e[0])?{value:null,recurse:!0}:{value:e,recurse:!1}}function bE(e){let t=!1;if(j().get(`IS_BROWSER`))t=e instanceof TextDecoder;else{let{StringDecoder:n}=Xo();t=e instanceof n}return e!=null&&!ArrayBuffer.isView(e)&&(Array.isArray(e)||typeof e==`object`&&!(e instanceof oa)&&!(e instanceof Promise)&&!t)}function xE(e){return e==null||SE(e)||Array.isArray(e)||typeof e==`object`&&e instanceof oa||zi(e)}function SE(e){return e===null||typeof e!=`object`&&typeof e!=`function`}function CE(e){return hE(e,wE)}function wE(e){return e instanceof oa?{value:e.clone(),recurse:!1}:bE(e)?{value:null,recurse:!0}:{value:e,recurse:!1}}var TE=class{constructor(e){if(this.capacity=e,this.begin=0,this.end=0,e==null)throw RangeError(`Can't create a ring buffer of unknown capacity.`);if(e<1)throw RangeError(`Can't create ring buffer of capacity < 1.`);this.data=Array(e),this.doubledCapacity=2*e}wrap(e){for(;e<0;)e+=this.doubledCapacity;return e%this.doubledCapacity}get(e){if(e<0)throw RangeError(`Can't get item at a negative index.`);return this.data[e%this.capacity]}set(e,t){if(e<0)throw RangeError(`Can't set item at a negative index.`);this.data[e%this.capacity]=t}length(){let e=this.end-this.begin;return e<0&&(e=this.doubledCapacity+e),e}isFull(){return this.length()===this.capacity}isEmpty(){return this.length()===0}push(e){if(this.isFull())throw RangeError(`Ring buffer is full.`);this.set(this.end,e),this.end=this.wrap(this.end+1)}pushAll(e){for(let t of e)this.push(t)}pop(){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);this.end=this.wrap(this.end-1);let e=this.get(this.end);return this.set(this.end,void 0),e}unshift(e){if(this.isFull())throw RangeError(`Ring buffer is full.`);this.begin=this.wrap(this.begin-1),this.set(this.begin,e)}shift(){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);let e=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),e}shuffleExcise(e){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);let t=this.wrap(this.begin+e),n=this.get(t);return this.set(t,this.pop()),n}},EE=class e extends TE{constructor(){super(e.INITIAL_CAPACITY)}isFull(){return!1}push(e){super.isFull()&&this.expand(),super.push(e)}unshift(e){super.isFull()&&this.expand(),super.unshift(e)}expand(){let e=this.capacity*2,t=Array(e),n=this.length();for(let e=0;e<n;e++)t[e]=this.get(this.wrap(this.begin+e));this.data=t,this.capacity=e,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=n}};EE.INITIAL_CAPACITY=32;function DE(e){return new jE(e)}function OE(e){return new ME(e)}function kE(e,t){return new UE(e,t)}var AE=class{async toArray(){let e=[],t=await this.next();for(;!t.done;)e.push(t.value),t=await this.next();return e}async toArrayForTest(){let e=this.prefetch(100),t=[],n=await e.next();for(;!n.done;)t.push(n.value),n=await e.next();return t}async resolveFully(){let e=await this.next();for(;!e.done;)e=await this.next()}async resolveWhile(e){let t=await this.next(),n=e(t.value);for(;!t.done&&n;)t=await this.next(),n=e(t.value)}handleErrors(e){return new zE(this,e)}filter(e){return new LE(this,e)}map(e){return new RE(this,e)}mapAsync(e){return new BE(this,e)}serialMapAsync(e){return new BE(this,e).serial()}flatmap(e){return new HE(this,e)}async forEachAsync(e){return this.map(e).resolveFully()}async serialForEach(e){return this.serialMapAsync(e).resolveWhile(e=>e===!0)}rowMajorBatch(e,t=!0){return new IE(this,e,t)}columnMajorBatch(e,t=!0,n=yE){return this.rowMajorBatch(e,t).map(e=>_E(e,n))}concatenate(e,t){return new UE(DE([this,e]),t)}take(e){return e<0||e==null?this:new FE(this,e)}skip(e){return e<0||e==null?this:new PE(this,e)}prefetch(e){return new GE(this,e)}shuffle(e,t){return new KE(this,e,t)}serial(){return new NE(this)}},jE=class extends AE{constructor(e){super(),this.items=e,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};let e=this.items[this.trav];return this.trav++,{value:CE(e),done:!1}}},ME=class extends AE{constructor(e){super(),this.nextFn=e}summary(){return`Function call`}async next(){try{return this.nextFn()}catch(e){throw e.message=`Error thrown while iterating through a dataset: ${e.message}`,e}}},NE=class extends AE{constructor(e){super(),this.upstream=e,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Serial`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){return this.upstream.next()}},PE=class extends AE{constructor(e,t){super(),this.upstream=e,this.maxCount=t,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Skip`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.count++<this.maxCount;){let e=await this.upstream.next();if(e.done)return e;L(e.value)}return this.upstream.next()}},FE=class extends AE{constructor(e,t){super(),this.upstream=e,this.maxCount=t,this.count=0}summary(){return`${this.upstream.summary()} -> Take`}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}},IE=class extends AE{constructor(e,t,n=!0){super(),this.upstream=e,this.batchSize=t,this.enableSmallLastBatch=n,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> RowMajorBatch`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){let e=[];for(;e.length<this.batchSize;){let t=await this.upstream.next();if(t.done)return this.enableSmallLastBatch&&e.length>0?{value:e,done:!1}:{value:null,done:!0};e.push(t.value)}return{value:e,done:!1}}},LE=class extends AE{constructor(e,t){super(),this.upstream=e,this.predicate=t,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Filter`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;){let e=await this.upstream.next();if(e.done||this.predicate(e.value))return e;L(e.value)}}},RE=class extends AE{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> Map`}async next(){let e=await this.upstream.next();if(e.done)return{value:null,done:!0};let t=ba(e.value),n=this.transform(e.value),r=ba(n);for(let e of t)ya(e,r)||e.dispose();return{value:n,done:!1}}},zE=class extends AE{constructor(e,t){super(),this.upstream=e,this.handler=t,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> handleErrors`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;)try{return await this.upstream.next()}catch(e){if(!this.handler(e))return{value:null,done:!0}}}},BE=class extends AE{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> AsyncMap`}async next(){let e=await this.upstream.next();if(e.done)return{value:null,done:!0};let t=ba(e.value),n=await this.transform(e.value),r=ba(n);for(let e of t)ya(e,r)||e.dispose();return{value:n,done:!1}}},VE=class extends AE{constructor(){super(),this.outputQueue=new EE,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.outputQueue.length()===0;)if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}},HE=class extends VE{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> Flatmap`}async pump(){let e=await this.upstream.next();if(e.done)return!1;let t=ba(e.value),n=this.transform(e.value),r=ba(n);this.outputQueue.pushAll(n);for(let e of t)ya(e,r)||e.dispose();return!0}},UE=class extends AE{constructor(e,t){super(),this.baseErrorHandler=t,this.lastRead=null,this.iterator=null,this.moreIterators=e}summary(){return`TODO: fill in upstream of chained summaries -> Chained`}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(e){if(await e,this.iterator==null){let e=await this.moreIterators.next();if(e.done)return{value:null,done:!0};this.iterator=e.value,this.baseErrorHandler!=null&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}let t=await this.iterator.next();return t.done?(this.iterator=null,this.readFromChain(e)):t}},WE;(function(e){e[e.FAIL=0]=`FAIL`,e[e.SHORTEST=1]=`SHORTEST`,e[e.LONGEST=2]=`LONGEST`})(WE||={});var GE=class extends AE{constructor(e,t){super(),this.upstream=e,this.bufferSize=t,this.buffer=new TE(t)}summary(){return`${this.upstream.summary()} -> Prefetch`}refill(){for(;!this.buffer.isFull();){let e=this.upstream.next();this.buffer.push(e)}}next(){return this.refill(),this.buffer.shift()}},KE=class extends GE{constructor(e,t,n){super(e,t),this.upstream=e,this.windowSize=t,this.upstreamExhausted=!1,this.random=tf.alea(n||Ii().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}randomInt(e){return Math.floor(this.random()*e)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){for(this.upstreamExhausted||this.refill();!this.buffer.isEmpty();){let e=this.chooseIndex(),t=await this.buffer.shuffleExcise(e);if(t.done)this.upstreamExhausted=!0;else return this.refill(),t}return{value:null,done:!0}}},qE=class{constructor(){this.size=null}batch(e,t=!0){let n=this;O(e>0,()=>`batchSize needs to be positive, but it is
      ${e}`);let r;return r=this.size===1/0||this.size==null?this.size:t?Math.ceil(this.size/e):Math.floor(this.size/e),JE(async()=>(await n.iterator()).columnMajorBatch(e,t,YE),r)}concatenate(e){let t=this,n;return n=this.size===1/0||e.size===1/0?1/0:this.size!=null&&e.size!=null?this.size+e.size:null,JE(async()=>(await t.iterator()).concatenate(await e.iterator()),n)}filter(e){let t=this,n;return n=this.size===1/0?1/0:null,JE(async()=>(await t.iterator()).filter(t=>I(()=>e(t))),n)}async forEachAsync(e){return(await this.iterator()).forEachAsync(e)}map(e){let t=this;return JE(async()=>(await t.iterator()).map(t=>I(()=>e(t))),this.size)}mapAsync(e){let t=this;return JE(async()=>(await t.iterator()).mapAsync(e),this.size)}prefetch(e){if(e==null)throw RangeError("`Dataset.prefetch()` requires bufferSize to be specified.");let t=this;return JE(async()=>(await t.iterator()).prefetch(e),this.size)}repeat(e){let t=this,n;return n=this.size!=null&&e>0?this.size*e:e===0?0:this.size!=null&&(e===void 0||e<0)?1/0:null,JE(async()=>kE(OE(async()=>({value:await t.iterator(),done:!1})).take(e)),n)}skip(e){let t=this,n;return n=this.size!=null&&e>=0&&this.size>=e?this.size-e:this.size!=null&&(this.size<e||e===void 0||e<0)?0:null,JE(async()=>(await t.iterator()).skip(e),n)}shuffle(e,t,n=!0){if(e==null||e<0)throw this.size==null?RangeError("`Dataset.shuffle()` requires bufferSize to be specified."):RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`);let r=this,i=tf.alea(t||Ii().toString());return JE(async()=>{let t=i.int32();return n&&(t+=i.int32()),(await r.iterator()).shuffle(e,t.toString())},this.size)}take(e){let t=this,n;return n=this.size!=null&&this.size>e?e:this.size!=null&&this.size<=e?this.size:null,JE(async()=>(await t.iterator()).take(e),n)}async toArray(){if(this.size===1/0)throw Error(`Can not convert infinite data stream to array.`);return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw Error(`Can not convert infinite data stream to array.`);return(await this.iterator()).toArrayForTest()}};qE.MAX_BUFFER_SIZE=1e4;function JE(e,t=null){return new class extends qE{constructor(){super(...arguments),this.size=t}async iterator(){return e()}}}function YE(e){if(e===null)return null;let t=e[0];return xE(t)?{value:XE(e),recurse:!1}:{value:null,recurse:!0}}function XE(e){if(e.length===0)throw Error(`Can't make a batch of zero elements.`);return e[0]instanceof oa?ap(e):Ha(e)}function X(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{e!=null&&O(e.dtype!==`complex64`,()=>`${t} does not support complex64 tensors in the CPU backend.`)})}var ZE=kp,QE=class e extends fe{nextDataId(){return e.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new de(this,Ka())}write(e,t,n){this.firstUse&&(this.firstUse=!1,j().get(`IS_NODE`)&&ii(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));let r={id:this.nextDataId()};return this.data.set(r,{values:e,dtype:n,refCount:1}),r}makeTensorInfo(e,t,n){let r;if(t===`string`&&n!=null&&n.length>0&&Le(n[0])){let i=n.map(e=>Li(e));r=this.write(i,e,t)}else r=this.write(n,e,t);return{dataId:r,shape:e,dtype:t}}refCount(e){return this.data.has(e)?this.data.get(e).refCount:0}incRef(e){let t=this.data.get(e);t.refCount++}decRef(e){if(this.data.has(e)){let t=this.data.get(e);t.refCount--}}move(e,t,n,r,i){this.data.set(e,{values:t,dtype:r,refCount:i})}numDataIds(){return this.data.numDataIds()}async read(e){return this.readSync(e)}readSync(e){let{dtype:t,complexTensorInfos:n}=this.data.get(e);return t===`complex64`?dg(this.readSync(n.real.dataId),this.readSync(n.imag.dataId)):Ge(this.data.get(e).values,t)}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype===`string`)try{let n=t.map(e=>Ri(e));return es(e.shape,e.dtype,n)}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return es(e.shape,e.dtype,t)}makeOutput(e,t,n){return Ka().makeTensorFromTensorInfo(this.makeTensorInfo(t,n,e),this)}disposeData(e,t=!1){if(this.data.has(e)){if(this.data.get(e).refCount--,!t&&this.data.get(e).refCount>0)return!1;let{complexTensorInfos:n}=this.data.get(e);n!=null&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(e)}return!0}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}async time(e){let t=Ii();return e(),{kernelMs:Ii()-t}}memory(){return{unreliable:!0,reasons:[`The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less.`]}}where(e){X([e],`where`);let t=this.readSync(e.dataId);return ZE(e.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}};QE.nextDataId=0;function $E(e){let t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}var eD={kernelName:`Abs`,backendName:`cpu`,kernelFunc:e=>{let{x:t}=e.inputs,n=e.backend;X(t,`abs`);let r=new Float32Array(k(t.shape)),i=n.data.get(t.dataId).values;return r=$E(i),n.makeOutput(r,t.shape,t.dtype)}};function tD(e){return(t,n,r,i,a)=>{let o=U(t,n),s=o.length,c=A(o),l=Ae(a,k(o)),u=t.length,d=n.length,f=A(t),p=A(n),m=vl(t,o),h=vl(n,o);if(m.length+h.length===0)for(let t=0;t<l.length;++t)l[t]=e(r[t%r.length],i[t%i.length]);else for(let t=0;t<l.length;++t){let n=Ze(t,s,c),a=n.slice(-u);m.forEach(e=>a[e]=0);let o=Xe(a,u,f),g=n.slice(-d);h.forEach(e=>g[e]=0);let _=Xe(g,d,p);l[t]=e(r[o],i[_])}return[l,o]}}function nD(e){let{inputs:t,backend:n}=e,{real:r,imag:i}=t,a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,s=n.makeTensorInfo(r.shape,`complex64`),c=n.data.get(s.dataId);return c.complexTensorInfos={real:n.makeTensorInfo(r.shape,`float32`,a),imag:n.makeTensorInfo(i.shape,`float32`,o)},s}var rD={kernelName:Nt,backendName:`cpu`,kernelFunc:nD};function iD(e,t,n=`float32`){if(n===`complex64`)return nD({inputs:{real:iD(e,t,`float32`),imag:iD(e,t,`float32`)},backend:e});let r=qe(k(t),n);return e.makeTensorInfo(t,n,r)}function aD(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var oD={kernelName:vn,backendName:`cpu`,kernelFunc:aD};function sD(e){let{inputs:t,backend:n}=e,{input:r}=t,i=n.data.get(r.dataId).complexTensorInfos.real,a=n.data.get(i.dataId).values;return n.makeTensorInfo(i.shape,i.dtype,a)}var cD={kernelName:ar,backendName:`cpu`,kernelFunc:sD};function lD(e,t,n,r){if(r===`int32`)return[t,`int32`,Int32Array.from(e)];if(r===`bool`){let r=Fi([0],n),[i,a]=tD((e,t)=>e===t?0:1)(t,[],e,r,`bool`);return[a,`bool`,i]}throw Error(`Error in Cast: failed to cast ${n} to ${r}`)}function uD(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dtype:a}=r;if(a===`complex64`){if(i.dtype===`complex64`)return aD({inputs:{x:i},backend:n});let e=iD(n,i.shape,i.dtype),t=uD({inputs:{x:i},backend:n,attrs:{dtype:`float32`}}),r=nD({inputs:{real:t,imag:e},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),r}if(i.dtype===`complex64`){let e=sD({inputs:{input:i},backend:n}),t=uD({inputs:{x:e},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(e),t}if(!Pe(i.dtype,a)){let e=aD({inputs:{x:i},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:a}}let o=n.data.get(i.dataId).values,[s,c,l]=lD(o,i.shape,i.dtype,a);return n.makeTensorInfo(s,c,l)}var dD={kernelName:At,backendName:`cpu`,kernelFunc:uD};function fD(e,t,n,r){return n==null?({inputs:n,backend:i})=>{let{a,b:o}=n,s=i;X([a,o],e);let c=s.data.get(a.dataId).values,l=s.data.get(o.dataId).values,u=a.dtype===`string`?qg(c):c,d=a.dtype===`string`?qg(l):l,f=r||a.dtype,[p,m]=t(a.shape,o.shape,u,d,f);return s.makeTensorInfo(m,f,p)}:({inputs:e,backend:i})=>{let{a,b:o}=e,s=i;if(a.dtype===`complex64`||o.dtype===`complex64`){let e=uD({inputs:{x:a},backend:s,attrs:{dtype:`complex64`}}),t=s.data.get(e.dataId),r=t.complexTensorInfos.real,i=t.complexTensorInfos.imag,c=s.data.get(r.dataId).values,l=s.data.get(i.dataId).values,u=uD({inputs:{x:o},backend:s,attrs:{dtype:`complex64`}}),d=s.data.get(u.dataId),f=d.complexTensorInfos.real,p=d.complexTensorInfos.imag,m=s.data.get(f.dataId).values,h=s.data.get(p.dataId).values,[g,_,v]=n(a.shape,o.shape,c,l,m,h),y=s.makeTensorInfo(v,`float32`,g),b=s.makeTensorInfo(v,`float32`,_),x=nD({inputs:{real:y,imag:b},backend:s});return s.disposeIntermediateTensorInfo(e),s.disposeIntermediateTensorInfo(u),s.disposeIntermediateTensorInfo(y),s.disposeIntermediateTensorInfo(b),x}else{let e=s.data.get(a.dataId).values,n=s.data.get(o.dataId).values,i=r||a.dtype,[c,l]=t(a.shape,o.shape,e,n,i);return s.makeTensorInfo(l,i,c)}}}function pD(e){return(t,n,r,i,a,o)=>{let s=U(t,n),c=k(s),l=s.length,u=A(s),d=Ae(`float32`,c),f=Ae(`float32`,c),p=vl(t,s),m=vl(n,s),h=dg(r,i),g=dg(a,o),_=t.length,v=A(t),y=n.length,b=A(n);if(p.length+m.length===0)for(let t=0;t<d.length;t++){let n=t%h.length,r=t%g.length,i=e(h[n*2],h[n*2+1],g[r*2],g[r*2+1]);d[t]=i.real,f[t]=i.imag}else for(let t=0;t<d.length;t++){let n=Ze(t,l,u),r=n.slice(-_);p.forEach(e=>r[e]=0);let i=Xe(r,_,v),a=n.slice(-y);m.forEach(e=>a[e]=0);let o=Xe(a,y,b),s=e(h[i*2],h[i*2+1],g[o*2],g[o*2+1]);d[t]=s.real,f[t]=s.imag}return[d,f,s]}}var mD=tD(((e,t)=>e+t)),hD=fD(`Add`,mD,pD(((e,t,n,r)=>({real:e+n,imag:t+r})))),gD={kernelName:`Add`,backendName:`cpu`,kernelFunc:hD};function _D(e,t,n,r,i){let a=k(r),o=qe(i,n);for(let n=0;n<e.length;n++){let r=e[n];if(r<0)throw Error(`Input x must be non-negative!`);r>=i||(a>0?o[r]+=t[n]:o[r]+=1)}return o}function vD(e,t,n,r=!1){let i=e.shape[0],a=e.shape[1],o=es([i,n],t.dtype);for(let s=0;s<i;s++)for(let i=0;i<a;i++){let a=e.get(s,i);if(a<0)throw Error(`Input x must be non-negative!`);a>=n||(r?o.set(1,s,a):t.size>0?o.set(o.get(s,a)+t.get(s,i),s,a):o.set(o.get(s,a)+1,s,a))}return o}var yD=tD(((e,t)=>e&t)),bD={kernelName:Dt,backendName:`cpu`,kernelFunc:fD(Dt,yD)};function xD(e){return(t,n,r)=>{let i=je(n,t.length);for(let n=0;n<t.length;++n)i[n]=e(t[n],r);return i}}function SD(e,t,n){return CD(e,xD(t),n)}function CD(e,t,n){return({inputs:r,attrs:i,backend:a})=>{let{x:o}=r;X(o,e);let s=a,c=s.data.get(o.dataId).values,l;if(o.dtype===`string`){if(!Array.isArray(c))throw Error(`String tensor's value was not an instance of Array`);l=qg(c)}else l=c;let u=n||o.dtype,d=t(l,u,i);return s.makeTensorInfo(o.shape,u,d)}}var wD=xD(e=>Math.ceil(e)),TD={kernelName:jt,backendName:`cpu`,kernelFunc:CD(jt,wD)};function ED(e,t,n,r){let i=je(n,k(t));if(r&&n!==`string`){let t=0;e.forEach(e=>{let n=k(e.shape);i.set(e.vals,t),t+=n})}else{let r=0;e.forEach(e=>{let a=n===`string`?qg(e.vals):e.vals,o=0;for(let n=0;n<e.shape[0];++n){let s=n*t[1]+r;for(let t=0;t<e.shape[1];++t)i[s+t]=a[o++]}r+=e.shape[1]})}return i}var DD=tD((e,t)=>+(e===t)),OD=fD(on,DD,null,`bool`),kD={kernelName:on,backendName:`cpu`,kernelFunc:OD},AD=xD(e=>Math.exp(e)),jD=CD(`Exp`,AD,`float32`),MD={kernelName:`Exp`,backendName:`cpu`,kernelFunc:jD},ND=xD(e=>Math.expm1(e)),PD={kernelName:cn,backendName:`cpu`,kernelFunc:CD(cn,ND)},FD=xD(e=>Math.floor(e)),ID={kernelName:dn,backendName:`cpu`,kernelFunc:CD(dn,FD)},LD=tD((e,t)=>Math.floor(e/t)),RD={kernelName:fn,backendName:`cpu`,kernelFunc:fD(fn,LD,null,`int32`)};function zD(e,t,n,r,i,a,o,s,c){let l=es([r,a],n);for(let n=0;n<r;n++){let r=[],u=0;for(let t=0;t<i;t++){let a=e[n*i+t];u+=a*o[t],r.push(a)}if(u<0||u>=c/a)throw Error(`Invalid indices: ${r} does not index into ${s}`);for(let e=0;e<a;e++)l.values[n*a+e]=t.get(...t.indexToLoc(u*a+e))}return l}function BD(e,t,n){let r=es(n,e.dtype);for(let n=0;n<r.size;++n){let i=r.indexToLoc(n).slice(),a=i[0],o=i[2],s=t.locToIndex([a,o]);i[2]=t.values[s];let c=e.locToIndex(i);0<=c&&c<e.values.length&&(r.values[n]=e.values[c])}return r}var VD=tD((e,t)=>+(e>t)),HD={kernelName:gn,backendName:`cpu`,kernelFunc:fD(gn,VD,null,`bool`)},UD=tD((e,t)=>+(e>=t)),WD={kernelName:_n,backendName:`cpu`,kernelFunc:fD(_n,UD,null,`bool`)},GD=tD((e,t)=>+(e<t)),KD={kernelName:Tn,backendName:`cpu`,kernelFunc:fD(Tn,GD,null,`bool`)},qD=tD((e,t)=>+(e<=t)),JD={kernelName:En,backendName:`cpu`,kernelFunc:fD(En,qD,null,`bool`)};function YD(e,t,n){let r=(t-e)/(n-1),i=qe(n,`float32`);i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+r;return i}var XD=xD(e=>Math.log(e)),ZD={kernelName:`Log`,backendName:`cpu`,kernelFunc:CD(`Log`,XD)};function QD(e,t,n,r){let i=Ae(r,k(n));for(let n=0;n<i.length;++n){let r=n*t,a=e[r];for(let n=0;n<t;++n){let t=e[r+n];(Number.isNaN(t)||t>a)&&(a=t)}i[n]=a}return i}var $D=tD(((e,t)=>Math.max(e,t))),eO={kernelName:Pn,backendName:`cpu`,kernelFunc:fD(Pn,$D)},tO=tD(((e,t)=>Math.min(e,t))),nO={kernelName:Vn,backendName:`cpu`,kernelFunc:fD(Vn,tO)},rO=tD(((e,t)=>e*t)),iO=fD(Wn,rO,pD(((e,t,n,r)=>({real:e*n-t*r,imag:e*r+t*n})))),aO={kernelName:Wn,backendName:`cpu`,kernelFunc:iO};function oO(e,t,n){return rO([],t,Ni(-1,n),e,n)}function sO(e){let{inputs:t,backend:n}=e,{x:r}=t;X(r,`neg`);let i=n.data.get(r.dataId).values,[a,o]=oO(i,r.shape,r.dtype);return n.makeTensorInfo(o,r.dtype,a)}var cO={kernelName:`Neg`,backendName:`cpu`,kernelFunc:sO},lO=tD(((e,t)=>e===t?0:1)),uO={kernelName:Gn,backendName:`cpu`,kernelFunc:fD(Gn,lO,null,`bool`)};function dO(e,t,n,r,i){let a=t.length,o=k(t),s=A(t),c=A(i),l=Ae(n,k(i));for(let t=0;t<o;++t){let n=Ze(t,a,s),i=Array(n.length);for(let e=0;e<i.length;e++)i[e]=n[r[e]];let o=Xe(i,a,c);l[o]=e[t]}return l}function fO(e){let{inputs:t,attrs:n,backend:r}=e,{x:i}=t,{perm:a}=n;X(i,`transpose`);let o=i.shape.length,s=Array(o);for(let e=0;e<s.length;e++)s[e]=i.shape[a[e]];let c=r.data.get(i.dataId).values,l=dO(c,i.shape,i.dtype,a,s);return{dataId:r.write(l,s,i.dtype),shape:s,dtype:i.dtype}}var pO={kernelName:qr,backendName:`cpu`,kernelFunc:fO};function mO(e,t,n,r){let[i,a]=Rl(e,r),o=ma(t,`int32`),s=qe(k(i),o),c=k(a);for(let e=0;e<s.length;++e){let t=e*c,r=1;for(let e=0;e<c;++e)r*=n[t+e];s[e]=r}return{outVals:s,outShape:i,outDtype:o}}function hO(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`prod`);let s=i.shape.length,c=Oe(a,i.shape),l=Vl(c,s),u=c,d=i,f=[];l!=null&&(d=fO({inputs:{x:i},backend:n,attrs:{perm:l}}),f.push(d),u=Ul(u.length,s));let p=n.data.get(d.dataId).values,{outVals:m,outShape:h,outDtype:g}=mO(d.shape,d.dtype,p,u),_=h;return o&&(_=zl(h,c)),f.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(_,g,m)}var gO={kernelName:er,backendName:`cpu`,kernelFunc:hO};function _O(e,t,n){e.forEach((e,r)=>{if(e<0||e>=n){let i=Ze(r,t.length,A(t)).join(`,`);throw Error(`indices[${i}] = ${e} is not in [0, ${n})`)}})}function vO(e,t){for(let n=0;n<e.length;++n){let r=e[n],i=n===e.length-1?t:e[n+1].length;if(r.length===0)throw Error(`Ragged splits may not be empty`);if(r[0]<0)throw Error(`Ragged splits must be non-negative`);if(r[r.length-1]>i)throw Error(`Ragged splits must not point past values`);for(let e=1;e<r.length;++e)if(r[e-1]>r[e])throw Error(`Ragged splits must be sorted in ascending order`)}}function yO(e,t,n,r){let i=[],a=0,o=t.length-1+n.length,s=Array(o).fill(null).map(()=>[0]);vO(n,r);let c=1;for(let e=0;e<t.length-1;++e){c*=t[e];let n=t[e+1];for(let t=1;t<c+1;++t)s[e].push(t*n)}for(let r=0;r<e.length;++r){let o=e[r],c=e[r]+1;for(let e=0;e<n.length;++e){let r=n[e],i=e+t.length-1;if(i>=0){let e=s[i],t=e[e.length-1]-r[o];for(let e=o;e<c;++e)s[i].push(r[e+1]+t)}o=r[o],c=r[c]}c!==o&&(i.push([o,c]),a+=c-o)}return{outSplits:s,valueSlices:i,numValues:a}}function bO(e){let t=[];for(let n=0;n<e.length;++n){let r=e[n].length,i=je(`int32`,r);t.push(i),e[n].forEach((e,t)=>i[t]=e)}return t}function xO(e,t){let n=e.slice(0,t);for(;n.length<t;)n.push(1);for(let r=t;r<e.length;r++)n[t-1]*=e[r];return n}function SO(e,t,n,r,i,a){let o=xO(t,2)[1],s=xO(a,2)[1],c=0;for(let t of n)for(let n=t[0];n<t[1];++n){for(let t=0;t<r;++t)i[c*s+t]=e[n*o+t];++c}}function CO(e,t,n,r,i){let a=t.slice();a[0]=i;let o=je(n,k(a)),s=e.length;return SO(e,t,r,s===0?0:s/t[0],o,a),[o,a]}function wO(e,t,n,r,i,a,o,s){if(e.length===0)throw Error(`paramsNestedSplits must be non empty`);if(t[0].length===0)throw Error(`Split tensors must not be scalars`);if(_O(a,o,t[0][0]-1),r.length===0)throw Error(`params.rank must be nonzero`);let c=r[0],{outSplits:l,valueSlices:u,numValues:d}=yO(a,o,e,c),f=bO(l),p=CO(n,r,i,u,d);return[f,p[0],p[1]]}var TO=2147483647;function EO(e,t,n,r,i,a,o){if(t.length>1)throw Error(`starts must be a scalar or vector`);if(i.length>1)throw Error(`limits must be a scalar or vector`);if(o.length>1)throw Error(`deltas must be a scalar or vector`);let s=t.length===0,c=i.length===0,l=o.length===0,u=[];s||u.push(t[0]),c||u.push(i[0]),l||u.push(o[0]);for(let e=1;e<u.length;++e)if(u[e]!==u[e-1])throw Error(`starts, limits, and deltas must have the same shape`);let d=u.length===0?1:u[0],f=je(`int32`,d+1);f[0]=0;for(let t=0;t<d;++t){let n=s?e[0]:e[t],i=c?r[0]:r[t],o=l?a[0]:a[t];if(o===0)throw Error(`Requires delta != 0`);let u;if(o>0&&i<n||o<0&&i>n)u=0;else if(u=Math.ceil(Math.abs((i-n)/o)),u>TO)throw Error(`Requires ((limit - start) / delta) <= ${TO}`);f[t+1]=f[t]+u}let p=f[d],m=je(n,p),h=0;for(let t=0;t<d;++t){let n=f[t+1]-f[t],r=s?e[0]:e[t],i=l?a[0]:a[t];for(let e=0;e<n;++e)m[h++]=r,r+=i}return[f,m]}var DO=Gh,OO=class e{constructor(e,t,n,r,i,a,o,s,c,l){this.shape=e,this.shapeShape=t,this.values=n,this.valuesShape=r,this.valuesDType=i,this.defaultValue=a,this.defaultValueShape=o,this.rowPartitionValues=s,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=qh(l),this.raggedRank=Jh(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===DO.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===DO.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(t){let n=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case DO.VALUE_ROWIDS:return e.getMaxWidthValueRowID(n);case DO.ROW_SPLITS:return e.getMaxWidthRowSplit(n);default:throw Error(`Cannot handle partition type ${DO[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(t===0||t===1)return 0;let n=0;for(let r=0;r<t-1;++r){let t=e[r+1]-e[r];t>n&&(n=t)}return n}static getMaxWidthValueRowID(e){let t=e.length;if(t===0)return 0;let n=0,r=e[0],i=0;for(let a=1;a<t;++a){let t=e[a];t!==r&&(r=t,i=Math.max(a-n,i),n=a)}return Math.max(t-n,i)}tensorShapeFromTensor(e,t,n=!0){if(t.length===0){if(e[0]===-1)return[];throw Error(`The only valid scalar shape tensor is the fully unknown shape specified as -1.`)}return AO(e,n)}calculateOutputSize(e){let t=this.valuesShape,n=this.defaultValueShape;Yh(n,t);let r=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=Kh(this.raggedRank,r,t);i[0]<0&&(i[0]=e);for(let e=1;e<=this.raggedRank;++e)i[e]<0&&(i[e]=this.getMaxWidth(e));return i}calculateFirstParentOutputIndex(e,t,n){let r=Math.min(e,n),i=[],a=0;for(let e=0;e<r;++e,a+=t)i.push(a);for(let t=r;t<e;++t)i.push(-1);return O(i.length===e,()=>`Final length of result must be equal to firstDimension.`),i}calculateOutputIndexRowSplit(e,t,n,r){let i=e.length,a=[];for(let o=0;o<i-1;++o){let i=e[o+1]-e[o],s=Math.min(r,i),c=t[o];c===-1&&(s=0);for(let e=0;e<s;++e)a.push(c),c+=n;for(let e=0;e<i-s;++e)a.push(-1)}if(i>0&&a.length!==e[i-1])throw Error(`Invalid row split size.`);return a}calculateOutputIndexValueRowID(e,t,n,r){let i=e.length,a=[];if(i===0)return[];let o=0,s=e[0];if(s>=t.length)throw Error(`Got currentValueRowId=${s}, which is not less than ${t.length}`);let c=t[s];a.push(c);for(let l=1;l<i;++l){let i=e[l];if(i===s)c>=0&&(++o,o<r?c+=n:c=-1);else{if(o=0,s=i,i>=t.length)throw Error(`Got nextValueRowId=${i} which is not less than ${t.length}`);c=t[i]}a.push(c)}if(a.length!==e.length)throw Error(`Invalid row ids.`);return a}calculateOutputIndex(e,t,n,r){let i=this.getRowPartitionTensor(e),a=this.getRowPartitionTypeByDimension(e);switch(a){case DO.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(i,t,n,r);case DO.ROW_SPLITS:if(i.length-1>t.length)throw Error(`Row partition size is greater than output size: ${i.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(i,t,n,r);default:throw Error(`Unsupported partition type: ${DO[a]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw Error(`No row_partition_types given.`);let t=this.rowPartitionTypes[0];switch(t){case DO.FIRST_DIM_SIZE:return e[0];case DO.VALUE_ROWIDS:throw Error(`Cannot handle VALUE_ROWIDS in first dimension.`);case DO.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw Error(`Cannot handle type ${DO[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw Error(`Invalid first partition input. Tensor requires at least one element.`);let e=this.getFirstDimensionSize(),t=this.calculateOutputSize(e),n=Array(this.raggedRank+1);n[n.length-1]=1;for(let e=n.length-2;e>=0;--e)n[e]=n[e+1]*t[e+1];let r=AO(t,!1),i=je(this.valuesDType,k(r));if(n[0]*t[0]>0){let a=this.calculateFirstParentOutputIndex(e,n[0],t[0]);for(let e=1;e<=this.raggedRank;++e)a=this.calculateOutputIndex(e-1,a,n[e],t[e]);this.setOutput(this.raggedRank,a,i,r)}return[r,i]}setOutput(e,t,n,r){if(n.length===0)return;let i=this.values,a=n,o=r.slice();o=o.slice(e+1);let s=k(o),c=t.length,l=this.defaultValue;if(l.length!==s&&l.length!==1){let e=this.defaultValueShape;I(()=>{l=Oc(H(l,e),o).dataSync()})}let u=0,d=0,f=0;for(let e=0;e<=c;++e){let r=e<c?t[e]:-1;if(r===f){++f;continue}if(d<f){let e=i.subarray(u*s);kO(a.subarray(d*s),e,(f-d)*s)}if(e>=c){let e=n.length;r=Math.floor(e/s)}if(r>f)if(this.defaultValue.length===1)a.subarray(f*s,r*s).fill(this.defaultValue[0]),f=r;else for(;r>f;)kO(a.slice(f*s),l,s),++f;r<0?(u=e+1,d=f):(u=e,d=f,f=d+1)}}};function kO(e,t,n){for(let r=0;r<n;r++)e[r]=t[r]}function AO(e,t){let n=[];for(let r of e){if(r<0){if(!t)throw Error(`Dimension ${r} must be >= 0`);if(r<-1)throw Error(`Dimension ${r} must be >= -1`);r=-1}n.push(r)}return n}function jO(e,t,n,r,i,a,o,s,c,l){return new OO(e,t,n,r,i,a,o,s,c,l).compute()}function MO(e,t,n,r){if(e===t||e<t&&n<0||t<e&&n>1)return qe(0,r);let i=qe(Math.abs(Math.ceil((t-e)/n)),r);t<e&&n===1&&(n=-1),i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+n;return i}var NO=xD(e=>1/Math.sqrt(e)),PO={kernelName:gr,backendName:`cpu`,kernelFunc:CD(gr,NO)};function FO(e,t,n,r,i,a,o,s,c,l){let u=[r/i,i],d=e.values,f=t.values;if(r===0)return es(n,t.dtype);let p=c instanceof ta?c:es(u,t.dtype);typeof c==`string`||typeof c==`number`?p.values.fill(c):typeof c==`boolean`&&p.values.fill(+c);for(let e=0;e<a;e++){let a=[],c=0;for(let t=0;t<o;t++){let n=d[e*o+t];a.push(n),c+=n*s[t]}if(c<0||c>=r/i)throw Error(`Invalid indices: ${a} does not index into ${n}`);for(let n=0;n<i;n++)l?p.values[c*i+n]+=f[e*i+n]:p.values[c*i+n]=t.rank===0?f[0]:f[e*i+n]}return p}var IO=xD(e=>1/(1+Math.exp(-e))),LO=SD(Tr,e=>1/(1+Math.exp(-e))),RO={kernelName:Tr,backendName:`cpu`,kernelFunc:LO};function zO(e,t,n,r,i){let a=Ph(r,t,n),o=k(n),s=A(r);if(a){let n=Fh(t,s);return i===`string`?e.slice(n,n+o):e.subarray(n,n+o)}let c=es(r,i,i===`string`?qg(e):e),l=es(n,i);for(let e=0;e<l.size;++e){let n=l.indexToLoc(e),r=n.map((e,n)=>e+t[n]);l.set(c.get(...r),...n)}return i===`string`?Jg(l.values):l.values}function BO(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,size:o}=r;X(i,`slice`);let[s,c]=Ih(i,a,o);Sh(i,s,c);let l=n.data.get(i.dataId).values,u=zO(l,s,c,i.shape,i.dtype);return n.makeTensorInfo(c,i.dtype,u)}var VO={kernelName:Sr,backendName:`cpu`,kernelFunc:BO};function HO(e,t,n,r,i,a,o){let s=t[0],c=a[0],l=Array(c),u=Array(s),d=t[1];if(c===0){if(s!==0)throw Error(Ag(s));let e=je(n,0),t=je(i,0);return[e,[0,d],t,l,u]}let f=!0,p=0,m=Array(c).fill(0);for(let t=0;t<s;++t){let n=e[t*d];if(n<0)throw Error(jg(t,n));if(n>=c)throw Error(Mg(t,n,c));++m[n],f&&=n>=p,p=n}let h=!0;for(let e=0;e<c;++e){let t=m[e]===0;l[e]=t,h&&=!t,m[e]=Math.max(m[e],1),e>0&&(m[e]+=m[e-1])}if(h&&f){let t=e,n=r;for(let e=0;e<s;++e)u[e]=e;return[t,[s,d],n,l,u]}else{let t=m[c-1],a=je(n,t*d),f=je(i,t),p=Array(c).fill(0);for(let t=0;t<s;++t){let n=e[t*d],i=p[n],o=(n===0?0:m[n-1])+i;p[n]++;for(let n=0;n<d;++n)a[o*d+n]=e[t*d+n];f[o]=r[t],u[t]=o}for(let e=0;e<c;++e)if(p[e]===0){let t=e===0?0:m[e-1];a[t*d+0]=e;for(let e=1;e<d;++e)a[t*d+e]=0;f[t]=o}return[a,[t,d],f,l,u]}}function UO(e,t,n,r,i){let a=k(r),o=t[0],s=i.length,c=[],l=1,u=-1;for(let e=0;e<s;++e){let t=i[e];if(t===-1){if(u!==-1)throw Error(Ng(u,e));u=e,c.push(1)}else{if(t<0)throw Error(Pg(e,t));l*=t,c.push(t)}}if(u!==-1){if(l<=0)throw Error(Fg());let e=Math.trunc(a/l);if(l*e!==a)throw Error(Ig(r,c));c[u]=e}if(k(c)!==a)throw Error(Lg(r,c));let d=r.length,f=[];if(d>0){f[d-1]=1;for(let e=d-2;e>=0;--e)f[e]=f[e+1]*r[e+1]}let p=[];if(s>0){p[s-1]=1;for(let e=s-2;e>=0;--e)p[e]=p[e+1]*c[e+1]}let m=je(n,o*s);for(let t=0;t<o;++t){let n=0;for(let r=0;r<d;++r)n+=e[t*d+r]*f[r];for(let e=0;e<s;++e)m[t*s+e]=Math.trunc(n/p[e]),n%=p[e]}return[m,[o,s],c]}function WO(e,t,n,r,i,a=!1,o=0){let s=r.length,c=[t[0],e.length/t[0]],l=c[1],u=s>0?i[s-1]+1:0;if(u<0)throw Error(Rg());let d=t.slice();d[0]=u;let f=je(n,d.reduce((e,t)=>e*t,1));if(s===0)return u>0&&f.fill(o),[f,d];if(u<=0)throw Error(Rg());let p=0,m=1,h=0,g=i[p];for(;;){let t=0;if(m<s){if(t=i[m],g===t){++m;continue}if(g>=t)throw Error(zg())}if(g<0||g>=u)throw Error(Bg(g,u));g>h&&f.fill(o,h*l,g*l);for(let t=p;t<m;++t){let n=r[t];if(n<0||n>=c[0])throw Error(Vg(t,r[t],c[0]));for(let t=0;t<l;t++)f[g*l+t]+=e[n*l+t]}if(a)for(let e=0;e<l;e++)f[g*l+e]/=m-p;if(p=m,++m,h=g+1,g=t,m>s)break}return h<u&&f.fill(o,h*l,u*l),[f,d]}var GO=xD(e=>Math.sqrt(e)),KO={kernelName:Dr,backendName:`cpu`,kernelFunc:SD(Dr,e=>Math.sqrt(e))},qO=tD(((e,t)=>{let n=e-t;return n*n})),JO={kernelName:Ir,backendName:`cpu`,kernelFunc:fD(Ir,qO)},YO=xD((e,t)=>{let{pattern:n,replaceGlobal:r,rewrite:i}=t;return e.replace(new RegExp(n,r?`g`:``),i)}),XO={kernelName:Rr,backendName:`cpu`,kernelFunc:CD(Rr,YO)};function ZO(e,t,n,r){let i=es(e,t.dtype);for(let e=0;e<i.size;e++){let a=i.indexToLoc(e),o=Array(a.length);for(let e=0;e<o.length;e++)o[e]=a[e]*n[e]+r[e];i.set(t.get(...o),...a)}return i}var QO=class{constructor(e,t,n,r,i,a){this.separator=Li(e),this.nGramWidths=t,this.leftPad=Li(n),this.rightPad=Li(r),this.padWidth=i,this.preserveShort=a}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){let n=this.getPadWidth(t);return Math.max(0,e+2*n-t+1)}createNGrams(e,t,n,r,i,a){for(let o=0;o<i;++o){let s=this.getPadWidth(a),c=Math.max(0,s-o),l=Math.max(0,s-(i-(o+1))),u=a-(c+l),d=t+(c>0?0:o-s),f=0;f+=c*this.leftPad.length;for(let t=0;t<u;++t)f+=e[d+t].length;f+=l*this.rightPad.length;let p=c+l+u-1;f+=p*this.separator.length,n[r+o]=new Uint8Array(f);let m=n[r+o],h=0,g=e=>e.forEach(e=>m[h++]=e);for(let e=0;e<c;++e)g(this.leftPad),g(this.separator);for(let t=0;t<u-1;++t)g(e[d+t]),g(this.separator);if(u>0){g(e[d+u-1]);for(let e=0;e<l;++e)g(this.separator),g(this.rightPad)}else{for(let e=0;e<l-1;++e)g(this.rightPad),g(this.separator);g(this.rightPad)}}}compute(e,t){let n=e.length,r=t.length;if(r>0){let e=t[0];if(e!==0)throw Error(`First split value must be 0, got ${e}`);for(let i=1;i<r;++i){let r=t[i]>=e;if(r&&=t[i]<=n,!r)throw Error(`Invalid split value ${t[i]}, must be in [${e}, ${n}]`);e=t[i]}if(e!==n)throw Error(`Last split value must be data size. Expected ${n}, got ${e}`)}let i=r-1,a=je(`int32`,r);if(n===0||r===0){let e=Array(n);for(let e=0;e<=i;++e)a[e]=0;return[e,a]}a[0]=0;for(let e=1;e<=i;++e){let n=t[e]-t[e-1],r=0;this.nGramWidths.forEach(e=>{r+=this.getNumNGrams(n,e)}),this.preserveShort&&n>0&&r===0&&(r=1),a[e]=a[e-1]+r}let o=Array(a[i]);for(let n=0;n<i;++n){let r=t[n],i=a[n];if(this.nGramWidths.forEach(a=>{let s=t[n+1]-t[n],c=this.getNumNGrams(s,a);this.createNGrams(e,r,o,i,c,a),i+=c}),this.preserveShort&&i===a[n]){let a=t[n+1]-t[n];if(a===0)continue;let s=a+2*this.padWidth;this.createNGrams(e,r,o,i,1,s)}}return[o,a]}};function $O(e,t,n,r,i,a,o,s){return new QO(n,r,i,a,o,s).compute(e,t)}function ek(e,t,n,r){if(!e.length)return;if(t.length===0){for(let t=0;t<e.length;++t)r.push(e.subarray(t,t+1));return}if(t.length===1){let i=t[0],a=e.indexOf(i);for(;a!==-1;){let t=e.subarray(0,a);(!n||t.length!==0)&&r.push(t),e=e.subarray(a+1),a=e.indexOf(i)}(!n||e.length!==0)&&r.push(e);return}let i=0;for(let a=0;a<e.length+1;a++)if(a===e.length||t.indexOf(e[a])!==-1){let t=e.subarray(i,a);(!n||t.length!==0)&&r.push(t),i=a+1}}function tk(e,t,n){let r=e.length,i=[],a=0,o=0,s=Array(r);for(let c=0;c<r;++c){let r=i.length;ek(e[c],t,n,i);let l=i.length-r;s[c]=l,a+=l,o=Math.max(o,l)}let c=je(`int32`,a*2),l=Array(a),u=[r,o],d=0;for(let e=0;e<r;++e)for(let t=0;t<s[e];++t)c[d*2]=e,c[d*2+1]=t,l[d]=i[d],++d;return[c,l,u]}function nk(e,t){let n=je(`int32`,e.length);for(let r=0;r<e.length;++r)n[r]=Mi(e[r]).modulo(t).getLowBitsUnsigned();return n}var rk=tD(((e,t)=>e-t)),ik=fD(`Sub`,rk,pD(((e,t,n,r)=>({real:e-n,imag:t-r})))),ak={kernelName:`Sub`,backendName:`cpu`,kernelFunc:ik};function ok(e,t){let n=Array(e.rank);for(let r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];let r=es(n,e.dtype);for(let t=0;t<r.values.length;++t){let n=r.indexToLoc(t),i=Array(e.rank);for(let t=0;t<i.length;t++)i[t]=n[t]%e.shape[t];let a=e.locToIndex(i);r.values[t]=e.values[a]}return r}var sk=(e,t)=>{let n=t.value-e.value;return n===0?e.index-t.index:n};function ck(e,t,n=0,r=e.length-1){for(;r>n;){if(r-n>600){let i=r-n+1,a=t-n+1,o=Math.log(i),s=.5*Math.exp(2*o/3),c=.5*Math.sqrt(o*s*(i-s)/i)*Math.sign(a-i/2);ck(e,t,Math.max(n,Math.floor(t-a*s/i+c)),Math.min(r,Math.floor(t+(i-a)*s/i+c)))}let i=e[t],a=n,o=r;for(_e(e,n,t),sk(e[r],i)>0&&_e(e,n,r);a<o;){for(_e(e,a,o),a++,o--;sk(e[a],i)<0;)a+=1;for(;sk(e[o],i)>0;)--o}sk(e[n],i)===0?_e(e,n,o):(o+=1,_e(e,o,r)),o<=t&&(n=o+1),t<=o&&(r=o-1)}}function lk(e,t,n,r,i){let a=t[t.length-1],[o,s]=[e.length/a,a],c=Ae(n,o*r),l=Ae(`int32`,o*r);for(let t=0;t<o;t++){let n=t*s,a=e.subarray(n,n+s),o=Array(a.length);a.forEach((e,t)=>o[t]={value:e,index:t}),r<o.length&&(ck(o,r),o=o.slice(0,r)),i&&o.sort(sk);let u=t*r,d=c.subarray(u,u+r),f=l.subarray(u,u+r);for(let e=0;e<r;e++)d[e]=o[e].value,f[e]=o[e].index}let u=t.slice();return u[u.length-1]=r,[es(u,n,c),es(u,`int32`,l)]}function uk(e,t,n,r){let i=Oe(t,n)[0],a=[1,n[0],1];for(let e=0;e<i;e++)a[0]*=n[e];a[1]=n[i];for(let e=i+1;e<n.length;e++)a[2]*=n[e];let o=new Map,s=new Int32Array(n[i]),c=new ta(a,r,e),l=[],u=a[0]===1&&a[2]===1;for(let t=0;t<n[i];t++){let n;if(u)n=e[t].toString();else{let e=[];for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)e.push(c.get(n,t,r));n=e.join(`,`)}let r=o.get(n);if(r!=null)s[t]=r;else{let e=o.size;o.set(n,e),s[t]=e,l.push(t)}}let d=a.slice();d[1]=o.size;let f=new ta(d,r);l.forEach((e,t)=>{for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)f.set(c.get(n,e,r),n,t,r)});let p=n.slice();return p[i]=d[1],{outputValues:f.values,outputShape:p,indices:s}}var dk=s({addImpl:()=>mD,bincountImpl:()=>_D,bincountReduceImpl:()=>vD,bitwiseAndImpl:()=>yD,castImpl:()=>lD,ceilImpl:()=>wD,concatImpl:()=>ED,equalImpl:()=>DD,expImpl:()=>AD,expm1Impl:()=>ND,floorDivImpl:()=>LD,floorImpl:()=>FD,gatherNdImpl:()=>zD,gatherV2Impl:()=>BD,greaterEqualImpl:()=>UD,greaterImpl:()=>VD,lessEqualImpl:()=>qD,lessImpl:()=>GD,linSpaceImpl:()=>YD,logImpl:()=>XD,maxImpl:()=>QD,maximumImpl:()=>$D,minimumImpl:()=>tO,multiplyImpl:()=>rO,negImpl:()=>oO,notEqualImpl:()=>lO,prodImpl:()=>mO,raggedGatherImpl:()=>wO,raggedRangeImpl:()=>EO,raggedTensorToTensorImpl:()=>jO,rangeImpl:()=>MO,rsqrtImpl:()=>NO,scatterImpl:()=>FO,sigmoidImpl:()=>IO,simpleAbsImpl:()=>$E,sliceImpl:()=>zO,sparseFillEmptyRowsImpl:()=>HO,sparseReshapeImpl:()=>UO,sparseSegmentReductionImpl:()=>WO,sqrtImpl:()=>GO,squaredDifferenceImpl:()=>qO,staticRegexReplaceImpl:()=>YO,stridedSliceImpl:()=>ZO,stringNGramsImpl:()=>$O,stringSplitImpl:()=>tk,stringToHashBucketFastImpl:()=>nk,subImpl:()=>rk,tileImpl:()=>ok,topKImpl:()=>lk,transposeImpl:()=>dO,uniqueImpl:()=>uk});Ya(`cpu`,()=>new QE,1);var fk=SD(`Elu`,e=>e>=0?e:Math.exp(e)-1),pk={kernelName:`Elu`,backendName:`cpu`,kernelFunc:fk};function mk(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{alpha:a}=r;X([i],`leakyRelu`);let o=k(i.shape),s=n.data.get(i.dataId).values,c=Ae(`float32`,o);for(let e=0;e<s.length;e++)c[e]=s[e]<0?a*s[e]:s[e];return n.makeTensorInfo(i.shape,`float32`,c)}var hk={kernelName:wn,backendName:`cpu`,kernelFunc:mk},gk=tD((e,t)=>e<0?t*e:e);function _k(e){let{inputs:t,backend:n}=e,{x:r,alpha:i}=t;X([r,i],`prelu`);let a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,[s,c]=gk(r.shape,i.shape,a,o,`float32`);return n.makeTensorInfo(c,`float32`,s)}var vk={kernelName:$n,backendName:`cpu`,kernelFunc:_k},yk=SD(sr,e=>Math.max(0,e)),bk={kernelName:sr,backendName:`cpu`,kernelFunc:yk},xk=SD(pr,e=>Math.min(Math.max(0,e),6)),Sk={kernelName:pr,backendName:`cpu`,kernelFunc:xk};function Ck(e,t,n,r,i){if(n===`linear`)return aD({inputs:{x:t},backend:e});if(n===`relu`)return yk({inputs:{x:t},backend:e});if(n===`elu`)return fk({inputs:{x:t},backend:e});if(n===`relu6`)return xk({inputs:{x:t},backend:e});if(n===`prelu`)return _k({inputs:{x:t,alpha:r},backend:e});if(n===`leakyrelu`)return mk({inputs:{x:t},backend:e,attrs:{alpha:i}});if(n===`sigmoid`)return LO({inputs:{x:t},backend:e});throw Error(`Activation ${n} has not been implemented for the CPU backend.`)}function wk(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{shape:a}=r,o=k(i.shape),s=De(a,o),c=k(s);O(o===c,()=>`The new shape (${s}) has ${c} elements and the old shape (${i.shape}) has ${o} elements. The new shape and old shape must have the same number of elements.`),n.incRef(i.dataId);let l=n.data.get(i.dataId);if(l.complexTensorInfos!=null){let e=l.complexTensorInfos.real,t=l.complexTensorInfos.imag;e.shape=s,t.shape=s}return{dataId:i.dataId,shape:s,dtype:i.dtype}}var Tk={kernelName:cr,backendName:`cpu`,kernelFunc:wk};function Ek(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a}=t,{transposeA:o,transposeB:s}=r;X([i,a],`matMul`);let c=i.shape.length,l=a.shape.length,u=o?i.shape[c-2]:i.shape[c-1],d=s?a.shape[l-1]:a.shape[l-2],f=o?i.shape[c-1]:i.shape[c-2],p=s?a.shape[l-2]:a.shape[l-1],m=i.shape.slice(0,-2),h=a.shape.slice(0,-2),g=k(m),_=k(h),v=U(i.shape.slice(0,-2),a.shape.slice(0,-2)).concat([f,p]);O(u===d,()=>`Error in matMul: inner shapes (${u}) and (${d}) of Tensors with shapes ${i.shape} and ${a.shape} and transposeA=${o} and transposeB=${s} must match.`);let y=o?[g,u,f]:[g,f,u],b=s?[_,p,d]:[_,d,p],x=wk({inputs:{x:i},backend:n,attrs:{shape:y}}),S=wk({inputs:{x:a},backend:n,attrs:{shape:b}}),C=o?x.shape[1]:x.shape[2],w=o?x.shape[2]:x.shape[1],T=s?S.shape[1]:S.shape[2],E=Math.max(g,_),D=n.data.get(x.dataId).values,ee=n.data.get(S.dataId).values,te=A(x.shape),ne=A(S.shape),[re,ie,ae]=o?[te[0],1,te[1]]:[te[0],te[1],1],[oe,se,ce]=s?[1,ne[1],ne[0]]:[ne[1],1,ne[0]],le=w*T,ue=es([E,w,T],x.dtype),de=ue.values,fe=n.blockSize;for(let e=0;e<E;e++){let t=e%g,n=e%_;for(let r=0;r<w;r+=fe){let i=Math.min(r+fe,w);for(let a=0;a<T;a+=fe){let o=Math.min(a+fe,T);for(let s=0;s<C;s+=fe){let c=Math.min(s+fe,C);for(let l=r;l<i;l++)for(let r=a;r<o;r++){let i=0;for(let e=s;e<c;e++){let a=D[t*re+l*ie+e*ae],o=ee[e*oe+r*se+n*ce];i+=a*o}de[e*le+(l*T+r)]+=i}}}}}return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(S),n.makeTensorInfo(v,ue.dtype,ue.values)}var Dk={kernelName:wt,backendName:`cpu`,kernelFunc:Ek};function Ok(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a,bias:o,preluActivationWeights:s}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=r,f,p,m,h=[];f=Ek({inputs:{a:i,b:a},attrs:{transposeA:c,transposeB:l},backend:n}),o&&(p=hD({inputs:{a:f,b:o},backend:n}),h.push(f),f=p),u&&(m=Ck(n,f,u,s,d),h.push(f),f=m);for(let e of h)n.disposeIntermediateTensorInfo(e);return f}var kk={kernelName:ti,backendName:`cpu`,kernelFunc:Ok},Ak={kernelName:ut,backendName:`cpu`,kernelFunc:SD(ut,e=>Math.acos(e))},jk={kernelName:dt,backendName:`cpu`,kernelFunc:SD(dt,e=>Math.acosh(e))};function Mk(e){let{inputs:t,backend:n}=e,r=t;X(t,`addN`);let i=r.map(e=>n.data.get(e.dataId).values),a=es(r[0].shape,r[0].dtype),o=a.values;for(let e=0;e<r.length;e++){let t=i[e];for(let e=0;e<o.length;e++)o[e]+=t[e]}return n.makeTensorInfo(a.shape,a.dtype,a.values)}var Nk={kernelName:ft,backendName:`cpu`,kernelFunc:Mk};function Pk(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`all`);let s=Oe(a,i.shape),c=s,l=Vl(c,i.shape.length),u=i;l!=null&&(u=fO({inputs:{x:i},backend:n,attrs:{perm:l}}),c=Ul(c.length,i.shape.length)),Bl(`all`,c,u.shape.length);let[d,f]=Rl(u.shape,c),p=k(f),m=qe(k(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];n&&=r}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=zl(d,s),t=wk({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var Fk={kernelName:`All`,backendName:`cpu`,kernelFunc:Pk};function Ik(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`any`);let s=Oe(a,i.shape),c=s,l=Vl(c,i.shape.length),u=i;l!=null&&(u=fO({inputs:{x:i},backend:n,attrs:{perm:l}}),c=Ul(c.length,i.shape.length)),Bl(`any`,c,u.shape.length);let[d,f]=Rl(u.shape,c),p=k(f),m=qe(k(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];n||=r}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=zl(d,s),t=wk({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var Lk={kernelName:`Any`,backendName:`cpu`,kernelFunc:Ik};function Rk(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r;X(i,`argMax`);let o=Oe(a,i.shape),s=Vl(o,i.shape.length),c=i,l=[];s!=null&&(c=fO({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=Ul(o.length,c.shape.length)),o=[o[0]],Bl(`argMax`,o,c.shape.length);let[u,d]=Rl(c.shape,o),f=qe(k(u),`int32`),p=k(d),m=n.data.get(c.dataId).values;for(let e=0;e<f.length;++e){let t=e*p,n=m[t],r=0;for(let e=0;e<p;++e){let i=m[t+e];i>n&&(n=i,r=e)}f[e]=r}return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(u,`int32`,f)}var zk={kernelName:pt,backendName:`cpu`,kernelFunc:Rk};function Bk(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r;X(i,`argMin`);let o=Oe(a,i.shape),s=Vl(o,i.shape.length),c=i,l=[];s!=null&&(c=fO({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=Ul(o.length,c.shape.length)),o=[o[0]],Bl(`argMin`,o,c.shape.length);let[u,d]=Rl(c.shape,o),f=qe(k(u),`int32`),p=k(d),m=n.data.get(c.dataId).values;for(let e=0;e<f.length;++e){let t=e*p,n=m[t],r=0;for(let e=0;e<p;++e){let i=m[t+e];i<n&&(n=i,r=e)}f[e]=r}return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(u,`int32`,f)}var Vk={kernelName:mt,backendName:`cpu`,kernelFunc:Bk},Hk={kernelName:ht,backendName:`cpu`,kernelFunc:SD(ht,e=>Math.asin(e))},Uk={kernelName:gt,backendName:`cpu`,kernelFunc:SD(gt,e=>Math.asinh(e))},Wk={kernelName:_t,backendName:`cpu`,kernelFunc:SD(_t,e=>Math.atan(e))},Gk={kernelName:yt,backendName:`cpu`,kernelFunc:fD(yt,tD((e,t)=>Math.atan2(e,t)))},Kk={kernelName:vt,backendName:`cpu`,kernelFunc:SD(vt,e=>Math.atanh(e))};function qk(e,t,n,r,i,a){let o=i.strideHeight,s=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,u=i.effectiveFilterHeight,d=i.effectiveFilterWidth,f=i.padInfo.top,p=i.padInfo.left,m=a===`max`?-1/0:1/0,h=es(i.outShape,n),g=h.values,_=i.outShape[1]*i.outShape[2]*i.outShape[3],v=i.outShape[2]*i.outShape[3],y=i.outShape[3];for(let t=0;t<i.batchSize;++t){let n=t*_,h=t*r[0];for(let t=0;t<i.inChannels;++t)for(let _=0;_<i.outHeight;++_){let b=_*o-f,x=Math.max(0,b),S=Math.min(i.inHeight,u+b),C=n+_*v;for(let n=0;n<i.outWidth;++n){let o=n*s-p,u=Math.max(0,o),f=Math.min(i.inWidth,d+o),_=m,v=0,b=0;for(let n=x;n<S;n+=c){let i=h+n*r[1];for(let n=u;n<f;n+=l){let o=e[i+n*r[2]+t];a===`max`&&o>_?_=o:a===`avg`&&(v+=o,b++)}if(isNaN(_))break}let w=C+n*y+t;g[w]=a===`avg`?v/b:_}}}return h}function Jk(e,t,n,r,i=!1,a=!1){let o=es(r.outShape,`int32`),s=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,u=r.dilationWidth,d=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=r.padInfo.top,m=r.padInfo.left,h=es(t,n,e);for(let e=0;e<r.batchSize;++e)for(let t=0;t<r.inChannels;++t)for(let n=0;n<r.outHeight;++n){let g=n*s-p,_=g;for(;_<0;)_+=l;let v=Math.min(r.inHeight,d+g);for(let s=0;s<r.outWidth;++s){let d=s*c-m,p=d;for(;p<0;)p+=u;let y=Math.min(r.inWidth,f+d),b=-1/0,x=-1;for(let n=_;n<v;n+=l){let o=n-g;for(let s=p;s<y;s+=u){let c=s-d,l=h.get(e,n,s,t);l>b&&(b=l,x=i?a?((e*r.inHeight+n)*r.inWidth+s)*r.inChannels+t:(n*r.inWidth+s)*r.inChannels+t:o*f+c)}}o.set(x,e,n,s,t)}}return o}function Yk(e,t,n,r,i,a){let o=i.strideDepth,s=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,u=i.dilationHeight,d=i.dilationWidth,f=i.effectiveFilterDepth,p=i.effectiveFilterHeight,m=i.effectiveFilterWidth,h=i.padInfo.front,g=i.padInfo.top,_=i.padInfo.left,v=a===`max`?-1/0:1/0,y=es(i.outShape,n),b=y.values,x=i.outShape[1]*i.outShape[2]*i.outShape[3]*i.outShape[4],S=i.outShape[2]*i.outShape[3]*i.outShape[4],C=i.outShape[3]*i.outShape[4],w=i.outShape[4];for(let t=0;t<i.batchSize;++t){let n=t*x,y=t*r[0];for(let t=0;t<i.inChannels;++t)for(let x=0;x<i.outDepth;++x){let T=x*o-h,E=T;for(;E<0;)E+=l;let D=Math.min(i.inDepth,f+T),ee=n+x*S;for(let n=0;n<i.outHeight;++n){let o=n*s-g,f=o;for(;f<0;)f+=u;let h=Math.min(i.inHeight,p+o),x=ee+n*C;for(let n=0;n<i.outWidth;++n){let o=n*c-_,s=o;for(;s<0;)s+=d;let p=Math.min(i.inWidth,m+o),g=x+n*w,S=v,C=0,T=0;for(let n=E;n<D;n+=l){let i=y+n*r[1];for(let n=f;n<h;n+=u){let o=i+n*r[2];for(let n=s;n<p;n+=d){let i=e[o+n*r[3]+t];if(a===`max`&&i>S?S=i:a===`avg`&&(C+=i,T++),isNaN(S))break}if(isNaN(S))break}if(isNaN(S))break}let ee=g+t;b[ee]=a===`avg`?C/Math.max(T,1):S}}}}return y}function Xk(e,t){let n=es(t.outShape,`int32`),r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,o=t.dilationDepth,s=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,d=t.effectiveFilterWidth,f=t.padInfo.front,p=t.padInfo.top,m=t.padInfo.left;for(let h=0;h<t.batchSize;++h)for(let g=0;g<t.inChannels;++g)for(let _=0;_<t.outDepth;++_){let v=_*r-f,y=v;for(;y<0;)y+=o;let b=Math.min(t.inDepth,l+v);for(let r=0;r<t.outHeight;++r){let l=r*i-p,f=l;for(;f<0;)f+=s;let x=Math.min(t.inHeight,u+l);for(let i=0;i<t.outWidth;++i){let p=i*a-m,S=p;for(;S<0;)S+=c;let C=Math.min(t.inWidth,d+p),w=-1/0,T=-1;for(let t=y;t<b;t+=o){let n=t-v;for(let r=f;r<x;r+=s){let i=r-l;for(let a=S;a<C;a+=c){let o=a-p,s=e.get(h,t,r,a,g);s>=w&&(w=s,T=n*u*d+i*u+o)}}}n.set(T,h,_,r,i,g)}}}return n}function Zk(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;X(i,`avgPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;O(Ys(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Fs(i.shape,a,o,1,s,c),u;if(l.filterWidth===1&&l.filterHeight===1&&xe(l.inShape,l.outShape))u=aD({inputs:{x:i},backend:n});else{let e=n.data.get(i.dataId).values,t=A(i.shape),r=qk(e,i.shape,i.dtype,t,l,`avg`);u=n.makeTensorInfo(l.outShape,i.dtype,r.values)}return u}var Qk={kernelName:bt,backendName:`cpu`,kernelFunc:Zk};function $k(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r;X(i,`avgPool3d`);let u=Is(i.shape,a,o,1,s,c,l),d=n.data.get(i.dataId).values,f=Yk(d,i.shape,i.dtype,A(i.shape),u,`avg`);return n.makeTensorInfo(f.shape,`float32`,f.values)}var eA={kernelName:St,backendName:`cpu`,kernelFunc:$k};function tA(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,{filterSize:o,strides:s,pad:c,dimRoundingMode:l}=r;X([i,a],`avgPool3DGrad`);let u=Is(a.shape,o,s,1,c,l),d=u.strideDepth,f=u.strideHeight,p=u.strideWidth,m=u.filterDepth,h=u.filterHeight,g=u.filterWidth,_=u.dilationDepth,v=u.dilationHeight,y=u.dilationWidth,b=u.effectiveFilterDepth,x=u.effectiveFilterHeight,S=u.effectiveFilterWidth,C=b-1-u.padInfo.front,w=S-1-u.padInfo.left,T=x-1-u.padInfo.top,E=es(a.shape,`float32`),D=1/(m*h*g),ee=n.bufferSync(i);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inDepth;++n)for(let r=0;r<u.inHeight;++r)for(let i=0;i<u.inWidth;++i){let a=n-C,o=r-T,s=i-w,c=0;for(let n=0;n<b;n+=_){let r=(a+n)/d;if(!(r<0||r>=u.outDepth||Math.floor(r)!==r))for(let n=0;n<x;n+=v){let i=(o+n)/f;if(!(i<0||i>=u.outHeight||Math.floor(i)!==i))for(let n=0;n<S;n+=y){let a=(s+n)/p;if(a<0||a>=u.outWidth||Math.floor(a)!==a)continue;let o=ee.get(e,r,i,a,t);c+=o}}}E.set(c*D,e,n,r,i,t)}return n.makeTensorInfo(E.shape,E.dtype,E.values)}var nA={kernelName:Ct,backendName:`cpu`,kernelFunc:tA};function rA(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a;X([i,a],`avgPoolGrad`);let{filterSize:s,strides:c,pad:l}=r,u=Fs(o.shape,s,c,1,l),d=u.strideHeight,f=u.strideWidth,p=u.filterHeight,m=u.filterWidth,h=u.dilationHeight,g=u.dilationWidth,_=u.effectiveFilterHeight,v=u.effectiveFilterWidth,y=v-1-u.padInfo.left,b=_-1-u.padInfo.top,x=es(o.shape,`float32`),S=1/(p*m),C=n.data.get(i.dataId).values,w=es(i.shape,`float32`,C);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inHeight;++n)for(let r=0;r<u.inWidth;++r){let i=n-b,a=r-y,o=0;for(let n=0;n<_;n+=h){let r=(i+n)/d;if(!(r<0||r>=u.outHeight||Math.floor(r)!==r))for(let n=0;n<v;n+=g){let i=(a+n)/f;if(i<0||i>=u.outWidth||Math.floor(i)!==i)continue;let s=w.get(e,r,i,t);o+=s}}x.set(o*S,e,n,r,t)}return n.makeTensorInfo(x.shape,x.dtype,x.values)}var iA={kernelName:xt,backendName:`cpu`,kernelFunc:rA};function aA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,scale:a,offset:o,mean:s,variance:c}=t;O(s.shape.length===c.shape.length,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),O(o==null||s.shape.length===o.shape.length,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),O(a==null||s.shape.length===a.shape.length,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`),X([i,s,c,a,o],`batchNorm`);let{varianceEpsilon:l}=r;l??=.001;let u=n.data.get(i.dataId).values,d=n.data.get(s.dataId).values,f=n.data.get(c.dataId).values,p=a?n.data.get(a.dataId).values:new Float32Array([1]),m=o?n.data.get(o.dataId).values:new Float32Array([0]),h=new Float32Array(u.length),g=m.length,_=p.length,v=f.length,y=d.length,b=0,x=0,S=0,C=0;for(let e=0;e<u.length;++e)h[e]=m[b++]+(u[e]-d[x++])*p[S++]/Math.sqrt(f[C++]+l),b>=g&&(b=0),x>=y&&(x=0),S>=_&&(S=0),C>=v&&(C=0);return n.makeTensorInfo(i.shape,i.dtype,h)}var oA={kernelName:pn,backendName:`cpu`,kernelFunc:aA};function sA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,crops:o}=r;X([i],`batchToSpaceND`);let s=a.reduce((e,t)=>e*t),c=Qh(i.shape,a,s),l=$h(c.length,a.length),u=eg(i.shape,a,s),d=tg(o,a.length),f=ng(u,o,a.length),p=wk({inputs:{x:i},backend:n,attrs:{shape:c}}),m=fO({inputs:{x:p},backend:n,attrs:{perm:l}}),h=wk({inputs:{x:m},backend:n,attrs:{shape:u}}),g=BO({inputs:{x:h},backend:n,attrs:{begin:d,size:f}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),g}var cA={kernelName:Tt,backendName:`cpu`,kernelFunc:sA};function lA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o}=r,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,l=_D(s,c,a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,l)}var uA={kernelName:Et,backendName:`cpu`,kernelFunc:lA};function dA(e){let{inputs:t,backend:n}=e,{s0:r,s1:i}=t,a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,s=U(Array.from(a),Array.from(o));return n.makeTensorInfo([s.length],`int32`,Int32Array.from(s))}var fA={kernelName:kt,backendName:`cpu`,kernelFunc:dA},pA={kernelName:Mt,backendName:`cpu`,kernelFunc:SD(Mt,(e,t)=>{let n=t;return e>n.clipValueMax?n.clipValueMax:e<n.clipValueMin?n.clipValueMin:e})},mA={kernelName:Pt,backendName:`cpu`,kernelFunc:e=>{let{x:t}=e.inputs,n=e.backend,r=new Float32Array(k(t.shape)),i=n.data.get(t.dataId),a=i.complexTensorInfos.real,o=i.complexTensorInfos.imag,s=n.data.get(a.dataId).values,c=n.data.get(o.dataId).values;for(let e=0;e<s.length;e++){let t=s[e],n=c[e];r[e]=Math.hypot(t,n)}return n.makeOutput(r,t.shape,`float32`)}};function hA(e){let{inputs:t,backend:n}=e,{input:r}=t,i=n.data.get(r.dataId).complexTensorInfos.imag,a=n.data.get(i.dataId).values;return n.makeTensorInfo(i.shape,i.dtype,a)}var gA={kernelName:bn,backendName:`cpu`,kernelFunc:hA};function _A(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r,a=Oe(i,t[0].shape)[0];Uh(t.map(e=>e.shape),a);let o=Wh(t.map(e=>e.shape),a);if(k(o)===0)return n.makeTensorInfo(o,t[0].dtype,[]);let s=t.filter(e=>k(e.shape)>0);if(s.length===1)return aD({inputs:{x:s[0]},backend:n});if(s[0].dtype===`complex64`){let e=s.map(e=>sD({inputs:{input:e},backend:n})),t=s.map(e=>hA({inputs:{input:e},backend:n})),r=_A({inputs:e,backend:n,attrs:{axis:a}}),i=_A({inputs:t,backend:n,attrs:{axis:a}}),o=nD({inputs:{real:r,imag:i},backend:n});return e.forEach(e=>n.disposeIntermediateTensorInfo(e)),t.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),o}let c=s.map(e=>{let t=[-1,k(e.shape.slice(a))];return wk({inputs:{x:e},backend:n,attrs:{shape:t}})}),l=c.map(e=>({vals:n.data.get(e.dataId).values,shape:e.shape}));o=Wh(c.map(e=>e.shape),1);let u=c[0].shape[0]===1,d=ED(l,o,t[0].dtype,u),f=Wh(s.map(e=>e.shape),a),p=n.makeTensorInfo(f,t[0].dtype,d);return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var vA={kernelName:Ft,backendName:`cpu`,kernelFunc:_A};function yA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dataFormat:c,dilations:l,dimRoundingMode:u}=r;X([i,a],`conv2d`);let d=Zs(c),f=Ls(i.shape,a.shape,o,l,s,u,!1,d),p=f.filterHeight,m=f.filterWidth,h=f.dilationHeight,g=f.dilationWidth,_=f.padInfo.left,v=f.padInfo.top,y=f.dataFormat===`channelsLast`,b=new ta(f.outShape,i.dtype),x=A(i.shape),S=A(a.shape),C=x[0],w=y?x[1]:x[2],T=y?x[2]:1,E=y?1:x[1],D=b.strides[0],ee=y?b.strides[1]:b.strides[2],te=y?b.strides[2]:1,ne=y?1:b.strides[1],re=n.data.get(i.dataId).values,ie=n.data.get(a.dataId).values,ae=b.values;for(let e=0;e<f.batchSize;++e){let t=e*C,n=e*D;for(let e=0;e<f.outHeight;++e){let r=n+e*ee,i=e*f.strideHeight-v;for(let e=0;e<p;++e){let n=i+e*h;if(n<0||n>=f.inHeight)continue;let a=e*S[0],o=t+n*w;for(let e=0;e<f.outWidth;++e){let t=r+e*te,n=e*f.strideWidth-_;for(let e=0;e<m;++e){let r=n+e*g;if(r<0||r>=f.inWidth)continue;let i=a+e*S[1],s=o+r*T,c=i;for(let e=0;e<f.inChannels;++e){let n=re[s+e*E];for(let e=0;e<f.outChannels;++e)ae[t+e*ne]+=n*ie[c+e];c+=f.outChannels}}}}}}return n.makeTensorInfo(b.shape,b.dtype,ae)}var bA={kernelName:It,backendName:`cpu`,kernelFunc:yA};function xA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,dataFormat:c,dimRoundingMode:l,filterShape:u}=r;X([i,a],`conv2dBackpropFilter`);let d=Zs(c),f=Ls(i.shape,u,o,1,s,l,!1,d),{strideHeight:p,strideWidth:m,filterHeight:h,filterWidth:g}=f,_=f.dataFormat===`channelsLast`,v=new ta(f.filterShape,`float32`),y=f.padInfo.left,b=f.padInfo.top,x=n.data.get(i.dataId).values,S=n.data.get(a.dataId).values,C=new ta(i.shape,i.dtype,x),w=new ta(a.shape,a.dtype,S);for(let e=0;e<h;++e){let t=Math.max(0,Math.ceil((b-e)/p)),n=Math.min(f.outHeight,(f.inHeight+b-e)/p);for(let r=0;r<g;++r){let i=Math.max(0,Math.ceil((y-r)/m)),a=Math.min(f.outWidth,(f.inWidth+y-r)/m);for(let o=0;o<f.inChannels;++o)for(let s=0;s<f.outChannels;++s){let c=0;for(let l=0;l<f.batchSize;++l)for(let u=t;u<n;++u){let t=e+u*p-b;for(let e=i;e<a;++e){let n=r+e*m-y;_?c+=C.get(l,t,n,o)*w.get(l,u,e,s):c+=C.get(l,o,t,n)*w.get(l,s,u,e)}}v.set(c,e,r,o,s)}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}var SA={kernelName:Lt,backendName:`cpu`,kernelFunc:xA};function CA(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{inputShape:o,strides:s,pad:c,dataFormat:l,dimRoundingMode:u}=r;X([i,a],`conv2dBackpropInput`);let d=A(a.shape),f=A(i.shape),p=Zs(l),m=Ls(o,a.shape,s,1,c,u,!1,p),h=new ta(m.inShape,`float32`),g=h.values,_=n.data.get(i.dataId).values,v=n.data.get(a.dataId).values,[y,b,x]=d,{batchSize:S,filterHeight:C,filterWidth:w,inChannels:T,inHeight:E,inWidth:D,outChannels:ee,outHeight:te,outWidth:ne,strideHeight:re,strideWidth:ie}=m;p=m.dataFormat;let ae=C-1-m.padInfo.top,oe=w-1-m.padInfo.left,se=p===`channelsLast`,ce=h.strides[0],le=se?h.strides[1]:h.strides[2],ue=se?h.strides[2]:1,de=se?1:h.strides[1],fe=f[0],pe=se?f[1]:f[2],me=se?f[2]:1,he=se?1:f[1];for(let e=0;e<S;++e)for(let t=0;t<T;++t)for(let n=0;n<E;++n){let r=n-ae,i=Math.max(0,Math.ceil(r/re)),a=Math.min(te,(C+r)/re);for(let o=0;o<D;++o){let s=o-oe,c=Math.max(0,Math.ceil(s/ie)),l=Math.min(ne,(w+s)/ie),u=0;for(let n=i;n<a;++n){let i=n*re-r;for(let r=c;r<l;++r){let a=r*ie-s,o=fe*e+pe*n+me*r,c=y*(C-1-i)+b*(w-1-a)+x*t;for(let e=0;e<ee;++e){let t=_[o+he*e],n=v[c+e];u+=t*n}}}let d=ce*e+le*n+ue*o+de*t;g[d]=u}}return n.makeTensorInfo(h.shape,h.dtype,h.values)}var wA={kernelName:Rt,backendName:`cpu`,kernelFunc:CA};function TA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r;X([i,a],`conv3d`);let l=Rs(i.shape,a.shape,o,c,s),{filterDepth:u,filterHeight:d,filterWidth:f,dilationDepth:p,dilationHeight:m,dilationWidth:h,padInfo:g}=l,_=g.front,v=g.left,y=g.top,b=new ta(l.outShape,i.dtype),x=n.data.get(i.dataId).values,S=n.data.get(a.dataId).values,C=b.values,w=A(i.shape),T=A(a.shape);for(let e=0;e<l.batchSize;++e){let t=e*w[0],n=e*b.strides[0];for(let e=0;e<l.outDepth;++e){let r=n+e*b.strides[1],i=e*l.strideDepth-_;for(let e=0;e<u;++e){let n=i+e*p;if(n<0||n>=l.inDepth)continue;let a=e*T[0],o=t+n*w[1];for(let e=0;e<l.outHeight;++e){let t=r+e*b.strides[2],n=e*l.strideHeight-y;for(let e=0;e<d;++e){let r=n+e*m;if(r<0||r>=l.inHeight)continue;let i=a+e*T[1],s=o+r*w[2];for(let e=0;e<l.outWidth;++e){let n=t+e*l.outChannels,r=e*l.strideWidth-v;for(let e=0;e<f;++e){let t=r+e*h;if(t<0||t>=l.inWidth)continue;let a=i+e*T[2],o=s+t*l.inChannels,c=a;for(let e=0;e<l.inChannels;++e){let t=x[o+e];for(let e=0;e<l.outChannels;++e)C[n+e]+=t*S[c+e];c+=l.outChannels}}}}}}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}var EA={kernelName:zt,backendName:`cpu`,kernelFunc:TA};function DA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,filterShape:c}=r;X([i,a],`conv3dBackpropFilterV2`);let l=A(i.shape),u=A(a.shape),d=Rs(i.shape,c,o,1,s),f=d.strideDepth,p=d.strideHeight,m=d.strideWidth,h=d.filterDepth,g=d.filterHeight,_=d.filterWidth,v=new ta(d.filterShape,`float32`),y=v.values,[b,x,S,C]=v.strides,w=n.data.get(a.dataId).values,[T,E,D,ee]=u,te=n.data.get(i.dataId).values,[ne,re,ie,ae]=l,oe=d.padInfo.front,se=d.padInfo.left,ce=d.padInfo.top;for(let e=0;e<h;++e){let t=Math.max(0,Math.ceil((oe-e)/f)),n=Math.min(d.outDepth,(d.inDepth+oe-e)/f),r=e*b;for(let i=0;i<g;++i){let a=Math.max(0,Math.ceil((ce-i)/p)),o=Math.min(d.outHeight,(d.inHeight+ce-i)/p),s=i*x+r;for(let r=0;r<_;++r){let c=Math.max(0,Math.ceil((se-r)/m)),l=Math.min(d.outWidth,(d.inWidth+se-r)/m),u=r*S+s;for(let s=0;s<d.inChannels;++s){let h=s*C+u;for(let u=0;u<d.outChannels;++u){let g=0;for(let h=0;h<d.batchSize;++h){let d=h*ne,_=h*T;for(let h=t;h<n;++h){let t=(e+h*f-oe)*re+d,n=h*E+_;for(let e=a;e<o;++e){let a=(i+e*p-ce)*ie+t,o=e*D+n;for(let e=c;e<l;++e){let t=(r+e*m-se)*ae+a,n=e*ee+o;g+=te[t+s]*w[n+u]}}}}y[h+u]=g}}}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}var OA={kernelName:Bt,backendName:`cpu`,kernelFunc:DA};function kA(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{pad:o,strides:s,inputShape:c}=r;X([i],`conv3dBackpropInputV2`);let l=A(i.shape),u=A(a.shape),d=Rs(c,a.shape,s,1,o),f=new ta(d.inShape,`float32`),p=f.values,[m,h,g,_]=f.strides,v=n.data.get(i.dataId).values,[y,b,x,S]=l,C=n.data.get(a.dataId).values,[w,T,E,D]=u,{batchSize:ee,filterDepth:te,filterHeight:ne,filterWidth:re,inChannels:ie,inDepth:ae,inHeight:oe,inWidth:se,outChannels:ce,outDepth:le,outHeight:ue,outWidth:de,strideDepth:fe,strideHeight:pe,strideWidth:me}=d,he=te-1-d.padInfo.front,ge=ne-1-d.padInfo.top,_e=re-1-d.padInfo.left;for(let e=0;e<ee;++e)for(let t=0;t<ie;++t)for(let n=0;n<ae;++n){let r=n-he,i=Math.max(0,Math.ceil(r/fe)),a=Math.min(le,(te+r)/fe);for(let o=0;o<oe;++o){let s=o-ge,c=Math.max(0,Math.ceil(s/pe)),l=Math.min(ue,(ne+s)/pe);for(let u=0;u<se;++u){let d=u-_e,f=Math.max(0,Math.ceil(d/me)),ee=Math.min(de,(re+d)/me),ie=0;for(let n=i;n<a;++n){let i=n*fe-r;for(let r=c;r<l;++r){let a=r*pe-s;for(let o=f;o<ee;++o){let s=o*me-d,c=y*e+b*n+x*r+S*o,l=w*(te-1-i)+T*(ne-1-a)+E*(re-1-s)+D*t;for(let e=0;e<ce;++e){let t=v[c+e],n=C[l+e];ie+=t*n}}}}p[m*e+h*n+g*o+_*u+t]=ie}}}return n.makeTensorInfo(f.shape,f.dtype,f.values)}var AA={kernelName:Vt,backendName:`cpu`,kernelFunc:kA},jA={kernelName:`Cos`,backendName:`cpu`,kernelFunc:SD(`Cos`,e=>Math.cos(e))},MA={kernelName:Ht,backendName:`cpu`,kernelFunc:SD(Ht,e=>Math.cosh(e))};function NA(e){let{inputs:t,backend:n,attrs:r}=e,{image:i,boxes:a,boxInd:o}=t,{cropSize:s,method:c,extrapolationValue:l}=r,[u,d,f,p]=i.shape,m=a.shape[0],[h,g]=s,_=es([m,h,g,p],`float32`),v=n.data.get(a.dataId).values,y=n.data.get(o.dataId).values,b=n.data.get(i.dataId).values,x=A(i.shape),S=A(_.shape);for(let e=0;e<m;e++){let t=e*4,n=v[t],r=v[t+1],i=v[t+2],a=v[t+3],o=y[e];if(o>=u)continue;let s=h>1?(i-n)*(d-1)/(h-1):0,m=g>1?(a-r)*(f-1)/(g-1):0;for(let t=0;t<h;t++){let u=h>1?n*(d-1)+t*s:.5*(n+i)*(d-1);if(u<0||u>d-1){for(let n=0;n<g;n++)for(let r=0;r<p;r++){let i=r+n*S[2]+t*S[1]+e*S[0];_.values[i]=l}continue}if(c===`bilinear`){let n=Math.floor(u),i=Math.ceil(u),s=u-n;for(let c=0;c<g;c++){let u=g>1?r*(f-1)+c*m:.5*(r+a)*(f-1);if(u<0||u>f-1){for(let n=0;n<p;n++){let r=n+c*S[2]+t*S[1]+e*S[0];_.values[r]=l}continue}let d=Math.floor(u),h=Math.ceil(u),v=u-d;for(let r=0;r<p;r++){let a=r+d*x[2]+n*x[1]+o*x[0],l=b[a];a=r+h*x[2]+n*x[1]+o*x[0];let u=b[a];a=r+d*x[2]+i*x[1]+o*x[0];let f=b[a];a=r+h*x[2]+i*x[1]+o*x[0];let p=b[a],m=l+(u-l)*v,g=f+(p-f)*v;a=r+c*S[2]+t*S[1]+e*S[0],_.values[a]=m+(g-m)*s}}}else for(let n=0;n<g;++n){let i=g>1?r*(f-1)+n*m:.5*(r+a)*(f-1);if(i<0||i>f-1){for(let r=0;r<p;r++){let i=r+n*S[2]+t*S[1]+e*S[0];_.values[i]=l}continue}let s=Math.round(i),c=Math.round(u);for(let r=0;r<p;r++){let i=r+s*x[2]+c*x[1]+o*x[0],a=r+n*S[2]+t*S[1]+e*S[0];_.values[a]=b[i]}}}}return n.makeTensorInfo(_.shape,_.dtype,_.values)}var PA={kernelName:Gt,backendName:`cpu`,kernelFunc:NA};function FA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;X(i,`cumprod`);let c=Vl([a],i.shape.length),l=i;c!=null&&(l=fO({inputs:{x:i},backend:n,attrs:{perm:c}}));let u=Ul(1,i.shape.length)[0];if(u!==l.shape.length-1)throw Error(`backend.cumprod in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);let d=ma(l.dtype,`int32`),f=Ke(k(l.shape),d),p=n.data.get(l.dataId).values,m=l.shape[l.shape.length-1],h=s?(e,t)=>e+m-t-1:(e,t)=>e+t;for(let e=0;e<p.length;e+=m)for(let t=0;t<m;t++){let n=h(e,t);if(t===0)f[n]=o?1:p[n];else{let r=h(e,t-1);f[n]=o?p[r]*f[r]:p[n]*f[r]}}let g=n.makeTensorInfo(l.shape,d,f);if(c!=null){let e=Hl(c),t=fO({inputs:{x:g},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(l),t}return g}var IA={kernelName:Ut,backendName:`cpu`,kernelFunc:FA};function LA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;X(i,`cumsum`);let c=Vl([a],i.shape.length),l=i;c!=null&&(l=fO({inputs:{x:i},backend:n,attrs:{perm:c}}));let u=Ul(1,i.shape.length)[0];if(u!==l.shape.length-1)throw Error(`backend.cumsum in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);let d=ma(l.dtype,`int32`),f=qe(k(l.shape),d),p=n.data.get(l.dataId).values,m=l.shape[l.shape.length-1],h=s?(e,t)=>e+m-t-1:(e,t)=>e+t;for(let e=0;e<p.length;e+=m)for(let t=0;t<m;t++){let n=h(e,t);if(t===0)f[n]=o?0:p[n];else{let r=h(e,t-1);f[n]=o?p[r]+f[r]:p[n]+f[r]}}let g=n.makeTensorInfo(l.shape,d,f);if(c!=null){let e=Hl(c),t=fO({inputs:{x:g},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(l),t}return g}var RA={kernelName:Wt,backendName:`cpu`,kernelFunc:LA};function zA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o,binaryOutput:s}=r;if(i.shape.length===1){let e=n.data.get(i.dataId).values,t=n.data.get(a.dataId).values,r=_D(e,t,a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,r)}else if(i.shape.length===2){let e=vD(n.bufferSync(i),n.bufferSync(a),o,s);return n.makeTensorInfo(e.shape,a.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var BA={kernelName:Kt,backendName:`cpu`,kernelFunc:zA};function VA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockSize:a,dataFormat:o}=r;O(o===`NHWC`,()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${o}`);let s=i.shape[0],c=i.shape[1],l=i.shape[2],u=i.shape[3],d=c*a,f=l*a,p=u/(a*a),m=n.data.get(i.dataId).values,h=new Float32Array(s*d*f*p),g=0;for(let e=0;e<s;++e)for(let t=0;t<d;++t){let n=Math.floor(t/a),r=t%a;for(let t=0;t<f;++t){let i=Math.floor(t/a),o=t%a,s=(r*a+o)*p;for(let t=0;t<p;++t){let r=t+s+u*(i+l*(n+c*e));h[g++]=m[r]}}}return n.makeTensorInfo([s,d,f,p],i.dtype,h)}var HA={kernelName:qt,backendName:`cpu`,kernelFunc:VA};function UA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c,dimRoundingMode:l}=r;X([i,a],`depthwiseConv2DNative`);let u=A(i.shape),d=A(a.shape),f=c;f??=[1,1],O(Ys(o,f),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${f}'`);let p=Ls(i.shape,a.shape,o,f,s,l,!0),{filterHeight:m,filterWidth:h,dilationHeight:g,dilationWidth:_,padInfo:v}=p,y=v.left,b=v.top,x=p.outChannels/p.inChannels,S=new ta(p.outShape,i.dtype),C=n.data.get(i.dataId).values,w=n.data.get(a.dataId).values,T=S.values;for(let e=0;e<p.batchSize;++e){let t=e*u[0],n=e*S.strides[0];for(let e=0;e<p.outHeight;++e){let r=n+e*S.strides[1],i=e*p.strideHeight-b;for(let e=0;e<m;++e){let n=i+e*g;if(n<0||n>=p.inHeight)continue;let a=e*d[0],o=t+n*u[1];for(let e=0;e<p.outWidth;++e){let t=r+e*S.strides[2],n=e*p.strideWidth-y;for(let e=0;e<h;++e){let r=n+e*_;if(r<0||r>=p.inWidth)continue;let i=a+e*d[1],s=o+r*p.inChannels,c=t,l=i;for(let e=0;e<p.inChannels;++e){let t=C[s+e];for(let e=0;e<x;++e)T[c+e]+=t*w[l+e];c+=x,l+=x}}}}}}return n.makeTensorInfo(S.shape,S.dtype,S.values)}var WA={kernelName:Jt,backendName:`cpu`,kernelFunc:UA};function GA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,filterShape:u}=r;X([i,a],`depthwiseConv2dNativeBackpropFilter`);let d=Ls(i.shape,u,o,s,c,l,!0),{strideHeight:f,strideWidth:p,filterHeight:m,filterWidth:h}=d,g=new ta(d.filterShape,`float32`),_=d.padInfo.left,v=d.padInfo.top,y=d.outChannels/d.inChannels,b=n.data.get(i.dataId).values,x=new ta(i.shape,i.dtype,b),S=n.data.get(a.dataId).values,C=new ta(a.shape,a.dtype,S);for(let e=0;e<m;++e){let t=Math.max(0,Math.ceil((v-e)/f)),n=Math.min(d.outHeight,(d.inHeight+v-e)/f);for(let r=0;r<h;++r){let i=Math.max(0,Math.ceil((_-r)/p)),a=Math.min(d.outWidth,(d.inWidth+_-r)/p);for(let o=0;o<d.outChannels;++o){let s=Math.trunc(o/y),c=o%y,l=0;for(let c=0;c<d.batchSize;++c)for(let u=t;u<n;++u){let t=e+u*f-v;for(let e=i;e<a;++e){let n=r+e*p-_;l+=x.get(c,t,n,s)*C.get(c,u,e,o)}}g.set(l,e,r,s,c)}}}return n.makeTensorInfo(g.shape,g.dtype,g.values)}var KA={kernelName:Yt,backendName:`cpu`,kernelFunc:GA};function qA(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,inputShape:u}=r;X([i,a],`depthwiseConv2DNativeBackpropInput`);let d=A(i.shape),f=A(a.shape),p=Ls(u,a.shape,o,s,c,l,!0),m=new ta(p.inShape,`float32`),h=m.values,[g,_,v]=m.strides,y=n.data.get(i.dataId).values,[b,x,S]=d,C=n.data.get(a.dataId).values,[w,T,E]=f,{batchSize:D,filterHeight:ee,filterWidth:te,inChannels:ne,inHeight:re,inWidth:ie,outChannels:ae,outHeight:oe,outWidth:se,strideHeight:ce,strideWidth:le}=p,ue=ee-1-p.padInfo.top,de=te-1-p.padInfo.left,fe=ae/ne;for(let e=0;e<D;++e)for(let t=0;t<ne;++t)for(let n=0;n<re;++n){let r=n-ue,i=Math.max(0,Math.ceil(r/ce)),a=Math.min(oe,(ee+r)/ce);for(let o=0;o<ie;++o){let s=o-de,c=Math.max(0,Math.ceil(s/le)),l=Math.min(se,(te+s)/le),u=0;for(let n=i;n<a;++n){let i=n*ce-r;for(let r=c;r<l;++r){let a=r*le-s,o=b*e+x*n+S*r,c=w*(ee-1-i)+T*(te-1-a)+E*t;for(let e=0;e<fe;++e){let n=y[o+(t*fe+e)],r=C[c+e];u+=n*r}}}h[g*e+_*n+v*o+t]=u}}return n.makeTensorInfo(m.shape,m.dtype,m.values)}var JA={kernelName:Xt,backendName:`cpu`,kernelFunc:qA};function YA(e){let{inputs:t,backend:n}=e,{x:r}=t,i=k(r.shape),a=n.data.get(r.dataId).values,o=es([i,i],r.dtype),s=o.values;for(let e=0;e<a.length;e++)s[e*i+e]=a[e];let c=[...r.shape,...r.shape];return n.makeTensorInfo(c,o.dtype,o.values)}var XA={kernelName:Zt,backendName:`cpu`,kernelFunc:YA},ZA={kernelName:Qt,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i}=e,{strides:a,pad:o,dilations:s}=n,c=t,l=c.data.get(r.dataId).values,u=r.shape.length,d=c.data.get(i.dataId).values,f=i.shape.length,{batchSize:p,inHeight:m,inWidth:h,inChannels:g,outHeight:_,outWidth:v,padInfo:y,strideHeight:b,strideWidth:x,filterHeight:S,filterWidth:C,dilationHeight:w,dilationWidth:T,outShape:E}=Ps(r.shape,i.shape,a,o,`NHWC`,s),D=k(E),ee=E.length,te=je(r.dtype,D);for(let e=0;e<p;++e)for(let t=0;t<_;++t){let n=t*b-y.top;for(let a=0;a<v;++a){let o=a*x-y.left;for(let s=0;s<g;++s){let c=-(2**53-1);for(let t=0;t<S;++t){let a=n+t*w;if(a>=0&&a<m)for(let n=0;n<C;++n){let p=o+n*T;if(p>=0&&p<h){let o=Xe([e,a,p,s],u,A(r.shape)),m=Xe([t,n,s],f,A(i.shape)),h=l[o]+d[m];h>c&&(c=h)}}}let p=Xe([e,t,a,s],ee,A(E));te[p]=c}}}return{dataId:c.write(Fi(te,r.dtype),E,r.dtype),shape:E,dtype:r.dtype}}},QA={kernelName:en,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i,dy:a}=e,{strides:o,pad:s,dilations:c}=n,l=t,u=We(r.shape,l.data.get(r.dataId).values),d=We(i.shape,l.data.get(i.dataId).values),{batchSize:f,inHeight:p,inWidth:m,inChannels:h,outHeight:g,outWidth:_,padInfo:v,strideHeight:y,strideWidth:b,filterHeight:x,filterWidth:S,dilationHeight:C,dilationWidth:w,outShape:T}=Ps(r.shape,i.shape,o,s,`NHWC`,c);O(a.rank===T.length,()=>`Error in ${en}, dy must have the same rank as output ${T.length}, but got ${a.rank}`);let E=We(T,l.data.get(a.dataId).values),D=Je(i.shape,i.dtype);for(let e=0;e<f;++e)for(let t=0;t<g;++t){let n=t*y-v.top;for(let r=0;r<_;++r){let i=r*b-v.left;for(let a=0;a<h;++a){let o=-(2**53-1),s=0,c=0;for(let t=0;t<x;++t){let r=n+t*C;if(r>=0&&r<p)for(let n=0;n<S;++n){let l=i+n*w;if(l>=0&&l<m){let i=u[e][r][l][a]+d[t][n][a];i>o&&(o=i,s=t,c=n)}}}D[s][c][a]+=E[e][t][r][a]}}}return{dataId:l.write(Fi(D,r.dtype),i.shape,i.dtype),shape:i.shape,dtype:i.dtype}}},$A={kernelName:$t,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i,dy:a}=e,{strides:o,pad:s,dilations:c}=n,l=t,u=We(r.shape,l.data.get(r.dataId).values),d=We(i.shape,l.data.get(i.dataId).values),{batchSize:f,inHeight:p,inWidth:m,inChannels:h,outHeight:g,outWidth:_,padInfo:v,strideHeight:y,strideWidth:b,filterHeight:x,filterWidth:S,dilationHeight:C,dilationWidth:w,outShape:T}=Ps(r.shape,i.shape,o,s,`NHWC`,c);O(a.rank===T.length,()=>`Error in ${$t}, dy must have the same rank as output ${T.length}, but got ${a.rank}`);let E=We(T,l.data.get(a.dataId).values),D=Je(r.shape,r.dtype);for(let e=0;e<f;++e)for(let t=0;t<g;++t){let n=t*y-v.top;for(let r=0;r<_;++r){let i=r*b-v.left;for(let a=0;a<h;++a){let o=-(2**53-1),s=n<0?0:n,c=i<0?0:i;for(let t=0;t<x;++t){let r=n+t*C;if(r>=0&&r<p)for(let n=0;n<S;++n){let l=i+n*w;if(l>=0&&l<m){let i=u[e][r][l][a]+d[t][n][a];i>o&&(o=i,s=r,c=l)}}}D[e][s][c][a]+=E[e][t][r][a]}}}return{dataId:l.write(Fi(D,r.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};function ej(e){let{inputs:t,backend:n,attrs:r}=e,{image:i}=t,{canvas:a,options:o}=r,{contextOptions:s,imageOptions:c}=o||{},l=c?.alpha||1,u=s?.contextType||`2d`;if(u!==`2d`)throw Error(`Context type ${s.contextType} is not supported by the CPU backend.`);let d=a.getContext(u,s?.contextAttributes||{});if(d==null)throw Error(`Could not get the context with ${u} type.`);let[f,p]=i.shape.slice(0,2),m=i.shape.length===2?1:i.shape[2],h=n.data.get(i.dataId).values,g=i.dtype===`float32`?255:1,_=new Uint8ClampedArray(p*f*4);for(let e=0;e<f*p;++e){let t=[0,0,0,255*l];for(let n=0;n<m;n++){let r=h[e*m+n];if(i.dtype===`float32`){if(r<0||r>1)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${r}.`)}else if(i.dtype===`int32`&&(r<0||r>255))throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${r}.`);m===1?(t[0]=r*g,t[1]=r*g,t[2]=r*g):t[n]=r*g}let n=e*4;_[n+0]=Math.round(t[0]),_[n+1]=Math.round(t[1]),_[n+2]=Math.round(t[2]),_[n+3]=Math.round(t[3])}a.width=p,a.height=f;let v=new ImageData(_,p,f);return d.putImageData(v,0,0),i}var tj={kernelName:tn,backendName:`cpu`,kernelFunc:ej};function nj(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`sum`);let s;s=i.dtype===`bool`?uD({inputs:{x:i},backend:n,attrs:{dtype:`int32`}}):aD({inputs:{x:i},backend:n});let c=s.shape.length,l=Oe(a,s.shape),u=Vl(l,c),d=l,f=s;u!=null&&(f=fO({inputs:{x:s},backend:n,attrs:{perm:u}}),d=Ul(d.length,c)),Bl(`sum`,d,f.shape.length);let[p,m]=Rl(f.shape,d),h=iD(n,p,ma(f.dtype,`int32`)),g=k(m),_=n.data.get(h.dataId).values,v=n.data.get(f.dataId).values;for(let e=0;e<_.length;++e){let t=e*g,n=0;for(let e=0;e<g;++e)n+=v[t+e];_[e]=n}if(o){let e=zl(h.shape,l),t=h;h=wk({inputs:{x:h},backend:n,attrs:{shape:e}}),n.disposeIntermediateTensorInfo(t)}return n.disposeIntermediateTensorInfo(s),u!=null&&n.disposeIntermediateTensorInfo(f),h}var rj={kernelName:`Sum`,backendName:`cpu`,kernelFunc:nj};function ij(e){let{inputs:t,backend:n,attrs:r}=e,{equation:i}=r,a=t,{allDims:o,summedDims:s,idDims:c}=Cg(i,a.length);Tg(o.length,c,a);let{path:l,steps:u}=Eg(s,c),d=u.length,f=null,p=o.length,m=[];for(let e=0;e<d;++e){for(let t of u[e]){let{permutationIndices:e,expandDims:r}=wg(p,c[t]),i;Dg(e)?i=a[t]:(i=fO({inputs:{x:a[t]},backend:n,attrs:{perm:e}}),m.push(i));let o=i.shape.slice();for(let e=0;e<r.length;++e)o.splice(r[e],0,1);xe(i.shape,o)||(i=wk({inputs:{x:i},backend:n,attrs:{shape:o}}),m.push(i)),f===null?f=i:(f=iO({inputs:{a:i,b:f},backend:n}),m.push(f))}e<d-1&&(l[e]>=0&&(f=nj({inputs:{x:f},backend:n,attrs:{axis:l[e]-(o.length-p),keepDims:!1}}),m.push(f)),p--)}for(let e of m)e!==f&&n.disposeIntermediateTensorInfo(e);return f}var aj={kernelName:rn,backendName:`cpu`,kernelFunc:ij};function oj(e){let{inputs:t,backend:n}=e,{dy:r,y:i}=t;X([r,i],`eluGrad`);let a=new Float32Array(k(i.shape)),o=n.data.get(i.dataId).values,s=n.data.get(r.dataId).values;for(let e=0;e<o.length;++e){let t=o[e];t>=0?a[e]=s[e]:a[e]=s[e]*(t+1)}return n.makeTensorInfo(i.shape,`float32`,a)}var sj={kernelName:an,backendName:`cpu`,kernelFunc:oj},cj=ag,lj=og,uj=sg,dj=cg,fj=lg,pj=ug,mj={kernelName:`Erf`,backendName:`cpu`,kernelFunc:SD(`Erf`,e=>{let t=Math.sign(e),n=Math.abs(e),r=1/(1+cj*n);return t*(1-((((pj*r+fj)*r+dj)*r+uj)*r+lj)*r*Math.exp(-n*n))})};function hj(e){let{inputs:t,backend:n,attrs:r}=e,{input:i}=t,{dim:a}=r,o=i.shape.length,s=i.shape.slice(),c=a;return a<0&&(O(-(o+1)<=a,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),c=o+a+1),s.splice(c,0,1),wk({inputs:{x:i},backend:n,attrs:{shape:s}})}var gj={kernelName:sn,backendName:`cpu`,kernelFunc:hj},_j=fD(nn,tD((e,t)=>e/t)),vj={kernelName:nn,backendName:`cpu`,kernelFunc:_j};function yj(e,t,n){let r=e.shape,i=r[0],a=r[1],o=n.data.get(e.dataId),s=o.complexTensorInfos.real,c=o.complexTensorInfos.imag,l=[i,a],u=k(l),d=Ae(`float32`,u),f=Ae(`float32`,u);for(let e=0;e<i;e++){let r=BO({inputs:{x:s},backend:n,attrs:{begin:[e,0],size:[1,a]}}),i=BO({inputs:{x:c},backend:n,attrs:{begin:[e,0],size:[1,a]}}),o=nD({inputs:{real:r,imag:i},backend:n}),{real:l,imag:u}=bj(o,t,n),p=dg(l,u);for(let t=0;t<a;t++){let n=hg(p,t);d[e*a+t]=n.real,f[e*a+t]=n.imag}n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(o)}let p=n.makeTensorInfo(l,`float32`,d),m=n.makeTensorInfo(l,`float32`,f),h=nD({inputs:{real:p,imag:m},backend:n});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),h}function bj(e,t,n){let r=k(e.shape),i=n.data.get(e.dataId),a=n.data.get(i.complexTensorInfos.real.dataId).values,o=n.data.get(i.complexTensorInfos.imag.dataId).values;if(xj(r)){let i=Sj(a,o,r,t,n),s=[e.shape[0],e.shape[1]];if(t){let e=n.makeTensorInfo(s,`float32`,i.real),t=n.makeTensorInfo(s,`float32`,i.imag),a=n.makeTensorInfo([],`float32`,Ni(r,`float32`)),o=aD({inputs:{x:a},backend:n}),c=vj.kernelFunc({inputs:{a:e,b:a},backend:n}),l=vj.kernelFunc({inputs:{a:t,b:o},backend:n}),u=n.data.get(c.dataId).values,d=n.data.get(l.dataId).values;return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),{real:u,imag:d}}return i}else return fg(Cj(dg(a,o),r,t))}function xj(e){return(e&e-1)==0}function Sj(e,t,n,r,i){if(n===1)return{real:e,imag:t};let a=dg(e,t),o=n/2,s=pg(a),c=s.real,l=s.imag,u=[c.length],d=i.makeTensorInfo(u,`float32`,c),f=i.makeTensorInfo(u,`float32`,l),p=nD({inputs:{real:d,imag:f},backend:i}),m=mg(a),h=m.real,g=m.imag,_=[h.length],v=i.makeTensorInfo(_,`float32`,h),y=i.makeTensorInfo(_,`float32`,g),b=nD({inputs:{real:v,imag:y},backend:i}),x=Sj(c,l,o,r,i),S=x.real,C=x.imag,w=[S.length],T=i.makeTensorInfo(w,`float32`,S),E=i.makeTensorInfo(w,`float32`,C),D=nD({inputs:{real:T,imag:E},backend:i}),ee=Sj(h,g,o,r,i),te=ee.real,ne=ee.imag,re=[te.length],ie=i.makeTensorInfo(re,`float32`,te),ae=i.makeTensorInfo(re,`float32`,ne),oe=nD({inputs:{real:ie,imag:ae},backend:i}),se=_g(n,r),ce=[se.real.length],le=i.makeTensorInfo(ce,`float32`,se.real),ue=i.makeTensorInfo(ce,`float32`,se.imag),de=nD({inputs:{real:le,imag:ue},backend:i}),fe=iO({inputs:{a:de,b:oe},backend:i}),pe=hD({inputs:{a:D,b:fe},backend:i}),me=ik({inputs:{a:D,b:fe},backend:i}),he=sD({inputs:{input:pe},backend:i}),ge=sD({inputs:{input:me},backend:i}),_e=hA({inputs:{input:pe},backend:i}),ve=hA({inputs:{input:me},backend:i}),O=_A({inputs:[he,ge],backend:i,attrs:{axis:0}}),ye=_A({inputs:[_e,ve],backend:i,attrs:{axis:0}}),be=i.data.get(O.dataId).values,k=i.data.get(ye.dataId).values;return i.disposeIntermediateTensorInfo(d),i.disposeIntermediateTensorInfo(f),i.disposeIntermediateTensorInfo(p),i.disposeIntermediateTensorInfo(v),i.disposeIntermediateTensorInfo(y),i.disposeIntermediateTensorInfo(b),i.disposeIntermediateTensorInfo(T),i.disposeIntermediateTensorInfo(E),i.disposeIntermediateTensorInfo(D),i.disposeIntermediateTensorInfo(ie),i.disposeIntermediateTensorInfo(ae),i.disposeIntermediateTensorInfo(oe),i.disposeIntermediateTensorInfo(le),i.disposeIntermediateTensorInfo(ue),i.disposeIntermediateTensorInfo(de),i.disposeIntermediateTensorInfo(fe),i.disposeIntermediateTensorInfo(pe),i.disposeIntermediateTensorInfo(me),i.disposeIntermediateTensorInfo(he),i.disposeIntermediateTensorInfo(_e),i.disposeIntermediateTensorInfo(ge),i.disposeIntermediateTensorInfo(ve),i.disposeIntermediateTensorInfo(O),i.disposeIntermediateTensorInfo(ye),{real:be,imag:k}}function Cj(e,t,n){let r=new Float32Array(t*2);for(let i=0;i<t;i++){let a=0,o=0;for(let r=0;r<t;r++){let s=vg(i*r,t,n),c=hg(e,r);a+=c.real*s.real-c.imag*s.imag,o+=c.real*s.imag+c.imag*s.real}n&&(a/=t,o/=t),gg(r,a,o,i)}return r}function wj(e){let{inputs:t,backend:n}=e,{input:r}=t,i=k(r.shape),a=r.shape[r.shape.length-1],o=i/a,s=wk({inputs:{x:r},backend:n,attrs:{shape:[o,a]}}),c=yj(s,!1,n),l=wk({inputs:{x:c},backend:n,attrs:{shape:r.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(c),l}var Tj={kernelName:`FFT`,backendName:`cpu`,kernelFunc:wj};function Ej(e){let{backend:t,attrs:n}=e,{shape:r,value:i,dtype:a}=n,o=a||Be(i),s=je(o,k(r));return Oj(s,i,o),t.makeTensorInfo(r,o,s)}var Dj={kernelName:ln,backendName:`cpu`,kernelFunc:Ej};function Oj(e,t,n){e.fill(t)}var kj={kernelName:un,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,i=n,a=Ae(r.dtype,k(r.shape)),[o,s,c,l]=r.shape,u=i.data.get(r.dataId).values;for(let e=0;e<o;e++){let t=e*c*s*l;for(let e=0;e<s;e++){let n=c*l*e;for(let e=0;e<c;e++){let r=e*l;for(let i=0;i<l;i++){let o=Math.round(c-e-1),s=t+n+r+i,d=u[s];if(o>=0&&o<c){let e=o*l;d=u[t+n+e+i]}a[s]=d}}}}return{dataId:i.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};function Aj(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=yA({inputs:{x:i,filter:a},backend:n,attrs:{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f}});if(o){let e=h;if(u===`NCHW`&&o.shape.length===1&&o.shape[0]!==1){let e=wk({inputs:{x:o},backend:n,attrs:{shape:[o.shape[0],1,1]}});h=hD({inputs:{a:h,b:e},backend:n}),n.disposeIntermediateTensorInfo(e)}else h=hD({inputs:{a:h,b:o},backend:n});n.disposeIntermediateTensorInfo(e)}if(p){let e=h;if(u===`NCHW`&&p===`prelu`&&s.shape.length===1&&s.shape[0]!==1){let e=wk({inputs:{x:s},backend:n,attrs:{shape:[s.shape[0],1,1]}});h=Ck(n,h,p,e,m),n.disposeIntermediateTensorInfo(e)}else h=Ck(n,h,p,s,m);n.disposeIntermediateTensorInfo(e)}return h}var jj={kernelName:ni,backendName:`cpu`,kernelFunc:Aj};function Mj(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=UA({inputs:{x:i,filter:a},backend:n,attrs:{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f}});if(o){let e=h;h=hD({inputs:{a:h,b:o},backend:n}),n.disposeIntermediateTensorInfo(e)}if(p){let e=h;h=Ck(n,h,p,s,m),n.disposeIntermediateTensorInfo(e)}return h}var Nj={kernelName:ri,backendName:`cpu`,kernelFunc:Mj};function Pj(e){let{inputs:t,backend:n}=e,{params:r,indices:i}=t,a=k(r.shape),o=i.shape,s=o[o.length-1],[c,l,u,d]=vh(r,i);if(l===0)return n.makeTensorInfo(c,r.dtype,[]);let f=n.data.get(i.dataId).values,p=zD(f,n.bufferSync(r),r.dtype,l,s,u,d,r.shape,a);return n.makeTensorInfo(c,r.dtype,p.values)}var Fj={kernelName:hn,backendName:`cpu`,kernelFunc:Pj};function Ij(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,indices:a}=t,{axis:o,batchDims:s}=r;X([i,a],`gatherV2`);let c=Oe(o,i.shape)[0],l=n.data.get(a.dataId).values,u=i.shape[c];for(let e=0;e<l.length;++e){let t=l[e];O(t<=u-1&&t>=0,()=>`GatherV2: the index value ${t} is not in [0, ${u-1}]`)}let d=s;s??(d=0);let f=k(a.shape),p=Gg(i,a,c,d),m=wk({inputs:{x:i},backend:n,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),h=wk({inputs:{x:a},backend:n,attrs:{shape:[p.batchSize,f/p.batchSize]}}),g=[p.batchSize,p.outerSize,f/p.batchSize,p.sliceSize],_=n.bufferSync(h),v=BD(n.bufferSync(m),_,g);return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),n.makeTensorInfo(p.outputShape,v.dtype,v.values)}var Lj={kernelName:mn,backendName:`cpu`,kernelFunc:Ij};function Rj(e){let{inputs:t,backend:n}=e,{input:r}=t,i=k(r.shape),a=r.shape[r.shape.length-1],o=i/a,s=wk({inputs:{x:r},backend:n,attrs:{shape:[o,a]}}),c=yj(s,!0,n),l=wk({inputs:{x:c},backend:n,attrs:{shape:r.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(c),l}var zj={kernelName:yn,backendName:`cpu`,kernelFunc:Rj},Bj={kernelName:xn,backendName:`cpu`,kernelFunc:SD(xn,e=>+!!Number.isFinite(e),`bool`)},Vj={kernelName:Sn,backendName:`cpu`,kernelFunc:SD(Sn,e=>+(Math.abs(e)===1/0),`bool`)},Hj={kernelName:Cn,backendName:`cpu`,kernelFunc:SD(Cn,e=>+!!Number.isNaN(e),`bool`)};function Uj(e){let{backend:t,attrs:n}=e,{start:r,stop:i,num:a}=n,o=YD(r,i,a);return t.makeTensorInfo([o.length],`float32`,o)}var Wj={kernelName:Dn,backendName:`cpu`,kernelFunc:Uj},Gj={kernelName:On,backendName:`cpu`,kernelFunc:SD(On,e=>Math.log1p(e))},Kj={kernelName:kn,backendName:`cpu`,kernelFunc:fD(kn,tD((e,t)=>e&&t),null,`bool`)},qj={kernelName:An,backendName:`cpu`,kernelFunc:SD(An,e=>+!e,`bool`)},Jj={kernelName:jn,backendName:`cpu`,kernelFunc:fD(jn,tD((e,t)=>e||t),null,`bool`)};function Yj(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{depthRadius:a,bias:o,alpha:s,beta:c}=r;X(i,`LRN`);let l=i.shape[3],u=l-1,d=n.data.get(i.dataId).values,f=k(i.shape),p=new Float32Array(f);function m(e){let t=e%l,n=e-t+Math.max(0,t-a),r=e-t+Math.min(t+a,u),i=0;for(;n<=r;n++){let e=d[n];i+=e*e}return i}for(let e=0;e<f;e++){let t=m(e);p[e]=d[e]*(o+s*t)**+-c}return n.makeTensorInfo(i.shape,i.dtype,p)}var Xj={kernelName:`LRN`,backendName:`cpu`,kernelFunc:Yj};function Zj(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,y:a,dy:o}=t,{depthRadius:s,bias:c,alpha:l,beta:u}=r;X(o,`LRNGrad`);let d=k(o.shape),f=o.shape[3],p=n.data.get(o.dataId).values,m=n.data.get(i.dataId).values,h=n.data.get(a.dataId).values,g=new Float32Array(d),_=d;for(let e=0;e<_;e++){let t=e%f,n=e-t+Math.max(0,t-s),r=e-t+Math.min(f,t+s+1),i=0;for(let e=n;e<r;e++)i+=m[e]**2;i=l*i+c;for(let t=n;t<r;t++){let n=-2*l*u*m[t]*h[e]/i;e===t&&(n+=i**+-u),n*=p[e],g[t]+=n}}return n.makeTensorInfo(o.shape,i.dtype,g)}var Qj={kernelName:Nn,backendName:`cpu`,kernelFunc:Zj};function $j(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reductionIndices:a,keepDims:o}=r,s=n,c=i.shape,l=c.length,u=Oe(a,c),d=u,f=Vl(d,l),p=s.data.get(i.dataId).values;if(f!=null){let e=Array(l);for(let t=0;t<e.length;t++)e[t]=c[f[t]];p=dO(p,c,i.dtype,f,e),d=Ul(d.length,l),c=e}X(i,`max`),Bl(`max`,d,l);let[m,h]=Rl(c,d),g=k(h),_=QD(p,g,m,i.dtype),v=s.write(_,m,i.dtype),y=m;return o&&(y=zl(m,u)),{dataId:v,shape:y,dtype:i.dtype}}var eM={kernelName:`Max`,backendName:`cpu`,kernelFunc:$j};function tM(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;X(i,`maxPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;O(Ys(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Fs(i.shape,a,o,1,s,c),u;if(l.filterWidth===1&&l.filterHeight===1&&xe(l.inShape,l.outShape))u=aD({inputs:{x:i},backend:n});else{let e=n.data.get(i.dataId).values,t=A(i.shape),r=qk(e,i.shape,i.dtype,t,l,`max`);u=n.makeTensorInfo(l.outShape,i.dtype,r.values)}return u}var nM={kernelName:Fn,backendName:`cpu`,kernelFunc:tM};function rM(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r;X(i,`maxPool3d`);let u=Is(i.shape,a,o,1,s,c,l),d=n.data.get(i.dataId).values,f=Yk(d,i.shape,i.dtype,A(i.shape),u,`max`);return n.makeTensorInfo(f.shape,`float32`,f.values)}var iM={kernelName:Ln,backendName:`cpu`,kernelFunc:rM};function aM(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,{filterSize:o,strides:s,pad:c,dimRoundingMode:l}=r;X([i,a],`maxPool3DGrad`);let u=Is(a.shape,o,s,1,c,l),d=Xk(n.bufferSync(a),u),f=u.strideDepth,p=u.strideHeight,m=u.strideWidth,h=u.dilationDepth,g=u.dilationHeight,_=u.dilationWidth,v=u.effectiveFilterDepth,y=u.effectiveFilterHeight,b=u.effectiveFilterWidth,x=v-1-u.padInfo.front,S=b-1-u.padInfo.left,C=y-1-u.padInfo.top,w=es(a.shape,`float32`),T=n.bufferSync(i);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inDepth;++n)for(let r=0;r<u.inHeight;++r)for(let i=0;i<u.inWidth;++i){let a=n-x,o=r-C,s=i-S,c=0;for(let n=0;n<v;n+=h){let r=(a+n)/f;if(!(r<0||r>=u.outDepth||Math.floor(r)!==r))for(let i=0;i<y;i+=g){let a=(o+i)/p;if(!(a<0||a>=u.outHeight||Math.floor(a)!==a))for(let o=0;o<b;o+=_){let l=(s+o)/m;if(l<0||l>=u.outWidth||Math.floor(l)!==l)continue;let f=+(v*y*b-1-d.get(e,r,a,l,t)===n*y*b+i*b+o);if(f===0)continue;let p=T.get(e,r,a,l,t);c+=p*f}}}w.set(c,e,n,r,i,t)}return n.makeTensorInfo(w.shape,w.dtype,w.values)}var oM={kernelName:Rn,backendName:`cpu`,kernelFunc:aM};function sM(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a,output:o}=t,s=a;X([a,o],`maxPoolGrad`);let{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=r,f=Fs(s.shape,c,l,1,u,d),p=n.data.get(s.dataId).values,m=es(f.outShape,s.dtype,Jk(p,s.shape,s.dtype,f).values),h=f.strideHeight,g=f.strideWidth,_=f.dilationHeight,v=f.dilationWidth,y=f.effectiveFilterHeight,b=f.effectiveFilterWidth,x=b-1-f.padInfo.left,S=y-1-f.padInfo.top,C=es(s.shape,`float32`),w=n.data.get(i.dataId).values,T=es(i.shape,`float32`,w);for(let e=0;e<f.batchSize;++e)for(let t=0;t<f.inChannels;++t)for(let n=0;n<f.inHeight;++n)for(let r=0;r<f.inWidth;++r){let i=n-S,a=r-x,o=0;for(let n=0;n<y;n+=_){let r=(i+n)/h;if(!(r<0||r>=f.outHeight||Math.floor(r)!==r))for(let i=0;i<b;i+=v){let s=(a+i)/g;if(s<0||s>=f.outWidth||Math.floor(s)!==s)continue;let c=+(y*b-1-m.get(e,r,s,t)===n*b+i);if(c===0)continue;let l=T.get(e,r,s,t);o+=l*c}}C.set(o,e,n,r,t)}return n.makeTensorInfo(C.shape,C.dtype,C.values)}var cM={kernelName:In,backendName:`cpu`,kernelFunc:sM};function lM(e,t,n,r,i){let a=qk(e,t,n,A(t),i,`max`),o=Jk(e,t,n,i,!0,r);return[a.values,o.values]}var uM={kernelName:zn,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:i,strides:a,pad:o,includeBatchInIndex:s}=t,c=n;X(r,`MaxPoolWithArgmax`);let l=c.data.get(r.dataId).values,u=Fs(r.shape,i,a,[1,1],o),[d,f]=lM(l,r.shape,r.dtype,s,u),p=c.write(d,u.outShape,r.dtype),m=c.write(f,u.outShape,r.dtype);return[{dataId:p,shape:u.outShape,dtype:r.dtype},{dataId:m,shape:u.outShape,dtype:`int32`}]}};function dM(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=Oe(a,i.shape),c=Rl(i.shape,s)[1],l=k(c),u=[],d=n.makeTensorInfo([],`float32`,new Float32Array([l]));u.push(d);let f=uD({inputs:{x:i},backend:n,attrs:{dtype:`float32`}});u.push(f);let p=_j({inputs:{a:f,b:d},backend:n});u.push(p);let m=nj({inputs:{x:p},backend:n,attrs:{axis:a,keepDims:o}});return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}var fM={kernelName:Bn,backendName:`cpu`,kernelFunc:dM};function pM(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`min`);let s=Oe(a,i.shape),c=s,l=Vl(c,i.shape.length),u=i;l!=null&&(u=fO({inputs:{x:i},backend:n,attrs:{perm:l}}),c=Ul(c.length,i.shape.length)),Bl(`min`,c,u.shape.length);let[d,f]=Rl(u.shape,c),p=k(f),m=qe(k(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];(Number.isNaN(r)||r<n)&&(n=r)}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=zl(d,s),t=wk({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var mM={kernelName:`Min`,backendName:`cpu`,kernelFunc:pM};function hM(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,mode:o}=r;X(i,`mirrorPad`);let s=a.map((e,t)=>e[0]+i.shape[t]+e[1]),c=a.map(e=>e[0]),l=a.map((e,t)=>e[0]+i.shape[t]),u=o===`reflect`?0:1,d=n.data.get(i.dataId).values,f=i.shape.length,p=A(i.shape),m=k(s),h=s.length,g=A(s),_=Ae(i.dtype,m);for(let e=0;e<m;e++){let t=Ze(e,h,g);for(let e=0;e<h;e++)t[e]<c[e]?t[e]=c[e]*2-t[e]-u:t[e]>=l[e]&&(t[e]=(l[e]-1)*2-t[e]+u);t=t.map((e,t)=>e-c[t]),_[e]=d[Xe(t,f,p)]}return{dataId:n.write(_,s,i.dtype),shape:s,dtype:i.dtype}}var gM={kernelName:Hn,backendName:`cpu`,kernelFunc:hM},_M={kernelName:`Mod`,backendName:`cpu`,kernelFunc:fD(`Mod`,tD(((e,t)=>{let n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t})))};function vM(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{dim:a}=r,o=i.shape.length,s=a;if(s===-1&&(s=o-1),s!==o-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${o} and dim was ${s}`);let c=Oe([s],i.shape),l=$j({inputs:{x:i},backend:n,attrs:{reductionIndices:c,keepDims:!1}}),u=zl(l.shape,c),d=wk({inputs:{x:l},backend:n,attrs:{shape:u}}),f=ik({inputs:{a:i,b:d},backend:n}),p=jD({inputs:{x:f},backend:n}),m=nj({inputs:{x:p},backend:n,attrs:{axis:c,keepDims:!1}}),h=wk({inputs:{x:m},backend:n,attrs:{shape:u}}),g=_j({inputs:{a:p,b:h},backend:n});return n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),g}var yM={kernelName:Ar,backendName:`cpu`,kernelFunc:vM};function bM(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{numSamples:a,seed:o,normalized:s}=r;X(i,`multinomial`);let c=s?i:vM({inputs:{logits:i},backend:n,attrs:{dim:-1}}),l=c.shape[0],u=c.shape[1],d=n.data.get(c.dataId).values,f=[l,a],p=qe(k(f),`int32`);for(let e=0;e<l;++e){let t=e*u,n=new Float32Array(u-1);n[0]=d[t];for(let e=1;e<n.length;++e)n[e]=n[e-1]+d[t+e];let r=tf.alea(o.toString()),i=e*a;for(let e=0;e<a;++e){let t=r();p[i+e]=n.length;for(let r=0;r<n.length;r++)if(t<n[r]){p[i+e]=r;break}}}return s||n.disposeIntermediateTensorInfo(c),n.makeTensorInfo(f,`int32`,p)}var xM={kernelName:Un,backendName:`cpu`,kernelFunc:bM},SM=fm;function CM(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=r;X(i,`NonMaxSuppression`);let l=n.data.get(i.dataId).values,u=n.data.get(a.dataId).values,{selectedIndices:d}=SM(l,u,o,s,c);return n.makeTensorInfo([d.length],`int32`,new Int32Array(d))}var wM={kernelName:Kn,backendName:`cpu`,kernelFunc:CM},TM=pm;function EM(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,padToMaxOutputSize:l}=r;X(i,`NonMaxSuppressionPadded`);let u=n.data.get(i.dataId).values,d=n.data.get(a.dataId).values,{selectedIndices:f,validOutputs:p}=TM(u,d,o,s,c,l);return[n.makeTensorInfo([f.length],`int32`,new Int32Array(f)),n.makeTensorInfo([],`int32`,new Int32Array([p]))]}var DM={kernelName:qn,backendName:`cpu`,kernelFunc:EM},OM=mm;function kM(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=r;X(i,`NonMaxSuppressionWithScore`);let u=n.data.get(i.dataId).values,d=n.data.get(a.dataId).values,{selectedIndices:f,selectedScores:p}=OM(u,d,o,s,c,l);return[n.makeTensorInfo([f.length],`int32`,new Int32Array(f)),n.makeTensorInfo([p.length],`float32`,new Float32Array(p))]}var AM={kernelName:Jn,backendName:`cpu`,kernelFunc:kM};function jM(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i}=t,{dtype:a,depth:o,onValue:s,offValue:c}=r;X(i,`oneHot`);let l=k(i.shape),u=new Float32Array(l*o);u.fill(c);let d=n.data.get(i.dataId).values;for(let e=0;e<l;++e)d[e]>=0&&d[e]<o&&(u[e*o+d[e]]=s);return n.makeTensorInfo([...i.shape,o],a,u)}var MM={kernelName:Xn,backendName:`cpu`,kernelFunc:jM};function NM(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`zerosLike is not supported for string tensors`);if(r.dtype===`complex64`){let e=sD({inputs:{input:r},backend:n}),t=NM({inputs:{x:e},backend:n}),i=hA({inputs:{input:r},backend:n}),a=NM({inputs:{x:i},backend:n}),o=nD({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return Ej({backend:n,attrs:{shape:r.shape,value:0,dtype:r.dtype}})}var PM={kernelName:Zr,backendName:`cpu`,kernelFunc:NM};function FM(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`onesLike is not supported for string tensors`);if(r.dtype===`complex64`){let e=sD({inputs:{input:r},backend:n}),t=FM({inputs:{x:e},backend:n}),i=hA({inputs:{input:r},backend:n}),a=NM({inputs:{x:i},backend:n}),o=nD({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return Ej({backend:n,attrs:{shape:r.shape,value:1,dtype:r.dtype}})}var IM={kernelName:Yn,backendName:`cpu`,kernelFunc:FM};function LM(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r;if(t.length===1)return hj({inputs:{input:t[0]},backend:n,attrs:{dim:i}});let a=t[0].shape,o=t[0].dtype;t.forEach(e=>{ye(a,e.shape,`All tensors passed to stack must have matching shapes`),O(o===e.dtype,()=>`All tensors passed to stack must have matching dtypes`)});let s=[],c=_A({inputs:t.map(e=>{let t=hj({inputs:{input:e},backend:n,attrs:{dim:i}});return s.push(t),t}),backend:n,attrs:{axis:i}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}var RM={kernelName:Zn,backendName:`cpu`,kernelFunc:LM};function zM(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,constantValue:o}=r;X(i,`pad`);let s=a.map((e,t)=>e[0]+i.shape[t]+e[1]),c=a.map(e=>e[0]),l=n.data.get(i.dataId).values,u=k(i.shape),d=i.shape.length,f=A(i.shape),p=k(s),m=s.length,h=A(s),g=Ae(i.dtype,p);o!==0&&g.fill(o);for(let e=0;e<u;e++){let t=Xe(Ze(e,d,f).map((e,t)=>e+c[t]),m,h);g[t]=l[e]}return{dataId:n.write(g,s,i.dtype),shape:s,dtype:i.dtype}}var BM={kernelName:Qn,backendName:`cpu`,kernelFunc:zM},VM={kernelName:`Pow`,backendName:`cpu`,kernelFunc:fD(`Pow`,tD((e,t)=>e**+t))};function HM(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:i,paramsDenseValues:a,indices:o}=t,{outputRaggedRank:s}=r,c=i.map(e=>n.data.get(e.dataId).values),l=i.map(e=>e.shape),u=n.data.get(a.dataId).values,d=n.data.get(o.dataId).values,[f,p,m]=wO(c,l,u,a.shape,a.dtype,d,o.shape,s),h=f.map(e=>n.makeTensorInfo([e.length],`int32`,e)),g=n.makeTensorInfo(m,a.dtype,p);return h.concat([g])}var UM={kernelName:tr,backendName:`cpu`,kernelFunc:HM};function WM(e){let{inputs:t,backend:n}=e,{starts:r,limits:i,deltas:a}=t,o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=EO(o,r.shape,r.dtype,s,i.shape,c,a.shape);return[n.makeTensorInfo([l.length],`int32`,l),n.makeTensorInfo([u.length],r.dtype,u)]}var GM={kernelName:nr,backendName:`cpu`,kernelFunc:WM};function KM(e){let{inputs:t,backend:n,attrs:r}=e,{shape:i,values:a,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:c}=r,l=n.data.get(i.dataId).values,u=n.data.get(a.dataId).values,d=n.data.get(o.dataId).values,f=s.map(e=>n.data.get(e.dataId).values),p=s.map(e=>e.shape),[m,h]=jO(l,i.shape,u,a.shape,a.dtype,d,o.shape,f,p,c);return n.makeTensorInfo(m,a.dtype,h)}var qM={kernelName:rr,backendName:`cpu`,kernelFunc:KM};function JM(e){let{backend:t,attrs:n}=e,{start:r,stop:i,dtype:a,step:o}=n,s=MO(r,i,o,a);return t.makeTensorInfo([s.length],a,s)}var YM={kernelName:ir,backendName:`cpu`,kernelFunc:JM},XM={kernelName:or,backendName:`cpu`,kernelFunc:SD(or,e=>1/e)};function ZM(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r;X(i,`resizeBilinear`);let c=A(i.shape),[l,u]=s,[d,f,p,m]=i.shape,h=n.data.get(i.dataId).values,g=new Float32Array(k([d,l,u,m])),_=[a&&l>1?f-1:f,a&&u>1?p-1:p],v=[a&&l>1?l-1:l,a&&u>1?u-1:u],y=0,b=_[0]/v[0],x=_[1]/v[1];for(let e=0;e<d;e++)for(let t=0;t<l;t++){let n;n=o?b*(t+.5)-.5:b*t;let r=Math.max(0,Math.floor(n)),i=n-r,a=Math.min(f-1,Math.ceil(n)),s=e*c[0]+r*c[1],l=e*c[0]+a*c[1];for(let e=0;e<u;e++){let t;t=o?x*(e+.5)-.5:x*e;let n=Math.max(0,Math.floor(t)),r=t-n,a=Math.min(p-1,Math.ceil(t)),u=s+n*c[2],d=l+n*c[2],f=s+a*c[2],_=l+a*c[2];for(let e=0;e<m;e++){let t=h[u+e],n=h[d+e],a=h[f+e],o=h[_+e],s=t+(a-t)*r,c=s+(n+(o-n)*r-s)*i;g[y++]=c}}}return n.makeTensorInfo([d,l,u,m],`float32`,g)}var QM={kernelName:dr,backendName:`cpu`,kernelFunc:ZM};function $M(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r;X([a,i],`resizeBilinearGrad`);let s=A(i.shape),[c,l,u,d]=i.shape,[,f,p]=a.shape,m=new Float32Array(c*l*u*d),h=[o&&f>1?l-1:l,o&&p>1?u-1:u],g=[o&&f>1?f-1:f,o&&p>1?p-1:p],_=h[0]/g[0],v=h[1]/g[1],y=n.data.get(a.dataId).values,b=0;for(let e=0;e<c;e++){let t=e*s[0];for(let e=0;e<f;e++){let n=e*_,r=Math.floor(n),i=Math.min(Math.ceil(n),l-1),a=t+r*s[1],o=t+i*s[1],c=n-r,f=1-c;for(let e=0;e<p;e++){let t=e*v,n=Math.floor(t),r=Math.min(Math.ceil(t),u-1),i=t-n,l=1-i,p=a+n*s[2],h=a+r*s[2],g=o+n*s[2],_=o+r*s[2],x=f*l,S=f*i,C=c*l,w=c*i;for(let e=0;e<d;e++){let t=y[b++];m[p+e]+=t*x,m[h+e]+=t*S,m[g+e]+=t*C,m[_+e]+=t*w}}}}return n.makeTensorInfo([c,u,l,d],`float32`,m)}var eN={kernelName:fr,backendName:`cpu`,kernelFunc:$M};function tN(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r;X(i,`resizeNearestNeighbor`);let c=A(i.shape),[l,u]=s,[d,f,p,m]=i.shape,h=n.data.get(i.dataId).values,g=new Float32Array(d*l*u*m),_=[a&&l>1?f-1:f,a&&u>1?p-1:p],v=[a&&l>1?l-1:l,a&&u>1?u-1:u],y=_[0]/v[0],b=_[1]/v[1],x=0;for(let e=0;e<d;e++){let t=e*c[0];for(let e=0;e<l;e++){let n=o?y*(e+.5):y*e,r=Math.min(f-1,a?Math.round(n):Math.floor(n));o&&(r=Math.max(0,r));let i=t+r*c[1];for(let e=0;e<u;e++){let t=o?b*(e+.5):b*e,n=Math.min(p-1,a?Math.round(t):Math.floor(t));o&&(n=Math.max(0,n));let r=i+n*c[2];for(let e=0;e<m;e++){let t=h[r+e];g[x++]=t}}}}return n.makeTensorInfo([d,l,u,m],i.dtype,g)}var nN={kernelName:lr,backendName:`cpu`,kernelFunc:tN};function rN(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r;X([a,i],`resizeNearestNeighborGrad`);let s=A(i.shape),c=A(a.shape),[l,u,d,f]=i.shape,[,p,m]=a.shape,h=new Float32Array(l*u*d*f),g=n.data.get(a.dataId).values,_=[o&&p>1?u-1:u,o&&m>1?d-1:d],v=[o&&p>1?p-1:p,o&&m>1?m-1:m],y=_[0]/v[0],b=_[1]/v[1],x=1/y,S=1/b,C=Math.ceil(x)*2+2,w=Math.ceil(S)*2+2;for(let e=0;e<l;e++){let t=e*s[0];for(let e=0;e<u;e++){let n=t+e*s[1],r=Math.floor(e*x),i=Math.floor(r-C/2);for(let r=0;r<d;r++){let a=n+r*s[2],l=Math.floor(r*S),_=Math.floor(l-w/2);for(let n=0;n<f;n++){let s=0;for(let a=0;a<C;a++){let l=a+i;if(l<0||l>=p)continue;let f=t+l*c[1],h=l*y,v=Math.min(u-1,o?Math.round(h):Math.floor(h));if(e===v)for(let e=0;e<w;e++){let t=e+_;if(t<0||t>=m)continue;let i=f+t*c[2],a=t*b,l=Math.min(d-1,o?Math.round(a):Math.floor(a));r===l&&(s+=g[i+n])}}h[a+n]=s}}}}return n.makeTensorInfo(i.shape,i.dtype,h)}var iN={kernelName:ur,backendName:`cpu`,kernelFunc:rN};function aN(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dims:a}=r;X(i,`reverse`);let o=i.shape.length,s=Oe(a,i.shape);if(o===0)return aD({inputs:{x:i},backend:n});let c=new ta(i.shape,i.dtype),l=n.bufferSync(i);for(let e=0;e<c.size;e++){let t=c.indexToLoc(e),n=t.slice();s.forEach(e=>n[e]=i.shape[e]-1-n[e]),c.set(l.get(...n),...t)}return n.makeTensorInfo(c.shape,c.dtype,c.values)}var oN={kernelName:mr,backendName:`cpu`,kernelFunc:aN},sN={kernelName:ei,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:i,fillValue:a,center:o}=t,s=n,c=Ae(r.dtype,k(r.shape)),[l,u,d,f]=r.shape,[p,m]=Zh(o,u,d),h=Math.sin(i),g=Math.cos(i),_=s.data.get(r.dataId).values;for(let e=0;e<l;e++){let t=e*d*u*f;for(let e=0;e<u;e++){let n=d*f*e;for(let r=0;r<d;r++){let i=r*f;for(let o=0;o<f;o++){let s=[l,e,r,o],v=s[2],y=s[1],b=(v-p)*g-(y-m)*h,x=(v-p)*h+(y-m)*g;b=Math.round(b+p),x=Math.round(x+m);let S=a;if(typeof a!=`number`&&(S=o===3?255:a[o]),b>=0&&b<d&&x>=0&&x<u){let e=d*f*x,n=b*f;S=_[t+e+n+o]}let C=t+n+i+o;c[C]=S}}}}return{dataId:s.write(c,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},cN={kernelName:hr,backendName:`cpu`,kernelFunc:SD(hr,e=>{let t=Math.floor(e);return e-t<.5?Math.floor(e):e-t>.5?Math.ceil(e):t%2==0?t:t+1})};function lN(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i,updates:a}=t,{shape:o}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=_p(a,i,o),f=FO(n.bufferSync(i),n.bufferSync(a),o,d,l,c,s,u,0,!0);return n.makeTensorInfo(o,f.dtype,f.values)}var uN={kernelName:_r,backendName:`cpu`,kernelFunc:lN};function dN(e,t){let n=0,r=e.length,i=0;for(;n<r;)i=Math.floor((n+r)/2),e[i]<t?n=i+1:r=i;return r}function fN(e,t){let n=0,r=e.length,i=0;for(;n<r;)i=Math.floor((n+r)/2),e[i]<=t?n=i+1:r=i;return r}function pN(e,t,n,r,i,a){let o=je(`int32`,n*i);for(let s=0;s<n;++s){let n=e.slice(s*r,(s+1)*r),c=s*i;for(let e=0;e<i;++e)o[c+e]=a===`left`?dN(n,t[e+c]):fN(n,t[e+c])}return o}function mN(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:i,values:a}=t,{side:o}=r,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,l=pN(s,c,i.shape[0],i.shape[1],a.shape[1],o);return n.makeTensorInfo(a.shape,`int32`,l)}var hN={kernelName:yr,backendName:`cpu`,kernelFunc:mN};function gN(e){let{inputs:t,backend:n}=e,{condition:r,t:i,e:a}=t;X([r,i,a],`select`);let o=r.shape.length,s=n.data.get(r.dataId).values,c=n.data.get(i.dataId).values,l=n.data.get(a.dataId).values,u=ma(i.dtype,a.dtype),d=qe(k(i.shape),u),f=0,p=o===0||o>1||i.shape.length===1?1:k(i.shape.slice(1));for(let e=0;e<s.length;e++)for(let t=0;t<p;t++)s[e]===1?d[f++]=c[e]:d[f++]=l[e];return n.makeTensorInfo(i.shape,u,d)}var _N={kernelName:br,backendName:`cpu`,kernelFunc:gN},vN=rg,yN=ig,bN={kernelName:xr,backendName:`cpu`,kernelFunc:SD(xr,e=>e>=0?yN*e:vN*(Math.exp(e)-1))},xN={kernelName:wr,backendName:`cpu`,kernelFunc:SD(wr,e=>e<0?-1:+(e>0))},SN={kernelName:`Sin`,backendName:`cpu`,kernelFunc:SD(`Sin`,e=>Math.sin(e))},CN={kernelName:Cr,backendName:`cpu`,kernelFunc:SD(Cr,e=>Math.sinh(e))},wN=Math.log(1.1920928955078125e-7)+2,TN={kernelName:Er,backendName:`cpu`,kernelFunc:SD(Er,e=>{let t=e>-wN,n=e<wN,r=Math.exp(e),i;return i=n?r:t?e:Math.log(1+r),i})};function EN(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,paddings:o}=r;X([i],`spaceToBatchND`);let s=k(a),c=[[0,0]];c.push(...o);for(let e=1+a.length;e<i.shape.length;++e)c.push([0,0]);let l=BM.kernelFunc({inputs:{x:i},backend:n,attrs:{paddings:c,constantValue:0}}),u=Qh(l.shape,a,s,!1),d=$h(u.length,a.length,!1),f=eg(l.shape,a,s,!1),p=wk({inputs:{x:l},backend:n,attrs:{shape:u}}),m=fO({inputs:{x:p},backend:n,attrs:{perm:d}}),h=wk({inputs:{x:m},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),h}var DN={kernelName:Or,backendName:`cpu`,kernelFunc:EN};function ON(e){let{inputs:t,backend:n}=e,{indices:r,values:i,denseShape:a,defaultValue:o}=t;if(a.shape.length!==1)throw Error(`Dense shape must be a vector, saw:
        ${a.shape}`);if(r.shape.length!==2)throw Error(`Indices must be a matrix, saw:
        ${r.shape}`);if(i.shape.length!==1)throw Error(`Values must be a vector, saw:
        ${i.shape}`);if(o.shape.length!==0)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=n.data.get(r.dataId).values,c=n.data.get(i.dataId).values,l=n.data.get(a.dataId).values,u=n.data.get(o.dataId).values[0],[d,f,p,m,h]=HO(s,r.shape,r.dtype,c,i.dtype,l,u);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],i.dtype,p),n.makeTensorInfo([m.length],`bool`,new Uint8Array(m.map(e=>Number(e)))),n.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}var kN={kernelName:jr,backendName:`cpu`,kernelFunc:ON};function AN(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:i,newShape:a}=t;if(r.shape.length!==2)throw Error(`Input indices should be a matrix but received shape
        ${r.shape}`);if(i.shape.length!==1)throw Error(`Input shape should be a vector but received shape
        ${i.shape}`);if(a.shape.length!==1)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let o=Array.from(n.data.get(i.dataId).values),s=n.data.get(r.dataId).values,c=Array.from(n.data.get(a.dataId).values),[l,u,d]=UO(s,r.shape,r.dtype,o,c);return[n.makeTensorInfo(u,r.dtype,l),n.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}var jN={kernelName:Mr,backendName:`cpu`,kernelFunc:AN};function MN(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
          ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
          ${a.shape}`);if(i.shape[0]!==a.shape[0])throw Error(`segmentIds and indices should have same size.`);let o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=WO(o,r.shape,r.dtype,s,c,!0);return n.makeTensorInfo(u,r.dtype,l)}var NN={kernelName:Nr,backendName:`cpu`,kernelFunc:MN};function PN(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
         ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
         ${a.shape}`);if(i.shape[0]!==a.shape[0])throw Error(`segmentIds and indices should have same size.`);let o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=WO(o,r.shape,r.dtype,s,c);return n.makeTensorInfo(u,r.dtype,l)}var FN={kernelName:Pr,backendName:`cpu`,kernelFunc:PN};function IN(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:i,sparseValues:a,defaultValue:o}=t,{outputShape:s}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:f}=_p(a,i,s),p=n.bufferSync(i),m;switch(a.dtype){case`bool`:m=FO(p,n.bufferSync(a),s,f,u,l,c,d,!!n.data.get(o.dataId).values[0],!1);break;case`float32`:{let e=n.bufferSync(a),t=n.data.get(o.dataId).values[0];m=FO(p,e,s,f,u,l,c,d,t,!1);break}case`int32`:{let e=n.bufferSync(a),t=n.data.get(o.dataId).values[0];m=FO(p,e,s,f,u,l,c,d,t,!1);break}case`string`:m=FO(p,n.bufferSync(a),s,f,u,l,c,d,Ri(n.data.get(o.dataId).values[0]),!1);break;default:throw Error(`Unsupported type ${a.dtype}`)}return n.makeTensorInfo(s,m.dtype,m.values)}var LN={kernelName:Fr,backendName:`cpu`,kernelFunc:IN};function RN(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{numOrSizeSplits:a,axis:o}=r,s=Oe(o,i.shape)[0],c=kg(i,a,s),l=Array(i.shape.length).fill(0),u=i.shape.slice();return c.map(e=>{let t=[...u];t[s]=e;let r=BO({inputs:{x:i},backend:n,attrs:{begin:l,size:t}});return l[s]+=e,r})}var zN={kernelName:kr,backendName:`cpu`,kernelFunc:RN},BN={kernelName:Lr,backendName:`cpu`,kernelFunc:({inputs:e,backend:t})=>{let{x:n}=e,r=t;X(n,`square`);let i=r.data.get(n.dataId).values,a=new Float32Array(i.length);for(let e=0;e<i.length;++e){let t=i[e];a[e]=t*t}return{dataId:r.write(a,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},VN={kernelName:Qr,backendName:`cpu`,kernelFunc:SD(Qr,(e,t)=>isNaN(e)?NaN:e>0?1:t.alpha)};function HN(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,end:o,strides:s,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:f}=r;X(i,`stridedSlice`);let{finalShapeSparse:p,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:_,begin:v,end:y,strides:b}=Lh(i.shape,a,o,s,c,l,u,d,f),x;if(h)x=wk({inputs:{x:i},backend:n,attrs:{shape:m}});else if(g||_){O(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=wh(v,y,b),t=BO({inputs:{x:i},backend:n,attrs:{begin:v,size:e}});x=wk({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else{let e=ZO(p,n.bufferSync(i),b,v);x=n.makeTensorInfo(m,e.dtype,e.values)}return x}var UN={kernelName:zr,backendName:`cpu`,kernelFunc:HN};function WN(e){let{inputs:t,backend:n,attrs:r}=e,{separator:i,nGramWidths:a,leftPad:o,rightPad:s,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:d}=t,f=n.data.get(u.dataId).values,p=n.data.get(d.dataId).values,[m,h]=$O(f,p,i,a,o,s,c,l);return[n.makeTensorInfo([m.length],`string`,m),n.makeTensorInfo(d.shape,`int32`,h)]}var GN={kernelName:Br,backendName:`cpu`,kernelFunc:WN};function KN(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:i}=r,{input:a,delimiter:o}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(a.shape.length!==1)throw Error(`Input must be a vector, got shape: ${a.shape}`);if(o.shape.length!==0)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let s=n.data.get(a.dataId).values,c=n.data.get(o.dataId).values[0],[l,u,d]=tk(s,c,i),f=u.length;return[n.makeTensorInfo([f,2],`int32`,l),n.makeTensorInfo([f],`string`,u),n.makeTensorInfo([2],`int32`,new Int32Array(d))]}var qN={kernelName:Vr,backendName:`cpu`,kernelFunc:KN};function JN(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:i}=r,{input:a}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(i<=0)throw Error(`Number of buckets must be at least 1`);let o=n.data.get(a.dataId).values,s=nk(o,i);return n.makeTensorInfo(a.shape,`int32`,s)}var YN={kernelName:Hr,backendName:`cpu`,kernelFunc:JN},XN={kernelName:`Tan`,backendName:`cpu`,kernelFunc:SD(`Tan`,e=>Math.tan(e))},ZN={kernelName:Ur,backendName:`cpu`,kernelFunc:SD(Ur,e=>Math.tanh(e))};function QN(e){let{inputs:t,backend:n}=e,{tensor:r,indices:i,updates:a}=t,{sliceRank:o,numUpdates:s,sliceSize:c,strides:l,outputSize:u}=_p(a,i,r.shape),d=n.bufferSync(i),f=n.bufferSync(a),p=n.bufferSync(r),m=FO(d,f,r.shape,u,c,s,o,l,p,!1);return n.makeTensorInfo(r.shape,m.dtype,m.values)}var $N={kernelName:vr,backendName:`cpu`,kernelFunc:QN};function eP(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reps:a}=r;X(i,`tile`);let o=ok(n.bufferSync(i),a);return n.makeTensorInfo(o.shape,o.dtype,o.values)}var tP={kernelName:Wr,backendName:`cpu`,kernelFunc:eP};function nP(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{k:a,sorted:o}=r;X(i,`topk`);let s=n.data.get(i.dataId).values,[c,l]=lk(s,i.shape,i.dtype,a,o);return[n.makeTensorInfo(c.shape,c.dtype,c.values),n.makeTensorInfo(l.shape,l.dtype,l.values)]}var rP={kernelName:Gr,backendName:`cpu`,kernelFunc:nP};function iP(e){let{inputs:t,attrs:n,backend:r}=e,{image:i,transforms:a}=t,{interpolation:o,fillMode:s,fillValue:c,outputShape:l}=n,[u,d,f,p]=i.shape,[m,h]=l??[d,f],g=[u,m,h,p],_=A(i.shape),v=_[0],y=_[1],b=_[2],x=A(g),S=x[0],C=x[1],w=x[2],T=Ae(i.dtype,k(g));T.fill(c);let E=r.data.get(i.dataId).values,D=r.data.get(a.dataId).values;for(let e=0;e<u;++e){let t=a.shape[0]===1?D:D.subarray(e*8,e*8+8);for(let n=0;n<m;++n)for(let r=0;r<h;++r)for(let i=0;i<p;++i){let a,l=t[6]*r+t[7]*n+1;if(l===0)continue;let u=(t[0]*r+t[1]*n+t[2])/l,p=(t[3]*r+t[4]*n+t[5])/l,m=oP(u,f,s),h=oP(p,d,s);switch(o){case`nearest`:a=fP(E,d,f,v,y,b,e,h,m,i,c);break;case`bilinear`:a=pP(E,d,f,v,y,b,e,h,m,i,c);break;default:throw Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${o}`)}let g=e*S+n*C+r*w+i;T[g]=a}return r.makeTensorInfo(g,i.dtype,T)}return{dataId:r.write(T,g,i.dtype),shape:i.shape,dtype:i.dtype}}var aP={kernelName:Kr,backendName:`cpu`,kernelFunc:iP};function oP(e,t,n){switch(n){case`reflect`:return sP(e,t);case`wrap`:return cP(e,t);case`nearest`:return uP(e,t);default:return lP(e,t)}}function sP(e,t){let n=e;if(n<0)if(t<=1)n=0;else{let e=2*t;n<e&&(n=e*Math.trunc(-n/e)+n),n=n<-t?n+e:-n-1}else if(n>t-1)if(t<=1)n=0;else{let e=2*t;n-=e*Math.trunc(n/e),n>=t&&(n=e-n-1)}return he(0,n,t-1)}function cP(e,t){let n=e;if(n<0)if(t<=1)n=0;else{let e=t-1;n+=t*(Math.trunc(-n/e)+1)}else if(n>t-1)if(t<=1)n=0;else{let e=t-1;n-=t*Math.trunc(n/e)}return he(0,n,t-1)}function lP(e,t){return e}function uP(e,t){return he(0,e,t-1)}function dP(e,t,n,r,i,a,o,s,c,l,u){let d=o*r+s*i+c*a+l;return 0<=s&&s<t&&0<=c&&c<n?e[d]:u}function fP(e,t,n,r,i,a,o,s,c,l,u){return dP(e,t,n,r,i,a,o,Math.round(s),Math.round(c),l,u)}function pP(e,t,n,r,i,a,o,s,c,l,u){let d=Math.floor(s),f=Math.floor(c),p=d+1,m=f+1,h=(m-c)*dP(e,t,n,r,i,a,o,d,f,l,u)+(c-f)*dP(e,t,n,r,i,a,o,d,m,l,u),g=(m-c)*dP(e,t,n,r,i,a,o,p,f,l,u)+(c-f)*dP(e,t,n,r,i,a,o,p,m,l,u);return(p-s)*h+(s-d)*g}function mP(e){let{inputs:t,attrs:n,backend:r}=e,{axis:i}=n,{x:a}=t;X(a,`unique`);let o=r.data.get(a.dataId).values,{outputValues:s,outputShape:c,indices:l}=uk(o,i,a.shape,a.dtype);return[r.makeTensorInfo(c,a.dtype,s),r.makeTensorInfo([l.length],`int32`,l)]}var hP={kernelName:Jr,backendName:`cpu`,kernelFunc:mP};function gP(e){let{inputs:t,backend:n,attrs:r}=e,{value:i}=t,{axis:a}=r;a<0&&(a+=i.shape.length);let o=i.shape.length,s=i.shape[a],c=Array(o-1),l=0;for(let e=0;e<o;e++)e!==a&&(c[l++]=i.shape[e]);let u=Array(o).fill(0),d=i.shape.slice();d[a]=1;let f=Array(s);for(let e=0;e<f.length;e++){u[a]=e;let t=BO({inputs:{x:i},backend:n,attrs:{begin:u,size:d}});f[e]=wk({inputs:{x:t},backend:n,attrs:{shape:c}}),n.disposeIntermediateTensorInfo(t)}return f}var _P={kernelName:Yr,backendName:`cpu`,kernelFunc:gP};function vP(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,segmentIds:a}=t,{numSegments:o}=r;X(i,`unsortedSegmentSum`);let s=i.shape.length,c=a.shape.length,l=[],u=[],d=s-c,f=a;for(let e=0;e<d;++e){let t=hj({inputs:{input:f},backend:n,attrs:{dim:e+1}});f=t,u.push(t)}for(let e=0;e<o;++e){let t=Ni(e,`int32`),r=n.makeTensorInfo([],`int32`,t),a=OD({inputs:{a:r,b:f},backend:n}),o=uD({inputs:{x:a},backend:n,attrs:{dtype:`float32`}}),s=iO({inputs:{a:o,b:i},backend:n}),c=nj({inputs:{x:s},backend:n,attrs:{axis:0,keepDims:!1}});l.push(c),u.push(r),u.push(a),u.push(o),u.push(s),u.push(c)}let p=LM({inputs:l,backend:n,attrs:{axis:0}});return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var yP=[kk,eD,Ak,jk,gD,Nk,Fk,Lk,zk,Vk,Hk,Uk,Wk,Gk,Kk,Qk,eA,nA,iA,Dk,oA,cA,uA,bD,fA,dD,TD,pA,rD,mA,vA,bA,SA,wA,EA,OA,AA,jA,MA,PA,IA,RA,BA,HA,WA,KA,JA,XA,ZA,QA,$A,tj,aj,pk,sj,kD,mj,MD,gj,PD,Tj,Dj,kj,ID,RD,jj,Nj,Fj,Lj,HD,WD,oD,zj,gA,Bj,Vj,Hj,hk,KD,JD,Wj,ZD,Gj,Kj,qj,Jj,Xj,Qj,eM,eO,nM,iM,oM,cM,uM,fM,mM,nO,gM,_M,xM,aO,cO,wM,DM,AM,uO,MM,IM,RM,BM,VM,vk,gO,UM,GM,qM,YM,cD,vj,XM,bk,Sk,Tk,QM,eN,nN,iN,oN,sN,cN,PO,uN,hN,_N,bN,RO,xN,SN,CN,VO,yM,TN,DN,kN,jN,NN,FN,LN,zN,KO,BN,JO,XO,VN,UN,GN,qN,YN,ak,rj,XN,ZN,$N,tP,rP,aP,pO,hP,_P,{kernelName:Xr,backendName:`cpu`,kernelFunc:vP},PM];for(let e of yP)di(e);var bP={},xP={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function SP(e,t){bP[e]=t}function CP(e,t){if(!(e in bP)||t!=null){let n=TP(e,t);if(n!==null)bP[e]=n;else return console.log(`Could not get context for WebGL version`,e),null}let n=bP[e];return n==null||n.isContextLost()?(delete bP[e],CP(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),bP[e])}function wP(e){if(!j().getBool(`IS_SAFARI`)&&typeof OffscreenCanvas<`u`&&e===2)return new OffscreenCanvas(300,150);if(typeof document<`u`)return document.createElement(`canvas`);throw Error(`Cannot create a canvas in this context`)}function TP(e,t){if(e!==1&&e!==2)throw Error(`Cannot get WebGL rendering context, WebGL is disabled.`);let n=t??wP(e);return n.addEventListener(`webglcontextlost`,t=>{t.preventDefault(),delete bP[e]},!1),j().getBool(`SOFTWARE_WEBGL_ENABLED`)&&(xP.failIfMajorPerformanceCaveat=!1),e===1?n.getContext(`webgl`,xP)||n.getContext(`experimental-webgl`,xP):n.getContext(`webgl2`,xP)}var EP;(function(e){e[e.DENSE=0]=`DENSE`,e[e.SHARED_BATCH=1]=`SHARED_BATCH`})(EP||={});var DP;(function(e){e[e.RENDER=0]=`RENDER`,e[e.UPLOAD=1]=`UPLOAD`,e[e.PIXELS=2]=`PIXELS`,e[e.DOWNLOAD=3]=`DOWNLOAD`})(DP||={});var OP;(function(e){e[e.UNPACKED_FLOAT16=0]=`UNPACKED_FLOAT16`,e[e.UNPACKED_FLOAT32=1]=`UNPACKED_FLOAT32`,e[e.PACKED_4X1_UNSIGNED_BYTE=2]=`PACKED_4X1_UNSIGNED_BYTE`,e[e.PACKED_2X2_FLOAT32=3]=`PACKED_2X2_FLOAT32`,e[e.PACKED_2X2_FLOAT16=4]=`PACKED_2X2_FLOAT16`})(OP||={});function kP(e,t){return[t,e]}function AP(e,t){return e*t}function jP(e){let t=k(e);return Ce(Math.ceil(t/4))}function MP(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function NP(e,t){let[n,r]=MP(e,t);return n*r*4}function PP(e,t){let n=e,r,i,a,o,s,c,l,u,d,f;return j().getNumber(`WEBGL_VERSION`)===2?(r=n.R32F,i=n.R16F,a=n.RGBA16F,o=n.RGBA32F,s=n.RED,l=4,u=1,d=n.HALF_FLOAT,f=n.FLOAT,c=n.RGBA8):(r=e.RGBA,i=e.RGBA,a=e.RGBA,o=n.RGBA,s=e.RGBA,l=4,u=4,d=t==null?null:t.HALF_FLOAT_OES,f=e.FLOAT,c=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:i,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:o,textureFormatFloat:s,downloadTextureFormat:c,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:f}}function Z(e,t){let n=t();return j().getBool(`DEBUG`)&&FP(e),n}function FP(e){let t=e.getError();if(t!==e.NO_ERROR)throw Error(`WebGL Error: `+zP(e,t))}var IP=5.96e-8,LP=65504;function RP(e){return!!(j().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)||e===0||IP<Math.abs(e)&&Math.abs(e)<LP)}function zP(e,t){switch(t){case e.NO_ERROR:return`NO_ERROR`;case e.INVALID_ENUM:return`INVALID_ENUM`;case e.INVALID_VALUE:return`INVALID_VALUE`;case e.INVALID_OPERATION:return`INVALID_OPERATION`;case e.INVALID_FRAMEBUFFER_OPERATION:return`INVALID_FRAMEBUFFER_OPERATION`;case e.OUT_OF_MEMORY:return`OUT_OF_MEMORY`;case e.CONTEXT_LOST_WEBGL:return`CONTEXT_LOST_WEBGL`;default:return`Unknown error code ${t}`}}function BP(e,t){return cF(e,()=>e.getExtension(t),`Extension "`+t+`" not supported on this browser.`)}function VP(e,t){let n=cF(e,()=>e.createShader(e.VERTEX_SHADER),`Unable to create vertex WebGLShader.`);if(Z(e,()=>e.shaderSource(n,t)),Z(e,()=>e.compileShader(n)),e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(n)),Error(`Failed to compile vertex shader.`);return n}function HP(e,t){let n=cF(e,()=>e.createShader(e.FRAGMENT_SHADER),`Unable to create fragment WebGLShader.`);if(Z(e,()=>e.shaderSource(n,t)),Z(e,()=>e.compileShader(n)),j().get(`ENGINE_COMPILE_ONLY`))return n;if(e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw WP(t,e.getShaderInfoLog(n)),Error(`Failed to compile fragment shader.`);return n}var UP=/ERROR: [0-9]+:([0-9]+):/g;function WP(e,t){let n=UP.exec(t);if(n==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let r=+n[1],i=e.split(`
`),a=i.length.toString().length+2,o=i.map((e,t)=>Te((t+1).toString(),a)+e),s=0;for(let e=0;e<o.length;e++)s=Math.max(o[e].length,s);let c=o.slice(0,r-1),l=o.slice(r-1,r),u=o.slice(r);console.log(c.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${Te(l[0],s)}`,`border:1px solid red; background-color:#e3d2d2; color:#a61717`),console.log(u.join(`
`))}function GP(e){return cF(e,()=>e.createProgram(),`Unable to create WebGLProgram.`)}function KP(e,t){if(Z(e,()=>e.linkProgram(t)),!j().get(`ENGINE_COMPILE_ONLY`)&&e.getProgramParameter(t,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Failed to link vertex and fragment shaders.`)}function qP(e,t){if(Z(e,()=>e.validateProgram(t)),e.getProgramParameter(t,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Shader program validation failed.`)}function JP(e,t){let n=cF(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),Z(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function YP(e,t){let n=cF(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return Z(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n)),Z(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function XP(e){return cF(e,()=>e.createTexture(),`Unable to create WebGLTexture.`)}function ZP(e,t){let n=j().getNumber(`WEBGL_MAX_TEXTURE_SIZE`);if(e<=0||t<=0){let n=`[${e}x${t}]`;throw Error(`Requested texture size `+n+` is invalid.`)}if(e>n||t>n){let r=`[${e}x${t}]`,i=`[${n}x${n}]`;throw Error(`Requested texture size `+r+` greater than WebGL maximum on this browser / GPU `+i+`.`)}}function QP(e){return cF(e,()=>e.createFramebuffer(),`Unable to create WebGLFramebuffer.`)}function $P(e,t,n,r,i,a,o){let s=e.getAttribLocation(t,n);return s===-1?!1:(Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),Z(e,()=>e.vertexAttribPointer(s,i,e.FLOAT,!1,a,o)),Z(e,()=>e.enableVertexAttribArray(s)),!0)}function eF(e,t,n){lF(e,n),Z(e,()=>e.activeTexture(e.TEXTURE0+n)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function tF(e,t,n){return cF(e,()=>e.getUniformLocation(t,n),`uniform "`+n+`" not present in program.`)}function nF(e,t,n){return e.getUniformLocation(t,n)}function rF(e,t,n,r){Z(e,()=>eF(e,t,r)),Z(e,()=>e.uniform1i(n,r))}function iF(e,t,n){Z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,n)),Z(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function aF(e,t){Z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),Z(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function oF(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error(`Error binding framebuffer: `+sF(e,t))}function sF(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return`FRAMEBUFFER_INCOMPLETE_DIMENSIONS`;case e.FRAMEBUFFER_UNSUPPORTED:return`FRAMEBUFFER_UNSUPPORTED`;default:return`unknown error ${t}`}}function cF(e,t,n){let r=Z(e,()=>t());if(r==null)throw Error(n);return r}function lF(e,t){let n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n){let e=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw Error(`textureUnit must be in ${e}.`)}}function uF(e,t=2){return k(e.slice(0,e.length-t))}function dF(e){if(e.length===0)throw Error(`Cannot get rows and columns of an empty shape array.`);return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function fF(e){let t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[uF(e),...dF(e)]),t}function pF(e,t=!1){let n=j().getNumber(`WEBGL_MAX_TEXTURE_SIZE`),r=j().getNumber(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`);r===1/0&&j().getBool(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`)&&(r=n/2),t&&(n*=2,r*=2,e=e.map((t,n)=>n>=e.length-2?ge(e[n]):e[n]),e.length===1&&(e=[2,e[0]])),e.length!==2&&(e=ke(e).newShape);let i=k(e),a=null;e.length<=1&&i<=n?a=[1,i]:e.length===2&&e[0]<=n&&e[1]<=n?a=e:e.length===3&&e[0]*e[1]<=n&&e[2]<=n?a=[e[0]*e[1],e[2]]:e.length===3&&e[0]<=n&&e[1]*e[2]<=n?a=[e[0],e[1]*e[2]]:e.length===4&&e[0]*e[1]*e[2]<=n&&e[3]<=n?a=[e[0]*e[1]*e[2],e[3]]:e.length===4&&e[0]<=n&&e[1]*e[2]*e[3]<=n&&(a=[e[0],e[1]*e[2]*e[3]]);let o=a!=null&&Math.max(...a)>r&&Math.min(...a)<=(t?2:1)&&Math.min(...a)>0;if(a==null||o)if(t){let t=uF(e),n=2,r=2;e.length&&([n,r]=dF(e)),i=n/2*t*(r/2),a=Ce(i).map(e=>e*2)}else a=Ce(i);return a}function mF(e){return e%2==0}function hF(e,t){if(e=e.slice(-2),t=t.slice(-2),xe(e,t)||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){let n=e[e.length-1],r=t[t.length-1];if(n===r||mF(n)&&mF(r)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&mF(e[0])&&mF(t[0])}var gF,_F;function vF(e){if(gF==null){let t=CP(e);gF=t.getParameter(t.MAX_TEXTURE_SIZE)}return gF}function yF(e){if(_F==null){let t=CP(e);_F=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,_F)}function bF(e){if(e===0)return 0;let t,n=CP(e);return t=xF(n,`EXT_disjoint_timer_query_webgl2`)&&e===2?2:+!!xF(n,`EXT_disjoint_timer_query`),t}function xF(e,t){return e.getExtension(t)!=null}function SF(e){try{if(CP(e)!=null)return!0}catch(e){return console.log(`Error when getting WebGL context: `,e),!1}return!1}function CF(e){if(e===0)return!1;let t=CP(e);if(e===1){if(!xF(t,`OES_texture_float`))return!1}else if(!xF(t,`EXT_color_buffer_float`))return!1;return TF(t)}function wF(e){if(e===0)return!1;let t=CP(e);if(e===1){if(!xF(t,`OES_texture_float`)||!xF(t,`WEBGL_color_buffer_float`))return!1}else{if(xF(t,`EXT_color_buffer_float`))return TF(t);let e=`EXT_color_buffer_half_float`;return xF(t,e)?EF(t,t.getExtension(e)):!1}return TF(t)}function TF(e){let t=PP(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),i}function EF(e,t){let n=PP(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(i),a}function DF(e){return e===2?CP(e).fenceSync!=null:!1}function OF(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{e!=null&&O(e.dtype!==`complex64`,()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}var Q=j();Q.registerFlag(`HAS_WEBGL`,()=>Q.getNumber(`WEBGL_VERSION`)>0),Q.registerFlag(`WEBGL_VERSION`,()=>SF(2)?2:+!!SF(1)),Q.registerFlag(`WEBGL_CHECK_NUMERICAL_PROBLEMS`,()=>!1),Q.registerFlag(`WEBGL_BUFFER_SUPPORTED`,()=>Q.get(`WEBGL_VERSION`)===2),Q.registerFlag(`WEBGL_CPU_FORWARD`,()=>!0),Q.registerFlag(`WEBGL_FORCE_F16_TEXTURES`,()=>!1),Q.registerFlag(`WEBGL_PACK`,()=>Q.getBool(`HAS_WEBGL`)),Q.registerFlag(`WEBGL_PACK_NORMALIZATION`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_CLIP`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_DEPTHWISECONV`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_BINARY_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_UNARY_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_ARRAY_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_IMAGE_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_REDUCE`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_LAZILY_UNPACK`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_CONV_IM2COL`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_CONV2DTRANSPOSE`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_MAX_TEXTURE_SIZE`,()=>vF(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_MAX_TEXTURES_IN_SHADER`,()=>yF(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`,()=>{let e=Q.getNumber(`WEBGL_VERSION`);return e===0?0:bF(e)}),Q.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`,()=>Q.getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0&&!ja()),Q.registerFlag(`WEBGL_RENDER_FLOAT32_CAPABLE`,()=>CF(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_RENDER_FLOAT32_ENABLED`,()=>Q.getBool(`WEBGL_FORCE_F16_TEXTURES`)?!1:Q.getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)),Q.registerFlag(`WEBGL_DOWNLOAD_FLOAT_ENABLED`,()=>wF(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_FENCE_API_ENABLED`,()=>DF(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_SIZE_UPLOAD_UNIFORM`,()=>Q.getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?4:0),Q.registerFlag(`WEBGL_DELETE_TEXTURE_THRESHOLD`,()=>-1,e=>{if(typeof e!=`number`)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${e}.`);if(e<0&&e!==-1)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)}),Q.registerFlag(`WEBGL_FLUSH_THRESHOLD`,()=>ja()?1:-1,e=>{if(typeof e!=`number`)throw Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${e}.`);if(e<0&&e!==-1)throw Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)}),Q.registerFlag(`CPU_HANDOFF_SIZE_THRESHOLD`,()=>128),Q.registerFlag(`WEBGL_USE_SHAPES_UNIFORMS`,()=>!1),Q.registerFlag(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`,()=>1e5),Q.registerFlag(`TOPK_K_CPU_HANDOFF_THRESHOLD`,()=>128),Q.registerFlag(`WEBGL_EXP_CONV`,()=>!1),Q.registerFlag(`SOFTWARE_WEBGL_ENABLED`,()=>Q.getBool(`IS_TEST`)),Q.registerFlag(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`,()=>1/0),Q.registerFlag(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`,()=>!1),Q.registerFlag(`WEBGL2_ISNAN_CUSTOM`,()=>!1),Q.registerFlag(`ENGINE_COMPILE_ONLY`,()=>!1);function kF(){let e,t,n,r,i,a,o,s,c,l;return j().getNumber(`WEBGL_VERSION`)===2?(e=`#version 300 es`,t=`in`,n=`out`,r=`in`,i=`texture`,a=`outputColor`,o=`out vec4 outputColor;`,s=j().getBool(`WEBGL2_ISNAN_CUSTOM`)?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:``,c=``,l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e=``,t=`attribute`,n=`varying`,r=`varying`,i=`texture2D`,a=`gl_FragColor`,o=``,s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:i,output:a,defineOutput:o,defineSpecialNaN:s,defineSpecialInf:c,defineRound:l}}function AF(e,t,n=`index`){let r=A(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${t}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${t}`:`index -= ${e[i]} * ${t}`};`).join(``)}function jF(e,t,n=`index`){let r=A(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / outShapeStrides[${i}]`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * outShapeStrides[${i}]`:`index -= ${e[i]} * outShapeStrides[${i}]`};`).join(``)}function MF(e,t){let n=e.length,r=e.map(e=>`${t}[${e}]`),i=Array(n-1);i[n-2]=r[n-1];for(let e=n-3;e>=0;--e)i[e]=`(${i[e+1]} * ${r[e+1]})`;return i}function NF(e,t,n=`index`){let r=MF(e.map((e,t)=>t),t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${r[i]}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${r[i]}`:`index -= ${e[i]} * ${r[i]}`};`).join(``)}function PF(e){let t=A(e).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function FF(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var IF=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`,{getBroadcastDims:LF}=Kg;function RF(e,t,n){let r=[];if(e.forEach(e=>{let t=k(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?r.push(`uniform float ${e.name}${t>1?`[${t}]`:``};`):(r.push(`uniform sampler2D ${e.name};`),r.push(`uniform int offset${e.name};`)),n.enableShapeUniforms){let{uniformShape:t}=EI(n.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:r.push(`uniform int ${e.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${e.name}Shape;`);break;default:break}r.push(`uniform ivec2 ${e.name}TexShape;`)}}),n.enableShapeUniforms){switch(t.logicalShape.length){case 1:r.push(`uniform int outShape;`);break;case 2:r.push(`uniform ivec2 outShape;`),r.push(`uniform int outShapeStrides;`);break;case 3:r.push(`uniform ivec3 outShape;`),r.push(`uniform ivec2 outShapeStrides;`);break;case 4:r.push(`uniform ivec4 outShape;`),r.push(`uniform ivec3 outShapeStrides;`);break;default:break}r.push(`uniform ivec2 outTexShape;`)}n.customUniforms&&n.customUniforms.forEach(e=>{r.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:``};`)});let i=r.join(`
`),a=e.map(e=>VF(e,t,n.packedInputs,n.enableShapeUniforms)).join(`
`),o=t.texShape,s=kF(),c=WF(s),l,u,d=qF(s);return t.isPacked?(l=HF(t.logicalShape,o,n.enableShapeUniforms),u=KF(s)):(l=UF(t.logicalShape,o,n.enableShapeUniforms),u=GF(s)),n.packedInputs&&(d+=ZF),[d,c,u,i,l,a,n.userCode].join(`
`)}function zF(e,t=!1){let n=e.shapeInfo.logicalShape;switch(n.length){case 0:return dI(e,t);case 1:return pI(e,t);case 2:return hI(e,t);case 3:return _I(e,t);case 4:return yI(e,t);case 5:return bI(e);case 6:return xI(e);default:throw Error(`${n.length}-D input sampling is not yet supported`)}}function BF(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return uI(e);case 1:return fI(e,t);case 2:return mI(e,t);case 3:return gI(e,t);default:return vI(e,t)}}function VF(e,t,n=!1,r){let i=``;n?i+=BF(e,r):i+=zF(e,r);let a=e.shapeInfo.logicalShape,o=t.logicalShape;return a.length<=o.length&&(n?i+=CI(e,t):i+=wI(e,t)),i}function HF(e,t,n){switch(e.length){case 0:return QF();case 1:return $F(e,t,n);case 2:return sI(e,t,n);case 3:return tI(e,t,n);default:return rI(e,t,n)}}function UF(e,t,n){switch(e.length){case 0:return QF();case 1:return eI(e,t,n);case 2:return cI(e,t,n);case 3:return nI(e,t,n);case 4:return iI(e,t,n);case 5:return aI(e,t);case 6:return oI(e,t);default:throw Error(`${e.length}-D output sampling is not yet supported`)}}function WF(e){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${e.texture2D}(textureSampler, uv).r;
    }
  `}function GF(e){return`
    void setOutput(float val) {
      ${e.output} = vec4(val, 0, 0, 0);
    }
  `}function KF(e){return`
    void setOutput(vec4 val) {
      ${e.output} = val;
    }
  `}function qF(e){return`${e.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${e.varyingFs} vec2 resultUV;
    ${e.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${e.defineSpecialNaN}
    ${e.defineSpecialInf}
    ${e.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${JF}
    ${YF}
    ${XF}
  `}var JF=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,YF=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,XF=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,ZF=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function QF(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function $F(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return r[0]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${r[1]}.0);
      }
    `:r[1]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${r[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      return 2 * (resTexRC.x * ${r[1]} + resTexRC.y);
    }
  `}function eI(e,t,n){return t[0]===1?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function tI(e,t,n){if(n)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[2]/2),a=i*Math.ceil(e[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec3(b, r, c);
    }
  `}function nI(e,t,n){if(n)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${jF([`r`,`c`,`d`],e)}
    return ivec3(r, c, d);
  }
`;let r=AF([`r`,`c`,`d`],e);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec3(r, c, d);
    }
  `}function rI(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[e.length-1]/2),a=i*Math.ceil(e[e.length-2]/2),o=a,s=``,c=`b, r, c`;for(let t=2;t<e.length-1;t++)o*=e[e.length-t-1],s=`
      int b${t} = index / ${o};
      index -= b${t} * ${o};
    `+s,c=`b${t}, `+c;return`
    ivec${e.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      ${s}

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec${e.length}(${c});
    }
  `}function iI(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${jF([`r`,`c`,`d`,`d2`],e)}
      return ivec4(r, c, d, d2);
    }
  `;let r=AF([`r`,`c`,`d`,`d2`],e);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec4(r, c, d, d2);
    }
  `}function aI(e,t){let n=AF([`r`,`c`,`d`,`d2`,`d3`],e);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function oI(e,t){let n=AF([`r`,`c`,`d`,`d2`,`d3`,`d4`],e);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function sI(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(xe(e,t))return n?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));
      }
    `;let i=Math.ceil(e[1]/2);return n?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));

      int index = resTexRC.x * ${r[1]} + resTexRC.y;
      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec2(r, c);
    }
  `}function cI(e,t,n){return xe(e,t)?n?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:e[1]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:e[0]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:n?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${e[1]};
      int c = index - r * ${e[1]};
      return ivec2(r, c);
    }
  `}function lI(e){return`offset${e}`}function uI(e){let t=e.name;return`
    vec4 ${`get`+t.charAt(0).toUpperCase()+t.slice(1)}() {
      return ${kF().texture2D}(${t}, halfCR);
    }
  `}function dI(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`float ${r}() {return ${n};}`;let[i,a]=e.shapeInfo.texShape;if(i===1&&a===1)return`
      float ${r}() {
        return sampleTexture(${n}, halfCR);
      }
    `;let o=lI(n);if(t)return`
    float ${r}() {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${o});
      return sampleTexture(${n}, uv);
    }
  `;let[s,c]=e.shapeInfo.texShape;return`
    float ${r}() {
      vec2 uv = uvFromFlat(${s}, ${c}, ${o});
      return sampleTexture(${n}, uv);
    }
  `}function fI(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=e.shapeInfo.texShape,a=kF();if(t)return`
    vec4 ${r}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${a.texture2D}(${n}, uv);
    }
  `;let o=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)];return`
    vec4 ${r}(int index) {
      vec2 uv = packedUVfrom1D(
        ${o[0]}, ${o[1]}, index);
      return ${a.texture2D}(${n}, uv);
    }
  `}function pI(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float ${r}(int index) {
        ${SI(e)}
      }
    `;let i=e.shapeInfo.texShape,a=i[0],o=i[1];if(o===1&&a===1)return`
      float ${r}(int index) {
        return sampleTexture(${n}, halfCR);
      }
    `;let s=lI(n);return o===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / ${a}.0);
        return sampleTexture(${n}, uv);
      }
    `:a===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / ${o}.0, 0.5);
        return sampleTexture(${n}, uv);
      }
    `:t?`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${s});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${a}, ${o}, index + ${s});
      return sampleTexture(${n}, uv);
    }
  `}function mI(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=a[0],s=a[1],c=kF();if(a!=null&&xe(n,a))return t?`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);

        return ${c.texture2D}(${r}, uv);
      }
    `:`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}.0, ${o}.0);

        return ${c.texture2D}(${r}, uv);
      }
    `;if(t)return`
    vec4 ${i}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `;let l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];return`
    vec4 ${i}(int row, int col) {
      vec2 uv = packedUVfrom2D(${Math.ceil(n[1]/2)}, ${l[0]}, ${l[1]}, row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `}function hI(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape;if(a!=null&&xe(n,a)){if(t)return`
      float ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `;let e=a[0];return`
    float ${i}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${a[1]}.0, ${e}.0);
      return sampleTexture(${r}, uv);
    }
  `}let{newShape:o,keptDims:s}=ke(n),c=o;if(c.length<n.length)return`
      ${zF(DI(e,c),t)}
      float ${i}(int row, int col) {
        return ${i}(${OI([`row`,`col`],s)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));
        ${SI(e)}
      }
    `;let l=a[0],u=a[1],d=lI(r);return u===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${r}, uv);
    }
  `:l===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${r}, uv);
    }
  `:t?`
      float ${i}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
        return sampleTexture(${r}, uv);
      }
    `:`
  float ${i}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${n[1]} + col + ${d};
    vec2 uv = uvFromFlat(${l}, ${u}, index);
    return sampleTexture(${r}, uv);
  }
`}function gI(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];if(n[0]===1)return`
        ${BF(DI(e,n.slice(1)),t)}
        vec4 ${i}(int b, int row, int col) {
          return ${i}(${OI([`b`,`row`,`col`],[1,2])});
        }
      `;let s=kF();if(t)return`
    vec4 ${i}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `;let c=o[0],l=o[1],u=Math.ceil(n[2]/2);return`
    vec4 ${i}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${l}, ${u*Math.ceil(n[1]/2)}, ${u}, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `}function _I(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[1]*n[2],o=n[2],{newShape:s,keptDims:c}=ke(n),l=s;if(l.length<n.length)return`
        ${zF(DI(e,l),t)}
        float ${i}(int row, int col, int depth) {
          return ${i}(${OI([`row`,`col`,`depth`],c)});
        }
      `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${a}, ${o}, 1)));
        ${SI(e)}
      }
    `;let u=e.shapeInfo.texShape,d=u[0],f=u[1],p=e.shapeInfo.flatOffset;if(f===a&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        int stride1 = ${r}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
        float ${i}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${o}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${f}.0, ${d}.0);
          return sampleTexture(${r}, uv);
        }
      `;if(f===o&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${f}.0, ${d}.0);
      return sampleTexture(${r}, uv);
    }
  `;let m=lI(r);return t?`
    float ${i}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${r}Shape[1] * ${r}Shape[2];
      int stride1 = ${r}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${m};
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
      return sampleTexture(${r}, uv);
    }
    `:`
      float ${i}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${a} + col * ${o} + depth + ${m};
        vec2 uv = uvFromFlat(${d}, ${f}, index);
        return sampleTexture(${r}, uv);
      }
  `}function vI(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=kF();if(t)return`
    vec4 ${r}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${n}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${i.texture2D}(${n}, uv);
    }
  `;let a=e.shapeInfo.logicalShape,o=a.length,s=e.shapeInfo.texShape,c=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],l=c[0],u=c[1],d=Math.ceil(a[o-1]/2),f=d*Math.ceil(a[o-2]/2),p=`int b, int row, int col`,m=`b * ${f} + (row / 2) * ${d} + (col / 2)`;for(let e=2;e<o-1;e++)p=`int b${e}, `+p,f*=a[o-e-1],m=`b${e} * ${f} + `+m;return`
    vec4 ${r}(${p}) {
      int index = ${m};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${l});
      return ${i.texture2D}(${n}, uv);
    }
  `}function yI(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[3],o=n[2]*a,s=n[1]*o,{newShape:c,keptDims:l}=ke(n);if(c.length<n.length)return`
      ${zF(DI(e,c),t)}
      float ${i}(int row, int col, int depth, int depth2) {
        return ${i}(${OI([`row`,`col`,`depth`,`depth2`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${s}, ${o}, ${a}, 1)));
        ${SI(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1],m=`int stride2 = ${r}Shape[3];`,h=`int stride1 = ${r}Shape[2] * stride2;`,g=`int stride0 = ${r}Shape[1] * stride1;`;if(p===s&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        ${m}
        ${h}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${o}, ${a}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(p===a&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n[1]*n[2]}, ${n[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;let _=lI(r);return t?`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${m}
      ${h}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${_});
      return sampleTexture(${r}, uv);
    }
  `:`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} +
          depth * ${a} + depth2;
      vec2 uv = uvFromFlat(${f}, ${p}, index + ${_});
      return sampleTexture(${r}, uv);
    }
  `}function bI(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=t[4],a=t[3]*i,o=t[2]*a,s=t[1]*o,{newShape:c,keptDims:l}=ke(t);if(c.length<t.length)return`
      ${zF(DI(e,c))}
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        return ${r}(${OI([`row`,`col`,`depth`,`depth2`,`depth3`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${s}, ${o}, ${a}, ${i})) +
          depth3;
        ${SI(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1];return p===s&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${o}, ${a}, ${i}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:p===i&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} + depth * ${a} +
          depth2 * ${i} + depth3 + ${lI(n)};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${n}, uv);
    }
  `}function xI(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),{newShape:i,keptDims:a}=ke(t);if(i.length<t.length)return`
      ${zF(DI(e,i))}
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${r}(${OI([`row`,`col`,`depth`,`depth2`,`depth3`,`depth4`],a)});
      }
    `;let o=t[5],s=t[4]*o,c=t[3]*s,l=t[2]*c,u=t[1]*l;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${l}, ${c}, ${s})) +
          dot(
            vec2(depth3, depth4),
            vec2(${o}, 1)));
        ${SI(e)}
      }
    `;let d=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,p=f[0],m=f[1];return m===u&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${c}, ${s}, ${o})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:m===o&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${l} + depth * ${c} +
          depth2 * ${s} + depth3 * ${o} + depth4 + ${lI(n)};
      vec2 uv = uvFromFlat(${p}, ${m}, index);
      return sampleTexture(${n}, uv);
    }
  `}function SI(e){let t=e.name,n=k(e.shapeInfo.logicalShape);return n<2?`return ${t};`:`
    for (int i = 0; i < ${n}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function CI(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=e.shapeInfo.logicalShape.length,o=t.logicalShape.length,s=LF(e.shapeInfo.logicalShape,t.logicalShape),c=TI(o),l=o-a,u,d=[`x`,`y`,`z`,`w`,`u`,`v`];u=a===0?``:o<2&&s.length>=1?`coords = 0;`:s.map(e=>`coords.${d[e+l]} = 0;`).join(`
`);let f=``;f=o<2&&a>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${d[t+l]}`).join(`, `);let p=`return outputValue;`,m=k(e.shapeInfo.logicalShape)===1,h=k(t.logicalShape)===1;if(a===1&&!m&&!h)p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!h)p=o===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(s.length){let e=a-2,t=a-1;s.indexOf(e)>-1&&s.indexOf(t)>-1?p=`return vec4(outputValue.x);`:s.indexOf(e)>-1?p=`return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);`:s.indexOf(t)>-1&&(p=`return vec4(outputValue.xx, outputValue.zz);`)}return`
    vec4 ${i}() {
      ${c} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${r}(${f});
      ${p}
    }
  `}function wI(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=t.texShape,o=e.shapeInfo.texShape,s=e.shapeInfo.logicalShape.length,c=t.logicalShape.length;if(!e.shapeInfo.isUniform&&s===c&&e.shapeInfo.flatOffset==null&&xe(o,a))return`
      float ${i}() {
        return sampleTexture(${n}, resultUV);
      }
    `;let l=TI(c),u=LF(e.shapeInfo.logicalShape,t.logicalShape),d=c-s,f,p=[`x`,`y`,`z`,`w`,`u`,`v`];f=s===0?``:c<2&&u.length>=1?`coords = 0;`:u.map(e=>`coords.${p[e+d]} = 0;`).join(`
`);let m=``;return m=c<2&&s>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${p[t+d]}`).join(`, `),`
    float ${i}() {
      ${l} coords = getOutputCoords();
      ${f}
      return get${r}(${m});
    }
  `}function TI(e){if(e<=1)return`int`;if(e===2)return`ivec2`;if(e===3)return`ivec3`;if(e===4)return`ivec4`;if(e===5)return`ivec5`;if(e===6)return`ivec6`;throw Error(`GPU for rank ${e} is not yet supported`)}function EI(e,t,n){let{newShape:r,keptDims:i}=ke(t),a=t.length,o=e&&a===3&&t[0]===1,s=o?t.slice(1):r,c=!e&&a>1&&!xe(t,n)&&r.length<a||o;return{useSqueezeShape:c,uniformShape:c?s:t,keptDims:i}}function DI(e,t){let n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function OI(e,t){return t.map(t=>e[t]).join(`, `)}function kI(e,t,n,r){let i=n.map((e,n)=>{let r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:e.isUniform?!1:e.texData.isPacked,flatOffset:null};return e.texData!=null&&e.texData.slice!=null&&e.texData.slice.flatOffset>0&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}}),a=i.map(e=>e.shapeInfo),o={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},s=RF(i,o,t),c=HP(e.gl,s),l=e.createProgram(c);return j().get(`ENGINE_COMPILE_ONLY`)?{program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(e.buildVao(l),Object.assign({program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o},AI(e,t,l)))}function AI(e,t,n){let r=[],i=[],a,o,s,c=null,l=null;l=e.getUniformLocation(n,`NAN`,!1),j().getNumber(`WEBGL_VERSION`)===1&&(c=e.getUniformLocation(n,`INFINITY`,!1));for(let i of t.variableNames){let a={name:i,uniform:e.getUniformLocation(n,i,!1),offset:e.getUniformLocation(n,`offset${i}`,!1)};t.enableShapeUniforms&&(a.shape=e.getUniformLocation(n,`${i}Shape`,!1),a.texShape=e.getUniformLocation(n,`${i}TexShape`,!1)),r.push(a)}if(t.enableShapeUniforms&&(a=e.getUniformLocation(n,`outShape`,!1),s=e.getUniformLocation(n,`outShapeStrides`,!1),o=e.getUniformLocation(n,`outTexShape`,!1)),t.customUniforms)for(let r of t.customUniforms)i.push(e.getUniformLocation(n,r.name,!1));return{variablesLocations:r,customUniformLocations:i,infLoc:c,nanLoc:l,outShapeLocation:a,outShapeStridesLocation:s,outTexShapeLocation:o}}function jI(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((e,n)=>{let r=e.logicalShape,i=t[n],a=i.shape;if(!xe(r,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${a} must match`);if(e.isUniform&&i.isUniform)return;let o=e.texShape,s=i.isUniform?null:i.texData.texShape;if(!xe(o,s))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${o} and ${s} must match`)})}function MI(e,t,n,r,i){t.program.enableShapeUniforms||(jI(t.inShapeInfos,n),jI([t.outShapeInfo],[r]));let a=r.texData.texture,o=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(a.texture,o[0],o[1]):e.setOutputMatrixTexture(a.texture,o[0],o[1]),e.setProgram(t.webGLProgram),e.bindVertexArray(t.webGLProgram.vao),j().getNumber(`WEBGL_VERSION`)===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN);for(let r=0;r<n.length;++r){let i=n[r],{uniform:a,offset:o,shape:s,texShape:c}=t.variablesLocations[r];if(s){let{uniformShape:n}=EI(t.program.packedInputs,i.shape,i.texData.texShape);switch(n.length){case 1:e.gl.uniform1iv(s,new Int32Array(n));break;case 2:e.gl.uniform2iv(s,new Int32Array(n));break;case 3:e.gl.uniform3iv(s,new Int32Array(n));break;case 4:e.gl.uniform4iv(s,new Int32Array(n));break;default:break}}if(c&&e.gl.uniform2i(c,i.texData.texShape[0],i.texData.texShape[1]),a!=null){if(i.isUniform){if(k(i.shape)<2)e.gl.uniform1f(a,i.uniformValues[0]);else{let t=i.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(a,t)}continue}i.texData.slice!=null&&o!=null&&e.gl.uniform1i(o,i.texData.slice.flatOffset),e.setInputMatrixTexture(i.texData.texture.texture,a,r)}}let s=t.outShapeLocation;if(s)switch(r.shape.length){case 1:e.gl.uniform1iv(s,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(s,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(s,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(s,new Int32Array(r.shape));break;default:break}if(t.outShapeStridesLocation){let n=A(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(n));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(n));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(n));break;default:break}}if(t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),t.program.customUniforms&&i)for(let n=0;n<t.program.customUniforms.length;++n){let r=t.program.customUniforms[n],a=t.customUniformLocations[n],o=i[n];if(r.type===`float`)e.gl.uniform1fv(a,o);else if(r.type===`vec2`)e.gl.uniform2fv(a,o);else if(r.type===`vec3`)e.gl.uniform3fv(a,o);else if(r.type===`vec4`)e.gl.uniform4fv(a,o);else if(r.type===`int`)e.gl.uniform1iv(a,o);else if(r.type===`ivec2`)e.gl.uniform2iv(a,o);else if(r.type===`ivec3`)e.gl.uniform3iv(a,o);else if(r.type===`ivec4`)e.gl.uniform4iv(a,o);else throw Error(`uniform type ${r.type} is not supported yet.`)}e.executeProgram()}function NI(e,t,n){let r=``;t.concat(n).forEach(t=>{let i=t.texData!=null&&t.texData.slice!=null&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){let a=t.texData.texShape,{useSqueezeShape:o,uniformShape:s,keptDims:c}=EI(e.packedInputs,t.shape,a),l=``,u=``,d=``;if(s.length===1&&e.packedInputs){let e=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];l=`${e[0]>1}_${e[1]>1}`}else if(s.length===2&&!e.packedInputs)u=`${s[0]>1}_${s[1]>1}`;else if(s.length>2&&!e.packedInputs){let e=A(s);d=`${e[0]===a[1]}_${e[e.length-1]===a[1]}`}let f=t.shape.length,p=s.length===2&&xe(t.shape,a),m=k(t.shape)===1,h=vl(t.shape,n.shape),g=!e.packedInputs&&f===n.shape.length&&xe(a,n.texData.texShape),_=e.packedInputs||s.length>2?``:`${a[0]>1}_${a[1]>1}`;r+=`${f}_${g}_${o?c:``}_${s.length}_${m}_${h}_${p}_${l}_${u}_${d}_${_}_${i}`}else{let e=t.isUniform?`uniform`:t.texData.texShape;r+=`${t.shape}_${e}_${i}`}});let i=e.userCode,a=e.constructor.name;return a+=`_`+r+`_`+i+`${j().getNumber(`WEBGL_VERSION`)}`,a}function PI(e){return j().getBool(`WEBGL_USE_SHAPES_UNIFORMS`)&&e<=4}var FI=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=EP.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=kF();this.outputShape=e,this.enableShapeUniforms=PI(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?jF([`r`,`c`,`d`],e):AF([`r`,`c`,`d`],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}},II=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=EP.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=kF();this.outputShape=e,this.enableShapeUniforms=PI(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?jF([`r`,`c`,`d`],e):AF([`r`,`c`,`d`],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}},LI=class{constructor(e){this.variableNames=[`A`],this.outTexUsage=DP.DOWNLOAD;let t=kF();this.outputShape=e,this.userCode=`
      ${IF}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}},RI=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=DP.DOWNLOAD;let t=kF();this.outputShape=e,this.userCode=`
      ${IF}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}},zI={R:0,G:1,B:2,A:3},BI=class{constructor(e,t=!1,n=`RGBA`){this.variableNames=[`A`],this.customUniforms=[{name:`texShape`,type:`ivec2`}];let r=kF();this.outputShape=e,this.enableShapeUniforms=PI(this.outputShape.length);let i=`result`;t&&(i=`floor(result * 255. + 0.5)`);let a=``;for(let e=0;e<n.length;e++){let t=n[e];a+=`
          if(offset == ${e}) {
            result = values[${zI[t]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?FF():PF(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${n.length});

        flatIndex = idiv(flatIndex, ${n.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${r.texture2D}(A, uv);
          ${a}
        }
        ${r.output} = vec4(${i}, 0., 0., 0.);
      }
    `}},VI=class{constructor(e,t=!1){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let n=kF();this.outputShape=e,this.enableShapeUniforms=PI(this.outputShape.length);let r=``,i=`result`;t&&(i=`floor(result * 255. + 0.5)`);for(let t=0;t<=1;t++)for(let i=0;i<=1;i++){let a=t*2+i;r+=`
          localCoords = coords;
          if(localCoords[2] + ${i} < ${this.enableShapeUniforms?`outShape[2]`:`${e[2]}`}) {
          localCoords[2] += ${i};
          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?`outShape[1]`:`${e[1]}`}) {
            localCoords[1] += ${t};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${n.texture2D}(A, uv);

            if (offset == 0) {
              result[${a}] = values[0];
            } else if (offset == 1) {
              result[${a}] = values[1];
            } else if (offset == 2) {
              result[${a}] = values[2];
            } else {
              result[${a}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?FF():PF(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${n.output} = ${i};
        }
    `}};function HI(e){let t=kF();return VP(e,`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function UI(e){return JP(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function WI(e){return YP(e,new Uint16Array([0,1,2,2,1,3]))}function GI(e,t,n,r,i,a){ZP(t,n);let o=XP(e),s=e.TEXTURE_2D;return Z(e,()=>e.bindTexture(s,o)),Z(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),Z(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),Z(e,()=>e.texParameteri(s,e.TEXTURE_MIN_FILTER,e.NEAREST)),Z(e,()=>e.texParameteri(s,e.TEXTURE_MAG_FILTER,e.NEAREST)),j().getNumber(`WEBGL_VERSION`)===1?Z(e,()=>e.texImage2D(s,0,r,t,n,0,i,a,null)):Z(e,()=>e.texStorage2D(s,1,r,t,n)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:o,texShape:[n,t]}}function KI(e){return e.internalFormatFloat}function qI(e,t,n,r){let[i,a]=kP(t,n);return GI(e,i,a,KI(r),r.textureFormatFloat,e.FLOAT)}function JI(e){return e.internalFormatHalfFloat}function YI(e,t,n,r){let[i,a]=kP(t,n);return GI(e,i,a,JI(r),r.textureFormatFloat,r.textureTypeHalfFloat)}function XI(e){return e.downloadTextureFormat}function ZI(e,t,n,r){let[i,a]=kP(t,n);return GI(e,i,a,XI(r),e.RGBA,e.UNSIGNED_BYTE)}function QI(e){return e.internalFormatPackedFloat}function $I(e,t,n,r){let[i,a]=MP(t,n);return GI(e,i,a,QI(r),e.RGBA,e.FLOAT)}function eL(e){return e.internalFormatPackedHalfFloat}function tL(e,t,n,r){let[i,a]=MP(t,n);return GI(e,i,a,eL(r),e.RGBA,r.textureTypeHalfFloat)}function nL(e,t,n){return Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),$P(e,t,`clipSpacePos`,n,3,20,0)&&$P(e,t,`uv`,n,2,20,12)}function rL(e,t,n,r,i,a){Z(e,()=>e.bindTexture(e.TEXTURE_2D,t));let o,s,c;i instanceof Uint8Array?(o=new Uint8Array(n*r*4),s=e.UNSIGNED_BYTE,c=e.RGBA):(o=new Float32Array(n*r*4),s=e.FLOAT,c=a.internalFormatPackedFloat),o.set(i),j().getNumber(`WEBGL_VERSION`)===2?Z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,r,e.RGBA,s,o)):Z(e,()=>e.texImage2D(e.TEXTURE_2D,0,c,n,r,0,e.RGBA,s,o)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function iL(e,t,n){Z(e,()=>e.bindTexture(e.TEXTURE_2D,t)),n.data instanceof Uint8Array?j().getNumber(`WEBGL_VERSION`)===2?Z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,n.data)):Z(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data)):j().getNumber(`WEBGL_VERSION`)===2?Z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n)):Z(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function aL(e,t,n,r){let i=e.createBuffer();Z(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,i));let a=16*t*n;return Z(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)),Z(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0)),Z(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),i}function oL(e,t,n){let r=e,i=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,i),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),i}function sL(e,t,n,r){let[i,a]=kP(t,n),o=new Uint8Array(AP(t*n,4));return Z(e,()=>e.readPixels(0,0,i,a,r.downloadTextureFormat,e.UNSIGNED_BYTE,o)),new Float32Array(o.buffer)}function cL(e,t,n,r,i,a,o,s){let c=e,l=new Float32Array(NP(a,o));return c.bindBuffer(c.PIXEL_PACK_BUFFER,t),c.getBufferSubData(c.PIXEL_PACK_BUFFER,0,l),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),l}function lL(e,t,n){let r=new Float32Array(t*n*4);return Z(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,r)),r}var uL=class{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let t=j().getNumber(`WEBGL_VERSION`);if(e==null?this.gl=CP(t):(this.gl=e,SP(t,e)),e=this.gl,j().getNumber(`WEBGL_VERSION`)===2){let t=e;this.createVertexArray=()=>Z(t,()=>t.createVertexArray()),this.bindVertexArray=e=>Z(t,()=>t.bindVertexArray(e)),this.deleteVertexArray=e=>Z(t,()=>t.deleteVertexArray(e)),this.getVertexArray=()=>Z(t,()=>t.getParameter(t.VERTEX_ARRAY_BINDING))}else if(e!=null){let t=e.getExtension(`OES_vertex_array_object`);if(t==null)throw Error(`All WebGL1 implementations are expected to offer OES_vertex_array_object.`);this.createVertexArray=()=>Z(e,()=>t.createVertexArrayOES()),this.bindVertexArray=n=>Z(e,()=>t.bindVertexArrayOES(n)),this.deleteVertexArray=n=>Z(e,()=>t.deleteVertexArrayOES(n)),this.getVertexArray=()=>Z(e,()=>e.getParameter(t.VERTEX_ARRAY_BINDING_OES))}let n=`WEBGL_color_buffer_float`,r=`EXT_color_buffer_half_float`;if(this.parallelCompilationExtension=this.gl.getExtension(`KHR_parallel_shader_compile`),j().getNumber(`WEBGL_VERSION`)===1){let e=`OES_texture_half_float`;if(this.textureFloatExtension=BP(this.gl,`OES_texture_float`),xF(this.gl,e))this.textureHalfFloatExtension=BP(this.gl,e);else if(j().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`);if(this.colorBufferFloatExtension=this.gl.getExtension(n),xF(this.gl,r))this.colorBufferHalfFloatExtension=BP(this.gl,r);else if(j().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`)}else if(n=`EXT_color_buffer_float`,xF(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else if(xF(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw Error(`GL context does not support color renderable floats`);this.vertexBuffer=UI(this.gl),this.indexBuffer=WI(this.gl),this.framebuffer=QP(this.gl),this.textureConfig=PP(this.gl,this.textureHalfFloatExtension)}get debug(){return j().getBool(`DEBUG`)}dispose(){if(this.disposed)return;this.program!=null&&console.warn(`Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.`),this.outputTexture!=null&&console.warn(`Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.`);let e=this.gl;Z(e,()=>e.finish()),Z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),Z(e,()=>e.deleteFramebuffer(this.framebuffer)),Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),Z(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),Z(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),qI(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),YI(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),ZI(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),iL(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,n,r){this.throwIfDisposed(),rL(this.gl,e,t,n,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),tL(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),$I(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(aF(this.gl,this.framebuffer),this.outputTexture=null),Z(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,()=>sL(this.gl,t,n,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,n,r,i,a){return cL(this.gl,e,t,n,r,i,a,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return oL(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);let r=aL(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if(j().getBool(`WEBGL_FENCE_API_ENABLED`)){let r=e,i=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{let e=r.clientWaitSync(i,0,0);return e===r.ALREADY_SIGNALED||e===r.CONDITION_SATISFIED},t=i}else j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,()=>lL(this.gl,t,n))}createProgram(e){this.throwIfDisposed();let t=this.gl;this.vertexShader??=HI(t);let n=GP(t);Z(t,()=>t.attachShader(n,this.vertexShader)),Z(t,()=>t.attachShader(n,e)),KP(t,n);let r=Object.assign(n,{vao:this.createVertexArray()});return this.debug&&qP(t,r),r}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);let t=this.gl;Z(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),nL(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(Z(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&qP(this.gl,this.program),Z(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,n=!0){return this.throwIfDisposed(),n?tF(this.gl,e,t):nF(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),Z(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),rF(this.gl,e,t,n)}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();let[r,i]=MP(t,n);this.setOutputMatrixTextureDriver(e,r,i)}setOutputMatrixWriteRegion(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,n,r){throw Error(`setOutputPackedMatrixWriteRegion not implemented.`)}debugValidate(){this.program!=null&&qP(this.gl,this.program),oF(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;if(this.debug){let e=this.getVertexArray();console.assert(e===this.program.vao,`VAO changed between setProgram and executeProgram!`),this.debugValidate()}Z(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),Z(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension??=BP(this.gl,j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2?`EXT_disjoint_timer_query_webgl2`:`EXT_disjoint_timer_query`),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await Ee(()=>this.disposed||this.isQueryAvailable(e,j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))),this.getQueryTime(e,j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))}getQueryTime(e,t){if(t===0)return null;if(t===2){let t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}else{let t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){let t=this.gl,n=this.getQueryTimerExtensionWebGL2(),r=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return this.disjoint??=this.gl.getParameter(n.GPU_DISJOINT_EXT),r&&!this.disjoint}else{let t=this.getQueryTimerExtensionWebGL1(),n=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint??=this.gl.getParameter(t.GPU_DISJOINT_EXT),n&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=dL(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let n;`setTimeoutCustom`in j().platform&&(n=j().platform.setTimeoutCustom.bind(j().platform)),Ee(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,n)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),iF(this.gl,e,this.framebuffer),this.debug&&oF(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture==null?aF(this.gl,this.framebuffer):(iF(this.gl,this.outputTexture,this.framebuffer),this.debug&&oF(this.gl))}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();let r=this.gl;iF(r,e,this.framebuffer),this.debug&&oF(r),this.outputTexture=e,Z(r,()=>r.viewport(0,0,t,n)),Z(r,()=>r.scissor(0,0,t,n))}setOutputMatrixWriteRegionDriver(e,t,n,r){this.throwIfDisposed(),Z(this.gl,()=>this.gl.scissor(e,t,n,r))}throwIfDisposed(){if(this.disposed)throw Error(`Attempted to use disposed GPGPUContext.`)}throwIfNoProgram(){if(this.program==null)throw Error(`No GPU program is currently set.`)}};function dL(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var{addImpl:fL,bincountImpl:pL,bincountReduceImpl:mL,bitwiseAndImpl:hL,castImpl:gL,ceilImpl:_L,concatImpl:vL,equalImpl:yL,expImpl:bL,expm1Impl:xL,floorImpl:SL,gatherNdImpl:CL,gatherV2Impl:wL,greaterImpl:TL,greaterEqualImpl:EL,lessImpl:DL,lessEqualImpl:OL,linSpaceImpl:kL,logImpl:AL,maxImpl:jL,maximumImpl:ML,minimumImpl:NL,multiplyImpl:PL,negImpl:FL,notEqualImpl:IL,prodImpl:LL,raggedGatherImpl:RL,raggedRangeImpl:zL,raggedTensorToTensorImpl:BL,rangeImpl:VL,rsqrtImpl:HL,scatterImpl:UL,sigmoidImpl:WL,simpleAbsImpl:GL,sliceImpl:KL,sparseFillEmptyRowsImpl:qL,sparseReshapeImpl:JL,sparseSegmentReductionImpl:YL,sqrtImpl:XL,staticRegexReplaceImpl:ZL,stridedSliceImpl:QL,stringNGramsImpl:$L,stringSplitImpl:eR,stringToHashBucketFastImpl:tR,subImpl:nR,tileImpl:rR,topKImpl:iR,transposeImpl:aR,uniqueImpl:oR}=dk;function sR(e,t){return[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,t).map(t=>`${e}.${t}`)}function cR(e,t){return t===1?[e]:sR(e,t)}function lR(e,t){if(e===1)return`rc`;let n=``;for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=`,`);return n}var uR=class{constructor(e){if(this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=PI(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let e=cR(`rc`,this.rank),t=TI(this.rank),n=this.getOutOfBoundsCondition(e),r=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${t} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let n=0;n<=1;n++)for(let r=0;r<=1;r++){let i=`${n===0?`r`:`rp1`}, ${r===0?`c`:`cp1`}`;for(let t=2;t<this.rank;t++)i=`${e[e.length-1-t]},`+i;t.push(i)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?`outShape`:this.outputShape[0]}`;let t=``;for(let n=this.rank-2;n<this.rank;n++)t+=`${e[n]} >= ${this.enableShapeUniforms?`outShape[${n}]`:this.outputShape[n]}`,n<this.rank-1&&(t+=`||`);return t}getSetup(e){if(this.rank===1)return``;let t=e.slice(-2),n=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${n};
      bool rEdge = rp1 >= ${r};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?`outShape`:this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}},dR=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec3`}],this.outputShape=e,this.enableShapeUniforms=PI(this.outputShape.length);let n=``;for(let e=0;e<4;e++){let t=`thisRC = rc;`;e%2==1&&(t+=`thisRC.z += 1;`),e>1&&(t+=`thisRC.y += 1;`),n+=`
        ${t}
        ${e>0?`if(thisRC.y < rows && thisRC.z < cols){`:``}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${e>0?`}`:``}
      `}this.userCode=`
      ${fR(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?FF():PF(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?`outShape[1]`:e[1]};
        int cols = ${this.enableShapeUniforms?`outShape[2]`:e[2]};

        ${n}

        setOutput(result);
      }
    `}};function fR(e,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?NF([`r`,`c`,`d`],`inputShape`):AF([`r`,`c`,`d`],e)}
      return ivec3(r, c, d);
    }
  `}var pR=class{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,n){let r=vR(t,n),i=yR(e,r,n);i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]);let a=hR(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=a,this.log();let e=this.freeTextures[i].pop();return this.usedTextures[i].push(e),e}let o;return r===OP.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===OP.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===OP.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===OP.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===OP.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[i].push(o),this.numUsedTextures++,this._numBytesAllocated+=a,this.log(),o}releaseTexture(e,t,n,r){if(this.freeTextures==null)return;let i=vR(n,r),a=yR(t,i,r);a in this.freeTextures||(this.freeTextures[a]=[]);let o=hR(t,i,this.gpgpu.gl,this.gpgpu.textureConfig,r),s=j().getNumber(`WEBGL_DELETE_TEXTURE_THRESHOLD`);s!==-1&&this._numBytesAllocated>s?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=o):(this.freeTextures[a].push(e),this.numFreeTextures++,this._numBytesFree+=o),this.numUsedTextures--;let c=this.usedTextures[a],l=c&&c.indexOf(e);if(l==null||l<0)throw Error(`Cannot release a texture that was never provided by this texture manager`);c[l]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log(`Free/Used`,`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let e in this.freeTextures)this.freeTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function mR(e,t){let n=e;if(t===n.R32F)return 4;if(t===n.R16F)return 2;if(t===n.RGBA32F||t===e.RGBA)return 16;if(t===n.RGBA16F)return 8;if(t===n.RGBA8)return 4;throw Error(`Unknown internal format ${t}`)}function hR(e,t,n,r,i){let a=gR(t,r),o;if(i){let[t,n]=MP(e[0],e[1]);o=t*n}else{let[t,n]=kP(e[0],e[1]);o=t*n}let s=mR(n,a);return o*s}function gR(e,t){switch(e){case OP.PACKED_2X2_FLOAT32:return QI(t);case OP.PACKED_2X2_FLOAT16:return eL(t);case OP.UNPACKED_FLOAT32:return KI(t);case OP.UNPACKED_FLOAT16:return JI(t);case OP.PACKED_4X1_UNSIGNED_BYTE:return XI(t);default:throw Error(`Unknown physical texture type ${e}`)}}function _R(e){return j().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?e?OP.PACKED_2X2_FLOAT32:OP.UNPACKED_FLOAT32:e?OP.PACKED_2X2_FLOAT16:OP.UNPACKED_FLOAT16}function vR(e,t){if(e===DP.UPLOAD)return OP.PACKED_2X2_FLOAT32;if(e===DP.RENDER||e==null)return _R(t);if(e===DP.DOWNLOAD||e===DP.PIXELS)return OP.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type ${e}`)}function yR(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}var bR=class{constructor(e,t){this.variableNames=[`A`],this.outputShape=e,this.enableShapeUniforms=PI(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},xR=`if (isnan(x)) return x;`,SR=`return x;`,CR=`return abs(x);`,wR=`return (x >= 0.0) ? x : (exp(x) - 1.0);`,TR=xR+`
  return (x < 0.0) ? 0.0 : x;
`,ER=xR+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,DR=`return x;`,OR=`return 1.0 / (1.0 + exp(-1.0 * x));`,kR=`return x;`,AR=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,jR=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,MR=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,NR=`return 1.0 / (1.0 + exp(-1.0 * x));`,PR=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=PI(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}},FR=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=PI(this.outputShape.length);let t=e.length,n=cR(`rc`,t),r=TI(t),i=lR(t,n),a=n.slice(-2),o=t<=1?`rc`:`vec2(${a.join(`,`)})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${i});

        setOutput(getChannel(packedInput, ${o}));
      }
    `}},IR=kp,LR=1e-7,RR=1e-4,zR={};function BR(e){return e in zR||(zR[e]={}),zR[e]}var VR=j().getNumber(`CPU_HANDOFF_SIZE_THRESHOLD`),HR=600;function UR(){return j().global.screen==null?1024:j().global.screen.height*j().global.screen.width*window.devicePixelRatio*HR/1024/1024}var WR=class e extends fe{nextDataId(){return e.nextDataId++}constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!j().getBool(`HAS_WEBGL`))throw Error(`WebGL is not supported on this device`);let t;e==null?(t=new uL(CP(j().getNumber(`WEBGL_VERSION`))),this.binaryCache=BR(j().getNumber(`WEBGL_VERSION`)),this.gpgpuCreatedLocally=!0):(t=e instanceof uL?e:new uL(CP(j().getNumber(`WEBGL_VERSION`),e)),this.binaryCache={},this.gpgpuCreatedLocally=!1),this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new pR(this.gpgpu),this.numMBBeforeWarning=UR(),this.texData=new de(this,Ka())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,n,r,i,a){let o=this.makeTensorInfo(t,n),s=this.texData.get(o.dataId);s.isPacked=!1,s.texture={texture:e,texShape:[r,i]},s.texShape=[r,i];let c=new BI(fF(t),!1,a),l=this.runWebGLProgram(c,[o],n,[[r,i]]);return l.shape=t,s.texture=null,this.disposeIntermediateTensorInfo(o),l.dataId}write(e,t,n){if((j().getBool(`WEBGL_CHECK_NUMERICAL_PROBLEMS`)||j().getBool(`DEBUG`))&&this.checkNumericalProblems(e),n===`complex64`&&e!=null)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);let r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:DP.UPLOAD,refCount:1}),r}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){let t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){let t=this.texData.get(e);t.refCount--}}move(e,t,n,r,i){if(j().getBool(`DEBUG`)&&this.checkNumericalProblems(t),r===`complex64`)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);this.texData.set(e,{shape:n,dtype:r,values:t,usage:DP.UPLOAD,refCount:i})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){let{values:t,dtype:n,complexTensorInfos:r,slice:i,shape:a,isPacked:o}=this.texData.get(e);if(i!=null){let t;t=o?new PR(a,DR):new bR(a,DR);let r=this.runWebGLProgram(t,[{dataId:e,shape:a,dtype:n}],n),i=this.readSync(r.dataId);return this.disposeIntermediateTensorInfo(r),i}if(t!=null)return this.convertAndCacheOnCPU(e);if(n===`string`)return t;let s=this.activeTimers!=null,c;s&&(c=Ii());let l;return l=n===`complex64`?dg(this.readSync(r.real.dataId),this.readSync(r.imag.dataId)):this.getValuesFromTexture(e),s&&(this.downloadWaitMs+=Ii()-c),this.convertAndCacheOnCPU(e,l)}async read(e){if(this.pendingRead.has(e)){let t=this.pendingRead.get(e);return new Promise(e=>t.push(e))}let{values:t,shape:n,slice:r,dtype:i,complexTensorInfos:a,isPacked:o}=this.texData.get(e);if(r!=null){let t;t=o?new PR(n,DR):new bR(n,DR);let r=this.runWebGLProgram(t,[{dataId:e,shape:n,dtype:i}],i),a=this.read(r.dataId);return this.disposeIntermediateTensorInfo(r),a}if(t!=null)return this.convertAndCacheOnCPU(e);if(j().getBool(`DEBUG`)&&!j().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)&&j().getNumber(`WEBGL_VERSION`)===2)throw Error(`tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.`);let s=null,c;if(i!==`complex64`&&j().get(`WEBGL_BUFFER_SUPPORTED`)){c=this.decode(e);let t=this.texData.get(c.dataId);s=this.gpgpu.createBufferFromTexture(t.texture.texture,...jP(n))}this.pendingRead.set(e,[]),i!==`complex64`&&await this.gpgpu.createAndWaitForFence();let l;if(i===`complex64`){let e=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),t=e[0],n=e[1];l=dg(t,n)}else if(s==null)l=this.getValuesFromTexture(e);else{let e=k(n);l=this.gpgpu.downloadFloat32MatrixFromBuffer(s,e)}if(c!=null&&this.disposeIntermediateTensorInfo(c),s!=null){let e=this.gpgpu.gl;Z(e,()=>e.deleteBuffer(s))}let u=this.convertAndCacheOnCPU(e,l),d=this.pendingRead.get(e);return this.pendingRead.delete(e),d.forEach(e=>e(u)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&Ka().removeDataId(e,this),this.pendingDeletes--),u}readToGPU(e,t={}){let{values:n,shape:r,slice:i,dtype:a,isPacked:o,texture:s}=this.texData.get(e);if(a===`complex64`)throw Error(`Does not support reading texture for complex64 dtype.`);if(i!=null){let n;n=o?new PR(r,DR):new bR(r,DR);let i=this.runWebGLProgram(n,[{dataId:e,shape:r,dtype:a}],a),s=this.readToGPU(i,t);return this.disposeIntermediateTensorInfo(i),s}if(s==null)throw Error(n==null?`There is no data on GPU or CPU.`:`Data is not on GPU but on CPU.`);let c=this.decode(e,t.customTexShape),l=Ka().makeTensorFromTensorInfo(c),u=this.texData.get(c.dataId);return Object.assign({tensorRef:l},u.texture)}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype===`string`)try{let n=t.map(e=>Ri(e));return es(e.shape,e.dtype,n)}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return es(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){let n=e[t];if(!RP(n))throw j().getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)?Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${n} cannot be represented on this device.`)}}getValuesFromTexture(e){let{shape:t,dtype:n,isPacked:r}=this.texData.get(e),i=k(t);if(j().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)){let n=this.decode(e),r=this.texData.get(n.dataId),a=this.gpgpu.downloadMatrixFromPackedTexture(r.texture.texture,...jP(t)).subarray(0,i);return this.disposeIntermediateTensorInfo(n),a}let a=j().getBool(`WEBGL_PACK`)&&r===!0,o=a?fF(t):t,s=a?new RI(o):new LI(o),c=this.runWebGLProgram(s,[{shape:o,dtype:n,dataId:e}],`float32`),l=this.texData.get(c.dataId),u=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(l.texture.texture,l.texShape[0],l.texShape[1]).subarray(0,i);return this.disposeIntermediateTensorInfo(c),u}timerAvailable(){return j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0}time(e){let t=this.activeTimers,n=[],r=!1;this.programTimersStack==null?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e();let i=Bi(this.activeTimers.map(e=>e.query)).filter(e=>e!=null),a=Bi(this.activeTimers.map(e=>e.name)).filter(e=>e!=null);this.activeTimers=t,r&&(this.programTimersStack=null);let o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0){let e=await Promise.all(i);o.kernelMs=ve(e),o.getExtraProfileInfo=()=>e.map((e,t)=>({name:a[t],ms:e})).map(e=>`${e.name}: ${e.ms}`).join(`, `)}else o.kernelMs={error:`WebGL query timers are not supported in this environment.`};return this.uploadWaitMs=0,this.downloadWaitMs=0,o})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?this.gpgpu.beginQuery():{startMs:Ii(),endMs:null}}endTimer(e){return j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?(this.gpgpu.endQuery(),e):(e.endMs=Ii(),e)}async getQueryTime(e){if(j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0)return this.gpgpu.waitForQueryAndGetTime(e);let t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);let{complexTensorInfos:n}=this.texData.get(e);return n!=null&&(this.disposeData(n.real.dataId,t),this.disposeData(n.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){let{texture:t,dtype:n,texShape:r,usage:i,isPacked:a,slice:o}=this.texData.get(e),s=o&&o.origDataId||e,c=this.dataRefCount.get(s);c>1?this.dataRefCount.set(s,c-1):(this.dataRefCount.delete(s),t!=null&&(this.numBytesInGPU-=this.computeBytes(r,n),this.textureManager.releaseTexture(t,r,i,a)));let l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=VR){return j().getBool(`WEBGL_CPU_FORWARD`)&&e.every(e=>this.texData.get(e.dataId).texture==null&&k(e.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){ii(`tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead`);let t=e.dataSync();return IR(e.shape,t)}packedUnaryOp(e,t,n){let r=new PR(e.shape,t),i=this.compileAndRun(r,[e],n);return Ka().makeTensorFromTensorInfo(i)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!==`complex64`){let t=GL(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if(j().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,CR,e.dtype);let t=new bR(e.shape,CR),n=this.compileAndRun(t,[e]);return Ka().makeTensorFromTensorInfo(n)}makeTensorInfo(e,t,n){let r;if(t===`string`&&n!=null&&n.length>0&&Le(n[0])){let i=n.map(e=>Li(e));r=this.write(i,e,t)}else r=this.write(n,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,n){return Ka().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,n),this)}unpackTensor(e){let t=new FR(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){let t=new uR(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){let n=[uF(e.shape),...dF(e.shape)],r={dtype:e.dtype,shape:n,dataId:e.dataId},i=new dR([uF(t),...dF(t)],n),a=[n],o=this.runWebGLProgram(i,[r],e.dtype,a,!0);return{dataId:o.dataId,shape:t,dtype:o.dtype}}decode(e,t){let{isPacked:n,shape:r,dtype:i}=this.texData.get(e);t!=null&&O(k(r)<=t[0]*t[1]*4,()=>`customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.`);let a=fF(r),o;o=n?new II(a):new FI(a);let s=[t??jP(a)];return{dtype:i,shape:r,dataId:this.runWebGLProgram(o,[{shape:a,dtype:i,dataId:e}],i,s,!0,t).dataId}}runWebGLProgram(e,t,n,r,i=!1,a){let o=this.makeTensorInfo(e.outputShape,n),s=this.texData.get(o.dataId);if(e.packedOutput&&(s.isPacked=!0),e.outPackingScheme===EP.DENSE&&(s.texShape=(a??jP(e.outputShape)).map(e=>e*2)),e.outTexUsage!=null&&(s.usage=e.outTexUsage),k(o.shape)===0)return s.values=Ae(o.dtype,0),o;let c=[],l=t.map(t=>{if(t.dtype===`complex64`)throw Error(`GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.`);let n=this.texData.get(t.dataId);if(n.texture==null){if(!e.packedInputs&&k(t.shape)<=j().getNumber(`WEBGL_SIZE_UPLOAD_UNIFORM`))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!n.isPacked!=!!e.packedInputs)t=n.isPacked?this.unpackTensor(t):this.packTensor(t),c.push(t),n=this.texData.get(t.dataId);else if(n.isPacked&&!hF(n.shape,t.shape)){let e=t,r=t.shape;t.shape=n.shape,t=this.packedReshape(t,r),c.push(t),n=this.texData.get(t.dataId),e.shape=r}return{shape:t.shape,texData:n,isUniform:!1}});this.uploadToGPU(o.dataId);let u={shape:o.shape,texData:s,isUniform:!1},d=NI(e,l,u),f=this.getAndSaveBinary(d,()=>kI(this.gpgpu,e,l,u)),p=this.activeTimers!=null,m;p&&(m=this.startTimer()),j().get(`ENGINE_COMPILE_ONLY`)||MI(this.gpgpu,f,l,u,r),c.forEach(e=>this.disposeIntermediateTensorInfo(e)),p&&(m=this.endTimer(m),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(m)}));let h=j().getNumber(`WEBGL_FLUSH_THRESHOLD`);if(h>0){let e=Ii();e-this.lastGlFlushTime>h&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!j().getBool(`WEBGL_LAZILY_UNPACK`)&&s.isPacked&&i===!1){let e=this.unpackTensor(o);return this.disposeIntermediateTensorInfo(o),e}return o}compileAndRun(e,t,n,r,i=!1){return n||=t[0].dtype,this.runWebGLProgram(e,t,n,r,i)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||=(j().getBool(`IS_TEST`)||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<`u`&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),!0)}floatPrecision(){return this.floatPrecisionValue??=I(()=>{if(!j().get(`WEBGL_RENDER_FLOAT32_ENABLED`)){let e=j().getBool(`DEBUG`);j().set(`DEBUG`,!1);let t=this.abs(Xl(1e-8)).dataSync()[0];if(j().set(`DEBUG`,e),t>0)return 32}return 16}),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?LR:RR}uploadToGPU(e){let t=this.texData.get(e),{shape:n,dtype:r,values:i,texture:a,usage:o,isPacked:s}=t;if(a!=null)return;let c=this.activeTimers!=null,l;c&&(l=Ii());let u=t.texShape;if(u??(u=pF(n,s),t.texShape=u),i!=null){let e=fF(n),a,o=u[1],d=u[0],f=i instanceof Uint8Array||i instanceof Uint8ClampedArray;(s||!f)&&([o,d]=MP(u[0],u[1])),a=s?new VI(e,f):new BI(e,f);let p=f?[d,o]:u,m=this.makeTensorInfo(p,r),h=this.texData.get(m.dataId);f?h.usage=DP.PIXELS:h.usage=DP.UPLOAD,h.texShape=p,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(m.dataId),o,d,i);let g=[[d,o]],_=this.runWebGLProgram(a,[m],r,g,!0),v=this.texData.get(_.dataId);t.texShape=v.texShape,t.isPacked=v.isPacked,t.usage=v.usage,j().get(`ENGINE_COMPILE_ONLY`)?this.disposeData(_.dataId):(t.texture=v.texture,t.values=null,this.texData.delete(_.dataId)),this.disposeIntermediateTensorInfo(m),c&&(this.uploadWaitMs+=Ii()-l)}else t.texture=this.acquireTexture(u,o,r,s)}convertAndCacheOnCPU(e,t){let n=this.texData.get(e),{dtype:r}=n;return t!=null&&(n.values=GR(t,r)),n.values}acquireTexture(e,t,n,r){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)}computeBytes(e,t){return e[0]*e[1]*Fe(t)}checkCompileCompletion(){for(let[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){let e=[];if(this.gpgpu.parallelCompilationExtension){for(let[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}else{for(let[,t]of Object.entries(this.binaryCache)){let n=new Promise(e=>{try{this.checkCompletion_(t),e(!0)}catch(e){throw e}});e.push(n)}return Promise.all(e)}}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await Hh(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(WP(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),Error(`Failed to compile fragment shader.`)):Error(`Failed to link vertex and fragment shaders.`);return!0}getUniformLocations(){for(let e of Object.values(this.binaryCache)){this.gpgpu.buildVao(e.webGLProgram);let{variablesLocations:t,customUniformLocations:n,infLoc:r,nanLoc:i,outShapeLocation:a,outShapeStridesLocation:o,outTexShapeLocation:s}=AI(this.gpgpu,e.program,e.webGLProgram);e.variablesLocations=t,e.customUniformLocations=n,e.infLoc=r,e.nanLoc=i,e.outShapeLocation=a,e.outShapeStridesLocation=o,e.outTexShapeLocation=s}}createTensorFromGPUData(e,t,n){e.channels=e.channels||`RGBA`;let{texture:r,height:i,width:a,channels:o}=e,s=Ka().backend;if(!s.gpgpu.gl.isTexture(r))throw Error(`The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.`);let c=s.writeTexture(r,t,n,i,a,o);return Ka().makeTensorFromDataId(c,t,n,s)}};WR.nextDataId=0;function GR(e,t){if(t===`float32`||t===`complex64`)return e;if(t===`int32`||t===`bool`){let n=t===`int32`?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<n.length;++t)n[t]=Math.round(e[t]);return n}else throw Error(`Unknown dtype ${t}`)}Ma()&&Ya(`webgl`,()=>new WR,2);var KR=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,qR=class{constructor(e,t,n){this.variableNames=[`A`,`B`],this.outputShape=U(t,n),this.enableShapeUniforms=PI(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}},JR=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`,YR=class{constructor(e,t,n,r=!1){this.variableNames=[`A`,`B`],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=U(t,n);let i=this.outputShape.length;this.enableShapeUniforms=PI(i);let a=``;if(r)if(i===0||k(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          ${TI(i)} coords = getOutputCoords();
        `,i===1)this.enableShapeUniforms?a+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:a+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let e=cR(`coords`,i);this.enableShapeUniforms?a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= outShape[${i} - 2];
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= outShape[${i} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= ${this.outputShape[i-2]};
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= ${this.outputShape[i-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${a}

        setOutput(result);
      }
    `}};function XR(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var ZR={kernelName:vn,backendName:`webgl`,kernelFunc:XR};function QR(e){let{inputs:t,backend:n}=e,{real:r,imag:i}=t,a=n.makeTensorInfo(r.shape,`complex64`),o=n.texData.get(a.dataId);return o.complexTensorInfos={real:XR({inputs:{x:r},backend:n}),imag:XR({inputs:{x:i},backend:n})},a}var $R={kernelName:Nt,backendName:`webgl`,kernelFunc:QR},ez=`return (a < 0.) ? b * a : a;`,tz=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function nz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{alpha:a}=r,o=n.makeTensorInfo([],`float32`,Ni(a,`float32`)),s=j().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new YR(tz,i.shape,o.shape):new qR(ez,i.shape,o.shape),c=n.runWebGLProgram(s,[i,o],`float32`);return n.disposeIntermediateTensorInfo(o),c}var rz={kernelName:wn,backendName:`webgl`,kernelFunc:nz},iz=`return (a < 0.) ? b * a : a;`,az=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function oz(e){let{inputs:t,backend:n}=e,{x:r,alpha:i}=t,a=j().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new YR(az,r.shape,i.shape):new qR(iz,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],`float32`)}var sz={kernelName:$n,backendName:`webgl`,kernelFunc:oz},cz=`if (isnan(x)) return x;`;function lz({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:i,backend:a})=>{let{x:o}=i,s=a,c=r||o.dtype;if(s.shouldExecuteOnCPU([o])&&n!=null){let e=n(s.texData.get(o.dataId).values,c);return s.makeTensorInfo(o.shape,c,e)}let l=j().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)&&t!=null,u;return u=l?new PR(o.shape,t):new bR(o.shape,e),s.runWebGLProgram(u,[o],c)}}function uz({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:i,dtype:a}){return({inputs:o,backend:s})=>{let{a:c,b:l}=o,u=s;if(r&&c.dtype===`complex64`){let t=u.texData.get(c.dataId),n=u.texData.get(l.dataId),[r,i]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map(t=>{let[n,r]=t,i={dataId:n.dataId,dtype:n.dtype,shape:c.shape},a={dataId:r.dataId,dtype:r.dtype,shape:l.shape},o=new qR(e,c.shape,l.shape);return u.runWebGLProgram(o,[i,a],ma(n.dtype,r.dtype))}),a=QR({inputs:{real:r,imag:i},backend:u});return u.disposeIntermediateTensorInfo(r),u.disposeIntermediateTensorInfo(i),a}let d=a||ma(c.dtype,l.dtype);if((c.dtype===`string`||l.dtype===`string`||u.shouldExecuteOnCPU([c,l]))&&i!=null){let e=u.texData.get(c.dataId).values,t=u.texData.get(l.dataId).values,n=c.dtype===`string`?qg(e):e,r=c.dtype===`string`?qg(t):t,[a,o]=i(c.shape,l.shape,n,r,d),s=u.makeTensorInfo(o,d),f=u.texData.get(s.dataId);return f.values=a,s}let f=j().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)&&t!=null,p;return p=f?new YR(t,c.shape,l.shape,n):new qR(e,c.shape,l.shape),u.runWebGLProgram(p,[c,l],d)}}function dz(e,t=!1){if(e===`linear`)return t?kR:SR;if(e===`relu`)return t?jR:TR;if(e===`elu`)return t?AR:wR;if(e===`relu6`)return t?MR:ER;if(e===`prelu`)return t?az:iz;if(e===`leakyrelu`)return t?tz:ez;if(e===`sigmoid`)return t?NR:OR;throw Error(`Activation ${e} has not been implemented for the WebGL backend.`)}var fz=class{constructor(e,t,n,r=!1,i=!1,a=!1,o=null,s=!1,c=!1){this.variableNames=[`matrixA`,`matrixB`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.enableShapeUniforms=PI(this.outputShape.length);let l=r?e[1]:e[2],u=Math.ceil(l/2),d=r?`i * 2, rc.y`:`rc.y, i * 2`,f=i?`rc.z, i * 2`:`i * 2, rc.z`,p=r?[`a.xxyy`,`a.zzww`]:[`a.xxzz`,`a.yyww`],m=i?[`b.xzxz`,`b.ywyw`]:[`b.xyxy`,`b.zwzw`],h=``,g=``;o&&(h=s?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:c?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:`vec4 activation(vec4 x) {
          ${o}
        }`,g=`result = activation(result);`);let _=a?`result += getBiasAtOutCoords();`:``;a&&this.variableNames.push(`bias`),s&&this.variableNames.push(`preluActivationWeights`),c&&this.variableNames.push(`leakyreluAlpha`);let v=`rc.x`,y=`rc.x`;e[0]<t[0]?v=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(y=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${h}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${u}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${v};
        int batchB = ${y};
        for (int i = 0; i < ${u}; i++) {
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${m[0]});
          result += (${p[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${_}

        ${g}

        setOutput(result);
      }
    `}},pz={REAL:`return areal * breal - aimag * bimag;`,IMAG:`return areal * bimag + aimag * breal;`},mz=class{constructor(e,t,n){this.variableNames=[`AReal`,`AImag`,`BReal`,`BImag`],this.outputShape=U(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}},hz=`return a * b;`;function gz(e){let{inputs:t,backend:n}=e,{a:r,b:i}=t,a=ma(r.dtype,i.dtype);if(r.dtype===`complex64`){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),a=new mz(pz.REAL,r.shape,i.shape),o=new mz(pz.IMAG,r.shape,i.shape),s=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:r.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:i.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:i.shape}],c=n.runWebGLProgram(a,s,`float32`),l=n.runWebGLProgram(o,s,`float32`),u=QR({inputs:{real:c,imag:l},backend:n});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),u}if(n.shouldExecuteOnCPU([r,i])){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),[o,s]=PL(r.shape,i.shape,e.values,t.values,a),c=n.makeTensorInfo(s,a),l=n.texData.get(c.dataId);return l.values=o,c}let o;return o=j().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new YR(hz,r.shape,i.shape):new qR(hz,r.shape,i.shape),n.runWebGLProgram(o,[r,i],a)}var _z={kernelName:Wn,backendName:`webgl`,kernelFunc:gz};function vz(e,t,n){let r=[uF(e.shape),...dF(e.shape)],i={dtype:e.dtype,shape:r,dataId:e.dataId},a=new dR([uF(t),...dF(t)],r),o=[r],s=n.runWebGLProgram(a,[i],e.dtype,o,!0);return{dataId:s.dataId,shape:t,dtype:s.dtype}}function $(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{shape:a}=r,o=n,s=k(i.shape),c=De(a,s),l=k(c);O(s===l,()=>`The new shape (${c}) has ${l} elements and the old shape (${i.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`);let u=o.texData.get(i.dataId);return u.isPacked&&!hF(i.shape,c)&&!(u.texture!==null&&hF(u.shape,c))?vz(i,c,o):(o.incRef(i.dataId),{dataId:i.dataId,shape:c,dtype:i.dtype})}var yz={kernelName:cr,backendName:`webgl`,kernelFunc:$},bz=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=Math.floor(n/4)*4,s=n%4,c=`sumValue += dot(values, ones);`;if(t!=null){let e=1/t;c=`sumValue += dot(values * ${Se(e)?e.toPrecision(2):e}, ones);`}let l=``;i%n>0&&(l=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${l}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        float sumValue = 0.0;

        for (int i = 0; i < ${o}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${o};
        if (${s===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${s===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${s===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}},xz=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=`0.0`,s=``;t===`prod`?o=`1.0`:t===`min`?(o=`1.0 / 1e-20`,s=`min`):t===`max`&&(o=`-1.0 / 1e-20`,s=`max`);let c=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`sum`?c=`sumValue`:t===`prod`?c=`prodValue`:t===`all`?c=`allValue`:t===`any`&&(c=`anyValue`);let l=Math.floor(n/4)*4,u=n%4,d=`
      if (${t===`sum`}) {
        sumValue += dot(values, ones);
      } else if (${t===`prod`}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${s}(values, minMaxValue);
        if (${t===`min`} || ${t===`max`}) {
          minMaxValue = ${s}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f=`vec4`;t===`all`?(o=`1.0`,d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f=`bvec4`):t===`any`&&(o=`0.0`,d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f=`bvec4`);let p=``;i%n>0&&(p=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${o};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        vec4 minMaxValue = vec4(${o});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${l}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${l};
        if (${u===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}};function Sz(e){let t=[];for(;t.length===0||t[t.length-1].outSize!==1;){let n=t.length?t[t.length-1].outSize:e[1],r=Xh(n);t.push({inSize:n,windowSize:r,outSize:Math.ceil(n/r)})}return t}function Cz(e,t,n,r){let i=Sz(e.shape),a=e;for(let o=0;o<i.length;o++){let{inSize:s,windowSize:c,outSize:l}=i[o],u,d;u=n===`mean`?o===0?new bz({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},s):new bz({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l}):new xz({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},n),d=a,a=r.runWebGLProgram(u,[a],t),d.dataId!==e.dataId&&r.disposeIntermediateTensorInfo(d)}return a}var wz=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;let r=TI(this.rank),i=Tz(t);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${i}));
    }
    `}};function Tz(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`,`resRC.v`],r=Array(t);for(let t=0;t<e.length;t++)r[e[t]]=n[t];return r.join()}var Ez=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0;let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let r=TI(this.rank),i=sR(`rc`,this.rank),a=Array(this.rank);for(let e=0;e<t.length;e++)a[t[e]]=i[e];let o=`vec2(${a.slice(-2).join()})`,s=`++${i[this.rank-1]} < ${n[this.rank-1]}`,c=`getChannel(getA(${a.join()}), ${o})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${s}) {
        result[1] = ${c};
      }
      --${i[this.rank-1]};
      if(++${i[this.rank-2]} < ${n[this.rank-2]}) {
        result[2] = ${c};
        if(${s}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}};function Dz(e,t,n){let r=j().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new Ez(e.shape,t):new wz(e.shape,t);return n.runWebGLProgram(r,[e],e.dtype)}function Oz(e,t,n,r){let i=t,a=e.shape.length,o=Oe(i,e.shape),s=o,c=Vl(s,a),l=c!=null,u=e;l&&(u=Dz(e,c,r),s=Ul(s.length,a)),Bl(`sum`,s,a);let[d,f]=Rl(u.shape,s),p=d;n&&(p=zl(d,o));let m=k(f),h=k(e.shape)/m,g=$({inputs:{x:u},attrs:{shape:[h,m]},backend:r}),_=Cz(g,ha(e.dtype),`sum`,r),v=$({inputs:{x:_},attrs:{shape:p},backend:r});return r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(_),l&&r.disposeIntermediateTensorInfo(u),v}function kz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;return Oz(i,a,o,n)}var Az={kernelName:`Sum`,backendName:`webgl`,kernelFunc:kz};function jz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{perm:a}=r,o=n,s=i.shape.length,c=Array(s);for(let e=0;e<c.length;e++)c[e]=i.shape[a[e]];let l;if(o.shouldExecuteOnCPU([i])){let e=o.texData.get(i.dataId).values,t=aR(e,i.shape,i.dtype,a,c);l=o.makeTensorInfo(c,i.dtype);let n=o.texData.get(l.dataId);n.values=t}else l=Dz(i,a,o);return l}var Mz={kernelName:qr,backendName:`webgl`,kernelFunc:jz};function Nz({a:e,b:t,transposeA:n,transposeB:r,backend:i,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:s=0,activation:c=null}){let l=e.shape.length,u=t.shape.length,d=n?e.shape[l-2]:e.shape[l-1],f=r?t.shape[u-1]:t.shape[u-2],p=n?e.shape[l-1]:e.shape[l-2],m=r?t.shape[u-2]:t.shape[u-1],h=e.shape.slice(0,-2),g=t.shape.slice(0,-2),_=k(h),v=k(g),y=U(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,m]);O(d===f,()=>`Error in matMul: inner shapes (${d}) and (${f}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`);let b=n?[_,d,p]:[_,p,d],x=r?[v,m,f]:[v,f,m],S=$({inputs:{x:e},backend:i,attrs:{shape:b}}),C=$({inputs:{x:t},backend:i,attrs:{shape:x}}),w=[S,C],T=Math.max(_,v),E=n?S.shape[1]:S.shape[2],D=a!=null,ee=o!=null,te=c===`leakyrelu`,ne=c==null?null:dz(c,!0),re=D||ee||te||ne!=null,ie;if((p===1||m===1)&&E>1e3&&re===!1){let e=S,t=C;n&&(e=jz({inputs:{x:S},backend:i,attrs:{perm:[0,2,1]}}),w.push(e)),r&&(t=jz({inputs:{x:C},backend:i,attrs:{perm:[0,2,1]}}),w.push(t));let a=m!==1,o=m===1,s=e;a&&(s=$({inputs:{x:e},backend:i,attrs:{shape:[T,E,1]}}),w.push(s));let c=m===1?2:1,l=t;o&&(l=$({inputs:{x:t},backend:i,attrs:{shape:[T,1,E]}}),w.push(l));let u=gz({inputs:{a:s,b:l},backend:i});ie=kz({inputs:{x:u},backend:i,attrs:{axis:c,keepDims:!0}}),w.push(u)}else{let c=ma(e.dtype,t.dtype),l=new fz(b,x,[T,p,m],n,r,D,ne,ee,te),u=[S,C];if(a!=null&&u.push(a),ee&&u.push(o),te){let e=i.makeTensorInfo([],`float32`,Ni(s,`float32`));u.push(e),w.push(e)}ie=i.runWebGLProgram(l,u,c)}let ae=$({inputs:{x:ie},backend:i,attrs:{shape:y}});w.push(ie);for(let e of w)i.disposeIntermediateTensorInfo(e);return ae}function Pz(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a,bias:o,preluActivationWeights:s}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=r;return Nz({a:i,b:a,transposeA:c,transposeB:l,backend:n,bias:o,preluActivationWeights:s,leakyreluAlpha:d,activation:u})}var Fz={kernelName:ti,backendName:`webgl`,kernelFunc:Pz},Iz=`return abs(x);`;function Lz(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])&&r.dtype!==`complex64`){let e=GL(n.texData.get(r.dataId).values);return n.makeTensorInfo(r.shape,r.dtype,e)}let i;return i=j().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new PR(r.shape,Iz):new bR(r.shape,Iz),n.runWebGLProgram(i,[r],r.dtype)}var Rz={kernelName:`Abs`,backendName:`webgl`,kernelFunc:Lz},zz={kernelName:ut,backendName:`webgl`,kernelFunc:lz({opSnippet:xR+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`})},Bz={kernelName:dt,backendName:`webgl`,kernelFunc:lz({opSnippet:xR+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`})},Vz=`return a + b;`,Hz={kernelName:`Add`,backendName:`webgl`,kernelFunc:uz({opSnippet:Vz,packedOpSnippet:Vz,supportsComplex:!0,cpuKernelImpl:fL})},Uz=class{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`float v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}},Wz=class{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`vec4 v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}};function Gz(e){let{inputs:t,backend:n}=e,r=t;if(r.length===1)return XR({inputs:{x:r[0]},backend:n});if(r.length>j().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`)){let e=Math.floor(r.length/2);return Gz({inputs:[Gz({inputs:r.slice(0,e),backend:n}),Gz({inputs:r.slice(e),backend:n})],backend:n})}let i=r.map(e=>e.dtype).reduce((e,t)=>ma(e,t)),a=r.map(e=>e.shape),o=j().getBool(`WEBGL_PACK`)?new Wz(r[0].shape,a):new Uz(r[0].shape,a);return n.runWebGLProgram(o,r,i)}var Kz={kernelName:ft,backendName:`webgl`,kernelFunc:Gz};function qz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=Oe(a,i.shape),l=c,u=Vl(l,s),d=i;u!=null&&(d=jz({inputs:{x:i},backend:n,attrs:{perm:u}}),l=Ul(l.length,s)),Bl(`all`,l,s);let[f,p]=Rl(d.shape,l),m=k(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=Cz(h,h.dtype,`all`,n),_;if(o){let e=zl(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var Jz={kernelName:`All`,backendName:`webgl`,kernelFunc:qz};function Yz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=Oe(a,i.shape),l=c,u=Vl(l,s),d=i;u!=null&&(d=jz({inputs:{x:i},backend:n,attrs:{perm:u}}),l=Ul(l.length,s)),Bl(`any`,l,s);let[f,p]=Rl(d.shape,l),m=k(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=Cz(h,h.dtype,`any`,n),_;if(o){let e=zl(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var Xz={kernelName:`Any`,backendName:`webgl`,kernelFunc:Yz},Zz=class{constructor(e,t,n){this.variableNames=[`A`];let{windowSize:r,batchSize:i,outSize:a}=e;n||this.variableNames.push(`bestIndicesA`),this.outputShape=[i,a];let o=t===`max`?`>`:`<`,s=n?`inOffset + i;`:`round(getBestIndicesA(batch, inOffset + i));`;this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${s};
          float candidate = getA(batch, inIdx);
          if (candidate ${o} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}},Qz=class{constructor(e,t,n,r){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,O(e.length>2,()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`);let i=e[e.length-1],a=Math.ceil(i/t);this.outputShape=e.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push(`bestIndicesA`);let o=this.outputShape,s=o.length,c=TI(s),l=cR(`coords`,s),u,d;if(a===1){d=s+1;let e=TI(d);u=`
        ${e} sourceLocR = ${e}(${l.join()}, 0);
        ++${l[s-1]};
        ${e} sourceLocG = ${e}(${l.join()}, 0);
        ++${l[s-2]};
        ${e} sourceLocA = ${e}(${l.join()}, 0);
        --${l[s-1]};
        ${e} sourceLocB = ${e}(${l.join()}, 0);
        --${l[s-2]};`}else d=s,u=`
        ${c} sourceLocR = coords;
        ++${l[s-1]};
        ${c} sourceLocG = coords;
        ++${l[s-2]};
        ${c} sourceLocA = coords;
        --${l[s-1]};
        ${c} sourceLocB = coords;
        --${l[s-2]};`;let f=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,d),p=`.`+f[d-1],m=f.map(e=>`int `+e),h=cR(`sourceLocR`,d-1).concat(`inIdx.r`),g=cR(`sourceLocG`,d-1).concat(`inIdx.g`),_=cR(`sourceLocB`,d-1).concat(`inIdx.b`),v=cR(`sourceLocA`,d-1).concat(`inIdx.a`),y=n===`max`?`greaterThan`:`lessThan`,b=r?``:`
          inIdx = round(vec4(getBestIndicesAChannel(${h.join()}),
                             getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${_.join()}),
                             getBestIndicesAChannel(${v.join()})));`,x=`vec4(
            getAChannel(${h.join()}),
            hasNextCol ? getAChannel(${g.join()}) : 0.,
            hasNextRow ? getAChannel(${_.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,S=r?``:`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${S}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${l[s-1]} < ${o[s-1]-1};
        bool hasNextRow = ${l[s-2]} < ${o[s-2]-1};
        ${u}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${x};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${b}
          vec4 candidate = ${x};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function $z(e,t,n,r=null){let i=t.shape[0],a=t.shape[1];r!=null&&(i=r.shape[0],a=r.shape[1]);let o=Xh(a),s=new Zz({windowSize:o,inSize:a,batchSize:i,outSize:Math.ceil(a/o)},n,r==null),c=[t];r!=null&&c.push(r);let l=e.runWebGLProgram(s,c,`int32`);if(l.shape[1]===1)return l;let u=$z(e,t,n,l);return e.disposeIntermediateTensorInfo(l),u}function eB(e,t,n,r=null){let i=r==null?t.shape:r.shape,a=i[i.length-1],o=new Qz(i,Xh(a),n,r==null),s=r==null?[t]:[t,r],c=e.runWebGLProgram(o,s,`int32`);if(c.shape.length===t.shape.length){let r=eB(e,t,n,c);return e.disposeIntermediateTensorInfo(c),r}return c}function tB(e,t,n,r){let i=[n];if(Bl(`arg`+r.charAt(0).toUpperCase()+r.slice(1),i,t.shape.length),!j().getBool(`WEBGL_PACK_REDUCE`)||t.shape.length<=2){let n=[],a=e.texData.get(t.dataId),o=a!==null&&a.isPacked,s=t;o&&(s=e.unpackTensor(t),n.push(s));let[c,l]=Rl(s.shape,i),u=k(l),d=$({inputs:{x:s},backend:e,attrs:{shape:[-1,u]}});n.push(d);let f=$z(e,d,r);n.push(f);let p=$({inputs:{x:f},backend:e,attrs:{shape:c}});return n.forEach(t=>e.disposeIntermediateTensorInfo(t)),p}return eB(e,t,r)}function nB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=Oe(a,i.shape),s=Vl(o,i.shape.length),c=i,l=[];s!=null&&(c=jz({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=Ul(o.length,c.shape.length)),Bl(`argMax`,[o[0]],c.shape.length);let u=tB(n,c,o[0],`max`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var rB={kernelName:pt,backendName:`webgl`,kernelFunc:nB};function iB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=Oe(a,i.shape),s=Vl(o,i.shape.length),c=i,l=[];s!=null&&(c=jz({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=Ul(o.length,c.shape.length)),Bl(`argMin`,[o[0]],c.shape.length);let u=tB(n,c,o[0],`min`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var aB={kernelName:mt,backendName:`webgl`,kernelFunc:iB},oB={kernelName:ht,backendName:`webgl`,kernelFunc:lz({opSnippet:xR+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`})},sB={kernelName:gt,backendName:`webgl`,kernelFunc:lz({opSnippet:xR+`return log(x + sqrt(x * x + 1.0));`})},cB={kernelName:_t,backendName:`webgl`,kernelFunc:lz({opSnippet:xR+`
  return atan(x);
`})},lB={kernelName:yt,backendName:`webgl`,kernelFunc:uz({opSnippet:KR+`
  return atan(a, b);
`,packedOpSnippet:`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+JR+`
  return result;
`})},uB={kernelName:vt,backendName:`webgl`,kernelFunc:lz({opSnippet:xR+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`})},dB=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideHeight,s=e.strideWidth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterHeight,d=e.effectiveFilterWidth,f=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;let m=t===`avg`,h=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,g=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,_=`0.0`;if(m||(_=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec2 strides = ivec2(${o}, ${s});
        const ivec2 pads = ivec2(${f}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${u};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${l}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?i?h:g:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(v=`avgValue / max(count, 1.0)`);let y=Math.floor(a/4)*4,b=a%4,x=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${s});
      const ivec2 pads = ivec2(${f}, ${p});
      const float initializationValue = ${_};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${_});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${u};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${y}; wC += 4) {
            int xC = xCCorner + wC * ${l};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              getValue(batch, xR, xC + 3 * ${l}, d)
            );

            ${x}
          }

          int xC = xCCorner + ${y};
          if (${b===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              initializationValue
            );

            ${x}
          }
        }
        setOutput(${v});
      }
    `}},fB=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideDepth,s=e.strideHeight,c=e.strideWidth,l=e.dilationDepth,u=e.dilationHeight,d=e.dilationWidth,f=e.effectiveFilterDepth,p=e.effectiveFilterHeight,m=e.effectiveFilterWidth,h=e.padInfo.front,g=e.padInfo.top,_=e.padInfo.left;this.outputShape=e.outShape;let v=t===`avg`,y=`0.0`;if(v||(y=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec3 strides =
            ivec3(${o}, ${s}, ${c});
        const ivec3 pads = ivec3(${h}, ${g}, ${_});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${l}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${u}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${r?i?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(b=`avgValue / max(count, 1.0)`);let x=Math.floor(a/4)*4,S=a%4,C=`
      if (${v}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${o}, ${s}, ${c});
      const ivec3 pads = ivec3(${h}, ${g}, ${_});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${l}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${x}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${C}
            }

            int xC = xCCorner + ${x};
            if (${S===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${C}
            }
          }
        }
        setOutput(${b});
      }
    `}};function pB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;OF(i,`avgPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;O(Ys(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Fs(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&xe(l.inShape,l.outShape))return XR({inputs:{x:i},backend:n});let u=new dB(l,`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var mB={kernelName:bt,backendName:`webgl`,kernelFunc:pB};function hB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r,u=new fB(Is(i.shape,a,o,[1,1,1],s,c,l),`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var gB={kernelName:St,backendName:`webgl`,kernelFunc:hB},_B=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterHeight,c=e.effectiveFilterWidth,l=s-1-e.padInfo.top,u=c-1-e.padInfo.left,d=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(${l}, ${u});
      const float avgMultiplier = float(${d});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
            wR += ${a}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${o}) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}},vB=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterDepth,d=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=u-1-e.padInfo.front,m=d-1-e.padInfo.top,h=f-1-e.padInfo.left,g=1/(t*n*r);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${h});
      const float avgMultiplier = float(${g});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${u};
            wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${i}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${l}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function yB(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=new vB(Is(o.shape,s,c,[1,1,1],l,u));return n.runWebGLProgram(d,[i],o.dtype)}var bB={kernelName:Ct,backendName:`webgl`,kernelFunc:yB};function xB(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a;OF([i,a],`avgPoolGrad`);let{filterSize:s,strides:c,pad:l}=r,u=new _B(Fs(o.shape,s,c,1,l));return n.runWebGLProgram(u,[i],o.dtype)}var SB={kernelName:xt,backendName:`webgl`,kernelFunc:xB};function CB(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a}=t,{transposeA:o,transposeB:s}=r;return Nz({a:i,b:a,transposeA:o,transposeB:s,backend:n})}var wB={kernelName:wt,backendName:`webgl`,kernelFunc:CB},TB=class{constructor(e,t,n,r,i,a){this.outputShape=[],this.variableNames=[`x`,`mean`,`variance`],U(e,t),U(e,n);let o=`0.0`;r!=null&&(U(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`1.0`;i!=null&&(U(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${o};
        float scale = ${s};
        float inv = scale * inversesqrt(variance + float(${a}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}},EB=class{constructor(e,t,n,r,i,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=[`x`,`mean`,`variance`],U(e,t),U(e,n);let o=`vec4(0.0)`;r!=null&&(U(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`vec4(1.0)`;i!=null&&(U(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${o};
        vec4 scale = ${s};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${a}));

        setOutput((x - mean) * inv + offset);
      }
    `}},DB={kernelName:pn,backendName:`webgl`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,mean:i,variance:a,offset:o,scale:s}=e;O(i.shape.length===a.shape.length,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),O(o==null||i.shape.length===o.shape.length,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),O(s==null||i.shape.length===s.shape.length,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let{varianceEpsilon:c}=n;c??=.001;let l=[r,i,a],u=null;o!=null&&(u=o.shape,l.push(o));let d=null;s!=null&&(d=s.shape,l.push(s));let f=j().getBool(`WEBGL_PACK_NORMALIZATION`)?new EB(r.shape,i.shape,a.shape,u,d,c):new TB(r.shape,i.shape,a.shape,u,d,c);return t.runWebGLProgram(f,l,l[0].dtype)}},OB=class{constructor(e){this.variableNames=[`source`],this.outputShape=e,this.rank=e.length;let t=TI(this.rank);this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let n=AB(this.rank),r;r=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${e.map((e,t)=>`sourceLoc.${kB[t]} = start[${t}] + coords.${kB[t]};`).join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${n}));
      }
    `}},kB=[`x`,`y`,`z`,`w`,`u`,`v`];function AB(e){if(e===1)return`sourceLoc`;if(e<=6)return kB.slice(0,e).map(e=>`sourceLoc.`+e).join(`,`);throw Error(`Slicing for rank ${e} is not yet supported`)}var jB=class{constructor(e){this.variableNames=[`source`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let t=TI(this.rank),n=cR(`coords`,this.rank),r=cR(`sourceLoc`,this.rank),i=this.rank===1?`sourceLoc`:`vec2(${r.slice(-2).join()})`,a=`getChannel(getSource(${r.join()}), ${i})`,o=`
      result.x = ${a};
      if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${a};
        --${r[this.rank-1]};
      }
    `,s=this.rank===1?``:`
      --${n[this.rank-1]};
      if (++${n[this.rank-2]} < ${e[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${a};
        if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${a};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((e,t)=>`start[${t}]`).join()});`:e.map((e,t)=>`${r[t]} = ${n[t]} + start[${t}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${o}
        ${s}
        setOutput(result);
      }
    `}};function MB(e,t,n,r){let i=r.texData.get(e.dataId),a=r.makeTensorInfo(n,e.dtype),o=r.texData.get(a.dataId);Object.assign(o,i),o.refCount=1,o.shape=n,o.dtype=e.dtype;let s=Fh(t,A(e.shape));i.slice&&(s+=i.slice.flatOffset),o.slice={flatOffset:s,origDataId:i.slice&&i.slice.origDataId||e.dataId};let c=r.dataRefCount.get(o.slice.origDataId)||1;return r.dataRefCount.set(o.slice.origDataId,c+1),a}function NB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,size:o}=r,[s,c]=Ih(i,a,o);if(Sh(i,s,c),k(c)===0)return n.makeTensorInfo(c,i.dtype,[]);if(n.shouldExecuteOnCPU([i])||i.dtype===`string`){let e=KL(n.texData.get(i.dataId).values,s,c,i.shape,i.dtype);return n.makeTensorInfo(c,i.dtype,e)}let{isPacked:l}=n.texData.get(i.dataId),u=Ph(i.shape,s,c);if(l||!u){let e=j().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new jB(c):new OB(c),t=[s];return n.runWebGLProgram(e,[i],i.dtype,t)}return n.uploadToGPU(i.dataId),MB(i,s,c,n)}var PB={kernelName:Sr,backendName:`webgl`,kernelFunc:NB},FB={kernelName:Tt,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,crops:o}=r;O(i.shape.length<=4,()=>`batchToSpaceND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=Qh(i.shape,a,s),l=$h(c.length,a.length),u=eg(i.shape,a,s),d=tg(o,a.length),f=ng(u,o,a.length),p=[],m=$({inputs:{x:i},backend:n,attrs:{shape:c}}),h=jz({inputs:{x:m},backend:n,attrs:{perm:l}}),g=$({inputs:{x:h},backend:n,attrs:{shape:u}}),_=NB({inputs:{x:g},backend:n,attrs:{begin:d,size:f}});return p.push(m),p.push(h),p.push(g),p.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}};function IB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o}=r,s=pL(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,s)}var LB={kernelName:Et,backendName:`webgl`,kernelFunc:IB},RB=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,zB=`
  return float(int(a.r) & int(b.r));
`;function BB(e){let{inputs:t,backend:n}=e,{a:r,b:i}=t,a=j().getBool(`WEBGL_PACK_BINARY_OPERATIONS`),o=j().getNumber(`WEBGL_VERSION`);if(n.shouldExecuteOnCPU([r,i])||o===1){let e=n.texData.get(r.dataId).values,t=n.texData.get(i.dataId).values,[a,o]=hL(r.shape,i.shape,e,t,r.dtype),s=n.makeTensorInfo(o,r.dtype),c=n.texData.get(s.dataId);return c.values=a,s}let s;return s=a?new YR(RB,r.shape,i.shape,!1):new qR(zB,r.shape,i.shape),n.runWebGLProgram(s,[r,i],r.dtype)}var VB={kernelName:Dt,backendName:`webgl`,kernelFunc:BB};function HB(e){let{inputs:t,backend:n}=e,{s0:r,s1:i}=t,a=n.readSync(r.dataId),o=n.readSync(i.dataId),s=U(Array.from(a),Array.from(o));return n.makeTensorInfo([s.length],`int32`,Int32Array.from(s))}var UB={kernelName:kt,backendName:`webgl`,kernelFunc:HB},WB=uz({opSnippet:`return float(a != b);`,cpuKernelImpl:IL,dtype:`bool`}),GB={kernelName:Gn,backendName:`webgl`,kernelFunc:WB};function KB(e){let{inputs:t,backend:n}=e,{input:r}=t;return XR({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.real},backend:n})}var qB={kernelName:ar,backendName:`webgl`,kernelFunc:KB},JB=`return float(int(x));`;function YB(e,t){let n=new bR(e.shape,JB),r=t.runWebGLProgram(n,[e],`int32`);return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}function XB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dtype:a}=r;if(a===`complex64`){if(i.dtype===`complex64`)return XR({inputs:{x:i},backend:n});let e=bd(i.shape),t=XB({inputs:{x:i},backend:n,attrs:{dtype:`float32`}}),r=QR({inputs:{real:t,imag:e},backend:n});return e.dispose(),n.disposeIntermediateTensorInfo(t),r}if(i.dtype===`complex64`){let e=KB({inputs:{input:i},backend:n}),t=XB({inputs:{x:e},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(e),t}if(!Pe(i.dtype,a)){let e=XR({inputs:{x:i},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:a}}if(n.shouldExecuteOnCPU([i])){let e=n.texData.get(i.dataId).values,[t,r,o]=gL(e,i.shape,i.dtype,a);return n.makeTensorInfo(t,r,o)}if(a===`int32`)return YB(i,n);if(a===`bool`){let e=n.makeTensorInfo([],`bool`,Ae(`bool`,1)),t=WB({inputs:{a:i,b:e},backend:n});return n.disposeIntermediateTensorInfo(e),t}throw Error(`Error in Cast: failed to cast ${i.dtype} to ${a}`)}var ZB={kernelName:At,backendName:`webgl`,kernelFunc:XB},QB=`return ceil(x);`,$B={kernelName:jt,backendName:`webgl`,kernelFunc:lz({opSnippet:QB,packedOpSnippet:QB,cpuKernelImpl:_L})},eV=class{constructor(e){this.variableNames=[`A`],this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}},tV=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function nV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{clipValueMin:a,clipValueMax:o}=r,s;s=j().getBool(`WEBGL_PACK_CLIP`)?new tV(i.shape):new eV(i.shape);let c=[[a],[o]];return n.runWebGLProgram(s,[i],i.dtype,c)}var rV={kernelName:Mt,backendName:`webgl`,kernelFunc:nV},iV=class{constructor(e){this.variableNames=[`real`,`imag`],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}};function aV(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function oV(e){let{inputs:t,backend:n}=e,{x:r}=t,i=n.texData.get(r.dataId),a=new iV(r.shape),o=[aV(r,i.complexTensorInfos.real),aV(r,i.complexTensorInfos.imag)];return n.runWebGLProgram(a,o,o[0].dtype)}var sV={kernelName:Pt,backendName:`webgl`,kernelFunc:oV},cV=class{constructor(e){this.outputShape=[],this.outputShape=Wh(e,1),this.variableNames=e.map((e,t)=>`T${t}`);let t=Array(e.length-1);t[0]=e[0][1];for(let n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];let n=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){let r=t[e-1];n.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${r}));`)}let r=t.length,i=t[t.length-1];n.push(`else setOutput(getT${r}(yR, yC-${i}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${n.join(`
        `)}
      }
    `}},lV=class{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Wh(e,t);let n=this.outputShape,r=n.length,i=TI(r),a=cR(`coords`,r),o=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,r);this.variableNames=e.map((e,t)=>`T${t}`);let s=Array(e.length-1);s[0]=e[0][t];for(let n=1;n<s.length;n++)s[n]=s[n-1]+e[n][t];let c=o[t],l=o.slice(-2),u=o.join(),d=`if (${c} < ${s[0]}) {
        return getChannel(
            getT0(${u}), vec2(${l.join()}));
        }`;for(let e=1;e<s.length;e++){let t=s[e-1];d+=`
        if (${c} < ${s[e]}  && ${c} >= ${s[e-1]}) {
          return getChannel(
            getT${e}(${uV(o,c,t)}),
            vec2(${uV(l,c,t)}));
        }`}let f=s.length,p=s[s.length-1];d+=`
        return getChannel(
          getT${f}(${uV(o,c,p)}),
          vec2(${uV(l,c,p)}));`,this.userCode=`
      float getValue(${o.map(e=>`int `+e)}) {
        ${d}
      }

      void main() {
        ${i} coords = getOutputCoords();
        vec4 result = vec4(getValue(${a}), 0., 0., 0.);

        ${a[r-1]} = ${a[r-1]} + 1;
        if (${a[r-1]} < ${n[r-1]}) {
          result.g = getValue(${a});
        }

        ${a[r-2]} = ${a[r-2]} + 1;
        if (${a[r-2]} < ${n[r-2]}) {
          result.a = getValue(${a});
        }

        ${a[r-1]} = ${a[r-1]} - 1;
        if (${a[r-2]} < ${n[r-2]} &&
            ${a[r-1]} < ${n[r-1]}) {
          result.b = getValue(${a});
        }
        setOutput(result);
      }
    `}};function uV(e,t,n){let r=e.indexOf(t);return e.map((e,t)=>t===r?`${e} - ${n}`:e).join()}function dV(e){let{inputs:t,backend:n}=e,{input:r}=t;return XR({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.imag},backend:n})}var fV={kernelName:bn,backendName:`webgl`,kernelFunc:dV};function pV(e,t,n){let r=e[0].dtype;if(r===`complex64`){let r=e.map(e=>KB({inputs:{input:e},backend:n})),i=e.map(e=>dV({inputs:{input:e},backend:n})),a=pV(r,t,n),o=pV(i,t,n),s=QR({inputs:{real:a,imag:o},backend:n});return r.forEach(e=>n.disposeIntermediateTensorInfo(e)),i.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),s}let i=n.shouldExecuteOnCPU(e);if(r===`string`&&(i=!0),i){let i=e.map(e=>{let r=[-1,k(e.shape.slice(t))];return $({inputs:{x:e},backend:n,attrs:{shape:r}})}),a=vL(i.map(e=>({vals:n.readSync(e.dataId),shape:e.shape})),Wh(i.map(e=>e.shape),1),r,i[0].shape[0]===1),o=Wh(e.map(e=>e.shape),t),s=n.makeTensorInfo(o,r,a);return i.forEach(e=>n.disposeIntermediateTensorInfo(e)),s}let a=e.filter(e=>k(e.shape)>0),o=j().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)&&a[0].shape.length>1;if(a.length===1){let t=o?new bR(e[0].shape,DR):new PR(e[0].shape,DR);return n.runWebGLProgram(t,e,r)}let s=j().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`);if(a.length>s){let e=[];for(let r=0;r<a.length;r+=s){let i=a.slice(r,r+s);e.push(pV(i,t,n))}let r=pV(e,t,n);for(let t of e)n.disposeIntermediateTensorInfo(t);return r}if(o){let e=new lV(a.map(e=>e.shape),t);return n.runWebGLProgram(e,a,r)}let{tensors2D:c,outShape:l}=mV(a,t,n),u=new cV(c.map(e=>e.shape)),d=n.runWebGLProgram(u,c,r);c.forEach(e=>n.disposeIntermediateTensorInfo(e));let f=$({inputs:{x:d},attrs:{shape:l},backend:n});return n.disposeIntermediateTensorInfo(d),f}function mV(e,t,n){let r=Wh(e.map(e=>e.shape),t);return{tensors2D:e.map(e=>$({inputs:{x:e},attrs:{shape:[-1,k(e.shape.slice(t))]},backend:n})),outShape:r}}function hV(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r,a=Oe(i,t[0].shape)[0];Uh(t.map(e=>e.shape),a);let o=Wh(t.map(e=>e.shape),a);if(k(o)===0)return n.makeTensorInfo(o,t[0].dtype,[]);let s=t.filter(e=>k(e.shape)>0);return s.length===1?XR({inputs:{x:s[0]},backend:n}):pV(s,a,n)}var gV={kernelName:Ft,backendName:`webgl`,kernelFunc:hV},_V=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let a=e.padInfo.top,o=e.padInfo.left,s=e.strideHeight,c=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4,h=e.dataFormat===`channelsLast`,g=h?1:2,_=h?2:3,v=h?3:1,y=``,b=``;n&&(y=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,b=`result = activation(result);`);let x=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${s}, ${c});
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${v}];

        ivec2 xRCCorner =
            ivec2(coords[${g}], coords[${_}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${l};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${u};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${h}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${h}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${h}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${h}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${x}
        ${b}
        setOutput(result);
      }
    `}},vV=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.filterDepth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${i}, ${a}, ${o});
      const ivec3 pads = ivec3(${t}, ${n}, ${r});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${u}; wF++) {
          int xF = xFCorner + wF * ${s};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${l};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},yV=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=PI(this.outputShape.length);let a=e.padInfo.left,o=e.strideWidth,s=e.dilationWidth,c=e.filterHeight,l=e.filterWidth,u=l,d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<l;e++)d+=`
           vec4 xTexelC${e*2};
           int xTexelC${e*2}Ready;
           vec4 xTexelC${e*2+1};
           int xTexelC${e*2+1}Ready;
           vec4 xC${e};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let e=0;e<l;e++)d+=`
           xTexelC${e*2} = vec4(0.0);
           xTexelC${e*2}Ready = 0;
           xTexelC${e*2+1} = vec4(0.0);
           xTexelC${e*2+1}Ready = 0;
           xC${e} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let t=0;t<(u+1)/2;t++){let n=t*2;if(d+=`
           xC = xCCorner + ${n*s};
           `,o===1){if(n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }
               `,s===1&&n>0?d+=`
                 xC${n} = vec4(xTexelC${n-2}.zw, xTexelC${n}.xy);
                 `:d+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${n} = vec4(previous.zw, xTexelC${n}.xy);
                   } else {
                     xC${n} = vec4(0.0, 0.0, xTexelC${n}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xC${n} = xTexelC${n};
                 `,n+1<l)){let e=a%2==0?ge(s):s;s%2==0&&a%2==1||s%2!=0&&a%2!=1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${e};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                     xTexelC${n+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${n+1}.zw = vec2(0.0);
                     }
                     xTexelC${n+1}Ready = 1;
                   }
                   `,s>1?d+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${n+1} = vec4(previous.zw, xTexelC${n+1}.xy);
                     } else {
                      xC${n+1} = vec4(0.0, 0.0, xTexelC${n+1}.xy);
                     }
                     `:d+=`
                     xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.xy);
                     `):e===1?d+=`
                     xC${n+1} = xTexelC${n};
                     `:d+=`
                     xCOffset = xC + ${e};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                       xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${n+1}.zw = vec2(0.0);
                       }
                       xTexelC${n+1}Ready = 1;
                     }

                     xC${n+1} = xTexelC${n+1};
                     `}}else n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.0);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
               `,n+1<l&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${n+1} = vec4(xTexelC${n+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(
                   xTexelC${n}.xy, xTexelC${n+1}.xy);
               `,n+1<l&&(d+=`
                   xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
                 `)));n<l&&(d+=`
             wTexel = getW(r, ${n}, d1, d2);
             dotProd += xC${n}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${n}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,n+1<l&&(d+=`
               wTexel = getW(r, ${n+1}, d1, d2);
               dotProd += xC${n+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${n+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let f=``,p=``;n&&(f=r?`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${n}
         }`:i?`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${n}
         }`:`vec4 activation(vec4 x) {
           ${n}
         }`,p=`result = activation(result);`);let m=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${m}
         ${p}
         setOutput(result);
       }
     `}},bV=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec4`},{name:`pad`,type:`ivec2`},{name:`stride`,type:`ivec2`},{name:`dilation`,type:`ivec2`},{name:`inChannels`,type:`int`},{name:`itemsPerBlockRow`,type:`int`},{name:`outWidth`,type:`int`}],this.outputShape=e,this.enableShapeUniforms=PI(this.outputShape.length);let{dataFormat:n}=t,r=kF(),i=n===`channelsLast`,a=i?1:2,o=i?2:3,s=this.enableShapeUniforms?`if(blockIndex < outShape[2] && pos < outShape[1]) {`:`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,c=``;for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)c+=`
          blockIndex = rc.z + ${t};
          pos = rc.y + ${e};

          ${s}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${a}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${o}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${i}) {
                  innerDims = vec2(d1, ch);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${r.output} = result;
      }
    `}};function xV(e,t){let n=e.length;return n>=3?t?[...e.slice(0,-3),e[n-3]*e[n-2],e[n-1]]:[...e.slice(0,-3),e[n-3],e[n-2]*e[n-1]]:!t&&n===1&&e[0]>1?[e[0],1]:null}function SV({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let c=e.shape,l=r.texData.get(e.dataId),u=n.inChannels,d=c[0]*c[1]*c[2],f=n.outChannels,p=n.dataFormat===`channelsLast`,m,h=[];if(a!=null){let e=xV(a.shape,p);e!=null&&(a=$({inputs:{x:a},backend:r,attrs:{shape:e}}),h.push(a))}if(i!=null){let e=xV(i.shape,p);e!=null&&(i=$({inputs:{x:i},backend:r,attrs:{shape:e}}),h.push(i))}if(!((d===1||f===1)&&u>1e3)&&l.isPacked&&p&&l.texture!=null&&c[2]%2!=0&&xe(l.shape.slice(-3),c.slice(-3))){let u=c[0]*c[1]*(c[2]+1),d={dataId:e.dataId,shape:[1,u,n.inChannels],dtype:e.dtype},f=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,O(hF(l.shape,d.shape),()=>`packed reshape ${l.shape} to ${d.shape} isn't free`);let p=$({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});h.push(p);let g=Nz({a:d,b:p,backend:r,transposeA:!1,transposeB:!1,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o}),_=r.texData.get(g.dataId);O(_.isPacked,()=>`batchMatMul result is expected to be packed`),l.shape=f,_.shape=n.outShape,m=XR({inputs:{x:g},backend:r}),m.shape=n.outShape,h.push(g)}else{let c=n.outHeight*n.outWidth,l=$({inputs:{x:e},backend:r,attrs:{shape:p?[n.batchSize,c,n.inChannels]:[n.batchSize,n.inChannels,c]}}),u=$({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),d=Nz({a:p?l:u,b:p?u:l,transposeA:!p,transposeB:!1,backend:r,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o});m=$({inputs:{x:d},backend:r,attrs:{shape:n.outShape}}),h.push(l),h.push(u),h.push(d)}for(let e of h)r.disposeIntermediateTensorInfo(e);return m}function CV({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let{filterWidth:c,filterHeight:l,inChannels:u,outWidth:d,outHeight:f,dataFormat:p}=n,m=p===`channelsLast`,h=c*l*u,g=f*d,_=[n.batchSize,h,g],v=[];if(a!=null){let e=xV(a.shape,m);e!=null&&(a=$({inputs:{x:a},backend:r,attrs:{shape:e}}),v.push(a))}if(i!=null){let e=xV(i.shape,m);e!=null&&(i=$({inputs:{x:i},backend:r,attrs:{shape:e}}),v.push(i))}let y=$({inputs:{x:t},backend:r,attrs:{shape:[1,h,k(t.shape)/h]}});v.push(y);let b=new bV(_,n),x=[e.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],S=r.runWebGLProgram(b,[e],`float32`,x),C=$({inputs:{x:S},backend:r,attrs:{shape:_}});v.push(S),v.push(C);let w=i!=null,T=a!=null,E=s===`leakyrelu`,D=s?dz(s,!0):null,ee=new fz(m?C.shape:y.shape,m?y.shape:C.shape,m?[n.batchSize,g,n.outChannels]:[n.batchSize,n.outChannels,g],!0,!1,w,D,T,E),te=m?[C,y]:[y,C];if(i&&te.push(i),T&&te.push(a),E){let e=r.makeTensorInfo([],`float32`,Ni(o,`float32`));te.push(e),v.push(e)}let ne=r.runWebGLProgram(ee,te,`float32`),re=$({inputs:{x:ne},backend:r,attrs:{shape:n.outShape}});v.push(ne);for(let e of v)r.disposeIntermediateTensorInfo(e);return re}function wV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dataFormat:c,dilations:l,dimRoundingMode:u}=r,d=Zs(c),f=Ls(i.shape,a.shape,o,l,s,u,!1,d),p;if(f.filterHeight===1&&f.filterWidth===1&&f.dilationHeight===1&&f.dilationWidth===1&&f.strideHeight===1&&f.strideWidth===1&&(f.padInfo.type===`SAME`||f.padInfo.type===`VALID`))p=SV({x:i,filter:a,convInfo:f,backend:n});else if(f.strideWidth<=2&&d===`channelsLast`&&j().getBool(`WEBGL_EXP_CONV`)){let e=new yV(f),t=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];p=n.runWebGLProgram(e,[i,a],`float32`,t)}else if(j().getBool(`WEBGL_CONV_IM2COL`))p=CV({x:i,filter:a,convInfo:f,backend:n});else{let e=new _V(f);p=n.runWebGLProgram(e,[i,a],`float32`)}let m=$({inputs:{x:p},backend:n,attrs:{shape:f.outShape}});return n.disposeIntermediateTensorInfo(p),m}var TV={kernelName:It,backendName:`webgl`,kernelFunc:wV},EV=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.dataFormat===`channelsLast`;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${a?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}},DV=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dataFormat===`channelsLast`,o=t-1-e.padInfo.top,s=n-1-e.padInfo.left,c=a?1:2,l=a?2:3,u=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${u}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${l}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${a}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},OV=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.padInfo.front,a=e.padInfo.top,o=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${i};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${n} - ${a};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${o};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},kV=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=t-1-e.padInfo.front,c=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${s}, ${c}, ${l});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${i}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${n}; wR++) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${n} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function AV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,dataFormat:c,dimRoundingMode:l,filterShape:u}=r,d=Zs(c),f=new EV(Ls(i.shape,u,o,1,s,l,!1,d));return n.runWebGLProgram(f,[i,a],`float32`)}var jV={kernelName:Lt,backendName:`webgl`,kernelFunc:AV},MV=class{constructor(e){this.variableNames=[`dy`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`strides`,type:`vec2`}],this.outputShape=e.inShape,this.enableShapeUniforms=PI(this.outputShape.length);let t=e.filterHeight,n=e.filterWidth,r=t-1-e.padInfo.top,i=n-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${r}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            int wCPerm = ${n} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}};function NV(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{inputShape:o,strides:s,pad:c,dataFormat:l,dimRoundingMode:u}=r,d=Zs(l),f=Ls(o,a.shape,s,1,c,u,!1,d);if(j().getBool(`WEBGL_PACK_CONV2DTRANSPOSE`)&&d===`channelsLast`){let e=[[f.strideHeight,f.strideWidth]],t=new MV(f);return n.runWebGLProgram(t,[i,a],`float32`,e)}else{let e=new DV(f);return n.runWebGLProgram(e,[i,a],`float32`)}}var PV={kernelName:Rt,backendName:`webgl`,kernelFunc:NV};function FV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=new vV(Rs(i.shape,a.shape,o,c,s));return n.runWebGLProgram(l,[i,a],`float32`)}var IV={kernelName:zt,backendName:`webgl`,kernelFunc:FV};function LV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,filterShape:c}=r,l=new OV(Rs(i.shape,c,o,1,s));return n.runWebGLProgram(l,[i,a],`float32`)}var RV={kernelName:Bt,backendName:`webgl`,kernelFunc:LV};function zV(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{pad:o,strides:s,inputShape:c}=r,l=new kV(Rs(c,a.shape,s,1,o));return n.runWebGLProgram(l,[i,a],`float32`)}var BV={kernelName:Vt,backendName:`webgl`,kernelFunc:zV},VV={kernelName:`Cos`,backendName:`webgl`,kernelFunc:lz({opSnippet:cz+`
  return cos(x);
`,packedOpSnippet:`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${JR}
  return result;
`})},HV={kernelName:Ht,backendName:`webgl`,kernelFunc:lz({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`})},UV=class{constructor(e,t,n,r,i){this.variableNames=[`Image`,`Boxes`,`BoxInd`],this.outputShape=[];let[a,o,s,c]=e,[l]=t,[u,d]=n;this.outputShape=[l,u,d,c];let f=+(r===`bilinear`),[p,m]=[`${o-1}.0`,`${s-1}.0`],[h,g,_]=u>1?[`${(o-1)/(u-1)}`,`(y2-y1) * height_ratio`,`y1*${p} + float(y)*(height_scale)`]:[`0.0`,`0.0`,`0.5 * (y1+y2) * ${p}`],[v,y,b]=d>1?[`${(s-1)/(d-1)}`,`(x2-x1) * width_ratio`,`x1*${m} + float(x)*(width_scale)`]:[`0.0`,`0.0`,`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${h});
      const float width_ratio = float(${v});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${a}) {
          return;
        }

        float height_scale = ${g};
        float width_scale = ${y};

        float in_y = ${_};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${i}));
          return;
        }
        float in_x = ${b};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${i}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}},WV={kernelName:Gt,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{image:i,boxes:a,boxInd:o}=t,{cropSize:s,method:c,extrapolationValue:l}=r,u=new UV(i.shape,a.shape,s,c,l);return n.runWebGLProgram(u,[i,a,o],`float32`)}},GV;(function(e){e.Prod=`*`,e.Sum=`+`})(GV||={});var KV=class{constructor(e,t,n,r){this.op=e,this.outputShape=t,this.variableNames=[`x`],this.customUniforms=[{name:`index`,type:`float`}];let i=this.outputShape.length,a=this.op===GV.Prod?`1.0`:`0.0`,o=n?a:`getX(${qV(i,`coords`,this.op)})`,s=this.outputShape[this.outputShape.length-1],c=``,l=``;n?(c=r?`end != ${s-1}`:`end != 0`,l=r?`end + 1`:`end - 1`):(c=r?`end + pow2 < ${s}`:`end >= pow2`,l=r?`end + pow2`:`end - pow2`),this.userCode=`
      void main() {
        ${TI(i)} coords = getOutputCoords();
        int end = ${JV(i,`coords`,this.op)};
        float val = ${o};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${l};
          ${JV(i,`coords`,this.op)} = idx;
          val ${this.op}= getX(${qV(i,`coords`,this.op)});
        }
        setOutput(val);
      }
    `}};function qV(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.x, ${t}.y`;if(e===3)return`${t}.x, ${t}.y, ${t}.z`;if(e===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function JV(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.y`;if(e===3)return`${t}.z`;if(e===4)return`${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function YV(e,t,n,r,i,a){let o=t.shape.length,s=Vl([r],o),c=t;s!=null&&(c=jz({inputs:{x:t},backend:n,attrs:{perm:s}}));let l=Ul(1,o)[0];if(l!==o-1)throw Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);let u=c.shape[l],d=XR({inputs:{x:c},backend:n});for(let t=0;t<=Math.ceil(Math.log2(u))-1;t++){let r=new KV(e,c.shape,!1,a),i=[[t]],o=d;d=n.runWebGLProgram(r,[d],d.dtype,i),n.disposeIntermediateTensorInfo(o)}if(i){let t=new KV(e,c.shape,i,a),r=d;d=n.runWebGLProgram(t,[d],d.dtype),n.disposeIntermediateTensorInfo(r)}if(s!=null){let e=Hl(s),t=jz({inputs:{x:d},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(c),t}return d}function XV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return YV(GV.Prod,i,n,a,o,s)}var ZV={kernelName:Ut,backendName:`webgl`,kernelFunc:XV};function QV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return YV(GV.Sum,i,n,a,o,s)}var $V={kernelName:Wt,backendName:`webgl`,kernelFunc:QV};function eH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o,binaryOutput:s}=r;if(i.shape.length===1){let e=pL(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,e)}else if(i.shape.length===2){let e=mL(n.bufferSync(i),n.bufferSync(a),o,s);return n.makeTensorInfo(e.shape,a.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var tH={kernelName:Kt,backendName:`webgl`,kernelFunc:eH},nH=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat===`NHWC`?`coords[1]`:`coords[2]`}getWidthCoordString(){return this.dataFormat===`NHWC`?`coords[2]`:`coords[3]`}getDepthCoordString(){return this.dataFormat===`NHWC`?`coords[3]`:`coords[1]`}getOutputDepthSize(){return this.dataFormat===`NHWC`?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat===`NHWC`?`getX(b, in_h, in_w, in_d)`:`getX(b, in_d, in_h, in_w)`}};function rH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockSize:a,dataFormat:o}=r,s=i.shape[0],c=o===`NHWC`?i.shape[1]:i.shape[2],l=o===`NHWC`?i.shape[2]:i.shape[3],u=o===`NHWC`?i.shape[3]:i.shape[1],d=c*a,f=l*a,p=u/(a*a),m=new nH(o===`NHWC`?[s,d,f,p]:[s,p,d,f],a,o);return n.runWebGLProgram(m,[i],i.dtype)}var iH={kernelName:qt,backendName:`webgl`,kernelFunc:rH},aH=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=PI(this.outputShape.length);let a=e.filterHeight,o=e.filterWidth,s=e.outChannels/e.inChannels,c=``,l=``;n&&(c=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,l=`result = activation(result);`);let u=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${s};
        int q = d2 - d1 * ${s};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${a}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${o}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${u}
        ${l}
        setOutput(result);
      }
    `}},oH=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=PI(this.outputShape.length);let a=e.outChannels/e.inChannels,o=e.padInfo.left,s=e.strideWidth,c=e.dilationWidth,l=e.filterHeight,u=e.filterWidth,d=u,f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<u;e++)f+=`
          vec4 xTexelC${e*2};
          int xTexelC${e*2}Ready;
          vec4 xTexelC${e*2+1};
          int xTexelC${e*2+1}Ready;
          vec4 xC${e};`;f+=`
    for (int r = 0; r < ${l}; r++) {
      `;for(let e=0;e<u;e++)f+=`
          xTexelC${e*2} = vec4(0.0);
          xTexelC${e*2}Ready = 0;
          xTexelC${e*2+1} = vec4(0.0);
          xTexelC${e*2+1}Ready = 0;
          xC${e} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let e=0;e<(d+1)/2;e++){let t=e*2;if(f+=`
          xC = xCCorner + ${t*c};
          `,s===1){if(t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }
              `,c===1&&t>0?f+=`
                xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${t} = vec4(previous.zw, xTexelC${t}.xy);
                  } else {
                    xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xC${t} = xTexelC${t};
                `,t+1<u)){let e=o%2==0?ge(c):c;c%2==0&&o%2==1||c%2!=0&&o%2!=1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${e};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                    xTexelC${t+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${t+1}.zw = vec2(0.0);
                    }
                    xTexelC${t+1}Ready = 1;
                  }
                  `,c>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${t+1} = vec4(previous.zw, xTexelC${t+1}.xy);
                    } else {
                     xC${t+1} = vec4(0.0, 0.0, xTexelC${t+1}.xy);
                    }
                    `:f+=`
                    xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);
                    `):e===1?f+=`
                    xC${t+1} = xTexelC${t};
                    `:f+=`
                    xCOffset = xC + ${e};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                      xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${t+1}.zw = vec2(0.0);
                      }
                      xTexelC${t+1}Ready = 1;
                    }

                    xC${t+1} = xTexelC${t+1};
                    `}}else t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.0);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
              `,t+1<u&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(
                  xTexelC${t}.xy, xTexelC${t+1}.xy);
              `,t+1<u&&(f+=`
                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
                `)));t<u&&(f+=`
            wTexel = getW(r, ${t}, d1, q);
            dotProd += xC${t} * vec4(wTexel.xz, wTexel.xz);
          `,t+1<u&&(f+=`
              wTexel = getW(r, ${t+1}, d1, q);
              dotProd += xC${t+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p=``,m=``;n&&(p=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`vec4 activation(vec4 x) {
          ${n}
        }`,m=`result = activation(result);`);let h=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${a};
        int q = d2 - d1 * ${a};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${h}
        ${m}
        setOutput(result);
      }
    `}};function sH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c,dimRoundingMode:l}=r,u=c;u??=[1,1],O(Ys(o,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${u}'`);let d=Ls(i.shape,a.shape,o,u,s,l,!0),f;f=j().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?new oH(d):new aH(d);let p=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(f,[i,a],`float32`,p)}var cH={kernelName:Jt,backendName:`webgl`,kernelFunc:sH},lH=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${a} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}},uH=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=t-1-e.padInfo.top,o=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${s}; dm++) {
              int d2 = d1 * ${s} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function dH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,filterShape:u}=r,d=new lH(Ls(i.shape,u,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var fH={kernelName:Yt,backendName:`webgl`,kernelFunc:dH};function pH(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,inputShape:u}=r,d=new uH(Ls(u,a.shape,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var mH={kernelName:Xt,backendName:`webgl`,kernelFunc:pH},hH=class{constructor(e){this.variableNames=[`X`],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function gH(e){let{inputs:t,backend:n}=e,{x:r}=t,i=[...r.shape,...r.shape],a=k(r.shape),o=$({inputs:{x:r},backend:n,attrs:{shape:[a]}}),s=new hH(a),c=n.runWebGLProgram(s,[o],o.dtype),l=$({inputs:{x:c},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(c),l}var _H={kernelName:Zt,backendName:`webgl`,kernelFunc:gH},vH=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let{inHeight:t,inWidth:n,padInfo:r,strideHeight:i,strideWidth:a,filterHeight:o,filterWidth:s,dilationHeight:c,dilationWidth:l}=e,{top:u,left:d}=r;this.userCode=`
      const ivec2 strides = ivec2(${i}, ${a});
      const ivec2 pads = ivec2(${u}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${o}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${s}; w++) {
              int wIn = wBeg + w * ${l};

              if (wIn >= 0 && wIn < ${n}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}};function yH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=Ps(i.shape,a.shape,o,s,`NHWC`,c),u,d=new vH(l);u=n.runWebGLProgram(d,[i,a],`float32`);let f=$({inputs:{x:u},backend:n,attrs:{shape:l.outShape}});return n.disposeIntermediateTensorInfo(u),f}var bH={kernelName:Qt,backendName:`webgl`,kernelFunc:yH};function xH(e){let{inputs:t,backend:n,attrs:r}=e,{equation:i}=r,a=t,{allDims:o,summedDims:s,idDims:c}=Cg(i,a.length);Tg(o.length,c,a);let{path:l,steps:u}=Eg(s,c),d=u.length,f=null,p=o.length,m=[];for(let e=0;e<d;++e){for(let t of u[e]){let{permutationIndices:e,expandDims:r}=wg(p,c[t]),i;Dg(e)?i=a[t]:(i=jz({inputs:{x:a[t]},backend:n,attrs:{perm:e}}),m.push(i));let o=i.shape.slice();for(let e=0;e<r.length;++e)o.splice(r[e],0,1);xe(i.shape,o)||(i=$({inputs:{x:i},backend:n,attrs:{shape:o}}),m.push(i)),f===null?f=i:(f=gz({inputs:{a:i,b:f},backend:n}),m.push(f))}e<d-1&&(l[e]>=0&&(f=kz({inputs:{x:f},backend:n,attrs:{axis:l[e]-(o.length-p),keepDims:!1}}),m.push(f)),p--)}for(let e of m)e!==f&&n.disposeIntermediateTensorInfo(e);return f}var SH={kernelName:rn,backendName:`webgl`,kernelFunc:xH},CH={kernelName:`Elu`,backendName:`webgl`,kernelFunc:lz({opSnippet:`return (x >= 0.0) ? x : (exp(x) - 1.0);`,packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`})},wH=`return (b >= 0.0) ? a : a * (b + 1.0);`,TH=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,EH={kernelName:an,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n}=e,{dy:r,y:i}=t,a=j().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new YR(TH,r.shape,i.shape):new qR(wH,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],r.dtype)}},DH={kernelName:on,backendName:`webgl`,kernelFunc:uz({opSnippet:`return float(a == b);`,packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:`bool`,cpuKernelImpl:yL})},OH={kernelName:`Erf`,backendName:`webgl`,kernelFunc:lz({opSnippet:`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${ag};
  float a1 = ${og};
  float a2 = ${sg};
  float a3 = ${cg};
  float a4 = ${lg};
  float a5 = ${ug};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`})},kH=lz({opSnippet:cz+`
  return exp(x);
`,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:bL,dtype:`float32`}),AH={kernelName:`Exp`,backendName:`webgl`,kernelFunc:kH};function jH(e){let{inputs:t,attrs:n,backend:r}=e,{dim:i}=n,{input:a}=t,o=a.shape.length,s=a.shape.slice(),c=i;return i<0&&(O(-(o+1)<=i,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),c=o+i+1),s.splice(c,0,1),$({inputs:{x:a},backend:r,attrs:{shape:s}})}var MH={kernelName:sn,backendName:`webgl`,kernelFunc:jH},NH=`return exp(x) - 1.0;`,PH={kernelName:cn,backendName:`webgl`,kernelFunc:lz({opSnippet:NH,packedOpSnippet:NH,cpuKernelImpl:xL})},FH=class{constructor(e,t,n){this.variableNames=[`real`,`imag`];let r=t[1];this.outputShape=t;let i=n?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,a=n?`${r}.0`:`1.0`,o;if(e===`real`)o=`return real * expR - imag * expI;`;else if(e===`imag`)o=`return real * expI + imag * expR;`;else throw Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${i};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${o}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${r});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${r}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${a};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};function IH(e,t,n){let r=n.texData.get(e.dataId),i=k(e.shape),a=e.shape[e.shape.length-1],o=i/a,s=$({inputs:{x:e},backend:n,attrs:{shape:[o,a]}}),c=s.shape,l=new FH(`real`,c,t),u=new FH(`imag`,c,t),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:c},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:c}],f=n.runWebGLProgram(l,d,`float32`),p=n.runWebGLProgram(u,d,`float32`),m=QR({inputs:{real:f,imag:p},backend:n});n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p);let h=$({inputs:{x:m},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(m),h}function LH(e){let{inputs:t,backend:n}=e,{input:r}=t;return IH(r,!1,n)}var RH={kernelName:`FFT`,backendName:`webgl`,kernelFunc:LH},zH=class{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:`value`,type:`float`}],this.variableNames=[`x`],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function BH(e){let{backend:t,attrs:n}=e,{shape:r,value:i}=n,{dtype:a}=n;if(a||=Be(i),a===`string`){let e=je(a,k(r));return e.fill(i),t.makeTensorInfo(r,a,e)}else{let e=new zH(r,i),n=[[i]];return t.runWebGLProgram(e,[],a,n)}}var VH={kernelName:ln,backendName:`webgl`,kernelFunc:BH},HH=class{constructor(e){this.variableNames=[`Image`],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}},UH={kernelName:un,backendName:`webgl`,kernelFunc:({inputs:e,backend:t})=>{let{image:n}=e,r=t,i=new HH(n.shape);return r.runWebGLProgram(i,[n],n.dtype)}},WH=`return floor(x);`,GH={kernelName:dn,backendName:`webgl`,kernelFunc:lz({opSnippet:WH,packedOpSnippet:WH,cpuKernelImpl:SL})},KH={kernelName:fn,backendName:`webgl`,kernelFunc:uz({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,dtype:`int32`})},qH=class{constructor(e){this.variableNames=[`A`];let t=kF(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${n}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}},JH=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0;let t=kF(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${r}.0, ${n}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}},YH={kernelName:$r,backendName:`webgl`,kernelFunc:QH},XH,ZH=j().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);function QH(e){let{inputs:t,backend:n,attrs:r}=e,{pixels:i}=t,{numChannels:a}=r,o=typeof HTMLVideoElement<`u`&&i instanceof HTMLVideoElement,s=typeof HTMLImageElement<`u`&&i instanceof HTMLImageElement,[c,l]=o?[i.videoWidth,i.videoHeight]:[i.width,i.height],u=[l,c],d=[l,c,a];if(s||o){let e=j().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);(XH==null||e!==ZH)&&(ZH=e,XH=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:ZH})),XH.canvas.width=c,XH.canvas.height=l,XH.drawImage(i,0,0,c,l),i=XH.canvas}let f=n.makeTensorInfo(u,`int32`);n.texData.get(f.dataId).usage=DP.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(f.dataId),i);let p=j().getBool(`WEBGL_PACK`)?new JH(d):new qH(d),m=n.runWebGLProgram(p,[f],`int32`);return n.disposeData(f.dataId),m}function $H(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=Zs(u),g=Ls(i.shape,a.shape,c,d,l,f,!1,h),_,v=[],y=o!=null,b=s!=null,x=p===`leakyrelu`,S=()=>{let e=[i,a],t=(e,t)=>{if(t===`NCHW`&&e.shape.length===1&&e.shape[0]!==1){let t=$({inputs:{x:e},backend:n,attrs:{shape:[e.shape[0],1,1]}});return v.push(t),t}return e};if(y&&e.push(t(o,u)),b&&e.push(t(s,u)),x){let t=n.makeTensorInfo([],`float32`,Ni(m,`float32`));e.push(t),v.push(t)}return e};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type===`SAME`||g.padInfo.type===`VALID`))_=SV({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else if(g.strideWidth<=2&&h===`channelsLast`&&j().getBool(`WEBGL_EXP_CONV`)){let e=new yV(g,y,p?dz(p,!0):null,b,x),t=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],r=S();_=n.runWebGLProgram(e,r,`float32`,t)}else if(j().getBool(`WEBGL_CONV_IM2COL`))_=CV({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else{let e=new _V(g,y,p?dz(p,!1):null,b,x),t=S();_=n.runWebGLProgram(e,t,`float32`)}let C=$({inputs:{x:_},backend:n,attrs:{shape:g.outShape}});return v.push(_),v.forEach(e=>n.disposeIntermediateTensorInfo(e)),C}var eU={kernelName:ni,backendName:`webgl`,kernelFunc:$H};function tU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dilations:u,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=r,m=[],h=u;h??=[1,1],O(Ys(c,h),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${h}'`);let g=Ls(i.shape,a.shape,c,h,l,d,!0),_=j().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,v=f?dz(f,_):null,y=[i,a],b=o!=null,x=s!=null,S=f===`leakyrelu`;if(b&&y.push(o),x&&y.push(s),S){let e=n.makeTensorInfo([],`float32`,Ni(p,`float32`));y.push(e),m.push(e)}let C;C=_?new oH(g,b,v,x,S):new aH(g,b,v,x,S);let w=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],T=n.runWebGLProgram(C,y,`float32`,w);return m.forEach(e=>n.disposeIntermediateTensorInfo(e)),T}var nU={kernelName:ri,backendName:`webgl`,kernelFunc:tU},rU=class{constructor(e,t,n,r){this.sliceDim=e,this.strides=t,this.paramsShape=r,this.variableNames=[`x`,`indices`],this.outputShape=n;let i=TI(n.length),a=`
    int index;`;for(let e=0;e<this.sliceDim;e++)a+=`
          index = round(getIndices(coords[0], ${e}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[e]};
          flattenIndex += index * ${this.strides[e]};`;this.userCode=`
         void main() {
          ${i} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${a}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};function iU(e){let{inputs:t,backend:n}=e,{params:r,indices:i}=t,a=i.shape,o=a[a.length-1],s=k(r.shape),[c,l,u,d]=vh(r,i),f=$({inputs:{x:i},backend:n,attrs:{shape:[l,o]}}),p=$({inputs:{x:r},backend:n,attrs:{shape:[k(r.shape)/u,u]}});if(n.shouldExecuteOnCPU([r,i])||r.dtype===`string`){let e=CL(n.readSync(i.dataId),n.bufferSync(r),r.dtype,l,o,u,d,r.shape,s);return n.makeTensorInfo(c,r.dtype,e.values)}let m=new rU(o,d,[l,u],r.shape),h=n.runWebGLProgram(m,[p,f],p.dtype),g=$({inputs:{x:h},backend:n,attrs:{shape:c}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h),g}var aU={kernelName:hn,backendName:`webgl`,kernelFunc:iU},oU=class{constructor(e,t){this.variableNames=[`A`,`indices`],this.outputShape=t,this.rank=t.length;let n=TI(this.rank),r=sU(e,2);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}};function sU(e,t){let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],r=[];for(let t=0;t<e.length;t++)t===2?r.push(`index`):r.push(`${n[t]}`);return r.join()}function cU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,indices:a}=t,{axis:o,batchDims:s}=r,c=Oe(o,i.shape)[0];if(j().get(`DEBUG`)){let e=n.readSync(a.dataId),t=i.shape[c];for(let n=0;n<e.length;++n){let r=e[n];O(r<=t-1&&r>=0,()=>`GatherV2: the index value ${r} is not in [0, ${t-1}]`)}}let l=Gg(i,a,c,s),u=k(a.shape),d=[],f=$({inputs:{x:i},backend:n,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),p=$({inputs:{x:a},backend:n,attrs:{shape:[l.batchSize,u/l.batchSize]}});d.push(f),d.push(p);let m=[l.batchSize,l.outerSize,u/l.batchSize,l.sliceSize];if(n.shouldExecuteOnCPU([i,a])||i.dtype===`string`){let e=n.bufferSync(p),t=wL(n.bufferSync(f),e,m);return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(l.outputShape,t.dtype,t.values)}let h=new oU(f.shape,m),g=n.runWebGLProgram(h,[f,p],f.dtype);d.push(g);let _=$({inputs:{x:g},backend:n,attrs:{shape:l.outputShape}});return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}var lU={kernelName:mn,backendName:`webgl`,kernelFunc:cU},uU={kernelName:gn,backendName:`webgl`,kernelFunc:uz({opSnippet:`return float(a > b);`,packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:TL,dtype:`bool`})},dU={kernelName:_n,backendName:`webgl`,kernelFunc:uz({opSnippet:`return float(a >= b);`,packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:`bool`,cpuKernelImpl:EL})};function fU(e){let{inputs:t,backend:n}=e,{input:r}=t;return IH(r,!0,n)}var pU={kernelName:yn,backendName:`webgl`,kernelFunc:fU},mU={kernelName:xn,backendName:`webgl`,kernelFunc:lz({opSnippet:`return float(!isnan(x) && !isinf(x));`,dtype:`bool`})},hU={kernelName:Sn,backendName:`webgl`,kernelFunc:lz({opSnippet:`return float(isinf(x));`,dtype:`bool`})},gU={kernelName:Cn,backendName:`webgl`,kernelFunc:lz({opSnippet:`return float(isnan(x));`,dtype:`bool`})},_U={kernelName:Tn,backendName:`webgl`,kernelFunc:uz({opSnippet:`return float(a < b);`,packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:DL,dtype:`bool`})},vU={kernelName:En,backendName:`webgl`,kernelFunc:uz({opSnippet:`return float(a <= b);`,packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:OL,dtype:`bool`})};function yU(e){let{backend:t,attrs:n}=e,{start:r,stop:i,num:a}=n,o=kL(r,i,a);return t.makeTensorInfo([o.length],`float32`,o)}var bU={kernelName:Dn,backendName:`webgl`,kernelFunc:yU},xU={kernelName:`Log`,backendName:`webgl`,kernelFunc:lz({opSnippet:cz+`
  return x < 0.0 ? 0./0. : log(x);
`,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:AL})},SU={kernelName:On,backendName:`webgl`,kernelFunc:lz({opSnippet:cz+`
  return log(1.0 + x);
`})},CU={kernelName:kn,backendName:`webgl`,kernelFunc:uz({opSnippet:`return float(a >= 1.0 && b >= 1.0);`,packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:`bool`})},wU={kernelName:An,backendName:`webgl`,kernelFunc:lz({opSnippet:`return float(!(x >= 1.0));`})},TU={kernelName:jn,backendName:`webgl`,kernelFunc:uz({opSnippet:`return float(a >= 1.0 || b >= 1.0);`,packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:`bool`})},EU=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[];let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${a}; j <= ${a}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${o}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${s};
        setOutput(val);
      }
    `}},DU=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${a};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${a}; j <= ${a}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${s};
        setOutput(result);
      }
    `}},OU={kernelName:`LRN`,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{depthRadius:a,bias:o,alpha:s,beta:c}=r,l=j().getBool(`WEBGL_PACK_NORMALIZATION`)?new DU(i.shape,a,o,s,c):new EU(i.shape,a,o,s,c);return n.runWebGLProgram(l,[i],i.dtype)}},kU=class{constructor(e,t,n,r,i){this.variableNames=[`inputImage`,`outputImage`,`dy`],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=i,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${r}) * norm + float(${n});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${i})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${i});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}},AU={kernelName:Nn,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i,y:a,dy:o}=t,{depthRadius:s,bias:c,alpha:l,beta:u}=r,d=new kU(i.shape,s,c,l,u);return n.runWebGLProgram(d,[i,a,o],i.dtype)}};function jU(e,t,n,r){let i=k(t),a=k(e.shape)/i,o=$({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=Cz(o,e.dtype,`max`,r),c=$({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}function MU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reductionIndices:a,keepDims:o}=r,s=i.shape.length,c=Oe(a,i.shape),l=c,u=Vl(l,s),d=u!=null,f=n.shouldExecuteOnCPU([i]),p=i;if(d){if(f){let e=n.texData.get(p.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=i.shape[u[e]];let r=aR(e,i.shape,i.dtype,u,t);p=n.makeTensorInfo(t,i.dtype);let a=n.texData.get(p.dataId);a.values=r}else p=Dz(i,u,n);l=Ul(l.length,s)}Bl(`max`,l,s);let[m,h]=Rl(p.shape,l),g=m;o&&(g=zl(m,c));let _;if(f){let e=n.texData.get(p.dataId).values,t=jL(e,k(h),g,i.dtype);_=n.makeTensorInfo(g,i.dtype);let r=n.texData.get(_.dataId);r.values=t}else _=jU(p,h,g,n);return d&&n.disposeIntermediateTensorInfo(p),_}var NU={kernelName:`Max`,backendName:`webgl`,kernelFunc:MU},PU={kernelName:Pn,backendName:`webgl`,kernelFunc:uz({opSnippet:KR+`
  return max(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+JR+`
  return result;
`,cpuKernelImpl:ML})};function FU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;OF(i,`maxPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;O(Ys(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Fs(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&xe(l.inShape,l.outShape))return XR({inputs:{x:i},backend:n});let u=new dB(l,`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var IU={kernelName:Fn,backendName:`webgl`,kernelFunc:FU};function LU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dataFormat:c,dimRoundingMode:l}=r,u=new fB(Is(i.shape,a,o,[1,1,1],s,l,c),`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var RU={kernelName:Ln,backendName:`webgl`,kernelFunc:LU},zU=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,i=e.effectiveFilterHeight,a=e.effectiveFilterWidth,o=i-1-e.padInfo.top,s=a-1-e.padInfo.left,c=i*a-1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${i};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${a}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${a} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},BU=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.dilationDepth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterDepth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=s-1-e.padInfo.front,d=c-1-e.padInfo.top,f=l-1-e.padInfo.left,p=s*c*l-1;this.userCode=`
      const ivec3 pads = ivec3(${u}, ${d}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${s};
           wD += ${i}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${a}) {
            float dyR = float(dyRCorner + wR) / ${n}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${l};
                wC += ${o}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${l} +
                  wR * ${l} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function VU(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=Is(o.shape,s,c,[1,1,1],l,u),f=new fB(d,`max`,!0),p=n.runWebGLProgram(f,[o],o.dtype),m=new BU(d),h=n.runWebGLProgram(m,[i,p],o.dtype);return n.disposeIntermediateTensorInfo(p),h}var HU={kernelName:Rn,backendName:`webgl`,kernelFunc:VU};function UU(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a,output:o}=t,s=a;OF([a,o],`maxPoolGrad`);let{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=r,f=Fs(s.shape,c,l,1,u,d),p=new dB(f,`max`,!0),m=n.runWebGLProgram(p,[s],s.dtype),h=new zU(f),g=n.runWebGLProgram(h,[i,m],s.dtype);return n.disposeIntermediateTensorInfo(m),g}var WU={kernelName:In,backendName:`webgl`,kernelFunc:UU};function GU(e,t,n,r){let i=new dB(n,`max`,!1),a=r.runWebGLProgram(i,[e],`float32`);return i=new dB(n,`max`,!0,!0,t),[a,r.runWebGLProgram(i,[e],`float32`)]}var KU={kernelName:zn,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:i,strides:a,pad:o,includeBatchInIndex:s}=t,c=n;O(r.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`);let l=[1,1];O(Ys(a,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);let[u,d]=GU(r,s,Fs(r.shape,i,a,l,o),c);return[u,d]}};function qU(e,t,n,r){let i=k(t),a=k(e.shape)/i,o=$({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=Cz(o,`float32`,`mean`,r),c=$({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}var JU={kernelName:Bn,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{keepDims:i,axis:a}=t,o=n,s=r.shape.length,c=Oe(a,r.shape),l=c,u=Vl(l,s),d=u!=null,f=o.shouldExecuteOnCPU([r]),p=[],m=r;if(d){if(f){let e=o.texData.get(m.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=r.shape[u[e]];let n=aR(e,r.shape,r.dtype,u,t);m=o.makeTensorInfo(t,r.dtype);let i=o.texData.get(m.dataId);i.values=n}else m=Dz(r,u,o);p.push(m),l=Ul(l.length,s)}Bl(`sum`,l,s);let[h,g]=Rl(m.shape,l),_=h;i&&(_=zl(h,c));let v=qU(m,g,_,o);for(let e of p)o.disposeIntermediateTensorInfo(e);return v}};function YU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=Oe(a,i.shape),l=c,u=Vl(l,s),d=i;u!=null&&(d=jz({inputs:{x:i},backend:n,attrs:{perm:u}}),l=Ul(l.length,i.shape.length)),Bl(`min`,l,s);let[f,p]=Rl(d.shape,l),m=k(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=Cz(h,h.dtype,`min`,n),_;if(o){let e=zl(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var XU={kernelName:`Min`,backendName:`webgl`,kernelFunc:YU},ZU={kernelName:Vn,backendName:`webgl`,kernelFunc:uz({opSnippet:KR+`
  return min(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+JR+`
  return result;
`,cpuKernelImpl:NL})},QU=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=TI(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r),c=n===`reflect`?0:1;if(r===1){this.userCode=`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${i} coords = outC - start;
        setOutput(getX(${s}));
      }
    `}},$U=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=TI(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=cR(`rc`,r),c=cR(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=n===`reflect`?0:1,f=``;if(r===1){let e=`
        ${i} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
      `}else{let e=`
        ${i} source = rc;
        ${i} lt = ${i}(lessThan(source, start));
        ${i} gte = ${i}(greaterThanEqual(source, end));
        ${i} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
        rc = outputLoc;
        ${s[r-2]} += 1;
        if(${s[r-2]} < ${this.outputShape[r-2]}) {
          ${e}
          result[2] = getChannel(getX(${c.join()}), ${u});
          ${s[r-1]} += 1;
          if(${l}) {
            ${e}
            result[3] = getChannel(getX(${c.join()}), ${u});
          }
        }
      `}this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}},eW={kernelName:Hn,backendName:`webgl`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r}=e,{paddings:i,mode:a}=n,o=j().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new $U(r.shape,i,a):new QU(r.shape,i,a);return t.runWebGLProgram(o,[r],r.dtype)}},tW={kernelName:`Mod`,backendName:`webgl`,kernelFunc:uz({opSnippet:`if (b == 0.0) return NAN;
  return mod(a, b);`,packedOpSnippet:`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+JR+`
  return result;
`})},nW=class{constructor(e,t,n){this.variableNames=[`probs`],this.customUniforms=[{name:`seed`,type:`float`}],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}},rW=uz({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,checkOutOfBounds:!0}),iW={kernelName:nn,backendName:`webgl`,kernelFunc:rW},aW=`return a - b;`,oW=uz({opSnippet:aW,packedOpSnippet:aW,supportsComplex:!0,cpuKernelImpl:nR}),sW={kernelName:`Sub`,backendName:`webgl`,kernelFunc:oW};function cW(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{dim:a}=r,o=Oe([a],i.shape),s=MU({inputs:{x:i},backend:n,attrs:{reductionIndices:o,keepDims:!1}}),c=zl(s.shape,o),l=$({inputs:{x:s},backend:n,attrs:{shape:c}}),u=oW({inputs:{a:i,b:l},backend:n}),d=kH({inputs:{x:u},backend:n}),f=kz({inputs:{x:d},backend:n,attrs:{axis:o,keepDims:!1}}),p=$({inputs:{x:f},backend:n,attrs:{shape:c}}),m=rW({inputs:{a:d,b:p},backend:n});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),m}var lW={kernelName:Ar,backendName:`webgl`,kernelFunc:cW};function uW(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{numSamples:a,seed:o,normalized:s}=r,c=s?i:cW({inputs:{logits:i},backend:n,attrs:{dim:i.shape.length-1}}),l=c.shape[0],u=c.shape[1],d=new nW(l,u,a),f=[[o]],p=n.runWebGLProgram(d,[c],`int32`,f);return s||n.disposeIntermediateTensorInfo(c),p}var dW={kernelName:Un,backendName:`webgl`,kernelFunc:uW},fW=xR+`
  return -x;
`,pW=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function mW(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])){let[e,t]=FL(n.texData.get(r.dataId).values,r.shape,r.dtype);return n.makeTensorInfo(t,r.dtype,e)}let i;return i=j().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new PR(r.shape,pW):new bR(r.shape,fW),n.runWebGLProgram(i,[r],r.dtype)}var hW={kernelName:`Neg`,backendName:`webgl`,kernelFunc:mW},gW=fm;function _W(e){ii(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=r,{selectedIndices:l}=gW(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c);return n.makeTensorInfo([l.length],`int32`,new Int32Array(l))}var vW={kernelName:Kn,backendName:`webgl`,kernelFunc:_W},yW=pm;function bW(e){ii(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,padToMaxOutputSize:l}=r,{selectedIndices:u,validOutputs:d}=yW(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c,l);return[n.makeTensorInfo([u.length],`int32`,new Int32Array(u)),n.makeTensorInfo([],`int32`,new Int32Array([d]))]}var xW={kernelName:qn,backendName:`webgl`,kernelFunc:bW},SW=mm;function CW(e){ii(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=r,{selectedIndices:u,selectedScores:d}=SW(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c,l);return[n.makeTensorInfo([u.length],`int32`,new Int32Array(u)),n.makeTensorInfo([d.length],`float32`,new Float32Array(d))]}var wW={kernelName:Jn,backendName:`webgl`,kernelFunc:CW},TW=class{constructor(e,t,n,r){this.variableNames=[`indices`],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${n}),
                      float(index == coords.y)));
      }
    `}},EW={kernelName:Xn,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{indices:i}=t,{dtype:a,depth:o,onValue:s,offValue:c}=r,l=k(i.shape),u=new TW(l,o,s,c),d=$({inputs:{x:i},backend:n,attrs:{shape:[l]}}),f=n.runWebGLProgram(u,[d],a);n.disposeIntermediateTensorInfo(d);let p=[...i.shape,o],m=$({inputs:{x:f},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo(f),m}};function DW(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`complex64`){let e=KB({inputs:{input:r},backend:n}),t=DW({inputs:{x:e},backend:n}),i=dV({inputs:{input:r},backend:n}),a=DW({inputs:{x:i},backend:n}),o=QR({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return BH({attrs:{shape:r.shape,dtype:r.dtype,value:r.dtype===`string`?``:0},backend:n})}var OW={kernelName:Zr,backendName:`webgl`,kernelFunc:DW};function kW(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`onesLike is not supported under string dtype`);if(r.dtype===`complex64`){let e=KB({inputs:{input:r},backend:n}),t=kW({inputs:{x:e},backend:n}),i=dV({inputs:{input:r},backend:n}),a=DW({inputs:{x:i},backend:n}),o=QR({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return BH({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:n})}var AW={kernelName:Yn,backendName:`webgl`,kernelFunc:kW};function jW(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r;if(t.length===1)return jH({inputs:{input:t[0]},backend:n,attrs:{dim:i}});let a=t[0].shape,o=t[0].dtype;t.forEach(e=>{ye(a,e.shape,`All tensors passed to stack must have matching shapes`),O(o===e.dtype,()=>`All tensors passed to stack must have matching dtypes`)});let s=[],c=hV({inputs:t.map(e=>{let t=jH({inputs:{input:e},backend:n,attrs:{dim:i}});return s.push(t),t}),backend:n,attrs:{axis:i}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}var MW={kernelName:Zn,backendName:`webgl`,kernelFunc:jW},NW=class{constructor(e,t,n){this.variableNames=[`x`],this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=TI(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r);if(r===1){this.userCode=`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${i} coords = outC - start;
          setOutput(getX(${s}));
        }
      }
    `}},PW=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=TI(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=cR(`rc`,r),c=cR(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=[`${i} rc = outputLoc;`,`${s[r-1]} += 1;
       if(${l}) {
      `,r===1?``:`}
       rc = outputLoc;
       ${s[r-2]} += 1;
       if(${s[r-2]} < ${this.outputShape[r-2]}) {`,r===1?``:`  ${s[r-1]} += 1;
         if(${l}) {`],f=r===1?`rc < start || rc >= end`:`any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))`,p=``;for(let e=0,t=r===1?2:4;e<t;e++)p+=`
        ${d[e]}
        if (${f}) {
          result[${e}] = float(value);
        } else {
          ${i} source = rc - start;
          result[${e}] = getChannel(getX(${c.join()}), ${u});
        }
      `;p+=r===1?`} `:`}}`,this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}},FW=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,constantValue:o}=r;if(k(i.shape)===0)return BH({backend:n,attrs:{shape:a.map((e,t)=>e[0]+i.shape[t]+e[1]),value:o,dtype:i.dtype}});let s=j().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new PW(i.shape,a,o):new NW(i.shape,a,o),c=[[o]];return n.runWebGLProgram(s,[i],i.dtype,c)},IW={kernelName:Qn,backendName:`webgl`,kernelFunc:FW},LW={kernelName:`Pow`,backendName:`webgl`,kernelFunc:uz({opSnippet:`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,packedOpSnippet:`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+JR+`
  return result;
`})};function RW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=[],l=Oe(a,i.shape),u=l,d=Vl(u,s),f=i;d!=null&&(f=jz({inputs:{x:i},backend:n,attrs:{perm:d}}),u=Ul(u.length,s),c.push(f)),Bl(`prod`,u,s);let p;if(n.shouldExecuteOnCPU([f])){let e=n.texData.get(f.dataId).values,{outVals:t,outShape:r,outDtype:i}=LL(f.shape,f.dtype,e,u);p=n.makeTensorInfo(r,i,t)}else{let[e,t]=Rl(f.shape,u),r=k(t),a=$({inputs:{x:f},backend:n,attrs:{shape:[-1,r]}}),o=Cz(a,ha(i.dtype),`prod`,n);p=$({inputs:{x:o},backend:n,attrs:{shape:e}}),c.push(a),c.push(o)}if(o){c.push(p);let e=zl(p.shape,l);p=$({inputs:{x:p},backend:n,attrs:{shape:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var zW={kernelName:er,backendName:`webgl`,kernelFunc:RW};function BW(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:i,paramsDenseValues:a,indices:o}=t,{outputRaggedRank:s}=r,c=i.map(e=>n.readSync(e.dataId)),l=i.map(e=>e.shape),u=n.readSync(a.dataId),d=n.readSync(o.dataId),[f,p,m]=RL(c,l,u,a.shape,a.dtype,d,o.shape,s),h=f.map(e=>n.makeTensorInfo([e.length],`int32`,e)),g=n.makeTensorInfo(m,a.dtype,p);return h.concat([g])}var VW={kernelName:tr,backendName:`webgl`,kernelFunc:BW};function HW(e){let{inputs:t,backend:n}=e,{starts:r,limits:i,deltas:a}=t,o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=zL(o,r.shape,r.dtype,s,i.shape,c,a.shape);return[n.makeTensorInfo([l.length],`int32`,l),n.makeTensorInfo([u.length],r.dtype,u)]}var UW={kernelName:nr,backendName:`webgl`,kernelFunc:HW};function WW(e){let{inputs:t,backend:n,attrs:r}=e,{shape:i,values:a,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:c}=r,l=n.readSync(i.dataId),u=n.readSync(a.dataId),d=n.readSync(o.dataId),f=s.map(e=>n.readSync(e.dataId)),p=s.map(e=>e.shape),[m,h]=BL(l,i.shape,u,a.shape,a.dtype,d,o.shape,f,p,c);return n.makeTensorInfo(m,a.dtype,h)}var GW={kernelName:rr,backendName:`webgl`,kernelFunc:WW},KW=e=>{let{backend:t,attrs:n}=e,{start:r,stop:i,step:a,dtype:o}=n,s=VL(r,i,a,o);return t.makeTensorInfo([s.length],o,s)},qW={kernelName:ir,backendName:`webgl`,kernelFunc:KW},JW={kernelName:or,backendName:`webgl`,kernelFunc:lz({opSnippet:`return 1.0 / x;`})},YW={kernelName:sr,backendName:`webgl`,kernelFunc:lz({opSnippet:xR+`
  return (x < 0.0) ? 0.0 : x;
`,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`})},XW={kernelName:pr,backendName:`webgl`,kernelFunc:lz({opSnippet:xR+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`})},ZW=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}},QW=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}};function $W(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=j().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new QW(i.shape,c,l,a,o):new ZW(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],`float32`)}var eG={kernelName:dr,backendName:`webgl`,kernelFunc:$W},tG=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${i-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function nG(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new tG(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var rG={kernelName:fr,backendName:`webgl`,kernelFunc:nG},iG=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}},aG=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}};function oG(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=j().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new aG(i.shape,c,l,a,o):new iG(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],i.dtype)}var sG={kernelName:lr,backendName:`webgl`,kernelFunc:oG},cG=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float sourceFracRow =
              float(${s[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${s[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${n} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${i}) - 1),
                ${n} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function lG(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new cG(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var uG={kernelName:ur,backendName:`webgl`,kernelFunc:lG},dG=class{constructor(e,t){this.variableNames=[`x`];let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,n===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let r=n=>t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - coords[${n}] - 1`:`coords[${n}]`,i=e.map((e,t)=>r(t)).join(`,`),a=TI(n);this.userCode=`
      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${i}));
      }
    `}},fG=class{constructor(e,t){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0;let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);this.outputShape=e;let r=cR(`rc`,n),i=`${r[n-1]} + 1 < ${this.outputShape[n-1]}`,a=`${r[n-2]} + 1 < ${this.outputShape[n-2]}`,o=TI(n);n===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${i}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${o} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${s(r.slice())};
          if(${i}){
            result.g = ${c(r.slice())};
          }
          if(${a}) {
            result.b = ${l(r.slice())};
            if(${i}) {
              result.a = ${u(r.slice())};
            }
          }
          setOutput(result);
        }
    `;function s(e){return d(e)}function c(e){return e[n-1]=`(`+e[n-1]+` + 1)`,d(e)}function l(e){return e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function u(e){return e[n-1]=`(`+e[n-1]+` + 1)`,e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function d(t){let n=e.map((e,n)=>f(n,t));return`getChannel(getX(${n.join(`,`)}), vec2(${n.slice(-2).join(`,`)}))`}function f(n,r){return t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - ${r[n]} - 1`:`${r[n]}`}}};function pG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dims:a}=r,o=i.shape.length,s=Oe(a,i.shape);if(o===0)return XR({inputs:{x:i},backend:n});let c=j().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new fG(i.shape,s):new dG(i.shape,s);return n.runWebGLProgram(c,[i],i.dtype)}var mG={kernelName:mr,backendName:`webgl`,kernelFunc:pG},hG=class{constructor(e,t){this.variableNames=[`Image`],this.outputShape=[],this.customUniforms=[{name:`params`,type:`vec4`}];let n=e[1],r=e[2];this.outputShape=e;let i=``;i=typeof t==`number`?`float outputValue = ${t.toFixed(2)};`:`
        vec3 fill = vec3(${t.join(`,`)});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${i}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${n}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}},gG={kernelName:ei,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:i,fillValue:a,center:o}=t,s=n,c=new hG(r.shape,a),[l,u]=Zh(o,r.shape[1],r.shape[2]),d=[[l,u,Math.sin(i),Math.cos(i)]];return s.runWebGLProgram(c,[r],r.dtype,d)}},_G={kernelName:hr,backendName:`webgl`,kernelFunc:lz({opSnippet:`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`})},vG={kernelName:gr,backendName:`webgl`,kernelFunc:lz({opSnippet:`return inversesqrt(x);`,cpuKernelImpl:HL})},yG=class{constructor(e,t,n,r,i,a,o=!0,s=!1){this.variableNames=[`updates`,`indices`,`defaultValue`],this.outputShape=a;let c=TI(i.length),l=TI(a.length),u=``;n===1?u=`i`:n===2&&(u=`i, j`);let d=`getIndices(${u})`,f=``;r===1?f=`i`:r===2&&(f=`i, coords[1]`);let p=`getUpdates(${f})`,m=``;s&&(m=`coords[0], coords[1]`);let h=`getDefaultValue(${m})`,g=t>1?`strides[j]`:`strides`;this.userCode=`
        ${c} strides = ${c}(${i});

        void main() {
          ${l} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${g};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${p};
              found = true;
            }
          }
          setOutput(mix(${h}, sum, float(found)));
        }
      `}},bG=class{constructor(e,t,n,r,i,a,o=!0,s=!1){this.variableNames=[`updates`,`indices`,`defaultValue`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a;let c=TI(i.length),l=TI(a.length),u=``;n===1?u=`i`:n===2&&(u=`i, j`);let d=`getIndices(${u})`,f=``;r===1?f=`i`:r===2&&(f=`i, coords[1]`);let p=`getUpdates(${f})`,m=``;s&&(m=`coords[0], coords[1]`);let h=`getDefaultValue(${m})`,g=t>1?`strides[j]`:`strides`,_=t>1?`strides[j + 1]`:`strides`;this.userCode=`
        ${c} strides = ${c}(${i});

        void main() {
          ${l} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${d});
              flattenedIndex += index.xz * ${g};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${_};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${p};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${h}, sum, found));
        }
      `}};function xG(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i,updates:a}=t,{shape:o}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=_p(a,i,o),f=[d/l,l];if(d===0)return n.makeTensorInfo(o,i.dtype);let p=$({inputs:{x:i},backend:n,attrs:{shape:[c,s]}}),m=$({inputs:{x:a},backend:n,attrs:{shape:[c,l]}}),h=n.makeTensorInfo([],`float32`,new Float32Array([0])),g;g=j().getBool(`WEBGL_PACK`)?new bG(c,s,p.shape.length,m.shape.length,u,f):new yG(c,s,p.shape.length,m.shape.length,u,f);let _=n.runWebGLProgram(g,[m,p,h],m.dtype),v=$({inputs:{x:_},backend:n,attrs:{shape:o}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(_),n.disposeIntermediateTensorInfo(h),v}var SG={kernelName:_r,backendName:`webgl`,kernelFunc:xG},CG=class{constructor(e,t,n,r){this.variableNames=[`sortedSequence`,`values`],this.customUniforms=[{name:`numInputs`,type:`int`}],this.outputShape=[e,n];let i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=j().getNumber(`WEBGL_VERSION`)===2?`while (left < right) {`:i,o=r===`left`?`<`:`<=`;this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${o} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}};function wG(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:i,values:a}=t,{side:o}=r,s=new CG(i.shape[0],i.shape[1],a.shape[1],o),c=[[i.shape[1]]];return n.runWebGLProgram(s,[i,a],`int32`,c)}var TG={kernelName:yr,backendName:`webgl`,kernelFunc:wG},EG=class{constructor(e,t,n){this.variableNames=[`c`,`a`,`b`],this.outputShape=t;let r,i;if(n>4)throw Error(`Where for rank ${n} is not yet supported`);if(n===1)i=`resRC`,r=`resRC`;else{let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],a=[],o=[];for(let r=0;r<t.length;r++)o.push(`${n[r]}`),r<e&&a.push(`${n[r]}`);r=a.join(),i=o.join()}let a=TI(n);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${i}));
        } else {
          setOutput(getB(${i}));
        }
      }
    `}};function DG(e){let{inputs:t,backend:n}=e,{condition:r,t:i,e:a}=t,o=new EG(r.shape.length,i.shape,i.shape.length);return n.runWebGLProgram(o,[r,i,a],ma(i.dtype,a.dtype))}var OG={kernelName:br,backendName:`webgl`,kernelFunc:DG},kG={kernelName:xr,backendName:`webgl`,kernelFunc:lz({opSnippet:`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${rg};
  float scale = ${ig};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`})},AG={kernelName:Tr,backendName:`webgl`,kernelFunc:lz({opSnippet:cz+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:WL})},jG={kernelName:wr,backendName:`webgl`,kernelFunc:lz({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`})},MG={kernelName:`Sin`,backendName:`webgl`,kernelFunc:lz({opSnippet:cz+`
  return sin(x);
`,packedOpSnippet:`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${JR}
  return result;
`})},NG={kernelName:Cr,backendName:`webgl`,kernelFunc:lz({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`})},PG={kernelName:Er,backendName:`webgl`,kernelFunc:lz({opSnippet:`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`})},FG={kernelName:Or,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,paddings:o}=r;O(i.shape.length<=4,()=>`spaceToBatchND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=[[0,0]];c.push(...o);for(let e=1+a.length;e<i.shape.length;++e)c.push([0,0]);let l=[],u=FW({inputs:{x:i},backend:n,attrs:{paddings:c,constantValue:0}}),d=Qh(u.shape,a,s,!1),f=$h(d.length,a.length,!1),p=eg(u.shape,a,s,!1),m=$({inputs:{x:u},backend:n,attrs:{shape:d}}),h=jz({inputs:{x:m},backend:n,attrs:{perm:f}}),g=$({inputs:{x:h},backend:n,attrs:{shape:p}});return l.push(u),l.push(m),l.push(h),l.forEach(e=>n.disposeIntermediateTensorInfo(e)),g}};function IG(e){let{inputs:t,backend:n}=e,{indices:r,values:i,denseShape:a,defaultValue:o}=t;if(a.shape.length!==1)throw Error(`Dense shape must be a vector, saw:
         ${a.shape}`);if(r.shape.length!==2)throw Error(`Indices must be a matrix, saw:
         ${r.shape}`);if(i.shape.length!==1)throw Error(`Values must be a vector, saw:
         ${i.shape}`);if(o.shape.length!==0)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=n.readSync(r.dataId),c=n.readSync(i.dataId),l=n.readSync(a.dataId),u=n.readSync(o.dataId)[0],[d,f,p,m,h]=qL(s,r.shape,r.dtype,c,i.dtype,l,u);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],i.dtype,p),n.makeTensorInfo([m.length],`bool`,new Uint8Array(m.map(e=>Number(e)))),n.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}var LG={kernelName:jr,backendName:`webgl`,kernelFunc:IG};function RG(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:i,newShape:a}=t;if(r.shape.length!==2)throw Error(`Input indices should be a matrix but received shape ${r.shape}`);if(i.shape.length!==1)throw Error(`Input shape should be a vector but received shape ${i.shape}`);if(a.shape.length!==1)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let o=Array.from(n.readSync(i.dataId)),s=n.readSync(r.dataId),c=Array.from(n.readSync(a.dataId)),[l,u,d]=JL(s,r.shape,r.dtype,o,c);return[n.makeTensorInfo(u,r.dtype,l),n.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}var zG={kernelName:Mr,backendName:`webgl`,kernelFunc:RG};function BG(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
              ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
              ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=YL(o,r.shape,r.dtype,s,c,!0);return n.makeTensorInfo(u,r.dtype,l)}var VG={kernelName:Nr,backendName:`webgl`,kernelFunc:BG};function HG(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
             ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
             ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=YL(o,r.shape,r.dtype,s,c);return n.makeTensorInfo(u,r.dtype,l)}var UG={kernelName:Pr,backendName:`webgl`,kernelFunc:HG};function WG(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:i,sparseValues:a,defaultValue:o}=t,{outputShape:s}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:f}=_p(a,i,s);if(a.dtype===`string`){let e=UL(n.bufferSync(i),n.bufferSync(a),s,f,u,l,c,d,Ri(n.readSync(o.dataId)[0]),!1);return n.makeTensorInfo(s,e.dtype,e.values)}let p=new yG(l,c,i.shape.length,a.shape.length,d,[f,1],!1),m=n.runWebGLProgram(p,[a,i,o],a.dtype),h=$({inputs:{x:m},backend:n,attrs:{shape:s}});return n.disposeIntermediateTensorInfo(m),h}var GG={kernelName:Fr,backendName:`webgl`,kernelFunc:WG};function KG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{numOrSizeSplits:a,axis:o}=r,s=Oe(o,i.shape)[0],c=kg(i,a,s),l=i.shape.length,u=Array(l).fill(0),d=i.shape.slice();return c.map(e=>{let t=[...d];t[s]=e;let r=NB({inputs:{x:i},backend:n,attrs:{begin:u,size:t}});return u[s]+=e,r})}var qG={kernelName:kr,backendName:`webgl`,kernelFunc:KG},JG=`return sqrt(x);`,YG={kernelName:Dr,backendName:`webgl`,kernelFunc:lz({opSnippet:JG,packedOpSnippet:JG,cpuKernelImpl:XL})},XG={kernelName:Lr,backendName:`webgl`,kernelFunc:lz({opSnippet:`return x * x;`})},ZG=`return (a - b) * (a - b);`,QG={kernelName:Ir,backendName:`webgl`,kernelFunc:uz({opSnippet:ZG,packedOpSnippet:ZG})};function $G(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;if(i.dtype!==`string`)throw Error(`Input must be of datatype string`);let a=ZL(qg(n.readSync(i.dataId)),`string`,r);return n.makeTensorInfo(i.shape,`string`,a)}var eK={kernelName:Rr,backendName:`webgl`,kernelFunc:$G};function tK({inputs:e,attrs:t,backend:n}){let{x:r}=e,i=xR+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,a=new bR(r.shape,i);return n.runWebGLProgram(a,[r],r.dtype)}var nK={kernelName:Qr,backendName:`webgl`,kernelFunc:tK},rK=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=n;let r=n.length,i=TI(n.length),a=TI(n.length),o=``;if(r===1)o=`coords * strides + begin`;else{let e=0;o=n.map((t,r)=>(e++,n.length===1?`coords * strides[${r}] + begin[${r}]`:`coords[${e-1}] * strides[${r}] + begin[${r}]`)).join(`,`)}this.userCode=`
      ${i} begin = ${i}(${e});
      ${i} strides = ${i}(${t});

      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}};function iK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,end:o,strides:s,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:f}=r,{finalShapeSparse:p,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:_,begin:v,end:y,strides:b}=Lh(i.shape,a,o,s,c,l,u,d,f),x;if(h)x=$({inputs:{x:i},backend:n,attrs:{shape:m}});else if(g||_){O(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=wh(v,y,b),t=NB({inputs:{x:i},backend:n,attrs:{begin:v,size:e}});x=$({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else if(n.shouldExecuteOnCPU([i])){let e=n.readSync(i.dataId),t=QL(p,es(i.shape,i.dtype,e),b,v);x=n.makeTensorInfo(m,i.dtype,t.values)}else{let e=new rK(v,b,p);x=n.runWebGLProgram(e,[i],i.dtype)}let S=$({inputs:{x},backend:n,attrs:{shape:m}});return n.disposeIntermediateTensorInfo(x),S}var aK={kernelName:zr,backendName:`webgl`,kernelFunc:iK};function oK(e){let{inputs:t,backend:n,attrs:r}=e,{separator:i,nGramWidths:a,leftPad:o,rightPad:s,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:d}=t,[f,p]=$L(n.readSync(u.dataId),n.readSync(d.dataId),i,a,o,s,c,l);return[n.makeTensorInfo([f.length],`string`,f),n.makeTensorInfo(d.shape,`int32`,p)]}var sK={kernelName:Br,backendName:`webgl`,kernelFunc:oK};function cK(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:i}=r,{input:a,delimiter:o}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(a.shape.length!==1)throw Error(`Input must be a vector, got shape: ${a.shape}`);if(o.shape.length!==0)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let s=n.readSync(a.dataId),c=n.readSync(o.dataId)[0],[l,u,d]=eR(s,c,i),f=u.length;return[n.makeTensorInfo([f,2],`int32`,l),n.makeTensorInfo([f],`string`,u),n.makeTensorInfo([2],`int32`,new Int32Array(d))]}var lK={kernelName:Vr,backendName:`webgl`,kernelFunc:cK};function uK(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:i}=r,{input:a}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(i<=0)throw Error(`Number of buckets must be at least 1`);let o=tR(n.readSync(a.dataId),i);return n.makeTensorInfo(a.shape,`int32`,o)}var dK={kernelName:Hr,backendName:`webgl`,kernelFunc:uK},fK={kernelName:`Tan`,backendName:`webgl`,kernelFunc:lz({opSnippet:`return tan(x);`})},pK={kernelName:Ur,backendName:`webgl`,kernelFunc:lz({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`})};function mK(e){let{inputs:t,backend:n,attrs:r}=e,{tensor:i,indices:a,updates:o}=t,{}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=_p(o,a,i.shape),f=[d/l,l];if(d===0)return n.makeTensorInfo(i.shape,a.dtype);let p=$({inputs:{x:a},backend:n,attrs:{shape:[c,s]}}),m=$({inputs:{x:o},backend:n,attrs:{shape:[c,l]}}),h=$({inputs:{x:i},backend:n,attrs:{shape:f}}),g=new yG(c,s,p.shape.length,m.shape.length,u,f,!1,!0),_=n.runWebGLProgram(g,[m,p,h],h.dtype),v=$({inputs:{x:_},backend:n,attrs:{shape:i.shape}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(_),v}var hK={kernelName:vr,backendName:`webgl`,kernelFunc:mK},gK=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;let r=TI(this.rank),i=_K(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${i}));
      }
    `}};function _K(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${e[0]})`;let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`],r=[];for(let t=0;t<e.length;t++)r.push(`imod(${n[t]}, ${e[t]})`);return r.join()}function vK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reps:a}=r;if(i.dtype===`string`||i.shape.length>5){let e=n.readSync(i.dataId),t=i.dtype===`string`?e.map(e=>Ri(e)):e,r=rR(es(i.shape,i.dtype,t),a);return n.makeTensorInfo(r.shape,r.dtype,r.values)}let o=new gK(i.shape,a);return n.runWebGLProgram(o,[i],i.dtype)}var yK={kernelName:Wr,backendName:`webgl`,kernelFunc:vK},bK=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`negativeInf`,type:`float`},{name:`dir`,type:`int`},{name:`inc`,type:`int`}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}},xK=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`k`,type:`int`}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}};function SK(e,t){t!==null&&e.disposeIntermediateTensorInfo(t)}function CK(e){let t=1;for(;t<e;)t*=2;return t}function wK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{k:a,sorted:o}=r,s=j().getNumber(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`),c=j().getNumber(`TOPK_K_CPU_HANDOFF_THRESHOLD`),l=i.shape,u=l[l.length-1];if(n.shouldExecuteOnCPU([i])||u<s||a>c){let[e,t]=iR(n.readSync(i.dataId),l,i.dtype,a,o);return[n.makeTensorInfo(e.shape,e.dtype,e.values),n.makeTensorInfo(t.shape,t.dtype,t.values)]}if(a===0)return l[l.length-1]=0,[n.makeTensorInfo(l,i.dtype,[]),n.makeTensorInfo(l,`int32`,[])];if(u===1)return[i,BH({attrs:{shape:l,dtype:`int32`,value:0},backend:n})];let d=n.texData.get(i.dataId),f=d!==null&&d.isPacked,p=f?n.unpackTensor(i):i,m=k(l)/u,h=$({inputs:{x:p},attrs:{shape:[m,u]},backend:n});f&&SK(n,p);let g=CK(a),_=CK(u),v=null,y=()=>v===null?[h,h]:[h,v],b=(e,t,r)=>{let i=y(),a=new bK(r),o=[[u],[+(v===null)],[-1/0],[e],[t]],s=v;v=n.runWebGLProgram(a,i,`int32`,o),SK(n,s)};for(let e=1;e<g;e*=2){let t=e*2;for(let n=e;n>=1;n/=2)b(t,n,[m,_])}for(let e=_;e>g;e/=2){let t=y(),r=new xK([m,e/2]),i=[[u],[+(v===null)],[g]],a=v;v=n.runWebGLProgram(r,t,`int32`,i),SK(n,a);let o=g/2,s=o*2;for(let e=o;e>=1;e/=2)b(s,e,v.shape)}let x=v;v=NB({inputs:{x:v},backend:n,attrs:{begin:0,size:[m,a]}}),SK(n,x);let S=cU({inputs:{x:h,indices:v},backend:n,attrs:{axis:1,batchDims:1}});SK(n,h);let C=l.slice(0,-1);C.push(a),x=v,v=$({inputs:{x:v},attrs:{shape:C},backend:n}),SK(n,x);let w=S;return S=$({inputs:{x:S},attrs:{shape:C},backend:n}),SK(n,w),[S,v]}var TK={kernelName:Gr,backendName:`webgl`,kernelFunc:wK},EK=class{constructor(e,t,n,r,i,a){this.variableNames=[`Image`,`Transforms`],this.outputShape=a;let o=n===`nearest`?1:2,s;switch(r){case`constant`:s=1;break;case`reflect`:s=2;break;case`wrap`:s=3;break;case`nearest`:s=4;break;default:s=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${s} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${i});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${i});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${o} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}};function DK(e){let{inputs:t,backend:n,attrs:r}=e,{image:i,transforms:a}=t,{interpolation:o,fillMode:s,fillValue:c,outputShape:l}=r,[u,d,f,p]=i.shape,[m,h]=l??[d,f],g=new EK(d,f,o,s,c,[u,m,h,p]);return n.runWebGLProgram(g,[i,a],`float32`)}var OK={kernelName:Kr,backendName:`webgl`,kernelFunc:DK};function kK(e){let{inputs:t,attrs:n,backend:r}=e,{axis:i}=n,{x:a}=t;OF(a,`unique`),console.warn(`WARNING: `,`UI might be locked temporarily as data is being downloaded`);let{outputValues:o,outputShape:s,indices:c}=oR(r.readSync(a.dataId),i,a.shape,a.dtype);return[r.makeTensorInfo(s,a.dtype,o),r.makeTensorInfo([c.length],`int32`,c)]}var AK={kernelName:Jr,backendName:`webgl`,kernelFunc:kK};function jK(e){let{inputs:t,backend:n,attrs:r}=e,{value:i}=t,{axis:a}=r;a<0&&(a+=i.shape.length);let o=i,s=o.shape.length,c=i.shape[a],l=Array(s-1),u=0;for(let e=0;e<s;e++)e!==a&&(l[u++]=o.shape[e]);let d=[],f=Array(s).fill(0),p=o.shape.slice();p[a]=1;let m=Array(c);for(let e=0;e<m.length;e++){f[a]=e;let t=NB({inputs:{x:o},backend:n,attrs:{begin:f,size:p}});m[e]=$({inputs:{x:t},backend:n,attrs:{shape:l}}),d.push(t)}return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}var MK={kernelName:Yr,backendName:`webgl`,kernelFunc:jK},NK=class{constructor(e,t){this.variableNames=[`x`,`segmentIds`];let n=e.windowSize,r=e.batchSize,i=e.inSize,a=e.numSegments,o=a*Math.ceil(i/n);this.outputShape=[r,o];let s=Math.floor(n/4)*4,c=n%4,l=`
        sumValue += dot(values, segFilter);
    `,u=``;i%n>0&&(u=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `);let d=``;i%n>0&&(d=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${d}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${a})) * float(${n}));
        int currentSeg = int(mod(float(outIdx), float(${a})));

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${l}
        }

        int inIdx = inOffset + ${s};
        if (${c===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${l}
        } else if (${c===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${l}
        } else if (${c===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${l}
        }
        setOutput(sumValue);
      }
    `}};function PK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,segmentIds:a}=t,{numSegments:o}=r,s=i.shape.length,c=[],l=0,u=Vl([l],s),d=i;u!=null&&(d=jz({inputs:{x:i},backend:n,attrs:{perm:u}}),c.push(d),l=Ul(1,s)[0]);let f=Wg(d.shape,l,o),p=k([d.shape[l]]),m=$({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}});c.push(m);let h=ha(i.dtype),g=(e,t,r,i,a)=>{let o=e.shape[0],s=e.shape[1],l=Ug(s,a),u=new NK({windowSize:l,inSize:s,batchSize:o,numSegments:a},t),d=n.compileAndRun(u,[e,r],i);if(c.push(d),d.shape[1]===a)return d;let f=KW({backend:n,attrs:{start:0,stop:a,step:1,dtype:`float32`}}),p=vK({inputs:{x:f},backend:n,attrs:{reps:[s/l]}});return c.push(f),c.push(p),g(d,t,p,i,a)},_=$({inputs:{x:g(m,`unsortedSegmentSum`,a,h,o)},backend:n,attrs:{shape:f}}),v=_;if(u!=null){c.push(_);let e=Hl(u);v=jz({inputs:{x:v},backend:n,attrs:{perm:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),v}var FK=[Fz,Rz,zz,Bz,Hz,Kz,Jz,Xz,rB,aB,oB,sB,cB,lB,uB,mB,gB,bB,SB,wB,DB,FB,LB,VB,UB,ZB,$B,rV,$R,sV,gV,TV,jV,PV,IV,RV,BV,VV,HV,WV,ZV,$V,tH,iH,cH,fH,mH,_H,bH,SH,CH,EH,DH,OH,AH,MH,PH,RH,VH,UH,GH,KH,YH,eU,nU,aU,lU,uU,dU,ZR,pU,fV,mU,hU,gU,rz,_U,vU,bU,xU,SU,CU,wU,TU,OU,AU,NU,PU,IU,RU,HU,WU,KU,JU,XU,ZU,eW,tW,dW,_z,hW,vW,xW,wW,GB,EW,AW,MW,IW,LW,sz,zW,VW,UW,GW,qW,qB,iW,JW,YW,XW,yz,eG,rG,sG,uG,mG,gG,_G,vG,SG,TG,OG,kG,AG,jG,MG,NG,PB,lW,PG,FG,LG,zG,VG,UG,GG,qG,YG,XG,QG,eK,nK,aK,sK,lK,dK,sW,Az,fK,pK,hK,yK,TK,OK,Mz,AK,MK,{kernelName:Xr,backendName:`webgl`,kernelFunc:PK},OW];for(let e of FK)di(e);var IK=784,LK=10,RK=65e3,zK=55e3,BK=RK-zK,VK=`https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png`,HK=`https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8`,UK=class{datasetImages=null;datasetLabels=null;trainIndices=null;testIndices=null;shuffledTrainIndex=0;shuffledTestIndex=0;async load(e){e?.(0);let t=new Image;t.crossOrigin=`anonymous`;let n=new Promise((e,n)=>{t.onload=()=>e(),t.onerror=()=>n(Error(`Failed to load MNIST images`)),t.src=VK}),r=fetch(HK),[,i]=await Promise.all([n,r]);e?.(30);let a=document.createElement(`canvas`);a.width=t.width,a.height=t.height;let o=a.getContext(`2d`),s=new ArrayBuffer(RK*IK*4),c=5e3;for(let n=0;n<RK/c;n++){let r=new Float32Array(s,n*IK*c*4,IK*c);o.drawImage(t,0,n*c,t.width,c,0,0,t.width,c);let i=o.getImageData(0,0,a.width,c);for(let e=0;e<i.data.length/4;e++)r[e]=i.data[e*4]/255;e?.(30+Math.floor(n/(RK/c)*50))}this.datasetImages=new Float32Array(s),this.datasetLabels=new Uint8Array(await i.arrayBuffer()),this.trainIndices=we(zK),this.testIndices=we(BK),e?.(100)}nextTrainBatch(e){return this.nextBatch(e,[this.datasetImages,this.datasetLabels],()=>(this.shuffledTrainIndex=(this.shuffledTrainIndex+1)%this.trainIndices.length,this.trainIndices[this.shuffledTrainIndex]))}nextTestBatch(e){return this.nextBatch(e,[this.datasetImages,this.datasetLabels],()=>(this.shuffledTestIndex=(this.shuffledTestIndex+1)%this.testIndices.length,this.testIndices[this.shuffledTestIndex]))}nextBatch(e,t,n){let r=new Float32Array(e*IK),i=new Uint8Array(e*LK);for(let a=0;a<e;a++){let e=n(),o=t[0].slice(e*IK,e*IK+IK);r.set(o,a*IK);let s=t[1].slice(e*LK,e*LK+LK);i.set(s,a*LK)}return{xs:pp(r,[e,IK]),labels:pp(i,[e,LK])}}},WK=`indexeddb://mathgame-mnist-model-v3`,GK=28,KK=10,qK=class{model=null;isReady=!1;async init(e){try{this.model=await kC(`/mathgame/model/mathgame-mnist.json`),this.isReady=!0,e?.(`Модель загружена`,100),console.log(`✅ Модель загружена из репозитория`);return}catch{console.log(`Готовая модель не найдена, пробуем IndexedDB...`)}try{this.model=await kC(WK),this.isReady=!0,e?.(`Модель загружена`,100);return}catch{}e?.(`Загружаем датасет MNIST`,0);let t=new UK;await t.load(t=>e?.(`Загружаем датасет MNIST`,t*.3)),e?.(`Создаём нейросеть`,30),this.model=this.buildModel(),e?.(`Обучение нейросети`,35),await this.train(t,t=>e?.(`Обучение нейросети`,35+t*.6)),e?.(`Сохраняем модель`,95),await this.model.save(WK),e?.(`Готово!`,100),this.isReady=!0}buildModel(){let e=NC();return e.add(sE({inputShape:[GK,GK,1],kernelSize:3,filters:32,padding:`same`,activation:`relu`,kernelInitializer:`heNormal`})),e.add(dE()),e.add(sE({kernelSize:3,filters:32,padding:`same`,activation:`relu`,kernelInitializer:`heNormal`})),e.add(dE()),e.add(fE({poolSize:[2,2]})),e.add(lE({rate:.25})),e.add(sE({kernelSize:3,filters:64,padding:`same`,activation:`relu`,kernelInitializer:`heNormal`})),e.add(dE()),e.add(sE({kernelSize:3,filters:64,padding:`same`,activation:`relu`,kernelInitializer:`heNormal`})),e.add(dE()),e.add(fE({poolSize:[2,2]})),e.add(lE({rate:.25})),e.add(uE()),e.add(cE({units:256,activation:`relu`,kernelInitializer:`heNormal`})),e.add(dE()),e.add(lE({rate:.5})),e.add(cE({units:KK,activation:`softmax`,kernelInitializer:`heNormal`})),e.compile({optimizer:Bh.adam(.001),loss:`categoricalCrossentropy`,metrics:[`accuracy`]}),e}async train(e,t){if(!this.model)throw Error(`Model not built`);let n=1e3;for(let n=0;n<800;n++){let r=e.nextTrainBatch(128),i=I(()=>{let e=r.xs.reshape([128,GK,GK,1]);return this.augment(e)});await this.model.fit(i,r.labels,{batchSize:128,epochs:1,verbose:0}),i.dispose(),r.xs.dispose(),r.labels.dispose(),t?.((n+1)/800*100),n%5==0&&await new Promise(e=>setTimeout(e,0))}let r=e.nextTestBatch(n),i=r.xs.reshape([n,GK,GK,1]),a=(await this.model.evaluate(i,r.labels)[1].data())[0];console.log(`Точность на тестовом наборе: ${(a*100).toFixed(2)}%`),i.dispose(),r.xs.dispose(),r.labels.dispose()}augment(e){return I(()=>{let t=e.shape[0],n=Math.floor(Math.random()*5)-2,r=Math.floor(Math.random()*5)-2,i=Ld(e,[[0,0],[2,2],[2,2],[0,0]]).slice([0,2+r,2+n,0],[t,GK,GK,1]),a=.85+Math.random()*.3;return i.mul(a).clipByValue(0,1)})}predict(e){if(!this.model||!this.isReady)throw Error(`Recognizer not initialized`);return I(()=>{let t=mp(e,[1,GK,GK,1]),n=this.model.predict(t),r=Array.from(n.dataSync()),i=0,a=r[0];for(let e=1;e<r.length;e++)r[e]>a&&(a=r[e],i=e);return{digit:i,score:a,allScores:r}})}ready(){return this.isReady}},JK=class{canvas;ctx;constructor(){this.canvas=document.createElement(`canvas`),this.canvas.width=28,this.canvas.height=28,this.ctx=this.canvas.getContext(`2d`,{willReadFrequently:!0})}process(e){let t=new XMLSerializer().serializeToString(e),n=new Blob([t],{type:`image/svg+xml;charset=utf-8`}),r=URL.createObjectURL(n),i=this.computeBoundingBox(e);return URL.revokeObjectURL(r),i?this.rasterize(e,i):new Float32Array(784)}computeBoundingBox(e){let t=e.querySelectorAll(`.drawn-path`);if(t.length===0)return null;let n=1/0,r=1/0,i=-1/0,a=-1/0;return t.forEach(e=>{let t=e.getBBox();n=Math.min(n,t.x),r=Math.min(r,t.y),i=Math.max(i,t.x+t.width),a=Math.max(a,t.y+t.height)}),isFinite(n)?{x:n,y:r,w:i-n,h:a-r}:null}rasterize(e,t){let n=20/Math.max(t.w,t.h),r=t.w*n,i=t.h*n,a=(28-r)/2,o=(28-i)/2;this.ctx.fillStyle=`black`,this.ctx.fillRect(0,0,28,28),this.ctx.strokeStyle=`white`,this.ctx.lineWidth=2,this.ctx.lineCap=`round`,this.ctx.lineJoin=`round`,e.querySelectorAll(`.drawn-path`).forEach(e=>{let r=e.getAttribute(`d`)??``;this.drawPathScaled(r,t,n,a,o)});let s=this.ctx.getImageData(0,0,28,28),c=new Float32Array(784);for(let e=0;e<784;e++)c[e]=s.data[e*4]/255;return c}drawPathScaled(e,t,n,r,i){this.ctx.beginPath();let a=(e,a)=>[(e-t.x)*n+r,(a-t.y)*n+i];(e.match(/[ML][^ML]+/g)??[]).forEach(e=>{let t=e[0],n=e.slice(1).trim().split(/[\s,]+/).map(Number),[r,i]=a(n[0],n[1]);t===`M`?this.ctx.moveTo(r,i):this.ctx.lineTo(r,i)}),this.ctx.stroke()}},YK=class e{static recognizer=null;static preprocessor=null;static async initRecognizer(t){e.recognizer&&e.recognizer.ready()||(e.recognizer=new qK,e.preprocessor=new JK,await e.recognizer.init(t))}svg;currentPath=null;points=[];isDrawing=!1;correctAnswer=0;onRecognizedCb=null;container;constructor(e){this.container=e;let t=`http://www.w3.org/2000/svg`;this.svg=document.createElementNS(t,`svg`),this.svg.setAttribute(`viewBox`,`0 0 300 300`),this.svg.setAttribute(`xmlns`,t),this.svg.style.cssText=`width:100%;height:100%;display:block;touch-action:none;user-select:none;`;let n=document.createElementNS(t,`rect`);n.setAttribute(`width`,`300`),n.setAttribute(`height`,`300`),n.setAttribute(`fill`,`#fafaf8`),this.svg.appendChild(n);for(let e=1;e<3;e++){let n=document.createElementNS(t,`line`);n.setAttribute(`x1`,`0`),n.setAttribute(`y1`,String(e*100)),n.setAttribute(`x2`,`300`),n.setAttribute(`y2`,String(e*100)),n.setAttribute(`stroke`,`rgba(0,0,0,0.06)`),n.setAttribute(`stroke-width`,`1`),this.svg.appendChild(n);let r=document.createElementNS(t,`line`);r.setAttribute(`x1`,String(e*100)),r.setAttribute(`y1`,`0`),r.setAttribute(`x2`,String(e*100)),r.setAttribute(`y2`,`300`),r.setAttribute(`stroke`,`rgba(0,0,0,0.06)`),r.setAttribute(`stroke-width`,`1`),this.svg.appendChild(r)}e.appendChild(this.svg),this.bindEvents()}setCorrectAnswer(e){this.correctAnswer=e}onRecognized(e){this.onRecognizedCb=e}recognize(){if(this.points.length<8){this.onRecognizedCb?.({digit:-1,score:0,correct:!1});return}if(!e.recognizer||!e.preprocessor){console.error(`Recognizer not initialized`);return}let t=e.preprocessor.process(this.svg),n=e.recognizer.predict(t);console.log(`Neural prediction:`,n.allScores.map((e,t)=>`${t}:${(e*100).toFixed(1)}%`).join(` `)),console.log(`Best: ${n.digit} (${(n.score*100).toFixed(1)}%)`);let r=n.digit===this.correctAnswer&&n.score>.5;r?this.animateSuccess():this.animateFailure(),setTimeout(()=>{this.onRecognizedCb?.({digit:n.digit,score:n.score,correct:r})},r?400:500)}clear(){this.svg.querySelectorAll(`.drawn-path`).forEach(e=>e.remove()),this.points=[],this.currentPath=null,this.isDrawing=!1,this.svg.style.animation=``}destroy(){this.unbindEvents(),this.container.innerHTML=``}bindEvents(){this.svg.addEventListener(`mousedown`,this.onStart),this.svg.addEventListener(`mousemove`,this.onMove),this.svg.addEventListener(`mouseup`,this.onEnd),this.svg.addEventListener(`mouseleave`,this.onEnd),this.svg.addEventListener(`touchstart`,this.onTouchStart,{passive:!1}),this.svg.addEventListener(`touchmove`,this.onTouchMove,{passive:!1}),this.svg.addEventListener(`touchend`,this.onEnd)}unbindEvents(){this.svg.removeEventListener(`mousedown`,this.onStart),this.svg.removeEventListener(`mousemove`,this.onMove),this.svg.removeEventListener(`mouseup`,this.onEnd),this.svg.removeEventListener(`mouseleave`,this.onEnd),this.svg.removeEventListener(`touchstart`,this.onTouchStart),this.svg.removeEventListener(`touchmove`,this.onTouchMove),this.svg.removeEventListener(`touchend`,this.onEnd)}onStart=e=>{this.isDrawing=!0,this.startStroke(this.svgPoint(e.clientX,e.clientY))};onMove=e=>{this.isDrawing&&this.continueStroke(this.svgPoint(e.clientX,e.clientY))};onTouchStart=e=>{e.preventDefault(),this.isDrawing=!0,this.startStroke(this.svgPoint(e.touches[0].clientX,e.touches[0].clientY))};onTouchMove=e=>{e.preventDefault(),this.isDrawing&&this.continueStroke(this.svgPoint(e.touches[0].clientX,e.touches[0].clientY))};onEnd=()=>{this.isDrawing=!1,this.currentPath=null};startStroke(e){this.points.push(e),this.currentPath=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),this.currentPath.setAttribute(`class`,`drawn-path`),this.currentPath.setAttribute(`fill`,`none`),this.currentPath.setAttribute(`stroke`,`#1a1a2e`),this.currentPath.setAttribute(`stroke-width`,`6`),this.currentPath.setAttribute(`stroke-linecap`,`round`),this.currentPath.setAttribute(`stroke-linejoin`,`round`),this.currentPath.setAttribute(`d`,`M ${e.x} ${e.y}`),this.svg.appendChild(this.currentPath)}continueStroke(e){if(this.points.push(e),!this.currentPath)return;let t=this.currentPath.getAttribute(`d`)??``;this.currentPath.setAttribute(`d`,`${t} L ${e.x} ${e.y}`)}animateSuccess(){this.svg.querySelectorAll(`.drawn-path`).forEach(e=>{e.setAttribute(`stroke`,`#00c853`),e.style.animation=`drawSuccess 0.4s ease-in-out`})}animateFailure(){this.svg.querySelectorAll(`.drawn-path`).forEach(e=>{e.setAttribute(`stroke`,`#e53935`)}),this.svg.style.animation=`drawShake 0.5s ease-in-out`,setTimeout(()=>{this.svg.style.animation=``,this.points=[],this.svg.querySelectorAll(`.drawn-path`).forEach(e=>e.remove())},500)}svgPoint(e,t){let n=this.svg.getBoundingClientRect();return{x:(e-n.left)*(300/n.width),y:(t-n.top)*(300/n.height)}}},XK=[`#FFD93D`,`#FF6B9D`,`#FF8C69`,`#C3B1E1`],ZK=[`#8a5c00`,`#8a1040`,`#a03010`,`#5a3e8a`],QK=[`Правильно!`,`Да!`,`Отлично!`,`Супер!`,`Молодец!`],$K=[`Почти!`,`Близко!`,`Попробуй ещё!`,`Хорошая попытка!`],eq=10,tq=class{menuScreen=nq(`#menu-screen`);gameScreen=nq(`#game-screen`);completeScreen=nq(`#complete-screen`);bgSvg=nq(`#bg-svg`);objSvg=nq(`#obj-svg`);morphSvg=nq(`#morph-svg`);questionCard=nq(`.card`);qText=nq(`#q-text`);scoreEl=nq(`#score-val`);qNumEl=nq(`#q-num`);feedback=nq(`#feedback`);nextBtn=nq(`#next-btn`);answersWrap=nq(`#answers`);drawWrap=nq(`#draw-wrap`);drawCheckBtn=nq(`#draw-check-btn`);drawClearBtn=nq(`#draw-clear-btn`);finalTxt=nq(`#final-txt`);timerTrack=nq(`#timer-track`);timerBar=nq(`#timer-bar`);mouseTracker=new C;scrollTransition;timer;questionGen;morpher;drawingPad=null;state={phase:`menu`,score:0,questionIndex:0,totalQuestions:eq,answered:!1,difficulty:`easy`};currentAnswer=0;morphLoopActive=!1;constructor(){new w(this.bgSvg,this.mouseTracker),new T,this.scrollTransition=new E(this.questionCard),this.timer=new ee(this.timerBar),this.questionGen=new y(this.objSvg),this.morpher=new ce(this.morphSvg),this.buildStars(),this.bindMenuEvents(),this.bindGameEvents(),this.startMenuMorphLoop()}async startMenuMorphLoop(){for(this.morphLoopActive=!0;this.morphLoopActive;)await this.morpher.morphToRandom(),await iq(1200)}stopMenuMorphLoop(){this.morphLoopActive=!1}bindMenuEvents(){document.querySelectorAll(`.diff-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.diff;this.startGame(t)}),e.addEventListener(`mouseenter`,()=>{e.style.transform=`scale(1.08) rotate(-2deg)`}),e.addEventListener(`mouseleave`,()=>{e.style.transform=``})})}async startGame(e){this.stopMenuMorphLoop(),e===`drawing`&&await this.ensureRecognizerReady(),this.state={phase:`playing`,score:0,questionIndex:0,totalQuestions:eq,answered:!1,difficulty:e},this.scrollTransition.enabled=!0,this.menuScreen.classList.add(`hidden`),this.gameScreen.classList.remove(`hidden`),this.completeScreen.classList.add(`hidden`),this.loadQuestion()}async ensureRecognizerReady(){let e=nq(`#loading-overlay`),t=nq(`#loading-stage`),n=nq(`#loading-pct`),r=nq(`#loading-bar`);e.classList.remove(`hidden`),await YK.initRecognizer((e,i)=>{t.textContent=e,n.textContent=`${Math.round(i)}%`,r.style.width=`${i}%`}),await new Promise(e=>setTimeout(e,400)),e.classList.add(`hidden`)}bindGameEvents(){this.nextBtn.addEventListener(`click`,()=>this.advanceQuestion()),this.scrollTransition.onNext(()=>{this.state.answered&&this.advanceQuestion()}),this.drawCheckBtn.addEventListener(`click`,()=>{this.drawingPad?.recognize()}),this.drawClearBtn.addEventListener(`click`,()=>{this.drawingPad?.clear()})}loadQuestion(){this.state.answered=!1,this.feedback.textContent=``,this.feedback.className=`feedback`,this.nextBtn.style.display=`none`,this.answersWrap.innerHTML=``;let e=v[this.state.difficulty],t=this.questionGen.generate(this.state.questionIndex,this.state.difficulty);this.currentAnswer=t.answer,this.qText.textContent=t.text,this.qNumEl.textContent=String(this.state.questionIndex+1),this.scoreEl.textContent=String(this.state.score),e.drawingMode?this.showDrawingMode():(this.showButtonMode(),this.buildAnswerButtons(t.answer)),e.timeLimit?(this.timerTrack.style.display=`block`,this.timer.start(e.timeLimit,()=>this.onTimeUp())):this.timerTrack.style.display=`none`,this.morpher.morphToRandom()}showDrawingMode(){this.answersWrap.style.display=`none`,this.drawWrap.style.display=`flex`,this.drawingPad&&this.drawingPad.destroy();let e=nq(`#drawing-pad-container`);e.innerHTML=``,this.drawingPad=new YK(e),this.drawingPad.setCorrectAnswer(this.currentAnswer),this.drawingPad.onRecognized(({digit:e,score:t,correct:n})=>{if(!this.state.answered)if(n)this.state.answered=!0,this.state.score++,this.scoreEl.textContent=String(this.state.score),this.feedback.textContent=QK[rq(0,QK.length-1)],this.feedback.className=`feedback correct`,D(),this.nextBtn.style.display=`inline-block`;else{let n=Math.round(t*100);this.feedback.textContent=e>=0?`Похоже на ${e} (${n}%) — попробуй ещё!`:`Не разобрать — нарисуй чище!`,this.feedback.className=`feedback wrong`}})}showButtonMode(){this.answersWrap.style.display=`flex`,this.drawWrap.style.display=`none`,this.drawingPad&&=(this.drawingPad.destroy(),null)}buildAnswerButtons(e){b(e).forEach((t,n)=>{let r=document.createElement(`button`);r.className=`ans-btn`,r.dataset.v=String(t);let i=XK[n],a=ZK[n];r.innerHTML=`<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="82" height="82" rx="20" fill="${i}" stroke="${a}" stroke-width="3"/>
        <rect x="10" y="9" width="30" height="14" rx="7" fill="rgba(255,255,255,.32)"/>
        <text x="45" y="56" text-anchor="middle" dominant-baseline="middle"
          font-family="Fredoka One,cursive" font-size="44" fill="${a}">${t}</text>
      </svg>`,r.addEventListener(`mouseenter`,()=>{r.style.transform=`scale(1.12) translateY(-4px)`,r.style.filter=`drop-shadow(0 8px 16px ${i}88)`}),r.addEventListener(`mouseleave`,()=>{r.style.transform=``,r.style.filter=``}),r.addEventListener(`click`,()=>this.onAnswer(t,e,r)),this.answersWrap.appendChild(r)})}onAnswer(e,t,n){this.state.answered||(this.state.answered=!0,this.timer.stop(),e===t?(this.state.score++,this.scoreEl.textContent=String(this.state.score),this.feedback.textContent=QK[rq(0,QK.length-1)],this.feedback.className=`feedback correct`,D()):(this.feedback.textContent=$K[rq(0,$K.length-1)],this.feedback.className=`feedback wrong`,this.highlightCorrect(t)),this.nextBtn.style.display=`inline-block`)}onTimeUp(){this.state.answered||(this.state.answered=!0,this.feedback.textContent=`Время вышло!`,this.feedback.className=`feedback wrong`,this.highlightCorrect(this.currentAnswer),this.nextBtn.style.display=`inline-block`)}highlightCorrect(e){document.querySelectorAll(`.ans-btn`).forEach(t=>{if(Number(t.dataset.v)===e){let e=t.querySelector(`rect`),n=t.querySelector(`text`),r=t.querySelector(`svg`);e.setAttribute(`fill`,`#00e676`),e.setAttribute(`stroke`,`#ffffff`),e.setAttribute(`stroke-width`,`5`),n.setAttribute(`fill`,`#004d20`),r.style.filter=`drop-shadow(0 0 10px #00e676) drop-shadow(0 0 20px #00e676)`,r.style.animation=`correctPulse 0.5s ease-in-out infinite alternate`}})}async advanceQuestion(){if(this.state.questionIndex++,this.state.questionIndex>=eq){this.showComplete();return}await this.scrollTransition.transition(()=>this.loadQuestion())}showComplete(){this.state.phase=`complete`,this.scrollTransition.enabled=!1,this.timer.hide(),this.showButtonMode(),this.gameScreen.classList.add(`hidden`),this.completeScreen.classList.remove(`hidden`),this.finalTxt.textContent=`Правильно: ${this.state.score} из ${eq}!`,nq(`#restart-btn`).onclick=()=>this.startGame(this.state.difficulty),nq(`#newgame-btn`).onclick=()=>{this.completeScreen.classList.add(`hidden`),this.menuScreen.classList.remove(`hidden`),this.startMenuMorphLoop()}}buildStars(){let e=`http://www.w3.org/2000/svg`,t=this.bgSvg.querySelector(`#star-g`);for(let n=0;n<90;n++){let n=document.createElementNS(e,`circle`);n.setAttribute(`cx`,String(Math.random()*1e3)),n.setAttribute(`cy`,String(Math.random()*700)),n.setAttribute(`r`,String(Math.random()*2+.4)),n.setAttribute(`fill`,`white`);let r=document.createElementNS(e,`animate`);r.setAttribute(`attributeName`,`opacity`),r.setAttribute(`values`,`1;0.05;1`),r.setAttribute(`dur`,`${(Math.random()*3+1.5).toFixed(1)}s`),r.setAttribute(`begin`,`${(Math.random()*4).toFixed(1)}s`),r.setAttribute(`repeatCount`,`indefinite`),n.appendChild(r),t.appendChild(n)}}};function nq(e){let t=document.querySelector(e);if(!t)throw Error(`Not found: ${e}`);return t}function rq(e,t){return Math.floor(Math.random()*(t-e+1))+e}function iq(e){return new Promise(t=>setTimeout(t,e))}document.addEventListener(`DOMContentLoaded`,()=>{new tq});