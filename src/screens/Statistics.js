import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    textWhite:{
        color:'#fff'
    },
    textBlue:{
        color:"#6c63ff"
    },
    heading:{
        fontSize:40,
        fontWeight:"700",
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stats:{
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        backgroundColor:'#fff'
    },
    button1:{
        backgroundColor:'#6c63ff',
        paddingLeft: 140,
        paddingRight:140,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:50,
        marginTop:10
    },
    button2:{
        backgroundColor:'transparent',
        paddingLeft: 140,
        paddingRight:140,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:50,
        marginTop:10,
        borderWidth: 1,
        borderColor:'#6c63ff'
    },
    banner:{
        width:300,
        height:300,
        color:'#6c63ff'
    }
});

export default function Statistics() {
    return (
        <View style={styles.stats}>
            <Text>Statistics</Text>
        </View>
    )
}