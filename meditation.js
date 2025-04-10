let t= document.getElementById('time');
let t1= document.getElementById('time1');
let t2= document.getElementById('time2');
let a=document.getElementById('tenmin');
let c=document.getElementById('fivmin');

let d=document.getElementById('twemin');
let s=document.getElementById('span2');
t.style.display="none";
t1.style.display="none";
t2.style.display="none";
let b=document.getElementById('timerbutton');
let display=1;
let n=0;
let h=1;

b.addEventListener('click',showbutton);
a.addEventListener('click',show);
c.addEventListener('click',show1);
d.addEventListener('click',show2);


function showbutton(){
    if(display==1){
        b.style.display="none";
        a.style.display="block";
        c.style.display="block";
        d.style.display="block";
    }
}
function show(){
    if(display==1){
        t.style.display="inline-flex";
        setInterval(()=>{
            if(h<61 && n<=10){
             t.textContent=n+":"+h;
             h++;
            }
            if(h==61 ){
                n++;
                h=1;
            }
            if(n<=10 && h==1){
                n=10;
                h=0;
            }
         },1000);
        
       
        display=0;
      }else{
        t.style.display="none";
        display=1;
        n=1;
      }
}
function show1(){
    if(display==1){
        t1.style.display="inline-flex";
        setInterval(()=>{
            if(n<16){
             t1.textContent=n+":"+h;
             n
             h++;
            }
            if(h==61 ){
                n++;
                h=1;
            }
            if(n<=15 && h==1){
                n=15;
                h=0;
            }
         },1000);
        
       
        display=0;
      }else{
        t1.style.display="none";
        display=1;
        n=1;
      }
}
function show2(){
    if(display==1){
        t2.style.display="inline-flex";
        setInterval(()=>{
            if(n<21){
             t2.textContent=n+":"+h;
             h++;
            }
            if(h==61 ){
                n++;
                h=1;
            }
            if(n<=20 && h==1){
                n=20;
                h=0;
            }
         },1000);
        
       
        display=0;
      }else{
        t2.style.display="none";
        display=1;
        n=1;
      }
}
