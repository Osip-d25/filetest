const emailInfo = document.getElementById("email-info");
const sendEmailBtn = document.getElementById("send-email");

sendEmailBtn.addEventListener("click", () => {
    const email = "osip.1942@gmail.com";
    const subject = "Тестовое письмо";
    const body = "Это тестовое письмо, отправленное с помощью JavaScript.";

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://osip-d25.github.io/filetest/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
        if (xhr.status === 200) {
            emailInfo.innerHTML = `<p>Письмо успешно отправлено!</p>`;
        } else {
            emailInfo.innerHTML = `<p>Ошибка при отправке письма: ${xhr.statusText}</p>`;
        }
    };
    xhr.send(JSON.stringify({ email, subject, body }));
});
