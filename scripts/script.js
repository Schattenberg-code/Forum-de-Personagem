let usuario = document.getElementById('usuario').value;
let senha = document.getElementById('senha').value;

if (window.location.pathname.includes("forum.html")) {
    if (localStorage.getItem("logado") !== "true") {
        window.location.replace("index.html");
    }

    let timer;
    function ResetarTime() {
        clearTimeout(timer);
        timer = setTimeout(() => {
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

(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            if (usuario !== 'admin') {
                form.classList.add('is-invalid');
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated')


        }, false)
    })
})()

document.getElementById("form-login").onsubmit = (e) => {

    e.preventDefault();

    console.log("OI");



    let valido = true;

    if (usuario !== 'admin') {
        valido = false;
    }
    if (senha !== '1234' || isNaN(senha)) {
        valido = false;
    }

    if (valido == true) {
        console.log("Validado");
        localStorage.setItem("logado", "true");
        window.location.replace("forum.html");
    } else {
        console.log("Inválido");
    }
}



