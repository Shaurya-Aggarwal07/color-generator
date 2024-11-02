let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h1=document.querySelector('h1');
    let x = getRandomcolor();
    h1.innerText=x;

    let div = document.querySelector("div");
    div.style.backgroundColor=x;
});

function getRandomcolor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color = `rgb(${r},${g},${b})` ;
    return color ;
};


