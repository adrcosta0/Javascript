function azul(Cor) {
    document.querySelector('#squad').classList.remove('vermelho');
    document.querySelector('#squad').classList.add('azul');
    document.querySelector('#squad').setAttribute('corDoSquad', Cor);

    
    document.getElementById('squad').innerHTML = 'Azul';
 
}

function vermelho(Cor) {
    document.querySelector('#squad').classList.remove('azul');
    document.querySelector('#squad').classList.add('vermelho');
    document.querySelector('#squad').setAttribute('corDoSquad', Cor);
    
    document.getElementById('squad').innerHTML = 'Vermelho';
}

function pegarCor() {
    let cor = document.querySelector('#squad').getAttribute('corDoSquad');

    alert(cor);
}