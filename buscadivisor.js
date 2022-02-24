/*
function buscarDivisivelPor(array, num)
{
  for (var i=0;  i < array.length; i++)
  if (i % 2 == 0){
    console.log("número válido encontrado!" + i);
  //  }else {
  //  console.log("Nenhum número válido encontrado!");
   // break
  }
}
buscarDivisivelPor ([1,2,3,4,5],2)



function buscarDivisivelPor(array, num)
{
  for (var i=1;  i < array.length; i++)
  if (i % num == 0){
    console.log("número válido encontrado!" + i);
  //  }else {
  //  console.log("Nenhum número válido encontrado!");
   // break
  }
}
buscarDivisivelPor([1,2,3,4,5,6,7,8,],2)





/*
function buscarDivisivelPor(array, num)
{
  for (var i=1;  i < array.length; i++)
  if (array[i] % num == 0){
    console.log("número divisivel encontrado é: " + array[i]);
    }else{
  return console.log("Nenhum número válido encontrado!")
  }
}
buscarDivisivelPor([1,2,3,4,5,6,7,8,],4)
*/
function buscar(array, num) {  
    for ( var i = 0; i < array.length; i++) {
      if( (array[i] % num ) && (!0) ){
        console.log(array[i])
        break
      } else {
        console.log("Nenhum número válido encontrado!")
      }
    }    
  }
  buscar([1,2,3,4,5,6,7,8,],2)

function buscarDivisivel(array, num){      
  for(var i=0; i<array.length;i++){     
     if (array[i] % num == 0) {         
     console.log("número divisivel encontrado é: " + array[i])
      } else {
        console.log("numero nao encontrado!")
      }         
   } 
  }

buscarDivisivel([1,2,3,4,5,6,7,8,],2)