import React,{ useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Forecast(props) {
    return (
    <View >
        <Text style={fontcolor.backdrop}>{props.main}</Text>
        <Text style={fontcolor.backdrop}>{props.description}</Text>
        <Text style={fontcolor.backdrop}>{props.temp}</Text>
        <Text style={fontcolor.backdrop}>°C</Text>
    </View>
    );
}
const fontcolor = StyleSheet.create({
    backdrop: {
        color: '#fff',
        fontSize: 20,
    },
});