import { mostrarDatosRuleta } from "./mostrarDatos.js"

export function girarRuleta(container, boton, containerGanador) {

    let ruletaSeleccionada = JSON.parse(localStorage.getItem("RuletaSeleccionada")) || [];
    let ruletas = JSON.parse(localStorage.getItem("Ruletas")) || [];

    container.children.length == 0 ? botonRuleta.setAttribute("disabled", "true") :

        boton.addEventListener("click", (e) => {

            if (ruletaSeleccionada.datos.length == 0) {
                Swal.fire("no hay datos en la ruleta");
                setTimeout(() => {
                    location.reload()
                }, 5000);
                
            } else {
                container.innerHTML = ``
                mostrarDatosRuleta(container)

                let numerosRandom = []
                let datosRuleta = ruletaSeleccionada.datos
                let tiradas = Math.ceil(datosRuleta.length / 3)

                let myInterval = setInterval(() => {
                    let random = Math.floor(Math.random() * (datosRuleta.length - 0) + 0)

                    if (!numerosRandom.includes(random) && numerosRandom.length == tiradas - 1) {
                        numerosRandom.push(random)
                        e.target.parentNode.children[1].children[random].classList.add("seleccionado")
                        const elGanador = e.target.parentNode.children[1].children[random].children[0].textContent

                        containerGanador.innerHTML = `
                        <div>
                            <h2>${elGanador}</h2>
                        </div>
                    `
                        eliminarGanador(elGanador, ruletaSeleccionada, ruletas)

                        setTimeout(() => {
                            location.reload()
                        }, 10000);

                    } else if (!numerosRandom.includes(random)) {
                        e.target.parentNode.children[1].children[random].classList.add("posible")
                        numerosRandom.push(random)
                    }

                    if (numerosRandom.length == tiradas) {
                        clearInterval(myInterval);
                    }
                }, 500);
            }


        })
}

function eliminarGanador(ganador, ruleta, todasRuletas) {

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septimbre", "Octubre", "Novimbre", "Diciembre"]
    let mes = meses.splice(new Date().getMonth(), 1)[0]
    let dia = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate()
    let año = new Date().getFullYear()
    let hora = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours()
    let minutos = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()

    const posicionGanador = ruleta.datos.indexOf(ganador)
    ruleta.datos.splice(posicionGanador, 1)

    const datoEliminado = {
        "nombre": ganador,
        "fechaEliminado": mes + "/" + dia + "/" + año,
        "horaEliminado": hora + ":" + minutos
    }

    ruleta.datosEliminado.push(datoEliminado)

    let nuevaListaRuletas = todasRuletas.filter((elemnt) => elemnt.id !== ruleta.id)
    nuevaListaRuletas.push(ruleta)

    localStorage.setItem("Ruletas", JSON.stringify(nuevaListaRuletas));
    localStorage.setItem("RuletaSeleccionada", JSON.stringify(ruleta))
}