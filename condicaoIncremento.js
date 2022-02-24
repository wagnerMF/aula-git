
/*
for (var i = 0; i < 5; i++ ){

}
*/

/*for (var i = 0; i < 5; i++ ){
   console.log('ola mundo...' + i)
}*/
/*
//loop
for (var index = 1; index <= 10; index++){
    console.log("Dia" + index)
}

//tabuada
for (var index = 1; index <= 10; index++){
    var contador = 7 * index;
    console.log("tabuada do 7 x " +index +' = '+ contador)
}

//loop
for (var index = 1; index <= 7; index++){
    console.log("Bom dia Grupo!")
}

function imprimir5Vezes(){
  for (var contador = 1; contador <= 5; contador++)
    console.log('Estou Aprendendo Loops')
}
imprimir5Vezes();

function tabuada(){
for (var index = 1; index <= 10; index++){
    var contador = 7 * index;
    console.log("tabuada do 7 x " +index +' = '+ contador)
}
}
tabuada();

function listaAlimentos(){
var alimentos = ["Pao","Leite","Cafe","Queijo"]
 for (let i = 0; i < alimentos.length; i++){
    console.log("Esse alimento se chama: " + alimentos[i])
 }
}
listaAlimentos();


function superHerois(){
var secrets_Id = ['Bruce Willes','Jon Travolta','Rambo','Home Aranha','Batman']
 for (var i=0; i < secrets_Id.length; i++){
    console.log(secrets_Id[i])
 }
}
superHerois();

function frotaDeVeiculos(){
var automoveis = ["corsa","Gol","Jipe","Fusca"]
for (var i=0; i < automoveis.length; i++){
    console.log (automoveis[i]) 
 }
}
frotaDeVeiculos();

*/
/*
var listaDeLucro = [100,30,300,-10,600,10];
var lucroTotal=0;

for (var i=0; i < listaDeLucro.length; i++){
    lucroTotal += listaDeLucro[i];
}
console.log(lucroTotal)


var arr = [1,2,3,4,5,6,7,8,9,10];
var soma = 0;
for(var i = 0; i < arr.length; i++) {
    soma += arr[i];
}
console.log(soma);


// % 2 == 0 //para saber se um numero é par
function osPares(){
    for (var i=1; i <=6; i++){
        if (i % 2 == 0){
            console.log("O numero " + i + " é par")
        }
    }
}
osPares();


var alunos = ["Ana", "Julia", "Bento", "Lucas"]
console.log('Total de: '+alunos.length)

var alunos = ["Carlos", "Paulo", "Sergio", "Ronaldo"]
for (var index=0; index < alunos.length; index++){
    console.log('Total de: '+alunos[index])
}

function imprimiAzul(qtde){
    for (var i=0; i< qtde; i++){
        console.log("Azul")
    }
}
imprimiAzul(4);

function repeticao(texto,qtderepetida){
    for (var i=1;i<=qtderepetida; i++){
        console.log(texto)
    }
}
repeticao("oi",4)

function somaDosPares(num){
    var total = 0;
    for (var i=0; i <= num; i++){
        if (i % 2 == 0){
            total = total + i
        }

    }
      //return total;
      console.log(total);
}
somaDosPares(4)
*/
/*
var bomDia = "Bom dia"
bomDia.toUpperCase()
console.log(bomDia)



var precoTubaina = 3.50
var precoGuarana = 4.50

console.log(Math.min(precoTubaina,precoGuarana))
//////----------------------------------------------------
var precoTubaina = 3.50
var precoGuarana = 4.50

console.log(Math.max(precoTubaina,precoGuarana))

*/

let estrangeiro = true;
if (estrangeiro){
    console.log("Você poderia apresentar seu RNE, por favor?")
}else {
    console.log("Você poderia apresnetar seu CPF, por favor?")
}