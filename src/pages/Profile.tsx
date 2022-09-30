import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
        {user.id === currentUser?.id ? null : (
          <button
            onClick={() => {
              fetch(`http://localhost:5126/follows`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  followerId: currentUser?.id,
                  followingId: user.id,
                }),
              })
                .then((resp) => resp.json())
                .then((data) => {
                  if (data.error) {
                    alert(data.error);
                  } else {
                    alert(data.message);
                  }
                });
            }}
          >
            FOLLOW
          </button>
        )}
      </div>
      <ul className="feed">
        {user.posts.reverse().map((item) => (
          <Link to={`/home/${item.id}`}>
            <li className="post users-posts">
              <p>{item.content}</p>
              <img src={item.image}></img>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
