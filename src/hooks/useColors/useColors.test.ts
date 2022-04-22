import { act, renderHook } from '@testing-library/react-hooks'
import { describe, it, expect } from 'vitest'
import { useColors } from './useColors'

describe('useColors', () => {
  it('should return correctly', () => {
    const { result } = renderHook(() => useColors())
    const { colors, isLoading, refresh } = result.current

    expect(colors).toHaveLength(5)
    expect(colors.every((color) => ['RGB', 'HSL'].includes(color.type)))

    expect(isLoading).toBeTypeOf('boolean')

    expect(refresh).toBeTypeOf('function')
    act(() => {
      refresh()
    })

    expect(colors.every((color) => ['RGB', 'HSL'].includes(color.type)))
  })
})
