
function converter(){
  
    var valorDolar = document.querySelector (".dolar").value
    var resultado = parseFloat(valorDolar) * 5.50
  
   document.querySelector(".resultado").innerHTML =  'O valor em real é: R$ '+ resultado.toFixed(2)
      
  }
    