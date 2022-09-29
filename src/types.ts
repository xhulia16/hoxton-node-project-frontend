export type User = {
    id: number;
    name: string;
    image: string;
    password: string;
    posts: Post[];
    comments: Comment[];
    likes: number;
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
  };
  
  export type Comment = {
    id: number;
    comment: string;
    // user: User[];
    // post: Post[];
    userId: number;
    postId: number;
  };
  export type Likes = {
    id: number;
    // user: User[];
    userId: number;
    postId: number;
  };
  