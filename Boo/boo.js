var respostaCorreta;
var respostaErrada;
var mensagem;
var respostaUsuario;
var vida = 2

function respostaCorreta(pergunta, respostaCorreta, mensagem) {
    while (!false) {
        if (vida <= 0) {
            alert("Game Over")
// windowns.location
            break
        }
        var respostaUsuario = prompt(pergunta);
        if (respostaUsuario.toLowerCase() == respostaCorreta) {
            alert(mensagem);
            return true
            break
        } else {
            vida--
            alert(`Tente Novamente\nSuas vidas são: ${vida}`);
        }
    }

}
