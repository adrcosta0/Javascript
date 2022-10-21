function loginIn() {
    let user = document.getElementById('userName');
    let pass = document.getElementById('userPassworld');
    
    if( user.value == 'Adriel' && pass.value == 1234) {
        alert('Dados Corretos');
        document.querySelector('.result').innerHTML = "Login com sucesso";

        document.querySelector('.resultName').innerHTML = 'User Name: ' + user.value;
        document.querySelector('.resultPassworld').innerHTML = 'Passworld Name: ' + pass.value;
    } else {
        alert('Dados incorretos');
        document.querySelector('.result').innerHTML = "Login esta incorreto";
    }      
}       