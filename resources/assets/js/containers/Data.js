import { connect } from 'react-redux'

import Data from '../components/Data'
import { syncData } from '../actions'


const mapStateToProps = (state) => ({
  value: state.value
})
const mapDispatchToProps = {
  syncData
}
const DataContainer = connect(mapStateToProps, mapDispatchToProps)(Data)

export default DataContainer
