

if (window.location.pathname.includes("forum.html") || window.location.pathname.includes("comentarios.html")) {
    if (localStorage.getItem("logado") !== "true") {
        window.location.replace("index.html");
        alert("LOGUE ANTES DE USAR");
    }

    let timer;
    function ResetarTime() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            localStorage.clear();
            alert('inatividade!')
            window.location.replace("index.html");
        }, 300000);
    }

    window.onload = ResetarTime;
    window.onmousemove = ResetarTime;
    window.onkeydown = ResetarTime;

    let logout = document.getElementById("logout");

    logout.addEventListener('click', function (sair) {

        localStorage.clear();

    });

}

const form_login = document.getElementById("form-login")

if (form_login) {
    form_login.onsubmit = (e) => {

        e.preventDefault();

        console.log("OI");

        let usuario = document.getElementById('usuario').value;
        let senha = document.getElementById('senha').value;
        let msg = document.getElementById('mensagem');

        msg.innerHTML = "";

        let valido = true;

        if (senha !== '1234' || isNaN(senha)) {
            valido = false;
            msg.innerHTML = "<div><p id='erro' class='text-danger d-flex justify-content-center'> Senha Inválida </p></div>";
        }

        if (usuario !== 'admin') {
            valido = false;
            msg.innerHTML = "<div><p id='erro' class='text-danger d-flex justify-content-center'> Usuário Inválido </p></div>";
        }

        if (valido == true) {
            console.log("Validado");
            localStorage.setItem("logado", "true");
            window.location.replace("forum.html");
        } else {
            console.log("Inválido");
        }
    }
}


document.getElementById("mandar_comentario").onsubmit = (evento) => {
    evento.preventDefault();

    console.log("Mensagem Enviada");
    
}

