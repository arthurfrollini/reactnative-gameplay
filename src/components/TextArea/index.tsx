import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';
import styles from './styles';

export function TextArea({ ...rest }: TextInputProps) {
  const { secondary50, secondary60 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary60]}
    >
      <TextInput {...rest} />
    </LinearGradient>
  );
}
