import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, ScrollView, Image,  Pressable } from "react-native";


import { Adjustments } from "../components/adjustments.js";
import { Historic, Payed } from "../components/historic.js";
import { styles } from "./../../styles/css_light_mode.js";


export default function ProfileScreen() {
  return (

    <SafeAreaProvider style={styles.container}>

        <View style={styles.header}>
          
        </View>

      

       
      <ScrollView>
      
      <Image
        style={styles.imageMembers}
        source={require("./../../resources/images/inclino1.jpg")}
      />

      <Text style={[styles.title, { fontWeight: '400' }]}>Carolina Martins</Text>

      
      
      <View style={{ marginBottom: 30, marginTop: 40, marginLeft: 20, marginRight: 20 }}>
          <Text style={styles.title}>Dividas</Text>
          <Adjustments first="Carolina" second="Gonçalo" value="5.72" color1="#c082bd" color2="#e58756" />
         
      </View>
      <View style={{ marginBottom: 30, marginTop: 10, marginLeft: 20, marginRight: 20 }}>
          <Text style={styles.title}>Historico de Pagamentos</Text>
          <Historic first="Carolina" second="Gonçalo" value="10.21" color1="#c082bd" color2="#e58756" />
          <Payed first="Carolina" second="Tiago" value="6.43" color1="#c082bd" color2="#b1e1f0" />
          <Payed first="Carolina" second="Sandra" value="3.32" color1="#c082bd" color2="#4f8b59" />
          <Historic first="Carolina" second="Tiago" value="2.45" color1="#c082bd" color2="#b1e1f0" />
         
      </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};
