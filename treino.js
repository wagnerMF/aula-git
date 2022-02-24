/*
var idade = 38
var comidasFavoritas = ['feijoada','pizza','file de frango']
var numerosSorteados = [12,45,56,324,452]
var sobrenome = "wagner"
var salarioMinimo = 120.5 
var logradouro = 'rua alfredo amieiro, nº 144'
var bairro = 'Cipó'
var enderecoCompleto = logradouro + ' - ' + bairro
var umNumero = 124


let outroNumero = umNumero + 1 ;
console.log(outroNumero)


console.log('Me chamo: ' + sobrenome +' | minha idade é: ' + idade+' anos' +
' | meu salário minímo é: '+ salarioMinimo)
//console.log('Me chamo: ' + nome +'| minha idade é: ' + idade+' anos')
console.log('nº sorteador são: '+numerosSorteados[0]+' e '+numerosSorteados[3])
console.log(enderecoCompleto)
*/


var data = [];
// ...
data[0] = { "ID": "1", "Status": "Valid" };
data[1] = { "ID": "2", "Status": "Invalid" };
// ...
var tempData = [];
for ( var index=0; index<data.length; index++ ) {
    if ( data[index].Status == "Valid" ) {
        tempData.push( data );
        console.log (data = tempData);
    }
}

