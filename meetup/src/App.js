import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
      </Routes>
    </div>
  );
}

export default App;
