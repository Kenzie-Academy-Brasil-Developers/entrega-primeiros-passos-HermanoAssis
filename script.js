const precoRefri = 11.99
const quantidadeRefri = 3
const precoMacarrao = 6.99
const quantidadeMacarrao = 4
const precoErvilha = 6.99
const quantidadeErvilha = 3
const precoArroz = 22.99
const quantidadeArroz = 3
const precoFeijao = 11.89
const quantidadeFeijao = 2
const precoVinho = 70.00
const quantidadeVinho = 3

const valorTotalRefri = precoRefri * quantidadeRefri
const valorTotalMacarrao = precoMacarrao * quantidadeMacarrao
const valorTotalErvilha = precoErvilha * quantidadeErvilha
const valorTotalArroz = precoArroz * quantidadeArroz
const valorTotalFeijão = precoFeijao * quantidadeFeijao
const valorTotalVinho = precoVinho * quantidadeVinho

const valorTotal = valorTotalRefri + valorTotalMacarrao + valorTotalErvilha + valorTotalArroz + valorTotalFeijão + valorTotalVinho

if(valorTotal % 2 == 0){
    const voce = (valorTotal / 2) - valorTotalVinho;
    const amigo = (valorTotal / 2) + valorTotalVinho;
    alert("O valor total da compra é de: R$" + valorTotal + "\n" + "O meu amigo deverá pagar: R$" + amigo + "\n" +  "Eu tenho que pagar: R$" + voce)
}else{
    const voce = valorTotal / 2;
    const amigo = valorTotal / 2;
    alert("O valor total da compra é de: R$" + valorTotal + "\n" + "O meu amigo deverá pagar: R$" + amigo + "\n" +  "Eu tenho que pagar: R$" + voce)
}
const testar = parseInt(prompt("Você deseja testar com valores dinâmicos?" + "\n" + "1 - Sim" + "\n" + "2 - Não"))
if (testar == 1){
    teste();
}else{
    alert("Ok, tenha um bom dia");
}
// valor total: 387.65
function teste(){
    const precoRefriTeste = parseFloat(prompt("Digite o valor do Refri"))
    const quantidadeRefriTeste = parseInt(prompt("Quantas Unidades ?"))
    const precoMacarraoTeste = parseFloat(prompt("Digite o valor do Macarrão"))
    const quantidadeMacarraoTeste = parseInt(prompt("Quantas Unidades ?"))
    const precoErvilhaTeste = parseFloat(prompt("Digite o valor do Ervilha"))
    const quantidadeErvilhaTeste = parseInt(prompt("Quantas Unidades ?"))
    const precoArrozTeste = parseFloat(prompt("Digite o valor do Arroz"))
    const quantidadeArrozTeste = parseInt(prompt("Quantas Unidades ?"))
    const precoFeijaoTeste = parseFloat(prompt("Digite o valor do Feijão"))
    const quantidadeFeijaoTeste = parseInt(prompt("Quantas Unidades ?"))
    const precoVinhoTeste = parseFloat(prompt("Digite o valor do Vinho"))
    const quantidadeVinhoTeste = parseInt(prompt("Quantas Unidades ?"))

    const total = (precoRefriTeste * quantidadeRefriTeste) + (precoMacarraoTeste * quantidadeMacarraoTeste) + (precoErvilhaTeste * quantidadeErvilhaTeste) + (precoArrozTeste * quantidadeArrozTeste) + (precoFeijaoTeste * quantidadeFeijaoTeste) + (precoVinhoTeste * quantidadeVinhoTeste)
    const precoTotalVinho = precoVinho * quantidadeVinho

    if(total % 2 == 0){
        const voce = (total / 2) - precoTotalVinho;
        const amigo = (total / 2) + precoTotalVinho;
        alert("O valor total da compra é de: R$" + total + "\n" + "O meu amigo deverá pagar: R$" + amigo + "\n" +  "Eu tenho que pagar: R$" + voce)
    }else{
        const voce = total / 2;
        const amigo = total / 2;
        alert("O valor total da compra é de: R$" + total + "\n" + "O meu amigo deverá pagar: R$" + amigo + "\n" +  "Eu tenho que pagar: R$" + voce)
    }
}
       

