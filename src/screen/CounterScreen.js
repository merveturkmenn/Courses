import { StyleSheet, Text, View ,Button , TouchableOpacity} from 'react-native'
import React , { useState }from 'react'

export default function CounterScreen() {

 const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
    
        <TouchableOpacity 
      
          style={[styles.button, styles.increaseBtn]} 
          onPress={() => setCounter(counter + 1)}
        >
           <Text style={styles.buttonText}>Artır</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.decreaseBtn]} 
          onPress={() => setCounter(counter - 1)}
        >
          <Text style={styles.buttonText}>Azalt</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button , styles.resetBtn]} 
        onPress={() => setCounter(0)}
      >
        <Text style={styles.buttonText}>Sıfırla</Text>
      </TouchableOpacity>
        
        

    <Text style={styles.text}> Sayı : {counter} </Text>
  
    </View>
  )
}

const styles = StyleSheet.create({
container : {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
  padding: 50,
},
button:{
 paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    minWidth: 120,
    alignItems: 'center',
},
increaseBtn: {
    backgroundColor: '#2ecc71',
  },
  decreaseBtn:{
    backgroundColor: '#e74c3c',
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  resetBtn:{
 backgroundColor: 'rgb(201, 96, 22)',
  }
})