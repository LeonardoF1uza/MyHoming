import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, ScrollView, Image, Pressable } from "react-native";

import {
  Profile
} from "iconsax-react-native";

import { Adjustments } from "../components/adjustments.js";
import { Historic, Payed } from "../components/historic.js";
import { styles } from "./../../styles/css_light_mode.js";
import { PrimaryButton } from "../components/button.js";
import * as CONST from "./../../styles/constants.js";

import { useNavigation } from "@react-navigation/native";


export default function ProfileScreen({navigation}) {
  return (

    <SafeAreaProvider style={styles.container} >
      <StatusBar style="ligth" />
      <View style={styles.containerView}>
        <View style={[styles.header, { paddingTop: 60 }]}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={[styles.imageMembers, {marginLeft: 20, }]}
              source={require("./../../resources/images/inclino1.jpg")}
            />
            <View style={{ flexDirection: 'column', marginLeft: 40, }}>
              <Text style={[styles.cardMembersText, { fontSize: 20, marginBottom: 20, marginTop: 10, justifyContent: 'flex-start' }]}>Carolina Martins</Text>
              <PrimaryButton text="Editar perfil" type="edit" color={CONST.lightBlue} />
            </View>


          </View>
        </View>
      </View>

      <ScrollView>
        <View style={{ marginBottom: 0, marginTop: 40, marginLeft: 20, marginRight: 20 }}>
          <Text style={styles.title}>Dívidas</Text>
          <Adjustments first="Carolina" second="Gonçalo" value="5.72" color1="#c082bd" color2="#e58756" />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
          <PrimaryButton text="Efetuar pagamento" type="money" color={CONST.lightYellow} />
        </View>
        <View style={{ marginBottom: 30, marginTop: 30, marginLeft: 20, marginRight: 20 }}>
          <Text style={styles.title}>Historico de Pagamentos</Text>
          <Historic first="Carolina" second="Gonçalo" value="10.21" color1="#c082bd" color2="#e58756" />
          <Payed first="Carolina" second="Tiago" value="6.43" color1="#c082bd" color2="#b1e1f0" />
          <Payed first="Carolina" second="Sandra" value="3.32" color1="#c082bd" color2="#4f8b59" />
          <Historic first="Carolina" second="Tiago" value="2.45" color1="#c082bd" color2="#b1e1f0" />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
          <PrimaryButton text="Logout" type="logout" color={CONST.lightGrey} />
        </View>
      </ScrollView>
    </SafeAreaProvider >
  );
};