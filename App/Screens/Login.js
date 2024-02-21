import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react'
import app from './../../assets/images/app_logo.png'
import Colors from '../../assets/Shared/Colors'
import { Dimensions } from 'react-native'

export default function Login() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={app}
        style={styles.appImage}
      />
      <View style={
        {
          backgroundColor: Colors.white,
          padding: 25,
          alignItems: 'center',
          marginTop: -50,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Text style={styles.heading}> Your Utimate Doctor
          <Text> Appointment medical Booking App </Text>
          <Text> Book your appointment effortlessly with Hamndi </Text>
        </Text>
        <TouchableOpacity
          onPress={() => console.log("Clicked")}
          style={
            {
              padding: 16,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 98,
              alignItems: 'center',
              marginTop: 20,
              width: Dimensions.get('screen').width * 0.8,
            }}>
          <Text style={{ fontSize: 17, color: Colors.white }}> Login with Google </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appImage: {
    width: 300,
    height: 500,
    objectFit: 'contain',
    marginTop: 50,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: '#000'
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold"
  }
})