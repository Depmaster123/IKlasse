// Получение информации о пользователе из localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];
const currentUserEmail = localStorage.getItem('currentUserEmail');
const currentUser = users.find(user => user.email === currentUserEmail);

// Отображение email пользователя
if (currentUser) {
    document.getElementById('user-email').innerText = currentUserEmail;

    // Заполнение таблицы оценок
    const gradesBody = document.getElementById('grades-body');
    if (currentUser.grades && currentUser.grades.length > 0) {
        currentUser.grades.forEach(grade => {
            const row = document.createElement('tr');
            const dateCell = document.createElement('td');
            const gradeCell = document.createElement('td');

            dateCell.innerText = grade.date; // Используем поле date из объекта оценки
            gradeCell.innerText = `${grade.type}: ${grade.value} (${grade.description})`; // Формируем строку из полей

            row.appendChild(dateCell);
            row.appendChild(gradeCell);
            gradesBody.appendChild(row);
        });
    } else {
        gradesBody.innerHTML = '<tr><td colspan="2">Оценки отсутствуют.</td></tr>'; // Показать сообщение, если оценок нет
    }

    // Заполнение таблицы домашних заданий
    const homeworkBody = document.getElementById('homework-body');
    if (currentUser.homework && currentUser.homework.length > 0) {
        currentUser.homework.forEach(hw => {
            const row = document.createElement('tr');
            const homeworkCell = document.createElement('td');
            const deadlineCell = document.createElement('td');

            homeworkCell.innerText = hw.description; // Используем поле description из объекта домашнего задания
            deadlineCell.innerText = hw.deadline; // Используем поле deadline из объекта

            row.appendChild(homeworkCell);
            row.appendChild(deadlineCell);
            homeworkBody.appendChild(row);
        });
    } else {
        homeworkBody.innerHTML = '<tr><td colspan="2">Домашние задания отсутствуют.</td></tr>'; // Показать сообщение, если домашних заданий нет
    }
} else {
    document.getElementById('user-email').innerText = 'Пользователь не найден.';
}

// Функция возврата на предыдущую страницу
function goBack() {
    window.history.back();
}
