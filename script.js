// Button de submit
const form = document.querySelector('form')

// Inputs
const Inputs = {
  weight: document.querySelector('#weight-input'),
  height: document.querySelector('#height-input')
}

// Modal
const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  imcValue: document.querySelector('#imc-value'),
  buttonClose: document.getElementById('close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

// Notification
const Errors = {
  notification: document.querySelector('.notification'),
  error_1: document.querySelector('#error-1'),
  error_2: document.querySelector('#error-2'),
  error_3: document.querySelector('#error-3'),
  error_4: document.querySelector('#error-4')
}


// Events

form.onsubmit = () => {
  event.preventDefault()

  let errorIndicator = validateInput()

  Errors.notification.classList.remove('error')
  Errors.error_1.classList.add('hide')
  Errors.error_2.classList.add('hide')
  Errors.error_3.classList.add('hide')
  Errors.error_4.classList.add('hide')

  if (errorIndicator != '0,0,0')
    showError(errorIndicator)
  else {
    Modal.imcValue.innerHTML = calculateIMC(Number(Inputs.weight.value), Number(Inputs.height.value))
    Modal.open()
  }
}

Modal.buttonClose.onclick = () => Modal.close()

// Functions

function validateInput() {
  let combinationErrors = []

  if (Number(Inputs.weight.value) > 0 && Inputs.weight.value != '') {
    combinationErrors.push('0')
  } else {
    combinationErrors.push('1')
  }

  if (Number(Inputs.height.value) > 0 && Inputs.height.value != '') {
    combinationErrors.push('0')
  } else {
    combinationErrors.push('1')
  }

  if (Inputs.weight.validity.valid || Inputs.height.validity.valid) {
    combinationErrors.push('0')
  } else {
    combinationErrors.push('1')
  }

  return combinationErrors.toString()
}

function showError(errorIndicator) {
  Errors.notification.classList.add('error')

  if (errorIndicator == '1,0,0')
    Errors.error_1.classList.remove('hide')

  else if (errorIndicator == '0,1,0')
    Errors.error_2.classList.remove('hide')

  else if (errorIndicator == '1,1,0')
    Errors.error_3.classList.remove('hide')

  else
    Errors.error_4.classList.remove('hide')
}

function calculateIMC(weight, height) {
  const imc = weight / (height / 100) ** 2

  return imc.toFixed(2)
}