<?php 
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $celular = $_POST["celular"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    $captcha = $_POST["captcha"];
    $validoNombre = is_string($nombre);
    if(empty($nombre) || empty($apellido) || empty($celular) || empty($email) || empty($mensaje)){
            echo '<p class="enviadoError text-center"><i class="fa-solid fa-hand"></i> Error, todos los campos deben estar correctamente completados.</p>';
    }elseif($captcha == "1RKZ453DA"){
            $destino = "nob32_2@hotmail.com";
            $asunto = "Formulario de contacto de debuenacepa.com.ar";
            $message = "Hola doctor, este mensaje viene del formulario de su sitio web";
            $web = "\nRegresar a página principal: www.debuenasalud.com.ar";
            $contenido = "Nombre: " . $nombre . "\nApellido: " . $apellido ."\nCelular: " . $celular . "\nEmail: " . $email . "\nMensaje: " . $mensaje  . $web;
            mail($destino, $celular, $contenido , $message);
            echo '<p class="enviadoOk text-center" id="mandadoOKK"><i class="fa-solid fa-thumbs-up"></i> Formulario envíado correctamente... pronto le responderemos, revise los correos no deseados.</p>';
            echo '<script>console.log("Hola ya se mandó");</script>';
    }else{
            echo '<p class="enviadoError text-center"><i class="fa-solid fa-hand"></i> Error, su formulario no ha sido enviado, el captcha debe estar correctamente ingresado.</p>';
    }
 ?>