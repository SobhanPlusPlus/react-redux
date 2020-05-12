import {START_LODING, STOP_LODING} from "../actions/loding-action"

const LodingReducer = (state = false, action) => {
    console.log(action)
    switch (action.type) {
        case STOP_LODING:
            return false
        case START_LODING:
            return true
        default:
          return state
      }
 
  }

  export default LodingReducer;