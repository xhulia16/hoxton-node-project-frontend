import { useEffect, useReducer, useState } from "react";
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
  content: string;
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

//  kam pershtypjen se na duhet nje state users, por nk po e ebej se nk e di ca ideje ke ti, se pavaersisht se i bera types dalin me te kuqe

export function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const [users, setusers] = useState<User | null>(null);
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
        <button
          onClick={() => {
            fetch(`http://localhost:5126/likes`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: user.id,
                postId: post.id,
              }),
            });
          }}
        >
          ❤️
        </button>
        <p>{singlePost.likes.length}</p>
        <div className="comment">
          <form
            onSubmit={(event) => {
              event.preventDefault();

              let newComment = {
                userid: number,
                postId: singlePost.id,
                comment: event.target.comment.value,
              };

              fetch(`http://localhost:5126/comments`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(newComment),
              })
                .then((res) => res.json())
                .then((commentsFromDb) => setSinglePost(commentsFromDb));
              event.target.reset();
            }}
          >
            <input name="comment" placeholder="enter your comment"></input>
            <button>Submit</button>
          </form>
        </div>
        <ul>
          Comments:
          {singlePost.comments.reverse().map((item) => (
            <li>{item.comment}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
