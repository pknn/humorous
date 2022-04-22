import { Color } from '../../model/color'
import { ColorBoxes } from './ColorBoxes'

export const PlaceHolder = () => {
  const colors: Color[] = new Array(5)
    .fill(0)
    .map(() => ({ type: 'RGB', components: ['163', '163', '163'] }))

  return <ColorBoxes colors={colors} />
}
