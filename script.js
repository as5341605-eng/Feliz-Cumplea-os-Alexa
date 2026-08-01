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

const gift=document.querySelector(".gift");

gift.onclick=()=>{

    current=7;

    showScene(current);

}
