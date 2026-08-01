const boot=document.getElementById("boot");
const enter=document.getElementById("enter");

const messages=[

"INITIALIZING...",

"CONNECTING MULTIVERSE...",

"SEARCHING EARTH...",

"EARTH - 18 FOUND"

];

let index=0;

function showMessage(){

if(index<messages.length){

boot.innerHTML=messages[index];

boot.classList.add("glitch");

setTimeout(()=>{

boot.classList.remove("glitch");

index++;

setTimeout(showMessage,1200);

},500);

}else{

enter.style.display="block";

}

}

showMessage();

enter.onclick=()=>{

document.body.style.transition="1s";

document.body.style.background="#000";

boot.innerHTML="Opening Portal...";

enter.style.display="none";

setTimeout(()=>{

window.location.href="birthday.html";

},2500);

}
