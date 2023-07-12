import { useState } from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { Ticket } from "../../components/Ticket";

import MoreVertical from '../../assets/moreVertical.svg'
import { styles } from "./styles";
import data from '../../../data.json';


const MyTicket = [data.homeList[1].list[0], data.homeList[1].list[1], data.homeList[1].list[3]]


export function MyTickets() {

  const [myTickets, setMyTickets] = useState(MyTicket);

  function sortTicket(direction: 'left' | 'right') {


    let obj = myTickets;
    const len = myTickets.length - 1
    const firstElement = obj[0];
     const lastElement = obj[len]

    if (direction === 'left') {
     obj.shift()
     obj.push(firstElement);
    } else  {
      obj.pop()
     lastElement
      obj = [lastElement, ...obj]
    }

    setMyTickets([...obj])
  }

  
  return (
    <View style={styles.container}>
      <Header
        title="Mobile Ticket"
        icon={<MoreVertical />}
      />
      <View style={styles.wrapper}>

        {myTickets.map((ticket, index) => (
          <Ticket
            key={ticket.title}
            ticket={ticket}
            index={index}
            sortTicket={sortTicket}
          />
        ))}
      </View>
    </View>
  );
}