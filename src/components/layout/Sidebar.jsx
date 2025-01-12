import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import AboutSection from '@/components/layout/AboutSection'
import ListenSection from '@/components/layout/ListenSection'
import SocialSection from '@/components/layout/SocialSection'

import coverArt from 'public/images/cover-art.jpg'

export default function Sidebar() {
    let hosts = ['Alyssa Holland', 'Brianna Samuels']
    return (
        <header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
            <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
                <span className="font-mono text-slate-500">Hosted by <span className='inline-block rotate-90'>🎙️</span></span>
                <span className="mt-6 flex gap-6 font-bold text-slate-900">
                    {hosts.map((host, hostIndex) => (
                        <Fragment key={host}>
                            {hostIndex !== 0 && (
                                <span aria-hidden="true" className="text-slate-400">
                                    /
                                </span>
                            )}
                            {host}
                        </Fragment>
                    ))}
                </span>
            </div>
            <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
                <Link
                    href="/"
                    className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
                    aria-label="Homepage"
                >
                    <Image
                        className="w-full"
                        src={coverArt}
                        alt=""
                        sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
                        priority
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
                </Link>
                <div className="mt-10 text-center lg:mt-12 lg:text-left">
                    <p className="text-xl font-bold text-slate-900">
                        <Link href="/">Culture In Between</Link>
                    </p>
                </div>
                <AboutSection className="mt-8 lg:block" />
                <ListenSection />
                <SocialSection />
            </div>
        </header>
    )
}
