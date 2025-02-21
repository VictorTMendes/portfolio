import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Projetos from "./pages/Projetos.tsx";
import Header from "./components/Header.tsx";
import Contato from "./components/Contato";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
