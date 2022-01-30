import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const others = StyleSheet.create({
  grayText: {color: colors.cliqkiGray},
  blackText: {color: colors.cliqkiBlack},
  whiteText: {color: colors.cliqkiWhite},
  orangeText: {color: colors.cliqkiOrange},
  greenText: {color: colors.cliqkiGreen},
  activeText: {color: colors.cliqkiDark},
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  alignItemsCenter: {alignItems: 'center'},
  itemSeparatorStyle: {
    backgroundColor: colors.cliqkiGray,
    height: 1,
    opacity: 0.15,
  },
  commentModalContainer: {
    minHeight: '50%',
    marginTop: 'auto',
  },
  commentView: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    borderColor: colors.cliqkiGrayBorder,
  },
});
