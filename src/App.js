import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SimpleTicker from "./SimpleTicker";
import IntervalTicker from "./IntervalTicker";
import Ticker from "./Ticker";
import { useState } from "react";

function App() {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/simple" element={<SimpleTicker />} />
          <Route path="/interval" element={<IntervalTicker />} />
          <Route
            path="/clocks"
            element={
              <>
                <h1>Zegary</h1>
                <button onClick={() => setHidden((h) => !h)}>
                  {hidden ? "Pokaż" : "Ukryj"}
                </button>
                {!hidden && <Ticker />}
              </>
            }
          />
        </Routes>

        {/* Nawigacja powinna być poza <Routes> */}
        <ul>
          <li>
            <Link to="/simple">Prosty zegar</Link>
          </li>
          <li>
            <Link to="/interval">Odliczanie dłuższych okresów</Link>
          </li>
          <li>
            <Link to="/clocks">Kolekcja zegarów</Link>
          </li>
        </ul>
      </BrowserRouter>
    </div>
  );
}

export default App;
