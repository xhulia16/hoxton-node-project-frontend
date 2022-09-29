import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../pages/SearchBar";
import { User } from "../types";

// type Props = {
//   currentUser: User| null;
// };

export function Header({ currentUser, signOutUser, filteredUsers, setSearch }) {
 
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
        {filteredUsers? <div>
          <h2>TEST</h2>
        </div>: null}
        
      </ul>
    </header>
  );
}
