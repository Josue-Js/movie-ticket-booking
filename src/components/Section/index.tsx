import { View, FlatList, Text, } from 'react-native';

import { styles } from './styles';
import { Card } from '../Card';



type Props = {
  title: string;
  listItem: {
    title: string;
    sub_title: string;
    description: string;
    image: string;
  }[]
}


export function Section({ title, listItem }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContentContainerStyle}
        data={listItem}
        initialNumToRender={3}
        keyExtractor={({ title }) => title}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Card movie={item} />}
      />
    </View>
  );
}