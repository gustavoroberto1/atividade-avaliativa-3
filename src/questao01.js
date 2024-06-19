import leia from 'readline-sync';

var valorCompra = leia.questionFloat("INFORME O VALOR DE COMPRA: ");

if(valorCompra < 20){
    var lucro = valorCompra * (45/100);
    var valorVenda = valorCompra + lucro;
    console.log("VALOR DE VENDA: " + valorVenda);
}else {
    var lucro = valorCompra * 0.30;
    var valorVenda = valorCompra + lucro;
    console.log("VALOR DE VENDA: " + valorVenda);
}
