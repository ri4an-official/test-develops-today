import Link from 'next/link'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import useAsyncEffect from 'use-async-effect'
import { PostStyled } from '../components/PostItem'
import { Preloader } from '../components/Preloader'
import { State } from '../models/mainReducer'
import { getPostsAsync } from '../models/postsReducer'

const PostTitle = styled(PostStyled)`
    color: black;
    padding: 15px;
    &:hover {
        color: blue;
        border-color: blue;
        cursor: pointer;
    }
    font-size: 20px;
`
export default function Posts() {
    const { posts, loading } = useSelector((state: State) => state.postsReducer)
    const dispatch = useDispatch()
    useAsyncEffect(() => dispatch(getPostsAsync()), [])
    return !loading ? (
        posts.map((p) => (
            <Fragment key={p.id}>
                <a>
                    <Link href={`/posts/${p.id}`} passHref>
                        <PostTitle>{p.title}</PostTitle>
                    </Link>
                </a>
            </Fragment>
        ))
    ) : (
        <Preloader />
    )
}
