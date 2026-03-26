// Змінна для зберігання значення лічильника
let count = 0;

// Функція для збільшення лічильника
function incrementCounter() {
    count++;
    updateCounter();
}

// Функція для зменшення лічильника
function decrementCounter() {
    count--;
    updateCounter();
}

// Функція для скидання лічильника
function resetCounter() {
    count = 0;
    updateCounter();
}

// Функція для оновлення дисплею лічильника
function updateCounter() {
    document.getElementById('counter').textContent = count;
}

// Функція для виведення привіту
function sayHello() {
    const nameInput = document.getElementById('nameInput');
    const greetingElement = document.getElementById('greeting');
    const name = nameInput.value.trim();

    if (name === '') {
        greetingElement.textContent = 'Будь ласка, введіть ім\'я!';
        greetingElement.style.color = '#f56565';
    } else {
        greetingElement.textContent = `Привіт, ${name}! 👋`;
        greetingElement.style.color = '#667eea';
        nameInput.value = '';
    }

    greetingElement.style.display = 'block';
}

// Дозволити натиснути Enter в полі введення
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                sayHello();
            }
        });
    }
});
