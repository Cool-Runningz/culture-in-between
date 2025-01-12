import Head from 'next/head'

import Navigation from '@/components/Navigation'
import { AudioPlayer } from '@/components/player/AudioPlayer'
import { Waveform } from '@/components/icons/WavesIcons'
import heroLight from 'public/images/hero-light.png'

import Sidebar from '@/components/layout/Sidebar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          Culture In Between
        </title>
        <meta property="og:title" content="Culture in Between" key="title" />
        <meta
          name="og:description"
          content="A podcast that shares the stories of people who grew up in a culture outside of their parents' culture."
        />
        <meta name="og:image" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cultureinbetween.com/" />
        <meta property="og:image" content={heroLight} />
      </Head>
      <Sidebar />
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120 pt-4">
        <Waveform className="absolute left-0 top-0 h-20 w-full" />
        <Navigation className="pointer-events-auto flex justify-center pb-4" />
        <div className="relative">{children}</div>
      </main>
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
        <AudioPlayer />
      </div>
    </>
  )
}