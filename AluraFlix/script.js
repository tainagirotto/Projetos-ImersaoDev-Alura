alert('Escolha uma série e descubra 5 curiosidades sobre ela')

var listaFilmes = ["https://image.tmdb.org/t/p/w185/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg", "https://image.tmdb.org/t/p/w185/oTLdXCBZU3AgVZ3IPeoIV06omU9.jpg","https://image.tmdb.org/t/p/w185/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg", "https://image.tmdb.org/t/p/w185/7tTvREykun6WeGJ4hy7sCG9TOeP.jpg"]

for (var i = 0; i < listaFilmes.length; i++) {
 document.write("<img src= " + listaFilmes[i] + " > ")            
}
var res = document.getElementById("resultado")
function escolher() {

if (document.getElementById("theOffice").checked == true) {
res.innerHTML = "1- O personagem Creed Bratton também se chama Creed Bratton na vida real; <br> <br> 2- Rashida Jones (a Karen) achou que seria demitida no seu primeiro dia no set por rir da improvisação do Steve Carell; <br> <br> 3-  John Krasinski (Jim) acidentalmente assinou seu próprio nome no gesso da Meredith, em vez do nome do Jim;<br>  <br> 4- Angela Kinsey estava grávida durante a 4ª temporada e pode ser vista várias vezes escondendo a barriga atrás de bolsas, impressoras e caixas; <br><br>  5- O nome original da série era: The American Workplace. <br><br> Fonte: http://buzzfeed.com.br/"
} else if (document.getElementById("mFamily").checked == true) {
res.innerHTML = "1- Julie Bowen, a atriz que viveu a nossa Claire Dunphy, estava grávida de gêmeos nas gravações do piloto de Modern Family; <br> <br> 2- Na vida real, o Luke é bem diferente de seu personagem. O ator é um gênio de verdade: com um QI de 150 (maior que o de Steve Jobs, que tinha 140, e pouco menor que o de Einstein, com 160); <br> <br> 3- Há incríveis oito anos (de 2012 até 2019) a intérprete da divertida Gloria Pritchett, Sofia Vergara, é a atriz mais bem paga da televisão mundial; <br><br> 4- Uma das piadas recorrentes de Modern Family era o palhaço Fizbo, personagem criado e vivido por Cam Tucker. O que poucos sabem é que a inspiração para Fizbo veio da vida do próprio Eric Stonestreet; <br><br> 5- Matt LeBlanc, o Joey de Friends, afirmou que recebeu um convite para interpretar um dos protagonistas de Modern Family, o atrapalhado Phil Dunphy. <br><br> Fonte: https://popcultura.com.br/ "

} else if (document.getElementById("lucifer").checked == true) {
  res.innerHTML = "1- O nome da boate de Lucifer é “Lux”, que significa luz em latim, bem como o prefixo e a etimologia de “Lúcifer” (o portador da luz); <br><br> 2- Tom Ellis (Lucifer), Lauren German (Chloe) e Aimee Garcia (Ella) tem todos, praticamente, a exata mesma idade, sendo separados por dias. Eles nasceram, respectivamente, em 17 de novembro de 1978, 29 de novembro de 1978 e 28 de novembro de 1978, tendo atualmente 41 anos; <br><br> 3- Muitas das músicas tocadas na boate Luz a qual Lucifer é dono são feitas pelo próprio Tom Ellis; <br><br> 4-Tom Ellis tentou entonar um sotaque americano para o seu papel. Mas o resultado não ficou legal. Então, o ator teve a liberdade de usar todo o seu sotaque britânico para compor o personagem; <br><br> 5- Cada episódio de Lucifer tem um nome único e praticamente todos os episódios da série são referências a alguma fala de um personagem – geralmente, dita pelo próprio Lucifer. <br><br> Fonte: mixdeseries.com.br/ "
} else if (document.getElementById("bkl").checked == true) {
res.innerHTML = "1- Para tornar tudo isso mais real, conselheiros da polícia foram aos sets para dar dicas de abordagem. Eles até aprenderam a atirar com armas de verdade; <br><br> 2- O roteirista e produtor Michael Schur também é responsável por The Good Place e fez participações no roteiro de The Office; <br><br> 3- Para ficar o mais natural possível, eles gravam seguindo o roteiro e depois filmam improvisando em cima do que está no texto. O que ficar mais espontâneo e engraçado, é exibido; <br><br> 4- Joel McKinnon, que interpreta o Scully, fez aulas de canto na infância. Portanto, as cenas que o policial aparece cantando ópera são reais; <br><br> 5- Andy Samberg não queria trabalhar mais na TV. Mas seu sucesso no programa Saturday Night Live chamou a atenção dos produtores de B99 e Jake Peralta o fez mudar de ideia. Ainda bem!<br><br> Fonte: purebreak.com.br/"
}


}