// On sélectionne les différents éléments de la page avec leurs IDs ou classes CSS
const right_btn = document.querySelector('#right_btn');
const left_btn = document.querySelector('#left_btn');
const up_btn = document.querySelector('#up_btn');
const down_btn = document.querySelector('#down_btn');
const more_btn = document.querySelector('#more_btn');
const less_btn = document.querySelector('#less_btn');
const stop_btn = document.querySelector('#stop_btn');
const object_btn = document.querySelector('#object_btn');
const infinite = document.querySelector('.infinite');
const wheel_1 = document.querySelector('.wheel-1');
const wheel_2 = document.querySelector('.wheel-2');
const car = document.querySelector('.car');

// On initialise les valeurs de déplacement vertical et horizontal, ainsi que le temps
let deplacement_vertical = 20;
let deplacement_horizontal = 40;
let temps = 1;

// On récupère la durée de l'animation avant du contenu du pseudo-élément "::before"
const beforeStyle = window.getComputedStyle(infinite, ':before');
const animationDuration = beforeStyle.getPropertyValue('animation');

// On définit la durée de l'animation pour chaque élément avec la variable "temps"
infinite.style.setProperty('--infinite-duration', '1s');
wheel_1.style.setProperty('--wheel-duration-1', '1s');
wheel_2.style.setProperty('--wheel-duration-2', '1s');

// On place la voiture à sa position de départ
car.style.top = deplacement_vertical + 'px';
car.style.left = deplacement_horizontal + 'px';


// On écoute les événements clavier

document.addEventListener("keydown", function(event) {
    // Déplacement vers la droite
    if (event.key === "ArrowRight") {
        if (deplacement_horizontal < 360) {
            deplacement_horizontal += 40;
            car.style.left = deplacement_horizontal + 'px';
        }
    } 
    // Déplacement vers la gauche
    else if (event.key === "ArrowLeft") {
        if (deplacement_horizontal > -360) {
            deplacement_horizontal -= 40;
            car.style.left = deplacement_horizontal + 'px';
        }
    } 
    // Déplacement vers le haut
    else if (event.key === "ArrowUp") {
        if (deplacement_vertical > -40) {
            deplacement_vertical -= 20;
            car.style.top = deplacement_vertical + 'px';
        }
    } 
    // Déplacement vers le bas
    else if (event.key === "ArrowDown") {
        if (deplacement_vertical < 80) {
            deplacement_vertical += 20;
            car.style.top = deplacement_vertical + 'px';
        }
    } 
    // Réduire la durée de l'animation des roues
    else if (event.key === "+") {
        if (temps > 0.4) {
            temps = temps - 0.2;
        }
        infinite.style.setProperty('--infinite-duration', temps + 's');
        wheel_1.style.setProperty('--wheel-duration-1', temps + 's');
        wheel_2.style.setProperty('--wheel-duration-2', temps + 's');
    } 
    // Augmenter la durée de l'animation des roues
    else if (event.key === "-") {
        if (temps < 2) {
            temps = temps + 0.2;
        }
        infinite.style.setProperty('--infinite-duration', temps + 's');
        wheel_1.style.setProperty('--wheel-duration-1', temps + 's');
        wheel_2.style.setProperty('--wheel-duration-2', temps + 's');
    } 
    // Démarrer ou arrêter l'animation des roues
    else if (event.code === "Space") {
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
    }
});


// On écoute les événements des boutons

// Fonction pour faire avancer la voiture vers la droite
right_btn.addEventListener('click', function() {
    // Si la voiture n'a pas atteint le bord droit de l'écran
    if (deplacement_horizontal < 360) {
        // Ajoute 40 pixels au déplacement horizontal
        deplacement_horizontal += 40;
        // Modifie la position horizontale de la voiture en fonction du nouveau déplacement horizontal
        car.style.left = deplacement_horizontal + 'px';
    }
});

// Fonction pour faire avancer la voiture vers la gauche
left_btn.addEventListener('click', function() {
    // Si la voiture n'a pas atteint le bord gauche de l'écran
    if (deplacement_horizontal > -360) {
        // Retire 40 pixels au déplacement horizontal
        deplacement_horizontal -= 40;
        // Modifie la position horizontale de la voiture en fonction du nouveau déplacement horizontal
        car.style.left = deplacement_horizontal + 'px';
    }
});

// Fonction pour faire avancer la voiture vers le haut
up_btn.addEventListener('click', function() {
    // Si la voiture n'a pas atteint le bord supérieur de l'écran
    if (deplacement_vertical > -40) {
        // Retire 20 pixels au déplacement vertical
        deplacement_vertical -= 20;
        // Modifie la position verticale de la voiture en fonction du nouveau déplacement vertical
        car.style.top = deplacement_vertical + 'px';
    }
});

// Fonction pour faire avancer la voiture vers le bas
down_btn.addEventListener('click', function() {
    // Si la voiture n'a pas atteint le bord inférieur de l'écran
    if (deplacement_vertical < 80) {
        // Ajoute 20 pixels au déplacement vertical
        deplacement_vertical += 20;
        // Modifie la position verticale de la voiture en fonction du nouveau déplacement vertical
        car.style.top = deplacement_vertical + 'px';
    }
});

