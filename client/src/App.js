import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Login } from "./containers/public";
import { path } from "./utils/constant";

function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <BrowserRouter>
        <Routes>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
