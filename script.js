const sec=document.getElementById('seconds');
const min=document.getElementById('minutes');
const hr=document.getElementById('hours');
const start=document.getElementById('sbtn');
const pause=document.getElementById('pbtn');
const end=document.getElementById('stopbtn');
const mode=document.getElementById('anorfn');
let i=0;
let j=0;
let k=0;
let cnt=0;
let isStarted=false;
let tid;
start.addEventListener('click',()=>{
  if(isStarted){
    return;
  }
  isStarted=true;
  start.disabled=true;
  tid=setInterval(()=>{
    if(i===60){
      i=0;
      displayMinutes();
    }
    sec.innerHTML=i<10?'0'+i:i;
    i++;
  },1000)
})
pause.addEventListener('click',()=>{
  isStarted=false;
  start.disabled=false;
  clearInterval(tid);
})
end.addEventListener('click',()=>{
  isStarted=false;
  start.disabled=false;
  clearInterval(tid);
  i=0;
  j=1;
  k=1;
  sec.innerHTML='00';
  min.innerHTML='00';
  hr.innerHTML='00';
})
function displayMinutes(){
  if(j===60){
    j=0;
    displayHrs();
  }
  min.innerHTML=j<10?'0'+j:j;
  j++; 
}
function displayHrs(){
  if(k===13){
    k=1;
    cnt++;
    if(cnt%2!==0){
      mode.innerHTML="PM"
    }
  }
  hr.innerHTML=k<10?'0'+k:k;
  k++;
}