import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#52d83f', // lime green
  secondary: '#D3d624', // Key Lime Yellow

  // colors
  black: '#000000',
  white: '#FFFFFF',
  lightGray: "#EFEFF1",

  transparent: 'transparent',
  darkgray: '#898C95',
};

export const SIZES = {
  // global sizes
  base: 9,
  font: 12,
  radius: 30,
  padding: 10,
  padding2: 14,
  padding3: 16,

  // font sizes
  title: 35,
  h1: 25,
  h2: 15,
  body1: 30,
  body2: 20,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  title: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: SIZES.title,
    lineHeight: 45,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 25},
  h2: {fontFamily: 'Roboto-Black', fontSize: SIZES.h2, lineHeight: 15},
  body1: {fontFamily: 'Roboto-Black', fontSize: SIZES.body1, lineHeight: 35},
  body2: {fontFamily: 'Roboto-Black', fontSize: SIZES.body2, lineHeight: 25},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
