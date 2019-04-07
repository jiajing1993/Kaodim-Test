import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecordContext from '../context/RecordContext'

const SummaryPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <RecordContext.Consumer>
        {state => {
          return (
            state.records.map((record, index) => {
              return (
                <div key={index}>
                  <p>{ record.question }</p>
                  <p>{record.answer}</p>
                </div>
              )
            })
          )
        }}
      </RecordContext.Consumer>
    </Layout>
  )
}

export default SummaryPage