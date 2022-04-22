import { act, renderHook } from '@testing-library/react-hooks'
import { describe, it, expect } from 'vitest'
import { useColors } from './useColors'

describe('useColors', () => {
  it('should return correctly', () => {
    const { result } = renderHook(() => useColors())
    const [colors, status, refresh] = result.current

    expect(colors).toHaveLength(5)
    expect(colors.every((color) => ['RGB', 'HSL'].includes(color.type)))

    expect(['idle', 'loading', 'success', 'failed']).toContain(status)

    expect(refresh).toBeTypeOf('function')
    act(() => {
      refresh()
    })

    expect(colors.every((color) => ['RGB', 'HSL'].includes(color.type)))
  })
})
