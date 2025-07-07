// Инициализация AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Функция для применения темы
function applyTheme(theme) {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const themeSwitch = document.getElementById('theme-switch');
  
    if (theme === 'light') {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      navbar.classList.remove('bg-dark', 'navbar-dark');
      navbar.classList.add('bg-light', 'navbar-light');
      if (themeSwitch) themeSwitch.textContent = '☀️';
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      navbar.classList.remove('bg-light', 'navbar-light');
      navbar.classList.add('bg-dark', 'navbar-dark');
      if (themeSwitch) themeSwitch.textContent = '🌙';
    }
  }
  
  // Переключатель темы
  document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    
    if (themeSwitch) {
      themeSwitch.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
      });
    }
  
    // Применяем сохранённую тему при загрузке
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
  });

// Обработка формы (Telegram Bot API)
const form = document.getElementById('contact-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const tok0 = '7071248616:';
    const tok1 = 'AAGhCGeGkhtnVqymj8n9H';
    const tok2 = '_PhK_6D8R5asLw';
    const tok = tok0 + tok1 + tok2;
    const chatId = 1690425469;

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

// Модальное окно для отображения деталей услуг
const serviceCards = document.querySelectorAll('#services .card');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

const modal = new bootstrap.Modal(document.getElementById('serviceModal'));

const detailsMap = {
    'Парсинг данных': `🤖 <strong>Профессиональный парсинг данных</strong><br>
<br>
⚡ Автоматический сбор и структурирование информации с любых веб-источников<br>
<br>
🔧 <strong>Технические возможности:</strong><br>
⛏️ Парсинг сложных сайтов с антибот-защитой (Cloudflare, Distil Networks)<br>
🧩 Обработка JavaScript-страниц (SPA, React, Angular)<br>
👁️ Обход капчи (ручной и автоматический режимы)<br>
📡 Работа с API и скрытыми источниками данных<br>
🔄 Регулярный мониторинг и обновление данных<br>
<br>
💾 <strong>Форматы выгрузки:</strong><br>
📊 Excel (XLSX) с форматированием<br>
📝 CSV для импорта в любые системы<br>
🗃️ Google Sheets с автоматическим обновлением<br>
💽 SQL-базы данных (MySQL, PostgreSQL)<br>
📂 JSON/XML для разработчиков<br>
<br>
🎯 <strong>Популярные применения:</strong><br>
💰 Мониторинг цен конкурентов (ценовая аналитика)<br>
📈 Сбор отзывов и рейтингов (анализ репутации)<br>
🗞️ Агрегация новостей и упоминаний (медиа-аналитика)<br>
🏷️ Парсинг товаров и каталогов (ассортиментный анализ)<br>
🏡 Сбор объявлений (недвижимость, авто, вакансии)<br>
📊 Извлечение финансовых данных (котировки, отчеты)<br>
<br>
🛡️ <strong>Этические принципы работы:</strong><br>
✅ Соблюдение robots.txt и условий сайтов<br>
✅ Оптимальная частота запросов<br>
✅ Работа только с разрешенными источниками<br>
✅ Конфиденциальность полученных данных<br>
<br>
⚙️ <strong>Технологический стек:</strong><br>
Python (BeautifulSoup, Scrapy, Selenium)<br>
Node.js для сложных кейсов<br>
Прокси-серверы для обхода блокировок<br>
Облачные решения для масштабных задач<br>
<br>
📈 <strong>Что вы получаете:</strong><br>
- Готовые структурированные данные под ваш формат<br>
- Настройку регулярного автоматического сбора<br>
- Очистку и нормализацию данных<br>
- Консультацию по анализу полученной информации<br>
<br>
💬 Обсудим ваш проект и подберем оптимальное решение!<br>
⏱ Сроки: от 1 дня | 💰 Стоимость: от 1 000₽<br>`,

    'Чат-боты': `🤖 <strong>Разработка интеллектуальных чат-ботов</strong><br>
<br>
🚀 Создаю умных ботов для Telegram, ВКонтакте и мессенджеров с продвинутой логикой и AI-функциями<br>
<br>
💡 <strong>Основные возможности:</strong><br>
🧠 Интеграция с нейросетями (ChatGPT, DeepSeek, Claude)<br>
📝 Автоматизация форм заявок и анкет<br>
💬 Многоуровневые диалоги и сценарии<br>
💳 Прием платежей (ЮKassa, CloudPayments, PayPal)<br>
📊 Работа с базами данных и CRM-системами<br>
<br>
🔧 <strong>Технологический стек:</strong><br>
🐍 Python (aiogram, Telebot)<br>
⚡ FastAPI/Flask для вебхуков<br>
🗃️ SQLAlchemy, PostgreSQL, Redis<br>
🤖 DialogFlow для NLP-ботов<br>
☁️ Docker и облачный хостинг<br>
<br>
📌 <strong>Типовые решения:</strong><br>
📋 Боты-анкеты (сбор контактов, опросы)<br>
🛍️ Боты-магазины (каталог + оплата)<br>
📅 Боты-записи (онлайн-бронирование)<br>
📢 Боты-рассыльщики (маркетинг)<br>
🔍 Боты-ассистенты (поиск информации)<br>
🛠️ Боты-поддержки (тикеты, FAQ)<br>
<br>
✨ <strong>Особенности моих ботов:</strong><br>
✅ Адаптивные клавиатуры и inline-режим<br>
✅ Мультиязычная поддержка<br>
✅ Аналитика и статистика<br>
✅ Веб-панель управления<br>
✅ Защита от спама и флуда<br>
<br>
📈 <strong>Для кого полезно:</strong><br>
🏢 Бизнесу (продажи, поддержка)<br>
🏫 Образованию (тесты, консультации)<br>
🏥 Медицине (запись к врачу)<br>
🏨 Сервисам (бронирование услуг)<br>
🎓 Инфобизнесу (автоворонки)<br>
<br>
📦 <strong>Что вы получаете:</strong><br>
- Полностью рабочий чат-бот<br>
- Инструкции по управлению<br>
- Техподдержку на постоянной основе<br>
- Возможность масштабирования<br>
<br>
💬 Готов обсудить вашу идею и предложить лучшее решение!<br>
⏱ Сроки: от 3 дней | 💰 Стоимость: от 3 000₽<br>`,

    'EXCEL/ACCESS, GoogleSheets, Р7-Офис': `🤖 <strong>Профессиональная автоматизация процессов</strong><br>
<br>
🚀 Избавляю от рутины с помощью умных скриптов и индивидуальных решений<br>
<br>
🛠 <strong>Основные направления автоматизации:</strong><br>
<br>
🔹 <strong>Макросы и скрипты</strong><br>
- VBA-программирование для Excel, Word, Outlook, Access<br>
- Google Apps Script для Google Docs/Sheets/Gmail<br>
- Автоматизация отчетности и документооборота<br>
- Интеграция офисных приложений между собой<br>
- Массовая рассылка персонализированных документов<br>
<br>
🔹 <strong>Умные формы и шаблоны</strong><br>
- Электронные анкеты с автоматической обработкой<br>
- Генерация договоров/счетов/актов по шаблонам<br>
- Системы проверки вводимых данных<br>
- Автозаполнение документов из баз данных<br>
<br>
🔹 <strong>Бизнес-аналитика</strong><br>
- Интерактивные дашборды в Excel/Google Sheets<br>
- Автоматические сводки и аналитические отчеты<br>
- Визуализация KPI и ключевых метрик<br>
- Ежедневная автоматическая рассылка отчетов<br>
<br>
🔹 <strong>Работа с базами данных</strong><br>
- Разработка Access-приложений под задачи<br>
- Создание систем учета и отчетности<br>
- Миграция данных между форматами<br>
- Интеграция Excel с SQL-базами<br>
<br>
🔹 <strong>Почтовая автоматизация</strong><br>
- Массовая персонализированная рассылка<br>
- Автосортировка входящих писем<br>
- Шаблоны ответов и автореплаи<br>
- Прикрепление документов по правилам<br>
<br>
💼 <strong>Для кого это особенно полезно:</strong><br>
- Бухгалтерии и финансовые отделы<br>
- Отделы продаж и CRM<br>
- Службы документооборота<br>
- Аналитические отделы<br>
- Малый бизнес без IT-штата<br>
<br>
🏆 <strong>Мои преимущества:</strong><br>
✅ 10+ лет работы с офисной автоматизацией<br>
✅ Готовые решения за 1-3 дня<br>
✅ Обучение сотрудников работе с системой<br>
✅ Поддержка после внедрения<br>
✅ Конфиденциальность данных<br>
<br>
📈 <strong>Что вы получите:</strong><br>
- Экономия до 80% времени на рутине<br>
- Снижение количества ошибок в документах<br>
- Удобные инструменты для сотрудников<br>
- Автоматическую отчетность<br>
<br>
💬 Готов обсудить ваши задачи и предложить решение!<br>
⏱ Сроки: от 1 дня | 💰 Стоимость: от 1 000₽<br>`,

    'MINI-APP Telegram': `🚀 <strong>Разработка мини-приложений (WebApp) для Telegram</strong><br>
<br>
💡 Создаю функциональные веб-приложения, работающие прямо внутри Telegram через WebApp API<br>
<br>
🌐 <strong>Технологии:</strong><br>
- WebApp API Telegram для полной интеграции с мессенджером<br>
- JavaScript (React/Vue при необходимости)<br>
- Адаптивный дизайн (корректное отображение на любых устройствах)<br>
- Подключение к базам данных (Firebase, MySQL, PostgreSQL)<br>
- Серверная логика на Node.js/Python/PHP<br>
<br>
🛠 <strong>Типовые решения:</strong><br>
📋 Интерактивные формы (анкеты, опросы, заявки)<br>
🛍️ Электронные каталоги товаров/услуг<br>
👥 Простые CRM-системы для управления клиентами<br>
🛒 Системы заказов с корзиной и оплатой<br>
📊 Сервисные панели и дашборды<br>
🎮 Мини-игры и интерактивные викторины<br>
<br>
✨ <strong>Ключевые преимущества:</strong><br>
🔹 Работает без установки прямо в Telegram<br>
🔹 Поддержка тем (светлая/тёмная)<br>
🔸 Доступ к данным пользователя (username, язык)<br>
🔹 Кроссплатформенность (iOS/Android/Desktop)<br>
🔸 Готовые решения за 3-7 дней<br>
<br>
💼 <strong>Для кого:</strong><br>
- Магазины и сервисы<br>
- Блогеры и инфобизнес<br>
- Образовательные проекты<br>
- Локал сервис и стартапы<br>
<br>
📈 <strong>Что вы получаете:</strong><br>
1. Полностью рабочий WebApp<br>
2. Инструкцию по администрированию<br>
3. Техподдержку и сопровождение после сдачи<br>
4. Возможность доработок<br>
<br>
💬 Готов обсудить ваш проект и предложить оптимальное решение!<br>
⏱ Сроки: от 3 дней | 💰 Стоимость: от 5 000₽<br>`,

    'Создание сайтов': `🌐 <strong>Создание сайтов под ключ</strong><br>
<br>
🚀 Разрабатываю современные и функциональные сайты для бизнеса и личных проектов<br>
<br>
🛠 <strong>Технологии и подход:</strong><br>
- Чистый HTML5/CSS3/JavaScript код<br>
- Фреймворки: Bootstrap, Tailwind CSS<br>
- CMS: WordPress<br>
- AI-инструменты для ускоренной разработки<br>
- Адаптивная и кросс-браузерная верстка<br>
<br>
💼 <strong>Типы сайтов:</strong><br>
🖥️ Корпоративные сайты и визитки<br>
📱 Продающие лендинги<br>
🛍️ Интернет-магазины и каталоги<br>
📝 Блоги и медиа-ресурсы<br>
🎓 Личные страницы и портфолио<br>
<br>
✨ <strong>Дополнительные услуги:</strong><br>
🔍 SEO-оптимизация (базовая настройка)<br>
📊 Подключение аналитики (Google Analytics, Яндекс.Метрика)<br>
📧 Настройка форм обратной связи<br>
🔒 SSL-сертификаты и безопасность<br>
⚡ Ускорение загрузки страниц<br>
<br>
🏆 <strong>Преимущества:</strong><br>
✅ Полная адаптация под мобильные устройства<br>
✅ Удобная административная панель<br>
✅ Поддержка после запуска<br>
✅ Готовность к SEO-продвижению<br>
✅ Индивидуальный дизайн или шаблонное решение<br>
<br>
📅 <strong>Сроки и условия:</strong><br>
⏱ Срок разработки: от 3 дней<br>
💰 Стоимость: от 5 000₽ (зависит от сложности)<br>
📝 Бесплатная консультация и ТЗ<br>
<br>
💬 Обсудим ваш проект и подберем оптимальное решение!<br>`,

    'Настройка сайтов': `🛠️ <strong>Профессиональная настройка сайтов</strong><br>
<br>
🔧 Привожу в порядок существующие сайты: от технического аудита до полной модернизации<br>
<br>
✨ <strong>Основные направления работ:</strong><br>
⚡ Ускорение загрузки (оптимизация до 90+ баллов в PageSpeed)<br>
📱 Адаптация под современные устройства (идеальный mobile-first)<br>
🎨 Улучшение UX/UI дизайна (повышение конверсии)<br>
🔍 Глубокая SEO-настройка (мета-теги, структура, микроразметка)<br>
🤖 Настройка интеграций (CRM, платежи, чаты, API)<br>
<br>
🛠 <strong>Работаю с платформами:</strong><br>
- WordPress (оптимизация, безопасность, плагины)<br>
- Tilda (кастомизация блоков, JS-доработки)<br>
- Webflow (расширенная функциональность)<br>
- HTML/JS сайты (любые доработки)<br>
- 1С-Битрикс и Joomla (базовая поддержка)<br>
<br>
🔧 <strong>Технические доработки:</strong><br>
🔌 Подключение платежных систем (ЮKassa, CloudPayments, PayPal)<br>
📞 Интеграция чатов (VK, WhatsApp, Telegram)<br>
📊 Настройка аналитики (GA4, Яндекс.Метрика)<br>
🔄 Автоматизация процессов (CRM)<br>
🛡️ Повышение безопасности (SSL, защита от взлома)<br>
<br>
🏆 <strong>Почему клиенты выбирают меня:</strong><br>
✅ 5+ лет опыта в веб-разработке<br>
✅ Работаю с кодом, а не только с конструкторами<br>
✅ Даю гарантии на выполненные работы<br>
✅ Объясняю сложное простым языком<br>
✅ Уважаю сроки и бюджет<br>
<br>
📈 <strong>Результат для вас:</strong><br>
- Увеличение скорости сайта на 50-80%<br>
- Рост конверсии на 20-40%<br>
- Улучшение позиций в поиске<br>
- Удобная система управления<br>
<br>
💬 Готов бесплатно проанализировать ваш сайт и предложить план улучшений!<br>
⏱ Сроки: от 1 дня | 💰 Стоимость: от 3 000₽<br>`
};

serviceCards.forEach(card => {
    // card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        const title = card.querySelector('.card-title').textContent.trim();
        modalTitle.textContent = title;
        modalBody.innerHTML = detailsMap[title] || 'Подробности скоро будут добавлены.';
        modal.show();
    });
});

// Копирование адреса в буфер обмена
function copyToClipboard() {
            const text = document.getElementById("textToCopy").innerText;
            
            navigator.clipboard.writeText(text).then(function() {
            // Успешно скопировано
            const alertBox = document.getElementById("alertBox");
            alertBox.style.display = "block";
            setTimeout(() => alertBox.style.display = "none", 2000); // Скрыть через 2 секунды
            }).catch(err => {
            console.error('Ошибка копирования: ', err);
            });
        }
        