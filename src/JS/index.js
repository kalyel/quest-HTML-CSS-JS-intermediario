const camposFormulario = document.querySelectorAll('.campo')
const botaoEnviar = document.getElementById('btn-enviar')

botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    camposFormulario.forEach((campo) => {
        if (campo.value) {
            campo.classList.add('preenchido')
            campo.nextElementSibling.classList.remove('exibir')
        } else {
            campo.classList.remove('preenchido')
            campo.classList.add('nao-preenchido')
            campo.nextElementSibling.classList.add('exibir')
        }
    })

    const limparFormulario = document.querySelector(".formulario")
    limparFormulario.reset();

})
