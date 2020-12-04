$(function(){
    var cadena="";
    for(var i=1; i<10;i++){
        cadena+="Valor de i = " + i + "<br />";
    }
    cadena+='<button id="btnpresion"> Presioina...</button>';
    $("#numeros").html(cadena);

    
    $("#mcasillas").click(function(){
        var cal = "";
        calificacioneseleccion = $("#txtcalif").val();
        for(var j=0;  j<calificacioneseleccion; j++){
            cal+='<input type="text" name="cal'+j+'" id="cal'+j+'" placeholder="calificacion '+ j + '" ><br>';
        }   
        $("#calificaciones").html(cal);
    });
  

    $("form").submit(function(event){
        event.preventDefault();
        var cjson = $(this).serializeArray();
        alert("se detuvo el envio..." + cjson);
        console.log(cjson);
    });
});