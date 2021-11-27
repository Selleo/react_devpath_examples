import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { HandlerMethods } from "./pages/Basic";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="nav">
          <h3>Examples</h3>
          <NavLink to="/basics/handler">Interaction handler definition</NavLink>
        </nav>
        <div className="example">
        <Routes>
          <Route path={`/basics/handler`} element={<HandlerMethods />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
