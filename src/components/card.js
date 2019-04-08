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
    console.log(e.target.dataset.submit === "true")
    if(e.target.dataset.submit === "true"){
      navigate("/summary")
    }else {
      this.props.handleSlider(`-${(this.props.order + 1) * 100 }`);
    }
  }

  handlePreviousButton = (e) => {
    e.preventDefault();
    this.props.handleSlider(`-${(this.props.order - 1) * 100 }`);
  }

  onHandleInput = (status, input) => {
    this.setState({
      disabled: status,
      answer: input
    })  
  }

  render() {
    const question = this.props.question
    const isSubmitButton = this.props.order === (this.props.maxLength - 1)
    const isPreviousButtonNeeded = this.props.order !== 0
    console.log(isSubmitButton)
    return (
      <div className="card">
        <p>{question.prompt}</p>
        <Input key={question.id} question={question} handleInput={this.onHandleInput}></Input>
        { isPreviousButtonNeeded && <button className="previous" onClick={this.handlePreviousButton} >Previous</button> }
        <button className="next" disabled={this.state.disabled} onClick={this.handleNextButton} data-submit={isSubmitButton}>
          { isSubmitButton ? "Submit" : "Next"}
        </button>
      </div>
    )
  }
}

Card.contextType = RecordContext;

export default Card;