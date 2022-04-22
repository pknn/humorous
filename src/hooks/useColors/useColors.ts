import { useEffect, useState } from 'react'
import axios from 'axios'
import { Color } from '../../model/color'

const colorApiEndpoint = `${import.meta.env.VITE_APP_API_URL}/colors`

export const useColors = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [colors, setColors] = useState<Color[]>([])

  useEffect(() => {
    refresh()
  }, [])

  const refresh = () => {
    setIsLoading(true)
    axios.get(colorApiEndpoint).then((response) => {
      setColors(response.data as Color[])
      setIsLoading(false)
    })
  }

  return { colors, isLoading, refresh }
}
