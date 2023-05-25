import React, { useState } from 'react';

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Alert, TextInput, View, Pressable, Text, StyleSheet, ScrollView } from 'react-native';
import {
    ShoppingCart, Camera

} from "iconsax-react-native";

import * as CONST from "./../../styles/constants.js";

import { styles } from "./../../styles/css_light_mode.js";

import { PrimaryButton } from "../components/button.js";
import { useNavigation } from "@react-navigation/native";



const ShoppingScreen = ({ navigation }) => {

    const [total, setTotal] = useState('');
    const [description, setDescription] = useState('');
    const handleAddShopping = () => {
        console.log('handleAddShopping called');
        Alert.alert("Atenção", "Tem a certeza que deseja adicionar compra?", [
          { text: "Cancelar" },
          {
            text: "Confirmar",
            onPress: () => {
              navigation.navigate("HomeDashboard");
            },
          },
        ]);
      };

    return (
        <SafeAreaProvider style={styles.subContainer_2} >
        <StatusBar style="ligth" />
        <ScrollView style={{flexDirection: 'column', marginTop: 0, marginLeft: 20, marginRight: 20, marginBottom: 30}}>

            <View style={styles.billsContainerIcon}>
                <ShoppingCart size="150" color={CONST.darkBlue} />
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
                    placeholder="Descrição (opcional)"
                    value={description}
                    onChangeText={newDescription => setDescription(newDescription)}
                />
             <Pressable
                 style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <PrimaryButton text="Foto" type="camera" color={CONST.lightGrey} />
            </Pressable>
            <Pressable
                    onPress={handleAddShopping}
                    style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                    <PrimaryButton text="Adicionar conta" type="add" color={CONST.lightBlue} />
                </Pressable >
            </ScrollView>

        </SafeAreaProvider>
    );
};



export default ShoppingScreen;
