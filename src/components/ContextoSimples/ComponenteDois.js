import React, { useState } from "react";

import styled from "styled-components";
import { useSimpleContextHook } from "../../state/ContextoSimples";

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
export default function ComponenteDois(props) {
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
  //     email: "guilherme@mail.com",
  //   },
  //   profile: "",
  // }

  return (
    <Card>
      <h3>Componente dois</h3>
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
