import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

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

const MobxUm = observer(({ userState }) => {
  return (
    <Card>
      <h3>Mobx Um</h3>
      <p>{userState.detail.name}</p>
      <p>{userState.detail.email}</p>
      {userState.job && <p>{userState.job.name}</p>}
      <label>Liquid value: </label>{" "}
      <span>{userState.job ? userState.liquidValue : "-"}</span>
    </Card>
  );
});

export default MobxUm;
