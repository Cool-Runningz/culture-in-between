import React from 'react'
import Head from 'next/head'
import { getFormattedDate, getSortedBlogPosts } from '@/util/helpers';
import posts from '@/metadata/posts';

export default function Blog() {
    const sortedPosts = getSortedBlogPosts(posts)
    return (
        <>
            <Head>
                <title>
                    Blog | Culture In Between
                </title>
                <meta property="og:title" key="title" content="Blog | Culture In Between" />
                <meta name="description" key="desc" content="Read articles from the 'Culture in Between' blog." />
            </Head>
            <div className="bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl">
                        <h1 className="text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Blog</h1>
                        <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                            {sortedPosts.map((post) => (
                                <article key={post.slug} className="flex max-w-xl flex-col items-start justify-between">
                                    <div className="flex items-center gap-x-4 text-sm">
                                        <time dateTime={post.date} className="text-slate-700">
                                            {getFormattedDate(post.date)}
                                        </time>
                                    </div>
                                    <div className="group relative">
                                        <h2 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                            <a href={`/blog/${post.slug}`} className='cursor-pointer'>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h2>
                                        <p className="mt-5 line-clamp-3 text-md/6 text-slate-700">{post.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div></>
    )
}