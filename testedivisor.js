/*
function buscarDivisivel(array, num){      
  for(var i=0; i< array.length;i++){     
     if (array[i] % num == 0) {         
     console.log("número divisivel encontrado é: " + array[i])
      } else {
        console.log("numero nao encontrado")
      }         
   } 
  } ///ss

buscarDivisivel([1,2,3,4,5,6,7,8,],3)
*/

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