export const RSS_FEED = 'https://feed.podbean.com/cultureinbetween/feed.xml'

export const buildSlug = (title) => {
  return title.split('|')[0].trim().split(' ').join('-').toLocaleLowerCase()
}
