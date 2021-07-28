import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

export const A = styled.a`
    color: black;
    &:hover {
        color: blue !important;
        cursor: pointer !important;
    }
    text-decoration: none;
`
const Styled = styled.div`
    *:not(hr) {
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px;
        margin: 5px;
    }
`
export const Template = ({ children, title }: { children: any; title?: string }) => (
    <Styled>
        <Head>
            <title>{title}</title>
        </Head>
        <Link href='/'>
            <A>Main</A>
        </Link>
        <Link href='/new'>
            <A>New post</A>
        </Link>
        <main>{children}</main>
    </Styled>
)
