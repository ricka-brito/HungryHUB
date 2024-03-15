import { StyleSheet } from "react-native";
import COLORS from "../../constants";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        marginTop: 40,
        paddingVertical: 10,
        width: "90%",
        backgroundColor: "#FAFAFA",
        borderRadius: 14
    },
    searchIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
        marginLeft: 10,
        fontFamily: "Poppins"
    }

})

export default styles;