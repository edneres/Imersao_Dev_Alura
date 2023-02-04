//////////////////
//   EDIVÂNIA   //
//     UFPI     //
//   04/02/23   //
//////////////////

var num_secreto = parseInt(Math.random() * 1001 ) // analise como inteiro...

while (num_secreto == 0)  // Elimina o 0
  num_secreto = parseInt(Math.random() * 1001 ) 

var cont = 6
var chute = prompt ("Chute um número entre 1 - 1000: ")

while(chute != num_secreto)
 {
    if(cont == 0)
      break
   
    cont-- 
    
    if (chute > num_secreto)
      alert("Você errou! O número secreto é menor que " + chute + ".\n" + "Chace(s): " + cont)

    else
      alert("Você errou! O número secreto é maior que " + chute + ".\n" + "Chace(s): " + cont)
   
    var chute = prompt ("Chute um número entre 1 - 1000: ")
  }

if(cont == 0)
  alert("Não há mais chances! Você perdeu...")
else
  alert("Você acertou faltando " + (cont++) + " chutes!")
