import { StyleSheet,ScrollView, View, Text, TouchableOpacity, Image,Modal } from 'react-native'
import React,{useEffect,useState} from 'react'
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
    home:{
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
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
    },
    modal:{
        height:100,
        width:50,
        position:'absolute',
        marginTop:22,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize:20,
        fontWeight:'bold'
    },
    gameMode:{
        display:'flex',
        width:250,
    },
    modeButton:{
        width:250,
        backgroundColor:'#f7f7f8',
        padding: 10,
        marginTop:10,
        borderRadius:10
    }
});

export default function Home() {
    const navigate = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(()=>{
        console.log("Home build")
    },[])
    const handleNewGame = (mode)=>{
        navigate.navigate("Game",{"gameMode":mode})
        setModalVisible(false)
    }
    return (
        <View style={styles.home}>
            <Modal
                animationType="ease-in"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>New Game Mode</Text>
                        <View style={styles.gameMode}>
                            <TouchableOpacity style={styles.modeButton} onPress={()=>handleNewGame("Casual")}>
                                <Text style={{fontSize:16.5,fontWeight:'bold'}}>😍 Casual mode</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modeButton} onPress={()=>handleNewGame("Easy")}>
                                <Text style={{fontSize:16.5,fontWeight:'bold'}}>😁 Easy mode</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modeButton} onPress={()=>handleNewGame("Medium")}>
                                <Text style={{fontSize:16.5,fontWeight:'bold'}}>😥 Medium mode</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modeButton} onPress={()=>handleNewGame("Hard")}>
                                <Text style={{fontSize:16.5,fontWeight:'bold'}}>😣 Hard mode</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Text style={[styles.heading,styles.textBlue]}>SUDOKU</Text>
            <View>
                <Image 
                    source={require('../images/sudoku.png')}
                    style={styles.banner}
                    resizeMode='contain'
                />
            </View>
            <TouchableOpacity style={styles.button1} onPress={() => setModalVisible(true)}>
                <Text style={styles.textWhite} >New Game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.textBlue}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}
