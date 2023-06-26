import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Article } from "./components/Article";
import { Dashboard } from "./components/Dashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Article />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
