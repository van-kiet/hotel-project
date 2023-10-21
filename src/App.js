import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { LoadingContext } from "./contexts/loading/LoadingContext";

function App() {
  return (
    <BrowserRouter>
      <LoadingContext.Provider>
        <Router />
      </LoadingContext.Provider>
    </BrowserRouter>
  );
}

export default App;
