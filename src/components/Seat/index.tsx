import { SvgProps } from 'react-native-svg';

import SeatIcon from '../../assets/seat.svg';
import { themes } from '../../styles/theme';

type Props = SvgProps & {
  status: 'Available' | 'Reserved' | 'Selected';
}


export function Seat({ status = 'Available', ...rest }: Props) {

  const { pink_690, white, green_310 } = themes.colors

  const colors = {
    'Available': white,
    'Reserved': pink_690,
    'Selected': green_310,
  }

  return (
    <SeatIcon fill={colors[status]} {...rest} />
  );
}