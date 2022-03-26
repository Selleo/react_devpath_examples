import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import {
  ContextExample,
  HandlerMethods,
  OptimizationRouter,
  UseEffect2,
  UseEffectFlow, UseStateExample,
} from "./pages/Basic";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <h3>Examples</h3>
        <NavLink to="/basics/handler">Interaction handler definition</NavLink>
        <NavLink to="/basics/bigComponentOptimization">
          How to optimize big component
        </NavLink>
        <NavLink to="/basics/useEffect">useEffect flow</NavLink>
        <NavLink to="/basics/contextExample">Context example</NavLink>
        <NavLink to="/basics/useStateExample">useState example</NavLink>
      </nav>
      <div className="example">
        <Routes>
          <Route path="/basics/handler" element={<HandlerMethods />} />
          <Route
            path="/basics/bigComponentOptimization"
            element={<OptimizationRouter />}
          />
          <Route path="/basics/useEffect" element={<UseEffectFlow />} />
          <Route path="/basics/useEffect2" element={<UseEffect2 />} />
          <Route path="/basics/contextExample" element={<ContextExample />} />
          <Route path="/basics/useStateExample" element={<UseStateExample />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
