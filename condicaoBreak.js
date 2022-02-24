
var listaDeNomes = ["juca","maria","jota"]
var buscar = "juca"
for (let i = 0; i < listaDeNomes.length; i++){
    if (listaDeNomes[i] == buscar){
        console.log('Encontrei o nome');
    break;
    }
}

function bomdiaaluno(array){
//var testando
for (var i = 0; i < array.length; i++){
    console.log("bom dia, " + array[i])
}

}

var aluno = ["jota","santos"]
bomdiaaluno(aluno)


var listaDeCarros=["Fox","Uno","Gol","Astra","Fiesta"]
for (var i=0; i< listaDeCarros.length; i++){
    console.log("Nome do Carro : "+listaDeCarros[i])
}


/*

function somaMaioresQue5(numero){
    var total = 0
    for(var i = 1; i <= numero; i++){
      if(i > 5){
        total = total + i
      }
    }
    return total
  }
  
  console.log(somaMaioresQue5(30))
  
*/
