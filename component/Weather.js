import React,{ useState} from 'react';
import { StyleSheet, Text, View , ImageBackground} from 'react-native';
import Forecast from './Forcast';
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text style={fontcolor.backdrop}>Zip Code</Text>
            <Text style={fontcolor.backdrop}>{props.zipCode}</Text>
            <Forecast {...forecastInfo} />
        </ImageBackground>
    );
}
const fontcolor = StyleSheet.create({
    backdrop: {
        color: '#fff',
        fontSize: 20,
    },
});
const styles = StyleSheet.create({
    backdrop: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
    },
});
   

   