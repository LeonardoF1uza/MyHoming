import React, { useState } from 'react';

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TextInput, View, Pressable, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import moment from 'moment';

import {
    DocumentText, Camera
} from "iconsax-react-native";

import { useNavigation } from "@react-navigation/native";

import * as CONST from "./../../styles/constants.js";

import { styles } from "./../../styles/css_light_mode.js";

import { PrimaryButton } from "../components/button.js";

const BillsScreen = ({navigation}) => {
    const [total, setTotal] = useState('');
    const [base, setBase] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
   
    

    const [open, setOpen] = useState(false);
    const handleAddBills = () => {
        console.log('handleAddShopping called');
        Alert.alert("Atenção", "Tem a certeza que deseja adicionar conta?", [
            { text: "Cancelar" },
            {
                text: "Confirmar",
                onPress: () => {
                    navigation.navigate("HomeDashboard");
                },
            },
        ]);
    };
    const [date2, setDate2] = useState('');

    return (
        <SafeAreaProvider style={styles.subContainer_2} >
            <StatusBar style="ligth" />
            <ScrollView style={{ flexDirection: 'column', marginLeft: 20, marginRight: 20, paddingBottom: 20, marginBottom: 0 }}>
                <View style={styles.billsContainerIcon}>
                    <DocumentText size="150" color={CONST.darkBlue} />
                </View>
                <TextInput
                    style={styles.billsInput}
                    placeholder="Valor total de conta"
                    placeholderTextColor={CONST.lightGrey}
                    value={total}
                    onChangeText={newTotal => setTotal(newTotal)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.billsInput}
                    placeholderTextColor={CONST.lightGrey}
                    placeholder="Valor base"
                    value={base}
                    onChangeText={newBase => setBase(newBase)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.billsInput}
                    placeholderTextColor={CONST.lightGrey}
                    value={date}
                    onChangeText={newDate => setDate(newDate)}
                    placeholder="Digite a data de inicio (DD/MM/AAAA)"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.billsInput}
                    placeholderTextColor={CONST.lightGrey}
                    value={date2}
                    onChangeText={newDate => setDate2(newDate)}
                    placeholder="Digite a data final (DD/MM/AAAA)"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.billsInput}
                    placeholderTextColor={CONST.lightGrey}
                    placeholder="Descrição (opcional)"
                    value={description}
                    onChangeText={newDescription => setDescription(newDescription)}
                />
            
            <Pressable
                 style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <PrimaryButton text="Foto" type="camera" color={CONST.lightGrey} />
            </Pressable>
            <Pressable
                    onPress={handleAddBills}
                    style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                    <PrimaryButton text="Adicionar conta" type="add" color={CONST.lightBlue} />
                </Pressable >
            </ScrollView>


        </SafeAreaProvider>
    );
};



export default BillsScreen;
