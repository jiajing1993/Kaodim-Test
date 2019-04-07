import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Input from "../components/inputBuilder"
import * as data from "../data/questions.json"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>{ data.title }</h1>
      {
        data.questions.map((question) => {
          return (
            <Input key={question.id} question={question}></Input>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage
