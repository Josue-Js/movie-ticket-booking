import {Path, Rect, Text } from 'react-native-svg';
import { CodeBar } from './CodeBar';





export function BottomCard() {


  return (
    <>
    <Path d="M22.5 320H227.5L227.529 321.363C227.799 334.042 237.4 344.568 250 346L250.5 403.5L250 432C249.441 447.641 236.633 460.05 220.982 460.113L30.017 460.883C13.8505 460.948 0.55714 448.157 0 432V403.5V346C11.4138 344.829 20.5082 335.934 21.9314 324.549L22.5 320Z" fill="#9B93B4" />

    <Text x="34" y="348" fill='#56147A' fontWeight='500' fontSize={14}>
      Date:
    </Text>
    <Text x="71" y="348" fill='#000' fontWeight='400' fontSize={14}>
      April 23
    </Text>

    <Text x="138" y="348" fill='#56147A' fontWeight='500' fontSize={14}>
      Time:
    </Text>
    <Text x="178" y="348" fill='#000' fontWeight='400' fontSize={14}>
      6 p.m 
    </Text>

    <Text x="34" y="379" fill='#56147A' fontWeight='500' fontSize={14}>
      Row:
    </Text>
    <Text x="68" y="379" fill='#000' fontWeight='400' fontSize={14}>
     2
    </Text>

    <Text x="138" y="379" fill='#56147A' fontWeight='500' fontSize={14}>
      Seats:
    </Text>
    <Text x="181" y="379" fill='#000' fontWeight='400' fontSize={14}>
     9, 10
    </Text>

    <CodeBar />

    </>
  );
}