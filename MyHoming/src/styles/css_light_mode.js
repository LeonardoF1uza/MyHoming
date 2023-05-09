import { StyleSheet } from "react-native";

// IMPORT VARIABLES FROM VARIABLES.JS FILE
import * as CONST from "./../variables/constants.js";

export const styles = StyleSheet.create({
        topBar:{
        
    },
    myHoming:{
        textDecorationStyle : "solid",

    },
    myHomingId:{

    },
    background: {
        paddingTop: 40,

        color: CONST.whiteColor,
    },
    cardMembers: {
        padding: 20,
        margin: 10,
        marginRight: 5,
        borderColor: CONST.blackColor,
        borderRadius: 10,
        borderWidth: 1,
    },
    imageMembers: {
        width: CONST.screenWidth/3,
        height: CONST.screenWidth/3,
        borderRadius: 10

    },
    caedPayments: {
        padding: 20,
        margin: 10,
        marginRight: 5,
        borderColor: CONST.blackColor,
        borderRadius: 10,
        borderWidth: 1,
    },


})