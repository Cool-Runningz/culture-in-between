import { TinyWaveFormIcon } from '@/components/icons/WavesIcons'
import { SpotifyIcon, ApplePodcastIcon, RSSIcon } from '@/components/icons/PodcastIcons'
import { APPLE_PODCASTS_URL, RSS_FEED, SPOTIFY_URL, INSTAGRAM_URL, YOUTUBE_URL, TWITTER_URL } from '@/util/constants'

export default function ListenSection() {
    return (
        <section className="mt-8">
            <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
                <TinyWaveFormIcon
                    colors={['fill-cib-green', 'fill-cib-blue']}
                    className="h-2.5 w-2.5"
                />
                <span className="ml-2.5">Listen</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
            <ul
                role="list"
                className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
            >
                {[
                    ['Apple Podcasts', ApplePodcastIcon, APPLE_PODCASTS_URL],
                    ['Spotify', SpotifyIcon, SPOTIFY_URL],
                    ['RSS Feed', RSSIcon, RSS_FEED],
                ].map(([label, Icon, url]) => (
                    <li key={label} className="flex">
                        <a
                            href={url}
                            className="group flex items-center"
                            aria-label={label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />

                            <span className="hidden sm:ml-3 sm:block">{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}