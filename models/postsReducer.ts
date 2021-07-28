import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { getPost, getPosts } from './api/posts'
import type { Post } from './types/Post'

const slice = createSlice({
    name: 'posts',
    initialState: {
        posts: [] as Post[],
        currentPost: {} as Post,
        loading: true,
    },
    reducers: {
        setPosts(s, { payload }: { payload: Post[] }) {
            s.posts = payload
        },
        setPost(s, { payload }: { payload: Post }) {
            s.currentPost = payload
        },
        setLoading(s, { payload }: { payload: boolean }) {
            s.loading = payload
        },
    },
})

export const getPostsAsync = () => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true))
    dispatch(setPosts(await getPosts()))
    dispatch(setLoading(false))
}
export const getPostAsync = (postId: number) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true))
    dispatch(setPost(await getPost(postId)))
    dispatch(setLoading(false))
}

export const { setPosts, setPost, setLoading } = slice.actions
export default slice.reducer
