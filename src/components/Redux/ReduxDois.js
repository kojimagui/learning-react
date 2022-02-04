import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setNewUserName } from "../../state/Redux/actions/user/action";

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

export default function ReduxDois(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return { ...state.user };
  });

  const [novoNome, setNovoNome] = useState("");

  const changeName = () => {
    dispatch(setNewUserName(novoNome));
    setNovoNome("");
  };

  return (
    <Card>
      <h3>Redux dois</h3>
      <p>{state.detail.name}</p>
      <p>{state.detail.email}</p>
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
