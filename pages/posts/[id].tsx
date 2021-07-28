import { useRouter } from 'next/dist/client/router'
import { Fragment, useState } from 'react'
import styled from 'styled-components'
import useAsyncEffect from 'use-async-effect'
import { CommentItem } from '../../components/CommentItem'
import { PostItem } from '../../components/PostItem'
import { Preloader } from '../../components/Preloader'
import { useInput } from '../../hooks/useInput'
import { addComment, getPost } from '../../models/api/posts'
import { Post } from '../../models/types/Post'
import { Button, InputGroup } from '../new'

export default function SelectedPost() {
    const id = +(useRouter().query.id ?? 1)
    const [post, setPost] = useState({} as Post)
    const input = useInput('')
    useAsyncEffect(async () => setPost(await getPost(id)), [id, post.comments])
    return post.comments ? (
        <>
            <PostItem>{post}</PostItem>
            <p>Comments:</p>
            <div>
                {post.comments.map((c) => (
                    <Fragment key={c.id}>
                        <hr />
                        <CommentItem>{c}</CommentItem>
                    </Fragment>
                ))}
            </div>
            <InputGroup>
                <input {...input} placeholder='Add comment...' />
                <Button type='submit' onClick={() => addComment(id, input.value)}>
                    Add comment
                </Button>
            </InputGroup>
        </>
    ) : (
        <Preloader />
    )
}
