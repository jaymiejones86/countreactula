import React from 'react'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {total: 0, number1: 0, number2: 0, operator: '+'};
  }
  setNumber1(event) {
    this.setState({number1: parseFloat(event.target.value)})
  }
  setNumber2(event) {
    this.setState({number2: parseFloat(event.target.value)})
  }
  setOperator(event) {
    this.setState({operator: event.target.value})
  }
  calculate() {
    let total = 0
    switch(this.state.operator) {
      case '+':
      total = this.state.number1 + this.state.number2
      break
      case '-':
      total = this.state.number1 - this.state.number2
      break
      case '*':
      total = this.state.number1 * this.state.number2
      break
      case '/':
      total = this.state.number1 / this.state.number2
      break
      default:
      total = this.state.number1 + this.state.number2
      break
    }
    this.setState({total: total})
  }
  render() {
    let leftStyle = { float: "left" }
    let rightStyle = { float: "right" }
    return (
     <div>
     <div style={leftStyle}>
     <input defaultValue={this.state.number1} onChange={this.setNumber1.bind(this)} name="number1" type="text" placeholder="number 1" /><br />
     <input defaultValue={this.state.number2} onChange={this.setNumber2.bind(this)} name="number2" type="text" placeholder="number 2" /><br />
     <select defaultValue={this.state.operator} onChange={this.setOperator.bind(this)} name="calc_type">
     <option value='+'>Add</option>
     <option value='-'>Minus</option>
     <option value='*'>Multiply</option>
     <option value='/'>Divide</option>
     </select><br />
     <button onClick={this.calculate.bind(this)}>Calc</button>
     </div>
     <div style={rightStyle}>
     <h1 id="total">{this.state.total}</h1>
     </div>
     </div>
     )
  }
}

React.render(<Calculator />, document.getElementById('app'))
