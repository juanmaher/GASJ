var boxArray = ['uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciseis','diecisiete'];
window.addEventListener('mouseup', function(event){
	for(var i=0; i < boxArray.length; i++){
	    var box = document.getElementById(boxArray[i]);
	    if(event.target != box && event.target.parentNode != box){
		   box.style.display = 'none';
	    }
	}
});

var c=0;
function uno() {
	if(c==0){
		document.getElementById("uno").style.display="block";
		c=1;
	}else{
		document.getElementById("uno").style.display="none";
		c=0;
	}
}

function dos() {
	if(c==0){
		document.getElementById("dos").style.display="block";
		c=1;
	}else{
		document.getElementById("dos").style.display="none";
		c=0;
	}
}

function tres() {
	if(c==0){
		document.getElementById("tres").style.display="block";
		c=1;
	}else{
		document.getElementById("tres").style.display="none";
		c=0;
	}
}

function cuatro() {
	if(c==0){
		document.getElementById("cuatro").style.display="block";
		c=1;
	}else{
		document.getElementById("cuatro").style.display="none";
		c=0;
	}
}

function cinco() {
	if(c==0){
		document.getElementById("cinco").style.display="block";
		c=1;
	}else{
		document.getElementById("cinco").style.display="none";
		c=0;
	}
}

function seis() {
	if(c==0){
		document.getElementById("seis").style.display="block";
		c=1;
	}else{
		document.getElementById("seis").style.display="none";
		c=0;
	}
}

function siete() {
	if(c==0){
		document.getElementById("siete").style.display="block";
		c=1;
	}else{
		document.getElementById("siete").style.display="none";
		c=0;
	}
}

function ocho() {
	if(c==0){
		document.getElementById("ocho").style.display="block";
		c=1;
	}else{
		document.getElementById("ocho").style.display="none";
		c=0;
	}
}

function nueve() {
	if(c==0){
		document.getElementById("nueve").style.display="block";
		c=1;
	}else{
		document.getElementById("nueve").style.display="none";
		c=0;
	}
}

function diez() {
	if(c==0){
		document.getElementById("diez").style.display="block";
		c=1;
	}else{
		document.getElementById("diez").style.display="none";
		c=0;
	}
}

function once() {
	if(c==0){
		document.getElementById("once").style.display="block";
		c=1;
	}else{
		document.getElementById("once").style.display="none";
		c=0;
	}
}

function doce() {
	if(c==0){
		document.getElementById("doce").style.display="block";
		c=1;
	}else{
		document.getElementById("doce").style.display="none";
		c=0;
	}
}

function trece() {
	if(c==0){
		document.getElementById("trece").style.display="block";
		c=1;
	}else{
		document.getElementById("trece").style.display="none";
		c=0;
	}
}

function catorce() {
	if(c==0){
		document.getElementById("catorce").style.display="block";
		c=1;
	}else{
		document.getElementById("catorce").style.display="none";
		c=0;
	}
}

function quince() {
	if(c==0){
		document.getElementById("quince").style.display="block";
		c=1;
	}else{
		document.getElementById("quince").style.display="none";
		c=0;
	}
}

function dieciseis() {
	if(c==0){
		document.getElementById("dieciseis").style.display="block";
		c=1;
	}else{
		document.getElementById("dieciseis").style.display="none";
		c=0;
	}
}

function diecisiete() {
	if(c==0){
		document.getElementById("diecisiete").style.display="block";
		c=1;
	}else{
		document.getElementById("diecisiete").style.display="none";
		c=0;
	}
}