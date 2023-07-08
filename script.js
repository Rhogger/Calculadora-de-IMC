import { Inputs, validateInput } from './modules/inputs.js'
import { Modal } from './modules/modal.js'
import * as Notification from './modules/errors.js'


const form = document.querySelector('form')

form.onsubmit = () => {
  event.preventDefault()

  let errorIndicator = validateInput()

  Notification.Errors.notification.classList.remove('error')
  Notification.Errors.error_1.classList.add('hide')
  Notification.Errors.error_2.classList.add('hide')
  Notification.Errors.error_3.classList.add('hide')
  Notification.Errors.error_4.classList.add('hide')

  if (errorIndicator != '0,0,0')
    Notification.showError(errorIndicator)
  else {
    Modal.imcValue.innerHTML = calculateIMC(Number(Inputs.weight.value), Number(Inputs.height.value))
    Modal.open()
  }
}

function calculateIMC(weight, height) {
  const imc = weight / (height / 100) ** 2

  return imc.toFixed(2)
}