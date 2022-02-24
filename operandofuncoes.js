/*function somando (numeroA,numeroB){
    var resultado = numeroA + numeroB;  
    console.log('sua nota é: '+resultado);
    return resultado
}
somando (2,2); //resposta: 4

function somando (numeroA,numeroB,nomedoaluno="Wagner"){
    var resultado = numeroA * numeroB;  
    console.log('Aluno: '+nomedoaluno +'| sua nota é: '+resultado);
    //return resultado
}

somando (2,2);



function saudacao (){
    console.log('Olá, seja bem vindo!')
}
saudacao();

function cartaoDeVisitas ( nome="Wagner Santos", sobrenome = "Rodrigues"){
    //var nome='Wagner';
    //var sobrenome = 'Rodrigues'
    resultado = nome +' '+ sobrenome
    console.log(resultado)
    //return resultado
}
cartaoDeVisitas();



function somando (numeroA,numeroB,nomedoaluno="Wagner"){
    var resultado = numeroA * numeroB;  
    console.log('Aluno: '+nomedoaluno +'| sua nota é: '+resultado);
    //return resultado
}
somando(7,5);

function autonomia (quantidadeDeCombustivel, rendimento){
    var total = quantidadeDeCombustivel * rendimento;
    console.log (total);
}
autonomia(120,5);

function soma(numeroA, numeroB){
    return numeroA + numeroB
    console.log()
}
soma(10,205);
*/
/*
function calculaValorDevido(pesoDaRoupaSuja){
    var valorTotal = pesoDaRoupaSuja*5;
    console.log(valorTotal);       
}
calculaValorDevido(12);
*/


const somar = (n1,n2,operacao) => n1 + n2;
const subtrai = (n1,n2,operacao) => n1 - n2;
const dividi = (n1,n2,operacao) => n1 / n2;
const multiplica = (n1,n2,operacao) => n1 * n2;

const calculadorora1 = (n1,n2, operacao) => operacao (n1, n2);
const calculadorora2 = (n1,n2, operacao) => operacao (n1, n2);
const calculadorora3 = (n1,n2, operacao) => operacao (n1, n2);
const calculadorora4 = (n1,n2, operacao) => operacao (n1, n2);

console.log(calculadorora1(10, 20, somar));
console.log(calculadorora2(10, 20, subtrai));
console.log(calculadorora3(10, 20, dividi));
console.log(calculadorora4(10, 20, multiplica));
//console.log(calculadorora(10, 20, (n1, n2) => n1-n2));
//console.log(calculadorora(10, 20, (n1, n2) => n1*n2));
//console.log(calculadorora(10, 20, (n1, n2) => n1/n2));