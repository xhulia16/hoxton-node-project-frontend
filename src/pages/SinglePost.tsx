import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { Post, User } from "../types";

type Props={
  currentUser: User
}

export function SinglePost({currentUser}: Props) {
  const [singlePost, setSinglePost] = useState<Post | null>(null);
  // const [users, setusers] = useState<User | null>(null);
  const params = useParams();

  window.singlePost=singlePost

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
            fetch(`http://localhost:5126/likeposts`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: currentUser.id,
                postId: singlePost.id,
              }),
            })
            .then(resp=>resp.json())
            .then(data=>setSinglePost(data))
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
                userId: currentUser.id,
                postId: singlePost.id,
                comment: event.target.comment.value,
              };
console.log(newComment)
              fetch(`http://localhost:5126/comments`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(newComment),
              })
                .then((res) => res.json())
                .then((data) => {
                  if(data.error){
                    console.log(data.error)
                  }
                  else{
                    setSinglePost(data)
                  }
                });
               
                event.target.reset();
            }}
          >
            <input name="comment" placeholder="enter your comment"></input>
            <button onClick={()=>{

            }}>Submit</button>
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
