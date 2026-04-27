document.getElementById("form-login").onsubmit = (e) => {
    
    e.preventDefault();

    console.log("OI");

    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value

    let valido = true;

    if (usuario !== 'admin'){
        valido = false;
        return;
    }
    if (senha !== '123'){
        valido = false;
        return;
    }

    if(valido == true){
        console.log("Validado");
    }else{
        console.log("Inválido");
    }
}



