import React, { Component } from 'react'
import { navigate } from "gatsby"
import Input from "../components/inputBuilder"

import RecordContext from '../context/RecordContext'
class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      disabled: this.props.question.is_required,
      answer: "",
    }
  }

  handleNextButton = (e) => {
    e.preventDefault();
    this.context.addNewRecord({
      question: this.props.question.prompt,
      answer: this.state.answer
    })
    if(e.target.dataset.submit === "true"){
      navigate("/summary")
    }
  }

  onHandleInput = (status, input) => {
    this.setState({
      disabled: status,
      answer: input
    })
  }

  render() {
    const question = this.props.question
    return (
      <div>
        <p>{question.prompt}</p>
        <Input key={question.id} question={question} handleInput={this.onHandleInput}></Input>
        { this.props.order !== "first" && <button>Previous</button> }
        <button disabled={this.state.disabled} onClick={this.handleNextButton} data-submit={this.props.order === "last"}>
          { this.props.order !== "last" ? "Next" : "Submit"}
        </button>
      </div>
    )
  }
}

Card.contextType = RecordContext;

export default Card;