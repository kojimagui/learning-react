import { JOB_CHANGE_JOB } from './types'

export function setNewJob(newJob) {
  return {
    type: JOB_CHANGE_JOB,
    payload: newJob
  }
}
