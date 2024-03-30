import{verification} from './firebase.js'

const enviar = document.getElementById('verificationbtn')

async function verificacion(){

    const verificar = verification()

    verificar.then(()=>{

        alert('¡Correo de Verificacion enviado al usuario!')
        window.location.href="/Templates/Registrarse.html"

    })

}
window.addEventListener('DOMContentLoaded', async()=>{
    enviar.addEventListener('click', verificacion)
})