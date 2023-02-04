//////////////////
//   EDIVÂNIA   //
//     UFPI     //
//   04/02/23   //
//////////////////

var num_secreto = parseInt(Math.random() * 1001 ) // analise como inteiro...
var chute = prompt ("Chute um número entre 0 - 1000: ")

while(chute != num_secreto)
 {
    if (chute > num_secreto)
      alert("Você errou! O número secreto é menor.")

    else
      alert("Você errou! O número secreto é maior.")
   
    var chute = prompt ("Chute um número entre 1 - 1000: ")
  }

alert("Você acertou!")
