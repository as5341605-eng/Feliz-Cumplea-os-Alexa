const scenes = [
  document.getElementById("scene1"),
  document.getElementById("scene2"),
  document.getElementById("scene3"),
  document.getElementById("scene4"),
  document.getElementById("scene5"),
  document.getElementById("scene6"),
  document.getElementById("scene7"),
  document.getElementById("scene8")
];

let current = 0;

function showScene(index){

    scenes.forEach(scene=>{
        scene.classList.remove("active");
    });

    scenes[index].classList.add("active");

}

const startButton = document.getElementById("startGame");

startButton.onclick = ()=>{

    current=1;

    showScene(current);

    setTimeout(()=>{

        current=2;
        showScene(current);

    },3500);

    setTimeout(()=>{

        current=3;
        showScene(current);

    },7000);

    setTimeout(()=>{

        current=4;
        showScene(current);

    },10000);

    setTimeout(()=>{

        current=5;
        showScene(current);

    },14500);

    setTimeout(()=>{

        current=6;
        showScene(current);

    },18500);

}
const giftBtn = document.getElementById("giftBtn");

giftBtn.onclick = ()=>{

    fireworks();

    setTimeout(()=>{

        showScene(7);

    },1200);

}
function fireworks(){

    for(let i=0;i<80;i++){

        const heart=document.createElement("div");

        heart.className="pixel-heart";

        heart.style.left=(window.innerWidth/2)+"px";
        heart.style.top=(window.innerHeight/2)+"px";

        heart.style.setProperty("--x",
            (Math.random()*900-450)+"px"
        );

        heart.style.setProperty("--y",
            (Math.random()*700-350)+"px"
        );

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },1600);

    }

}
