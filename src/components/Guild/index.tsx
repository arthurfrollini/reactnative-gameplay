import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from '../GuildIcon';

import { theme } from '../../global/styles/theme';
import styles from './styles';

export interface GuildProps {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

interface Props extends TouchableOpacityProps {
  data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.7}>
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>
      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  );
}
