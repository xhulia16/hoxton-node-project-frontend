export function CreatePostForm({currentUser}){
  if(currentUser===null)
  return <h1>loading...</h1>
    return(
        <form className="create-post" onSubmit={(event)=>{
          event.preventDefault()
          fetch('http://localhost:5126/posts', {
            method: "POST", 
            headers: {
              "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
              content: event.target.content.value,
              image: event.target.image.value,
              userId: currentUser.id
            })
          })

          event.target.reset()
        }}>
          <p>Hello {currentUser.name}!</p>
        <p>Share your thoughts with your friends...</p>
        <textarea name="content" placeholder="What are you thinking?"></textarea>
        <input name="image" placeholder="Add an image url"></input>
        <button>Add a post</button>
      </form>
  
    )
}