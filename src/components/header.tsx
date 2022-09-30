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
          <Link to='/bookmarks'>
            <li>BOOKMARKS</li>
            </Link>
            <Link to={ `/profile/${currentUser.id}`}>
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
        
      </ul>
    </header>
  );
}
