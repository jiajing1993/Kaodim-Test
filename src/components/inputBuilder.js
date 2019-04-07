import React, { Component } from 'react'

export default class inputBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  inputTypeIdentifier = (string) => {
    const type = string.replace("Question", "")
    return type.charAt(0).toLowerCase() + type.slice(1);
  }

  onChange = (event) => {
    const length = this.props.question.min_char_length
    let validLength = length && event.target.value.length >= length
    this.props.greet(!validLength);
  }

  render() {
    const question = this.props.question
    return (
      <div>
        <input
          type={this.inputTypeIdentifier(question.question_type)}
          name={`question${question.id}`} 
          onChange={this.onChange} />
      </div>
    )
  }
}
