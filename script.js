// Inputs
let weightInput = document.querySelector('#weight-input')
let heightInput = document.querySelector('#height-input')

// Button de submit
const btnImc = document.querySelector('#btn-imc')

// Modal
const modal = document.querySelector('.modal-wrapper')
const btnCloseModal = document.getElementById('close')
let imc = document.querySelector('#imc-value')

// Notification
const notification = document.querySelector('.notification')
const error_1 = document.querySelector('#error-1')
const error_2 = document.querySelector('#error-2')
const error_3 = document.querySelector('#error-3')
const error_4 = document.querySelector('#error-4')


// Events

btnImc.addEventListener('click', () => {
  event.preventDefault()

  let errorIndicator = validateInput()

  notification.classList.remove('error')
  error_1.classList.add('hide')
  error_2.classList.add('hide')
  error_3.classList.add('hide')
  error_4.classList.add('hide')

  if (errorIndicator != '0,0,0')
    showError(errorIndicator)
  else {
    imc.innerHTML = calculateIMC(Number(weightInput.value), Number(heightInput.value))
    toggleModal()
  }
})

btnCloseModal.addEventListener('click', toggleModal)

// Functions

function validateInput() {
  let combinationError = []

  if (Number(weightInput.value) > 0 && weightInput.value != '') {
    combinationError.push('0')
  } else {
    combinationError.push('1')
  }

  if (Number(heightInput.value) > 0 && heightInput.value != '') {
    combinationError.push('0')
  } else {
    combinationError.push('1')
  }

  if (weightInput.validity.valid || heightInput.validity.valid) {
    combinationError.push('0')
  } else {
    combinationError.push('1')
  }

  return combinationError.toString()
}

function showError(errorIndicator) {
  notification.classList.add('error')

  if (errorIndicator == '1,0,0')
    error_1.classList.remove('hide')

  else if (errorIndicator == '0,1,0')
    error_2.classList.remove('hide')

  else if (errorIndicator == '1,1,0')
    error_3.classList.remove('hide')

  else
    error_4.classList.remove('hide')
}

function calculateIMC(weight, height) {
  const imc = weight / height ** 2

  return imc.toFixed(2)
}

function toggleModal() {
  modal.classList.toggle('open')
}