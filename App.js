import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, YellowBox } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.ovuong}>
      <Text>Square 1</Text>
    </View>
    <View style={styles.ovuong2}>
      <Text>Square 2</Text>
  </View>
  <View style={styles.ovuong3}>
    <Text>Square 3</Text>
</View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex : 1,
    alignItems: 'center',
    justifyContent :'space-around',
  },
  ovuong:{
    width :100,
    height : 100,
    backgroundColor: 'cyan',
    alignItems: "center",
    justifyContent: "center",    

  },
  ovuong2 :{
    width :100,
    height : 100,
    backgroundColor: 'green',
    alignItems: "center",
    justifyContent: "center",   

  },
  ovuong3:{
    width :100,
    height : 100,
    backgroundColor: 'pink',
    alignItems: "center",
    justifyContent: "center",   
  }
  
});
