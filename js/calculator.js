import React from 'react'
import { connect } from 'react-redux'
import { calc } from './reducers'

class OperatorChooser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <select defaultValue={this.props.value} onChange={this.props.setOperator} name="calc_type">
         <option value='+'>Add</option>
         <option value='-'>Minus</option>
         <option value='*'>Multiply</option>
         <option value='/'>Divide</option>
       </select>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {total: 0, entered1: 0, entered2: 0, selectedOperator: "+"}
  }
  setOperator(event) {
    this.setState({selectedOperator: event.target.value})
  }
  calculate() {
    let n1 = React.findDOMNode(this.refs.input1).value
    let n2 = React.findDOMNode(this.refs.input2).value
    this.props.calc(n1, n2, this.state.selectedOperator)
  }
  render() {
    let leftStyle = { float: "left" }
    let rightStyle = { float: "right" }
    return (
     <div>
       <div style={leftStyle}>
         <input ref="input1" defaultValue={this.state.entered1} onChange={this.setNumber1.bind(this)} name="number1" type="text" placeholder="number 1" /><br />
         <input ref="input2" defaultValue={this.state.entered2} onChange={this.setNumber2.bind(this)} name="number2" type="text" placeholder="number 2" /><br />
         <OperatorChooser value={this.state.operator} setOperator={this.setOperator.bind(this)}/><br />
         <button onClick={this.calculate.bind(this)}>Calc</button>
       </div>
       <div style={rightStyle}>
         <h1 id="total">{this.state.total}</h1>
       </div>
     </div>
     )
  }
}

export default connect(null, { calc } )(Calculator)
