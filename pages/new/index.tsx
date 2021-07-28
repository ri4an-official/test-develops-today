import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'
import { useInput } from '../../hooks/useInput'
import { createPost } from '../../models/api/posts'

export const InputGroup = styled.div`
    label {
        font-size: 20px;
        &::after {
            content: ':';
        }
    }
    input {
        border: 2px solid;
        border-radius: 1rem;
        &:hover {
            color: gray;
        }
        &:focus {
            color: gray;
        }
    }
`
export const Button = styled.button`
    color: white;
    background-color: green;
    border-radius: 0.5rem;
`

export default function CreatePost() {
    const inputTitle = useInput()
    const inputBody = useInput()
    const router = useRouter()
    return (
        <>
            <InputGroup>
                <label>Title</label>
                <input {...inputTitle} type='text' placeholder='Title...' />
            </InputGroup>
            <InputGroup>
                <label>Text</label>
                <input {...inputBody} type='text' placeholder='Text...' />
            </InputGroup>
            <Button
                onClick={() => {
                    if (inputTitle.value && inputBody.value) {
                        createPost(inputTitle.value, inputBody.value)
                        router.push('/')
                    }
                }}
            >
                Add post
            </Button>
        </>
    )
}
