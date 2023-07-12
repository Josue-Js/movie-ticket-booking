import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Header } from "../../../components/Header";
import { Session } from "../../../components/Session";

import MoreVertical from '../../../assets/moreVertical.svg';
import { themes } from "../../../styles/theme";
import { styles } from "./style";





const sessions = [
  {
    dayWeek: 'Thu',
    dayMonth: 21,
    hours: '16:00'
  },
  {
    dayWeek: 'Fri',
    dayMonth: 22,
    hours: '17:00'
  },
  {
    dayWeek: 'Sat',
    dayMonth: 23,
    hours: '18:00'
  },
  {
    dayWeek: 'Sun',
    dayMonth: 24,
    hours: '19:00'
  },
  {
    dayWeek: 'Mon',
    dayMonth: 25,
    hours: '20:00'
  },
]


type ISession = {
  dayWeek: string,
  dayMonth: number,
  hours: string
}



export function ChooseSession() {

  const navigation = useNavigation();
  const [sessionSelected, setSessionSelected] = useState('');

  const { purple_890, pink_690, purple_780, pink_340 } = themes.colors;


  function handlePress(session: ISession) {
    setSessionSelected(session.dayWeek)
  }

  function handlerNavigation() {
    navigation.navigate('ChooseSeats')
  }



  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/originals/87/71/26/877126c870856b97b811410d20716bd5.jpg' }}
          resizeMode="cover"
        />
        <LinearGradient
          style={styles.gradient}
          colors={['transparent', purple_890]}
          locations={[0, 0.9]}
        />
      </View>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Header
          icon={<MoreVertical />}
        />

        <View style={styles.info}>
          <Text style={styles.title}>
            Doctor Strange
          </Text>

          <Text style={styles.subTitle}>
            in the Multiverse of Madness
          </Text>

          <Text style={styles.description} numberOfLines={3}>
            Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse, including alternate versions of... read more
          </Text>

        </View>
        <View style={styles.sessions}>
          <Text style={styles.sessionsTitle}>
            Select date and time
          </Text>

          <View style={styles.options}>

            {sessions.map((session, index) => (
              <Session
                selected={sessionSelected === session.dayWeek}
                middle={index == 2}
                key={session.dayMonth}
                dayWeek={session.dayWeek}
                dayMonth={session.dayMonth}
                hours={session.hours}
                style={{
                  paddingTop:
                    index != 2 ? index % 2 === 0 ? 60 : 40 : 0
                }}
                onPress={() => handlePress(session)}
              />
            ))}
          </View>

          {sessionSelected && (
            <TouchableOpacity
              onPress={handlerNavigation}
              style={styles.btnReservation}
            >
              <LinearGradient
                style={styles.btnBorder}
                colors={[pink_340, 'transparent']}
                start={{ x: 0.3, y: 0, }}
                end={{ x: 0.7, y: 1 }}
              >
                <LinearGradient
                  style={styles.btnLinearGradient}
                  colors={[pink_690, purple_780]}
                  start={{ x: 0.45, y: 0 }}
                  end={{ x: 0.5, y: 1.4 }}
                  locations={[0, 0.99]}
                >
                  <Text style={styles.btnText}>
                    Reservation
                  </Text>
                </LinearGradient>
              </LinearGradient>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}