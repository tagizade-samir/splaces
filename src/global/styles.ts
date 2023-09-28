import {StyleSheet} from 'react-native'

enum FontSize {
  xx_small = 10,
  x_small = 12,
  small = 14,
  default = 16,
  large = 18,
  x_large = 24,
  xx_large = 32,
  xxx_large = 48,
  banner = 64,
}

enum ColorsTypes {
  primary = 'primary',
  secondary = 'secondary',
  background = 'background',
  success = 'success',
  warning = 'warning',
  error = 'error',
  white = 'white',
  black = 'black',
  lightGray = 'lightGray',
  darkGray = 'darkGray',
  disabled = 'disabled',
  divider = 'divider',
}

const baseColors = {
  [ColorsTypes.success]: '#0ead69',
  [ColorsTypes.warning]: '#ffbe0b',
  [ColorsTypes.error]: '#e63946',
  [ColorsTypes.white]: '#ffffff',
  [ColorsTypes.black]: '#001219',
  [ColorsTypes.lightGray]: '#adb5bd',
  [ColorsTypes.darkGray]: '#495057',
  [ColorsTypes.disabled]: '#ced4da',
  [ColorsTypes.divider]: '#ced4da',
}

const lightColors: Record<ColorsTypes, string> = {
  [ColorsTypes.primary]: '#023e8a',
  [ColorsTypes.secondary]: '#90e0ef',
  [ColorsTypes.background]: '#f8f9fa',
  ...baseColors,
}

const menuItemColors = {
  profile: '#ffd670',
  explore: '#70d6ff',
  record: '#ff9770',
  create: '#2a9d8f',
}

const darkColors: Record<ColorsTypes, string> = {
  [ColorsTypes.primary]: '#90e0ef',
  [ColorsTypes.secondary]: '#023e8a',
  [ColorsTypes.background]: '#343a40',
  ...baseColors,
}

const globalTextStyles = StyleSheet.create({
  p: {
    fontSize: FontSize.default,
    fontWeight: 'bold',
    lineHeight: FontSize.default * 1.25,
  },
  pLight: {
    fontSize: FontSize.default,
    lineHeight: FontSize.default * 1.25,
  },
  h3: {
    fontSize: FontSize.x_large,
    fontWeight: 'bold',
    lineHeight: FontSize.x_large * 1.25,
  },
  h3Light: {
    fontSize: FontSize.x_large,
    lineHeight: FontSize.x_large * 1.25,
  },
  h2: {
    fontSize: FontSize.xx_large,
    fontWeight: 'bold',
    lineHeight: FontSize.xx_large * 1.25,
  },
  h2Light: {
    fontSize: FontSize.xx_large,
    lineHeight: FontSize.xx_large * 1.25,
  },
  h1: {
    fontSize: FontSize.xxx_large,
    fontWeight: 'bold',
    lineHeight: FontSize.xxx_large * 1.25,
  },
  h1Light: {
    fontSize: FontSize.xxx_large,
    lineHeight: FontSize.xxx_large * 1.25,
  },
})

const globalLayoutStyles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  centeredRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const spacings = {
  xs: 4,
  s: 8,
  sm: 12,
  m: 16,
  ml: 20,
  l: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
}

export {globalTextStyles, globalLayoutStyles, lightColors, darkColors, spacings, menuItemColors}
