// Esto es para mostrar los datos de la ruleta

export function mostrarDatosRuleta(container) {

    let ruletaSeleccionada = JSON.parse(localStorage.getItem("RuletaSeleccionada")) || [];

    ruletaSeleccionada.datos.forEach(element => {
        container.innerHTML += `
            <div class="datos">
                <h4>${element}</h4>
            </div>
        `
    });
}