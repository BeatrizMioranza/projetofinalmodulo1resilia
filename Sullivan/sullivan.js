var respostaCorreta;
var mensagem;
var respostaUsuario;
var resposta
var proxFase
var respostaCerta
var vida = 2

function respostaPartUm(portaUm, portaDois) {
    var resposta = prompt("Escolha sua porta\n A - Porta Rosa\n B - Porta Verde")
    if (resposta.toLowerCase() == "a") {
        window.location.href = portaUm
    } else {
        (resposta.toLowerCase() == "b")
        window.location.href = portaDois
    }

}

function respostaCorreta(pergunta, proxPaginaUm, proxPaginaDois, caminhoUm, caminhoDois, gameOver) {
    while (!false) {
        if (vida <= 0) {
            alert("Game Over")
            window.location.href = gameOver
            break
        }
        var respostaUsuario = prompt(pergunta);
        if (respostaUsuario.toLowerCase() == caminhoUm) {
            var proxFase = proxPaginaUm
            var respostaCerta = "a"
            window.location.href = proxPaginaUm
            break
        } else if (respostaUsuario.toLowerCase() == caminhoDois) {
            var proxFase = proxPaginaDois
            var respostaCerta = "b"
            window.location.href = proxPaginaDois
            break
        } else{ 
            vida--
            alert(`Tente Novamente\nSuas vidas são: ${vida}`)
        }
    }
}

