

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


const form_envio = document.querySelector('#mandar_comentario');

if (form_envio) {
    form_envio.addEventListener('submit', function (e) {
        e.preventDefault();

        const textoDigitado = form_envio.querySelector('textarea').value;

        if (textoDigitado !== '') {
            const todosComentarios = document.querySelectorAll('.comentario_alheio');
            const ultimoComentario = todosComentarios[todosComentarios.length - 1];

            const novoComentarioHTML = `
            <div class="comentario_alheio">
                <div class="d-flex comentario_meu">
                    <img class="circulo" src="assets/images/avatar_comentario.png" alt="Foto do Ezio">
                    <textarea disabled class="comentario">${textoDigitado}</textarea>
                </div>
            </div>
        `;

            const BotDava = `
            <div class="comentario_alheio">
                <div class="d-flex ">
                    <img class="circulo" src="assets/noticias/noticia_4.png" alt="Foto do Dava">
                    <textarea disabled
                        class="comentario">tra schlagi depoisqueoErenmorreu é pq ucaraqéprapotagonistapami não vou assistir mais não</textarea>
                    </div>
                </div>
                `;

            const BotNamoDava = `<div class="comentario_alheio">
                <div class="d-flex ">
                    <img class="circulo" src="assets/images/casalzinho.jpg" alt="Foto da Namorada do Dava">
                    <textarea disabled
                        class="comentario">não entendi foi nada do que você falou agora</textarea>
                    </div>
                </div>`

            console.log(todosComentarios.length);

            if (ultimoComentario) {
                ultimoComentario.insertAdjacentHTML('afterend', novoComentarioHTML);
            }

            form_envio.reset();

            if (todosComentarios.length >= 1) {
                const todosComentarios = document.querySelectorAll('.comentario_alheio');
                const ultimoComentario = todosComentarios[todosComentarios.length - 1];
                setTimeout(() => {
                    ultimoComentario.insertAdjacentHTML('afterend', BotDava);
                }, 2500);
                
                
            }
        }


    });
}

