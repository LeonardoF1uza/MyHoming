import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, ScrollView, Image,  Pressable } from "react-native";
import {
    MoneyRecive, ShoppingCart, ArrowRight, MoneySend, DocumentText
} from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";


import { PrimaryButton } from "../components/button.js";
import { MembersCard } from "../components/card.js";
import { Adjustments } from "../components/adjustments.js";

import { styles } from "./../../styles/css_light_mode.js";
import * as CONST from "./../../styles/constants.js";

const DashboardScreen = ({ navigation }) => {
    const houseName = "Apartamento 1ºD"
    const houseId = "582.006.271"

    const [modalVisible1, setModalVisible1] = useState(false);

   
    return (
        <SafeAreaProvider style={styles.container} >
            <StatusBar style="ligth" />
            <View style={styles.containerView}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'column' }}>
                        { <Image
                            style={{
                                width: CONST.screenWidth/2, height: CONST.screenWidth/9,
                            }}
                            source={require("./../../resources/images/logo2.png")}
                             />  }
                    </View>
                    <View style={{ paddingTop: 25, alignItems: 'flex-end', alignSelf: 'flex-end', flexDirection: 'column' }}>
                        <Text style={styles.headerText}>{houseName}</Text>
                        <Text style={styles.headerId}>{houseId}</Text>
                    </View>

                </View>

                <View style={{ marginBottom: 30, marginTop: 10 }}>
                    {/* <Text style={[styles.title, { marginLeft: 20 }]}>Inquilinos</Text> */}
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} >
                        <MembersCard text="Carolina Martins" image="1" color="#c082bd" />
                        <MembersCard text="Tiago Silva" image="2" color="#b1e1f0" />
                        <MembersCard text="Sandra Antunes" image="3" color="#4f8b59" />
                        <MembersCard text="Gonçalo Dias" image="4" color="#e58756" />
                    </ScrollView>
                </View>
            </View>
            <ScrollView>

                <View style={{ marginBottom: 30, marginTop: 60, marginLeft: 20, marginRight: 20 }}>
                    {/* <Text style={styles.title}>Adicionar Despesa</Text> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Pressable onPress={() => navigation.navigate("Bills")}>
                            <PrimaryButton text="Contas" type="bills" color={CONST.lightBlue} />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("Shopping")}>
                            <PrimaryButton text="Compras" type="shopping" color={CONST.lightYellow} />
                        </Pressable>
                    </View>
                </View>
                <View style={{ marginBottom: 30, marginTop: 10, marginLeft: 20, marginRight: 20 }}>
                    <Text style={styles.title}>Acertos</Text>
                    <Adjustments first="Carolina" second="Gonçalo" value="5.72" color1="#c082bd" color2="#e58756" />
                    <Adjustments first="Tiago" second="Gonçalo" value="3.58" color1="#b1e1f0" color2="#e58756" />
                    <Adjustments first="Tiago" second="Sandra" value="0.95" color1="#b1e1f0" color2="#4f8b59" />
                </View>
            </ScrollView>

        </SafeAreaProvider>



    )

}

export default DashboardScreen;