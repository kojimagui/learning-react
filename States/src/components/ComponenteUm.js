import React, { useContext } from "react";

import styled from "styled-components";
import { SimpleContext } from "../state/ContextoSimples";

const DivWrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: #523022;
  margin: auto;
`;

export default function Componenteum(props) {
  //Método 1- Sem hooks
  const [state] = useContext(SimpleContext);

  return (
    <DivWrapper>
      <p>{state.user.name}</p>
      <p>{state.user.email}</p>
    </DivWrapper>
  );
}
