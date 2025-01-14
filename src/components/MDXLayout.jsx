
import Head from 'next/head'
import { useRouter } from 'next/router'
import posts from '@/metadata/posts'
import { BASE_IMG_URL } from '@/util/constants'

export default function MDXLayout({ children }) {
    const router = useRouter()
    const slug = router.asPath.split('/blog/')?.[1]

    const metadata = posts.find((p) => p.slug === slug)
    const title = `Blog | ${metadata.title}`
    const description = metadata.description
    const image = `${BASE_IMG_URL}/blog/${metadata.image}`

    return <>
        <Head>
            <title>
                {title}
            </title>
            <meta property="og:title" content={title} key="title" />
            <meta
                name="description"
                content={description}
            />
            <meta property="og:image" content={image} />
        </Head>
        <article style={{ color: 'blue' }}>
            {children}
        </article>
    </>
}