import "./App.css";
import { Route, Routes } from "react-router-dom";

import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import AllMeetupsPage from "./pages/AllMeetups";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
