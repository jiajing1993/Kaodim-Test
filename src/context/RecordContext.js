import React from "react"

const RecordContext = React.createContext()

class RecordProvider extends React.Component {
  state = {
    records: []
  }

  handleNewRecord = (newRecord) => {
    let newRecordsList
    let currentRecordsList = this.state.records
    let replacement = this.state.records.filter((record) => {return record.id === newRecord.id})
    if (replacement.length === 0){
      newRecordsList = [...currentRecordsList, newRecord]
    }else {
      newRecordsList = currentRecordsList.map((record) => {
        if (record.id === replacement[0].id) { return newRecord } else { return record }
      });
    }
    this.setState({
      records: newRecordsList
    });
  }

  render() {
    const { records } = this.state
    return (
      <RecordContext.Provider value={{
        records, 
        addNewRecord: this.handleNewRecord
      }}>
        {this.props.children}
      </RecordContext.Provider>
    )
  }
}

export default RecordContext
export { RecordProvider }