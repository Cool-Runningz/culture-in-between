
import Image from 'next/image'
//  Reference docs to customize styles for all MDX files
// - https://nextjs.org/docs/pages/building-your-application/configuring/mdx#using-custom-styles-and-components
export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 className='text-center'>{children}</h1>
    ),
    img: (props) => (
      <Image
        alt={props.alt}
        sizes="100vw"
        width={550}
        height={350}
        className='mx-auto rounded-md'
        {...props}
      />
    ),
    ...components,
  }
}
