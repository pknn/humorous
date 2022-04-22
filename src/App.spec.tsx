import { shallow } from 'enzyme'
import { describe, it, expect } from 'vitest'
import App from './App'
import { Header } from './components/Header'

const getShallowMounted = () => shallow(<App />)

describe('<App />', () => {
  it('should render correctly', () => {
    const component = getShallowMounted()

    expect(component).toMatchSnapshot()
    expect(component.find(Header).exists()).toBeTruthy()
  })
})
