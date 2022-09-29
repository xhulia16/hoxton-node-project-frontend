import { Link } from "react-router-dom";

export function Header({currentUser, signOutUser}){
    return(
        <header>
          <Link to="/home">
        <h2 className="title">HOXTALIZING</h2>
        </Link>
        <ul>
          <li>BOOKMARKS</li>
          <Link to="/profile">
          <li>PROFILE</li> 
          </Link>
          {currentUser? (<li><button onClick={signOutUser}>LogOut</button></li>): 
          (<>
          <Link to="/signIn">
          <li>SignIN</li>
          </Link>
          <Link to="/signUp">
          <li>SignUp</li>
          </Link>
          </>)
          }
          
          <li className="contact-us">CONTACT US</li>
        </ul>
      </header>
    )
}