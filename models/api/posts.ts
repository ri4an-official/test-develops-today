import axios from 'axios'
import { Post } from '../types/Post'

const posts = axios.create({ baseURL: 'https://simple-blog-api.crew.red' })

export const getPosts = async () =>
    ((await posts.get('/posts')).data as Post[]).filter((p) => p.title).reverse()

export const getPost = async (postId: number) =>
    (await posts.get(`/posts/${postId}`, { params: { _embed: 'comments' } }))
        .data as Post

export const createPost = async (title: string, body: string) =>
    await posts.post('/posts', { title, body })

export const changePost = async (postId: number, title: string, body: string) =>
    await posts.put(`/posts/${postId}`, { title, body })

export const deletePost = async (postId: number) =>
    await posts.delete(`/posts/${postId}`)

export const addComment = async (postId: number, body: string) =>
    await posts.post(`/comments`, { postId, body })
