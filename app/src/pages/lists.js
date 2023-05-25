import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Pressable } from 'react-native';
import {
  MoneyRecive, ShoppingCart, ArrowRight, MoneySend, DocumentText
} from "iconsax-react-native";


import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as CONST from "./../../styles/constants.js";

import { styles } from "./../../styles/css_light_mode.js";

import { PrimaryButton } from "../components/button.js";

function Notebook() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const handleAddNote = () => {
    if (currentNote.trim() !== '') {
      setNotes([...notes, currentNote]);
      setCurrentNote('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleEditNote = (index, newText) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = newText;
    setNotes(updatedNotes);
  };

  return (
    <SafeAreaProvider style={[styles.subContainer, { paddingLeft: 20, paddingRight: 20, }]} >
      <StatusBar style="ligth" />

      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={styles.billsInput}
          multiline
          placeholder="Item"
          placeholderTextColor="#555"
          value={currentNote}
          onChangeText={(text) => setCurrentNote(text)}
        />
        <Pressable
          onPress={handleAddNote}
          style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <PrimaryButton text="Adicionar item" type="add" color={CONST.lightBlue} />
        </Pressable >
      </View>

      <FlatList
        data={notes}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'column', margin: 10 }}>
            <TextInput
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderBottomColor:  "#222",
                backgroundColor: '#222',
                borderRadius: 5,
                padding: 10,
                marginRight: 20,
                color: CONST.lightGrey
              }}
              value={item}
              onChangeText={(text) => handleEditNote(index, text)}
            />
            <Pressable
              onPress={() => handleDeleteNote(index)}
            style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <PrimaryButton text="Concluído" type="done" color={CONST.lightGrey} />
          </Pressable >
          </View>
  )
}
keyExtractor = {(item, index) => index.toString()}
/>
    </SafeAreaProvider >
  );
}



export default Notebook;
