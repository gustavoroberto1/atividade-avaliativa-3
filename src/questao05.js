import leia from 'readline-sync'

var A = leia.questionInt("INFORME VALOR LADO A: ");
var B = leia.questionInt("INFORME VALOR LADO B: ");
var C = leia.questionInt("INFORME VALOR LADO C: ");

var checkA = A < (B + C);
var checkB = B < (A + C)
var checkC = C < (A + B)

if(checkA && checkB && checkC){
    if(A === B && B === C && A === C){
        console.log("EQUILATERO");
    }else if(A !== B && B !== C && A !== C){
        console.log("ESCALENO")
    }else {
        console.log("ISOSCELES")
    }
}else {
    console.log("VALORES SÃO INVÁLIDOS!!!");
}