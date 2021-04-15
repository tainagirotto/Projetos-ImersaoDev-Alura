var carta1 = {
    nome: "Neymar",
    imagem:
      "https://medias.cnnbrasil.com.br/neymar-comemora-gol-contra-o-olympique-lyonnais.jpeg?format=JPEG&image=https://mediastorage.cnnbrasil.com.br/IMAGES/00/00/00/8661_E70738C3CB0FD632.jpg&width=804&height=588&resize=CROP",
    atributos: {
      Rapidez: 95,
      Drible: 95,
      Finalização: 93
    }
  };
  var carta2 = {
    nome: "Cristiano Ronaldo",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8oBWqfMI3__QHUhhEfgRwWOjSp4GQvCGFlTJ15QCriwL0QqfFQllARTsAFLlxATlMJQ&usqp=CAU",
    atributos: {
      Rapidez: 93,
      Drible: 95,
      Finalização: 95
    }
  };
  var carta3 = {
    nome: "Messi",
    imagem:
      "https://amazonasatual.com.br/wp-content/uploads/2019/05/lionel-messi.jpg",
    atributos: {
      Rapidez: 89,
      Drible: 95,
      Finalização: 95
    }
  };
  var carta4 = {
    nome: "Dudu",
    imagem:
      "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2017/11/20106466_1839438283040314_5438099033747451178_n-1.jpg",
    atributos: {
      Rapidez: 89,
      Drible: 90,
      Finalização: 93
    }
  };
  var carta5 = {
    nome: "Robert Lewandowski",
    imagem:
      "https://img.fifa.com/image/upload/t_l4/bfu602wawmxxhwh7zswy.jpg",
    atributos: {
      Rapidez: 100,
      Drible: 100,
      Finalização: 100
    } 
  }
  var carta6 = {
    nome: "Kaka",
    imagem:
      "https://blogs.correiobraziliense.com.br/dribledecorpo/wp-content/uploads/sites/15/2017/04/Kaka-35.jpg",
    atributos: {
      Rapidez: 80,
      Drible: 87,
      Finalização: 90
    } 
  }
  var carta7 = {
    nome: "Gabigol",
    imagem:
      "https://sportbuzz.uol.com.br/media/_versions/gettyimages-1182193136_widelg.jpg",
    atributos: {
      Rapidez: 90,
      Drible: 80,
      Finalização: 93
    } 
  }
  var carta8 = {
    nome: "Roberto Firmino",
    imagem:
      "https://images.daznservices.com/di/library/GOAL/5d/9e/roberto-firmino-liverpool-2020-21_g7qh8soua8s1190qdlhc185ks.jpg?t=1917175670&quality=100",
    atributos: {
      Rapidez: 80,
      Drible: 85,
      Finalização: 95
    } 
  }
  
  var cartaMaquina;
  var cartaJogador;
  var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
  
  var pontosJogador = 0
  var pontosMaquina = 0
  
  atualizaPlacar() 
  atualizaQuantidadeDeCartas()
  
  function atualizaQuantidadeDeCartas() {
    var divQuantidadeDeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length
    divQuantidadeDeCartas.innerHTML = html 
  }
  
  function atualizaPlacar() {
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + " x " + pontosMaquina + " Máquina"
  divPlacar.innerHTML = html
  }
  
  function sortearCarta() {
      var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
      cartaMaquina = cartas[numeroCartaMaquina]
      cartas.splice(numeroCartaMaquina, 1)
  
      var numeroCartaJogador = parseInt(Math.random() * cartas.length)
      cartaJogador = cartas[numeroCartaJogador]
      cartas.splice(numeroCartaJogador, 1)
    
      document.getElementById('btnSortear').disabled = true
      document.getElementById('btnJogar').disabled = false
  
      exibeCartaJogador()
  }
  
  function exibeCartaJogador() {
      var divCartaJogador = document.getElementById("carta-jogador")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
      var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
      var opcoesTexto = ""
  
      for (var atributo in cartaJogador.atributos) {
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
      }
  
      var html = "<div id='opcoes' class='carta-status'>"
  
      divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function obtemAtributoSelecionado() {
      var radioAtributo = document.getElementsByName('atributo')
      for (var i = 0; i < radioAtributo.length; i++) {
          if (radioAtributo[i].checked) {
              return radioAtributo[i].value
          }
      }
  }
  
  function jogar() {
      var divResultado = document.getElementById("resultado")
      var atributoSelecionado = obtemAtributoSelecionado()
  
      if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = '<p class="resultado-final">Venceu</p>'
          pontosJogador++
      } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = '<p class="resultado-final">Perdeu</p>'
          pontosMaquina++
      } else {
          htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
      if (cartas.length == 0) {
        alert("Fim de Jogo")
        if(pontosJogador > pontosMaquina) {
          htmlResultado = '<p class="resultado-final">Você ganhou!</p>'
        } else if (pontosMaquina > pontosJogador) {
          htmlResultado = '<p class="resultado-final">Perdeu!</p>'
        } else {
          htmlResultado = '<p class="resultado-final">Empatou!</p>'
  }
      } else {
        document.getElementById('btnProximaRodada').disabled = false
      }
  
      divResultado.innerHTML = htmlResultado
      document.getElementById('btnJogar').disabled = true
     
      exibeCartaMaquina()
      atualizaPlacar()
      atualizaQuantidadeDeCartas()
  }
  
  function exibeCartaMaquina() {
      var divCartaMaquina = document.getElementById("carta-maquina")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
      var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
      var opcoesTexto = ""
  
      for (var atributo in cartaMaquina.atributos) {
          console.log(atributo)
          opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
      }
  
      var html = "<div id='opcoes' class='carta-status --spacing'>"
  
      divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function proximaRodada() {
    var divCartas = document.getElementById('cartas')
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
    
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled - true
    document.getElementById('btnProximaRodada').disabled - true
    
    var divResultado = document.getElementById('resultado')
    
    divResultado.innerHTML = ""
  }