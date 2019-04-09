import React, { Component } from 'react'
import { navigate } from "gatsby"
import Input from "../components/inputBuilder"
import InputHelper from "../components/helper/formHelper"
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
    this.addRecord(this.props.question.id, this.props.question.prompt, this.state.answer, this.props.question.question_type)
    this.next(e.target.dataset.submit === "true")
  }

  addRecord = (id, question, answer, type) =>{
    this.context.addNewRecord({
      id: id,
      question: question,
      answer: answer,
      type: type,
    })
  }

  next = (isSubmit) => {
    if(isSubmit){
      navigate("/summary")
    }else {
      this.props.handleSlider(`-${(this.props.order + 1) * 80 }`);
    }
  }

  handlePreviousButton = (e) => {
    e.preventDefault();
    this.props.handleSlider(`-${(this.props.order - 1) * 80 }`);
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

    return (
      <div className="card">
        <p className="question-title">{question.prompt}</p>
        <InputHelper 
          is_required={question.is_required} 
          min_char_length={question.min_char_length} 
          current_input={this.state.answer}/>
        <Input 
          key={question.id}
          question={question}
          handleInput={this.onHandleInput}>
        </Input>
        { isPreviousButtonNeeded
          && 
          <button className="previous" 
            onClick={this.handlePreviousButton}>
            Previous
          </button>
        }
        <button className="next"
          disabled={this.state.disabled}
          onClick={this.handleNextButton}
          data-submit={isSubmitButton}>
            { isSubmitButton ? "Submit" : "Next"}
        </button>
      </div>
    )
  }
}

Card.contextType = RecordContext;

export default Card;