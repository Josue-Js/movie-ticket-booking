import { StyleSheet, StatusBar } from "react-native";
import { themes } from "../../styles/theme";


const currentHeight = StatusBar.currentHeight


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (currentHeight || 0) + 12,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: themes.fonts.poppins_700,
    color: themes.colors.white,
    marginBottom: 36,
  },
  fieldSearch: {
    flexDirection: "row",
    alignItems: 'center',
    gap: 6,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 7,
    backgroundColor: themes.colors.white_opacity_12,
    marginHorizontal: 20,
  },
  wrapperTextInput: {
    flex: 1,
  },
  textInput: {
    fontSize: 16,
    color: themes.colors.white
  },
});