import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import BadgeCreator from "./components/BadgeCreator.jsx";
import Agenda from "./components/Agenda.jsx";
import LandingPage from "./components/LandingPage.jsx";

function App() {
  return (
    <div className="bg-[#1e1e1e] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />} path={"/"}>
            <Route element={<BadgeCreator />} path={"/badge"}></Route>
            <Route element={<Agenda />} path={"/agenda"}></Route>
            <Route element={<LandingPage />} index></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
