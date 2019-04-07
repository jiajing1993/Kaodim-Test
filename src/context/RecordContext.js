import React from "react"

const RecordContext = React.createContext()

class RecordProvider extends React.Component {
  state = {
    records: []
  }

  render() {
    const { records } = this.state
    return (
      <RecordContext.Provider value={{
        records, 
        addNewRecord: (newRecord) => {
          this.setState({
            records: [...this.state.records, newRecord]
          });
        }
      }}>
        {this.props.children}
      </RecordContext.Provider>
    )
  }
}

export default RecordContext
export { RecordProvider }