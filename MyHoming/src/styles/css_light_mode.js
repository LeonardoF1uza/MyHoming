import { StyleSheet } from "react-native";

// IMPORT VARIABLES FROM VARIABLES.JS FILE
import * as CONST from "./../variables/constants.js";

export const styles = StyleSheet.create({
    background: {
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 80,
        color: CONST.whiteColor
    },
    cardMembers: {
        padding: 20,
        marginRight: 10,
        borderColor: CONST.blackColor,
        borderRadius: 10,
        borderWidth: 1,
    },
    imageMembers: {
        width: CONST.screenWidth/3,
        height: CONST.screenWidth/3,
        borderRadius: 10

    }

})