import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

import {colors} from '../util/index';
const {primary,secondary}=colors;

export default function WeatherInfo({currentWeather}) {
    const{main:{temp},weather:[details],name}=currentWeather;
    const {icon,main,description}=details;

    const iconUrl=`https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.weatherInfo}>
        <Text style={styles.name}>{name}</Text>
        <Image style={styles.weatherImage} source={{uri:iconUrl}}/>
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.weatherDes}>{description}</Text>
      <Text style={styles.textMain}>{main}</Text>
      
    </View>
  )
}

const styles= StyleSheet.create(
    {
        weatherInfo:
        {
            alignItems:'center'
        },
        
        weatherImage:
        {
            height:100,
            width:100,
            
        },

        weatherDes:
        {
            textTransform:'capitalize',
            marginTop:5,
        },

        textPrimary:
        {
            fontSize:33,
            color:primary,
        },

        textMain:
        {
            fontSize:23,
            color:secondary,
            fontWeight:'500',
            margin:5,
        },
        name:
        {
            fontSize:18,
            fontWeight:'800'
        }
    }
)