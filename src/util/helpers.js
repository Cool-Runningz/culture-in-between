export const buildSlug = (title) => {
  return title.split('|')[0].trim().split(' ').join('-').toLocaleLowerCase()
}
