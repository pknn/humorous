export type ColorValue = string
export type ColorType = 'RGB' | 'HSL'

export interface Color {
  type: ColorType
  components: ColorValue[]
}
