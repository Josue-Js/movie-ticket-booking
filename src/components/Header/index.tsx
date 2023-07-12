import { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ArrowLeft from '../../assets/arrowLeft.svg';
import { BlurredButton } from '../BlurredButton';
import { styles } from './styles';


type Props = {
  title?: string;
  icon?: ReactNode;
}


export function Header({ title, icon }: Props) {

  const router = useNavigation();

  return (
    <View style={styles.container}>
      <BlurredButton size={44} color='#8165A5' onPress={router.goBack}>
        <ArrowLeft />
      </BlurredButton>
      {title && (
        <Text style={styles.title}>
          {title}
        </Text>
      )}

      {icon && (
        <BlurredButton size={44} color='#8165A5'>
          {icon}
        </BlurredButton>
      )}
    </View>
  );
}