import leia from 'readline-sync'

var valorHora = leia.questionFloat("INFORME VALOR DA HORA: ");
var qtdHoras = leia.questionFloat("INFORME QTD DE HORAS TRABALHADAS: ");
var percentualDes = leia.questionFloat("INFORME PERCENTUAL DESCONTO: ");

var sb = valorHora * qtdHoras;
console.log("SALARIO BRUTO: " + sb);

var des = sb * (percentualDes / 100)  
console.log("VALOR DO DESCONTO: " + des);

var sl = sb - des;
console.log("SALARIO LIQUIDO: " + sl);

