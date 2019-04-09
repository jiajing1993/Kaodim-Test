import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecordContext from '../context/RecordContext'
import '../style/summary.scss'

const SummaryPage = () => {
  return (
    <Layout>
      <SEO title="Report Summary" keywords={[`gatsby`, `application`, `react`]} />
      <h1 className="form-title">Summary</h1>
      <div className="summary-card">
        <div className="sumary-list">
          <RecordContext.Consumer>
            {state => {
              if (state.records.length === 0){
                return (
                  <div className="summary">
                    <p className="summary-title">Opps!! Apa pun tak dak</p>
                    <p className="summary-answer">You can go back and edit ya.</p>
                  </div>
                ) 
              }else {
                return (
                  state.records.map((record, index) => {
                    return (
                      <div className="summary" key={index}>
                        <p className="summary-title"><span role="img" aria-label="robot">🤖</span>: { record.question }</p>
                        
                        { record.type === "FileQuestion" 
                          ? 
                          <img className="summary-image" src={record.answer} alt="user img"></img>
                          : 
                          <p className="summary-answer"><span role="img" aria-label="thinking">🤔</span>: { record.answer || "---" }</p>}
                      </div>
                    )
                  })
                )
              }
            }}
          </RecordContext.Consumer>
        </div>
        <Link className="btn edit-btn" to="/">Edit</Link>
      </div>
    </Layout>
  )
}

export default SummaryPage