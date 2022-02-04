import styled from "styled-components";

import ComponenteUm from "../components/ContextoSimples/ComponenteUm";
import ComponenteDois from "../components/ContextoSimples/ComponenteDois";
import { SimpleContextProvider } from "../state/ContextoSimples";

import ComplexoUm from "../components/ContextoComplexo/ComplexoUm";
import ComplexoDois from "../components/ContextoComplexo/ComplexoDois";
import { ComplexContextProvider } from "../state/ContextoComplexo";

import ReduxUm from "../components/Redux/ReduxUm";
import ReduxDois from "../components/Redux/ReduxDois";

import RxJsUm from "../components/RxJs/RxJsUm";
import RxJsDois from "../components/RxJs/RxJsDois";

import MobxUm from "../components/Mobx/MobxUm";
import MobxDois from "../components/Mobx/MobxDois";
import userStore from "../state/Mobx/user.store";
import jobStore from "../state/Mobx/job.store";

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 288px 288px 288px 288px;
  grid-template-rows: 464px;
  grid-auto-flow: row;
  margin: 32px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: #ffdcb9;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

function Main() {
  return (
    <>
      <MainGrid>
        <Wrapper>
          <SimpleContextProvider>
            <ComponenteUm />
            <ComponenteDois />
          </SimpleContextProvider>
        </Wrapper>
        <Wrapper>
          <ComplexContextProvider>
            <ComplexoUm />
            <ComplexoDois />
          </ComplexContextProvider>
        </Wrapper>
        <Wrapper>
          <ReduxUm />
          <ReduxDois />
        </Wrapper>
        <Wrapper>
          <RxJsUm />
          <RxJsDois />
        </Wrapper>
        <Wrapper>
          <MobxUm userState={userStore} />
          <MobxDois userState={userStore} jobState={jobStore} />
        </Wrapper>
      </MainGrid>
    </>
  );
}

export default Main;
