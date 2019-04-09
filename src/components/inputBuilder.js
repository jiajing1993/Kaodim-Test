import React, { Component } from 'react'

export default class inputBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = { img: "" };
  }

  inputTypeIdentifier = (string) => {
    const type = string.replace("Question", "")
    return type.charAt(0).toLowerCase() + type.slice(1);
  }

  onChange = (event) => {
    const length = this.props.question.min_char_length
    let validLength = length && event.target.value.length >= length
    this.props.handleInput(!validLength, event.target.value);
  }

  onCheck = (event) => {
    this.props.handleInput(false, event.target.value);
  }

  onUpload = (event) => {
    const imgURL = URL.createObjectURL(event.target.files[0])
    this.props.handleInput(false, imgURL);
    this.setState({img: imgURL })
  }

  render() {
    const question = this.props.question
    const type = this.inputTypeIdentifier(question.question_type)
    return (
      <div>
        { type === "text" && <input type="text" name={`question${question.id}`} onChange={this.onChange} />}
        { type === "radio" && question.options.map((option, index) => {
          return (
            <div key={index}>
              <input type="radio" value={option} name={`rbi${question.id}`} onChange={this.onCheck}/>
              <label>{option}</label>
            </div>
          )
        })}
        { type === "file" && 
          (
            <div>
              <input type="file" name={`question${question.id}`} onChange={this.onUpload}/>
              {!this.state.img || <img src={this.state.img} width="50%" alt="upload img"></img>}
            </div>
          )
        }
      </div>
    )
  }
}
