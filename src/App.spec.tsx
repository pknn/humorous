import { shallow } from 'enzyme'
import { describe, it, expect, vi } from 'vitest'
import App from './App'
import { ColorBoxes } from './components/ColorBoxes'
import { Header } from './components/Header/Header'

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
})
