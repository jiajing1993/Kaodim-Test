import React, { Component } from 'react'
import Input from "../components/inputBuilder"

export default class card extends Component {
  constructor(props){
    super(props)
    this.state = {
      disabled: this.props.question.is_required
    }
  }

  onGreet = (string) => {
    console.log(string)
    this.setState({
      disabled: string
    })
  }

  render() {
    const question = this.props.question
    return (
      <div>
        <p>{question.prompt}</p>
        <Input key={question.id} question={question} greet={this.onGreet}></Input>
        <button>Previous</button>
        <button disabled={this.state.disabled}> Next</button>
      </div>
    )
  }
}
