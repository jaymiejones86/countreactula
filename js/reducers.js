// action type
export const ADD = 'ADD'
export const MULTIPLY = 'MULTIPLY'
export const SUBTRACT = 'SUBTRACT'
export const DIVIDE = 'DIVIDE'

// action creator
export function getEmployeer(id) {
  return dispatch() => {
    $.ajax("dfdfdf", function(res, err) {
      if (res) {
        dispatch(employeeGot(res))
      else {
        disaptch(employeeErr(err))
      }
    }
  }
}

function employeeGot(data) {
  return { type: EMPLOYEE_GOT, data: data }
}

function employeeErr(err) {
  return { type: EMPLOYEE_ERR, err: err }
}


export function calc(number1, number2, operator) {
  let typeThing
  switch(operator) {
    case '+':
      typeThing = ADD
      break
    case '-':
      typeThing = SUBTRACT
      break
    case '*':
      typeThing = MULTIPLY
      break
    case '/':
      typeThing = DIVIDE
      break
  }
  return {
    type: typeThing,
    number1: number1,
    number2: number2
  }
}

// reducer
let initialState = {
  result: 0,
  number1: 0,
  number2: 0,
  operator: '+'
}

export function sums(state = initialState, action) {
  let newResult
  switch(action.type) {
  case ADD:
    newResult = action.number1 + action.number2
    return Object.assign({}, state, {result: newResult})
  case SUBTRACT:
    newResult = action.number1 - action.number2
    return Object.assign({}, state, {result: newResult})
  case MULTIPLY:
    newResult = action.number1 * action.number2
    return Object.assign({}, state, {result: newResult})
  case DIVIDE:
    newResult = action.number1 / action.number2
    return Object.assign({}, state, {result: newResult})
  default:
    return state
  }
}
