import { useMemo, useState } from 'react'
import Head from 'next/head'
import { parse } from 'rss-to-json'

import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
import { FormattedDate } from '@/components/FormattedDate'
import { PlayButton } from '@/components/player/PlayButton'
import Tabs from '@/components/Tabs'

import { buildSlug, generateTabs, formatSRTToReadableTranscript } from '@/util/helpers'
import { RSS_FEED } from '@/util/constants'

export default function Episode({ episode, transcript }) {
  const [activeTab, setActiveTab] = useState('show-notes')

  let date = new Date(episode.published)

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
    <>
      <Head>
        <title>{episode.title}</title>
        <meta property="og:title" key="title" content={episode.title} />
        <meta name="description" key="desc" content={episode.summary} />
      </Head>
      <article className="py-16 lg:py-36">
        <Container>
          <header className="flex flex-col">
            <div className="flex items-center gap-6">
              <PlayButton player={player} size="large" />
              <div className="flex flex-col">
                <h1 className="mt-2 text-4xl font-bold text-slate-900">
                  {episode.title}
                </h1>
                <FormattedDate
                  date={date}
                  className="order-first font-mono text-sm leading-7 text-slate-500"
                />
              </div>
            </div>
          </header>
         <br />
         {transcript ? 
         <Tabs
          tabsList={generateTabs(episode, transcript)} 
          value={activeTab} 
          label="Tabs for view show notes or transcript" 
          onValueChange={(val) => setActiveTab(val)}
          />
          :
          <div
          className="prose prose-slate mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"
          dangerouslySetInnerHTML={{ __html: episode.content }}
        />
          }
        </Container>
      </article>
    </>
  )
}

export async function getStaticProps({ params }) {
  let feed = await parse(RSS_FEED)
  let episode = feed.items
    .map(({ title, description, content, enclosures, published, itunes_summary: summary, podcast_transcript = null}) => ({
      id: buildSlug(title), //TODO: Update field name to be 'slug'
      title,
      description,
      content,
      summary,
      published,
      transcriptURL: podcast_transcript && podcast_transcript?.url,
      audio: enclosures.map((enclosure) => ({
        src: enclosure.url,
        type: enclosure.type,
      }))[0],
    }))
    .find(({ id }) => id === params.episode) //FIXME: Update to use the 'slug' field (instead of id) to find a match

  if (!episode) {
    return {
      notFound: true,
    }
  }

  let transcript = null;

  if (episode.transcriptURL) {
    try {
      const res = await fetch(episode.transcriptURL);
      const srtText = await res.text();

      transcript = formatSRTToReadableTranscript(srtText);

    } catch (err) {
      console.error(`Transcript fetch failed: ${err.message}`);
      transcript = null;
    }
  }

  return {
    props: {
      episode,
      transcript
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  let feed = await parse(RSS_FEED)

  return {
    paths: feed.items.map(({ title }) => ({
      params: {
        episode: buildSlug(title),
      },
    })),
    fallback: 'blocking',
  }
}
