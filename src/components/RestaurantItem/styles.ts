import { StyleSheet } from "react-native";
import COLORS from "../../constants";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        marginTop: 20,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 30,
        overflow: "hidden",
        shadowColor: "#38ABFF",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    },
    text: {
        fontFamily:"Poppins",
        fontWeight: "900",
        fontSize: 22,
        color: "#000000",
        marginHorizontal: 10, 
    },
    image: {
        width: "100%",
        height: 140,
        resizeMode: 'cover',
        marginBottom: 10
    },
    textContainer: {
        display: "flex",
        flexDirection: 'column',
        width: "100%",
        alignItems: "center",
        marginBottom: 10
    },
    firstLine: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: "90%",
    },
    star: {
        marginRight: 3,
    },
    ratingBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    descText: {
        fontFamily:"Poppins",
        fontWeight: "400",
        fontSize: 14,
        color: "#BEBEC1",
        marginBottom: 10,
        marginHorizontal: 10, 
    },
    timeText: {
        fontFamily:"Poppins",
        fontWeight: "400",
        fontSize: 14,
        color: "#BEBEC1",
        marginBottom: 10,
    },
})

export default styles;