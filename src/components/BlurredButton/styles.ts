import { StyleSheet } from "react-native";




export const styles = StyleSheet.create({
  container: {
    alignItems: 'center', justifyContent: 'center',
    elevation: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 1,
  },
  linearGradient: {
    alignItems: 'center', 
    justifyContent: 'center',
  },
  wrapper: {
    width: 77,
    height: 77,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 77 / 2,
  },
  blur: {
    position: 'relative',
    flex: 1,
    borderRadius: 40,
    alignItems: 'center', 
    justifyContent: 'center',
  }
})