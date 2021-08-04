import "./App.css";

import ComponenteUm from "./components/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois";
import { SimpleContextProvider } from "./state/ContextoSimples";

import ComplexoUm from "./components/ComplexoUm";
import ComplexoDois from "./components/ComplexoDois";
import { ComplexContextProvider } from "./state/ContextoComplexo";

function App() {
  return (
    <div className="App">
      <SimpleContextProvider>
        <div style={{ width: "100%", height: "100%" }}>
          <ComponenteUm />
          <ComponenteDois />
        </div>
      </SimpleContextProvider>
      <br />
      <ComplexContextProvider>
        <div style={{ width: "100%", height: "100%" }}>
          <ComplexoUm />
          <ComplexoDois />
        </div>
      </ComplexContextProvider>
    </div>
  );
}

export default App;
