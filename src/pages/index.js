import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import * as data from "../data/questions.json"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>{ data.title }</h1>
      {
        data.questions.map((question) => {
          return (
            <Card key={question.id} question={question} />
          )
        })
      }
    </Layout>
  )
}

export default IndexPage
