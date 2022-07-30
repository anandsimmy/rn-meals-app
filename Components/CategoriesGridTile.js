import React from 'react';
import { View, Text } from 'react-native';
import Styles from './CategoriesGridTile.styles';

const CategoriesGridTile = ({ title, color }) => {
  console.log({ title, color });
  return (
    <View style={[Styles.gridTileContainer, { backgroundColor: color }]}>
      <Text style={Styles.foodText}>{title}</Text>
    </View>
  );
};

export default CategoriesGridTile;
