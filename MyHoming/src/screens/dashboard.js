import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, ScrollView, Image, Pressable } from "react-native";
import { Header } from 'react-native-elements';


import {styles} from "./../styles/css_light_mode.js";


export default function Dashboard() {
    const houseName = "MyHoming"
    const houseId = "123 123 123"
    

    return (
        <SafeAreaProvider style={styles.background}>
            <StatusBar style="ligth" />
            <ScrollView>
                    <Header
                        style={styles.header}
                        placement="left"
                        leftComponent={{ text: houseName, style:  styles.headerText  }}
                        rightComponent={{ text: houseId, style:  styles.headerSubtext  }}
                        
                    />
                <View style={styles.topBar}>
                    
                </View>
                <View>
                    <Text style = {styles.sectionTitle2}>Inquilinos</Text>
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

                    <Text style = {styles.sectionTitle2}>acertos</Text>


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

