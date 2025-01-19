export const buildSlug = (title) => {
  return title.split('|')[0].trim().split(' ').join('-').toLocaleLowerCase()
}

export const getFormattedDate = (date) => {
  //Parse the date string manually to avoid timezone issues
  const [year, month, day] = date.split('-').map(Number)

  //Month is 0-based in the Date constructor
  const newDate = new Date(year, month - 1, day)

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
