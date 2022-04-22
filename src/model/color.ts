export type ColorValue = number
export type ColorType = 'RGB' | 'HSL'

export interface Color {
  type: ColorType
  components: ColorValue[]
}
