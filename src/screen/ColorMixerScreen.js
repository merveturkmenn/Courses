import React, { useReducer } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const reducer = (state, action) => {
  switch (action.type) {
    case 'kirmizi_degistir':
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        return state;
      }
      return { ...state, red: state.red + action.payload };

    case 'yesil_degistir':
      if (state.green + action.payload > 255 || state.green + action.payload < 0) {
        return state;
      }
      return { ...state, green: state.green + action.payload };

    case 'mavi_degistir':
      if (state.blue + action.payload > 255 || state.blue + action.payload < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.payload };

      case 'reset':
      return { red: 0, green: 0, blue:0 };

    default:
      return state;
  }
};

export default function ColorMixerScreen() {
 
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Renk Mikseri</Text>

      <View 
        style={[
          styles.box, 
          { backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }
        ]} 
      />

      <View style={styles.controls}>
   
        <ColorButton 
          colorName="Kırmızı" 
          onIncrease={() => dispatch({ type: 'kirmizi_degistir', payload: 20 })}
          onDecrease={() => dispatch({ type: 'kirmizi_degistir', payload: -20 })}
        />
        <ColorButton 
          colorName="Yeşil" 
          onIncrease={() => dispatch({ type: 'yesil_degistir', payload: 20 })}
          onDecrease={() => dispatch({ type: 'yesil_degistir', payload: -20 })}
        />
        <ColorButton 
          colorName="Mavi" 
          onIncrease={() => dispatch({ type: 'mavi_degistir', payload: 20 })}
          onDecrease={() => dispatch({ type: 'mavi_degistir', payload: -20 })}
        />
        <TouchableOpacity style={styles.resetButon}
          
          onPress={() => dispatch({ type: 'reset' })}
        >
          <Text style={styles.resetText}>RESET</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const ColorButton = ({ colorName, onIncrease, onDecrease }) => (
  <View style={styles.btnRow}>
    <Text style={styles.colorText}>{colorName}: </Text>
    <TouchableOpacity style={styles.btn} onPress={onIncrease}><Text>+</Text></TouchableOpacity>
    <TouchableOpacity style={styles.btn} onPress={onDecrease}><Text>-</Text></TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  box: { width: 200, height: 200, borderRadius: 20, marginBottom: 30, borderWidth: 1, borderColor: '#ddd' },
  controls: { width: '80%' },
  btnRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 },
  colorText: { fontSize: 18, fontWeight: '500',width: 80, },
  btn: { backgroundColor: '#f0f0f0', padding: 10, width: 40, alignItems: 'center', borderRadius: 5 },
  resetButon: { backgroundColor: '#ff4444', padding: 15, borderRadius: 10, marginTop: 10, alignItems: 'center' },
  resetText: { color: '#fff', fontWeight: 'bold', fontSize: 16  }

});