import React, { useState } from "react";

import styled from "styled-components";
import { useSimpleContextHook } from "../state/ContextoSimples";

const DivWrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: #f16632;
  margin: auto;
`;

// Método 2 - Com hook
export default function Componenteum(props) {
  const [state, setState] = useSimpleContextHook();
  const [novoNome, setNovoNome] = useState("");

  // Essa é a melhor forma de fazer
  const changeName = () => {
    setState((oldState) => {
      return {
        ...oldState,
        user: {
          ...oldState.user,
          name: novoNome,
        },
      };
    });
    setNovoNome("");
  };

  //O "oldState" copia o objeto:
  //   user: {
  //     name: "Guilherme",
  //     email: "guilherme.kojima@groove.tech",
  //   },
  //   profile: "",
  // }

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
