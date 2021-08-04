import React, { createContext, useContext, useState } from "react";

// Criar um contexto
const SimpleContext = createContext();
//   {
//   user:{
//     nome: '',
//     email: ''
//   },
//   cargo: '',
// }

// Criar um provider
const SimpleContextProvider = (props) => {
  // props.children
  const { children } = props;
  const [state, setState] = useState({
    user: {
      name: "Guilherme",
      email: "guilherme.kojima@groove.tech",
    },
    profile: "",
  });

  return (
    <SimpleContext.Provider value={[state, setState]}>
      {children}
    </SimpleContext.Provider>
  );
};

//Helper hook
const useSimpleContextHook = () => {
  const [state, setState] = useContext(SimpleContext);

  return [state, setState];
};

export { SimpleContext, SimpleContextProvider, useSimpleContextHook };
