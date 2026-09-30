(function(){
/* MUSIC: put your file in the music folder and change SRC if you rename it */
const SRC='music/song.mp3',VOL=0.8;
const a=new Audio(SRC);a.loop=true;a.preload='auto';a.volume=0;
let started=false;
function fade(){let v=0;const t=setInterval(()=>{v=Math.min(VOL,v+0.04);a.volume=v;if(v>=VOL)clearInterval(t)},120)}
function start(){if(started)return;a.play().then(()=>{started=true;fade();off()}).catch(()=>{})}
const ev=['pointerdown','touchend','click','keydown'];
function off(){ev.forEach(e=>removeEventListener(e,start,true))}
ev.forEach(e=>addEventListener(e,start,true));
start(); /* tries to autoplay; browsers usually wait for the first tap */
})();

/* SCROLL ANIMATIONS */
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const g=[...document.querySelectorAll('.gallery figure')];
addEventListener('scroll',()=>{const y=scrollY*.04;g.forEach((f,i)=>f.style.setProperty('--py',(i%2?0:-1)*Math.min(y,24)+'px'))},{passive:true});
