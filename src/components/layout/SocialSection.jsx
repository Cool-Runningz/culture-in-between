import Image from 'next/image'

import { TinyWaveFormIcon } from '@/components/icons/WavesIcons'
import { INSTAGRAM_URL, YOUTUBE_URL, TWITTER_URL } from '@/util/constants'
import InstagramLogo from 'public/images/instagram-logo.png'
import YTLogo from 'public/images/youtube-icon.png'
import XLogo from 'public/images/x-logo.png'

export default function SocialSection() {
    return (
        <section className="mt-2 lg:mt-8">
            <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
                <TinyWaveFormIcon
                    colors={['fill-cib-green', 'fill-cib-blue']}
                    className="h-2.5 w-2.5"
                />
                <span className="ml-2.5">Connect With Us</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
            <ul
                role="list"
                className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
            >
                {[
                    ['Instagram', InstagramLogo, INSTAGRAM_URL],
                    ['Twitter', XLogo, TWITTER_URL],
                    ['YouTube', YTLogo, YOUTUBE_URL],
                ].map(([label, Icon, url]) => (
                    <li key={label} className="flex">
                        <a
                            href={url}
                            className="group flex items-center"
                            aria-label={label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="h-6 w-6"
                                src={Icon}
                                alt={label}
                                priority
                            />
                            <span className="hidden sm:ml-3 sm:block">{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}