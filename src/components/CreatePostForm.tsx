export function CreatePostForm({currentUser}){
  if(currentUser===null)
  return <h1>loading...</h1>
    return(
        <form className="create-post">
          <p>Hello {currentUser.name}!</p>
        <p>Share your thoughts with your friends...</p>
        <textarea placeholder="What are you thinking?"></textarea>
        <input placeholder="Add an image url"></input>
        <button>Add a post</button>
      </form>
  
    )
}