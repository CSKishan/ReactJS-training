import { useContext } from "react";
import FavoritesContext from "../store/favorites-content";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites yet. Add some.</p>;
  } else {
    content = <MeetupList item={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
