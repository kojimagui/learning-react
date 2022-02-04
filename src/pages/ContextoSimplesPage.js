import React from "react";

import ComponenteUm from "../components/ContextoSimples/ComponenteUm";
import ComponenteDois from "../components/ContextoSimples/ComponenteDois";
import { SimpleContextProvider } from "../state/ContextoSimples";

export default function ContextoSimplesPage() {
  return (
    <>
      <SimpleContextProvider>
        <ComponenteUm />
        <ComponenteDois />
      </SimpleContextProvider>
    </>
  );
}
