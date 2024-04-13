
// Primera parte
function pintanegro(_color) {
  _color.style.backgroundColor = 'black';
}

const divazul = document.getElementById('div-azul');
const divrojo = document.getElementById('div-rojo');
const divverde = document.getElementById('div-verde');
const divamarillo = document.getElementById('div-amarillo');

divazul.addEventListener('click', function() { pintanegro(divazul); });
divrojo.addEventListener('click', function() { pintanegro(divrojo); });
divverde.addEventListener('click', function() { pintanegro(divverde); });
divamarillo.addEventListener('click', function() { pintanegro(divamarillo); });

// Segunda parte

let coloractual= "";

document.addEventListener('keydown', function(event) {
  let keydiv = document.getElementById('key');
  if (event.key === 'a') {
    keydiv.style.backgroundColor = 'pink';
    coloractual = 'pink';
  } else if (event.key === 's') {
    keydiv.style.backgroundColor = 'orange';
    coloractual = 'orange';
  } else if (event.key === 'd') {
    keydiv.style.backgroundColor = 'lightblue';
    coloractual = 'lightblue';
  }
    else if (event.key === 'q') {
    creadivconColor('purple');
  } else if (event.key === 'w') {
    creadivconColor('grey');
  } else if (event.key === 'e') {
    creadivconColor('brown');
  }
});

// Tercera parte

function creadivconColor(color) {
  let nuevodiv = document.createElement('div');
  nuevodiv.style.width = '200px';
  nuevodiv.style.height = '200px';
  nuevodiv.style.backgroundColor = color;
  nuevodiv.className = 'color-div';
  document.body.appendChild(nuevodiv);
}