import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { ListDivider } from '../../components/ListDivider';
import { Guild, GuildProps } from '../../components/Guild';

import styles from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '2',
      name: 'Joselitos',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '3',
      name: 'Joselitos',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '4',
      name: 'Joselitos',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '5',
      name: 'Joselitos',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '6',
      name: 'Joselitos',
      icon: 'image.png',
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 69, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
