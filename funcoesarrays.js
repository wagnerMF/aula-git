/*
var frutas=["banana","uva","maçã","laranja"]
var ultimafruta = frutas.pop()
console.log (frutas)
*/
/*
var frutas=["banana","uva","maçã","laranja"]
frutas.push("Goiaba")
console.log (frutas)
*/
/*
var frutas=["banana","uva","maçã","laranja"]
console.log (frutas.indexOf('maçã'))

function estavaPresenteNaAula (nomesDosPresentes=["Joao","Paulo","Maria"]){
    var nomeDoAluno = "Joao"   
    if (nomesDosPresentes.indexOf(nomeDoAluno)!= -1){
        console.log(nomesDosPresentes.IndexOf(nomeDoAluno))
        return true
       }
       console.log(nomesDosPresentes.IndexOf(nomeDoAluno))
       return false //console.log(nomesDosPresentes.IndexOf("juca"))
}
estavaPresenteNaAula(nomeDoAluno);

*/

var comidasFavoritas=["feijoada","Pizza","File de frango"]
var numerosSorteados=[12,45,56,324,452]
console.log(comidasFavoritas[1]+ ' / ' +comidasFavoritas[2] + ' | numero sorteado multiplado por 2x56 é = '+ numerosSorteados[2]*2 )


var listaDeAlun = ["Tani","Alua","Desa"]
//console.log(listaDeAlun[0])
//console.log(listaDeAlun[1])
//console.log(listaDeAlun[2])

//console.log(listaDeAlun.length)


listaDeAlun.push("rafael") //insere
console.log(listaDeAlun)

var alunoremovido = listaDeAlun.pop()      //remove o ultimo elemento do array
console.log(alunoremovido)



