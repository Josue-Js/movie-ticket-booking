import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { themes } from "../../styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";


type Props = TouchableOpacityProps & {
  dayWeek: string,
  dayMonth: number,
  hours: string
  selected?: boolean
  middle?: boolean
}


export function Session({ dayWeek,
  dayMonth, hours, selected = false, middle = false, ...rest }: Props) {

  const { green_310, purple_740, blue_840, pink_690, pink_330 } = themes.colors;


  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      {...rest}
    >
      <LinearGradient
        style={[styles.boxDay, middle && styles.activeDay]}
        colors={selected
          ? [pink_330, 'transparent']
          : [green_310, 'transparent']
        }
        start={{ x: 0, y: 0.3 }}
        end={{ x: 1, y: 0.7 }}
        locations={[0, 0.6]}
      >
        <View style={styles.wrapper}>
          <LinearGradient
            style={styles.backgroundLinearGradient}
            colors={selected
              ? [pink_690, purple_740]
              : [purple_740, blue_840]
            }
            start={{ x: 0.3, y: 0.6 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 1]}
          >

            <Text style={styles.dayWeek}>
              {dayWeek
              }</Text>
            <Text style={styles.dayMonth}>
              {dayMonth}
            </Text>
          </LinearGradient>
        </View>
      </LinearGradient>

      <LinearGradient
        style={[styles.boxHours, middle && styles.activeHours]}
        colors={selected
          ? [pink_330, 'transparent']
          : [green_310, 'transparent']
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 0.72, y: 1 }}
        locations={[0, selected ? 1 : 0.7]}
      >
        <View style={styles.wrapper}>
          <LinearGradient
            style={styles.backgroundLinearGradient}
            colors={selected
              ? [pink_690, purple_740]
              : [purple_740, blue_840]
            }
            start={{ x: 0.3, y: 0.6 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 1]}
          >
            <Text style={styles.hoursText}>
              {hours}
            </Text>
          </LinearGradient>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}