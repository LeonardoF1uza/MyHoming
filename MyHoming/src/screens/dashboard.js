import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, ScrollView, Image, Pressable } from "react-native";

import {styles} from "./../styles/css_light_mode.js";


export default function Dashboard() {
    const houseName = "MyHoming"
    const houseId = "123 123 123"
    

    return (
        <SafeAreaProvider style={styles.background}>
            <StatusBar style="ligth" />
            <ScrollView>
                <View style={styles.topBar}>
                    <Text>{houseName}</Text>
                    <Text>{houseId}</Text>
                </View>
                <View>
                    <Text>Inquilinos</Text>
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

                    <View style={styles.caedPayments}>
                                <Image style={styles.imageMembers}
                                    source={require("./../resources/images/inclino4.jpg")}
                                    resizeMode="cover"
                                />
                                <Text>Gonçalo Dias</Text>
                            </View>
                    
                </View>



            </ScrollView>


        </SafeAreaProvider>
    )

}
