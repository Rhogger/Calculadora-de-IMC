const Errors = {
  notification: document.querySelector('.notification'),
  error_1: document.querySelector('#error-1'),
  error_2: document.querySelector('#error-2'),
  error_3: document.querySelector('#error-3'),
  error_4: document.querySelector('#error-4')
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

export { Errors, showError }