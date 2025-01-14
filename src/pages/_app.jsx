import { AudioProvider } from '@/components/AudioProvider'
import PlausibleProvider from 'next-plausible'
import Layout from '@/components/Layout'

import '@/styles/tailwind.css'
import 'focus-visible'


export default function App({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="cultureinbetween.com" trackOutboundLinks taggedEvents>
      <AudioProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AudioProvider>
    </PlausibleProvider>
  )
}