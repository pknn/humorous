import { Color } from '../../model/color'
import { ColorBox } from '../ColorBox/ColorBox'
import { Container } from './ColorBoxes.tw'

export const PlaceHolder = () => {
  const colorValues = [229, 212, 163, 115, 82]
  const colors: Color[] = colorValues.map((value) => ({
    type: 'RGB',
    components: new Array(3).fill(value),
  }))

  return (
    <Container className="animate-pulse">
      {colors.map((color) => (
        <ColorBox color={color} key={JSON.stringify(color)} />
      ))}
    </Container>
  )
}
