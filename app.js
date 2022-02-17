const form = document.querySelector(".quiz-form")
const quizScore = document.querySelector(".quiz-score")

const correctAnswers = ["A", "A", "B", "B"]

const handleUserAnswer = (event) => {
  event.preventDefault()

  let score = 0

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]

  const checkUserAnswer = (userAnswer, index) => {
    const isAValidAnswer = userAnswer === correctAnswers[index]

    if (isAValidAnswer) {
      score += 25
      quizScore.textContent = score
      return
    }

    quizScore.textContent = score
    
  }

  userAnswers.forEach(checkUserAnswer)

}

form.addEventListener('submit', handleUserAnswer)
