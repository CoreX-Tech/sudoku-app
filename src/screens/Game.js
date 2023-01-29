import { View, Text,StyleSheet,TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

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
    game:{
        height:'100%',
        alignItems:'center',
        display:'flex',
        backgroundColor:'#fff',
        justifyContent: 'center',
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
    },
    modeHeading:{
        fontWeight:'bold',
        fontSize:34,
        marginBottom:10
    },
    sudokoBox:{
        backgroundColor:'#fff',
        padding:10,
        marginTop:15,
        shadowColor: '#000',
        shadowOffset: { 
            width: 0, 
            height: 1 
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    sudokuInput:{
        width:35,
        height:35,
        backgroundColor:'#f4f4f4',
        alignItems:'center',
        justifyContent:'center',
    },
    timerSize:{
        fontSize:28,
        fontWeight:'bold',
        color:'#6c63ff'
    }
});

export default function Game({route}) {
    const { gameMode } = route.params;
    const [borderRow,setBorderRow] = useState(-1);
    const [borderCol,setBorderCol] = useState(-1);
    return (
        <View style={styles.game}>
            <Text style={styles.modeHeading}>{gameMode} Mode</Text>
            <View >
                <Text style={styles.timerSize}>01:15</Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent:'space-between',width:300,marginTop:10 }}>
                <Text>Play/Pause</Text>
                <Text>Try</Text>
            </View>
            <View style={styles.sudokoBox}>
                {[1,2,3,4,5,6,7,8,9].map((row)=>{
                    return (
                        <View key={row} style={[{flexDirection: 'row' },row%3===0?{borderBottomWidth:3,borderBottomColor:"#6c63ff"}:{borderBottomWidth:1,borderBottomColor:'#808080'},row===1?{borderTopWidth:3,borderTopColor:"#6c63ff"}:null]}>
                            {[1,2,3,4,5,6,7,8,9].map((col)=>{
                                return (
                                    <View key={row+col} style={[styles.sudokuInput,col%3===0?{borderRightWidth:3,borderRightColor:"#6c63ff"}:{borderRightWidth:1,borderRightColor:'#808080'},col===1?{borderLeftWidth:3,borderLeftColor:"#6c63ff"}:null]}>
                                        <Text>{row*col}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    )
                })}
            </View>
        </View>
    )
}