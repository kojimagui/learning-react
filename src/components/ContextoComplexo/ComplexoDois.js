import React, { useState } from "react";

import styled from "styled-components";
import { useComplexContextHook } from "../../state/ContextoComplexo";

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

// Método 2 - Com hook
export default function ComplexoDois(props) {
  const [state, dispatch] = useComplexContextHook();
  const [novoNome, setNovoNome] = useState("");

  const changeName = () => {
    const action = {
      type: "CHANGE_NAME",
      payload: novoNome,
    };
    dispatch(action);
    setNovoNome("");
  };

  return (
    <Card>
      <h3>Complexo dois</h3>
      <p>{state.user.name}</p>
      <p>{state.user.email}</p>
      <input
        type="text"
        value={novoNome}
        onChange={(event) => setNovoNome(event.target.value)}
      />
      <button type="button" onClick={changeName}>
        Trocar nome
      </button>
    </Card>
  );
}

//O "oldState" copia o objeto:
//   user: {
//     name: "Guilherme",
//     email: "guilherme@mail.com",
//   },
//   profile: "",
// }
