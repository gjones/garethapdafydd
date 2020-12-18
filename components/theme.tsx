const defaultTheme = {
  colours: {
    gold: `#8B712E`,
    lightGold: `#A98833`,
    charcoal: `#454545`,
    midGrey: `#B6B6B6`,
    light: `#EAEAEA`,
    white: `#FFFFFF`,
    black: `#000000`,
  },
  sizes: {
    sizeXXS: `0.15rem`,
    sizeXS: `0.25rem`,
    sizeS: `0.5rem`,
    sizeM: `0.75rem`,
    baseSize: `1rem`,
    sizeML: `1.25rem`,
    sizeL: `1.5rem`,
    sizeXL: `2rem`,
    sizeXXL: `2.5rem`,
  },
  fontSizes: {
    textSmall: `0.875rem`,
    textRegular: `1rem`,
    textLarge: `1.25rem`,
    textLarger: `2.625rem`,
    textLargest: `3.25rem`,
  },
  fontWeights: {
    fontRegular: `normal`,
    fontBold: `bold`,
  },
  mediaQueries: {
    largeScreens: `(min-width : 64em)`,
    mediumScreens: `(max-width : 64em)`,
    smallScreens: `(max-width : 47.5em)`,
  }
};

const light = {
  bg: defaultTheme.colours.white,
  text: {
    default: defaultTheme.colours.charcoal,
    accent: defaultTheme.colours.gold,
    link: defaultTheme.colours.gold,
  },
  divide: defaultTheme.colours.light,
  // ...
}

const dark = {
  bg: defaultTheme.colours.black,
  text: {
    default: defaultTheme.colours.white,
    accent: defaultTheme.colours.lightGold,
    link: defaultTheme.colours.lightGold,
  },
  divide: defaultTheme.colours.charcoal,
  // ...
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }