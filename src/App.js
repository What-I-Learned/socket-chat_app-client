import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Messenger from "./pages/messenger/Messenger";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Messenger />} />
      </Routes>
    </Router>
  );
}

export default App;
