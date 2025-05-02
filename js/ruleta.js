import { agregarDatosRuleta } from "./helpers/agregarDatos.js";
import { girarRuleta } from "./helpers/girarRuleta.js";
import { mostrarDatosRuleta } from "./helpers/mostrarDatos.js";
import { datosEliminados } from "./helpers/viewDatosEliminados.js";

document.addEventListener("DOMContentLoaded", () => {

    const tituloRuleta = document.getElementById("tituloRuleta")
    const formAgregarDatos = document.getElementById("formAgregarDatos")
    const botonRuleta = document.getElementById("botonRuleta")
    const containerDatos = document.getElementById("containerDatos")
    const containerGanador = document.getElementById("containerGanador")
    const containerDatosEliminados = document.getElementById("containerDatosEliminados")
    const inputAgregarDatos = document.getElementById("inputAgregarDatos")

    let ruletas = JSON.parse(localStorage.getItem("Ruletas")) || [];
    let ruletaSeleccionada = JSON.parse(localStorage.getItem("RuletaSeleccionada")) || [];

    tituloRuleta.textContent = "Ruleta: " + ruletaSeleccionada.nombreRuleta

    inputAgregarDatos.focus()

    agregarDatosRuleta(formAgregarDatos)
    mostrarDatosRuleta(containerDatos)
    girarRuleta(containerDatos, botonRuleta, containerGanador)
    datosEliminados(containerDatosEliminados)

})
