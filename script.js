// Загружаем пользователей из localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Обработка регистрации
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Остановка отправки формы

    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Проверка, существует ли пользователь с такой электронной почтой
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        showMessage('Пользователь с этой электронной почтой уже зарегистрирован.', 'error');
        return;
    }

    // Добавление нового пользователя
    const newUser = { email, password, role: 'student', grades: [], homework: [] }; // Роль - студент
    users.push(newUser);
    
    // Сохранение обновленного списка пользователей в localStorage
    localStorage.setItem('users', JSON.stringify(users));

    showMessage('Регистрация прошла успешно! Вы можете войти.', 'success');

    // Очистка полей
    document.getElementById('register-form').reset();
});

// Обработка входа
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Остановка отправки формы

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Поиск пользователя
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        // Проверка роли пользователя
        if (user.email === 'admin@example.com' && user.password === 'admin123') {
            // Если администратор
            window.location.href = 'admin.html'; // Переход на страницу администратора
        } else {
            // Если обычный пользователь
            window.location.href = `dashboard.html?email=${encodeURIComponent(user.email)}`; // Переход на страницу пользователя
        }
    } else {
        showMessage('Неверная электронная почта или пароль.', 'error');
    }

    // Очистка полей
    document.getElementById('login-form').reset();
});
