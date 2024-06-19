import leia from 'readline-sync';

var ano = leia.questionInt("INFORME O ANO: ");

if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
    console.log("BISSEXTO");
}else {
    console.log("NÃO É BISSEXTO");
}