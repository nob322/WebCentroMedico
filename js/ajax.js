
var resultado = document.querySelector("#info");
function ajax_post(event){
    event.preventDefault();//evita que la página se recargue al envíar el formulario
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();

    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellido").value;
    var celular = document.querySelector("#celular").value;
    var email = document.querySelector("#email").value;
    var mensaje = document.querySelector("#mensaje").value;
    var captcha = document.querySelector("#captcha").value;
    var informacionDelUsuario = "nombre=" + nombre + "&apellido=" + apellido + "&celular=" + celular + "&email=" + email + "&mensaje=" +  mensaje+ "&captcha=" +  captcha;
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            //console.log(this.responseText);
            var mensaje = xmlhttp.responseText;
            resultado.innerHTML = mensaje;
        }
    }
    xmlhttp.open("POST", "procesador/procesa.php", true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(informacionDelUsuario);
}




