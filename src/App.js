import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { HandlerMethods, OptimizationRouter } from "./pages/Basic";

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
        </nav>
        <div className="example">
          <Routes>
            <Route path="/basics/handler" element={<HandlerMethods />} />
            <Route
              path="/basics/bigComponentOptimization"
              element={<OptimizationRouter />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
