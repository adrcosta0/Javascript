botao1.onclick = function() { 
    var a,b,c,delta;
    a = Number( va.value );
    b = Number( vb.value );
    c = Number( vc.value );
    delta = b ** 2 - 4 * a * c;

    if(delta < 0) 
    {
        resultado.textContent = "Não há raizes reais";
    } 
    else // igual zero ou maior que zero
    {
        if (delta == 0)
        {
            resultado.textContent = "Raiz: " + ( -b / (2 * a) )
        }
        else // delta maior que zero
        { 
            var r1, r2;
            r1 = ( -b + delta ** 0.5) / (2 * a);
            r2 = ( -b - delta ** 0.5) / (2 * a);
            resultado.textContent = "Raiz I: " + r1 + " | Raiz II: " + r2;
        }
    }

  
 } 