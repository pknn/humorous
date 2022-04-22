import { Color } from '../../model/color'
import { ColorBox } from '../ColorBox/ColorBox'
import { Container } from './ColorBoxes.tw'

export const ColorBoxes = () => {
  const colors: Color[] = [
    { type: 'HSL', components: ['12', '20%', '60%'] },
    { type: 'RGB', components: ['233', '245', '182'] },
    { type: 'HSL', components: ['12', '20%', '60%'] },
    { type: 'RGB', components: ['233', '245', '182'] },
    { type: 'HSL', components: ['12', '20%', '60%'] },
  ]

  return (
    <Container>
      {colors.map((color) => (
        <ColorBox color={color} key={JSON.stringify(color)} />
      ))}
    </Container>
  )
}
