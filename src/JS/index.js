const campos = document.querySelectorAll('.campo')
const avisos = document.querySelectorAll('.aviso-campo-obrigatorio')
const botaoEnviar = document.getElementById('btn-enviar')

botaoEnviar.addEventListener('click', function () {

    campos.forEach(function (campo) {
        const aviso = campo.nextElementSibling;

        if (campo.value == "") {
            campo.classList.add('nao-preenchido');
            aviso.classList.add('exibir');
        } else {
            campo.classList.remove('nao-preenchido');
            campo.classList.add('preenchido');
            aviso.classList.remove('exibir');
        }
    })
})

campos.forEach(function (campo) {
    campo.addEventListener('input', function () {
        const aviso = campo.nextElementSibling;

        if (campo.value !== "") {
            campo.classList.add('preenchido');
            campo.classList.remove('nao-preenchido');
            aviso.classList.remove('exibir');
        } else {
            campo.classList.remove('preenchido');
            campo.classList.add('nao-preenchido');
            aviso.classList.add('exibir');
        }
    })
})

