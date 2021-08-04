import React, { useState } from "react";

import styled from "styled-components";
import { useComplexContextHook } from "../state/ContextoComplexo";

const DivWrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: #f16632;
  margin: auto;
`;

// Método 2 - Com hook
export default function Componenteum(props) {
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
    <DivWrapper>
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
    </DivWrapper>
  );
}

//O "oldState" copia o objeto:
//   user: {
//     name: "Guilherme",
//     email: "guilherme.kojima@groove.tech",
//   },
//   profile: "",
// }
