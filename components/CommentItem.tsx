import styled from 'styled-components'
import { PostComment } from '../models/types/PostComment'

const Comment = styled.div`
    &::before {
        content: ' - ';
    }
`
export const CommentItem = ({ children }: { children: PostComment }) => (
    <Comment>{children.body}</Comment>
)
