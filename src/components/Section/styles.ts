import { StyleSheet } from "react-native";
import { themes } from "../../styles/theme";




export const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  title: {
    paddingLeft: 20,
    fontSize: 17,
    fontFamily: themes.fonts.poppins_700,
    color: themes.colors.white,
    textTransform: 'capitalize',
  },
  flatList: {
    gap: 20,
  },
  flatListContentContainerStyle: {
    gap: 20,
    paddingLeft: 20
  }
});