let nome = "Luccascgs";
let email;
let mensagem;

alert(`Seja bem-vind@!\n${nome}`)
function HandleNome() {
    nome = document.getElementById("nome").value;
}
function HandleEmail() {
    email = document.getElementById("email").value;
}
function HandleMensagem() {
    mensagem = document.getElementById("mensagem").value;
}

function MudarTema() {
    document.body.classList.toggle('light');
}
function SubmitForm() {
    alert(`Formulario enviado com sucesso!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`)
}
