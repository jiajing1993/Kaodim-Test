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
        { this.props.order !== "first" && <button>Previous</button> }
        { this.props.order !== "last"
          ? <button disabled={this.state.disabled}> Next</button>
          : <button disabled={this.state.disabled}> Submit</button>
        }
      </div>
    )
  }
}
