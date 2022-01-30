import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';

export const Button = ({
  styles,
  label,
  onPress,
  disabled,
  icon,
  loading,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles?.button, buttonStyles.center]}
      {...rest}>
      {icon}
      {loading && (
        <Progress.Circle
          size={20}
          thickness={5}
          indeterminate={true}
          color={styles?.buttonLabel.color}
          style={buttonStyles.loaderSpacing}
        />
      )}
      <Text style={[styles?.buttonLabel]} textBreakStrategy="simple">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  center: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderSpacing: {marginRight: 10},
});
