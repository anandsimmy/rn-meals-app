import React from 'react';
import { View, Text } from 'react-native';
import Styles from './CategoriesGridTile.styles';

const CategoriesGridTile = ({ title, color }) => {
  console.log(title, color);
  return (
    <View style={[Styles.gridTileContainer]}>
      <Text>{title}</Text>
    </View>
  );
};

export default CategoriesGridTile;
