import { StyleSheet } from "react-native";

// IMPORT VARIABLES FROM VARIABLES.JS FILE
import * as CONST from "./../variables/constants.js";

export const styles = StyleSheet.create({
    
    //dashboard
    header: {
        flexDirection:'column',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        backgroundColor: "#000"
    },
    headerText:{
        fontSize: 24,
        paddingBottom: 10,
        text: "center",
        fontWeight: 'bold',
        flexDirection: 'row',
    },
    headerSubtext:{
        fontSize: 14,
        paddingLeft: 20,
        paddingBottom: 10,
        text: "center",
        fontStyle: 'italic',
        fontWeight: 'normal',
        flexDirection: 'row',
        marginTop: 'auto',
        marginBottom: 0
    },
    sectionTitle2: {
        fontSize: 24,
        fontWeight: 'bold',
        flexDirection: 'row',
        marginRight: 10,
        margin:10
    },

    background: {
        paddingTop: 5,
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


    //login


    caedPayments: {
        padding: 20,
        margin: 10,
        marginRight: 5,
        borderColor: CONST.blackColor,
        borderRadius: 10,
        borderWidth: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        width: '80%',
    },


    //List

    container2: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        flexDirection: 'row',
        marginRight: 10,
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
    header: {
        flexDirection: 'row',
  }
})