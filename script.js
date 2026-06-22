



setInterval(()=>{


let heart=document.createElement("div");

heart.innerHTML="❤️";


heart.style.position="fixed";


heart.style.left=
Math.random()*100+"vw";


heart.style.top="-20px";


heart.style.fontSize="25px";


heart.style.animation=
"fall 5s linear";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove()

},5000)


},500);



let style=
document.createElement("style");


style.innerHTML=`


@keyframes fall{

to{

transform:
translateY(100vh)
rotate(360deg);

}

}

`;

function blowCandle(){


document.querySelector(".flame")
.style.display="none";


document.getElementById("cake-msg")
.innerHTML=
"🎂 Happy 20th Birthday Vennela ❤️ Your wish is on the way ✨";


}

document.head.appendChild(style);