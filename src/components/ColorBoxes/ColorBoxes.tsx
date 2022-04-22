import { Color } from '../../model/color'
import { ColorBox } from '../ColorBox/ColorBox'
import { Container } from './ColorBoxes.tw'

interface Props {
  colors: Color[]
}

export const ColorBoxes = ({ colors }: Props) => (
  <Container>
    {colors.map((color) => (
      <ColorBox color={color} key={JSON.stringify(color)} />
    ))}
  </Container>
)
