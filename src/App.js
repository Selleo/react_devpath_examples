import "./App.css";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";

import {
  ContextExample,
  HandlerMethods,
  OptimizationRouter,
  UseEffect2,
  UseEffectFlow,
} from "./pages/Basic";

function App() {
  const { pathname } = useLocation();

  const isDeployed = /^\/react_devpath_examples/.test(pathname);
  const url = isDeployed ? "react_devpath_examples" : "";

  return (
    <div className="App">
      <nav className="nav">
        <h3>Examples</h3>
        <NavLink to={`${url}/basics/handler`}>
          Interaction handler definition
        </NavLink>
        <NavLink to={`${url}/basics/bigComponentOptimization`}>
          How to optimize big component
        </NavLink>
        <NavLink to={`${url}/basics/useEffect`}>useEffect flow</NavLink>
        <NavLink to={`${url}/basics/contextExample`}>Context example</NavLink>
      </nav>
      <div className="example">
        <Routes>
          <Route path={`${url}/basics/handler`} element={<HandlerMethods />} />
          <Route
            path={`${url}/basics/bigComponentOptimization`}
            element={<OptimizationRouter />}
          />
          <Route path={`${url}/basics/useEffect`} element={<UseEffectFlow />} />
          <Route path={`${url}/basics/useEffect2`} element={<UseEffect2 />} />
          <Route
            path={`${url}/basics/contextExample`}
            element={<ContextExample />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
