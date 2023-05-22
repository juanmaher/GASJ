function changeText1() {
  document.getElementById('noticias').innerHTML =
    'La primera reunión de padres del GASJ 78 fue realizada el día viernes 19 de mayo. En el siguiente archivo podrán encontrar un resumen de lo charlado durante la reunión. En el mes de septiembre se anunciará un segundo encuentro';
}

function changeText2() {
  document.getElementById('noticias').innerHTML =
    'Esta documentación deberá ser firmada por los padres y presentada antes del viaje. Presentar antes del 8 de octubre.';
}

function changeText3() {
  document.getElementById('noticias').innerHTML =
    'Esta documentación deberá ser firmada por los padres y presentada antes del viaje. ';
}

function changeText4() {
  document.getElementById('noticias').innerHTML = 'Más información próximamente.';
}

function changeText5() {
  document.getElementById('noticias').innerHTML =
    'Para una mejor organización del GASJ 78 hemos definido los siguientes costos y plazos para el cierre de la inscripción';
}

function slideOpen1(el) {
  var elem = document.getElementById(el);
  elem.style.transition = 'height 1s ease-in-out 0s';
  elem.style.height = '100%';
}

function slideOpen2(el) {
  var elem = document.getElementById(el);
  elem.style.transition = 'height 0.3s ease-in-out 0s';
  elem.style.height = '100%';
}
