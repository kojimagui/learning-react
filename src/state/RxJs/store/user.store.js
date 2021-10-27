import { BehaviorSubject } from "rxjs";

const initialState = {
  detail: {
    name: "Nezumi",
    email: "nezumi@mail.com",
  },
  job: "",
  isLoading: false,
  initialized: false,
};

let state = initialState;

// Subject only look for new changes
// BehaviourSubject look for new changes and the last state

// Redux reducer like
const subject = new BehaviorSubject(initialState);

const userStore = {
  // next = dispatch like
  init: (newState) => {
    if (!initialState.initialized) {
      state = {
        ...state,
        initialized: true,
        isLoading: false,
      };
      subject.next(initialState);
    }
  },
  // subscribe observer
  observe: (funcCallBack) => {
    subject.subscribe(funcCallBack, console.error);
  },
  userNameChange: (name) => {
    state = {
      ...state,
      detail: {
        ...state.detail,
        name,
      },
    };

    subject.next(state);
  },
  userChangeJob: (job) => {
    state = {
      ...state,
      job,
    };

    subject.next(state);
  },
  setLoading: (isLoading) => {
    state = {
      ...state,
      isLoading,
    };
  },
  initialState,
};

export default userStore;
