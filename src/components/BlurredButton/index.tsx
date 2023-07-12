import { ReactNode } from 'react';
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

import { styles } from './styles';
import { themes } from '../../styles/theme';


type Props = TouchableOpacityProps & {
  children?: ReactNode;
  color?: string;
  size?: number
}



export function BlurredButton({ children, color, size = 80, style, ...rest }: Props) {

  const { green_310, } = themes.colors;
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.container, { ...(typeof style === 'object' ? style : {}) }]}
    >
      <LinearGradient
        style={[styles.linearGradient,
        {
          width: size,
          height: size,
          borderRadius: size / 2
        }
        ]}
        colors={[green_310, 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.8]}
      >
        <View
          style={[styles.wrapper,
          {
            width: size - 4,
            height: size - 4,
            borderRadius: (size - 4) / 2,
            backgroundColor: color,
          }]}
        >
          <BlurView
            intensity={100}
            style={styles.blur}
          >
            {children}
          </BlurView>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}