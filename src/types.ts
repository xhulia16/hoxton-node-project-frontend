export type Post = {
    id: number,
    content: string,
    image: string,
    userId: number,
    user: User,
    comments: Comments[],
    likes: Likes[]
}

type User = {
    id: number,
    name: string,
    image: string, 
    email: string
}

type Comments = {
    id: number,
    comment: string,
    userId: number,
    postId: number
}

type Likes = {
    id: number,
    postId: number,
    userId: number
}