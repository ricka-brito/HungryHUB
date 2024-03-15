import { StyleSheet } from "react-native";
import COLORS from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#FAFAFA',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    image: {
        width: 30,
        height: 30,
    },
    containerHighlight: {
        backgroundColor: COLORS.royalBlue,
        padding: 10,
        borderRadius: 20,
    },
    containerImage: {
        backgroundColor: "#FAFAFA",
        padding: 10,
        borderRadius: 20,
    }

})

export default styles;