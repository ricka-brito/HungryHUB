import { StyleSheet } from "react-native";
import COLORS from "../../constants";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        marginTop: 20,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 14,
        
    },
    text: {
        fontFamily:"Poppins",
        fontWeight: "900",
        fontSize: 18,
        color: "#000000",
        paddingHorizontal: 20,
    },
    list: {
        height: "58%",
    }
})

export default styles;