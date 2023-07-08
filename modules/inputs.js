const Inputs = {
  weight: document.querySelector('#weight-input'),
  height: document.querySelector('#height-input')
}

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

export { Inputs, validateInput }