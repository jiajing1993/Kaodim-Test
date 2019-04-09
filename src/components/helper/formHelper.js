import React, { Component } from 'react'

export default class formHelper extends Component {
  render() {
    const is_required = this.props.is_required
    const min_char_length = this.props.min_char_length
    const current_input = this.props.current_input
    return (
      <div>
        <p className="input-helper">
        { (is_required && current_input.length === 0 ) && <i>Required * </i>}
        { (min_char_length && (min_char_length - current_input.length > 0) ) 
          && 
          <i>You need {min_char_length - current_input.length} characters more</i>}
        </p>
      </div>
    )
  }
}
