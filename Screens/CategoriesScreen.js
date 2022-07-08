import { FlatList } from 'react-native';
import CategoriesGridTile from '../Components/CategoriesGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CategoriesGridTile {...item} />}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
