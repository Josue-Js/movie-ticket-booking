import { useEffect } from 'react';
import { Svg, Path, Defs, LinearGradient, Image, Stop, Use, Pattern } from 'react-native-svg';
import Animated, { Easing, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { BottomCard } from './BottomCard';
import { IMovie } from '../Card';



type Props = {
  index: number;
  sortTicket: (direction: 'left' | 'right') => void;
  ticket: IMovie,
}


const initialState = [0, 51, -51]


export function Ticket({ ticket, index, sortTicket }: Props) {

  const translateX = useSharedValue(0);
  const isActive = index === 0;
  const svgWidth = isActive ? 255 : 225
  const svgHeight = isActive ? 464 : 414


  useEffect(() => {
    const indexs = index === 0 ? 0 : index % 3 === 0 ? 1 : index % 3
    translateX.value = withTiming(initialState[indexs], {
      duration: 500,
      easing: Easing.exp,
    })
  }, [index])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      transform: [
        { translateX: translateX.value },
        { rotateZ: `${translateX.value * 0.118} deg` }
      ],
      zIndex: (999 - index)
    }
  })

  const eventHandler = useAnimatedGestureHandler({
    onActive: (event, ctx) => {
      const x = event.translationX;
      translateX.value = x
    },
    onEnd: (event, ctx) => {
      const x = event.translationX;
      const limit = 90

      if (x <= -limit) {
        runOnJS(sortTicket)('left')
      } else if (x >= limit) {
        runOnJS(sortTicket)('right')
      } else {
        translateX.value = withTiming(0, {
          duration: 500,
          easing: Easing.exp,
        })
      }
    },
  });



  return (
    <PanGestureHandler onGestureEvent={eventHandler}>

      <Animated.View
        style={[animatedStyle]}
      >
        <Svg
          width={svgWidth}
          height={svgHeight}
          viewBox="0 0 255 464"
          fill="none"
        >
          <Path d="M0 32C0 14.3269 14.3269 0 32 0H218C235.673 0 250 14.3269 250 32V295.5V295.5C219.918 298.589 219.985 342.315 250 346V346V428C250 445.673 235.673 460 218 460H32C14.3269 460 0 445.673 0 428V346V346C30.0613 342.358 30.1268 298.552 0 295.5V295.5V32Z" fill="#9B93B4" />
          <Path d="M0 32C0 14.3269 14.3269 0 32 0H218C235.673 0 250 14.3269 250 32V295.5V295.5C219.918 298.589 219.985 342.315 250 346V346V428C250 445.673 235.673 460 218 460H32C14.3269 460 0 445.673 0 428V346V346C30.0613 342.358 30.1268 298.552 0 295.5V295.5V32Z" fill="url(#pattern0)" />

          {index === 0 && (
            <BottomCard />
          )}
          <Defs>
            <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <Use href="#image0_418_297" transform="matrix(0.000642458 0 0 0.000349162 -0.142458 0)" />

            </Pattern>
            <LinearGradient id="paint0_linear_418_297" x1="11" y1="14" x2="240" y2="451.5" gradientUnits="userSpaceOnUse">
              <Stop stop-color="#09FBD3" />
              <Stop offset="0.732808" stop-color="white" stop-opacity="0" />
            </LinearGradient>
            <Image
              id='image0_418_297'
              href={{
                width: 2000,
                height: 2860,
                uri: ticket.image
              }} />
          </Defs>
        </Svg>
      </Animated.View>
    </PanGestureHandler>
  );
}

