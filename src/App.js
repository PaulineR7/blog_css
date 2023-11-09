import './App.css';
import Tournament from './Tournament';
import Accueil from './Accueil';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tournament />} />
          <Route path="/accueil" element={<Accueil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
