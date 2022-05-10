import matrics from "~/utils/matrics";

export default {
  COLORS: {
    BACKGROUND: '#FFFFFF',
    BACKGROUND_SECOND: '#FDFDFD',

    PRIMARY: '#F10102',
    PRIMARY_900: '#B83341',
    PRIMARY_800: '#E03F50',
    PRIMARY_100: '#D16470',
    PRIMARY_50: '#FFABB3',

    SECONDARY_900: '#572D31',
    SECONDARY_500: '#7A6769',
    SECONDARY_400: '#93797B',

    SUCCESS_900: '#528F33',
    SUCCESS_50: '#F7FFF9',

    ALERT_900: '#B27F00',
    ALERT_800: '#C5941A',
    ALERT_50: '#F3EFE5',

    SHAPE: '#DCDCDC',
    TITLE: '#FFF',

    GRAY_01: '#1E2126',
    GRAY_02: '#5C6574',
    GRAY_03: '#828B9A',
    GRAY_04: '#B9C1CC',
    GRAY_05: '#CAD1D9',
    GRAY_06: '#E4E9ED',
    GRAY_07: '#F0F3F8'
  },

  FONTS: {
    MEDIUM: 'Poppins_500Medium',
    REGULAR: 'Poppins_400Regular',
    SEMI_BOLD: 'Poppins_500Medium',
    BOLD: 'Poppins_700Bold',
    LIGHT: 'Poppins_300Light',
  },

  FONTSSIZE: {
    font10: matrics.screenWidth * (10 / 375),
    font12: matrics.screenWidth * (12 / 375),
    font14: matrics.screenWidth * (14 / 375),
    font16: matrics.screenWidth * (16 / 375),
    font18: matrics.screenWidth * (18 / 375),
  },

  RATIOHEIGHT: matrics.screenHeight / 710,
  RATIOWIDTH: matrics.screenWidth / 360,
};
