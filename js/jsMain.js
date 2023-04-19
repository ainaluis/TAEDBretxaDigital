// JavaScript Document
$(document).ready(function(){
  if (document.location.toString().substr(-21) == 'presentaciogrups.html'){
    document.getElementById("g").innerHTML = localStorage.getItem("grup");
  }
  //Guardem el grup dels concursants
  function guardarGrup(g){
    location.href = 'presentaciogrups.html';
    localStorage.setItem("grup", g);
  }

  $('#grup1').click(function() {guardarGrup('1')});
  $('#grup2').click(function() {guardarGrup('2')});
  $('#grup3').click(function() {guardarGrup('3')});
  $('#grup4').click(function() {guardarGrup('4')});
  $('#grup5').click(function() {guardarGrup('5')});

  $('#play').click(function() {location.href = 'fase1.html';});
  $('#fin1').click(function() {location.href = 'fase2.html';});
  $('#fin2').click(function() {location.href = 'fase3.html';});
  $('#fin3').click(function() {location.href = 'fase4.html';});
  $('#fin4').click(function() {location.href = 'fase5.html';});
  $('#fin5').click(function() {location.href = 'final.html';});

  function aa (){
		document.getElementById("valorVariable").innerHTML = "hola mundo";
    document.getElementById("valorVariable2").innerHTML = "hola mundo";
		$('#second_form').hide();
	};


  function cc (){
    nombre = document.getElementById("nombre").value;
    if (nombre == 'Aina'){
      location.href = 'index.html'
    } else if (nombre == 'Uri') {
      location.href = 'registrationSuccess.html'
    }
    //document.getElementById("valorVariable2").innerHTML = nombre;
    $('#first_form').hide();
  }

  document.location = document.getElementById('yourinputfield').value() + '.html';
  var nombre = document.getElementById("nombre").value;
  document.getElementById("valorVariable2").innerHTML = nombre;



});
