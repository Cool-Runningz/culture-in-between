import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { AudioPlayer } from '@/components/player/AudioPlayer'
import { SpotifyIcon, ApplePodcastIcon, RSSIcon } from '@/components/icons/PodcastIcons'
import { Waveform, TinyWaveFormIcon } from '@/components/icons/WavesIcons'
import coverArt from 'public/images/cover-art.jpg'
import { APPLE_PODCASTS_URL, RSS_FEED, SPOTIFY_URL, INSTAGRAM_URL, YOUTUBE_URL, TWITTER_URL } from '@/util/constants'
import InstagramLogo from 'public/images/instagram-logo.png'
import YTLogo from 'public/images/youtube-icon.png'
import XLogo from 'public/images/x-logo.png'

function AboutSection(props) {
  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWaveFormIcon
          colors={['fill-cib-green', 'fill-cib-blue']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">Description</span>
      </h2>
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-slate-700',
        )}
      >
        A podcast that shares the stories of people who grew up in a culture outside of their parents&apos; culture.
      </p>
    </section>
  )
}

function ListenSection() {
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

function SocialSection() {
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

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-cib-blue'
            : 'hover:text-cib-blue'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0" />
        )}
      </Link>
    </li>
  )
}


function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        <NavItem href="/hosts">Hosts</NavItem>
        <NavItem href="/contact">Contact</NavItem>
        {/*  <NavItem href="/blog">Blog</NavItem> */}
        {/*  <NavItem href="/projects">Map</NavItem> */}
      </ul>
    </nav>
  )
}

export function Layout({ children }) {
  let hosts = ['Alyssa Holland', 'Brianna Samuels']

  return (
    <>
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
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120 pt-4">
        <Waveform className="absolute left-0 top-0 h-20 w-full" />
        <DesktopNavigation className="pointer-events-auto flex justify-center pb-4" />
        <div className="relative">{children}</div>
      </main>
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
        <AudioPlayer />
      </div>
    </>
  )
}