import { describe, it, expect } from 'vitest'
import { shallow } from 'enzyme'
import { Color } from '../model/color'
import { ColorBox, getColorProperty } from './ColorBox'

const setup = (color: Color) => shallow(<ColorBox color={color} />)

type TestCase = Color[]
const testCases: TestCase = [
  { type: 'RGB', components: ['255', '255', '255'] },
  { type: 'HSL', components: ['240', '10%', '80%'] },
]

describe('<ColorBox />', () => {
  it('should render correctly', () => {
    const component = setup({ type: 'RGB', components: ['255', '255', '255'] })

    expect(component).toMatchSnapshot()
  })

  it.each(testCases)(
    'should render with correct color value when color is %s',
    (color) => {
      const component = setup(color)

      expect(component.prop('style')).toContain({
        background: getColorProperty(color),
      })
    },
  )
})
