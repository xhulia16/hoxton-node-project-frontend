import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../types";

type Props = {
  currentUser: User | null;
};

export function Profile({ currentUser }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const params = useParams();

  useEffect(() => {
    if (currentUser) {
      fetch(`http://localhost:5126/users/${params.itemId}`)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.eror) {
            console.log(data.eror);
          } else {
            setUser(data);
          }
        });
    }
  }, []);

  if (user === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="profile">
      <div className="profile_user-details">
        <img src={user.image}></img>
        <p>{user.name}</p>
        <p>{user.followers.length} followers</p>
        <p>{user.following.length} following</p>
        {user.id===currentUser?.id? null: 
        <button>FOLLOW</button>
        }
      </div>
      <ul className="feed">
        {user.posts.reverse().map(item=>(
            <li className="post users-posts">
                <p>{item.content}</p>
                <img src={item.image}></img>
            </li>
        ))}
      </ul>
    </div>
  );
}
