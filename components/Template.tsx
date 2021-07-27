import Head from 'next/head'
import Link from 'next/link'

export const Template = ({ children, title }: { children: any; title: string }) => (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className='links'>
            <Link href='/'>
                <a>Main</a>
            </Link>
            <Link href='/posts'>
                <a>Posts</a>
            </Link>
            <Link href='/newpost'>
                <a>New post</a>
            </Link>
        </div>
        <div className='content'>
            <h1>{title}</h1>
            {children}
        </div>
    </>
)
