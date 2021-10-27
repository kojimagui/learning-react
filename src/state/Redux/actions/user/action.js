import { USER_CHANGE_NAME, USER_CHANGE_JOB } from './types'

export function setNewUserName(newName) {
  return {
    type: USER_CHANGE_NAME,
    payload: newName
  }
}

export function setNewJob(newJob) {
  return {
    type: USER_CHANGE_JOB,
    payload: newJob
  }
}
