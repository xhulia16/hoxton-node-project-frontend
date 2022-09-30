import { Link } from "react-router-dom";
import { SearchBar } from "../pages/SearchBar";

export function Header({ currentUser, signOutUser, filteredUsers, setSearch }) {
  return (
    <header>
      <Link to="/home">
        <h2 className="title">HOXTALIZING</h2>
      </Link>
      <ul>
        {currentUser ? (
          <>
<<<<<<< HEAD
            <Link to="/bookmarks">
              <li>BOOKMARKS</li>
            </Link>
            <Link to={`/profile/${currentUser.id}`}>
=======
          <Link to='/bookmarks'>
            <li>BOOKMARKS</li>
            </Link>
            <Link to={ `/profile/${currentUser.id}`}>
>>>>>>> 96c770f2fed344170224366c965414b9cf4c0389
              <li>PROFILE</li>
            </Link>
            <li>
              <button onClick={signOutUser}>LogOut</button>
            </li>
          </>
        ) : (
          <>
            <Link to="/signIn">
              <li>SignIN</li>
            </Link>
            <Link to="/signUp">
              <li>SignUp</li>
            </Link>
          </>
        )}
        <SearchBar setSearch={setSearch} />
<<<<<<< HEAD
=======
        
>>>>>>> 96c770f2fed344170224366c965414b9cf4c0389
      </ul>
    </header>
  );
}
