import { shallow } from 'enzyme'
import { describe, it, expect, vi } from 'vitest'
import App from './App'
import { Button } from './components/Button.tw'
import { ColorBoxes } from './components/ColorBoxes'
import { Header } from './components/Header/Header'
import { useColors } from './hooks/useColors/useColors'

vi.mock('./hooks/useColors/useColors.ts', () => ({
  useColors: vi.fn().mockReturnValue({
    colors: [],
    isLoading: false,
    refresh: vi.fn(),
  }),
}))

const getShallowMounted = () => shallow(<App />)

describe('<App />', () => {
  it('should render correctly', () => {
    const component = getShallowMounted()

    expect(component).toMatchSnapshot()
    expect(component.find(Header).exists()).toBeTruthy()
    expect(component.find(ColorBoxes).exists()).toBeTruthy()
  })

  it('should call useColor hook refresh when click Generate', () => {
    const component = getShallowMounted()
    component.find(Button).simulate('click')

    expect(useColors().refresh).toHaveBeenCalledOnce()
  })
})
