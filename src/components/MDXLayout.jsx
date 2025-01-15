
import Head from 'next/head'
import { useRouter } from 'next/router'
import posts from '@/metadata/posts'
import { BASE_IMG_URL } from '@/util/constants'

export default function MDXLayout({ children }) {
    const router = useRouter()
    const slug = router.asPath.split('/blog/')?.[1]

    const metadata = posts.find((p) => p.slug === slug)
    const description = metadata.description
    const image = `${BASE_IMG_URL}/blog/${metadata.image}`

    return <>
        <Head>
            <title>
                {metadata.title}
            </title>
            <meta property="og:title" content={metadata.title} key="title" />
            <meta
                name="description"
                key="desc"
                content={description}
            />
            <meta property="og:image" key="image" content={image} />
        </Head>
        <article className='mt-8 prose prose-sm sm:prose-base lg:prose-lg mx-auto'>
            {children}
        </article>
    </>
}