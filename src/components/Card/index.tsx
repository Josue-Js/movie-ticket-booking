import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { styles } from "./styles";

export type IMovie = {
  title: string;
  sub_title: string;
  description: string;
  image: string;
}


type Props = {
  movie: IMovie
}


export function Card({ movie }: Props) {

  const router = useNavigation();

  function handlePress() {
    router.navigate('ChooseSession')
  }



  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={{ uri: movie.image }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}