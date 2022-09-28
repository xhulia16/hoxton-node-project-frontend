import { useEffect, useState } from "react";
import { CreatePostForm } from "../components/CreatePostForm";
import { Post } from "../types";

export function MainPage({currentUser}) {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    if(currentUser){
      fetch(`http://localhost:5126/posts/${currentUser.id}`)
      .then((resp) => resp.json())
      .then((postsFromServer) => setPosts(postsFromServer));
    }
    
  }, []);

  return (
    <main>
      <CreatePostForm setPosts={setPosts} currentUser={currentUser}></CreatePostForm>
      <div className="feed">
        {posts.reverse().map((item) => (
          <div className="post">
            <div className="user-profile">
              <img src={item.user.image}></img>
              <h3>{item.user.name}</h3>
            </div>
            <p>{item.content}</p>
            <img className="post-image" src={item.image}></img>
          </div>
        ))}
        <p>You have reached the end of the posts, congratulations on having few friends!</p>
      </div>
    </main>
  );
}
