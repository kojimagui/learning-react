import React from "react";
import styled from "styled-components";
import { useUserStoreFacade } from "../../state/RxJs/hooks/user.store.hook";
// import userStore from "../state/RxJs/store/user.store";

const Card = styled.div`
  width: 240px;
  height: 216px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 16px;
  padding: 8px;
  background-color: #fafafa;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  border-radius: 5px;
  text-align: center;
`;

export default function RxJsDois(props) {
  // WITHOUT HOOK
  // const [state, setNome] = useState(userStore.initialState)

  // const [novoNome, setnovoNome] = useState("");

  // useEffect(() => {
  //   userStore.init()
  //   userStore.observe(setNome)
  // }, [])

  // const changeName = () => {
  //   userStore.userNameChange(novoNome)
  //   setnovoNome('');
  // }

  // WITH HOOK
  const [state, nome, setNome, novoNome] = useUserStoreFacade();

  return (
    <Card>
      <h3>RxJs dois</h3>
      <p>{state.detail.name}</p>
      <p>{state.detail.email}</p>
      <input
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <button type="button" onClick={() => novoNome(nome)}>
        Trocar nome
      </button>
    </Card>
  );
}
