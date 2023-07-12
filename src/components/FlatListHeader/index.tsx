import { View, Text, TextInput } from 'react-native';

import { themes } from "../../styles/theme";
import { styles } from "./styles";

import Microphone from '../../assets/microphone.svg';
import MagnifyingGlass from '../../assets/magnifyingGlass.svg'



export function FlatListHeader() {

  const { white_opacity_60 } = themes.colors

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Choose Movie
      </Text>

      <View style={styles.fieldSearch}>
        <View>
          <MagnifyingGlass width={16} height={16} fill='#fff' />
        </View>
        <View style={styles.wrapperTextInput}>
          <TextInput
            placeholder='Search'
            style={styles.textInput}
            placeholderTextColor={white_opacity_60}
            keyboardType='default'
          />
        </View>
        <View>
          <Microphone width={11} height={17} fill='#fff' />
        </View>
      </View>
    </View>
  );
}