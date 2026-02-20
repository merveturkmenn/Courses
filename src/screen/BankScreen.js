import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React , {useReducer}  from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'para_yatir':
      return { ...state, bakiye: state.bakiye + 100 };
    case 'para_cek':
      
      if (state.bakiye <= 0) {
        return state; 
      }
      return { ...state, bakiye: state.bakiye - 100 };
    case 'sifirla':
      return { bakiye: 0 };
    default:
      return state;
  }
};


export default function BankScreen() {

  const [state, dispatch] = useReducer(reducer, { bakiye: 0 });
  return (
<View style={styles.container}>
      <Text style={styles.title}>Banka Hesabım</Text>
      <Text style={styles.balance}>{state.bakiye} TL</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => dispatch({ type: 'para_yatir' })}
        >
          <Text style={styles.btnText}>100 TL Yatır</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#e74c3c' }]} 
          onPress={() => dispatch({ type: 'para_cek' })}
        >
          <Text style={styles.btnText}>100 TL Çek</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#95a5a6' }]} 
          onPress={() => dispatch({ type: 'sifirla' })}
        >
          <Text style={styles.btnText}>Hesabı Boşalt</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ecf0f1' },
  title: { fontSize: 24, fontWeight: 'bold' },
  balance: { fontSize: 48, marginVertical: 20, color: '#2ecc71' },
  buttonContainer: { width: '80%' },
  button: { backgroundColor: '#3498db', padding: 15, borderRadius: 10, marginVertical: 5, alignItems: 'center' },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 18 }


})