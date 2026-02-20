import { StyleSheet, Text, View , Button , TouchableOpacity , FlatList} from 'react-native'
import React , {useState} from 'react'

export default function BoxScreen() {
    const [colors, setColors] = useState([]); 

    const randomColors = ()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
     return `rgb(${red},${green},${blue})`;
    }
  return (
    <View style = {styles.container} >
      <TouchableOpacity 
            
                style={[styles.button, styles.boxBtn]} 
                onPress={() => { 
                setColors([...colors, randomColors()])
                }}
                > 
                <Text style={styles.buttonText}> Kutu Ekle </Text>
                </TouchableOpacity>

                <FlatList
                data={colors}
                renderItem={({item})=>{
                    return <View style={{
                        height:100, width:100, 
                        backgroundColor: item, 
                        marginVertical: 20,
                        alignItems: 'center', 
                        justifyContent: 'center'}} />
                }}
                />
                    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#f5f5f5',
    },
    button :{
       
       backgroundColor: '#75e73c',
        padding: 15, // İç boşluk
        borderRadius: 10,
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '60%',
        marginBottom: 10,
        
    },
    buttonText:{
        fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
    }
    
})