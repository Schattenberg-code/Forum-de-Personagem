if (window.location.pathname.includes("forum.html")) {
    if (localStorage.getItem("logado") !== "true") {
        window.location.replace("index.html");
    }
    const timer = setTimeout(() => {
        window.location.replace("index.html");
    }, 300000);

    let logout = document.getElementById("logout");

    logout.onclick = (sair) => {

        localStorage.removeItem('logado');

    }
}

document.getElementById("form-login").onsubmit = (e) => {
    
    e.preventDefault();

    console.log("OI");

    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    let valido = true;

    if (usuario !== 'admin'){
        valido = false;
    }
    if (senha !== '123' || isNaN(senha)){
        valido = false;
    }

    if(valido == true){
        console.log("Validado");
        localStorage.setItem("logado", "true");
        window.location.replace("forum.html");
    }else{
        console.log("Inválido");
    }
}



