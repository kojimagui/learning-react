import React, { useContext } from "react";

import styled from "styled-components";
import { SimpleContext } from "../../state/ContextoSimples";

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
  text-align: center;
`;

export default function ComponenteUm(props) {
  //Método 1- Sem hooks
  const [state] = useContext(SimpleContext);

  return (
    <Card>
      <h3>Componente um</h3>
      <p>{state.user.name}</p>
      <p>{state.user.email}</p>
    </Card>
  );
}
