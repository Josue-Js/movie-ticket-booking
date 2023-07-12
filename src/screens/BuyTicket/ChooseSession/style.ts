import { StyleSheet } from "react-native";
import { themes } from "../../../styles/theme";




export const styles = StyleSheet.create({

  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: themes.colors.purple_890,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    height: 557.11,
    justifyContent: 'flex-end',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  gradient: {
    paddingTop: 60,
    paddingHorizontal: 20,
    height: 340,
  },
  content: {
    flex: 1,
  },
  scrollViewContent: {
    paddingTop: 57,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  info: {
    marginTop: 188,
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: themes.fonts.poppins_700,
    color: themes.colors.white
  },
  subTitle: {
    fontSize: 18,
    fontFamily: themes.fonts.poppins_400,
    color: themes.colors.white
  },
  description: {
    marginTop: 30,
    fontSize: 15,
    fontFamily: themes.fonts.poppins_400,
    color: themes.colors.white
  },
  sessions: {
  },
  sessionsTitle: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: themes.fonts.poppins_500,
    color: themes.colors.white,
    marginBottom: 30,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  btnReservation: {
    marginTop: 30
  },
  btnBorder: {
    padding: 1,
    borderRadius: 20,
  },
  btnLinearGradient: {
    paddingVertical: 16,
    borderRadius: 20,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: themes.fonts.poppins_500,
    color: themes.colors.white,
  }

});