// Инициализация AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Переключатель темы
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    themeSwitch.textContent = document.body.classList.contains('dark-theme') ? '🌙' : '☀️';
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Загрузка сохраненной темы
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.add(`${savedTheme}-theme`);
themeSwitch.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

// Обработка формы (Telegram Bot API)
const form = document.getElementById('contact-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const token = 'YOUR_TELEGRAM_BOT_TOKEN'; // Замените на ваш токен
    const chatId = 'YOUR_CHAT_ID'; // Замените на ваш chat_id

    const message = `Имя: ${formData.get('name')}\nEmail: ${formData.get('email')}\nСообщение: ${formData.get('message')}`;
    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ chat_id: chatId, text: message })
        });
        alert('Сообщение отправлено!');
        form.reset();
    } catch (error) {
        alert('Ошибка при отправке сообщения.');
    }
});