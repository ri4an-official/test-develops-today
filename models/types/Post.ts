import { PostComment } from './PostComment'

export type Post = {
    id: number
    title: string
    comments: PostComment[]
}
