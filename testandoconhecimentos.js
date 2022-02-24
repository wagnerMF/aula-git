var moradores = [
    "Fulano de Tal",                 // = 0
    "Beltrano da Cia",               // = 1      
    "Viajante do Tempo",             // = 2
    "Morador da Lua",                // = 3
    "Marciano Azul",                 // = 4
    "Et da Eslováquia",              // = 5
    "Jedi do Lado Cinza da Força",   // = 6
    "Baby Yoda Amarelo"              // = 7
]
 for (var i=0; i < moradores.length; i++){
        if (i % 2 == 0){
            
            console.log('O morador ' + moradores[i]  + 'pode usar o elevador');
        }
 }