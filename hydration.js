let b=document.getElementById('bot');
b.addEventListener('mousedown',fillout);
let c=document.getElementById('water');
let display=1;
function fillout(){
    if(display==1){
        c.style.display="block";
        display=0;
    }else{
        c.style.display="none";
        display=1;
    }

}