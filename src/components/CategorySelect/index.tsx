import React from 'react';
import { ScrollView } from 'react-native';

import { Category } from '../Category';

import { categories } from '../../utils/categories';
import styles from './styles';

interface CategorySelectProps {
  categorySelected: string;
  hasCheckBox?: boolean;
  setCategory: (categoryId: string) => void;
}

export function CategorySelect({
  categorySelected,
  hasCheckBox = false,
  setCategory,
}: CategorySelectProps) {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
}
