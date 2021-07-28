import Link from 'next/link'
import { Post } from '../models/types/Post'
import styled from 'styled-components'
export const PostStyled = styled.div`
    border: 2px solid;
    border-radius: 1rem;
    h1 {
        text-align: center;
    }
    p {
        font-size: 24px;
    }
`
export const PostItem = ({ children }: { children: Post }) => (
    <PostStyled>
        <h1>{children.title}</h1>
        <p>{children.body}</p>
    </PostStyled>
)
