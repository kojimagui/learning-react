import React from "react";

import { ComplexContextProvider } from "../state/ContextoComplexo";
import ComplexoUm from "../components/ContextoComplexo/ComplexoUm";
import ComplexoDois from "../components/ContextoComplexo/ComplexoDois";

export default function ContextoComplexoPage() {
  return (
    <>
      <ComplexContextProvider>
        <ComplexoUm />
        <ComplexoDois />
      </ComplexContextProvider>
    </>
  );
}
