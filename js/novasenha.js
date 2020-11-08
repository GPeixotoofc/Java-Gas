


var email = document.getElementById('email');


// Validar o preenchimento dos campos
function validarCampos() {

    if (email.value.length == 0) {

        alert("Email não preenchido.");

    }else {
		alert("Email Enviado com Sucesso !!!!");
        location = 'loginVendedor.html';
		
    }

}
function validarCampos2() {

    if (email.value.length == 0) {

        alert("Email não preenchido.");

    }else {
		alert("Email Enviado com Sucesso !!!!");
        location = 'loginMercado.html';
		
    }

}



// Mostrar/Esconder Senha
var checkboxPass = document.getElementById('checkboxPass')
var checkboxSpan = document.querySelector(".checkboxControl span")
checkboxSpan.innerHTML = 'Mostrar senha'

checkboxPass.addEventListener('click', function(){
    if (senha.type === "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
})

