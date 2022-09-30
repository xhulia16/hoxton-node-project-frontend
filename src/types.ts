export type User = {
    id: number;
    name: string;
    image: string;
    password: string;
    posts: Post[];
    comments: Comment[];
    likes: number;
    followers: Follows[];
    following: Follows[];
    Bookmarks: Bookmark[]
  };
  
  export type Post = {
    id: number;
    name: string;
    content: string;
    image: string;
    password: string;
    user: User
    posts: Post[];
    comments: Comment[];
    likes: Likes[];
    Bookmarks: Bookmark[]
  };
  
  export type Comment = {
    id: number;
    comment: string;
    user: User;
    userId: number;
    postId: number;
  };
  export type Likes = {
    id: number;
    // user: User[];
    userId: number;
    postId: number;
  };
  
  export type Follows={
    id: number, 
    followerId: number, 
    followingId: number
  }

  export type Bookmark={
    id: number, 
    userId: number, 
    postId: number
    post: Post
  }