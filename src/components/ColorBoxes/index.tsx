import { Color } from '../../model/color'
import { ColorBoxes as InnerColorBoxes } from './ColorBoxes'
import { PlaceHolder } from './PlaceHolder'

interface Props {
  isLoading: boolean
  colors: Color[] | null
}

export const ColorBoxes = ({ isLoading, colors }: Props) =>
  isLoading ? <PlaceHolder /> : <InnerColorBoxes colors={colors as Color[]} />
