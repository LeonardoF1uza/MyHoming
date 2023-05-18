import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, ScrollView, Image, Container, Pressable, Button } from "react-native";
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
                            <Button title="Compras" onPress={handleComprasPress} />
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
                

                <View style={{ margin: 10 }}>

                    <Text style={styles.title}>Acertos de contas</Text>
                    <View style={styles.addExpense}>
                        <Button title="Por receber" onPress={handleReceive} />
                        <Button title="Por pagar" onPress={handlePay} />
                    </View>
                </View>




            </ScrollView>

        </SafeAreaProvider>
    )

}

export default Dashboard;
