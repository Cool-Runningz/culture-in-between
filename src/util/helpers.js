export const buildSlug = (title) => {
  return title.split('|')[0].trim().split(' ').join('-').toLocaleLowerCase()
}

// CONSTANTS
export const RSS_FEED = 'https://feed.podbean.com/cultureinbetween/feed.xml'
export const APPLE_PODCASTS_URL =
  'https://podcasts.apple.com/us/podcast/culture-in-between/id1699976665'
export const SPOTIFY_URL =
  'https://open.spotify.com/show/1lTLAJv8ZaRAnMWY9UpDzl'
export const GOOGLE_PODCASTS_URL =
  'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2N1bHR1cmVpbmJldHdlZW4vZmVlZC54bWw'