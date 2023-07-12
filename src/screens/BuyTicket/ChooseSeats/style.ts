import { StyleSheet } from "react-native";
import { themes } from "../../../styles/theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,

  },
  content: {
    paddingTop: 70,
  },
  headerWrapper: {
    paddingHorizontal: 20,
  },
  imageWrapper: {
    marginTop: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sessions: {
    gap: 40,
    marginTop: 66,
  },
  vipSession: {
    gap: 20,
    alignItems: 'center'
  },
  defaultSession: {
    gap: 20,
    alignItems: 'center'
  },
  rowSeats: {
    flexDirection: 'row',
    gap: 10,
  },
  space: {
    width: 33,
  },
  legends: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
    marginTop: 44,
    paddingHorizontal: 20,
  },
  legend: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  legendText: {
    fontSize: 15,
    color: themes.colors.white_opacity_87,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  available: {
    backgroundColor: themes.colors.white,
  },
  reserved: {
    backgroundColor: themes.colors.pink_690,
  },
  selected: {
    backgroundColor: themes.colors.green_310
  },
  buttonCard: {
    marginTop: 30,

  },
  imageBackground: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingVertical: 52,
  },
  infoAboutTicketWrapper: {
    gap: 20,
  },
  infoAboutTicket: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoAboutTicketTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoAboutTicketText: {
    fontSize: 15,
    fontFamily: themes.fonts.poppins_400,
    color: themes.colors.white_opacity_87,
    textTransform: 'capitalize',
  },
  infoAboutTicketDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: themes.colors.white,
    margin: 10,
  },
  buyButton: {
    height: 97,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderTopLeftRadius:  48,
    borderBottomLeftRadius: 48,
    backgroundColor: '#321848',
  },
  buyButtonText: {
    fontSize: 15,
    fontFamily: themes.fonts.poppins_400,
    color: themes.colors.white
  }
});