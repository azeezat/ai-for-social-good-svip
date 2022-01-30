import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {typography} from './typography';

export const inputStyles = StyleSheet.create({
  label: {marginBottom: 16, color: colors.cliqkiGray, ...typography.caption},
  input: {
    paddingVertical: 18,
    paddingHorizontal: 23,
    backgroundColor: colors.cliqkiLightGray,
    borderRadius: 8,
    color: colors.cliqkiBalack,
    width: '100%',
    minHeight: 64,
  },
  inputFocusState: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.cliqkiOrange,
    borderRadius: 8,
  },
  inputFocusErrorState: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.cliqkiRed,
  },
  error: {color: colors.cliqkiRed, marginTop: 8, ...typography.caption},
  helper: {marginTop: 8, color: colors.cliqkiOrange, ...typography.caption},
});
