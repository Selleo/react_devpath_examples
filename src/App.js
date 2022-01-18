import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import {
  HandlerMethods,
  OptimizationRouter,
  UseEffect2,
  UseEffectFlow,
} from "./pages/Basic";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="nav">
          <h3>Examples</h3>
          <NavLink to="/basics/handler">Interaction handler definition</NavLink>
          <NavLink to="/basics/bigComponentOptimization">
            How to optimize big component
          </NavLink>
          <NavLink to="/basics/useEffect">useEffect flow</NavLink>
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
