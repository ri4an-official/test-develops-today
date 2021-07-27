import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { changePost, createPost, getPosts, deletePost, addComment } from './api/posts'
import type { Post } from './types/Post'

const slice = createSlice({
    name: 'posts',
    initialState: {
        posts: [] as Post[],
        loading: false,
    },
    reducers: {
        setPosts(s, { payload }: { payload: Post[] }) {
            s.posts = payload
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

export const addPostAsync =
    (title: string, body: string) => async (dispatch: Dispatch<any>) => {
        dispatch(setLoading(true))
        await createPost(title, body)
        dispatch(setPosts(await getPosts()))
        dispatch(setLoading(false))
    }
export const changePostAsync =
    (postId: number, title: string, body: string) =>
    async (dispatch: Dispatch<any>) => {
        dispatch(setLoading(true))
        await changePost(postId, title, body)
        dispatch(setPosts(await getPosts()))
        dispatch(setLoading(false))
    }
export const deletePostAsync = (postId: number) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true))
    await deletePost(postId)
    dispatch(setPosts(await getPosts()))
    dispatch(setLoading(false))
}
export const addCommentAsync =
    (postId: number, body: string) => async (dispatch: Dispatch<any>) => {
        dispatch(setLoading(true))
        await addComment(postId, body)
        dispatch(setPosts(await getPosts()))
        dispatch(setLoading(false))
    }

export const { setPosts, setLoading } = slice.actions
export default slice.reducer
