import { describe, it, expect } from 'vitest'
import { shallow } from 'enzyme'
import React from 'react'
import { ColorBoxes } from '.'
import { ColorBoxes as InnerColorBoxed } from './ColorBoxes'
import { PlaceHolder } from './PlaceHolder'

type Props = React.ComponentProps<typeof ColorBoxes>
const setup = (overrideProps?: Partial<Props>) => {
  const props: Props = {
    colors: null,
    isLoading: true,
    ...overrideProps,
  }

  return shallow(<ColorBoxes {...props} />)
}

describe('<ColorBoxes />', () => {
  it('should render PlaceHolder when isLoading is true', () => {
    const component = setup()

    expect(component.find(PlaceHolder).exists()).toBeTruthy()
  })

  it('should render InnerColorBoxes when isLoading is false', () => {
    const component = setup({
      isLoading: false,
      colors: [],
    })

    expect(component.find(InnerColorBoxed).exists()).toBeTruthy()
  })
})
