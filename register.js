document.getElementById('register-button').addEventListener('click', function() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.email === email)) {
        alert('Пользователь с таким email уже зарегистрирован.');
        return;
    }

    const newUser = {
        email: email,
        password: password,
        grades: [], // Инициализируем пустой массив оценок
        homework: [] // Инициализируем пустой массив домашних заданий
    };
	const isAdmin = document.getElementById('isAdmin').checked;

// Добавление нового пользователя
users.push({ email: email, password: password, grades: [], homework: [], isAdmin: isAdmin });


    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Пользователь зарегистрирован успешно!');
    window.location.href = 'index.html'; // Перенаправление на страницу входа
});

