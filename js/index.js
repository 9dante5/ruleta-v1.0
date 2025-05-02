import { crearRuleta } from "./helpers/nuevaRuleta.js";
import { crearCardRuletas } from "./helpers/viewCard.js";
import { infoRuletas } from "./helpers/viewInfoRuletas.js";

document.addEventListener("DOMContentLoaded", () => {

    const containerRuletas = document.getElementById("containerRuletas")
    const formNuevaRuleta = document.getElementById("formCrearRuleta")
    const containerInfoRuletas = document.getElementById("containerInfoRuletas")

    // eliminar la ruleta seleccionada del localStorage
    localStorage.removeItem("RuletaSeleccionada");


    infoRuletas(containerInfoRuletas)
    crearRuleta(formNuevaRuleta)
    crearCardRuletas(containerRuletas)

});