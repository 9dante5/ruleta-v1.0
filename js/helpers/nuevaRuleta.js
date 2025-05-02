// esto es para manipular el formulario y crear una nueva ruleta

export function crearRuleta(form) {

    let ruletas = JSON.parse(localStorage.getItem("Ruletas")) || [];
    let infoRuletas = JSON.parse(localStorage.getItem("InfoRuletas")) || [];

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septimbre", "Octubre", "Novimbre", "Diciembre"]
    let mes = meses.splice(new Date().getMonth(), 1)[0]
    let dia = new Date().getDate() < 10? "0"+new Date().getDate() : new Date().getDate()
    let año = new Date().getFullYear()
    let hora = new Date().getHours() < 10? "0"+new Date().getHours() : new Date().getHours()
    let minutos = new Date().getMinutes() < 10? "0"+new Date().getMinutes() : new Date().getMinutes()

    
    

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const inputCrearRuleta = document.getElementById("inputCrearRuleta").value

        if (ruletas.length == 10) {
            alert("no se pueden crear mas ruletas")
        } else {
            let datosNuevaRuleta = {
                "id": crypto.randomUUID(),
                "nombreRuleta": inputCrearRuleta,
                "datos": [],
                "datosEliminado": []
            }

            let infoNuevaRuleta = {
                "nombreRuleta": inputCrearRuleta,
                "fechaCreacion": mes+"/"+dia+"/"+año,
                "horaCreacion": hora+":"+minutos,
                "fechaEliminacion": "Existente",
                "HoraEliminacion": "Existente"
            }

            ruletas.push(datosNuevaRuleta)
            infoRuletas.push(infoNuevaRuleta)
            localStorage.setItem("Ruletas", JSON.stringify(ruletas));
            localStorage.setItem("InfoRuletas", JSON.stringify(infoRuletas));
            localStorage.setItem("RuletaSeleccionada", JSON.stringify(datosNuevaRuleta))
            location.href = "../../pages/ruleta.html";
        }

        form.reset()
    })
}

