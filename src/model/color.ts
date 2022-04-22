export type ColorType = 'RGB' | 'HSL'

interface Color {
  type: ColorType
}

export type ColorValue = number

export interface RGB extends Color {
  red: ColorValue
  green: ColorValue
  blue: ColorValue
}

export interface HSL extends Color {
  hue: ColorValue
  saturation: ColorValue
  lightness: ColorValue
}

export type AvailableColor = RGB | HSL
