import { StyleSheet } from "react-native";
import { themes } from "../../styles/theme";




export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: themes.fonts.poppins_700,
    color: themes.colors.white_opacity_87,
  }
});