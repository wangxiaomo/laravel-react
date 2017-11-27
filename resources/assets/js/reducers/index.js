const data = (state={value:''}, action) => {
  switch(action.type) {
    case 'sync-data':
      return {value: action.data}
    default:
      return state
  }
}

export default data
