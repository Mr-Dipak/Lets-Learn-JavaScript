const body = document.querySelector('body');

function randomRGBColor(){
    const r = Math.floor((Math.random()*255)+1);
    const g = Math.floor((Math.random()*255)+1);
    const b = Math.floor((Math.random()*255)+1);

    // console.log(color);
   return  `rgb(${r},${g},${b})`
}

function randomHEXColor(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){
        color += hex[Math.floor((Math.random()*16))]
    }
    return color;
}
console.log(randomHEXColor());





function changeColor(){
    // let rgbcolor = randomRGBColor();
    let hexColor = randomHEXColor();
    let h1 = document.querySelector('h1').innerText = hexColor;
    body.style.backgroundColor = hexColor;
};

let colorInterval;
document.querySelector('#start').addEventListener('click',e=>{

    colorInterval = setInterval(changeColor,1000);
});

document.querySelector('#stop').addEventListener('click',e=>{
    clearInterval(colorInterval);
    colorInterval = null;
});