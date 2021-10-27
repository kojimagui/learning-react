import { USER_CHANGE_NAME, USER_CHANGE_JOB } from '../../actions/user/types'

const initialState = {
  detail: {
    name: 'Koda',
    email: 'kodinha@mail.com'
  },
  job: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CHANGE_NAME:
      return {
        ...state,
        detail: {
          ...state.detail,
          name: action.payload
        }
      }
    case USER_CHANGE_JOB:
      return {
        ...state,
        job: action.payload
      }
    default:
      return state
  }
}

export default userReducer
