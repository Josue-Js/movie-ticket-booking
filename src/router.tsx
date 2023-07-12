import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import { Home } from './screens/Home';
import { themes } from './styles/theme';

import { BlurredButton } from './components/BlurredButton';
import { MyTickets } from './screens/MyTicket';
import { ChooseSeats } from './screens/BuyTicket/ChooseSeats';
import { ChooseSession } from './screens/BuyTicket/ChooseSession';

import HomeIcon from './assets/home.svg';
import LocationIcon from './assets/location.svg';
import TicketIcon from './assets/ticket.svg';
import CategoryIcon from './assets/category.svg';
import ProfileIcon from './assets/profile.svg';




export type RootStackParamList = {
  Main: undefined;
  ChooseSeats: undefined;
  ChooseSession: undefined;
  MyTickets: undefined;
};


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

type PropsTabBarIcon = {
  focused: boolean;
  icon: () => JSX.Element
}


function TabBar() {

  const { pink_340, blue_490, purple_360, white_opacity_12, purple_780 } = themes.colors


  const Icon = ({ focused, icon }: PropsTabBarIcon) => {
    const Icon = icon;
    return (
      <>
        {focused ? (
          <BlurredButton style={{ marginTop: -50 }} color='#907CC8'>
            <Icon />
          </BlurredButton>
        ) : (
          <Icon />
        )}
      </>
    );
  }



  return (
    <Tab.Navigator
      initialRouteName='Home'
      sceneContainerStyle={{
        backgroundColor: 'transparent',
      }}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          borderBottomColor: white_opacity_12,
          height: 80,
          paddingHorizontal: 15,
        },

        tabBarBackground: () => (
          <LinearGradient
            style={{ flex: 1 }}
            colors={[purple_780, blue_490, pink_340]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            locations={[0, 0.49, 1]}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => Icon({
            focused,
            icon: () => <HomeIcon />
          })
        }} />

      <Tab.Screen name="Location" component={Home} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => Icon({
          focused,
          icon: () => <LocationIcon />
        })
      }} />
      <Tab.Screen name="MyTickets" component={MyTickets} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => Icon({
          focused,
          icon: () => <TicketIcon />
        })
      }} />
      <Tab.Screen name="Category" component={Home} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => Icon({
          focused,
          icon: () => <CategoryIcon />
        })
      }} />
      <Tab.Screen name="Profile" component={Home} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => Icon({
          focused,
          icon: () => <ProfileIcon />
        })
      }} />
    </Tab.Navigator>
  );
}



export function Routes() {


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "transparent" },
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='Main'
          component={TabBar}
          options={{ animation: 'none' }}
        />
        <Stack.Screen
          name='ChooseSession'
          component={ChooseSession}
          options={{ animation: 'flip' }}
        />
        <Stack.Screen
          name='ChooseSeats'
          component={ChooseSeats}
          options={{ animation: 'flip' }}
        />

      </Stack.Navigator>
    </NavigationContainer >
  );
}



