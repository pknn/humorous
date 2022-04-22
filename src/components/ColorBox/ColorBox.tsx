import { useMemo } from 'react'
import { Color } from '../../model/color'
import { Box } from './ColorBox.tw'

export const getColorProperty = ({ type, components }: Color) =>
  `${type.toLowerCase()}(${components.join(',')})`

interface ColorBoxProps {
  color: Color
}

export const ColorBox = ({ color }: ColorBoxProps) => {
  const colorProperty = useMemo(() => getColorProperty(color), [color])

  return <Box style={{ background: colorProperty }} />
}
