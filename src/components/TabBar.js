import React from 'react'
import { Text, View,StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackBar from './StackBar';
import Statistics from '../screens/Statistics';
import Explore from '../screens/Explore';
import DailyChallenge from '../screens/DailyChallenge';
import Icon from 'react-native-vector-icons/Ionicons'


// tabBarShowLabel:false,

const Tab = createBottomTabNavigator();

// Styles
const style = StyleSheet.create({
    navPosition:{
        display:'flex',
        alignItems:'center'
    }
})

export default function TabBar() {
    return (
        <NavigationContainer>
            <Tab.Navigator  screenOptions={({route})=>({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { 
                    position: 'absolute',
                    height:80,
                    paddingBottom:15,
                    paddingTop:15,
                    backgroundColor:'#f4f4f4'
                },
                tabBarIcon:({color,focused})=>{
                    let iconName;
                    if(route.name==="Home"){
                        iconName = focused?'home':'home-outline';
                    }
                    if(route.name==="Statistics"){
                        iconName = focused?'stats-chart':'stats-chart-outline';
                    }
                    if(route.name==="Challenge"){
                        iconName = focused?'calendar':'calendar-outline';
                    }
                    if(route.name==="Explore"){
                        iconName = focused?'grid':'grid-outline';
                    }
                    return (
                        <View style={style.navPosition}>
                            <Icon name={iconName} size={22} color={focused?"#6c63ff":"gray"} />
                            <Text style={focused?{color:'#6c63ff'}:{color:'gray'}} >{route.name}</Text>
                        </View>
                    )
                }
            })}>
                <Tab.Screen  name="Home" component={StackBar}/>
                <Tab.Screen name="Challenge" component={DailyChallenge} />
                <Tab.Screen name="Explore" component={Explore} />
                <Tab.Screen name="Statistics" component={Statistics} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
