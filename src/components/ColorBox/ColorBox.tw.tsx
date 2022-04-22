import tw from 'tailwind-styled-components'

export const Box = tw.div`
  w-full
  h-1/5

  first:rounded-t-lg
  last:rounded-b-lg

  md:w-1/5
  md:h-full

  md:first:rounded-l-lg
  md:first:rounded-tr-none

  md:last:rounded-r-lg
  md:last:rounded-bl-none
`
