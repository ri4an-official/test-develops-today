import { PostComment } from './PostComment'

export type Post = {
    id: number
    title: string
    body: string
    comments: PostComment[]
}
