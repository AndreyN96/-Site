// Файл time.js
function displayTime() {
  let element = document.getElementById("clock"); // Находим элемент с id="clock"
  let now = new Date(); // Получаем текущее время
  element.innerHTML = now.toLocaleTimeString(); // Отображаем текущее время
  setTimeout(displayTime, 1000); // Обновляем каждую секунду
}

window.onload = displayTime; // Запускаем функцию после загрузки страницы

