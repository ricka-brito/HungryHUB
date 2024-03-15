import { StyleSheet } from "react-native";
import COLORS from "../../constants";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        paddingVertical: 10,
        marginHorizontal: 7,
        width: 100,
        height: 60,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },

    icon: {
        padding: 4,
        borderRadius: 10,
        marginRight: 6,
    },
    text: {
        fontWeight: 'bold',
        fontFamily: 'Poppins',
    }
})

export default styles;