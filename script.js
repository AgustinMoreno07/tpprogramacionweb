const fechaPartido = new Date("2026-08-31T16:00:00");

function actualizarContador() {
const ahora = new Date();
const diferencia = fechaPartido - ahora;

if (diferencia <= 0) {
    document.getElementById("contador").textContent = "¡Comenzó el Partido!";
    return;
}

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador").textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

actualizarContador();
setInterval(actualizarContador, 1000);
