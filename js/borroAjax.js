/*  function liquidoMensajeOk(){
    var captoDatoModificar = document.querySelector("#mandadoOKK");
    captoDatoModificar.classList.add('anularPantalla');
    console.log("ya cargó la función asincrona para eliminar elemento html con una clasesita");
}
setTimeout(function(){
    captoDatoModificar.classList.add('anularPantalla');
}, 9000); */



/* function liquidoMensajeOk(){

    //var captoDatoModificar = document.querySelector("#mandadoOKK");
   // captoDatoModificar.classList.add('anularPantalla');
    console.log("ya cargó la función asincrona para eliminar elemento html con una clasesita");
}
function llamoTemporizador(){
    setTimeout(liquidoMensajeOk, 9000);
}

 */



function eliminarMensaje() {
    var mensajeEnviado = document.querySelector("#mandadoOKK");
    mensajeEnviado.classList.add("anularPantalla");
    console.log("El mensaje se ha eliminado después de 14 segundos");
    setTimeout(eliminarMensaje, 14000);
  }
  
 
    

  