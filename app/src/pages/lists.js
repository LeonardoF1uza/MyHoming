import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';


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
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <View style={styles.header}>
            <Text style={styles.sectionTitle}>Shopping List</Text>
            <FontAwesome name='shopping-cart' size={24} color="#e5e1d8" marginTop={5}/>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Enter a note"
          value={currentNote}
          onChangeText={(text) => setCurrentNote(text)}
        />
        <Button title="Add Note" onPress={handleAddNote} />
      </View>

      <FlatList
        data={notes}
        renderItem={({ item, index }) => (
          <View style={styles.noteContainer}>
            <TextInput
              style={styles.noteInput}
              value={item}
              onChangeText={(text) => handleEditNote(index, text)}
            />
            <Button title="Delete" onPress={() => handleDeleteNote(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#b4d7dd',
    padding: 8,
  },
  noteContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  noteInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    backgroundColor: '#b4d7dd',
  },
  header: {
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    flexDirection: 'row',
    marginRight: 10,
    color: "#e5e1d8",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
};

export default Notebook;
