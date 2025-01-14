export const buildSlug = (title) => {
  return title.split('|')[0].trim().split(' ').join('-').toLocaleLowerCase()
}

export const getFormattedDate = (date) => {
  const newDate = new Date(date)
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
  }).format(newDate)
}

export const getSortedBlogPosts = (posts) => {
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
