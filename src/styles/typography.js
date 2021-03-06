import {StyleSheet} from 'react-native';
import {fonts} from './fonts';

export const typography = StyleSheet.create({
  title: {
    fontFamily: fonts.poppins,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 48,
  },
  title2: {
    fontFamily: fonts.inter,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 39,
  },
  heading0: {
    fontFamily: fonts.inter,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.16,
  },
  heading1: {
    fontFamily: fonts.inter,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
  },
  heading2: {
    fontFamily: fonts.inter,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 25.6,
  },
  heading3: {
    fontFamily: fonts.inter,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
  },
  heading4: {
    fontFamily: fonts.inter,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.32,
  },
  sectionTitle: {
    fontFamily: fonts.inter,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  subTitle: {
    fontFamily: fonts.inter,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
  },
  caption: {
    fontFamily: fonts.inter,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 15,
  },
  caption2: {
    fontFamily: fonts.inter,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
  },
  body: {
    fontFamily: fonts.inter,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 16,
  },
  label: {
    fontFamily: fonts.inter,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 9,
    lineHeight: 14,
  },
});
