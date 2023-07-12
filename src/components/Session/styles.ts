import { StyleSheet } from "react-native";
import { themes } from "../../styles/theme";




export const styles = StyleSheet.create({

  container: {
  },
  boxDay: {
    width: 50,
    height: 80,
    borderRadius: 10,
    padding: 2,
  },
  activeDay: {
    width: 70,
    height: 100,
  },
  wrapper: {
    flex: 1,
    borderRadius: 10,
  },
  backgroundLinearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  dayWeek: {
    fontSize: 15,
    fontFamily: themes.fonts.poppins_400,
    color: themes.colors.white_opacity_87
  },
  dayMonth: {
    fontSize: 15,
    fontFamily: themes.fonts.poppins_700,
    color: themes.colors.white_opacity_87
  },

  boxHours: {
    width: 50,
    height: 40,
    borderRadius: 10,
    padding: 2,
    marginTop: 20,
  },
  hoursText: {
    fontSize: 15,
    fontFamily: themes.fonts.poppins_400,
    color: themes.colors.white_opacity_87
  },
  activeHours: {
    width: 70,
    height: 40,
  }
});