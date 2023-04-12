const btnNext = document.getElementById("btnEnviar")
const inputCidade = document.getElementById("txtCidade")
const form = document.getElementById("form")
const inputBairro = document.getElementById("txtBairro")
const textArea = document.getElementById("txtDetalhes")
const inputArq = document.getElementById("escolherArq")




//btnNext.addEventListener("click", () => {})

function enviar(){
    alert("Sua denuncia foi enviada com sucesso!!")
}

function testarCampos(){
    if(inputBairro.value != "" && inputCidade.value != "" && textArea.value != ""){
        window.location.href = 'pagina2.html'
    }else{
        alert("Preencha todos os campos")
    }
}