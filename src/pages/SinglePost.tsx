import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type User = {
  id: number;
  name: string;
  image: string;
  password: string;
  posts: Post[];
  comments: Comment[];
  likes: number;
};

type Post = {
  id: number;
  name: string;
  image: string;
  password: string;
  posts: Post[];
  comments: Comment[];
  likes: Likes[];
};

type Comment = {
  id: number;
  comment: Comment[];
  user: User[];
  post: Post[];
  userId: number;
  postId: number;
};
type Likes = {
  id: number;
  user: User[];
  userId: number;
  postId: number;
};

export function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:5126/specificpost/${params.itemId}`)
      .then((resp) => resp.json())
      .then((post) => setSinglePost(post));
  }, []);

  if (singlePost === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="singlePost">
      <div>
        <div className="post">
          <div className="user-profile">
            <img src={singlePost.user.image}></img>
            <h3>{singlePost.user.name}</h3>
          </div>
          <p>{singlePost.content}</p>
          <img className="post-image" src={singlePost.image}></img>
        </div>
      </div>
      <div className="post-stats">
        <button>❤️</button>
        <p>{singlePost.likes.length}</p>
        <ul>
          {" "}
          Comments:
          {singlePost.comments.reverse().map((item) => (
            <li>{item.comment}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
