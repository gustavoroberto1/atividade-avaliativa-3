import leia from 'readline-sync'

var nota = leia.questionFloat("INFORME A NOTA: ");

if(nota > 10.0 || nota < 0.0){
    console.log("NOTA INVALIDA!")
}else {
    if(nota >= 9.0){
        console.log("CONCEITO A");
    }else if(nota >= 8.0){
        console.log("CONCEITO B")
    }else if(nota >= 7.0){
        console.log("CONCEITO C")
    }else if(nota >= 6.0){
        console.log("CONCEITO D")
    }else {
        console.log("CONCEITO F")
    }
}
