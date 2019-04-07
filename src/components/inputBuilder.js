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
    let length = this.props.question.min_char_length
    if (this.props.question.is_required){
      if ( length && event.target.value.length >= length ){
        console.log(event.target.value);
        console.log("trigger back to parent")
      }
    }else {
      console.log("trigger back to parent")
    }
  }

  render() {
    const question = this.props.question
    return (
      <div>
        <p>{this.props.question.prompt}</p>
        <input
          type={this.inputTypeIdentifier(question.question_type)}
          name={`question${question.id}`} 
          onChange={this.onChange} />
      </div>
    )
  }
}
