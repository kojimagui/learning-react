import React, { createContext, useContext, useReducer } from "react";
import { initialState, stateReducer } from "./reducer";

// Criar um contexto
const ComplexContext = createContext();

// Criar um provider
const ComplexContextProvider = (props) => {
  // props.children
  const { children } = props;
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <ComplexContext.Provider value={[state, dispatch]}>
      {children}
    </ComplexContext.Provider>
  );
};

const useComplexContextHook = () => {
  const [state, dispatch] = useContext(ComplexContext);

  return [state, dispatch];
};

export { ComplexContext, ComplexContextProvider, useComplexContextHook };
