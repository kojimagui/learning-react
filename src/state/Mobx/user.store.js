import { observable, makeObservable, action, computed } from "mobx";

class User {
  detail = {
    name: "Guilherme",
    email: "guilherme.kojima",
  };
  job = null;

  constructor() {
    makeObservable(this, {
      detail: observable,
      job: observable,
      changeUserName: action,
      changeUserJob: action,
      liquidValue: computed,
    });
  }

  changeUserName(newName) {
    this.detail.name = newName;
  }

  changeUserJob(newJob) {
    this.job = newJob;
  }

  get liquidValue() {
    let finalValue = 0;
    if (this.job) {
      finalValue = this.job.grossValue - this.job.tribute * 100;
    }
    return finalValue;
  }
}

const observableUserStore = new User();
export default observableUserStore;
