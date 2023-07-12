import { View, FlatList, SafeAreaView } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { styles } from './styles';
import { Section } from '../../components/Section';

import { homeList } from '../../../data.json';
import { FlatListHeader } from '../../components/FlatListHeader';



export function Home() {

  const heightTabBar = useBottomTabBarHeight();


  
  return (
      <SafeAreaView style={[styles.container]}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <FlatListHeader />}
            data={homeList}
            contentContainerStyle={{
               gap: 20, 
              paddingBottom: heightTabBar + 35
             }}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <Section title={item.title} listItem={item.list} />
            )}
          />
        </View>
      </SafeAreaView>
  );
}