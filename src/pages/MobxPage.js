import React from "react";
import MobxDois from "../components/Mobx/MobxDois";
import MobxUm from "../components/Mobx/MobxUm";
import userStore from "../state/Mobx/user.store";
import jobStore from "../state/Mobx/job.store";

export default function ReduxPage() {
  return (
    <>
      <MobxUm userState={userStore} />
      <MobxDois userState={userStore} jobState={jobStore} />
    </>
  );
}
