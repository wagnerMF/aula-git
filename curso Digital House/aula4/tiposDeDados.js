// tipos de dados
const nome = 'Wagner Rodrigues';
const ehFeminino = true;
const idade = 25;
const salario = 1.212;
const frutas = ['Maça', 'Pera', 'Uva', 'Banana'];
const informacoes = [nome, ehFeminino, idade, salario, frutas];
const pessoa = {idade: 40, peso: 90, nome: 'Wagner', email: 'teste@teste.com'} //maneiras de atribuir um objeto

//maneira de altear um atributo de objeto quando se usa chave
pessoa.email = 'email@gmail.com' 
pessoa.idade = 85;
//console.log(nome);
//console.log(ehFeminino);
//console.log(idade);
//console.log(salario);
console.log('Lista de frutas: '+ frutas + ' | minha idade é: ' + pessoa.idade);

//frutas.push(pessoa)
//console.log(frutas)

//console.log(informacoes);
//console.log(pessoa);