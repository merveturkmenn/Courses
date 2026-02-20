import { View, Text ,Button } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation} ) {
  return (


   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
      <Button
        title="Kurslarım"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate('CoursesDetails')}
      />
       <Button
        title="Sayaç Uygulaması"
        onPress={() => navigation.navigate('Counter')}
      />
       <Button
        title="Kutu Uygulaması"
        onPress={() => navigation.navigate('Box')}
      />
      <Button
        title="Banka Uygulaması"
        onPress={() => navigation.navigate('Bank')}
      />
      
    </View>
  )
}