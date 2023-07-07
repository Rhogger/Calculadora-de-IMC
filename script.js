// Inputs
let weightInput = document.querySelector('#weight-input')
let heightInput = document.querySelector('#height-input')

// Button de submit
const btnImc = document.querySelector('#btn-imc')

// Modal
const modal = document.querySelector('.modal-wrapper')
let imc = document.querySelector('#imc-value')

// Notification
const notification = document.querySelector('.notification')
const error_1 = document.querySelector('#error-1')
const error_2 = document.querySelector('#error-2')
const error_3 = document.querySelector('#error-3')
const error_4 = document.querySelector('#error-4')
const error_5 = document.querySelector('#error-5')


// Events

btnImc.addEventListener('click', () => {
  event.preventDefault()



  validateInput()
})

// Functions

function validateInput() {
  let errorIndicator = []

  if (Number(weightInput.value) > 0 && weightInput.value != '') {
    errorIndicator.push('0')
  } else {
    errorIndicator.push('1')
  }

  if (Number(heightInput.value) > 0 && heightInput.value != '') {
    errorIndicator.push('0')
  } else {
    errorIndicator.push('1')
  }

  if (weightInput.validity.valid || heightInput.validity.valid) {
    errorIndicator.push('0')
  } else {
    errorIndicator.push('1')
  }

  console.log(errorIndicator);
  console.log(errorIndicator.toString());
  console.log(errorIndicator.toString() === '1,1,1');

  return errorIndicator
}

function showError() {
  notification.classList.toggle('error')


}