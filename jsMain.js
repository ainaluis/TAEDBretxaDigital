// JavaScript Document
function aplicarcanvi(){
      $('#prova').css('background-color', 'blue');
	$('#footer').css('font-size', '12px');
}

$(document).ready(function(){
	/*-console.log( "ready! I tell you" );
	$("tr:even").click(function() { alert("hi you") });*/
	$("tr:odd").css("background-color", "#EFF1F1");
	$("#navBack").click(function() { location.href = 'registrationPage.html' });

  function aa (){
		document.getElementById("valorVariable").innerHTML = "hola mundo";
    document.getElementById("valorVariable2").innerHTML = "hola mundo";
		$('#second_form').hide();
	};


  function cc (){
    nombre = document.getElementById("nombre").value;
    if (nombre == 'Aina'){
      location.href = 'joc.html'
    } else if (nombre == 'Uri') {
      location.href = 'registrationSuccess.html'
    }
    //document.getElementById("valorVariable2").innerHTML = nombre;
    $('#first_form').hide();
  }
  $('#guardarNombre').click(function(){ cc() });

	$("#start").click(function() { aa()});

    //location.href = 'registrationSuccess.html' });
	$("#newfee").click(function() { location.href = 'newFee.html' });

	$('.sidebar').hide();

	$('#menu').click(function(){
		$('.sidebar').toggle({direction:"left"});
	});

	$('#close').click(function(){
		$('.sidebar').hide({direction:"left"});
	});

	$('#menu').click(function(){
		aplicarcanvi();
	});

	$('#truncate').click(function(){ //alert("clicked");
		$('#trucateTable').load("php_files/emptyTables.php");
	});

  document.location = document.getElementById('yourinputfield').value() + '.html';
  var nombre = document.getElementById("nombre").value;
  document.getElementById("valorVariable2").innerHTML = nombre;
  //document.getElementById("valorVariable").innerHTML = variable;



});
