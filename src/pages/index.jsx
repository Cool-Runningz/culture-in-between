import { Fragment } from 'react'
import { parse } from 'rss-to-json'

import { Container } from '@/components/Container'
import EpisodeEntry from '@/components/EpisodeEntry'
import { buildSlug } from '@/util/helpers'
import { RSS_FEED } from '@/util/constants'

export default function Home({ episodes }) {
  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <Container>
        <h1 className="text-2xl font-bold leading-7 text-slate-900">
          Episodes
        </h1>
      </Container>
      <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
        {episodes.map((episode) => (
          <Fragment key={episode.id}>
            <EpisodeEntry episode={episode} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const feed = await parse(RSS_FEED)
  return {
    props: {
      episodes: feed.items.map(
        ({ title, description, enclosures, published, itunes_summary: summary }) => ({
          id: buildSlug(title), //TODO: Update field name to be 'slug'
          title,
          published,
          description,
          summary,
          audio: enclosures.map((enclosure) => ({
            src: enclosure.url,
            type: enclosure.type,
          }))[0],
        })
      ),
    },
    revalidate: 10,
  }
}
