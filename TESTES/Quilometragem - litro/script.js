var KmAnterior = prompt('Qual a quilometragem anterior?') 
var KmAtual = prompt('Qual a quilometragem atual?')
var LitroGas = prompt('Quantos litros colocados?')

if (KmAtual >= KmAnterior) {
    document.write( "Automével faz " + (KmAtual - KmAnterior)/ LitroGas + "km por litro.")
} 
else {
    document.write( "Automével faz "  + (10000 - KmAnterior + KmAtual)/ LitroGas + "km por litro.")
} 