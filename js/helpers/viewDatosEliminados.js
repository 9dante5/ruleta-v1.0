export function datosEliminados(container) {

    let info = JSON.parse(localStorage.getItem("RuletaSeleccionada")) || [];

    info.datosEliminado.forEach((element, index) => {
        container.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${element.nombre}</td>
                    <td>${element.fechaEliminado}</td>
                    <td>${element.horaEliminado}</td>
                </tr>
        `
    });
}