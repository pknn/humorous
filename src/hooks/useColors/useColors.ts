import { useState } from 'react'
import { AvailableColor } from '../../model/color'

export const useColors = (): [AvailableColor[], string, () => void] => {
  const [status, setStatus] = useState('idle')
  const [colors, setColors] = useState<AvailableColor[]>([
    {
      type: 'RGB',
      red: 123,
      green: 120,
      blue: 99,
    },
    {
      type: 'RGB',
      red: 178,
      green: 25,
      blue: 12,
    },
    {
      type: 'HSL',
      hue: 123,
      saturation: 50,
      lightness: 99,
    },
    {
      type: 'HSL',
      hue: 275,
      saturation: 14,
      lightness: 30,
    },
    {
      type: 'RGB',
      red: 40,
      green: 77,
      blue: 34,
    },
  ])

  const refresh = () => {
    return
  }

  return [colors, status, refresh]
}
