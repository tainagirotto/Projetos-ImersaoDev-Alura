var numeroSecreto = parseInt(Math.round(Math.random() * (10 - 1) + 1))
var tentativas = 3
if (numeroSecreto%2 == 0) {
      alert('Dica: O número secreto é um número par')
    } else if (numeroSecreto%2 != 0) {
      alert('Dica: O número secreto é ímpar.')
    }
while (tentativas > 0) {
   var chute = parseInt(prompt("Digite um número de 0 a 10"))
   if (chute > 10) {
  alert('Você digitou um número inválido!')
     tentativas--
     
} else if (numeroSecreto == chute) {
      document.querySelector(".resp").innerHTML =("Parabéns, você acertou!")
     tentativas--
        break
   } else {
     alert("Você errou!")
      tentativas--
   }
}

if (chute != numeroSecreto) {
 document.querySelector(".resp").innerHTML = ( "Suas tentativas acabaram! O número secreto era: " + numeroSecreto) 
  }
  
    