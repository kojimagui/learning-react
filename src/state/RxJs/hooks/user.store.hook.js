import { useState, useEffect } from "react";
import userStore from "../store/user.store";

export function useUserStoreFacade() {
  const [name, setName] = useState("");
  const [state, setState] = useState(userStore.initialState);

  const changeName = () => {
    userStore.userNameChange(name);
    setName("");
  };

  useEffect(() => {
    userStore.setLoading(true);
    // ex: calls a service that make a GET http request to find an user
    userStore.init(/* With a response */);
    userStore.observe(setState);
  }, []);

  return [state, name, setName, changeName];
}
