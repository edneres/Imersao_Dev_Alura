//////////////////
//   EDIVÂNIA   //
//     UFPI     //
//   04/02/23   //
//////////////////

var num_secreto = parseInt(Math.random() * 1001 ) // analise como inteiro...

while (num_secreto == 0)  // Elimina o 0
  num_secreto = parseInt(Math.random() * 1001 ) 

var cont = 0
var chute = prompt ("Chute um número entre 1 - 1000: ")

while(chute != num_secreto)
 {
    cont++
   
    if (chute > num_secreto)
      alert("Você errou! O número secreto é menor que " + chute + ".\n" + "Chute(s): " + cont)

    else
      alert("Você errou! O número secreto é maior que " + chute + ".\n" + "Chute(s): " + cont)
   
    var chute = prompt ("Chute um número entre 1 - 1000: ")
  }

alert("Você acertou com " + (cont++) + " chutes!")
