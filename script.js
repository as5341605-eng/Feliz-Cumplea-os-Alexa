const start=document.getElementById("start");
const hero=document.querySelector(".hero");
const story=document.getElementById("story");
const finalBtn=document.getElementById("final");
const end=document.getElementById("end");

start.addEventListener("click",()=>{
hero.classList.add("hidden");
story.classList.remove("hidden");

window.scrollTo({
top:0,
behavior:"smooth"
});
});

finalBtn.addEventListener("click",()=>{
story.classList.add("hidden");
end.classList.remove("hidden");

window.scrollTo({
top:0,
behavior:"smooth"
});
});
