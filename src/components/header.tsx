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
<<<<<<< HEAD
            <Link to={`/profile/${currentUser.id}`}>
=======
            </Link>
            <Link to={ `/profile/${currentUser.id}`}>
>>>>>>> 4c1c6a1fa4f12d55d68e6a9bc9b3d00fa49a4793
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
        {filteredUsers ? <div>{/* <h2>TEST</h2> */}</div> : null}
=======
        
>>>>>>> 4c1c6a1fa4f12d55d68e6a9bc9b3d00fa49a4793
      </ul>
    </header>
  );
}
