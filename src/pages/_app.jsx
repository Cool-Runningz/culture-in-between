import { AudioProvider } from '@/components/AudioProvider'
import PlausibleProvider from 'next-plausible'
import Layout from '@/components/Layout'

import '@/styles/tailwind.css'
import 'focus-visible'

const getLayoutByName = (name) => {
  switch (name) {
    case "Blog":
      return function getLayout(page) {
        return (
          <div className='bg-orange-400'>
            {page}
          </div>
        )
      }
    default:
      return function getLayout(page) {
        return (
          <Layout>
            {page}
          </Layout>
        )
      }
  }
}


export default function App({ Component, pageProps }) {
  const getLayout = getLayoutByName(pageProps.componentName)

  return (
    <PlausibleProvider domain="cultureinbetween.com" trackOutboundLinks taggedEvents>
      <AudioProvider>
        {getLayout(<Component {...pageProps} />)}
      </AudioProvider>
    </PlausibleProvider>
  )
}