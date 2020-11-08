var arrayFunc = [];
var ultimo1 = [];
var form = document.getElementById('form-func');
var btnedit = document.getElementById('editar');

btnedit.addEventListener('click', function () {

    arrayProd= [];
    var arr = JSON.parse(localStorage.getItem('tblFuncionarios')) || [];
	 ultimo1 = JSON.parse(localStorage.getItem('EditarFunc')) || [];
    




    ultimo1.id = ultimo1.id;
	ultimo1.Nome = form.Nome.value;
	ultimo1.Cpf = form.Cpf.value;
    ultimo1.Func = form.Func.value;
	ultimo1.Sal= form.Sal.value;
	ultimo1.Tele = form.Tele.value;
	ultimo1.dataNasc = form.dataNasc.value;
	ultimo1.Email = form.Email.value;
	ultimo1.dataAdm = form.dataAdm.value;
	ultimo1.Cidade = form.Cidade.value;
	ultimo1.Rua = form.Rua.value;
	ultimo1.Num = form.Num.value;
	ultimo1.Cep = form.Cep.value;
	ultimo1.Status = form.Status.value;				



    for(let j = 0; j<arrayProd.length; j++){
        if(j == ultimo1.id){
            arrayFunc[j] = JSON.stringify(ultimo1);
        }
    }

    localStorage.setItem("EditarFunc", JSON.stringify(arrayProd));
    alert("Funcionário Alterado com Sucesso!");
    location = './funcionarios.html';

});

//voltando para a pagina principal
var btncancelar = document.getElementById('cancelar');

btncancelar.addEventListener('click', ()=>{
    location = 'funcionarios.html';
});