import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../pages/SearchBar";
import { User } from "../types";

type Props = {
  currentUser: User;
};
export function Header({ currentUser, signOutUser }: Props) {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  window.users=users

  useEffect(() => {
    fetch("http://localhost:5126/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [search]);

  // filteredUsers= array that needs to be mapped somewhere
  
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredUsers)

  return (
    <header>
      <Link to="/home">
        <h2 className="title">HOXTALIZING</h2>
      </Link>
      <ul>
        <li>BOOKMARKS</li>
        <Link to="/profile">
          <li>PROFILE</li>
        </Link>
        {currentUser ? (
          <li>
            <button onClick={signOutUser}>LogOut</button>
          </li>
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
        <li className="contact-us">CONTACT US</li>
        <SearchBar setSearch={setSearch} />
      </ul>
    </header>
  );
}
