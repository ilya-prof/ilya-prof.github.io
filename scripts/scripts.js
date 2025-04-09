// Инициализация AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Переключатель темы
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeSwitch.textContent = '☀️'; // Светлая тема
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeSwitch.textContent = '🌙'; // Темная тема
        localStorage.setItem('theme', 'dark');
    }
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
    const tok0= '7071248616:';
    const tok1= 'AAGhCGeGkhtnVqymj8n9H'; 
    const tok2= '_PhK_6D8R5asLw'; 
    const tok = tok0 + tok1 + tok2;
    const chatId = 1690425469; // Замените на ваш chat_id

    const message = `Имя: ${formData.get('name')}\nТелефон: ${formData.get('phone')}\nСообщение: ${formData.get('message')}`;
    try {
        await fetch(`https://api.telegram.org/bot${tok}/sendMessage`, {
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