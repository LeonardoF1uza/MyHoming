import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, ScrollView, Image, Container, Pressable } from "react-native";
import { Header } from 'react-native-elements';
import {
    MoneyRecive, ShoppingCart, ArrowRight
} from "iconsax-react-native";

import { styles } from "./../styles/css_light_mode.js";
import * as CONST from "./../variables/constants.js";


export default function Dashboard() {
    const houseName = "House Name"
    const houseId = "123 123 123"
    const MyHoming = "MyHoming"


    return (
        <SafeAreaProvider style={styles.background}>
            <StatusBar style="ligth" />
            <ScrollView>
                <Header
                    style={styles.header}
                    placement="right"
                    leftComponent={{ text: MyHoming, style: styles.headerText }}
                    rightComponent={<View style={styles.nameHouseId}>
                        <Text>{houseName}</Text>
                        <Text>{houseId}</Text>
                    </View>}
                />

                <View style={styles.topBar}>

                </View>
                <View style={{ margin: 10 }}>
                    <Text style={styles.title}>Adicionar Despesa</Text>
                    <View style={styles.addExpense}>
                        <Pressable style={styles.addExpenseButton}>
                            <MoneyRecive
                                size="20"
                                color="#000"
                            />
                            <Text style={styles.addExpenseText}>Contas</Text>
                        </Pressable>
                        <Pressable style={[styles.addExpenseButton, { backgroundColor: CONST.lightGrey }]}>
                            <ShoppingCart
                                size="20"
                                color="#000"
                            />
                            <Text style={styles.addExpenseText} >Compras</Text>
                        </Pressable>
                    </View>
                </View>
                <View >
                    <Text style={[styles.title, { marginLeft: 10 }]}>Inquilinos</Text>
                    <ScrollView
                        horizontal={true}>
                        <View style={styles.cardMembers}>
                            <Image style={styles.imageMembers}
                                source={require("./../resources/images/inclino1.jpg")}
                                resizeMode="cover"
                            />
                            <Text>Carolina Matias</Text>
                        </View>
                        <View style={styles.cardMembers}>
                            <Image style={styles.imageMembers}
                                source={require("./../resources/images/inclino2.jpg")}
                                resizeMode="cover"
                            />
                            <Text>Tiago Bartolomeu</Text>
                        </View>
                        <View style={styles.cardMembers}>
                            <Image style={styles.imageMembers}
                                source={require("./../resources/images/inclino3.jpg")}
                                resizeMode="cover"
                            />
                            <Text>Sandra Antunes</Text>
                        </View>
                        <View style={styles.cardMembers}>
                            <Image style={styles.imageMembers}
                                source={require("./../resources/images/inclino4.jpg")}
                                resizeMode="cover"
                            />
                            <Text>Gonçalo Dias</Text>
                        </View>
                    </ScrollView>
                </View>
                

                <View style={{ margin: 10 }}
                >

                    <Text style={styles.title}>Acertos</Text>

                    <View style={styles.cardPayments}>
                        <View style={styles.linePayments}>
                            <Text>Gonçalo Dias</Text>
                            <ArrowRight
                                style={styles.arrowPayments}
                                size="32"
                                color="#FF8A65" />
                            <Text>Carolina Matias</Text>
                        </View>
                        <View style={styles.linePayments}>
                            <Text>Tiago Bartolomeu</Text>
                            <ArrowRight
                                style={styles.arrowPayments}
                                size="32"
                                color="#FF8A65" />
                            <Text>Carolina Matias</Text>
                        </View>
                        <View style={styles.linePayments}>
                            <Text>Tiago Bartolomeu</Text>
                            <ArrowRight
                                style={styles.arrowPayments}
                                size="32"
                                color="#FF8A65" />
                            <Text>Sandra Antunes</Text>
                        </View>
                    </View>



                </View>




            </ScrollView>

        </SafeAreaProvider>
    )


    }