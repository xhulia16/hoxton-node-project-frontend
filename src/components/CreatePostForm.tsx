export function CreatePostForm(){
    return(
        <form className="create-post">
        <p>SHARE YOUR THOUGHTS WITH YOUR FRIENDS</p>
        <textarea placeholder="What are you thinking?"></textarea>
        <input placeholder="Add an image url"></input>
        <button>Add a post</button>
      </form>
    )
}