import React from "react";
import styled from "styled-components";
// import userStore from '../state/RxJs/store/user.store'
import { useUserStoreFacade } from "../../state/RxJs/hooks/user.store.hook";

const Card = styled.div`
  width: 240px;
  height: 160px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 16px;
  padding: 8px;
  background-color: #fafafa;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  border-radius: 5px;
`;

export default function RxJsUm(props) {
  // WITHOUT HOOK
  // const [state, setState] = useState(userStore.initialState)

  // useEffect(() => {
  //   userStore.init()
  //   userStore.observe(setState)
  // }, [])

  //WITH HOOK
  const [state] = useUserStoreFacade();

  return (
    <Card>
      <h3>RxJs um</h3>
      <p>{state.detail.name}</p>
      <p>{state.detail.email}</p>
    </Card>
  );
}
