// *** Tabuada ***

var n = prompt('Digite o numero da tabuada que desejar de 1 a 10');
                
for (i = 0; i<=10; i++) {
    var tb = n * i;
    document.write(n + " x " + i + " = " + tb + "</br>")
}
