import React from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "./pages/Main";
import ContextoSimplesPage from "./pages/ContextoSimplesPage";
import ContextoComplexoPage from "./pages/ContextoComplexoPage";
import ReduxPage from "./pages/ReduxPage";
import RxJsPage from "./pages/RxJsPage";
import MobxPage from "./pages/MobxPage";

export default function App() {
  return (
    <Router>
      <div>
        <div class="navbar">
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/simplecontext">Contexto Simples</Link>
              </li>
              <li>
                <Link to="/complexcontext">Contexto Complexo</Link>
              </li>
              <li>
                <Link to="/redux">Redux</Link>
              </li>
              <li>
                <Link to="/rxjs">RxJs</Link>
              </li>
              <li>
                <Link to="/mobx">Mobx</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/simplecontext">
            <ContextoSimplesPage />
          </Route>
          <Route path="/complexcontext">
            <ContextoComplexoPage />
          </Route>
          <Route path="/redux">
            <ReduxPage />
          </Route>
          <Route path="/rxjs">
            <RxJsPage />
          </Route>
          <Route path="/mobx">
            <MobxPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
