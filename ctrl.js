const right_btn = document.querySelector('#right_btn');
const left_btn = document.querySelector('#left_btn');
const up_btn = document.querySelector('#up_btn');
const down_btn = document.querySelector('#down_btn');
const more_btn = document.querySelector('#more_btn');
const less_btn = document.querySelector('#less_btn');
const stop_btn = document.querySelector('#stop_btn');
const infinite = document.querySelector('.infinite');
const wheel_1 = document.querySelector('.wheel-1');
const wheel_2 = document.querySelector('.wheel-2');
const car = document.querySelector('.car');
let deplacement_vertical = 20;
let deplacement_horizontal = 40;
let temps = 1;

car.style.top = deplacement_vertical + 'px';
car.style.left = deplacement_horizontal + 'px';

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        if (deplacement_horizontal < 360) {
            deplacement_horizontal += 40;
            car.style.left = deplacement_horizontal + 'px';
        }
    } else if (event.key === "ArrowLeft") {
        if (deplacement_horizontal > -360) {
            deplacement_horizontal -= 40;
            car.style.left = deplacement_horizontal + 'px';
        }
    } else if (event.key === "ArrowUp") {
        if (deplacement_vertical > -40) {
            deplacement_vertical -= 20;
            car.style.top = deplacement_vertical + 'px';
        }
    } else if (event.key === "ArrowDown") {
        if (deplacement_vertical < 80) {
            deplacement_vertical += 20;
            car.style.top = deplacement_vertical + 'px';
        }
    }
  });

right_btn.addEventListener('click', function() {
    if (deplacement_horizontal < 360) {
        deplacement_horizontal += 40;
        car.style.left = deplacement_horizontal + 'px';
    }
});

left_btn.addEventListener('click', function() {
    if (deplacement_horizontal > -360) {
        deplacement_horizontal -= 40;
        car.style.left = deplacement_horizontal + 'px';
    }
});

up_btn.addEventListener('click', function() {
    if (deplacement_vertical > -40) {
        deplacement_vertical -= 20;
        car.style.top = deplacement_vertical + 'px';
    }
});

down_btn.addEventListener('click', function() {
    if (deplacement_vertical < 80) {
        deplacement_vertical += 20;
        car.style.top = deplacement_vertical + 'px';
    }
});


const beforeStyle = window.getComputedStyle(infinite, ':before');
const animationDuration = beforeStyle.getPropertyValue('animation');
infinite.style.setProperty('--infinite-duration', '1s');
wheel_1.style.setProperty('--wheel-duration-1', '1s');
wheel_2.style.setProperty('--wheel-duration-2', '1s');

more_btn.addEventListener('click', function() {
    if (temps > 0.4) {
        temps = temps - 0.2;
    }
    infinite.style.setProperty('--infinite-duration', temps + 's');
    wheel_1.style.setProperty('--wheel-duration-1', temps + 's');
    wheel_2.style.setProperty('--wheel-duration-2', temps + 's');
});

less_btn.addEventListener('click', function() {
    if (temps < 2) {
        temps = temps + 0.2;
    }
    infinite.style.setProperty('--infinite-duration', temps + 's');
    wheel_1.style.setProperty('--wheel-duration-1', temps + 's');
    wheel_2.style.setProperty('--wheel-duration-2', temps + 's');
});

stop_btn.addEventListener('click', function() {
    if (infinite.style.getPropertyValue('--infinite-duration') == '0s') {
        infinite.style.setProperty('--infinite-duration', '1s');
        wheel_1.style.setProperty('--wheel-duration-1', '1s');
        wheel_2.style.setProperty('--wheel-duration-2', '1s');
        temps = 1;
    } else {
        infinite.style.setProperty('--infinite-duration', '0s');
        wheel_1.style.setProperty('--wheel-duration-1', '0s');
        wheel_2.style.setProperty('--wheel-duration-2', '0s');
    }
});


