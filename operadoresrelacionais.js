/*
var dia = 'sabado'

if (dia == 'sabado'){
    console.log('É sábado');
}else {
    console.log('não é sábado -_-');
}

//// petshop
var petPeso = 7

if (petPeso<4) {
    console.log("Abaixo do Peso")
}else if(petPeso>10){
    console.log("Acima do Peso")
}else {
    console.log("Peso normal")
}
*/

function saudacaoPessoa1 (nomePessoa="wagner"){
       
    console.log('Olá' + nomePessoa)///codigo aqui
}

saudacaoPessoa();

function saudacaoPessoa (nomePessoa,idade){
       
    console.log('Olá! me chamo ' + nomePessoa +' e tenho '+idade)///codigo aqui
}

saudacaoPessoa("Wagner",38);

/* //// função triplo
function  dobro(numero) {
   return 2 * numero;
}
*/
function triplo (numero) {
    return 3 * numero;
 }


function soma(a,b){
var resultado = a+b
    return (resultado)
}
console.log(soma(23,4))




function verificaUsuario(statusUsuario){
   if (statusUsuario){
   console.log("usuario cadastrado")
   }else{
       console.log("Usuario não cadastado")
   }

}
var usuarioCadastrado = true
verificaUsuario(usuarioCadastrado)



var diaSemana = 'sabado'

if (diaSemana != 'domingo' &&  diaSemana != 'sabado'){
    console.log("Você pode ir ao banco")
}else{
    console.log("O banco está fechado")
}