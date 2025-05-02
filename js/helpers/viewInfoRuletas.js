// Esto es para mostrar la informacion de las ruletas en el modal

export function infoRuletas(container) {

    let info = JSON.parse(localStorage.getItem("InfoRuletas")) || [];

    info.forEach((element, index) => {
        container.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${element.nombreRuleta}</td>
                    <td>${element.fechaCreacion + " - " + element.horaCreacion}</td>
                    <td>${element.fechaEliminacion == "Existente"? element.fechaEliminacion : element.fechaEliminacion + " - " + element.HoraEliminacion}</td>
                </tr>
        `
    });
}

