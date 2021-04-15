var primeiroValor = parseInt(prompt('Digite o primeiro valor: '))

var segundoValor = parseInt(prompt('Digite o segundo valor: '))

var operacao = prompt("Digite: \n 1 para fazer uma divisão \n 2 para multiplicação \n 3 para soma \n 4 para subtração.")

if (operacao == 1) {
  var divisao = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = "+ divisao + "</h2>")
} else if (operacao == 2) {
  var multi = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = "+ multi + "</h2>")
} else if (operacao == 3) {
  var soma = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = "+ soma + "</h2>")
} else if (operacao == 4) {
  var sub = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = "+ sub + "</h2>")
} else {
 document.write ("<h2>inválido</h2>")
}
