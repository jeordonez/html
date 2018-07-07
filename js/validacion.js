
	
 	$("#seleccion").prop("selectedIndex", -1);
	$("#dialog").hide();
	$("#spanselect").hide();
	$("#spanmensaje").hide();

    function abrir() {

    	var email = $("#seleccion option:selected").val();
    	var texto = $("#mensaje").val();


    	if( email == null || email == ""){
    		$("#seleccion").parent().attr("class","form-group has-error");
    		$("#seleccion").parent().children("span").text("Debe seleccionar una opción").show();
    		return false;

    	}
    	else if( texto == "" ){
    		$("#mensaje").parent().attr("class","form-group has-error");
    		$("#mensaje").parent().children("span").text("Debe escribir un mensaje").show();
    		return false;
    	}
    	else{

    	var time = new Date();
    	var hora = time.getHours();
		var minuto = time.getMinutes();
		var segundo = time.getSeconds();
    	$("#hora").text(hora+":"+minuto+":"+segundo);
    	$("#correo").text(email);

		$("#dialog").attr("title" , "Enviando mensaje");
    	$("#dialog").show();
		$("#dialog").dialog();
		$("#pro").delay(10000).fadeOut(500);
		$("#datos").delay(10000).fadeIn(1000);


    	}
    }

	
	$("#abrirPopup").click(function(){
		abrir();
	});
