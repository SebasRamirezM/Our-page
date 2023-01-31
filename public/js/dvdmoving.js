let dvd = document.querySelector('.dvd');
let maxX = innerWidth;
let maxY = innerHeight;
let x = 0;
let y = 0;
let up = true;
let right = true;
let avanceX = 1;
let avanceY = 1;

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}

let nuevaPendiente = function(){

    avanceX = 1;
    avanceY = getRandomFloat(0.1, 5, 2);
    
};

setInterval(function(){
    maxX = innerWidth;
    maxY = innerHeight;
}, 1000)
setInterval(function(){
    if(x >= maxX - 95){
        right = false;
        nuevaPendiente();
    }else if(x <= 0){
        right = true;
        nuevaPendiente();
    }

    if(y >= maxY - 70){
        up = false;
        nuevaPendiente();
    }else if(y <= -30){
        up = true;
        nuevaPendiente();
    }

    dvd.style.left = `${x}px`
    dvd.style.top = `${y}px`


    x += (right) ? avanceX : -avanceX;
    y += (up)    ? avanceY : -avanceY;
}, 10)
