import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { AudioPlayer } from '@/components/player/AudioPlayer'
import { SpotifyIcon, ApplePodcastIcon, OvercastIcon, RSSIcon, GooglePodcastsIcon } from '@/components/icons/PodcastIcons'
import { Waveform, TinyWaveFormIcon } from '@/components/icons/WavesIcons'
import posterImage from '@/images/poster.png'

function AboutSection(props) {
  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWaveFormIcon
          colors={['fill-violet-300', 'fill-pink-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">About</span>
      </h2>
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-slate-700',
        )}
      >
        A podcast that shares the stories of people who have grown up in a culture different from their parents.
        Highlighting the unique experiences, challenges, and triumphs that come with navigating cultural identity.
        By sharing these stories, we hope to raise awareness, promote empathy, and inspire listeners to appreciate the beauty of diverse cultures.
      </p>
    </section>
  )
}

function ListenSection(props) {
  return (
    <section className="mt-8">
      <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
        <TinyWaveFormIcon
          colors={['fill-indigo-300', 'fill-blue-300']}
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
          ['Spotify', SpotifyIcon],
          ['Apple Podcast', ApplePodcastIcon],
          ['Google Podcasts', GooglePodcastsIcon],
          ['Overcast', OvercastIcon],
          ['RSS Feed', RSSIcon],
        ].map(([label, Icon]) => (
          <li key={label} className="flex">
            <Link
              href="/"
              className="group flex items-center"
              aria-label={label}
            >
              <Icon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
              <span className="hidden sm:ml-3 sm:block">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Layout({ children }) {
  let hosts = ['Alyssa Holland', 'Brianna Samuels']

  return (
    <>
      <header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
        <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
          <span className="font-mono text-slate-500">Hosted by 🎙️</span>
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
              src={posterImage}
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
        </div>
      </header>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <Waveform className="absolute left-0 top-0 h-20 w-full" />
        <div className="relative">{children}</div>
      </main>
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
        <AudioPlayer />
      </div>
    </>
  )
}