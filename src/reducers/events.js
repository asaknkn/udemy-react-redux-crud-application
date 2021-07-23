import _ from 'lodash'
import { READ_EVENTS } from '../actions'

const switchEvents = (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
      //return action.response.data
    default:
      return events
  }
}

export default switchEvents