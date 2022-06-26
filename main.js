const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = ['Tak', 'Nie', 'Lepiej nie pytaj', 'Nie chcesz znać odpowiedzi', 'Znasz odpowiedź na to pytanie', 'Nie mogę ci powiedzieć', 'Oczywiście że tak', 'Nigdy', 'Wcale', 'Może kiedyś']

const checkLength = () => {

    if (input.value.length > 2) {
        if (input.value.includes('?')) {
            randomAnswer();
            addClassToImg()

            error.textContent = ''

        } else {
            error.textContent = 'Postaw znak zapytania'
            answer.textContent = ''
        }
    } else {
        error.textContent = 'Zadaj pytanie'
        answer.textContent = ''
    }

    input.value = ''
}

const removeClassToImg = () => {
    ball.classList.remove('shake-animation')
}

const addClassToImg = () => {
    ball.classList.add('shake-animation')
    setTimeout(removeClassToImg, 1000)

}

const randomAnswer = () => {
    const min = 0
    const max = 10

    answer.textContent = answers[Math.floor(Math.random() * (max - min)) + min]

}


const keyCheck = e => {
    if (e.key === 'Enter') {
        checkLength()
    }

}

input.addEventListener('keyup', keyCheck)