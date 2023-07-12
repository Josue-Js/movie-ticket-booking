import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from "react-native";

import { BlurredButton } from '../../../components/BlurredButton';
import { Header } from "../../../components/Header";
import { Seat } from "../../../components/Seat";


import SeatsData from '../../../../seats.json';
import BuyIcon from '../../../assets/buy.svg';
import CalendarIcon from '../../../assets/calendar.svg';
import Effect from '../../../assets/effect.png';
import Screen from '../../../assets/screen.png';
import TicketIcon from '../../../assets/ticket.svg';
import { themes } from "../../../styles/theme";
import { styles } from "./style";



type ISeat = {
  id: string,
  status: 'Available' | 'Reserved' | 'Selected'
} | null

type ISeatSession = {
  vipSection: ISeat[][],
  defaultSection: ISeat[][]
}

type IKey = 'vipSection' | 'defaultSection'



export function ChooseSeats() {

  const seatReserved: ISeatSession = {
    'vipSection': [],
    'defaultSection': []
  }

  Object.keys(SeatsData).map((key) => {
    seatReserved[key as IKey] = SeatsData[key as IKey].map<ISeat[]>(row =>
      row.map(seat => {
        if (!seat) return null
        const random = Math.floor(Math.random() * 2)
        return {
          id: seat.id,
          status: random === 1 ? 'Available' : 'Reserved',
        }
      })
    )
  })


  const navigation = useNavigation();
  const [seats, setSeats] = useState<ISeatSession>(seatReserved);
  const [seatsSelected, setSeatSelected] = useState<ISeat[]>([]);
  const { purple_740, purple_890 } = themes.colors;



  function handleSelectSeat(seatSelected: ISeat, section: IKey) {
    var newObject = seats
    const seatsUpdate: ISeat[][] = seats[section].map(row =>
      row.map(seat => {
        if (!seat || !seatSelected) return null;

        if (seat.id === seatSelected.id) {
          if (seat.status != 'Reserved') {
            return {
              id: seat.id,
              status: seat.status === 'Available' ? 'Selected' : 'Available',
            }
          }
        }

        return seat
      })
    )
    newObject[section] = seatsUpdate
    setSeats({ ...newObject });

    setSeatSelected([...seatsSelected, seatSelected])
  }

  function handlerNavigation() {
    navigation.navigate('MyTickets')
  }



  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={[purple_740, purple_890]}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <View style={styles.headerWrapper}>
            <Header
              title="Choose Seats"
              icon={<CalendarIcon />}

            />
          </View>

          <View style={styles.imageWrapper}>
            <Image
              source={Screen}
            />
          </View>

          <View style={styles.sessions}>
            <View style={styles.vipSession}>
              {seats.vipSection.map((row, index) =>
                <View style={styles.rowSeats} key={index}>
                  {row.map((seat, i) =>
                    seat
                      ? <Seat
                        key={seat.id}
                        status={seat.status}
                        onPress={
                          seat.status === 'Reserved'
                            ? () => { }
                            : () => handleSelectSeat(seat, 'vipSection')
                        }
                      />
                      : <View style={styles.space} key={`${i}-${seat}`} />
                  )}
                </View>

              )}
            </View>
            <View style={styles.defaultSession}>
              {seats.defaultSection.map((row, index) =>
                <View style={styles.rowSeats} key={index}>
                  {row.map((seat, i) =>
                    seat
                      ? <Seat
                        key={seat.id}
                        status={seat.status}
                        onPress={() => handleSelectSeat(seat, 'defaultSection')}
                      />
                      : <View style={styles.space} key={`${i}-${seat}`} />
                  )}
                </View>
              )}
            </View>
          </View>

          <View style={styles.legends}>
            <View style={styles.legend}>
              <View style={[styles.indicator, styles.available]} />
              <Text style={styles.legendText}>
                Available
              </Text>
            </View>
            <View style={styles.legend}>
              <View style={[styles.indicator, styles.reserved]} />
              <Text style={styles.legendText}>
                Reserved
              </Text>
            </View>
            <View style={styles.legend}>
              <View style={[styles.indicator, styles.selected]} />
              <Text style={styles.legendText}>
                Selected
              </Text>
            </View>

          </View>

          {seatsSelected.length > 0 && (
            <View style={styles.buttonCard}>
              <ImageBackground
                style={styles.imageBackground}
                source={Effect}
              >

                <View style={styles.infoAboutTicketWrapper}>
                  <View style={styles.infoAboutTicket}>
                    <CalendarIcon />
                    <View style={styles.infoAboutTicketTextWrapper}>
                      <Text style={styles.infoAboutTicketText}>
                        April 23, 2022
                      </Text>
                      <View style={styles.infoAboutTicketDot} />
                      <Text style={styles.infoAboutTicketText}>
                        6.pm
                      </Text>
                    </View>

                  </View>
                  <View style={styles.infoAboutTicket}>
                    <TicketIcon />
                    <View style={styles.infoAboutTicketTextWrapper}>
                      <Text style={styles.infoAboutTicketText}>
                        Vip Section
                      </Text>
                      <View style={styles.infoAboutTicketDot} />
                      <Text style={styles.infoAboutTicketText}>
                        seat 9,10
                      </Text>
                    </View>
                  </View>
                  <View style={styles.infoAboutTicket}>
                    <BuyIcon />
                    <Text style={styles.infoAboutTicketText}>
                      Total: ${seatsSelected.length * 15}
                    </Text>
                  </View>
                </View>

                <View style={styles.buyButton}>
                  <BlurredButton
                    color='#5D406C'
                    onPress={handlerNavigation}
                  >
                    <Text style={styles.buyButtonText}>
                      Buy
                    </Text>
                  </BlurredButton>
                </View>
              </ImageBackground>
            </View>
          )}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}