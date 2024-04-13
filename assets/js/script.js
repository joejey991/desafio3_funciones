
/* ejercicio original */

/* const ele = document.getElementById('ele1');

function pintar() {
    ele.style.background = 'yellow'
};

ele.addEventListener("click", pintar); */

/* Desarrollo parte 2.2 */

function pintar1(ele) {
    ele.style.background = 'yellow';
};

const ele1 = document.getElementById('ele1');
ele1.addEventListener("click", function() {
    pintar1(ele1);
});

/* Desarrollo parte 2.3 */

function pintar2(ele, color = 'green') {
    ele.style.background = color;
};

const ele2 = document.getElementById('ele2');

pintar2(ele2)

ele2.addEventListener("click", function() {
    pintar2(ele2, 'yellow');
});

