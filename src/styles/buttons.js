import {StyleSheet} from 'react-native';

export const buttonStyles = StyleSheet.create({
  smallButton: {
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  mediumButton: {
    paddingVertical: 3,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  largeButton: {
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  smallButtonText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
  },
  mediumButtonText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 7,
    lineHeight: 16,
  },
  largeButtonText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default buttonStyles;
