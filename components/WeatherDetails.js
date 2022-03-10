import { StyleSheet, Text, View } from "react-native";
import {React,useState} from "react";
import { colors } from "../util/index";
import { FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';
const { primary, secondary,border,grey } = colors;

const WeatherDetails = ({ currentWeather ,unitSystem}) => {
  const {
    main: { feels_like, humidity,pressure },
    wind:{speed},
  } = currentWeather;

  const windSpeed=unitSystem === 'metric'? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`

  return (
    <View style={styles.details}>
      <View style={styles.row}>
        <View style={styles.box}>
        <View style={styles.row}>
        <FontAwesome5 name="temperature-low" size={34} color={primary} />
        <View style={styles.item}>
        <Text>Feels like :</Text>
          <Text style={styles.text}>{feels_like}°</Text>
          </View>
          </View>
        </View>
        <View style={styles.box}>
        <View style={styles.row}>
        <MaterialCommunityIcons name="water" size={40} color={primary} />
        <View style={styles.item}>
        <Text>Humidity :</Text>
          <Text style={styles.text}>{humidity}%</Text>
          </View>
          </View>
        </View>
      </View>

      <View style={{...styles.row, borderTopWidth:1, borderTopColor:grey}}>
        <View style={styles.box}>
        <View style={styles.row}>
        <MaterialCommunityIcons name="speedometer" size={40} color={primary} />
        <View style={styles.item}>
        <Text>Pressure :</Text>
          <Text style={styles.text}>{pressure} hPa</Text>
          </View>
          </View>
        </View>
        <View style={styles.box}>
        <View style={styles.row}>
        <MaterialCommunityIcons name="weather-windy" size={38} color={primary} />
        <View style={styles.item}>
        <Text>Wind Speed:</Text>
          <Text style={styles.text}>{windSpeed}</Text>
          </View>
          </View>
        </View>
      </View>

    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  details: {
    width: "95%",
    marginTop: "auto",
    margin: 25,
    borderWidth: 1,
    borderColor:grey,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  box: {
    flex: 1,
    padding: 20,
    borderRightWidth:1,
    borderRightColor:grey,
  },
  item:
  {
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  text:
  {
    fontSize:17,
    color:secondary,
    fontWeight:'700',
    margin:7,
  }
});
