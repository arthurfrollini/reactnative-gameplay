import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/Background';

import { theme } from '../../global/styles/theme';
import styles from './styles';

interface HeaderProps {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }: HeaderProps) {
  const { secondary100, secondary50, heading } = theme.colors;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary50]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
}
