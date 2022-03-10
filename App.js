import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';
import React,{useEffect,useState} from 'react';
import WeatherInfo from './components/WeatherInfo';
import UnitsPicker from './components/unitspicker';
 import {colors}from './util/index'
import WeatherDetails from './components/WeatherDetails'
 import ReloadApp from './components/ReloadApp';

 const {primary,secondary}=colors;

const API_KEY="95a59ad27e95f0623e216b1bac0485a8";
const BASE_WEATHER_URL='https://api.openweathermap.org/data/2.5/weather?';

export default function App() {

const [errMsg,setErrorMsg]=useState(null);
const [currentWeather,setCurrentWeather]=useState(null);
const [unitSystem,setUnitSystem]=useState('metric');

  useEffect(()=>
  {
    load()
  }, [unitSystem])

  async function load(){
    setCurrentWeather(null);
    setErrorMsg(null);
    try {
      let{status}= await Location.requestForegroundPermissionsAsync();

      if(status!== 'granted'){
      setErrorMsg("Location permission denied");
      return
    }

      const location= await Location.getCurrentPositionAsync();
      const {latitude,longitude} = location.coords

     // console.log({latitude},{longitude});
      const weatherUrl=`${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${API_KEY}`

      const response= await fetch(weatherUrl);

      const result= await response.json();

      if(response.ok)
      setCurrentWeather(result);
      else
      setErrorMsg(result.message);

    } catch (error) {
      setErrorMsg(error.message);
    }
  }
  if(currentWeather)
  {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.box}>
          <ReloadApp load={load}/>
          <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem}/>
          <WeatherInfo currentWeather={currentWeather}/>
          </View>
          <WeatherDetails currentWeather={currentWeather} unitSystem={unitSystem}/>
      </View>
    );
  }

  else if(errMsg)
  {
    return (
      <View style={styles.container}>
         <ReloadApp load={load}/>
        <Text style={{textAlign:'center'}}>{errMsg}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  else
  {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color={primary}/>
        <StatusBar style="auto" />
        
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box:{
    flex:1,
    justifyContent:'center',
  }
});
