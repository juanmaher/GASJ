function changeText1(){
	document.getElementById('noticias').innerHTML = 'Próximamente detallaremos la fecha y hora de la misma. Se realizará en el colegio con padres y acampantes.';
}
	
function changeText2(){
	document.getElementById('noticias').innerHTML = 'Próximamente les dejaremos el link para descargar la autorización para los acampantes del GASJ 77. Esta documentación deberá ser firmada por los padres y presentada antes del viaje.';
}
	
function changeText3(){
	document.getElementById('noticias').innerHTML = 'Próximamente les dejaremos el link para descargar la ficha médica para los acampantes del GASJ 77. Esta documentación deberá ser firmada por los padres y presentada antes del viaje.';	
}
	
function changeText4(){
	document.getElementById('noticias').innerHTML = 'Más información próximamente.';
}
	
function changeText5(){
	document.getElementById('noticias').innerHTML = 'Ya se encuentra actualizado el cronograma para el campamento GASJ 77 - Enero 2021. Pueden encontrarlo en la sección correspondiente.';
}

function slideOpen1(el){
	var elem = document.getElementById(el);
		elem.style.transition = "height 1s ease-in-out 0s";
		elem.style.height = "100%";
}

function slideOpen2(el){
	var elem = document.getElementById(el);
	elem.style.transition = "height 0.3s ease-in-out 0s";
	elem.style.height = "100%";
}