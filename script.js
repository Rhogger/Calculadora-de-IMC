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
const error_1 = document.querySelector('#only-numbers')
const error_2 = document.querySelector('#not-zero-weight')
const error_3 = document.querySelector('#not-zero-hight')

// Events

btnImc.addEventListener('click', () => {
  event.preventDefault()



  validateInput()
})

// Functions

function validateInput() {
  if (Number(weightInput.value) > 0 && weightInput.value != '') {
    if (Number(heightInput.value) > 0 && heightInput.value != '') {
      console.log('Inputs válidos');
      return true
    }
  }

  return false
}

function showError() {

}