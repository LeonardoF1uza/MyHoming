import React, { useState } from 'react';
import { TextInput, View, Pressable, Text, StyleSheet } from 'react-native';
import {
    DocumentText, Camera

} from "iconsax-react-native"

import * as CONST from "./../../styles/constants.js";

import { styles } from "./../../styles/css_light_mode.js";


const BillsScreen = () => {
    const [text, setText] = useState('');

    const [text2, setText2] = useState('');

    const [text3, setText3] = useState('');


    const handleTextChange = (newText) => {
        setText(newText);
    };
    const handleTextChange2 = (newText2) => {
        setText2(newText2);
    };
    const handleTextChange3 = (newText3) => {
        setText3(newText3);
    };

    return (
        <View style={styles.subContainer} >
            <View>
                <View style={styles.billsContainerTop}>
                    <View style={styles.billsContainerIcon}>
                        <DocumentText
                            size="150"
                            color={CONST.darkBlue}
                        />
                    </View>

                </View>


                <View >

                    <View style={styles.billsContainerInput}>
                        <TextInput
                            style={styles.biilsInput}
                            placeholder="Valor total de conta"
                            value={text}
                            onChangeText={handleTextChange}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.billsContainerInput}>
                        <TextInput
                            style={styles.biilsInput}
                            placeholder="Valor base"
                            value={text2}
                            onChangeText={handleTextChange2}
                             keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.billsContainerInput}>
                        <TextInput
                            style={styles.biilsInput}
                            placeholder="Descrição (opcional)"
                            value={text3}
                            onChangeText={handleTextChange3}
                        />

                    </View>
                    <View style={styles.billsContainerInput}>
                        <Pressable style={styles.addExpenseButton}>

                            <Text style={styles.addExpenseText} >Adicionar conta</Text>
                        </Pressable>
                    </View>

                </View>
            </View>

            <View >

                <View style={styles.billsContainerIconButtonCam}>
                    <Pressable style={[styles.addExpenseButton2, {backgroundColor: CONST.lightGrey}]}>
                        <Camera
                            size="25"
                            color='#000'
                        />
                    </Pressable>

                </View>

            </View>

        </View>
    );
};



export default BillsScreen;
