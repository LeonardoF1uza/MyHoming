import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, ScrollView, Image, TouchableOpacity, Modal, StyleSheet, Container, Pressable, Button } from "react-native";
import { Header } from "react-native-elements";
import {
    MoneyRecive, ShoppingCart, ArrowRight
} from "iconsax-react-native";

import { styles } from "./../styles/css_light_mode.js";
import * as CONST from "./../styles/constants.js";



const Dashboard = ({ navigation }) => {
    const houseName = "House Name"
    const houseId = "123 123 123"
    const MyHoming = "MyHoming"

    const handleComprasPress = () => {
        navigation.navigate('List');
    };

    const handleReceive = () => {
        navigation.navigate('List');
    };

    const handlePay = () => {
        navigation.navigate('Ledger');
    };


    const [modalVisible1, setModalVisible1] = useState(false);

    const [modalVisible2, setModalVisible2] = useState(false);

    const [modalVisible3, setModalVisible3] = useState(false);

    const [modalVisible4, setModalVisible4] = useState(false);


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
                        <Pressable onPress={handleComprasPress} style={[styles.addExpenseButton, { backgroundColor: CONST.lightGrey }]}>
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
                            <Pressable onPress={() => setModalVisible1(true)}>
                                <Image style={styles.imageMembers}
                                    source={require("./../resources/images/inclino1.jpg")}
                                    resizeMode="cover"
                                />
                                <Text>Carolina Matias</Text>
                            </Pressable>

                        </View>
                        <View style={styles.cardMembers}>
                            <Pressable onPress={() => setModalVisible2(true)}>
                                <Image style={styles.imageMembers}
                                    source={require("./../resources/images/inclino2.jpg")}
                                    resizeMode="cover"
                                />
                                <Text>Tiago Bartolomeu</Text>
                            </Pressable>
                        </View>
                        <View style={styles.cardMembers}>
                            <Pressable onPress={() => setModalVisible3(true)}>
                                <Image style={styles.imageMembers}
                                    source={require("./../resources/images/inclino3.jpg")}
                                    resizeMode="cover"
                                />
                                <Text>Sandra Antunes</Text>
                            </Pressable>
                        </View>
                        <View style={styles.cardMembers}>
                            <Pressable onPress={() => setModalVisible4(true)}>
                                <Image style={styles.imageMembers}
                                    source={require("./../resources/images/inclino4.jpg")}
                                    resizeMode="cover"
                                />
                                <Text>Gonçalo Dias</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </View>
                <Text style={[styles.title, { marginLeft: 10 }]}>Acertos de contas</Text>


                <View style={styles.cardPayments}>
                    <View style={styles.linePayments}>
                        <Text>Gonçalo Dias</Text>
                        <ArrowRight
                            style={styles.arrowPayments}
                            size="32"
                            color="#FF8A65" />
                        <Text>Carolina Matias (5)</Text>
                    </View>
                    <View style={styles.linePayments}>
                        <Text>Tiago Bartolomeu</Text>
                        <ArrowRight
                            style={styles.arrowPayments}
                            size="32"
                            color="#FF8A65" />
                        <Text>Carolina Matias (5)</Text>
                    </View>
                    <View style={styles.linePayments}>
                        <Text>Tiago Bartolomeu</Text>
                        <ArrowRight
                            style={styles.arrowPayments}
                            size="32"
                            color="#FF8A65" />
                        <Text>Sandra Antunes (5)</Text>
                    </View>

                    <View style={styles.addExpense}>
                        <Pressable
                            onPress={handleReceive}
                            style={[styles.addExpenseButton]
                            }>
                            <Text style={styles.addExpenseText} >Por Receber</Text>
                        </Pressable>

                        <Pressable
                            onPress={handlePay}
                            style={[styles.addExpenseButton2,]
                            }>
                            <Text style={styles.addExpenseText} >Por pagar</Text>
                        </Pressable>

                    </View>


                </View>

                <View style={styles.popcontainer}>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible1}
                        onRequestClose={() => setModalVisible1(false)}
                    >
                        <View style={styles.popmodalContainer}>
                            <View style={styles.popmodalContent}>
                                <View style={styles.popcontainerViewMain}>

                                    <Image style={[styles.imageMembers, styles.popcontainerViewElem]}
                                        source={require("./../resources/images/inclino1.jpg")}
                                        resizeMode="cover" />

                                    <Text style={styles.popcontainerViewElem} >Carolina Matias</Text>
                                </View>

                                <View style={styles.popcontainerViewElemMain}>

                                    <Text style={[styles.linePayments, styles.popcontainerViewElem]}>média de gastos: 35€</Text>

                                    <Text style={[styles.linePayments, styles.popcontainerViewElem]}>dinheiro gasto pela Carolina: 45€</Text>

                                    <Text style={[styles.linePayments, styles.popcontainerViewElem]}>acertos da Carolina:</Text>

                                    <View style={[styles.linePayments, styles.popcontainerViewElem]}>
                                        <Text>Gonçalo Dias</Text>
                                        <ArrowRight
                                            style={styles.arrowPayments}
                                            size="32"
                                            color="#FF8A65" />
                                        <Text>Carolina Matias</Text>
                                    </View>


                                    <View style={[styles.linePayments, styles.popcontainerViewElem]}>
                                        <Text>Tiago Bartolomeu</Text>
                                        <ArrowRight
                                            style={styles.arrowPayments}
                                            size="32"
                                            color="#FF8A65" />
                                        <Text>Carolina Matias</Text>
                                    </View>

                                </View>

                                <TouchableOpacity onPress={() => setModalVisible1(false)}>
                                    <Text style={styles.addExpenseButton}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.popcontainer}>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible2}
                        onRequestClose={() => setModalVisible2(false)}
                    >
                        <View style={styles.popmodalContainer}>
                            <View style={styles.popmodalContent}>
                                <View style={styles.popcontainerViewMain}>

                                    <Image style={[styles.imageMembers, styles.popcontainerViewElem]}
                                        source={require("./../resources/images/inclino2.jpg")}
                                        resizeMode="cover" />

                                    <Text style={styles.popcontainerViewElem} >Tiago Bartolomeu</Text>
                                </View>

                                <View style={styles.popcontainerViewElemMain}>

                                    <Text style={[styles.linePayments, styles.popcontainerViewElem]}>média de gastos: 35€</Text>

                                    <Text style={[styles.linePayments, styles.popcontainerViewElem]}>dinheiro gasto pelo Tiago: 25€</Text>

                                    <Text style={[styles.linePayments, styles.popcontainerViewElem]}>acertos da Tiago:</Text>

                                    <View style={[styles.linePayments, styles.popcontainerViewElem]}>
                                        <Text>Tiago Bartolomeu</Text>
                                        <ArrowRight
                                            style={styles.arrowPayments}
                                            size="32"
                                            color="#FF8A65" />
                                        <Text>Carolina Matias</Text>
                                    </View>


                                    <View style={[styles.linePayments, styles.popcontainerViewElem]}>
                                        <Text>Tiago Bartolomeu</Text>
                                        <ArrowRight
                                            style={styles.arrowPayments}
                                            size="32"
                                            color="#FF8A65" />
                                        <Text>Sandra Antunes</Text>
                                    </View>

                                </View>

                                <TouchableOpacity onPress={() => setModalVisible2(false)}>
                                    <Text style={styles.addExpenseButton}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.popcontainer}>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible3}
                        onRequestClose={() => setModalVisible3(false)}
                    >
                        <View style={styles.popmodalContainer}>
                            <View style={styles.popmodalContent}>
                                <View style={styles.popcontainerViewMain}>

                                    <Image style={[styles.imageMembers, styles.popcontainerViewElem]}
                                        source={require("./../resources/images/inclino3.jpg")} resizeMode="cover" />

                                    <Text style={styles.popcontainerViewElem} >Sandra Antunes</Text>
                                </View>

                                <View style={styles.popcontainerViewElemMain}>

                                    <Text style={[styles.linePayments, styles.popcontainerViewElem]}>média de gastos: 35€</Text>

                                    <Text style={[styles.linePayments, styles.popcontainerViewElem]}>dinheiro gasto pela Sandra: 40€</Text>

                                    <Text style={[styles.linePayments, styles.popcontainerViewElem]}>acertos da Sandra:</Text>

                                    <View style={[styles.linePayments, styles.popcontainerViewElem]}>
                                        <Text>Gonçalo Dias</Text>
                                        <ArrowRight
                                            style={styles.arrowPayments}
                                            size="32"
                                            color="#FF8A65" />
                                        <Text>Sandra Antunes</Text>
                                    </View>




                                </View>

                                <TouchableOpacity onPress={() => setModalVisible3(false)}>
                                    <Text style={styles.addExpenseButton}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.popcontainer}>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible4}
                        onRequestClose={() => setModalVisible4(false)}
                    >
                        <View style={styles.popmodalContainer}>
                            <View style={styles.popmodalContent}>
                                <View style={styles.popcontainerViewMain}>

                                    <Image style={[styles.imageMembers, styles.popcontainerViewElem]}
                                        source={require("./../resources/images/inclino4.jpg")} resizeMode="cover" />

                                    <Text style={styles.popcontainerViewElem} >Gonçalo Dias</Text>
                                </View>

                                <View style={styles.popcontainerViewElemMain}>

                                    <Text style={[styles.linePayments, styles.popcontainerViewElem]}>média de gastos: 35€</Text>

                                    <Text style={[styles.linePayments, styles.popcontainerViewElem]}>dinheiro gasto pelo Gonçalo: 30€</Text>

                                    <Text style={[styles.linePayments, styles.popcontainerViewElem]}>acertos da Gonçalo:</Text>

                                    <View style={[styles.linePayments, styles.popcontainerViewElem]}>
                                        <Text>Gonçalo Dias</Text>
                                        <ArrowRight
                                            style={styles.arrowPayments}
                                            size="32"
                                            color="#FF8A65" />
                                        <Text>Carolina Matias</Text>
                                    </View>


                                </View>

                                <TouchableOpacity onPress={() => setModalVisible4(false)}>
                                    <Text style={styles.addExpenseButton}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>


            </ScrollView>

        </SafeAreaProvider>



    )

}

export default Dashboard;