// Fonction pour accélérer la rotation des roues
more_btn.addEventListener('click', function() {
    // Si le temps de rotation actuel est supérieur à 0.4 secondes
    if (temps > 0.4) {
        // Réduit le temps de rotation de 0.2 secondes
        temps = temps - 0.2;
    }
    // Modifie la durée de l'animation de rotation des roues en fonction du nouveau temps de rotation
    infinite.style.setProperty('--infinite-duration', temps + 's');
    wheel_1.style.setProperty('--wheel-duration-1', temps + 's');
    wheel_2.style.setProperty('--wheel-duration-2', temps + 's');
});

// Fonction pour ralentir la rotation des roues
less_btn.addEventListener('click', function() {
    // Si le temps de rotation actuel est inférieur à 2 secondes
    if (temps < 2) {
        // Augmente le temps de rotation de 0.2 secondes
        temps = temps + 0.2;
    }
    // Modifie la durée de l'animation de rotation des roues en fonction du nouveau temps de rotation
    infinite.style.setProperty('--infinite-duration', temps + 's');
    wheel_1.style.setProperty('--wheel-duration-1', temps + 's');
    wheel_2.style.setProperty('--wheel-duration-2', temps + 's');
});

// Fonction pour démarrer ou arrêter la rotation des roues
stop_btn.addEventListener('click', function() {
    // Si la rotation des roues est arrêtée
    if (infinite.style.getPropertyValue('--infinite-duration') == '0s') {
        // Démarrer la rotation des roues
        infinite.style.setProperty('--infinite-duration', '1s');
        wheel_1.style.setProperty('--wheel-duration-1', '1s');
        wheel_2.style.setProperty('--wheel-duration-2', '1s');
        temps = 1;
    }
    // Si la rotation des roues est en cours
    else {
        // Arrêter la rotation des roues
        infinite.style.setProperty('--infinite-duration', '0s');
        wheel_1.style.setProperty('--wheel-duration-1', '0s');
        wheel_2.style.setProperty('--wheel-duration-2', '0s');
    }
});

object_btn.addEventListener('click', function() {
    // apparition des obstacles
    let object_container = document.querySelector(".object");
    // Suppression de l'obstacle précédent
    object_container.innerHTML = "";
    setTimeout(function() {
        // Création de l'obstacle
        let obstacle = document.createElement("img");
        obstacle.setAttribute("src", "img/caisse.png");
        obstacle.setAttribute("class", "caisse2");
        object_container.appendChild(obstacle);
        // Déplacement de l'obstacle
        let obj = document.querySelector(".caisse2");
        let pos = 0;
            setInterval(function() {
                pos += 2;
                obj.style.right = pos + "px";
            }, 10);
    }, Math.random() * 7000); // Définit un délai aléatoire entre 0 et 5 secondes

    setTimeout(function() {
        // Création de l'obstacle
        let obstacle = document.createElement("img");
        obstacle.setAttribute("src", "img/caisse.png");
        obstacle.setAttribute("class", "caisse1");
        object_container.appendChild(obstacle);
        // Déplacement de l'obstacle
        let obj = document.querySelector(".caisse1");
        let pos = 0;
            setInterval(function() {
                pos += 2;
                obj.style.right = pos + "px";
            }, 10);
    }, Math.random() * 5000); // Définit un délai aléatoire entre 0 et 5 secondes
});


// changement de carrosserie

// creation des differentes voiture
let selected_car = document.querySelector(".select-car");
let car_images = {
    blanc: "img/blanc.png",
    bleu: "img/bleu.png",
    bleu_ciel: "img/bleu-ciel.png",
    rouge: "img/rouge.png",
    vert: "img/vert.png",
    orange: "img/orange.png",
    violet: "img/violet.png",
    noir: "img/noir.png",
};

// creation de la voiture par defaut
let image = document.createElement("img");
image.setAttribute("src", "img/blanc.png");
image.setAttribute("class", "car-body");
let container = document.querySelector(".car-container");
container.appendChild(image);

// changement de carrosserie
selected_car.addEventListener("change", function() {
    let selected_value = selected_car.value;
    let image_src = car_images[selected_value];
    image = document.createElement("img");
    image.setAttribute("src", image_src);
    image.setAttribute("class", "car-body");
    container = document.querySelector(".car-container");
    container.innerHTML = "";
    container.appendChild(image);
});


// changement background

let bg = document.querySelector(".container");
let selected_bg = document.querySelector(".select-bg");

// changement de background
selected_bg.addEventListener("change", function() {
    if (selected_bg.value == "blanc") {
        bg.style.background = "radial-gradient(#fff,#bebebe)";
    }
    if (selected_bg.value == "bleu") {
        bg.style.background = "radial-gradient(#ebebeb,#0d47a1)";
    }
    if (selected_bg.value == "bleu_ciel") {
        bg.style.background = "radial-gradient(#ebebeb,#00bcd4)";
    }
    if (selected_bg.value == "rouge") {
        bg.style.background = "radial-gradient(#ebebeb,#d50000)";
    }
    if (selected_bg.value == "vert") {
        bg.style.background = "radial-gradient(#ebebeb,#2e7d32)";
    }
    if (selected_bg.value == "orange") {
        bg.style.background = "radial-gradient(#ebebeb,#ff5722)";
    }
    if (selected_bg.value == "violet") {
        bg.style.background = "radial-gradient(#ebebeb,#9c27b0)";
    }
    if (selected_bg.value == "noir") {
        bg.style.background = "radial-gradient(#2e2e2e,#000)";
    }
});