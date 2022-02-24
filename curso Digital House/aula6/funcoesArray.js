// let numeros = [1, 2, 3, 5];

// let numeroDobrados = numeros.map( (numero) => {    //no map para cada indece executador
//      return numero * 2
// })

// console.log(numeros)
// console.log(numeroDobrados)



let numeros = [1, 2, 3, 5];
let numeroDobrados = numeros.map( (numero, indice) => {    //no map para cada indece do array executador
     console.log(`valor é : ${numero} e posição: ${indice}`)
     return numero * 2
})

console.log(numeros)
console.log(numeroDobrados)