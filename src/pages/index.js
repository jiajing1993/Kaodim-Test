import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import * as data from "../data/questions.json"

const IndexPage = () => {
  function arrayOrder(index, totalLength){
    if (index === totalLength - 1){
      return "last"
    }else if(index === 0){
      return "first"
    }else {
      return "middle"
    }
  };
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>{ data.title }</h1>
      {
        data.questions.map((question, index) => {
          return (
            <Card key={question.id} order={arrayOrder(index, data.questions.length)} question={question} />
          )
        })
      }
    </Layout>
  )
}

export default IndexPage
