import { describe, it, expect, vi } from 'vitest'
import { shallow } from 'enzyme'
import { ColorBoxes } from '.'
import { ColorBoxes as InnerColorBoxed } from './ColorBoxes'
import { PlaceHolder } from './PlaceHolder'
import { Button } from '../Button.tw'
import { useColors } from '../../hooks/useColors/useColors'

vi.mock('../../hooks/useColors/useColors.ts', () => ({
  useColors: vi.fn(),
}))

describe('<ColorBoxes />', () => {
  it('should render PlaceHolder when isLoading is true', () => {
    useColors.mockReturnValue({
      colors: [],
      isLoading: true,
      refresh: vi.fn(),
    })
    const component = shallow(<ColorBoxes />)

    expect(component.find(PlaceHolder).exists()).toBeTruthy()
  })

  it('should render InnerColorBoxes when isLoading is false', () => {
    useColors.mockReturnValue({
      colors: [],
      isLoading: false,
      refresh: vi.fn(),
    })
    const component = shallow(<ColorBoxes />)

    expect(component.find(InnerColorBoxed).exists()).toBeTruthy()
  })

  it('should call useColor hook refresh when click Generate', () => {
    useColors.mockReturnValue({
      colors: [],
      isLoading: true,
      refresh: vi.fn(),
    })
    const component = shallow(<ColorBoxes />)
    component.find(Button).simulate('click')

    expect(useColors().refresh).toHaveBeenCalledOnce()
  })
})
