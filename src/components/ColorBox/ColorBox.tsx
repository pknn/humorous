import { useMemo } from 'react'
import { Color } from '../../model/color'

export const getColorProperty = ({ type, components }: Color) =>
  `${type.toLowerCase()}(${components.join(',')})`

interface ColorBoxProps {
  color: Color
}

export const ColorBox = ({ color }: ColorBoxProps) => {
  const colorProperty = useMemo(() => getColorProperty(color), [color])

  return (
    <div style={{ background: colorProperty }} className="w-full h-full"></div>
  )
}
