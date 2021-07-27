import { createSlice } from '@reduxjs/toolkit'
import type { Post } from './types/Post'

const slice = createSlice({
    name: 'posts',
    initialState: {
        posts: [] as Post[],
    },
    reducers: {
        addPost(s, { payload }: { payload: string }) {
            s.posts.push({ id: Date.now(), comments: [], title: payload })
        },
        deletePost(s, { payload }: { payload: number }) {
            s.posts = s.posts.filter((p) => p.id !== payload)
        },
        addComment(s, { payload }: { payload: { postId: number; text: string } }) {
            s.posts = s.posts.filter(
                (p) =>
                    p.comments
                        .filter((c) => c.id === payload.postId)
                        .map(() => ({ text: payload.text })) // maybe doesn't work
            )
        },
    },
})
export const { addPost, addComment, deletePost } = slice.actions
export default slice.reducer
