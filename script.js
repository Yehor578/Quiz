document.addEventListener('DOMContentLoaded', () => {

const questionText = document.querySelector("#question-text")
const answersContainer = document.querySelector("#answers-container")
const scoreDisplay = document.querySelector("#score-display")

const startScreen = document.querySelector("#start-screen")
const quizScreen = document.querySelector("#quiz-screen")
const resultScreen = document.querySelector("#result-screen")
const startBtn = document.querySelector("#start-btn")
const restartBtn = document.querySelector("#restart-btn")

let score = 0
let questionIndex = 0
let interval

const questions = [
  {
    question: "Яка столиця Франції?",
    options: ["Берлін", "Мадрид", "Париж", "Рим"],
    correct: 2
  },
  {
    question: "Яка найбільша країна світу ",
    options: ["США", "Україна", "Японія", "Німеччина"],
    correct: 0
  },
  {
    question: "Яка найбільша планета Сонячної системи?",
    options: ["Земля", "Марс", "Юпітер", "Сатурн"],
    correct: 2
  },
  {
    question: "Яка країна створила перший у світі танк?",
    options: ["Казахстан", "Індія", "Китай", "Велика Британія"],
    correct: 3
  },
  
  
  { 
    question: "Яку першу ядерну бомбу підірвали на полігоні в Казахстані?",
    options : ["Атомна бомба", "Ядерна ракета", "РДС-1"],
    correct: 2
  },
  {
    question: "Яка марка кросівок створила перші футбольні бутси?",
    options: ["Puma", "Nike", "Adidas", "Asics"],
    correct: 2
  },
  {
    question: "Хто заснував компанію Adidas?",
    options: ["Адольф Дасслер", "Рудольф Дасслер", "Філ Найт", "Кіхачіро Оніцука"],
    correct: 0
  },
  {
    question: "Яка країна виграла перший чемпіонат світу з футболу у 1930 році?",
    options: ["Бразилія", "Італія", "Уругвай", "Аргентина"],
    correct: 2
  },
  {
    question: "Яка марка створила легендарні кросівки Air Jordan?",
    options: ["Nike", "Puma", "Adidas", "Reebok"],
    correct: 0
  },
  {
    question: "Який вид спорту є олімпійським з 1896 року?",
    options: ["Футбол", "Баскетбол", "Легка атлетика", "Волейбол"],
    correct: 2
  },
  {
    question: "Хто є рекордсменом за кількістю золотих медалей на Олімпійських іграх?",
    options: ["Усейн Болт", "Майкл Фелпс", "Карл Льюїс", "Лариса Латиніна"],
    correct: 1
  },
  {
    question: "Яка компанія першою випустила кросівки з технологією Boost?",
    options: ["Nike", "Adidas", "Puma", "New Balance"],
    correct: 1
  },
  {
    question: "Який футбольний клуб має прізвисько 'Червоні дияволи'?",
    options: ["Ліверпуль", "Манчестер Юнайтед", "Арсенал", "Челсі"],
    correct: 1
  },
  {
    question: "Яка країна є батьківщиною сумо?",
    options: ["Китай", "Японія", "Корея", "Монголія"],
    correct: 1
  },
  {
    question: "Який вид спорту винайшли у США у 1891 році?",
    options: ["Бейсбол", "Баскетбол", "Американський футбол", "Хокей"],
    correct: 1
  },
  {
    question: "Яка компанія створила перші бігові кросівки з Flyknit?",
    options: ["Nike", "Adidas", "Puma", "Asics"],
    correct: 0
  }
]

function startGame() {
    startScreen.classList.add("hide")
    resultScreen.classList.add("hide")
    document.querySelector("#sixseven").classList.add("hide")
    quizScreen.classList.remove("hide")
    

    score = 0 
    questionIndex = 0
    scoreDisplay.innerText = 0

    showQuestion()
}

function showQuestion() {
    clearInterval(interval)

    if (questionIndex >= questions.length) {
        showResult()
        return
    }

    const question = questions[questionIndex]

    questionText.innerText = question.question
    answersContainer.innerHTML = ""

    question.options.forEach((option, index) => {
        const btn = document.createElement("button")
        btn.innerText = option
        btn.classList.add("answer-btn")

        btn.onclick = () => checkAnswer(index)

        answersContainer.appendChild(btn)
    })

    startTimer()
}

function checkAnswer(answerIndex) {
    clearInterval(interval)

    if (answerIndex === questions[questionIndex].correct) {
        score++
        scoreDisplay.innerText = "Кількість Балів " +  score
    }

    questionIndex++

    setTimeout(showQuestion, 500)
}

function showResult() {
    quizScreen.classList.add("hide")
    resultScreen.classList.remove("hide")

    let accuracy = Math.round((score / questions.length) * 100)

    document.getElementById("result-text").textContent =
        `Твій результат: ${score} з ${questions.length} (${accuracy}%)`
}

function startTimer() {
    let timeLeft = 15
    document.getElementById("timer").textContent = timeLeft

    interval = setInterval(() => {
        timeLeft--
        document.getElementById("timer").textContent = timeLeft

        if (timeLeft <= 0) {
            clearInterval(interval)
            questionIndex++
            showQuestion()
        }
    }, 1000)
}

startBtn.onclick = startGame
restartBtn.onclick = startGame

function showResult() {
    quizScreen.classList.add("hide")
    resultScreen.classList.remove("hide")
        document.querySelector("#sixseven").classList.remove("hide")

    let accuracy = Math.round((score / questions.length) * 100)

    document.getElementById("result-text").textContent =
        `Твій результат: ${score} з ${questions.length} (${accuracy}%)`

    const six = document.getElementById("sixseven")
    six.style.display = "inline-block"
}



})
