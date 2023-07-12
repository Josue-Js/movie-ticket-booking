import { View, ViewProps, ImageBackground } from 'react-native';
import { LinearGradient, } from 'expo-linear-gradient';

import { themes } from '../../styles/theme';
import { styles } from './styles';

import GrowBackground from '../../assets/background.png';

type Props = ViewProps & {
  children: React.ReactNode
}



export function Background({ children, ...rest }: Props) {

  const { purple_890, purple_740 } = themes.colors

  return (
    <View {...rest} style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={[purple_740, purple_890]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ImageBackground
          source={GrowBackground}
          style={{ flex: 1, }}
        >
          {children}
        </ImageBackground>
      </LinearGradient>
    </View>

  );
}