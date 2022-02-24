let pessoa  = {                                 //forin tras os atributos de um objeto
    nome: 'Xuxinha',
    idade: 50
}

for (let atributo in pessoa){
console.log(`${atributo}: ${pessoa[atributo]}`)

}