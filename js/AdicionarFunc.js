var btnCadastrar = document.getElementById('cadastrar');
var form = document.getElementById('form-func');
var arrayProd = [];
var ultimo = [];
var ValId = 0;

btnCadastrar.addEventListener('click', function () {

    var arr = JSON.parse(localStorage.getItem('tblFuncionarios')) || [];
    var diff = arr.length;

    if (diff > 0) {
        arrayProd = [];

        for (let i = 0; i < arr.length; i++) {
            arrayProd.push(arr[i]);
        }

        ultimo = JSON.parse(arr[diff - 1]);
        ValId = parseInt(ultimo.id);
        ValId += 1;

        localStorage.clear();
    }

    let nome = form.Nome.value;
    let cpf = form.Cpf.value;
    let func = form.Func.value;
    let sal = form.Sal.value;
	 let tele = form.Tele.value;
	 let datanasc = form.dataNasc.value;
	 	 let email = form.Email.value;
	 	 let dataadm = form.dataAdm.value;
	 	 let cidade = form.Cidade.value;
		 let rua = form.Rua.value;
		 let num = form.Num.value;
		 let cep = form.Cep.value;
		 let status = form.Status.value;

    var prod = JSON.stringify({
        id: ValId,
        Nome: nome,
        Cpf: cpf,
        Func: func,
        Sal: sal,
		Tele: tele,
		dataNasc: datanasc,
		Email: email,
		dataAdm: dataadm,
		Cidade: cidade,
		Rua: rua,
		Num: num,
		Cep: cep,
		Status: status,
    });

    arrayProd.push(prod);
    localStorage.setItem("tblFuncionarios", JSON.stringify(arrayProd));

    alert("Funcionário Registrado Com Sucesso!");
	  location = './funcionarios.html';

    form.Nome.value = "--";
    form.Cpf.value = "--";
    form.Func.value = "";
    form.Sal.value = "";
	form.Tele.value = "";
	form.dataNasc.value = "";
	form.Email.value = "";
	form.dataAdm.value = "";
	form.Cidade.value = "";
	form.Rua.value = "";
	form.Num.value = "";
	form.Cep.value = "";
	form.Status.value = "";
});

var btnCancel = document.getElementById('cancel');

btnCancel.addEventListener('click', () => {
    location = 'funcionarios.html';
})




function mascaraCPF() {


    if (Cpf.value.length == 3 || Cpf.value.length == 7) {
        Cpf.value += ".";
    } else if (Cpf.value.length == 11) {
        Cpf.value += "/";
    } 
}


function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('Rua').value = ("");
    document.getElementById('Bairro').value = ("");
    document.getElementById('Cidade').value = ("");
    document.getElementById('Uf').value = ("");
    document.getElementById('Ibge').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('Rua').value = (conteudo.logradouro);
        document.getElementById('Bairro').value = (conteudo.bairro);
        document.getElementById('Cidade').value = (conteudo.localidade);
        document.getElementById('Uf').value = (conteudo.uf);
        document.getElementById('Ibge').value = (conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('Rua').value = "...";
          
            document.getElementById('Cidade').value = "...";


            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};



