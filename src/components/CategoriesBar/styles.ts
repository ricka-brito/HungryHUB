import { StyleSheet } from "react-native";
import COLORS from "../../constants";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        marginTop: 40,
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 14,

        
    },
    text: {
        fontFamily:"Poppins",
        fontWeight: "900",
        fontSize: 18,
        color: "#000000",
        marginBottom: 10,
    },
    scroll: {
        marginTop: 0,
        paddingTop: 0,
    }
})

export default styles;