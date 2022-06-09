import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Jorge'},
          {key: 'Janeth'},
          {key: 'Daniel'},
          {key: 'Rodrigo'},
          {key: 'Roberto'},
          {key: 'Ramiro'},
          {key: 'John'},
          {key: 'Alejandro'},
          {key: 'Adriana'},
          {key: 'Pamela'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FlatListBasics;
