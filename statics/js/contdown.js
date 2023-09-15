// Fecha objetivo (13 de enero de 2024 a las 19:00 en hora ARG)
const targetDate = new Date("2024-01-13T19:00:00-03:00");

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        document.getElementById("countdown").innerHTML = "¡Tiempo expirado!";
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
    }
}

// Actualizar la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);

// Inicializar la cuenta regresiva en la carga de la página
updateCountdown();