// Fecha objetivo (13 de enero de 2024 a las 19:00 en hora ARG)
const targetDate = new Date("2024-01-13T19:00:00-03:00");

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    
    if (timeDifference <= 0) {
        document.getElementById("countdown").innerHTML = "Llegó el gran día 😍⛪💍👰🏻🤵🏻";
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // document.getElementById("countdown").innerHTML = `<h3>Faltan</h3> ${days} días, ${hours} h, ${minutes} m, ${seconds} s`;
        var countdownHTML = `
            <div class="countdown py-4">
            
                <h2>Faltan</h2>
                <div class="row container m-auto">
                    <h3 class="col-3">${days}</h3>
                    <h3 class="col-3">${hours}</h3>
                    <h3 class="col-3">${minutes}</h3>
                    <h3 class="col-3">${seconds}</h3>
                </div>
                <div class="row container m-auto">
                    <p class="col-3">Días</p>
                    <p class="col-3">Horas</p>
                    <p class="col-3">Minutos</p>
                    <p class="col-3">Segundos</p>
                </div>
            </div>
        `;
        var countdownElement = document.getElementById("countdown");
        countdownElement.innerHTML = countdownHTML;

    }
}

// Actualizar la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);

// Inicializar la cuenta regresiva en la carga de la página
updateCountdown();