import { JOB_CHANGE_JOB } from '../../actions/job/types'

const initialState = {
  name: 'Dev',
  company: 'Groove'
}

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOB_CHANGE_JOB:
      return {
        ...action.payload
      }

    default:
      return state
  }
}

export default jobReducer
