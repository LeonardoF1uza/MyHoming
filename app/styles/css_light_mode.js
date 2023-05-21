import { StyleSheet } from "react-native";

// IMPORT VARIABLES FROM VARIABLES.JS FILE
import * as CONST from "./constants.js";

export const styles = StyleSheet.create({

    container: {
        backgroundColor: "#333",
        flex: 1,
        paddingTop: 0,
        paddingBottom: 100,
    },
    subContainer: {
        backgroundColor: "#333",
        flex: 1,
        paddingTop: 50,
        paddingBottom: 100,
    },
    containerView: {
        backgroundColor: "#222", 
        borderBottomLeftRadius: 25, 
        borderBottomRightRadius: 25,
        paddingBottom: 10,
        shadowColor: CONST.blackColor,
        shadowRadius: 3,
        shadowOpacity: 1,
        elevation: 3,
    },

    //---- CALENDAR ---
    calendar: {
        margin: 20,
        marginTop: 70,
        elevation:3,
        borderRadius: 30,
        height: 450,
        backgroundColor: '#222',
    },


    //dashboard
    header: {
        flexDirection: 'row', 
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        marginBottom: 20,
        paddingTop: 40,
        justifyContent: 'space-between',
        shadowColor: 'transparent',
        shadowRadius: 3,
        shadowOpacity: 1,
        elevation: 10,
    },

    headerText: {
        fontWeight: '600',
        fontSize: CONST.textSize,
        textAlign: 'right',
        color: CONST.whiteColor,
        opacity: 0.8,
    },
    headerId: {
        fontWeight: '600',
        fontSize: CONST.subtextSize,
        textAlign: 'right',
        color: CONST.darkBlue,
        fontStyle: 'italic',
    },
    title: {
        fontSize: CONST.subtitleSize,
        fontWeight: '600',
        marginBottom: 20,
        color: CONST.whiteColor
    },

    background: {
        paddingTop: 5,
        color: CONST.whiteColor,
    },

    cardPayments: {
        padding: 20,
        margin: 10,
        marginRight: 5,
        borderColor: CONST.blackColor,
        borderRadius: 10,
        borderWidth: 1,

    },

    addExpenseAcertos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
        marginTop: 20,
        marginBottom: 10
    },

    addExpense: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
        marginTop: 20,
    },
    linePayments: {
        flexDirection: 'row',
    },
    arrowPayments: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,

    },

    addExpenseButton2: {
        backgroundColor: CONST.lightBlue,
        borderRadius: 12,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        marginRight:0,
        marginLeft: 'auto',
        marginTop: CONST.screenHeight/4,

        



    },

    // --- Bills ----


    billsContainerIconButtonCam:
    {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        marginBottom: 45,
       

    },

    billsContainerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 45,
    },
    billsContainerInput: {
        
        margin: 5,

    },
    biilsInput: {
        borderRadius: 12,
        height: 30, // Ajuste a altura desejada
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 14, // Ajuste o tamanho da fonte desejado
        borderColor: '#000',
    },



    // --- BUTTON ----
    primaryButton: {
        borderRadius: CONST.borderRadiusButton,
        paddingTop: CONST.paddingButtonVertical,
        paddingBottom: CONST.paddingButtonVertical,
        paddingLeft: CONST.paddingButtonHorizontal,
        paddingRight: CONST.paddingButtonHorizontal,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 3,
        shadowOpacity: 1,
        elevation: 1,
    },
    primaryButtonText: {
        marginLeft: 10,
        fontWeight: '600',
        fontSize: CONST.buttonTextSize
    },
    // ---- CARDS ----
    // ---- members ----
    cardMembers: {
        backgroundColor: "#333",
        padding: CONST.paddingCardMembers,
        marginRight: 10,
        marginBottom: 5,
        marginLeft: 10,
        borderRadius: CONST.borderRadiusCard,
        alignItems: 'center',
        width: CONST.screenWidth / 5 * 2,
        flexDirection: 'column',
        shadowColor: '#000',
        shadowRadius: 3,
        shadowOpacity: 1,
        elevation: 3,
        overflow: "hidden",
        
        opacity: 1,
    },
    imageMembers: {
        width: CONST.screenWidth / 3 - 15,
        height: CONST.screenWidth / 3 - 15,
        borderRadius: CONST.borderRadiusCard - 5,
        marginBottom: 20,
        opacity: 0.9
    },
    cardMembersText: {
        fontWeight: '600',
        fontSize: CONST.buttonTextSize,
        textAlign: 'center',
        color: CONST.whiteColor,
        opacity: 0.6
    },
    areaBox: {
        backgroundColor: CONST.pureWhite,
        borderRadius: CONST.boxBorderRadius,
        shadowColor: CONST.mainGray,
        shadowRadius: CONST.shadowRadius,
        shadowOpacity: 0.2,
        elevation: 3,
        overflow: "hidden",
        width: CONST.screenWidth / 5 * 2,
        height: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10 //TODO: to remove after
    },

    addExpenseButton: {
        backgroundColor: CONST.lightBlue,
        borderRadius: 12,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row'
    },
    addExpenseText: {
        marginLeft: 10,
        fontWeight: '600',
        fontSize: CONST.buttonTextSize
    },
    //popup dashboard

    popcontainerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,

    },
    popcontainerViewMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        alignItems: 'center',




    },
    popcontainerViewElem: {

        borderRadius: 12,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
    },




    popcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    popopenButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        marginBottom: 20, color: 'white'
    },

    popmodalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    popmodalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center'
    },

    popmodalText: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center'
    },
    popcloseButton:
    {
        backgroundColor: '#2196F3',
        padding: 10,
        color: 'white'
    },



    //login


    // title: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     marginBottom: 30,
    // },
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
   
})