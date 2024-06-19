import leia from 'readline-sync'

var n1 = leia.questionFloat("NOTA 1: ");
var p1 = leia.questionFloat("PESO 1: ");

var n2 = leia.questionFloat("NOTA 2: ");
var p2 = leia.questionFloat("PESO 2: ");

var n3 = leia.questionFloat("NOTA 3: ");
var p3 = leia.questionFloat("PESO 3: ");

var mp = ((n1*p1)+(n2*p2)+(n3*p3))/(p1+p2+p3);

console.log("MEDIA PONDERADA É: " + mp)