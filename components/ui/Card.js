import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";
function Card({ children }) {
  return (<View style={styles.card}>{children}</View>);
}
export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 30,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "Black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});