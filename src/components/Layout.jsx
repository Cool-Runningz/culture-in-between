import Head from 'next/head'

import Navigation from '@/components/Navigation'
import { AudioPlayer } from '@/components/player/AudioPlayer'
import { Waveform } from '@/components/icons/WavesIcons'
import Sidebar from '@/components/layout/Sidebar'
import { WEBSITE_URL, DESCRIPTION, CIB, BASE_IMG_URL } from '@/util/constants'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          {CIB}
        </title>
        <meta property="og:title" content={CIB} key="title" />
        <meta
          name="description"
          key="desc"
          content={DESCRIPTION}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={WEBSITE_URL} />
        <meta property="og:image" key="image" content={`${BASE_IMG_URL}/hero-light.png`} />
        <meta name="twitter:card" content="summary_large_image" />
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