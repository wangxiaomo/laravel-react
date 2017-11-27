import React from 'react'
import axios from 'axios'


class Data extends React.Component {
  componentWillMount() {
    this.props.syncData('loading')
  }

  componentDidMount() {
    axios.get('/api/data')
      .then((response) => {
        this.props.syncData(response.data.msg)
      })
  }

  render() {
    return (
      <div>{this.props.value}</div>
    )
  }
}

export default Data
