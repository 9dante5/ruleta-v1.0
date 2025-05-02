// Esto es para agregar datos a la ruleta

export function agregarDatosRuleta(form) {

    let ruletas = JSON.parse(localStorage.getItem("Ruletas")) || [];
    let ruletaSeleccionada = JSON.parse(localStorage.getItem("RuletaSeleccionada")) || [];

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const inputAgregarDatos = document.getElementById("inputAgregarDatos")


        let nuevaListaRuletas = ruletas.filter((elemnt) => elemnt.id !== ruletaSeleccionada.id)
        ruletaSeleccionada.datos.push(inputAgregarDatos.value)
        nuevaListaRuletas.push(ruletaSeleccionada)

        localStorage.setItem("Ruletas", JSON.stringify(nuevaListaRuletas));
        localStorage.setItem("RuletaSeleccionada", JSON.stringify(ruletaSeleccionada))
        formAgregarDatos.reset()
        location.reload()
    })
}