import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import React from 'react'
import app from './../../assets/images/app_logo.png'
import Colors from '../../assets/Shared/Colors'
import { Dimensions } from 'react-native'

export default function Login() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={app} style={styles.appImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}> Your Ultimate Doctor</Text>
        <Text style={styles.heading}> Appointment Booking App </Text>
        <Text style={styles.subHeading}> Book your appointment effortlessly with Hamdi </Text>
        <TouchableOpacity
          onPress={() => console.log("Clicked")}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login with Google </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appImage: {
    width: 300,
    height: 500,
    resizeMode: 'contain',
    marginTop: 50,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: '#000'
  },
  contentContainer: {
    backgroundColor: Colors.white,
    padding: 35,
    alignItems: 'center',
    marginTop: -50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subHeading: {
    textAlign: 'center',
    marginVertical: 20,
  },
  loginButton: {
    padding: 16,
    backgroundColor: Colors.blue,
    borderRadius: 45, // Adjusted to half of the component height
    alignItems: 'center',
    marginTop: -15,
    width: Dimensions.get('screen').width * 0.8,
  },
  loginButtonText: {
    fontSize: 17,
    color: Colors.white
  }
})
