
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


var frase = "Esse alimento se chama: " + alimentos[0]
console.log (frase)


function tabuada(){
    for (var index = 0; index < 11; index++){
        var contador = 7 * index;
        console.log("tabuada do 7 x " +index +' = '+ contador)
    }

}
*/
var moradores = [
    "Fulano de Tal",    "Beltrano da Cia",    "Viajante do empo",    "Morador da Lua",    "Marciano Azul",    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",    "Baby Yoda Amarelo"]

for (i = 0; i < moradores.length; i++){
    if (moradores[i] %2 ==0){
        console.log('O morador ' + moradores[i] + 'pode usar o elevador')
    }
}