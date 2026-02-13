import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function DetailScreen({ navigation }) {
  const courses = [
    { name: 'Angular', id: '1' },
    { name: 'C#', id: '2' },
    { name: 'JS', id: '3' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  itemBox: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});