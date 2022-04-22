import { act, renderHook } from '@testing-library/react-hooks'
import axios from 'axios'
import { describe, it, expect, vi } from 'vitest'
import { useColors } from './useColors'

const mockAxiosGet = vi.spyOn(axios, 'get')

describe('useColors', () => {
  it('should return correctly', async () => {
    mockAxiosGet.mockResolvedValue({
      data: [{ type: 'RGB', components: ['12', '13', '14'] }],
    })

    const { result, waitForNextUpdate } = renderHook(() => useColors())

    expect(result.current.isLoading).toBeTruthy()
    expect(result.current.colors).toHaveLength(0)

    await waitForNextUpdate()

    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.colors).toHaveLength(1)

    act(() => {
      result.current.refresh()
    })

    expect(result.current.isLoading).toBeTruthy()

    await waitForNextUpdate()
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.colors).toHaveLength(1)
  })
})
