import {StyleSheet} from 'react-native';

export const layout = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  inlineRow: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});
