import React, { Component } from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import * as data from "../data/questions.json"

class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      position: "0",
    }
  }

  onHandleSlider = (order) => {
    this.setState({
      position: order,
    })
  };

  render(){
    return (
      <Layout>
      <SEO title="Questions" keywords={[`gatsby`, `application`, `react`]} />
      <h1 className="form-title">{ data.title }</h1>
      <div className="card-lists">
        <div className="card-lists-slider" style={{
          'transform': `translateX(${this.state.position}%)`
        }}>
          {
            data.questions.map((question, index) => {
              return (
                <Card
                  key={question.id} 
                  order={index}
                  maxLength={data.questions.length} 
                  question={question} 
                  handleSlider={this.onHandleSlider}
                />
              )
            })
          }
        </div>
      </div>
    </Layout>
    )
  }
}

export default index
