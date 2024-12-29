import type { MDXComponents } from 'mdx/types'

//TODO: Reference docs to customize styles for all MDX files
// - https://nextjs.org/docs/pages/building-your-application/configuring/mdx#using-custom-styles-and-components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
