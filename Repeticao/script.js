var opção = prompt("Digite o algum nome, numero ou caracter desejada: ")

botao1.onclick = function() {
    var qtde = Number(quantidade.value);

    while (qtde > 0)
    {// Bloco
        var novoH2;
        novoH2 = document.createElement("H2");
        novoH2.textContent = opção;
        document.body.appendChild(novoH2);
        qtde = qtde - 1;
    }
}