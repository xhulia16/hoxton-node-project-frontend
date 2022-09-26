import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="title">HOXTALIZING</h2>
        <ul>
          <li>BOOKMARKS</li>
          <li>PROFILE</li> 
          <li>LOGOUT</li>
          <li className="contact-us">CONTACT US</li>
        </ul>
      </header>
      <main>
        <form className="create-post">
          <p>SHARE YOUR THOUGHTS WITH YOUR FRIENDS</p>
          <textarea placeholder="What are you thinking?"></textarea>
          <input placeholder="Add an image url"></input>
          <button>Add a post</button>
        </form>
        <div className='feed'>
        <div className="post">
          <div className="user-profile">
            <img src="https://images.pexels.com/photos/13646190/pexels-photo-13646190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <h3>user name here</h3>
          </div>
          <p>Here goes all the content that this user wrote</p>
          <img
            className="post-image"
            src="https://images.pexels.com/photos/13636706/pexels-photo-13636706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>
        <div className="post">
          <div className="user-profile">
            <img src="https://images.pexels.com/photos/13646190/pexels-photo-13646190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <h3>user name here</h3>
          </div>
          <p>Here goes all the content that this user wrote</p>
          <img
            className="post-image"
            src="https://images.pexels.com/photos/13636706/pexels-photo-13636706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>
        </div>
       
      </main>
    </div>
  );
}

export default App;
