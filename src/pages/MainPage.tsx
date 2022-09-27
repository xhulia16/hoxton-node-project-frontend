import { CreatePostForm } from "../components/CreatePostForm";

export function MainPage(){
    return(
        <main>
      <CreatePostForm></CreatePostForm>
        <div className='feed'>
        <div className="post">
          <div className="user-profile">
            <img src="https://images.pexels.com/photos/13646190/pexels-photo-13646190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <h3>user name here</h3>
          </div>
          <p>Here goes all the content that this user wrote</p>
          <img
            className="post-image"
            src="https://images.pexels.com/photos/13636706/pexels-photo-13636706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>
        <div className="post">
          <div className="user-profile">
            <img src="https://images.pexels.com/photos/13646190/pexels-photo-13646190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <h3>user name here</h3>
          </div>
          <p>Here goes all the content that this user wrote</p>
          <img
            className="post-image"
            src="https://images.pexels.com/photos/13636706/pexels-photo-13636706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>
        </div>
       
      </main>  
    )
}