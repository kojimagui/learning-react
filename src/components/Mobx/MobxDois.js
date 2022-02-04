import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

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

const jobs = [
  { id: "0", name: "dev jr", grossValue: 5000, tribute: "15" },
  { id: "1", name: "dev pleno", grossValue: 8000, tribute: "15" },
  { id: "2", name: "dev senior", grossValue: 11000, tribute: "15" },
  { id: "3", name: "tech lead", grossValue: 14000, tribute: "18" },
];

const MobxDois = observer(({ userState, jobState }) => {
  const [newName, setNewName] = useState("");

  useEffect(() => {
    setNewName(userState.detail.name || "");
    userState.changeUserJob(jobState.data);
  }, []);

  const changeName = () => {
    userState.changeUserName(newName);
  };

  const changeJob = (id) => {
    const job = jobs.find((element) => element.id === id);
    jobState.changeJob(job);
  };

  return (
    <Card>
      <h3>Mobx dois</h3>
      <p>{userState.detail.name}</p>
      <p>{userState.detail.email}</p>
      <p>{jobState.name}</p>
      <input
        type="text"
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      />
      <button type="button" onClick={changeName}>
        Trocar nome
      </button>
      <hr />
      <label for="select-job">Trabalhos: </label>
      <select
        name="select-job"
        onChange={(event) => changeJob(event.target.value)}
      >
        {jobs.map((element) => (
          <option key={element.id} value={element.id}>
            {element.name}{" "}
          </option>
        ))}
      </select>
    </Card>
  );
});

export default MobxDois;
