
document.getElementById('themeBtn')?.addEventListener('click',()=>{
document.body.dataset.theme=document.body.dataset.theme==='light'?'dark':'light';
localStorage.theme=document.body.dataset.theme;
});
document.body.dataset.theme=localStorage.theme||'dark';

for(let i=0;i<40;i++){
 let b=document.createElement('div');
 b.style.cssText=`position:fixed;width:${10+Math.random()*30}px;height:${10+Math.random()*30}px;border-radius:50%;background:rgba(125,249,255,.08);left:${Math.random()*100}vw;top:${Math.random()*100}vh;pointer-events:none;`;
 b.animate([{transform:'translateY(0px)'},{transform:'translateY(-120vh)'}],{duration:10000+Math.random()*15000,iterations:Infinity});
 document.body.appendChild(b);
}
document.querySelectorAll('.counter').forEach(c=>{
 let t=+c.dataset.target,v=0;
 let i=setInterval(()=>{v+=Math.ceil(t/80);if(v>=t){v=t;clearInterval(i)}c.textContent=v;},25);
});
