$(document).ready(function () {

    $("#form-login").submit(function (event) {

        event.preventDefault();
        autenticarUsuario();
    });

    $("#form-register").submit(function (event) {

        event.preventDefault();
        registrarUsuario();
    });

    $("#form-registerPlan").submit(function (event) {

        event.preventDefault();
        registrarUsuario();
    });



});

function autenticarUsuario() {

    let id_usuario = $("#id_usuario").val();
    let contrasena = $("#contrasena").val();

    $.ajax({
        type: "GET",
        dataType: "html",
        url: "./ServletUsuarioLogin",
        data: $.param({
            id_usuario: id_usuario,
            contrasena: contrasena
        }),
        success: function (result) {
            let parsedResult = JSON.parse(result);
            if (parsedResult != false) {
                $("#login-error").addClass("d-none");
                let id_usuario = parsedResult['id_usuario'];
                document.location.href = "home.html?id_usuario=" + id_usuario;
            } else {
                $("#login-error").removeClass("d-none");
            }
        }
    });
}
function registrarUsuario() {

    let id_usuario = $("#input-id_usuario").val();
    let contrasena = $("#input-contrasena").val();
    let contrasenaConfirmacion = $("#input-contrasena-repeat").val();
    let nombre = $("#input-nombre").val();
    let apellidos = $("#input-apellidos").val();
    let email = $("#input-email").val();
    let direccion = $("#input-direccion").val();
    let ciudad = $("#input-ciudad").val();
    let telefono = $("#input-telefono").val();
    

    if (contrasena == contrasenaConfirmacion) {

        $.ajax({
            type: "GET",
            dataType: "html",
            url: "./ServletUsuarioRegister",
            data: $.param({
                id_usuario: id_usuario,
                contrasena: contrasena,
                nombre: nombre,
                apellidos: apellidos,
                email: email,
                direccion: direccion,
                ciudad: ciudad,
                telefono: telefono
                                
            }),
            success: function (result) {
                let parsedResult = JSON.parse(result);

                if (parsedResult != false) {
                    $("#register-error").addClass("d-none");
                    let id_usuario = parsedResult['id_usuario'];
                    document.location.href = "home.html?id_usuario=" + id_usuario;
                } else {
                    $("#register-error").removeClass("d-none");
                    $("#register-error").html("Error en el registro del usuario");
                }
            }
        });
    } else {
        $("#register-error").removeClass("d-none");
        $("#register-error").html("Las contraseñas no coinciden");
    }
}

/*
function registrarDestino() { //Metodo creao por mi

    let id_destino = $("#input-id_destino").val();
    let planes = $("#input-planes").val();
    //let contrasenaConfirmacion = $("#input-contrasena-repeat").val();
    let precio = $("#input-precio").val();
    let ciudad = $("#input-ciudad").val();
    //let email = $("#input-email").val();
    //let direccion = $("#input-direccion").val();
    //let ciudad = $("#input-ciudad").val();
    //let telefono = $("#input-telefono").val();
    

    //if (contrasena == contrasenaConfirmacion) {

        $.ajax({
            type: "GET",
            dataType: "html",
            url: "./ServletDestinoRegister",
            data: $.param({
                id_destino: id_destino,
                planes: planes,
                precio: precio,
                ciudad: ciudad
                //email: email,
                //direccion: direccion,
                //ciudad: ciudad,
                //telefono: telefono
                                
            }),
            success: function (result) {
                let parsedResult = JSON.parse(result);

                if (parsedResult != false) {  //las varaibles register que estaban se cambió por registrar
                    $("#registerPlan-error").addClass("d-none");
                    let id_destino = parsedResult['id_destino'];
                    document.location.href = "home.html?id_destino=" + id_destino; //home.html luego registerPlan.html
                } else {
                    $("#registerPlan-error").removeClass("d-none");
                    $("#registerPlan-error").html("Error en el registro del Plan/Destino");
                }
            }
        });
    //} //if
    /*else {
        $("#registerPlan-error").removeClass("d-none");
        $("#registerPlan-error").html("Las contraseñas no coinciden");
    }*/

//}*/

