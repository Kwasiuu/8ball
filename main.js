const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = ['Tak', 'Nie', 'Lepiej nie pytaj', 'Nie chcesz znać odpowiedzi', 'Znasz odpowiedź na to pytanie', 'Nie mogę ci powiedzieć', 'Oczywiście że tak', 'Nigdy', 'Wcale', 'Może kiedyś']

const checkLength = () => {

    if (input.value !== '') {
        if (input.value.includes('?')) {
            randomAnswer();
            addClassToImg();

            error.textContent = ''
            input.value = ''

        } else {
            error.textContent = 'Postaw znak zapytania'
            answer.textContent = ''
        }
    } else {
        error.textContent = 'Zadaj pytanie'
        answer.textContent = ''
    }


}

const removeClassToImg = () => {
    ball.classList.remove('shake-animation')
}

const addClassToImg = () => {
    ball.classList.add('shake-animation')
    setTimeout(removeClassToImg, 1000)

}

const randomAnswer = () => {

    const number = answers[Math.floor(Math.random() * 10)]

    answer.innerHTML = `<span>Odpowiedź: </span> ${number}`

}


const keyCheck = e => {
    if (e.key === 'Enter') {
        checkLength()
    }

}

input.addEventListener('keyup', keyCheck)
ball.addEventListener('click', checkLength)