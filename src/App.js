import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import GameContainer from "./components/GameContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Button buttonContent={`Start Game`} id={`start-btn`} />}
        />
        <Route path="/game" element={<GameContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
