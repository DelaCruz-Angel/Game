const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML=Math.random()>.5?"❤":"💗";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

document.getElementById("startBtn").addEventListener("click", () => {
    window.location.href = "game.html";
});

setInterval(createHeart,400);

/* ENTER key */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        document.querySelector(".start-box").style.transform="translate(-50%,-50%) scale(.9)";

        setTimeout(()=>{

            alert("Game Started!");

        },150);

    }

});