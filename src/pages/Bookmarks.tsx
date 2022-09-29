import { useEffect, useState } from "react";
import { Bookmark, User } from "../types";

type Props = {
  currentUser: User | null;
};

export function Bookmarks({ currentUser }: Props) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  useEffect(() => {
    if (currentUser) {
      fetch(`http://localhost:5126/bookmarks/${currentUser.id}`)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setBookmarks(data);
          }
        });
    }
  }, []);

  return (
    <div>
      <h1>Hello {currentUser?.name}, here are your bookmarks.</h1>
      <ul className="bookmarks-list">
        {bookmarks.reverse().map(bookmark=>(
            <li className="bookmarks">
                <img src={bookmark.post.image}></img>
                <h4>{bookmark.post.user.name}</h4>
                <p>{bookmark.post.content}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}
