import {ScrollView, View, Text } from 'react-native'
import React from 'react'
import DetailImage from '../../components/DetailImage'

export default function CoursesDetailScreen({navigation}) {
  return (
    <View>
        <ScrollView>
      <DetailImage
        title="Angular Eğitimi"
        imageSource={require('../../assets/angular.jpg')}
        desc="Kapsamlı Angular Eğitimi"
      />
      <DetailImage
        title="Bootstrap 5 Eğitimi"
        imageSource={require('../../assets/bootstrap5.png')}
        desc="Kapsamlı Bootstrap Eğitimi"
      />
      <DetailImage
        title="C Programlama Eğitimi"
        imageSource={require('../../assets/c.png')}
        desc="Kapsamlı C Programlama Eğitimi"
      />
    </ScrollView>
    </View>
  )
}