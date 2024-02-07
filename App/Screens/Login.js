import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import app from './../../assets/images/app_logo.png'
import Colors from '../../assets/Shared/Colors'
export default function Login() {
  return (
     <View style={{alignItems:'center'}}>
       <Image source={app_logo}
       style={styles.appImage}
       />
       <View style={{backgroundColor:Colors.white
         padding:25,
         alignItems:'center',
         marginTop:-50,
         borderTopLeftRadius:20,
         borderTopRightRadius:20,

   }}>
         <Text style={style.heading}> Your Utimate Doctor <Text/>
         <Text style={style.heading}> Appointment medical Booking App <Text/>
         <Text> Book your appointment effortlessly with Hamndi </Text>
         <TouchableOpacity 
         onPress={()=>console.log("Clicked")}
         style={{padding:16,
         backgroundColor:Colour.PRIMARY,
         borderRadius:98,
         alignItems:'center',
         MarginTop:20,
         width:Dimensions.get('screen').width*0.8,
         }}>
           <Text style={{frontsize:17,color:Colors.white}}> Login with Google </Text>
         </TouchableOpacity> 
      </View> 
   </View> 
  )
}

const styles = StyleSheet.create({
  appImage:{
    width:300,
    height:500,
    objectfit:'contain',
    marginTop:50
    borderRadius:20,
    borderwidth:6,
    bordercolor:'#000'
  },
    heading:{
         frontsize:28 ,
         fontWeight:"bold"
       }

})  