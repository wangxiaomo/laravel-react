import React from 'react'
import axios from 'axios'

class Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = {r: ''}
  }

  componentWillMount() {
    this.setState({r: 'loading'})
  }

  componentDidMount() {
    axios.get('/api/data')
      .then((response) => {
        this.setState({r: response.data.msg})
      })
  }

  render() {
    return (
      <div>{ this.state.r }</div>
    )
  }
}

export default Data
