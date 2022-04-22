import { useState } from 'react'
import { Color } from '../../model/color'

export const useColors = (): [Color[], string, () => void] => {
  const [status, setStatus] = useState('idle')
  const [colors, setColors] = useState<Color[]>([
    {
      type: 'RGB',
      components: [123, 120, 99],
    },
    {
      type: 'RGB',
      components: [178, 25, 12],
    },
    {
      type: 'HSL',
      components: [178, 50, 99],
    },
    {
      type: 'HSL',
      components: [275, 14, 30],
    },
    {
      type: 'RGB',
      components: [40, 77, 34],
    },
  ])

  const refresh = () => {
    return
  }

  return [colors, status, refresh]
}
