function changeText1(){
	document.getElementById('noticias').innerHTML = 'La próxima reunión informativa para padres y futuros acampantes será el jueves 23 a las 20hs en el salón de actos del colegio.';
}
	
function changeText2(){
	document.getElementById('noticias').innerHTML = 'Esta documentación deberá ser firmada por los padres y presentada antes del viaje.';
}
	
function changeText3(){
	document.getElementById('noticias').innerHTML = 'Esta documentación deberá ser firmada por los padres y presentada antes del viaje.';	
}
	
function changeText4(){
	document.getElementById('noticias').innerHTML = 'Más información próximamente.';
}
	
function changeText5(){
	document.getElementById('noticias').innerHTML = 'Ya se encuentra actualizado el cronograma para el campamento GASJ 77 - Enero 2023. Pueden encontrarlo en la sección correspondiente.';
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