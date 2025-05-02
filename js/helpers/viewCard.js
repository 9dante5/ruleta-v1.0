//esto es para visualizar las card en el index.html y dar las diferentes funciones a los botones de esta card

export function crearCardRuletas(container) {

    let ruletas = JSON.parse(localStorage.getItem("Ruletas")) || [];
    let info = JSON.parse(localStorage.getItem("InfoRuletas")) || [];


    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septimbre", "Octubre", "Novimbre", "Diciembre"]
    let mes = meses.splice(new Date().getMonth(), 1)[0]
    let dia = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate()
    let año = new Date().getFullYear()
    let hora = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours()
    let minutos = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()

    ruletas.forEach(ruleta => {
        container.innerHTML += `
                <div id="${ruleta.id}" class="cardRuleta">
                    <h3>${ruleta.nombreRuleta}</h3>
                    <div class="cardRuletaOpciones">
                        <div>
                            <i class='bx bx-show opcionVer'></i>
                        </div>
                        <div>
                            <i class='bx bx-trash-alt opcionEliminar' ></i>
                        </div>
                    </div>
               </div>
            `

        const verRuleta = document.querySelectorAll('.opcionVer')
        const eliminarRuleta = document.querySelectorAll('.opcionEliminar')

        verRuleta.forEach(element => {
            element.addEventListener("click", (e) => {
                let idRuleta = e.target.parentElement.parentElement.parentElement.id
                let ruletaBuscada = ruletas.find((element) => element.id == idRuleta)
                localStorage.setItem("RuletaSeleccionada", JSON.stringify(ruletaBuscada))
                location.href = "ruleta.html";
            })
        });

        eliminarRuleta.forEach(element => {
            element.addEventListener("click", (e) => {
                Swal.fire({
                    title: "¿Deseas eliminar esta ruleta?",
                    showDenyButton: true,
                    confirmButtonText: "Eliminar",
                    denyButtonText: `No eliminar`
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire("Ruleta eliminada exitosamente");
                        let idRuleta = e.target.parentElement.parentElement.parentElement.id
                        let ruletaBuscada = ruletas.find((element) => element.id == idRuleta)
                        let infoRuletaBuscada = info.find((element) => element.nombreRuleta == ruletaBuscada.nombreRuleta)

                        let infoRuletaEliminada = {
                            "nombreRuleta": infoRuletaBuscada.nombreRuleta,
                            "fechaCreacion": infoRuletaBuscada.fechaCreacion,
                            "horaCreacion": infoRuletaBuscada.horaCreacion,
                            "fechaEliminacion": mes + "/" + dia + "/" + año,
                            "HoraEliminacion": hora + ":" + minutos
                        }

                        let nuevaListaRuletas = ruletas.filter((elemnt) => elemnt !== ruletaBuscada)
                        let nuevaListaInfoRuletas = info.filter((element) => element !== infoRuletaBuscada)

                        nuevaListaInfoRuletas.push(infoRuletaEliminada)

                        localStorage.setItem("Ruletas", JSON.stringify(nuevaListaRuletas));
                        localStorage.setItem("InfoRuletas", JSON.stringify(nuevaListaInfoRuletas));
                        location.reload();

                    } else if (result.isDenied) {
                        Swal.fire("No se completo la eliminación de la ruleta");
                    }
                });


            })
        });
    });
}