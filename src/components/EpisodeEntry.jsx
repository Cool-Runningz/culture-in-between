import { useMemo } from 'react'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'

import PlayPauseIcon from '@/components/icons/PlayPauseIcon'
import { FormattedDate } from '@/components/FormattedDate'
import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'

export default function EpisodeEntry({ episode }) {
    let date = new Date(episode.published)
    const plausible = usePlausible()

    let audioPlayerData = useMemo(
        () => ({
            title: episode.title,
            audio: {
                src: episode.audio.src,
                type: episode.audio.type,
            },
            link: `${episode.id}`,
        }),
        [episode]
    )
    let player = useAudioPlayer(audioPlayerData)

    return (
        <article
            aria-labelledby={`episode-${episode.id}-title`}
            className="py-10 sm:py-12"
        >
            <Container>
                <div className="flex flex-col items-start">
                    <h2
                        id={`episode-${episode.id}-title`}
                        className="mt-2 text-lg font-bold text-slate-900"
                    >
                        <Link href={`episode/${episode.id}`}>{episode.title}</Link>
                    </h2>
                    <FormattedDate
                        date={date}
                        className="order-first font-mono text-sm leading-7 text-slate-500"
                    />
                    <p className="mt-1 text-base leading-7 text-slate-700" >
                        {episode.summary}
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => {
                                player.toggle()
                                plausible(`Listen Button: Click`, { props: { episode: episode.title } })
                            }}
                            className="flex items-center text-sm font-bold leading-6 text-cib-blue hover:underline decoration-wavy "
                            aria-label={`${player.playing ? 'Pause' : 'Play'} episode: ${episode.title
                                }`}
                        >
                            <PlayPauseIcon
                                playing={player.playing}
                                className="h-2.5 w-2.5 fill-current"
                            />
                            <span className="ml-3" aria-hidden="true">
                                Listen
                            </span>
                        </button>
                        <span
                            aria-hidden="true"
                            className="text-sm font-bold text-slate-400"
                        >
                            /
                        </span>
                        <Link
                            href={`episode/${episode.id}`}
                            className="flex items-center text-sm font-bold leading-6 text-cib-blue hover:underline decoration-wavy"
                            aria-label={`Show notes for episode: ${episode.title}`}
                        >
                            Show notes
                        </Link>
                    </div>
                </div>
            </Container>
        </article>
    )
}